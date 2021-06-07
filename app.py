from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS #para poder permitir peticiones a mi API

#python necesita un entorno virtual:
#source /home/ruta-python/entornovirtual/bin/activate --> aparece un (env)
#python3 src/app.py
#se puede instalar las dependencias dentro del entorno virtual para tenerlos disponibles
#dentro del entorno.

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://agustina:agustina@localhost/flaskmysql'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
cors = CORS(app, resources={"*": {"origins": "*"}}) #todas las peticiones "*"

db = SQLAlchemy(app)
ma = Marshmallow(app) #leer bien para que se usan las dos

#defino columnas para la nueva tabla de base de datos
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(70), unique=True)

    def __init__(self,text):
        self.text = text

db.create_all()

#defino eschema

class MessageSchema(ma.Schema):
    class Meta:
        fields = ('id', 'text')

message_schema = MessageSchema()
messages_schema = MessageSchema(many=True)

#defino rutas
@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/message', methods=['POST']) #probar con post y get juntos
def create_message():
    
    text= request.json['text']

    new_message = Message(text)

    db.session.add(new_message)
    db.session.commit()

    return message_schema.jsonify(new_message)
    #print(request.json)
    #return 'received'

@app.route('/message',methods=['GET'])
def get_messages():
    all_messages = Message.query.all() #peticion de mysql como select * from message
    result = messages_schema.dump(all_messages)
    return jsonify(result)

@app.route('/message/<id>', methods=['GET']) 
def get_message(id):
    message = Message.query.get(id) #peticion de mysql como select * from message where id=<id>
    return message_schema.jsonify(message)

@app.route('/message/<id>',methods=['PUT'])
def update_message(id):

    message = Message.query.get(id) 
    text = request.json['text']
    message.text = text

    db.session.commit()
    return message_schema.jsonify(message)

@app.route('/message/<id>',methods=['DELETE'])
def delete_message(id):
    message=Message.query.get(id)
    db.session.delete(message)
    db.session.commit()
    #if message:
    return "Message successfully deleted"
    #else:
        #return print("Error 404: Not found")
    #devolver mensaje de 404 Not found - no response

if __name__ == "__main__":
    app.run(debug=True)

#investigar el debug 


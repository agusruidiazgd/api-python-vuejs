(function(e){function t(t){for(var a,l,c=t[0],r=t[1],u=t[2],i=0,p=[];i<c.length;i++)l=c[i],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},s={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"4c11":function(e,t,n){"use strict";n("fd3e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("button",{class:e.btnHeader,on:{click:function(t){e.displayNewMsgModal=!e.displayNewMsgModal}}},[e._v(" Add new message "),n("font-awesome-icon",{attrs:{icon:"plus"}})],1)]),e.displayModal?n("UpdateModal",{attrs:{updateElement:e.updateElement},on:{close:e.close,update:e.updateAndClose}}):e._e(),e.displayNewMsgModal?n("UpdateModal",{attrs:{updateElement:e.updateElement},on:{close:e.close,update:e.updateAndClose}},[n("template",{slot:"header"},[n("h3",[e._v("Add new message")])]),n("template",{slot:"body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.valuePost,expression:"valuePost"}],attrs:{type:"text",placeholder:"Write a message please"},domProps:{value:e.valuePost},on:{input:function(t){t.target.composing||(e.valuePost=t.target.value)}}})]),n("template",{slot:"footer"},[n("button",{on:{click:function(t){return e.postAndClose(e.valuePost)}}},[e._v(" Add message ")])])],2):e._e(),n("Table",{attrs:{message:e.messages,"select-element":e.updateElement},on:{click:e.deleteMessage,"click-update":e.showModal}})],1)},o=[],l=n("bc3a"),c=n.n(l),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{class:e.tableClass,attrs:{id:"msg-table"}},[e._m(0),n("tbody",[e._l(e.message,(function(t){return[n("tr",{key:t.id},[n("td",[e._v(e._s(t.text))]),n("td",[n("button",{class:e.btnUpdate,on:{click:function(n){return e.showUpdateModal(t)}}},[n("font-awesome-icon",{attrs:{icon:"pen"}})],1)]),n("td",[n("button",{class:e.btnDelete,on:{click:function(n){return e.deleteMsg(t.id)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])]}))],2)])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"t-head"},[n("tr",[n("th",[e._v("API - Messages:")]),n("th",[e._v("Edit")]),n("th",[e._v("Delete")])])])}],d={name:"table",props:{message:Array,showModal:Boolean,updateElement:Object},data:function(){return{btnDelete:"btn delete",btnUpdate:"btn update",tableClass:"msg-table"}},computed:{},methods:{deleteMsg:function(e){this.$emit("click",e)},showUpdateModal:function(e){var t;t=e,this.$emit("click-update",t)}}},i=d,p=(n("76a5"),n("2877")),f=Object(p["a"])(i,r,u,!1,null,null,null),m=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("button",{staticClass:"close-button",on:{click:function(t){return e.$emit("close")}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1),n("div",{staticClass:"modal-header"},[e._t("header",[n("h3",[e._v("Update message")])])],2),n("div",{staticClass:"modal-body"},[e._t("body",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.updateElement.text,expression:"updateElement.text"}],attrs:{type:"text"},domProps:{value:e.updateElement.text},on:{input:function(t){t.target.composing||e.$set(e.updateElement,"text",t.target.value)}}})])],2),n("div",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"modal-button",on:{click:function(t){return e.$emit("update",e.updateElement)}}},[e._v(" Update message ")])])],2)])])])},h=[],v={name:"MessageModal",props:{updateElement:Object}},b=v,M=(n("4c11"),Object(p["a"])(b,g,h,!1,null,null,null)),y=M.exports,w="http://127.0.0.1:5000/message",_={name:"App",components:{Table:m,UpdateModal:y},data:function(){return{messages:[],display:!1,valuePost:null,displayPost:!1,displayNewMsgModal:!1,btnHeader:"btn-header",keyMessage:"",displayModal:!1,updateElement:{text:null,id:null}}},mounted:function(){this.getAllMessages()},methods:{getAllMessages:function(){var e=this;c.a.get(w).then((function(t){e.messages=t.data,console.log(t.data)})).catch((function(e){return console.log("error getting messages:",e)}))},postMessage:function(e){var t=this;c.a.post(w,{text:e}).then((function(e){return t.getAllMessages(),console.log(e.data)})).catch((function(e){return console.log("error posting a message:",e)}))},deleteMessage:function(e){var t=this;c.a.delete("".concat(w,"/").concat(e)).then((function(e){return t.getAllMessages(),console.log("Deleted message:",e.data)})).catch((function(e){return console.log(e)}))},updateMessage:function(e){c.a.put("".concat(w,"/").concat(e.id),{text:e.text}).then((function(e){return console.log("Message updated successfully:",e.data)})).catch((function(e){return console.log("error updating message:",e)}))},showModal:function(e){this.updateElement=e,this.displayModal=!0},updateAndClose:function(e){this.displayModal=!1,this.updateMessage(e)},close:function(){this.displayNewMsgModal=!1,this.displayModal=!1,console.log("close")},postAndClose:function(e){if(null==e)return alert("There are not a message to add");this.close(),this.postMessage(e),this.getAllMessages(),this.valuePost=null}}},x=_,E=(n("034f"),Object(p["a"])(x,s,o,!1,null,null,null)),P=E.exports,k=n("ecee"),A=n("c074"),C=n("ad3d");k["c"].add(A["d"]),k["c"].add(A["a"]),k["c"].add(A["c"]),k["c"].add(A["b"]),a["a"].component("font-awesome-icon",C["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(P)}}).$mount("#app")},"694f":function(e,t,n){},"76a5":function(e,t,n){"use strict";n("694f")},"85ec":function(e,t,n){},fd3e:function(e,t,n){}});
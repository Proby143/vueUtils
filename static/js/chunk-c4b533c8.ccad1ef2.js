(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4b533c8"],{a8ec:function(e,t,o){"use strict";o("fdee")},d703:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"waterMarker",rawName:"v-waterMarker",value:e.waterMarker,expression:"waterMarker"}],staticClass:"hello"},[o("div",[o("button",{directives:[{name:"debounceTime",rawName:"v-debounceTime"}],on:{click:e.debounceClick}},[e._v("防抖")])]),o("div",[o("button",{directives:[{name:"copy",rawName:"v-copy",value:e.copyText,expression:"copyText"}]},[e._v("复制")])]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.copyText,expression:"copyText"},{name:"emoji",rawName:"v-emoji"}],attrs:{type:"text"},domProps:{value:e.copyText},on:{input:function(t){t.target.composing||(e.copyText=t.target.value)}}})]),o("div",[o("button",{directives:[{name:"longpress",rawName:"v-longpress",value:e.longpress,expression:"longpress"}]},[e._v("长按")])]),o("div",[o("button",{directives:[{name:"permission",rawName:"v-permission",value:"1",expression:"'1'"}]},[e._v("权限按钮1")]),o("button",{directives:[{name:"permission",rawName:"v-permission",value:"5",expression:"'5'"}]},[e._v("权限按钮2")])]),o("div",[o("el-input",{directives:[{name:"maxLen",rawName:"v-maxLen"}],attrs:{type:"textarea"},model:{value:e.copyText,callback:function(t){e.copyText=t},expression:"copyText"}}),o("el-form",[o("el-form-item",[o("el-input",{attrs:{type:"text"},model:{value:e.copyText,callback:function(t){e.copyText=t},expression:"copyText"}})],1)],1)],1),o("el-button",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("展示dialog")]),o("el-dialog",{directives:[{name:"draggable",rawName:"v-draggable"},{name:"dialogSize",rawName:"v-dialogSize"}],attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v("这是一段信息")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),o("div",{directives:[{name:"dragBorder",rawName:"v-dragBorder"}],staticStyle:{background:"blue",width:"50px",height:"50px","border-radius":"50%"}},[e._v("fdfsfsdf")])],1)},a=[],n={name:"HelloWorld",props:{},data:function(){return{canClick:!0,dialogVisible:!1,waterMarker:{text:"版权所有",textColor:"rgba(180, 180, 180, 0.4)"},copyText:"fdsafsdaffdsa"}},methods:{jieLiu:function(){console.log("-----888---\x3e","fsdfsdffsdfsfsfdsfds"),this.copyText="werwrerwr"},clickOutside:function(){console.log("------\x3e","点击了外面")},longpress:function(){console.log("长按指令生效")},handleClick:function(){console.log("----handleClick-----")},debounceClick:function(){console.log("只触发一次")}},created:function(){}},r=n,s=(o("a8ec"),o("2877")),l=Object(s["a"])(r,i,a,!1,null,"6b43ac6e",null);t["default"]=l.exports},fdee:function(e,t,o){}}]);
//# sourceMappingURL=chunk-c4b533c8.ccad1ef2.js.map
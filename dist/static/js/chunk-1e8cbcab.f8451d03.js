(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e8cbcab"],{"223e":function(t,i,e){"use strict";e("eebd")},"2e4d":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("ezflycard",{attrs:{cardWidth:300,cardHeight:120,throwTriggerDistance:100,dragDirection:"horizontal",hasShadow:!0},on:{onDragMove:t.onCardDragMove,onDragStop:t.onCardDragStop,onThrowDone:t.onCardThrowDone}},[e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{slot:"firstCard"},slot:"firstCard"},[t.cards[0]?e("div",{staticClass:"zhihuCard"},[e("div",[t._v(t._s(t.cards[0].title))]),e("div",[e("div",[t._v(t._s(t.cards[0].followcount)+" 关注")]),e("div",[e("button",{attrs:{disabled:""}},[t._v("忽略")]),e("button",{attrs:{type:"primary"}},[t._v("回答")])])])]):t._e()]),e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{slot:"secondCard"},slot:"secondCard"},[t.cards[1]?e("div",{staticClass:"zhihuCard"},[e("div",[t._v(t._s(t.cards[1].title))]),e("div",[e("div",[t._v(t._s(t.cards[1].followcount)+" 关注")]),e("div",[e("button",{attrs:{disabled:""}},[t._v("忽略")]),e("button",{attrs:{type:"primary"}},[t._v("回答")])])])]):t._e()]),e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{slot:"thirdCard"},slot:"thirdCard"},[t.cards[2]?e("div",{staticClass:"zhihuCard"},[e("div",[t._v(t._s(t.cards[2].title))]),e("div",[e("div",[t._v(t._s(t.cards[2].followcount)+" 关注")]),e("div",[e("button",{attrs:{disabled:""}},[t._v("忽略")]),e("button",{attrs:{type:"primary"}},[t._v("回答")])])])]):t._e()])])],1)},s=[],r=(e("a434"),e("d93e")),o={components:{ezflycard:r["a"]},data:function(){return{title:"Hello",cards:[{title:"js数组怎么遍历删除指定元素，最后全部删除？",followcount:6},{title:"前端自学，前后端的交互应该学哪些，要重点学哪里？",followcount:13},{title:"我们花那么多时间在游戏《塞尔达传说：旷野之息》里，到底得到了什么？",followcount:29},{title:"跪求这个图片用HTML，CSS如何做出来？",followcount:6}]}},onLoad:function(){},methods:{onCardDragMove:function(t){},onCardDragStop:function(t){},onCardThrowDone:function(t){var i=this.cards[0];this.cards.splice(0,1),this.cards.push(i)}}},h=o,n=(e("223e"),e("2877")),d=Object(n["a"])(h,a,s,!1,null,null,null);i["default"]=d.exports},5899:function(t,i){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,i,e){var a=e("1d80"),s=e("5899"),r="["+s+"]",o=RegExp("^"+r+r+"*"),h=RegExp(r+r+"*$"),n=function(t){return function(i){var e=String(a(i));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(h,"")),e}};t.exports={start:n(1),end:n(2),trim:n(3)}},7156:function(t,i,e){var a=e("861d"),s=e("d2bb");t.exports=function(t,i,e){var r,o;return s&&"function"==typeof(r=i.constructor)&&r!==e&&a(o=r.prototype)&&o!==e.prototype&&s(t,o),t}},"78be":function(t,i,e){},a434:function(t,i,e){"use strict";var a=e("23e7"),s=e("23cb"),r=e("a691"),o=e("50c4"),h=e("7b0b"),n=e("65f0"),d=e("8418"),c=e("1dde"),l=e("ae40"),f=c("splice"),u=l("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,w=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!u},{splice:function(t,i){var e,a,c,l,f,u,b=h(this),m=o(b.length),C=s(t,m),y=arguments.length;if(0===y?e=a=0:1===y?(e=0,a=m-C):(e=y-2,a=g(p(r(i),0),m-C)),m+e-a>w)throw TypeError(v);for(c=n(b,a),l=0;l<a;l++)f=C+l,f in b&&d(c,l,b[f]);if(c.length=a,e<a){for(l=C;l<m-a;l++)f=l+a,u=l+e,f in b?b[u]=b[f]:delete b[u];for(l=m;l>m-a+e;l--)delete b[l-1]}else if(e>a)for(l=m-a;l>C;l--)f=l+a-1,u=l+e-1,f in b?b[u]=b[f]:delete b[u];for(l=0;l<e;l++)b[l+C]=arguments[l+2];return b.length=m-a+e,c}})},a9e3:function(t,i,e){"use strict";var a=e("83ab"),s=e("da84"),r=e("94ca"),o=e("6eeb"),h=e("5135"),n=e("c6b6"),d=e("7156"),c=e("c04e"),l=e("d039"),f=e("7c73"),u=e("241c").f,p=e("06cf").f,g=e("9bf2").f,w=e("58a8").trim,v="Number",b=s[v],m=b.prototype,C=n(f(m))==v,y=function(t){var i,e,a,s,r,o,h,n,d=c(t,!1);if("string"==typeof d&&d.length>2)if(d=w(d),i=d.charCodeAt(0),43===i||45===i){if(e=d.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(d.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+d}for(r=d.slice(2),o=r.length,h=0;h<o;h++)if(n=r.charCodeAt(h),n<48||n>s)return NaN;return parseInt(r,a)}return+d};if(r(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,D=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof D&&(C?l((function(){m.valueOf.call(e)})):n(e)!=v)?d(new b(y(i)),e,D):y(i)},x=a?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;x.length>T;T++)h(b,S=x[T])&&!h(D,S)&&g(D,S,p(b,S));D.prototype=m,m.constructor=D,o(s,v,D)}},b447:function(t,i,e){"use strict";e("78be")},d93e:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{position:"relative",height:"100%",width:"100%","margin-top":"150px"},style:{paddingLeft:t.paddingLeft+"px"}},[e("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},style:{width:t.cardWidth+"px",height:t.cardHeight+"px"}},[e("div",{staticClass:"card",class:{animation:t.isAnimating,shadowEffect:t.hasShadow,boderEffect:t.hasBorder},staticStyle:{"z-index":"13"},style:{width:t.cardWidth+"px",height:t.cardHeight+"px",left:t.left+"px",top:t.top+"px","border-radius":t.borderRadius+"px",backgroundColor:t.cardBgColor},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchcancel:t.touchCancel,touchend:t.touchCancel}},[t._t("firstCard")],2),e("div",{staticClass:"card",class:{animation:t.isAnimating,shadowEffect:t.hasShadow,boderEffect:t.hasBorder},staticStyle:{"z-index":"12"},style:{width:t.width2+"px",height:t.height2+"px",left:t.left2+"px",top:t.top2+"px","border-radius":t.borderRadius+"px",backgroundColor:t.cardBgColor}},[t._t("secondCard")],2),e("div",{staticClass:"card",class:{animation:t.isAnimating,shadowEffect:t.hasShadow,boderEffect:t.hasBorder},staticStyle:{"z-index":"11"},style:{width:t.width3+"px",height:t.height3+"px",left:t.left3+"px",top:t.top3+"px","border-radius":t.borderRadius+"px",backgroundColor:t.cardBgColor}},[t._t("thirdCard")],2),e("div",{staticClass:"card",class:{animation:t.isAnimating,shadowEffect:t.hasShadow,boderEffect:t.hasBorder},staticStyle:{"z-index":"10"},style:{width:t.width4+"px",height:t.height4+"px",left:t.left4+"px",top:t.top4+"px","border-radius":t.borderRadius+"px",backgroundColor:t.cardBgColor,opacity:t.opacity4}})])])},s=[],r=(e("a9e3"),{props:{cardWidth:{type:Number,default:260},cardHeight:{type:Number,default:300},leftPad:{type:Number,default:10},topPad:{type:Number,default:6},cardBgColor:{type:String,default:"#fff"},dragDirection:{type:String,default:"all"},borderRadius:{type:Number,default:10},throwTriggerDistance:{type:Number,default:100},throwDistance:{type:Number,default:1e3},hasBorder:{type:Boolean,default:!1},hasShadow:{type:Boolean,default:!0}},data:function(){return{left:0,top:0,startLeft:0,startTop:0,isDrag:!1,isThrow:!1,needBack:!1,isAnimating:!1,left2:0,top2:0,width2:0,height2:0,left3:0,top3:0,width3:0,height3:0,left4:0,top4:0,width4:0,height4:0,opacity4:0,paddingLeft:0,paddingTop:0}},methods:{getDistance:function(t,i,e,a){var s=Math.abs(t-e),r=Math.abs(i-a);return Math.sqrt(s*s+r*r)},touchStart:function(t){if(!this.isAnimating){this.isDrag=!0,this.needBack=!1,this.isThrow=!1;var i=t.touches[0];this.startLeft=i.clientX-this.left,this.startTop=i.clientY-this.top,this.onDragStart()}},touchMove:function(t){if(!this.isAnimating){var i=t.touches[0];"all"!=this.dragDirection&&"horizontal"!=this.dragDirection||(this.left=i.clientX-this.startLeft),"all"!=this.dragDirection&&"vertical"!=this.dragDirection||(this.top=i.clientY-this.startTop);var e=this.getDistance(0,0,this.left,this.top);this.onDragMove({left:this.left,top:this.top,distance:e})}},touchCancel:function(t){var i=this.getDistance(0,0,this.left,this.top);if(this.isDrag=!1,this.onDragStop({left:this.left,top:this.top,distance:i}),!this.isAnimating){t.touches[0],i=this.getDistance(0,0,this.left,this.top);i>this.throwTriggerDistance?this.makeCardThrow():this.makeCardBack()}},resetAllCardDown:function(){this.left=0,this.top=0,this.width2=this.cardWidth-2*this.leftPad,this.height2=this.cardHeight-2*this.topPad,this.left2=this.leftPad,this.top2=3*this.topPad,this.width3=this.cardWidth-4*this.leftPad,this.height3=this.cardHeight-4*this.topPad,this.left3=2*this.leftPad,this.top3=6*this.topPad,this.width4=this.cardWidth-6*this.leftPad,this.height4=this.cardHeight-6*this.topPad,this.left4=3*this.leftPad,this.top4=9*this.topPad,this.opacity4=0},resetAllCard:function(){this.resetAllCardDown()},makeCardThrow:function(){var t=this;this.isThrow=!0,this.needBack=!1;var i=Math.atan2(this.top-0,this.left-0);this.left=Math.cos(i)*this.throwDistance,this.top=Math.sin(i)*this.throwDistance,this.width2=this.cardWidth,this.height2=this.cardHeight,this.left2=0,this.top2=0,this.width3=this.cardWidth-2*this.leftPad,this.height3=this.cardHeight-2*this.topPad,this.left3=this.leftPad,this.top3=3*this.topPad,this.width4=this.cardWidth-4*this.leftPad,this.height4=this.cardHeight-4*this.topPad,this.left4=2*this.leftPad,this.top4=6*this.topPad,this.opacity4=1,this.isAnimating=!0,this.onThrowStart(),setTimeout((function(){t.isThrow=!1,t.isAnimating=!1,t.onThrowDone(),t.resetAllCard()}),400)},makeCardBack:function(){var t=this;this.isThrow=!1,this.needBack=!0,this.needBack&&(this.left=0,this.top=0),this.isAnimating=!0,setTimeout((function(){t.onThrowFail(),t.isAnimating=!1,t.needBack=!0}),600)},onDragStart:function(){this.$emit("onDragStart")},onDragMove:function(t){this.$emit("onDragMove",t)},onDragStop:function(t){this.$emit("onDragStop",t)},onThrowFail:function(){this.$emit("onThrowFail")},onThrowStart:function(){this.$emit("onThrowStart")},onThrowDone:function(){this.$emit("onThrowDone")}},mounted:function(){this.resetAllCard()}}),o=r,h=(e("b447"),e("2877")),n=Object(h["a"])(o,a,s,!1,null,null,null);i["a"]=n.exports},eebd:function(t,i,e){}}]);
//# sourceMappingURL=chunk-1e8cbcab.f8451d03.js.map
(this.webpackJsonpwordcount=this.webpackJsonpwordcount||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(9),n(1));var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(e),u=Object(i.a)(c,2),l=u[0],s=u[1],m=Object(a.useState)(!1),d=Object(i.a)(m,2),f=d[0],h=d[1],b=Object(a.useState)(0),g=Object(i.a)(b,2),v=g[0],w=g[1],j=Object(a.useRef)(null),p=Object(a.useState)(0),E=Object(i.a)(p,2),O=E[0],x=E[1];return Object(a.useEffect)((function(){f&&l>0?setTimeout((function(){s((function(e){return e-1}))}),1e3):0===l&&(h(!1),w(function(e){return e.trim().split(" ").filter((function(e){return""!==e})).length}(r)),x(v))}),[l,f]),{result:O,textBoxRef:j,handleChange:function(e){var t=e.target.value;o(t)},text:r,isTimeRunning:f,timeRemaining:l,startGame:function(){h(!0),s(e),o(""),w(0),j.current.disabled=!1,j.current.focus()},wordCount:v}};var l=function(){var e=u(5),t=e.result,n=e.textBoxRef,a=e.handleChange,o=e.text,c=e.isTimeRunning,i=e.timeRemaining,l=e.startGame,s=e.wordCount;return r.a.createElement("div",{className:"game"},r.a.createElement("h1",null,"Word Typing Game"),r.a.createElement("h4",null,"How fast do you type?"),r.a.createElement("textarea",{ref:n,onChange:a,value:o,disabled:!c}),r.a.createElement("h3",null,"Time remaining: ",i),r.a.createElement("button",{onClick:l,disabled:c},"Start"),r.a.createElement("h1",null,"Word count: ",s),r.a.createElement("h4",null,"previous result: ",t," "),r.a.createElement("h3",{className:"watermark"},"React App."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.cce1f557.chunk.js.map
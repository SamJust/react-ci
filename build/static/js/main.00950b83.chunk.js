(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(11),i=n.n(s),c=(n(23),n(12)),r=n(13),u=n(16),l=n(14),h=n(17),m=(n(24),n(15)),d=n.n(m),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={message:"Loading"},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/").then((function(t){e.setState({message:t.data})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"TEXT!",this.state.message))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.00950b83.chunk.js.map
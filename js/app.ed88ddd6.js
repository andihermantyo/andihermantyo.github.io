(function(t){function e(e){for(var r,c,u=e[0],s=e[1],i=e[2],l=0,p=[];l<u.length;l++)c=u[l],o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function c(t){return u.p+"js/"+({about:"about",contact:"contact",home:"home",services:"services"}[t]||t)+"."+{about:"c712fdd0",contact:"dd8ef0a2",home:"3429a8eb",services:"4f9696f9"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t),a=function(e){s.onerror=s.onload=null,clearTimeout(i);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var i=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17dc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column",attrs:{id:"app"}},[n("Header",{attrs:{brand:"andihermantyo"}}),n("router-view"),n("Footer")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"masthead mb-auto"},[n("div",[n("h3",{staticClass:"masthead-brand"},[t._v(t._s(t.brand))]),n("Nav")],1)])},u=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav nav-masthead justify-content-center"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/services"}},[t._v("Services")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)},i=[],l={name:"Nav"},f=l,p=n("2877"),d=Object(p["a"])(f,s,i,!1,null,null,null),v=d.exports,m={name:"Header",props:{brand:String},components:{Nav:v}},h=m,b=Object(p["a"])(h,c,u,!1,null,null,null),_=b.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mastfoot mt-auto"},[n("div",[n("p",[t._v("\n      Cover template for "),n("a",{attrs:{href:"https://getbootstrap.com/"}},[t._v("Bootstrap")]),t._v(", by\n      "),n("a",{attrs:{href:"https://twitter.com/mdo"}},[t._v("@mdo")]),t._v(".\n    ")])])])}],w={name:"Footer"},j=w,x=Object(p["a"])(j,y,g,!1,null,null,null),k=x.exports,C={name:"app",components:{Header:_,Footer:k}},O=C,E=Object(p["a"])(O,o,a,!1,null,null,null),P=E.exports,S=n("8c4f");r["a"].use(S["a"]);var $=new S["a"]({mode:"history",base:"/",linkExactActiveClass:"active",routes:[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/services",name:"services",component:function(){return n.e("services").then(n.bind(null,"f23e"))}},{path:"/contact",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("f9e3"),n("17dc");r["a"].config.productionTip=!1,new r["a"]({router:$,render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.ed88ddd6.js.map
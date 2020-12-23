(this["webpackJsonpred-blossom-tea-timer"]=this["webpackJsonpred-blossom-tea-timer"]||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(0),c=n.n(a),o=n(23),s=n.n(o),u=(n(130),n(122)),i=n(38),l=n.n(i),d=n(34),f=n(55),b=(n(131),n(119)),p=n(203),m=n(116),j=n(201),h=n(118),O=n(66),x=n(204),v=n(202),g=x.a.Countdown,y=function(e){var t=e.temperature,n=e.leafAmount,c=e.duration,o=Object(a.useState)(!1),s=Object(d.a)(o,2),u=s[0],i=s[1],l=Object(a.useState)(c),f=Object(d.a)(l,2),b=f[0],p=f[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:["Temperature: ",t]}),Object(r.jsxs)("p",{children:["Leaf quantity: ",n]}),c&&Object(r.jsx)(v.a.Search,{type:"number",inputMode:"decimal",style:{maxWidth:"150px"},size:"large",defaultValue:null===c||void 0===c?void 0:c.as("seconds"),min:0,step:15,enterButton:u?"Stop":"Start",onChange:function(e){return p(O.Duration.fromObject({seconds:Number(e.target.value)}))},onSearch:function(){return i((function(e){return!e}))}}),Object(r.jsx)(g,{format:"mm:ss",title:"Duration",value:u&&b?Date.now()+b.as("milliseconds"):void 0,onFinish:function(){return i(!1)},valueRender:c?void 0:function(){return"Not specified"}})]})},w={sec:"seconds",secs:"seconds",min:"minutes",mins:"minutes"},S=function(e){return!!e.name&&!!e.baseHref&&!e.name.includes("Collection")},C=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r,a,c,o,s,u,i,f,b,p,m,j=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.length>1&&void 0!==j[1]?j[1]:1,e.next=3,fetch("https://redblossomtea.com/collections/".concat(t,"?page=").concat(c));case 3:return o=e.sent,e.next=6,o.text();case 6:return s=e.sent,u=(new DOMParser).parseFromString(s,"text/html"),i=(null===(n=u.querySelector("li.position"))||void 0===n||null===(r=n.textContent)||void 0===r||null===(a=r.match(/\d+/g))||void 0===a?void 0:a.map(Number))||[1,1],f=Object(d.a)(i,2),b=f[0],p=f[1],m=Array.from(u.querySelectorAll("div.product-card-details > h2.title > a")).map((function(e){return{name:e.textContent,baseHref:e.getAttribute("href")}})).filter(S),e.abrupt("return",{teas:m,numberOfPages:p,page:b});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r,a,c,o,s,u,i,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://redblossomtea.com".concat(t.baseHref));case 2:return r=e.sent,e.next=5,r.text();case 5:if(a=e.sent,c=(new DOMParser).parseFromString(a,"text/html"),!(o=null===(n=c.getElementsByClassName("tabs-content")[0])||void 0===n?void 0:n.lastElementChild)){e.next=16;break}return u=Array.from(o.getElementsByTagName("p")).map((function(e){return e.textContent})).join("\n"),i=null===(s=c.querySelector("h3 ~ table:last-of-type"))||void 0===s?void 0:s.querySelectorAll("tbody.screen-large > tr > td"),f=[],i&&(f=Array.from(i).map((function(e){var t,n=Array.from(e.children),r=1===n.length;r&&(n=Array.from(n[0].querySelectorAll('[class^="brew"]')));var a,c=n,o=Object(d.a)(c,3),s=o[1],u=o[2],i=null!==(t=null===s||void 0===s?void 0:s.textContent)&&void 0!==t?t:"",l=r||"Tea Bowl"===i?"span.data-data, span > span:last-child > span":"span.data-data, span:last-child > span",f=Array.from(u.querySelectorAll(l)).map((function(e){return e.textContent||""})),b=Object(d.a)(f,3),p=b[0],m=b[1],j=b[2];if(j){for(var h=j.split(" "),x={},v=0;v<h.length;v+=2)x[w[h[v+1]]]=Number(h[v]);a=O.Duration.fromObject(x)}return{type:i,leafAmount:p,temperature:m,duration:a}}))),e.abrupt("return",{name:t.name,description:u,brewingInfo:f});case 16:throw new Error("Error: Unable to parse brewing guide content for given tea: ".concat(t.name));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function A(){var e=Object(a.useState)("all-products"),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(d.a)(o,2),i=s[0],O=s[1],x=Object(a.useState)(),v=Object(d.a)(x,2),g=v[0],w=v[1],S=Object(a.useState)(1),A=Object(d.a)(S,2),P=A[0],F=A[1],q=Object(a.useState)(1),B=Object(d.a)(q,2),D=B[0],E=B[1];Object(a.useEffect)((function(){(function(){var e=Object(f.a)(l.a.mark((function e(){var t,r,a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(n);case 2:return t=e.sent,r=t.teas,a=t.page,c=t.numberOfPages,O(r),F(a),E(c),e.next=11,k(r[0]);case 11:o=e.sent,w(o);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var N=function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:n=e.sent,w(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(l.a.mark((function e(t){var r,a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(n,t);case 2:r=e.sent,a=r.teas,c=r.page,o=r.numberOfPages,O(a),F(c),E(o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b.a,{onClick:function(){return c("all-products")},children:"All"}),Object(r.jsx)(b.a,{onClick:function(){return c("oolong")},children:"Oolong"}),Object(r.jsx)(b.a,{onClick:function(){return c("black")},children:"Black"}),Object(r.jsx)(b.a,{onClick:function(){return c("pu-erh")},children:"Pu-erh"}),Object(r.jsx)(b.a,{onClick:function(){return c("green")},children:"Green"}),Object(r.jsx)(p.b,{bordered:!0,loading:0===i.length,dataSource:i,renderItem:function(e){return Object(r.jsx)(p.b.Item,{style:{cursor:"pointer"},onClick:function(){return N(e)},children:e.name})}}),Object(r.jsx)(m.a,{simple:!0,current:P,defaultPageSize:12,total:12*D,onChange:I}),g?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:g.name}),Object(r.jsx)("p",{children:g.description}),Object(r.jsx)(j.a,{defaultActiveKey:"1",children:g.brewingInfo.map((function(e,t){return Object(r.jsx)(j.a.TabPane,{tab:e.type,children:Object(r.jsx)(y,Object(u.a)({},e),"".concat(g.name,"-").concat(e.type))},t+1)}))})]}):Object(r.jsx)(h.a,{})]})}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),P()}},[[199,1,2]]]);
//# sourceMappingURL=main.3f47b591.chunk.js.map
(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(16),s=n.n(r),i=n(7),j=n.n(i),l=n(17),u=n(3),o=(n(24),n(0));var d=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"RESTy"})})};function b(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"RESTy"})})}n(26);var O=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),j=i[0],l=i[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),O=b[0],h=b[1],x=Object(c.useState)("GET"),f=Object(u.a)(x,2),v=f[0],p=f[1],m=function(e){h(!0),p(e.target.id)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:v,url:j};e.handleApiCall(n,a)},children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"URL: "}),Object(o.jsx)("input",{name:"url",type:"text",onChange:function(e){l(e.target.value)}}),Object(o.jsx)("button",{type:"submit","data-testid":"GO",children:"GO!"})]}),Object(o.jsxs)("label",{className:"methods",children:[Object(o.jsx)("button",{id:"get",onClick:function(e){p(e.target.value),h(!1)},value:"GET",children:"GET"}),Object(o.jsx)("button",{id:"post",onClick:m,value:"POST",children:"POST"}),Object(o.jsx)("button",{id:"put",onClick:m,value:"PUT",children:"PUT"}),Object(o.jsx)("button",{id:"delete",onClick:m,value:"DELETE",children:"DELETE"})]}),O&&Object(o.jsx)("textarea",{onChange:function(e){r(e.target.value)}})]})})};var h=function(){return Object(o.jsx)("p",{children:" Loading ....."})};var x=function(e){return Object(o.jsx)("section",{"data-testid":"result",children:Object(o.jsx)("pre",{children:e.data?JSON.stringify(e.data,void 0,2):Object(o.jsx)(h,{})})})},f=n(18),v=n.n(f);var p=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),i=Object(u.a)(s,2),h=i[0],f=i[1];return Object(c.useEffect)((function(){console.log("fetchData");try{var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.url){e.next=6;break}return e.next=3,v()({method:h.method,url:h.url});case 3:t=e.sent,console.log(t),r(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t.message)}}),[h]),Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{"data-testid":"Method-value",className:"req",children:["Request Method: ",h.method]}),Object(o.jsxs)("div",{"data-testid":"URL-value",className:"req",children:["URL: ",h.url]}),Object(o.jsx)(O,{handleApiCall:function(e){console.log(h.method),console.log("formData",e),f(e)}}),Object(o.jsx)(x,{data:n}),Object(o.jsx)(b,{})]})},m=document.getElementById("root");s.a.render(Object(o.jsx)(p,{}),m)}},[[45,1,2]]]);
//# sourceMappingURL=main.ad4e5f7b.chunk.js.map
(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),i=n(5),o=n(8),r=n(1),a=(n(13),n(14),n(3)),l=n.n(a),u=n(0),b=function(t){var e=t.title,n=t.classOfTitle,s=t.sortFunction;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{type:"button",className:n,onClick:s,children:e})})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f="alphabet",h="length",O="isReversed";function g(t,e,n){var s=Object(o.a)(t);if(e)switch(e){case f:n?s.sort((function(t,e){return e.localeCompare(t)})):s.sort((function(t,e){return t.localeCompare(e)}));break;case h:n?s.sort((function(t,e){return e.length-t.length})):s.sort((function(t,e){return t.length-e.length}))}return e===O&&s.reverse(),s}var d=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(j),o=Object(i.a)(c,2),a=o[0],d=o[1],p=Object(r.useState)(!1),m=Object(i.a)(p,2),x=m[0],v=m[1];return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(b,{title:"Sort alphabetically",classOfTitle:l()("button is-info",{"is-light":n!==f}),sortFunction:function(){s(f),d(g(a,f,x))}}),Object(u.jsx)(b,{title:"Sort by length",classOfTitle:l()("button is-success",{"is-light":n!==h}),sortFunction:function(){s(h),d(g(a,h,x))}}),Object(u.jsx)(b,{title:"Reverse",classOfTitle:l()("button is-warning",{"is-light":!x}),sortFunction:function(){v(!x),d(g(a,O,!x))}}),JSON.stringify(a)!==JSON.stringify(j)&&Object(u.jsx)(b,{title:"Reset",classOfTitle:l()("button is-danger",{"is-light":""!==n}),sortFunction:function(){s(""),d(j),v(!1)}})]}),Object(u.jsx)("ul",{children:a.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.643b6d2d.chunk.js.map
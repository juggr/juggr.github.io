(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/PtW":function(t,e,n){"use strict";e.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},"2Zix":function(t,e,n){var r=n("NC/Y");t.exports=/MSIE|Trident/.test(r)},"9d/t":function(t,e,n){var r=n("2oRo"),a=n("AO7/"),l=n("Fib7"),o=n("xrYK"),i=n("tiKp")("toStringTag"),c=r.Object,u="Arguments"==o(function(){return arguments}());t.exports=a?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=c(t),i))?n:u?o(e):"Object"==(r=o(e))&&l(e.callee)?"Arguments":r}},"AO7/":function(t,e,n){var r={};r[n("tiKp")("toStringTag")]="z",t.exports="[object z]"===String(r)},BNF5:function(t,e,n){var r=n("NC/Y").match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},L8iz:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("SqIO"),a=n("nr3+");function l(t){return function e(n,l){switch(arguments.length){case 0:return e;case 1:return Object(a.a)(n)?e:Object(r.a)((function(e){return t(n,e)}));default:return Object(a.a)(n)&&Object(a.a)(l)?e:Object(a.a)(n)?Object(r.a)((function(e){return t(e,l)})):Object(a.a)(l)?Object(r.a)((function(e){return t(n,e)})):t(n,l)}}}},RgsR:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("a+oF"),o=n("IP2g"),i=n("wHSu"),c=n("Wbzz"),u=n("vbgS"),s=n("9eSz"),f=n.n(s),m=n("1Yj4"),d=n("ok1R"),p=n("rhny"),g=function(t){var e=t.speaker;return a.a.createElement(m.a,null,a.a.createElement(d.a,null,e.frontmatter.pic&&a.a.createElement(p.a,{sm:"6",xs:"12",style:{textAlign:"center",maxWidth:"400px"}},a.a.createElement(c.Link,{to:e.fields.slug},a.a.createElement(f.a,{alt:"speaker",fluid:e.frontmatter.pic.childImageSharp.fluid}))),a.a.createElement(p.a,{sm:"6",xs:"12"},a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(c.Link,{to:e.fields.slug},a.a.createElement("strong",null,e.frontmatter.name))),e.frontmatter.twitter_name&&a.a.createElement("p",null,"Twitter:"," ",a.a.createElement("a",{href:"https://twitter.com/"+e.frontmatter.twitter_name},"@"+e.frontmatter.twitter_name))),a.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:e.html}}))))},h=function(t){var e=t.speakerList;return a.a.createElement("span",{className:"lead"},"von"," ",u.a(", ")(e.map((function(t){return a.a.createElement(c.Link,{key:t.fields.slug,to:t.fields.slug},t.frontmatter.name)}))))},v=function(t){var e=t.location,n=e.frontmatter;return a.a.createElement(c.Link,{to:e.fields.slug},a.a.createElement("address",null,n.name,a.a.createElement("br",null),n.info&&a.a.createElement(a.a.Fragment,null,n.info,a.a.createElement("br",null)),n.street+" "+n.number,a.a.createElement("br",null),n.zip+" "+n.city,a.a.createElement("br",null)))},E=function(t){var e=t.tags;return e?a.a.createElement(a.a.Fragment,null,u.a(", ")(e.map((function(t){return a.a.createElement(c.Link,{key:t,to:"/tags/#"+t},a.a.createElement(o.a,{icon:i.d})," ",t)})))):null},b=function(t){var e=t.talk;return t.linkToDetailsPage?a.a.createElement("h2",null,a.a.createElement(c.Link,{to:e.fields.slug},e.frontmatter.title)):a.a.createElement("h2",null,e.frontmatter.title)};e.a=function(t){var e,n=t.talk,r=t.speakerList,o=t.location,i=t.linkToDetailsPage;return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,{talk:n,linkToDetailsPage:i}),a.a.createElement(h,{speakerList:r})," | ",Object(l.a)(n.frontmatter.date),a.a.createElement("p",null,a.a.createElement(E,{tags:n.frontmatter.tags})),a.a.createElement("article",{className:"talk-content"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),n.frontmatter.poster&&a.a.createElement(c.Link,{to:"/posters#"+n.frontmatter.poster.childImageSharp.id},a.a.createElement(f.a,{fluid:n.frontmatter.poster.childImageSharp.fluid})),a.a.createElement("hr",null),r.map((function(t){return a.a.createElement(g,{key:t.id,speaker:t})})),a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement("p",null,"Datum: ",Object(l.a)(n.frontmatter.date),", ",null!==(e=n.frontmatter.time)&&void 0!==e?e:"19:00 Uhr"),n.frontmatter.virtual?a.a.createElement(a.a.Fragment,null,"Das Treffen findet Online statt. Siehe Beschreibung."):a.a.createElement(a.a.Fragment,null,"Ort: ",o?a.a.createElement(v,{location:o}):a.a.createElement("span",null,"wird noch bekannt gegeben"))),a.a.createElement("br",null),a.a.createElement("p",null,"Die Veranstaltung wird durch die ",a.a.createElement("i",null,"Java User Group Görlitz")," (im"," ",a.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband"),") organisiert.")))}},SqIO:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("nr3+");function a(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},Ta7t:function(t,e,n){var r=n("2oRo"),a=n("I8vh"),l=n("B/qT"),o=n("hBjN"),i=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=l(t),u=a(e,r),s=a(void 0===n?r:n,r),f=i(c(s-u,0)),m=0;u<s;u++,m++)o(f,m,t[u]);return f.length=m,f}},ToJy:function(t,e,n){"use strict";var r=n("I+eb"),a=n("4zBA"),l=n("We1y"),o=n("ewvW"),i=n("B/qT"),c=n("V37c"),u=n("0Dky"),s=n("rdv8"),f=n("pkCn"),m=n("BNF5"),d=n("2Zix"),p=n("LQDL"),g=n("USzg"),h=[],v=a(h.sort),E=a(h.push),b=u((function(){h.sort(void 0)})),k=u((function(){h.sort(null)})),y=f("sort"),w=!u((function(){if(p)return p<70;if(!(m&&m>3)){if(d)return!0;if(g)return g<603;var t,e,n,r,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)h.push({k:e+r,v:n})}for(h.sort((function(t,e){return e.v-t.v})),r=0;r<h.length;r++)e=h[r].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}}));r({target:"Array",proto:!0,forced:b||!k||!y||!w},{sort:function(t){void 0!==t&&l(t);var e=o(this);if(w)return void 0===t?v(e):v(e,t);var n,r,a=[],u=i(e);for(r=0;r<u;r++)r in e&&E(a,e[r]);for(s(a,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}}(t)),n=a.length,r=0;r<n;)e[r]=a[r++];for(;r<u;)delete e[r++];return e}})},USzg:function(t,e,n){var r=n("NC/Y").match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},V37c:function(t,e,n){var r=n("2oRo"),a=n("9d/t"),l=r.String;t.exports=function(t){if("Symbol"===a(t))throw TypeError("Cannot convert a Symbol value to a string");return l(t)}},hBjN:function(t,e,n){"use strict";var r=n("oEtG"),a=n("m/L8"),l=n("XGwC");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,l(0,n)):t[o]=n}},"nr3+":function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",(function(){return r}))},rdv8:function(t,e,n){var r=n("Ta7t"),a=Math.floor,l=function(t,e){var n=t.length,c=a(n/2);return n<8?o(t,e):i(t,l(r(t,0,c),e),l(r(t,c),e),e)},o=function(t,e){for(var n,r,a=t.length,l=1;l<a;){for(r=l,n=t[l];r&&e(t[r-1],n)>0;)t[r]=t[--r];r!==l++&&(t[r]=n)}return t},i=function(t,e,n,r){for(var a=e.length,l=n.length,o=0,i=0;o<a||i<l;)t[o+i]=o<a&&i<l?r(e[o],n[i])<=0?e[o++]:n[i++]:o<a?e[o++]:n[i++];return t};t.exports=l},sruW:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),l=n("Bl7J"),o=n("RgsR");e.default=function(t){var e=t.data,n=e.talk,r=e.speakers,i=e.location,c=r.edges.map((function(t){return t.node}));return a.a.createElement(l.a,null,a.a.createElement(o.a,{talk:n,speakerList:c,location:i,linkToDetailsPage:!1}))}}}]);
//# sourceMappingURL=component---src-templates-talk-page-js-ea369c5c948d68052ad9.js.map
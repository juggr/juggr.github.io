(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/PtW":function(e,t,n){"use strict";t.a=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},"2Zix":function(e,t,n){var r=n("NC/Y");e.exports=/MSIE|Trident/.test(r)},BNF5:function(e,t,n){var r=n("NC/Y").match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},L8iz:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("SqIO"),a=n("nr3+");function l(e){return function t(n,l){switch(arguments.length){case 0:return t;case 1:return Object(a.a)(n)?t:Object(r.a)((function(t){return e(n,t)}));default:return Object(a.a)(n)&&Object(a.a)(l)?t:Object(a.a)(n)?Object(r.a)((function(t){return e(t,l)})):Object(a.a)(l)?Object(r.a)((function(t){return e(n,t)})):e(n,l)}}}},RgsR:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("a+oF"),c=n("IP2g"),i=n("wHSu"),o=n("Wbzz"),u=n("vbgS"),s=n("9eSz"),m=n.n(s),f=n("1Yj4"),d=n("ok1R"),p=n("rhny"),g=function(e){var t=e.speaker;return a.a.createElement(f.a,null,a.a.createElement(d.a,null,t.frontmatter.pic&&a.a.createElement(p.a,{sm:"6",xs:"12",style:{textAlign:"center",maxWidth:"400px"}},a.a.createElement(o.Link,{to:t.fields.slug},a.a.createElement(m.a,{alt:"speaker",fluid:t.frontmatter.pic.childImageSharp.fluid}))),a.a.createElement(p.a,{sm:"6",xs:"12"},a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(o.Link,{to:t.fields.slug},a.a.createElement("strong",null,t.frontmatter.name))),t.frontmatter.twitter_name&&a.a.createElement("p",null,"Twitter:"," ",a.a.createElement("a",{href:"https://twitter.com/"+t.frontmatter.twitter_name},"@"+t.frontmatter.twitter_name))),a.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.html}}))))},E=function(e){var t=e.speakerList;return a.a.createElement("span",{className:"lead"},"von"," ",u.a(", ")(t.map((function(e){return a.a.createElement(o.Link,{key:e.fields.slug,to:e.fields.slug},e.frontmatter.name)}))))},h=function(e){var t=e.location,n=t.frontmatter;return a.a.createElement(o.Link,{to:t.fields.slug},a.a.createElement("address",null,n.name,a.a.createElement("br",null),n.info&&a.a.createElement(a.a.Fragment,null,n.info,a.a.createElement("br",null)),n.street+" "+n.number,a.a.createElement("br",null),n.zip+" "+n.city,a.a.createElement("br",null)))},v=function(e){var t=e.tags;return t?a.a.createElement(a.a.Fragment,null,u.a(", ")(t.map((function(e){return a.a.createElement(o.Link,{key:e,to:"/tags/#"+e},a.a.createElement(c.a,{icon:i.d})," ",e)})))):null},k=function(e){var t=e.talk;return e.linkToDetailsPage?a.a.createElement("h2",null,a.a.createElement(o.Link,{to:t.fields.slug},t.frontmatter.title)):a.a.createElement("h2",null,t.frontmatter.title)};t.a=function(e){var t,n=e.talk,r=e.speakerList,c=e.location,i=e.linkToDetailsPage;return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{talk:n,linkToDetailsPage:i}),a.a.createElement(E,{speakerList:r})," | ",Object(l.a)(n.frontmatter.date),a.a.createElement("p",null,a.a.createElement(v,{tags:n.frontmatter.tags})),a.a.createElement("article",{className:"talk-content"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),n.frontmatter.poster&&a.a.createElement(o.Link,{to:"/posters#"+n.frontmatter.poster.childImageSharp.id},a.a.createElement(m.a,{fluid:n.frontmatter.poster.childImageSharp.fluid})),a.a.createElement("hr",null),r.map((function(e){return a.a.createElement(g,{key:e.id,speaker:e})})),a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement("p",null,"Datum: ",Object(l.a)(n.frontmatter.date),", ",null!==(t=n.frontmatter.time)&&void 0!==t?t:"19:00 Uhr"),n.frontmatter.virtual?a.a.createElement(a.a.Fragment,null,"Das Treffen findet Online statt. Siehe Beschreibung."):a.a.createElement(a.a.Fragment,null,"Ort: ",c?a.a.createElement(h,{location:c}):a.a.createElement("span",null,"wird noch bekannt gegeben"))),a.a.createElement("br",null),a.a.createElement("p",null,"Die Veranstaltung wird durch die ",a.a.createElement("i",null,"Java User Group Görlitz")," (im"," ",a.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband"),") organisiert.")))}},SqIO:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("nr3+");function a(e){return function t(n){return 0===arguments.length||Object(r.a)(n)?t:e.apply(this,arguments)}}},ToJy:function(e,t,n){"use strict";var r=n("I+eb"),a=n("HAuM"),l=n("ewvW"),c=n("UMSQ"),i=n("V37c"),o=n("0Dky"),u=n("rdv8"),s=n("pkCn"),m=n("BNF5"),f=n("2Zix"),d=n("LQDL"),p=n("USzg"),g=[],E=g.sort,h=o((function(){g.sort(void 0)})),v=o((function(){g.sort(null)})),k=s("sort"),b=!o((function(){if(d)return d<70;if(!(m&&m>3)){if(f)return!0;if(p)return p<603;var e,t,n,r,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:t+r,v:n})}for(g.sort((function(e,t){return t.v-e.v})),r=0;r<g.length;r++)t=g[r].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}}));r({target:"Array",proto:!0,forced:h||!v||!k||!b},{sort:function(e){void 0!==e&&a(e);var t=l(this);if(b)return void 0===e?E.call(t):E.call(t,e);var n,r,o=[],s=c(t.length);for(r=0;r<s;r++)r in t&&o.push(t[r]);for(n=(o=u(o,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:i(t)>i(n)?1:-1}}(e))).length,r=0;r<n;)t[r]=o[r++];for(;r<s;)delete t[r++];return t}})},USzg:function(e,t,n){var r=n("NC/Y").match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},V37c:function(e,t,n){var r=n("2bX/");e.exports=function(e){if(r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},"nr3+":function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}n.d(t,"a",(function(){return r}))},rdv8:function(e,t){var n=Math.floor,r=function(e,t){var c=e.length,i=n(c/2);return c<8?a(e,t):l(r(e.slice(0,i),t),r(e.slice(i),t),t)},a=function(e,t){for(var n,r,a=e.length,l=1;l<a;){for(r=l,n=e[l];r&&t(e[r-1],n)>0;)e[r]=e[--r];r!==l++&&(e[r]=n)}return e},l=function(e,t,n){for(var r=e.length,a=t.length,l=0,c=0,i=[];l<r||c<a;)l<r&&c<a?i.push(n(e[l],t[c])<=0?e[l++]:t[c++]):i.push(l<r?e[l++]:t[c++]);return i};e.exports=r},sruW:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("Bl7J"),c=n("RgsR");t.default=function(e){var t=e.data,n=t.talk,r=t.speakers,i=t.location,o=r.edges.map((function(e){return e.node}));return a.a.createElement(l.a,null,a.a.createElement(c.a,{talk:n,speakerList:o,location:i,linkToDetailsPage:!1}))}}}]);
//# sourceMappingURL=component---src-templates-talk-page-js-03f050fd8c3a25f997aa.js.map
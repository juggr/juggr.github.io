(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{195:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return f});n(30),n(18),n(127),n(128);var r=n(0),a=n.n(r),c=n(89),u=n(206),o=n(247),l=n(263),i=n(261),s=n(258);e.default=function(t){var e=t.data,n=e.speakers.edges.map(function(t){return t.node}),r=e.talks.edges.map(function(t){return t.node}),f=n.map(function(t){var e=o.a(function(e){return e.frontmatter.speaker.includes(t.fields.speakerId)})(r);return Object.assign({},t,{talks:e})}),A=l.a([i.a(function(t){return t.talks.length}),s.a(function(t){return t.frontmatter.name})])(f);return a.a.createElement(u.a,null,a.a.createElement("h2",null,"Alle Speaker"),a.a.createElement("ul",null,A.map(function(t){return a.a.createElement("li",{key:t.fields.slug},a.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.name)," (",t.talks.length," Talks)")})))};var f="3484776524"},200:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(201),a=n(222);function c(t){return function e(n,c){switch(arguments.length){case 0:return e;case 1:return Object(a.a)(n)?e:Object(r.a)(function(e){return t(n,e)});default:return Object(a.a)(n)&&Object(a.a)(c)?e:Object(a.a)(n)?Object(r.a)(function(e){return t(e,c)}):Object(a.a)(c)?Object(r.a)(function(e){return t(n,e)}):t(n,c)}}}},201:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(222);function a(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},202:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(201),a=n(200),c=n(222);function u(t){return function e(n,u,o){switch(arguments.length){case 0:return e;case 1:return Object(c.a)(n)?e:Object(a.a)(function(e,r){return t(n,e,r)});case 2:return Object(c.a)(n)&&Object(c.a)(u)?e:Object(c.a)(n)?Object(a.a)(function(e,n){return t(e,u,n)}):Object(c.a)(u)?Object(a.a)(function(e,r){return t(n,e,r)}):Object(r.a)(function(e){return t(n,u,e)});default:return Object(c.a)(n)&&Object(c.a)(u)&&Object(c.a)(o)?e:Object(c.a)(n)&&Object(c.a)(u)?Object(a.a)(function(e,n){return t(e,n,o)}):Object(c.a)(n)&&Object(c.a)(o)?Object(a.a)(function(e,n){return t(e,u,n)}):Object(c.a)(u)&&Object(c.a)(o)?Object(a.a)(function(e,r){return t(n,e,r)}):Object(c.a)(n)?Object(r.a)(function(e){return t(e,u,o)}):Object(c.a)(u)?Object(r.a)(function(e){return t(n,e,o)}):Object(c.a)(o)?Object(r.a)(function(e){return t(n,u,e)}):t(n,u,o)}}}},204:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(216),a=n(238);function c(t,e,n){return function(){if(0===arguments.length)return n();var c=Array.prototype.slice.call(arguments,0),u=c.pop();if(!Object(r.a)(u)){for(var o=0;o<t.length;){if("function"==typeof u[t[o]])return u[t[o]].apply(u,c);o+=1}if(Object(a.a)(u))return e.apply(null,c)(u)}return n.apply(this,arguments)}}},205:function(t,e,n){"use strict";e.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},206:function(t,e,n){"use strict";var r=n(207),a=n(0),c=n.n(a),u=n(228),o=n.n(u),l=n(89),i=n(322),s=n(326),f=n(327),A=(n(229),n(230),n(18),n(12)),p=n.n(A),m=n(319),d=n(320),g=n(321),b=n(323),O=n(324),j=n(328),y=n(325);var E=function(t){var e=t.to,n=t.children;return c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"link-item",tag:function(t){return c.a.createElement(p.a,Object.assign({},t,{to:e,activeClassName:"active"}),n)}}))},h=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).toggle=function(){n.setState(function(t){return{collapsed:!t.collapsed}})},n.state={collapsed:!1},n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return c.a.createElement(g.a,{color:"light",light:!0,expand:"sm"},c.a.createElement(i.a,null,c.a.createElement(b.a,{to:"/",tag:function(t){return c.a.createElement(p.a,t)}},"Java User Group Görlitz"),c.a.createElement(O.a,{onClick:this.toggle}),c.a.createElement(j.a,{isOpen:this.state.collapsed,navbar:!0},c.a.createElement(y.a,{className:"ml-auto",navbar:!0},c.a.createElement(E,{to:"/"},"Aktuell"),c.a.createElement(E,{to:"/talks"},"Vorträge"),c.a.createElement(E,{to:"/unterstuetzer"},"Unterstützer"),c.a.createElement(E,{to:"/about"},"About"),c.a.createElement(E,{to:"/mitmachen"},"Mitmachen")))))},r}(c.a.Component),K=function(){return c.a.createElement("footer",{className:"container footer"},c.a.createElement("p",null,"© Manuel Mauky 2018 | ",c.a.createElement(l.Link,{to:"/impressum"},"Impressum")," |"," ",c.a.createElement(l.Link,{to:"/datenschutz"},"Datenschutz")))},w=n(218),v=n(231),S=n(219),U=function(t){t.logo;return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",null,c.a.createElement(s.a,null,c.a.createElement(f.a,{sm:"6",xs:"12",md:"12"},c.a.createElement("img",{alt:"Logo der JUG Görlitz",src:n(208)})),c.a.createElement(f.a,{sm:"6",xs:"12",md:"12"},c.a.createElement("h3",null,"Wir sind Mitglied im",c.a.createElement("br",null),c.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband")),c.a.createElement("h3",null,"Andere Medien"),c.a.createElement("ul",{className:"list-unstyled"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://twitter.com/jug_gr"},c.a.createElement(w.a,{icon:v.c})," Twitter")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.facebook.com/juggr"},c.a.createElement(w.a,{icon:v.a})," Facebook")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://groups.google.com/d/forum/juggr"},c.a.createElement(w.a,{icon:S.b})," Mailing-List")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/juggr"},c.a.createElement(w.a,{icon:v.b})," Github")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://calendar.google.com/calendar/embed?src=gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com&ctz=Europe/Berlin"},c.a.createElement(w.a,{icon:S.a})," Kalender"),c.a.createElement("a",{href:"https://www.google.com/calendar/ical/gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com/public/basic.ics"},"(ICAL)")),c.a.createElement("li",null,c.a.createElement(w.a,{icon:S.c})," Feeds:",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"/atom.xml"},"Atom")),c.a.createElement("li",null,c.a.createElement("a",{href:"/rss.xml"},"RSS")),c.a.createElement("li",null,c.a.createElement("a",{href:"/feed.json"},"JSON")))))))),c.a.createElement("br",null),c.a.createElement("a",{href:"https://jax.de/"},c.a.createElement("img",{alt:"Banner für die WJAX 2019",src:n(209)})),c.a.createElement("br",null),c.a.createElement("p",null,"Unterstützt durch:"),c.a.createElement("a",{href:"https://www.sogehtsoftware.de"},c.a.createElement("img",{alt:"Logo von Saxonia Systems AG",src:n(210)})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("a",{href:"https://mitp.de/"},c.a.createElement("img",{alt:"Logo des mitp Verlags",src:n(211)})))},k=n(232);k.a.config={autoAddCss:!1};e.a=function(t){var e=t.children;t.data;return c.a.createElement(l.StaticQuery,{query:"3517534738",render:function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:t.site.siteMetadata.description},{name:"keywords",content:"java, usergroup, görlitz, programmierung"}]},c.a.createElement("style",null,k.a.dom.css())),c.a.createElement(h,null),c.a.createElement(i.a,{style:{marginTop:"1em"}},c.a.createElement(s.a,null,c.a.createElement(f.a,{md:"9"},e),c.a.createElement(f.a,{md:"3"},c.a.createElement(U,{logo:t.logo})))),c.a.createElement(K,null))},data:r})}},207:function(t){t.exports={data:{site:{siteMetadata:{title:"Java User Group Görlitz",description:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}},logo:{id:"43a23640-d8c5-5755-bb2e-d1e53867eebc",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAACj0lEQVQoz2NgQAJCQkIMtra2MC5LTk5OZ3R0dFFhYWG+qampcHZ29nRtbW2Fzs7OTaWlpee9gQCk0K+4V8y3fCoDVqCvrw9jsk2bNm1dXV3dxLlz5/YCDZXo7u7e3tXVNX/SpEnNJqamXJbWtrIghb7lU2z8K6bwoxhUVVUFpqdPnw4X6+/vX1dTUzMRKNbHwcEh3t7evgto2Ob6+npvExMT96rq6gkgdUGVU2OALjQCa/r58yfT7du3mSQkJBiAiplAYkDvWbe2tm6dMGHCroCAAL0pU6bsA7KPA71aHxER4TBx4sTjfX19Z7t7evrBXq6cMcG3fJotNh+DDXR2duYuLi52CgoKkgDx7e3t5VNSUuxgihISEpRy8vJdQGyvqrkmQRWT5vxv4rF82ajEAfLW7Obm5l4jIyMJYIRUODo6Ns2bN48Dqpc1KytrEdDgsPDw8Bhra2tXUNgiOYDRpWLe6s21non/m9l9wSJAwyp0dXW9WFhYJKqrq1cDI2G7pqamYktLy9TU1NSJQHprbGxsamRkZCUwSM6np6fP9/XzK+nu7FiTmldaa1G2tP9/k4DPp0apNLg15eXlbrm5uauAgd8KtKAaGH6rgWG2NSoqyqaxsXEV0KJiIH8mUHwjUK2GjY2NPTC2r9cWZys5lc8t6q5OtwMaOvFOgxY3AzAW586fP/9kfn7+EmCyWAJ00QqgIf0NDQ3LgHZxAcX2Ar29EBizvUD25vj4+DygwWsrK6uOSwlyKac0T5fWK13r8btJJPRLo2QKKLkUV1RUpAM1cwINDS8qKkoEsrk9PT1B4cWQlJRk5eTkFGBmZqZaUlJiBPR+GTCxRxQUFOR4eHqBI0qzeB3fjQZdQ6ArJQG1ZgMkACvozAAAAABJRU5ErkJggg==",aspectRatio:2.03,src:"/static/e9c103f16829b2a6e46db56f7af9a0e2/2ff3c/logo.png",srcSet:"/static/e9c103f16829b2a6e46db56f7af9a0e2/7c0ed/logo.png 200w,\n/static/e9c103f16829b2a6e46db56f7af9a0e2/647de/logo.png 400w,\n/static/e9c103f16829b2a6e46db56f7af9a0e2/2ff3c/logo.png 406w",sizes:"(max-width: 406px) 100vw, 406px"}}}}}},208:function(t,e,n){t.exports=n.p+"static/logo-e9c103f16829b2a6e46db56f7af9a0e2.png"},209:function(t,e,n){t.exports=n.p+"static/WJAX_2019_266x145-7c6beaf09dbc1def7a6e8ea26d87f4ce.jpg"},210:function(t,e,n){t.exports=n.p+"static/saxsys_logo-e011e3b221db3ea703df94f9ce16b5be.jpg"},211:function(t,e){t.exports="data:image/jpeg;base64,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"},212:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(e,t)}n.d(e,"a",function(){return r})},214:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(62),n(46);var r=n(236),a=n(242),c=n(240);function u(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function o(t,e,n,r){return t["@@transducer/result"](n[r](Object(c.a)(t["@@transducer/step"],t),e))}var l="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function i(t,e,n){if("function"==typeof t&&(t=Object(a.a)(t)),Object(r.a)(n))return function(t,e,n){for(var r=0,a=n.length;r<a;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return o(t,e,n,"fantasy-land/reduce");if(null!=n[l])return u(t,e,n[l]());if("function"==typeof n.next)return u(t,e,n);if("function"==typeof n.reduce)return o(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}},215:function(t,e,n){"use strict";n(31),n(23),n(14),n(45);var r=n(201),a=n(212),c=n(243),u=!{toString:null}.propertyIsEnumerable("toString"),o=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],l=function(){return arguments.propertyIsEnumerable("length")}(),i=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},s="function"!=typeof Object.keys||l?Object(r.a)(function(t){if(Object(t)!==t)return[];var e,n,r=[],s=l&&Object(c.a)(t);for(e in t)!Object(a.a)(e,t)||s&&"length"===e||(r[r.length]=e);if(u)for(n=o.length-1;n>=0;)e=o[n],Object(a.a)(e,t)&&!i(r,e)&&(r[r.length]=e),n-=1;return r}):Object(r.a)(function(t){return Object(t)!==t?[]:Object.keys(t)});e.a=s},216:function(t,e,n){"use strict";n(61),n(14);e.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},217:function(t,e,n){"use strict";function r(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,a){return e.apply(this,arguments)};case 5:return function(t,n,r,a,c){return e.apply(this,arguments)};case 6:return function(t,n,r,a,c,u){return e.apply(this,arguments)};case 7:return function(t,n,r,a,c,u,o){return e.apply(this,arguments)};case 8:return function(t,n,r,a,c,u,o,l){return e.apply(this,arguments)};case 9:return function(t,n,r,a,c,u,o,l,i){return e.apply(this,arguments)};case 10:return function(t,n,r,a,c,u,o,l,i,s){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(e,"a",function(){return r})},222:function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",function(){return r})},233:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(61),n(14);function r(t){return"[object String]"===Object.prototype.toString.call(t)}},236:function(t,e,n){"use strict";var r=n(201),a=n(216),c=n(233),u=Object(r.a)(function(t){return!!Object(a.a)(t)||!!t&&("object"==typeof t&&(!Object(c.a)(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))});e.a=u},238:function(t,e,n){"use strict";function r(t){return null!=t&&"function"==typeof t["@@transducer/step"]}n.d(e,"a",function(){return r})},239:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(61),n(14);function r(t){return"[object Object]"===Object.prototype.toString.call(t)}},240:function(t,e,n){"use strict";var r=n(217),a=n(200),c=Object(a.a)(function(t,e){return Object(r.a)(t.length,function(){return t.apply(e,arguments)})});e.a=c},241:function(t,e,n){"use strict";function r(t,e){for(var n=0,r=e.length,a=[];n<r;)t(e[n])&&(a[a.length]=e[n]),n+=1;return a}n.d(e,"a",function(){return r})},242:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();function a(t){return new r(t)}},243:function(t,e,n){"use strict";n(61),n(14);var r=n(212),a=Object.prototype.toString,c=function(){return"[object Arguments]"===a.call(arguments)?function(t){return"[object Arguments]"===a.call(t)}:function(t){return Object(r.a)("callee",t)}}();e.a=c},247:function(t,e,n){"use strict";var r=n(200),a=n(204),c=n(241),u=n(239),o=n(214),l=n(205),i=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=l.a.init,t.prototype["@@transducer/result"]=l.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),s=Object(r.a)(function(t,e){return new i(t,e)}),f=n(215),A=Object(r.a)(Object(a.a)(["filter"],s,function(t,e){return Object(u.a)(e)?Object(o.a)(function(n,r){return t(e[r])&&(n[r]=e[r]),n},{},Object(f.a)(e)):Object(c.a)(t,e)}));e.a=A},258:function(t,e,n){"use strict";var r=n(202),a=Object(r.a)(function(t,e,n){var r=t(e),a=t(n);return r<a?-1:r>a?1:0});e.a=a},261:function(t,e,n){"use strict";var r=n(202),a=Object(r.a)(function(t,e,n){var r=t(e),a=t(n);return r>a?-1:r<a?1:0});e.a=a},263:function(t,e,n){"use strict";n(124);var r=n(200),a=Object(r.a)(function(t,e){return Array.prototype.slice.call(e,0).sort(function(e,n){for(var r=0,a=0;0===r&&a<t.length;)r=t[a](e,n),a+=1;return r})});e.a=a}}]);
//# sourceMappingURL=component---src-pages-speakers-js-03900b67ceeacbe2134c.js.map
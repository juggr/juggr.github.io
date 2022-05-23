(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var l=a(0),n=a.n(l),r=a(91),c=a(206);t.default=function(e){var t=e.data;return n.a.createElement(c.a,null,n.a.createElement("h2",null,"Debug: Redirects"),n.a.createElement("p",null,"This page lists all redirects that are present in the website"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"From"),n.a.createElement("th",null,"To"))),n.a.createElement("tbody",null,t.talks&&t.talks.edges.map(function(e){return e.node}).map(function(e){return n.a.createElement(n.a.Fragment,{key:e.id},n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(r.Link,{to:e.fields.legacySlug},e.fields.legacySlug)),n.a.createElement("td",null,n.a.createElement(r.Link,{to:e.fields.slug},e.fields.slug))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(r.Link,{to:e.fields.legacySlug+".html"},e.fields.legacySlug+".html")),n.a.createElement("td",null,n.a.createElement(r.Link,{to:e.fields.slug},e.fields.slug))))}))))};var o="194052418"},206:function(e,t,a){"use strict";var l=a(207),n=a(0),r=a.n(n),c=a(227),o=a.n(c),m=a(91),i=a(317),s=a(321),u=a(322),d=(a(228),a(229),a(19),a(13)),g=a.n(d),E=a(314),p=a(315),f=a(316),h=a(318),b=a(319),A=a(323),k=a(320);var w=function(e){var t=e.to,a=e.children;return r.a.createElement(E.a,null,r.a.createElement(p.a,{className:"link-item",tag:function(e){return r.a.createElement(g.a,Object.assign({},e,{to:t,activeClassName:"active"}),a)}}))},v=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a.state={collapsed:!1},a}return a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,l.prototype.render=function(){return r.a.createElement(f.a,{color:"light",light:!0,expand:"sm"},r.a.createElement(i.a,null,r.a.createElement(h.a,{to:"/",tag:function(e){return r.a.createElement(g.a,e)}},"Java User Group Görlitz"),r.a.createElement(b.a,{onClick:this.toggle}),r.a.createElement(A.a,{isOpen:this.state.collapsed,navbar:!0},r.a.createElement(k.a,{className:"ml-auto",navbar:!0},r.a.createElement(w,{to:"/"},"Aktuell"),r.a.createElement(w,{to:"/talks"},"Vorträge"),r.a.createElement(w,{to:"/posters"},"Plakate"),r.a.createElement(w,{to:"/unterstuetzer"},"Unterstützer"),r.a.createElement(w,{to:"/about"},"About"),r.a.createElement(w,{to:"/mitmachen"},"Mitmachen")))))},l}(r.a.Component),J=function(){return r.a.createElement("footer",{className:"container footer"},r.a.createElement("p",null,r.a.createElement(m.Link,{to:"/impressum"},"Impressum")," |"," ",r.a.createElement(m.Link,{to:"/datenschutz"},"Datenschutz")))},y=a(217),x=a(230),U=a(218),j=function(e){e.logo;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(u.a,{sm:"6",xs:"12",md:"12"},r.a.createElement("img",{alt:"Logo der JUG Görlitz",src:a(208)})),r.a.createElement(u.a,{sm:"6",xs:"12",md:"12"},r.a.createElement("h3",null,"Wir sind Mitglied im",r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband")),r.a.createElement("h3",null,"Andere Medien"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/jug_gr"},r.a.createElement(y.a,{icon:x.c})," Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/juggr"},r.a.createElement(y.a,{icon:x.a})," Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://groups.google.com/d/forum/juggr"},r.a.createElement(y.a,{icon:U.b})," Mailing-List")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/juggr"},r.a.createElement(y.a,{icon:x.b})," Github")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://calendar.google.com/calendar/embed?src=gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com&ctz=Europe/Berlin"},r.a.createElement(y.a,{icon:U.a})," Kalender"),r.a.createElement("a",{href:"https://www.google.com/calendar/ical/gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com/public/basic.ics"},"(ICAL)")),r.a.createElement("li",null,r.a.createElement(y.a,{icon:U.c})," Feeds:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/atom.xml"},"Atom")),r.a.createElement("li",null,r.a.createElement("a",{href:"/rss.xml"},"RSS")),r.a.createElement("li",null,r.a.createElement("a",{href:"/feed.json"},"JSON")))))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.javaland.eu"},r.a.createElement("img",{alt:"Banner für die JavaLand 2022 Konferenz",src:a(209)})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://jax.de/"},r.a.createElement("img",{alt:"Banner für die JAX 2022 Konferenz",src:a(210)})),r.a.createElement("br",null))},G=a(231);G.a.config={autoAddCss:!1};t.a=function(e){var t=e.children;e.data;return r.a.createElement(m.StaticQuery,{query:"1238061294",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"java, usergroup, görlitz, programmierung"}]},r.a.createElement("style",null,G.a.dom.css())),r.a.createElement(v,null),r.a.createElement(i.a,{style:{marginTop:"1em"}},r.a.createElement(s.a,null,r.a.createElement(u.a,{md:"9"},t),r.a.createElement(u.a,{md:"3"},r.a.createElement(j,{logo:e.logo})))),r.a.createElement(J,null))},data:l})}},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Java User Group Görlitz",description:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}},logo:{id:"43a23640-d8c5-5755-bb2e-d1e53867eebc",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAACj0lEQVQoz2NgQAJCQkIMtra2MC5LTk5OZ3R0dFFhYWG+qampcHZ29nRtbW2Fzs7OTaWlpee9gQCk0K+4V8y3fCoDVqCvrw9jsk2bNm1dXV3dxLlz5/YCDZXo7u7e3tXVNX/SpEnNJqamXJbWtrIghb7lU2z8K6bwoxhUVVUFpqdPnw4X6+/vX1dTUzMRKNbHwcEh3t7evgto2Ob6+npvExMT96rq6gkgdUGVU2OALjQCa/r58yfT7du3mSQkJBiAiplAYkDvWbe2tm6dMGHCroCAAL0pU6bsA7KPA71aHxER4TBx4sTjfX19Z7t7evrBXq6cMcG3fJotNh+DDXR2duYuLi52CgoKkgDx7e3t5VNSUuxgihISEpRy8vJdQGyvqrkmQRWT5vxv4rF82ajEAfLW7Obm5l4jIyMJYIRUODo6Ns2bN48Dqpc1KytrEdDgsPDw8Bhra2tXUNgiOYDRpWLe6s21non/m9l9wSJAwyp0dXW9WFhYJKqrq1cDI2G7pqamYktLy9TU1NSJQHprbGxsamRkZCUwSM6np6fP9/XzK+nu7FiTmldaa1G2tP9/k4DPp0apNLg15eXlbrm5uauAgd8KtKAaGH6rgWG2NSoqyqaxsXEV0KJiIH8mUHwjUK2GjY2NPTC2r9cWZys5lc8t6q5OtwMaOvFOgxY3AzAW586fP/9kfn7+EmCyWAJ00QqgIf0NDQ3LgHZxAcX2Ar29EBizvUD25vj4+DygwWsrK6uOSwlyKac0T5fWK13r8btJJPRLo2QKKLkUV1RUpAM1cwINDS8qKkoEsrk9PT1B4cWQlJRk5eTkFGBmZqZaUlJiBPR+GTCxRxQUFOR4eHqBI0qzeB3fjQZdQ6ArJQG1ZgMkACvozAAAAABJRU5ErkJggg==",aspectRatio:2.03,src:"/static/e9c103f16829b2a6e46db56f7af9a0e2/2ff3c/logo.png",srcSet:"/static/e9c103f16829b2a6e46db56f7af9a0e2/7c0ed/logo.png 200w,\n/static/e9c103f16829b2a6e46db56f7af9a0e2/647de/logo.png 400w,\n/static/e9c103f16829b2a6e46db56f7af9a0e2/2ff3c/logo.png 406w",sizes:"(max-width: 406px) 100vw, 406px"}}}}}},208:function(e,t,a){e.exports=a.p+"static/logo-e9c103f16829b2a6e46db56f7af9a0e2.png"},209:function(e,t,a){e.exports=a.p+"static/javaland_2022_banner-666e3350825aa93136a86e90e3c4c908.jpg"},210:function(e,t,a){e.exports=a.p+"static/jax22_banner-496a46f0a2b28e902743324417214f34.jpg"}}]);
//# sourceMappingURL=component---src-pages-debug-redirects-js-21d1fcf69920f990b050.js.map
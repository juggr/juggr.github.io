(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{260:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o}),a(278),a(86),a(132),a(133);var n=a(0),r=a.n(n),l=a(85),c=a(268),A=a(283);t.default=function(e){var t=e.data,a=t.locations.edges.map(function(e){return e.node}),n=t.talks.edges.map(function(e){return e.node}),o=a.map(function(e){var t=A.d(function(t){return t.frontmatter.location.includes(e.fields.locationId)})(A.d(function(e){return e.frontmatter.location})(n));return Object.assign({},e,{talks:t})}),m=A.j([A.c(function(e){return e.talks.length}),A.a(function(e){return e.frontmatter.name})])(o);return r.a.createElement(c.a,null,r.a.createElement("h2",null,"Alle Locations"),r.a.createElement("ul",null,m.map(function(e){return r.a.createElement("li",{key:e.fields.slug},r.a.createElement(l.Link,{to:e.fields.slug},e.frontmatter.name)," (",e.talks.length," Talks)")})))};var o="3421597114"},268:function(e,t,a){"use strict";var n=a(269),r=a(0),l=a.n(r),c=a(279),A=a.n(c),o=a(85),m=a(267),s=(a(280),a(270),a(21)),i=a.n(s),u=(a(86),a(12)),g=a.n(u),d=function(e){var t=e.to,a=e.children;return l.a.createElement(m.f,null,l.a.createElement(m.g,{className:"link-item",tag:function(e){return l.a.createElement(g.a,Object.assign({},e,{to:t,activeClassName:"active"}),a)}}))},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a.state={collapsed:!1},a}return i()(t,e),t.prototype.render=function(){return l.a.createElement(m.h,{color:"light",light:!0,expand:"sm"},l.a.createElement(m.d,null,l.a.createElement(m.i,{to:"/",tag:function(e){return l.a.createElement(g.a,e)}},"Java User Group Görlitz"),l.a.createElement(m.j,{onClick:this.toggle}),l.a.createElement(m.c,{isOpen:this.state.collapsed,navbar:!0},l.a.createElement(m.e,{className:"ml-auto",navbar:!0},l.a.createElement(d,{to:"/"},"Aktuell"),l.a.createElement(d,{to:"/talks"},"Vorträge"),l.a.createElement(d,{to:"/unterstuetzer"},"Unterstützer"),l.a.createElement(d,{to:"/about"},"About"),l.a.createElement(d,{to:"/mitmachen"},"Mitmachen")))))},t}(l.a.Component),f=function(){return l.a.createElement("footer",{className:"container footer"},l.a.createElement("p",null,"© Manuel Mauky 2018 | ",l.a.createElement(o.Link,{to:"/impressum"},"Impressum")," |"," ",l.a.createElement(o.Link,{to:"/datenschutz"},"Datenschutz")))},E=a(276),b=a(281),K=a(277),U=function(e){return e.logo,l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",null,l.a.createElement(m.k,null,l.a.createElement(m.b,{sm:"6",xs:"12",md:"12"},l.a.createElement("img",{alt:"Logo der JUG Görlitz",src:a(272)})),l.a.createElement(m.b,{sm:"6",xs:"12",md:"12"},l.a.createElement("h3",null,"Wir sind Mitglied im",l.a.createElement("br",null),l.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband")),l.a.createElement("h3",null,"Andere Medien"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/jug_gr"},l.a.createElement(E.a,{icon:b.d})," Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/juggr"},l.a.createElement(E.a,{icon:b.a})," Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://plus.google.com/+Jug-grDe",rel:"publisher"},l.a.createElement(E.a,{icon:b.c})," Google+")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://groups.google.com/d/forum/juggr"},l.a.createElement(E.a,{icon:K.b})," Mailing-List")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/juggr"},l.a.createElement(E.a,{icon:b.b})," Github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://calendar.google.com/calendar/embed?src=gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com&ctz=Europe/Berlin"},l.a.createElement(E.a,{icon:K.a})," Kalender"),l.a.createElement("a",{href:"https://www.google.com/calendar/ical/gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com/public/basic.ics"},"(ICAL)")))))),l.a.createElement("br",null),l.a.createElement("a",{href:"https://jax.de/"},l.a.createElement("img",{alt:"Banner für die WJAX 2018",src:a(273)})),l.a.createElement("br",null),l.a.createElement("p",null,"Unterstützt durch:"),l.a.createElement("a",{href:"https://www.sogehtsoftware.de"},l.a.createElement("img",{alt:"Logo von Saxonia Systems AG",src:a(274)})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://mitp.de/"},l.a.createElement("img",{alt:"Logo des mitp Verlags",src:a(275)})))},k=a(282);k.a.config={autoAddCss:!1},t.a=function(e){var t=e.children;return e.data,l.a.createElement(o.StaticQuery,{query:"3517534738",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"java, usergroup, görlitz, programmierung"}]},l.a.createElement("style",null,k.a.dom.css())),l.a.createElement(p,null),l.a.createElement(m.d,{style:{marginTop:"1em"}},l.a.createElement(m.k,null,l.a.createElement(m.b,{md:"9"},t),l.a.createElement(m.b,{md:"3"},l.a.createElement(U,{logo:e.logo})))),l.a.createElement(f,null))},data:n})}},269:function(e){e.exports={data:{site:{siteMetadata:{title:"Java User Group Görlitz",description:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}},logo:{id:"c404f553-d91c-56d4-8da8-aafd0181ac8d",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAACj0lEQVQoz2NgQAJCQkIMtra2MC5LTk5OZ3R0dFFhYWG+qampcHZ29nRtbW2Fzs7OTaWlpee9gQCk0K+4V8y3fCoDVqCvrw9jsk2bNm1dXV3dxLlz5/YCDZXo7u7e3tXVNX/SpEnNJqamXJbWtrIghb7lU2z8K6bwoxhUVVUFpqdPnw4X6+/vX1dTUzMRKNbHwcEh3t7evgto2Ob6+npvExMT96rq6gkgdUGVU2OALjQCa/r58yfT7du3mSQkJBiAiplAYkDvWbe2tm6dMGHCroCAAL0pU6bsA7KPA71aHxER4TBx4sTjfX19Z7t7evrBXq6cMcG3fJotNh+DDXR2duYuLi52CgoKkgDx7e3t5VNSUuxgihISEpRy8vJdQGyvqrkmQRWT5vxv4rF82ajEAfLW7Obm5l4jIyMJYIRUODo6Ns2bN48Dqpc1KytrEdDgsPDw8Bhra2tXUNgiOYDRpWLe6s21non/m9l9wSJAwyp0dXW9WFhYJKqrq1cDI2G7pqamYktLy9TU1NSJQHprbGxsamRkZCUwSM6np6fP9/XzK+nu7FiTmldaa1G2tP9/k4DPp0apNLg15eXlbrm5uauAgd8KtKAaGH6rgWG2NSoqyqaxsXEV0KJiIH8mUHwjUK2GjY2NPTC2r9cWZys5lc8t6q5OtwMaOvFOgxY3AzAW586fP/9kfn7+EmCyWAJ00QqgIf0NDQ3LgHZxAcX2Ar29EBizvUD25vj4+DygwWsrK6uOSwlyKac0T5fWK13r8btJJPRLo2QKKLkUV1RUpAM1cwINDS8qKkoEsrk9PT1B4cWQlJRk5eTkFGBmZqZaUlJiBPR+GTCxRxQUFOR4eHqBI0qzeB3fjQZdQ6ArJQG1ZgMkACvozAAAAABJRU5ErkJggg==",aspectRatio:2.03,src:"/jug-beta/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-673cd.png",srcSet:"/jug-beta/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-4dc8e.png 200w,\n/jug-beta/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-d154e.png 400w,\n/jug-beta/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-673cd.png 406w",sizes:"(max-width: 406px) 100vw, 406px"}}}}}},270:function(e,t,a){},272:function(e,t,a){e.exports=a.p+"static/logo-e9c103f16829b2a6e46db56f7af9a0e2.png"},273:function(e,t,a){e.exports=a.p+"static/jax_banner-9b74e1c4795f7dc0b2da6138d8905f60.png"},274:function(e,t,a){e.exports=a.p+"static/saxsys_logo-e011e3b221db3ea703df94f9ce16b5be.jpg"},275:function(e,t){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=component---src-pages-locations-js-7cfd321f167d5902a72b.js.map
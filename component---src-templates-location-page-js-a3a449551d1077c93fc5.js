(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{198:function(e,t,a){"use strict";a.r(t);a(26);var r=a(0),n=a.n(r),l=a(206),c=a(91),m=function(e){var t=e.talks;return n.a.createElement(n.a.Fragment,null,t.length," Talks:",n.a.createElement("ul",null,t.map(function(e){return n.a.createElement("li",{key:e.fields.slug},n.a.createElement(c.Link,{to:e.fields.slug},e.frontmatter.title))})))};a.d(t,"query",function(){return o});t.default=function(e){var t=e.data,a=t.location,r=t.talks;return n.a.createElement(l.a,null,n.a.createElement("h2",null,a.frontmatter.name),n.a.createElement("address",null,a.frontmatter.name,n.a.createElement("br",null),a.frontmatter.info&&n.a.createElement(n.a.Fragment,null,a.frontmatter.info,n.a.createElement("br",null)),a.frontmatter.street+" "+a.frontmatter.number,n.a.createElement("br",null),a.frontmatter.zip+" "+a.frontmatter.city,n.a.createElement("br",null)),n.a.createElement("hr",null),r&&n.a.createElement(m,{talks:r.edges.map(function(e){return e.node})}))};var o="1741275328"},206:function(e,t,a){"use strict";var r=a(207),n=a(0),l=a.n(n),c=a(225),m=a.n(c),o=a(91),i=a(315),s=a(319),u=a(320),g=(a(226),a(227),a(19),a(13)),E=a.n(g),d=a(312),f=a(313),p=a(314),b=a(316),h=a(317),A=a(321),w=a(318);var k=function(e){var t=e.to,a=e.children;return l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"link-item",tag:function(e){return l.a.createElement(E.a,Object.assign({},e,{to:t,activeClassName:"active"}),a)}}))},v=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a.state={collapsed:!1},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return l.a.createElement(p.a,{color:"light",light:!0,expand:"sm"},l.a.createElement(i.a,null,l.a.createElement(b.a,{to:"/",tag:function(e){return l.a.createElement(E.a,e)}},"Java User Group Görlitz"),l.a.createElement(h.a,{onClick:this.toggle}),l.a.createElement(A.a,{isOpen:this.state.collapsed,navbar:!0},l.a.createElement(w.a,{className:"ml-auto",navbar:!0},l.a.createElement(k,{to:"/"},"Aktuell"),l.a.createElement(k,{to:"/talks"},"Vorträge"),l.a.createElement(k,{to:"/unterstuetzer"},"Unterstützer"),l.a.createElement(k,{to:"/about"},"About"),l.a.createElement(k,{to:"/mitmachen"},"Mitmachen")))))},r}(l.a.Component),J=function(){return l.a.createElement("footer",{className:"container footer"},l.a.createElement("p",null,"© Manuel Mauky 2020 | ",l.a.createElement(o.Link,{to:"/impressum"},"Impressum")," |"," ",l.a.createElement(o.Link,{to:"/datenschutz"},"Datenschutz")))},U=a(215),y=a(228),G=a(216),x=function(e){e.logo;return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(u.a,{sm:"6",xs:"12",md:"12"},l.a.createElement("img",{alt:"Logo der JUG Görlitz",src:a(208)})),l.a.createElement(u.a,{sm:"6",xs:"12",md:"12"},l.a.createElement("h3",null,"Wir sind Mitglied im",l.a.createElement("br",null),l.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband")),l.a.createElement("h3",null,"Andere Medien"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/jug_gr"},l.a.createElement(U.a,{icon:y.c})," Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/juggr"},l.a.createElement(U.a,{icon:y.a})," Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://groups.google.com/d/forum/juggr"},l.a.createElement(U.a,{icon:G.b})," Mailing-List")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/juggr"},l.a.createElement(U.a,{icon:y.b})," Github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://calendar.google.com/calendar/embed?src=gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com&ctz=Europe/Berlin"},l.a.createElement(U.a,{icon:G.a})," Kalender"),l.a.createElement("a",{href:"https://www.google.com/calendar/ical/gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com/public/basic.ics"},"(ICAL)")),l.a.createElement("li",null,l.a.createElement(U.a,{icon:G.c})," Feeds:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/atom.xml"},"Atom")),l.a.createElement("li",null,l.a.createElement("a",{href:"/rss.xml"},"RSS")),l.a.createElement("li",null,l.a.createElement("a",{href:"/feed.json"},"JSON")))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.herbstcampus.de"},l.a.createElement("img",{alt:"Banner für Herbstcampus 2020",src:"https://www.herbstcampus.de/common/images/konferenzen/herbstcampus.svg"})),l.a.createElement("br",null))},C=a(229);C.a.config={autoAddCss:!1};t.a=function(e){var t=e.children;e.data;return l.a.createElement(o.StaticQuery,{query:"1238061294",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"java, usergroup, görlitz, programmierung"}]},l.a.createElement("style",null,C.a.dom.css())),l.a.createElement(v,null),l.a.createElement(i.a,{style:{marginTop:"1em"}},l.a.createElement(s.a,null,l.a.createElement(u.a,{md:"9"},t),l.a.createElement(u.a,{md:"3"},l.a.createElement(x,{logo:e.logo})))),l.a.createElement(J,null))},data:r})}},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Java User Group Görlitz",description:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}},logo:{id:"43a23640-d8c5-5755-bb2e-d1e53867eebc",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAACj0lEQVQoz2NgQAJCQkIMtra2MC5LTk5OZ3R0dFFhYWG+qampcHZ29nRtbW2Fzs7OTaWlpee9gQCk0K+4V8y3fCoDVqCvrw9jsk2bNm1dXV3dxLlz5/YCDZXo7u7e3tXVNX/SpEnNJqamXJbWtrIghb7lU2z8K6bwoxhUVVUFpqdPnw4X6+/vX1dTUzMRKNbHwcEh3t7evgto2Ob6+npvExMT96rq6gkgdUGVU2OALjQCa/r58yfT7du3mSQkJBiAiplAYkDvWbe2tm6dMGHCroCAAL0pU6bsA7KPA71aHxER4TBx4sTjfX19Z7t7evrBXq6cMcG3fJotNh+DDXR2duYuLi52CgoKkgDx7e3t5VNSUuxgihISEpRy8vJdQGyvqrkmQRWT5vxv4rF82ajEAfLW7Obm5l4jIyMJYIRUODo6Ns2bN48Dqpc1KytrEdDgsPDw8Bhra2tXUNgiOYDRpWLe6s21non/m9l9wSJAwyp0dXW9WFhYJKqrq1cDI2G7pqamYktLy9TU1NSJQHprbGxsamRkZCUwSM6np6fP9/XzK+nu7FiTmldaa1G2tP9/k4DPp0apNLg15eXlbrm5uauAgd8KtKAaGH6rgWG2NSoqyqaxsXEV0KJiIH8mUHwjUK2GjY2NPTC2r9cWZys5lc8t6q5OtwMaOvFOgxY3AzAW586fP/9kfn7+EmCyWAJ00QqgIf0NDQ3LgHZxAcX2Ar29EBizvUD25vj4+DygwWsrK6uOSwlyKac0T5fWK13r8btJJPRLo2QKKLkUV1RUpAM1cwINDS8qKkoEsrk9PT1B4cWQlJRk5eTkFGBmZqZaUlJiBPR+GTCxRxQUFOR4eHqBI0qzeB3fjQZdQ6ArJQG1ZgMkACvozAAAAABJRU5ErkJggg==",aspectRatio:2.03,src:"/static/e9c103f16829b2a6e46db56f7af9a0e2/2ff3c/logo.png",srcSet:"/static/e9c103f16829b2a6e46db56f7af9a0e2/7c0ed/logo.png 200w,\n/static/e9c103f16829b2a6e46db56f7af9a0e2/647de/logo.png 400w,\n/static/e9c103f16829b2a6e46db56f7af9a0e2/2ff3c/logo.png 406w",sizes:"(max-width: 406px) 100vw, 406px"}}}}}},208:function(e,t,a){e.exports=a.p+"static/logo-e9c103f16829b2a6e46db56f7af9a0e2.png"}}]);
//# sourceMappingURL=component---src-templates-location-page-js-a3a449551d1077c93fc5.js.map
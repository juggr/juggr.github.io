(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{RgsR:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("a+oF"),m=a("IP2g"),i=a("wHSu"),c=a("Wbzz"),u=a("vbgS"),o=a("9eSz"),s=a.n(o),E=a("1Yj4"),f=a("ok1R"),d=a("rhny"),p=function(e){var t=e.speaker;return r.a.createElement(E.a,null,r.a.createElement(f.a,null,t.frontmatter.pic&&r.a.createElement(d.a,{sm:"6",xs:"12",style:{textAlign:"center",maxWidth:"400px"}},r.a.createElement(c.Link,{to:t.fields.slug},r.a.createElement(s.a,{alt:"speaker",fluid:t.frontmatter.pic.childImageSharp.fluid}))),r.a.createElement(d.a,{sm:"6",xs:"12"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(c.Link,{to:t.fields.slug},r.a.createElement("strong",null,t.frontmatter.name))),t.frontmatter.twitter_name&&r.a.createElement("p",null,"Twitter:"," ",r.a.createElement("a",{href:"https://twitter.com/"+t.frontmatter.twitter_name},"@"+t.frontmatter.twitter_name))),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.html}}))))},g=function(e){var t=e.speakerList;return r.a.createElement("span",{className:"lead"},"von"," ",u.a(", ")(t.map((function(e){return r.a.createElement(c.Link,{key:e.fields.slug,to:e.fields.slug},e.frontmatter.name)}))))},k=function(e){var t=e.location,a=t.frontmatter;return r.a.createElement(c.Link,{to:t.fields.slug},r.a.createElement("address",null,a.name,r.a.createElement("br",null),a.info&&r.a.createElement(r.a.Fragment,null,a.info,r.a.createElement("br",null)),a.street+" "+a.number,r.a.createElement("br",null),a.zip+" "+a.city,r.a.createElement("br",null)))},h=function(e){var t=e.tags;return t?r.a.createElement(r.a.Fragment,null,u.a(", ")(t.map((function(e){return r.a.createElement(c.Link,{key:e,to:"/tags/#"+e},r.a.createElement(m.a,{icon:i.d})," ",e)})))):null},v=function(e){var t=e.talk;return e.linkToDetailsPage?r.a.createElement("h2",null,r.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)):r.a.createElement("h2",null,t.frontmatter.title)};t.a=function(e){var t,a=e.talk,n=e.speakerList,m=e.location,i=e.linkToDetailsPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{talk:a,linkToDetailsPage:i}),r.a.createElement(g,{speakerList:n})," | ",Object(l.a)(a.frontmatter.date),r.a.createElement("p",null,r.a.createElement(h,{tags:a.frontmatter.tags})),r.a.createElement("article",{className:"talk-content"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),a.frontmatter.poster&&r.a.createElement(c.Link,{to:"/posters#"+a.frontmatter.poster.childImageSharp.id},r.a.createElement(s.a,{fluid:a.frontmatter.poster.childImageSharp.fluid})),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(p,{key:e.id,speaker:e})})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("p",null,"Datum: ",Object(l.a)(a.frontmatter.date),", ",null!==(t=a.frontmatter.time)&&void 0!==t?t:"19:00 Uhr"),a.frontmatter.virtual?r.a.createElement(r.a.Fragment,null,"Das Treffen findet Online statt. Siehe Beschreibung."):r.a.createElement(r.a.Fragment,null,"Ort: ",m?r.a.createElement(k,{location:m}):r.a.createElement("span",null,"wird noch bekannt gegeben"))),r.a.createElement("br",null),r.a.createElement("p",null,"Die Veranstaltung wird durch die ",r.a.createElement("i",null,"Java User Group Görlitz")," (im"," ",r.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband"),") organisiert.")))}},sruW:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),m=a("RgsR");t.default=function(e){var t=e.data,a=t.talk,n=t.speakers,i=t.location,c=n.edges.map((function(e){return e.node}));return r.a.createElement(l.a,null,r.a.createElement(m.a,{talk:a,speakerList:c,location:i,linkToDetailsPage:!1}))}}}]);
//# sourceMappingURL=component---src-templates-talk-page-js-b9321a82bee34d3ae49c.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{225:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});var n=a(0),r=a.n(n),l=a(237),c=a(260);t.default=function(e){var t=e.data,a=t.talk,n=t.speakers,m=t.location,i=n.edges.map(function(e){return e.node});return r.a.createElement(l.a,null,r.a.createElement(c.a,{talk:a,speakerList:i,location:m,linkToDetailsPage:!1}))};var m="280929526"},254:function(e,t,a){"use strict";var n=a(255),r=a.n(n);a(258),r.a.locale("de"),t.a=function(e){return r()(e).format("LL")}},260:function(e,t,a){"use strict";a(246);var n=a(0),r=a.n(n),l=a(254),c=a(247),m=a(248),i=a(73),u=a(249),o=a(256),s=a.n(o),E=a(236),f=function(e){var t=e.speaker;return r.a.createElement(E.d,null,r.a.createElement(E.k,null,t.frontmatter.pic&&r.a.createElement(E.b,{sm:"6",xs:"12",style:{textAlign:"center",maxWidth:"400px"}},r.a.createElement(i.Link,{to:t.fields.slug},r.a.createElement(s.a,{alt:"speaker",fluid:t.frontmatter.pic.childImageSharp.fluid}))),r.a.createElement(E.b,{sm:"6",xs:"12"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(i.Link,{to:t.fields.slug},r.a.createElement("strong",null,t.frontmatter.name))),t.frontmatter.twitter_name&&r.a.createElement("p",null,"Twitter:"," ",r.a.createElement("a",{href:"https://twitter.com/"+t.frontmatter.twitter_name},"@"+t.frontmatter.twitter_name))),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.html}}))))},d=function(e){var t=e.speakerList;return r.a.createElement("span",{className:"lead"},"von"," ",u.intersperse(", ")(t.map(function(e){return r.a.createElement(i.Link,{key:e.fields.slug,to:e.fields.slug},e.frontmatter.name)})))},p=function(e){var t=e.location,a=t.frontmatter;return r.a.createElement(i.Link,{to:t.fields.slug},r.a.createElement("address",null,a.name,r.a.createElement("br",null),a.info&&r.a.createElement(r.a.Fragment,null,a.info,r.a.createElement("br",null)),a.street+" "+a.number,r.a.createElement("br",null),a.zip+" "+a.city,r.a.createElement("br",null)))},k=function(e){var t=e.tags;return t?r.a.createElement(r.a.Fragment,null,u.intersperse(", ")(t.map(function(e){return r.a.createElement(i.Link,{key:e,to:"/tags/#"+e},r.a.createElement(c.a,{icon:m.d})," ",e)}))):null},g=function(e){var t=e.talk;return e.linkToDetailsPage?r.a.createElement("h2",null,r.a.createElement(i.Link,{to:t.fields.slug},t.frontmatter.title)):r.a.createElement("h2",null,t.frontmatter.title)};t.a=function(e){var t=e.talk,a=e.speakerList,n=e.location,c=e.linkToDetailsPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{talk:t,linkToDetailsPage:c}),r.a.createElement(d,{speakerList:a})," | ",Object(l.a)(t.frontmatter.date),r.a.createElement("p",null,r.a.createElement(k,{tags:t.frontmatter.tags})),r.a.createElement("article",{className:"talk-content"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),t.frontmatter.poster&&r.a.createElement(s.a,{fluid:t.frontmatter.poster.childImageSharp.fluid}),r.a.createElement("hr",null),a.map(function(e){return r.a.createElement(f,{key:e.id,speaker:e})}),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("p",null,"Datum: ",Object(l.a)(t.frontmatter.date),", 19:00 Uhr"),"Ort: ",n?r.a.createElement(p,{location:n}):r.a.createElement("span",null,"wird noch bekannt gegeben")),r.a.createElement("br",null),r.a.createElement("p",null,"Die Veranstaltung wird durch die ",r.a.createElement("i",null,"Java User Group Görlitz")," (im"," ",r.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband"),") organisiert.")))}}}]);
//# sourceMappingURL=component---src-templates-talk-page-js-a41e9b356d47b0cb8712.js.map
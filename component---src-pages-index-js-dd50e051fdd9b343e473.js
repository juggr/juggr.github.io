(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5wT3":function(e,t,a){"use strict";var n=a("wd/R"),r=a.n(n),l=a("KtqB"),m=a("KMkw"),i=a("+EPo");t.a=function(e){var t=e.allEvents,a=e.extractDate,n=e.today;if(t){var c=a||function(e){return e.frontmatter.date},o=l.a(c)(t);if(1===o.length)return o[0];var u=r()(n).startOf("day"),s=m.a((function(e){var t=r()(c(e)).startOf("day");return u.isSameOrBefore(t)}))(o);return s&&s.length>0?s[0]:i.a(o)[0]}}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("D5eF"),m=a("ZDN8"),i=a("KMkw"),c=a("Wbzz"),o=a("Bl7J"),u=a("5wT3"),s=a("a+oF"),f=a("RgsR"),d=a("hqJE"),E=a.n(d),p=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)),t.frontmatter.date&&r.a.createElement("p",null,Object(s.a)(t.frontmatter.date)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",null))};t.default=function(e){var t=e.data,a=t.talks.edges.map((function(e){return e.node})),n=t.posts?t.posts.edges.map((function(e){return e.node})):[];if(n.length>0){var c=l.a([m.a((function(e){return e.frontmatter.date}))])(n);return r.a.createElement(o.a,null,c.map((function(e){return r.a.createElement(p,{key:e.fields.slug,post:e})})))}var s=new Date,d=Object(u.a)({allEvents:a,today:s}),g=t.speakers,k=t.locations,h=g.edges.map((function(e){return e.node})),v=k.edges.map((function(e){return e.node})),w=i.a((function(e){return e.fields.locationId===d.frontmatter.location}))(v)[0],b=E()({allSpeakers:h,talk:d});return r.a.createElement(o.a,null,r.a.createElement(f.a,{talk:d,speakerList:b,location:w,linkToDetailsPage:!0}))}},RgsR:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("a+oF"),m=a("IP2g"),i=a("wHSu"),c=a("Wbzz"),o=a("vbgS"),u=a("9eSz"),s=a.n(u),f=a("1Yj4"),d=a("ok1R"),E=a("rhny"),p=function(e){var t=e.speaker;return r.a.createElement(f.a,null,r.a.createElement(d.a,null,t.frontmatter.pic&&r.a.createElement(E.a,{sm:"6",xs:"12",style:{textAlign:"center",maxWidth:"400px"}},r.a.createElement(c.Link,{to:t.fields.slug},r.a.createElement(s.a,{alt:"speaker",fluid:t.frontmatter.pic.childImageSharp.fluid}))),r.a.createElement(E.a,{sm:"6",xs:"12"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(c.Link,{to:t.fields.slug},r.a.createElement("strong",null,t.frontmatter.name))),t.frontmatter.twitter_name&&r.a.createElement("p",null,"Twitter:"," ",r.a.createElement("a",{href:"https://twitter.com/"+t.frontmatter.twitter_name},"@"+t.frontmatter.twitter_name))),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.html}}))))},g=function(e){var t=e.speakerList;return r.a.createElement("span",{className:"lead"},"von"," ",o.a(", ")(t.map((function(e){return r.a.createElement(c.Link,{key:e.fields.slug,to:e.fields.slug},e.frontmatter.name)}))))},k=function(e){var t=e.location,a=t.frontmatter;return r.a.createElement(c.Link,{to:t.fields.slug},r.a.createElement("address",null,a.name,r.a.createElement("br",null),a.info&&r.a.createElement(r.a.Fragment,null,a.info,r.a.createElement("br",null)),a.street+" "+a.number,r.a.createElement("br",null),a.zip+" "+a.city,r.a.createElement("br",null)))},h=function(e){var t=e.tags;return t?r.a.createElement(r.a.Fragment,null,o.a(", ")(t.map((function(e){return r.a.createElement(c.Link,{key:e,to:"/tags/#"+e},r.a.createElement(m.a,{icon:i.d})," ",e)})))):null},v=function(e){var t=e.talk;return e.linkToDetailsPage?r.a.createElement("h2",null,r.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)):r.a.createElement("h2",null,t.frontmatter.title)};t.a=function(e){var t,a=e.talk,n=e.speakerList,m=e.location,i=e.linkToDetailsPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{talk:a,linkToDetailsPage:i}),r.a.createElement(g,{speakerList:n})," | ",Object(l.a)(a.frontmatter.date),r.a.createElement("p",null,r.a.createElement(h,{tags:a.frontmatter.tags})),r.a.createElement("article",{className:"talk-content"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),a.frontmatter.poster&&r.a.createElement(c.Link,{to:"/posters#"+a.frontmatter.poster.childImageSharp.id},r.a.createElement(s.a,{fluid:a.frontmatter.poster.childImageSharp.fluid})),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(p,{key:e.id,speaker:e})})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("p",null,"Datum: ",Object(l.a)(a.frontmatter.date),", ",null!==(t=a.frontmatter.time)&&void 0!==t?t:"19:00 Uhr"),a.frontmatter.virtual?r.a.createElement(r.a.Fragment,null,"Das Treffen findet Online statt. Siehe Beschreibung."):r.a.createElement(r.a.Fragment,null,"Ort: ",m?r.a.createElement(k,{location:m}):r.a.createElement("span",null,"wird noch bekannt gegeben"))),r.a.createElement("br",null),r.a.createElement("p",null,"Die Veranstaltung wird durch die ",r.a.createElement("i",null,"Java User Group Görlitz")," (im"," ",r.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband"),") organisiert.")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-dd50e051fdd9b343e473.js.map
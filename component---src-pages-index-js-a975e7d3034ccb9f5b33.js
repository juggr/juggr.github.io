(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return E});var n=a(0),r=a.n(n),l=a(248),i=a(73),c=a(237),u=a(258),m=a(253),o=a(259),s=a(256),f=a.n(s),d=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement(i.Link,{to:t.fields.slug},t.frontmatter.title)),t.frontmatter.date&&r.a.createElement("p",null,Object(m.a)(t.frontmatter.date)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",null))};t.default=function(e){var t=e.data,a=t.talks.edges.map(function(e){return e.node}),n=t.posts?t.posts.edges.map(function(e){return e.node}):[];if(n.length>0){var i=l.sortWith([l.descend(function(e){return e.frontmatter.date})])(n);return r.a.createElement(c.a,null,i.map(function(e){return r.a.createElement(d,{key:e.fields.slug,post:e})}))}var m=new Date,s=Object(u.a)({allEvents:a,today:m}),E=t.speakers,p=t.locations,g=E.edges.map(function(e){return e.node}),k=p.edges.map(function(e){return e.node}),v=l.filter(function(e){return e.fields.locationId===s.frontmatter.location})(k)[0],h=f()({allSpeakers:g,talk:s});return r.a.createElement(c.a,null,r.a.createElement(o.a,{talk:s,speakerList:h,location:v,linkToDetailsPage:!0}))};var E="245820699"},253:function(e,t,a){"use strict";var n=a(254),r=a.n(n);a(257),r.a.locale("de"),t.a=function(e){return r()(e).format("LL")}},256:function(e,t,a){var n=a(248);e.exports=function(e){var t=e.allSpeakers,a=e.talk;return n.innerJoin(function(e,t){return e.fields.slug==="/speakers/"+t+"/"},t,a.frontmatter.speaker)}},258:function(e,t,a){"use strict";var n=a(254),r=a.n(n),l=a(248);t.a=function(e){var t=e.allEvents,a=e.extractDate,n=e.today;if(t){var i=a||function(e){return e.frontmatter.date},c=l.sortBy(i)(t);if(1===c.length)return c[0];var u=r()(n).startOf("day"),m=l.filter(function(e){var t=r()(i(e)).startOf("day");return u.isSameOrBefore(t)})(c);return m&&m.length>0?m[0]:l.reverse(c)[0]}}},259:function(e,t,a){"use strict";a(245);var n=a(0),r=a.n(n),l=a(253),i=a(246),c=a(247),u=a(73),m=a(248),o=a(255),s=a.n(o),f=a(236),d=function(e){var t=e.speaker;return r.a.createElement(f.d,null,r.a.createElement(f.k,null,t.frontmatter.pic&&r.a.createElement(f.b,{sm:"6",xs:"12",style:{textAlign:"center",maxWidth:"400px"}},r.a.createElement(u.Link,{to:t.fields.slug},r.a.createElement(s.a,{alt:"speaker",fluid:t.frontmatter.pic.childImageSharp.fluid}))),r.a.createElement(f.b,{sm:"6",xs:"12"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(u.Link,{to:t.fields.slug},r.a.createElement("strong",null,t.frontmatter.name))),t.frontmatter.twitter_name&&r.a.createElement("p",null,"Twitter:"," ",r.a.createElement("a",{href:"https://twitter.com/"+t.frontmatter.twitter_name},"@"+t.frontmatter.twitter_name))),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.html}}))))},E=function(e){var t=e.speakerList;return r.a.createElement("span",{className:"lead"},"von"," ",m.intersperse(", ")(t.map(function(e){return r.a.createElement(u.Link,{key:e.fields.slug,to:e.fields.slug},e.frontmatter.name)})))},p=function(e){var t=e.location,a=t.frontmatter;return r.a.createElement(u.Link,{to:t.fields.slug},r.a.createElement("address",null,a.name,r.a.createElement("br",null),a.info&&r.a.createElement(r.a.Fragment,null,a.info,r.a.createElement("br",null)),a.street+" "+a.number,r.a.createElement("br",null),a.zip+" "+a.city,r.a.createElement("br",null)))},g=function(e){var t=e.tags;return t?r.a.createElement(r.a.Fragment,null,m.intersperse(", ")(t.map(function(e){return r.a.createElement(u.Link,{key:e,to:"/tags/#"+e},r.a.createElement(i.a,{icon:c.d})," ",e)}))):null},k=function(e){var t=e.talk;return e.linkToDetailsPage?r.a.createElement("h2",null,r.a.createElement(u.Link,{to:t.fields.slug},t.frontmatter.title)):r.a.createElement("h2",null,t.frontmatter.title)};t.a=function(e){var t=e.talk,a=e.speakerList,n=e.location,i=e.linkToDetailsPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{talk:t,linkToDetailsPage:i}),r.a.createElement(E,{speakerList:a})," | ",Object(l.a)(t.frontmatter.date),r.a.createElement("p",null,r.a.createElement(g,{tags:t.frontmatter.tags})),r.a.createElement("article",null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),t.frontmatter.poster&&r.a.createElement(s.a,{fluid:t.frontmatter.poster.childImageSharp.fluid}),r.a.createElement("hr",null),a.map(function(e){return r.a.createElement(d,{key:e.id,speaker:e})}),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("p",null,"Datum: ",Object(l.a)(t.frontmatter.date),", 19:00 Uhr"),"Ort: ",n?r.a.createElement(p,{location:n}):r.a.createElement("span",null,"wird noch bekannt gegeben")),r.a.createElement("br",null),r.a.createElement("p",null,"Die Veranstaltung wird durch die ",r.a.createElement("i",null,"Java User Group Görlitz")," (im"," ",r.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband"),") organisiert.")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a975e7d3034ccb9f5b33.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u}),a(238);var n=a(0),r=a.n(n),l=a(73),c=a(235),o=a(243),i=a(239),m=a(249),s=a(245);t.default=function(e){var t=e.data,a=t.talks.edges.map(function(e){return e.node}),n=t.speakers.edges.map(function(e){return e.node}),u=new Date,g=Object(m.a)({allEvents:a,today:u});return r.a.createElement(c.a,null,r.a.createElement("h2",null,"Alle Vortragsthemen"),r.a.createElement("ul",null,a.map(function(e){var t=Object(s.a)({allSpeakers:n,talk:e}),a=i.g(", ")(t.map(function(e){return e.frontmatter.name})),c=g&&e.frontmatter.date===g.frontmatter.date?{backgroundColor:"rgb(231, 231, 231)"}:void 0;return r.a.createElement("li",{key:e.id,style:c},r.a.createElement("span",{className:"lead"},r.a.createElement(l.Link,{to:e.fields.slug},e.frontmatter.title))," | ",r.a.createElement("time",{dateTime:e.frontmatter.date},Object(o.a)(e.frontmatter.date)),r.a.createElement("p",null,"von ",a))})))};var u="3236424325"},232:function(e){e.exports={data:{site:{siteMetadata:{title:"Java User Group Görlitz",description:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}}}}},233:function(e,t,a){},235:function(e,t,a){"use strict";var n=a(232),r=a(0),l=a.n(r),c=a(240),o=a.n(c),i=a(73),m=a(231),s=(a(241),a(233),a(15)),u=a.n(s),g=(a(74),a(9)),d=a.n(g),E=function(e){var t=e.to,a=e.children;return l.a.createElement(m.f,null,l.a.createElement(m.g,{className:"link-item",tag:function(e){return l.a.createElement(d.a,Object.assign({},e,{to:t,activeClassName:"active"}),a)}}))},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a.state={collapsed:!1},a}return u()(t,e),t.prototype.render=function(){return l.a.createElement(m.h,{color:"light",light:!0,expand:"sm"},l.a.createElement(m.d,null,l.a.createElement(m.i,{to:"/",tag:function(e){return l.a.createElement(d.a,e)}},"Java User Group Görlitz"),l.a.createElement(m.j,{onClick:this.toggle}),l.a.createElement(m.c,{isOpen:this.state.collapsed,navbar:!0},l.a.createElement(m.e,{className:"ml-auto",navbar:!0},l.a.createElement(E,{to:"/"},"Aktuell"),l.a.createElement(E,{to:"/talks"},"Vorträge"),l.a.createElement(E,{to:"/unterstuetzer"},"Unterstützer"),l.a.createElement(E,{to:"/about"},"About"),l.a.createElement(E,{to:"/mitmachen"},"Mitmachen")))))},t}(l.a.Component),f=function(){return l.a.createElement("footer",{className:"container footer"},l.a.createElement("p",null,"© Manuel Mauky 2018 | ",l.a.createElement(i.Link,{to:"/impressum"},"Impressum")," |"," ",l.a.createElement(i.Link,{to:"/datenschutz"},"Datenschutz")))},h=a(236),v=a(242),b=a(237),k=function(){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{alt:"Logo der JUG Görlitz",src:"/images/logo.png",className:"img-responsive"}),l.a.createElement("h3",null,"Wir sind Mitglied im",l.a.createElement("br",null),l.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband")),l.a.createElement("h3",null,"Andere Medien"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/jug_gr"},l.a.createElement(h.a,{icon:v.d})," Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/juggr"},l.a.createElement(h.a,{icon:v.a})," Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://plus.google.com/+Jug-grDe",rel:"publisher"},l.a.createElement(h.a,{icon:v.c})," Google+")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://groups.google.com/d/forum/juggr"},l.a.createElement(h.a,{icon:b.b})," Mailing-List")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/juggr"},l.a.createElement(h.a,{icon:v.b})," Github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://calendar.google.com/calendar/embed?src=gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com&ctz=Europe/Berlin"},l.a.createElement(h.a,{icon:b.a})," Kalender"),l.a.createElement("a",{href:"https://www.google.com/calendar/ical/gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com/public/basic.ics"},"(ICAL)"))),l.a.createElement("br",null),l.a.createElement("a",{href:"https://jax.de/"},l.a.createElement("img",{alt:"Banner für die WJAX 2018",className:"img-responsive",src:"/images/jax_banner.png"})),l.a.createElement("br",null),l.a.createElement("p",null,"Unterstützt durch:"),l.a.createElement("a",{href:"https://www.sogehtsoftware.de"},l.a.createElement("img",{alt:"Logo von Saxonia Systems AG",className:"img-responsive",src:"/images/saxonia_logo.png"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://mitp.de/"},l.a.createElement("img",{alt:"Logo des mitp Verlags",className:"img-responsive",src:"/images/mitp_logo.jpeg"})))};t.a=function(e){var t=e.children;return e.data,l.a.createElement(i.StaticQuery,{query:"1698205358",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"java, usergroup, görlitz, programmierung"}]}),l.a.createElement(p,null),l.a.createElement(m.d,{style:{marginTop:"1em"}},l.a.createElement(m.k,null,l.a.createElement(m.b,{md:"9"},t),l.a.createElement(m.b,{md:"3"},l.a.createElement(k,null)))),l.a.createElement(f,null))},data:n})}},243:function(e,t,a){"use strict";var n=a(244),r=a.n(n);a(247),r.a.locale("de"),t.a=function(e){return r()(e).format("LL")}},245:function(e,t,a){"use strict";var n=a(239);t.a=function(e){var t=e.allSpeakers,a=e.talk;return n.e(function(e,t){return e.fields.slug==="/speakers/"+t+"/"},t,a.frontmatter.speaker)}},249:function(e,t,a){"use strict";var n=a(244),r=a.n(n),l=a(239);t.a=function(e){var t=e.allEvents,a=e.extractDate,n=e.today;if(t){var c=a||function(e){return e.frontmatter.date},o=l.i(c)(t);if(1===o.length)return o[0];var i=r()(n),m=l.d(function(e){var t=r()(c(e));return i.isBefore(t)})(o);return m&&m.length>0?m[0]:l.h(o)[0]}}}}]);
//# sourceMappingURL=component---src-pages-talks-js-5d7083489beb8e35ee98.js.map
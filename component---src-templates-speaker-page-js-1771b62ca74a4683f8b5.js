(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c}),a(278);var r=a(0),l=a.n(r),n=a(85),i=a(284),o=a.n(i),s=a(268);t.default=function(e){var t=e.data,a=t.speaker,r=t.talks;return l.a.createElement(s.a,null,l.a.createElement("h2",null,a.frontmatter.name),a.frontmatter.pic&&l.a.createElement("div",{style:{maxWidth:"400px"}},l.a.createElement(o.a,{alt:"speaker",fluid:a.frontmatter.pic.childImageSharp.fluid})),a.frontmatter.twitter_name&&l.a.createElement("p",null,"Twitter:"," ",l.a.createElement("a",{href:"https://twitter.com/"+a.frontmatter.twitter_name},"@"+a.frontmatter.twitter_name)),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a.html}}),l.a.createElement("hr",null),r&&l.a.createElement(l.a.Fragment,null,r.edges.length," Talks:",l.a.createElement("ul",null,r.edges.map(function(e){var t=e.node;return l.a.createElement("li",{key:t.fields.slug},l.a.createElement(n.Link,{to:t.fields.slug},t.frontmatter.title))}))))};var c="1356444439"},268:function(e,t,a){"use strict";var r=a(269),l=a(0),n=a.n(l),i=a(279),o=a.n(i),s=a(85),c=a(267),d=(a(280),a(270),a(21)),u=a.n(d),f=(a(86),a(12)),m=a.n(f),p=function(e){var t=e.to,a=e.children;return n.a.createElement(c.f,null,n.a.createElement(c.g,{className:"link-item",tag:function(e){return n.a.createElement(m.a,Object.assign({},e,{to:t,activeClassName:"active"}),a)}}))},A=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a.state={collapsed:!1},a}return u()(t,e),t.prototype.render=function(){return n.a.createElement(c.h,{color:"light",light:!0,expand:"sm"},n.a.createElement(c.d,null,n.a.createElement(c.i,{to:"/",tag:function(e){return n.a.createElement(m.a,e)}},"Java User Group Görlitz"),n.a.createElement(c.j,{onClick:this.toggle}),n.a.createElement(c.c,{isOpen:this.state.collapsed,navbar:!0},n.a.createElement(c.e,{className:"ml-auto",navbar:!0},n.a.createElement(p,{to:"/"},"Aktuell"),n.a.createElement(p,{to:"/talks"},"Vorträge"),n.a.createElement(p,{to:"/unterstuetzer"},"Unterstützer"),n.a.createElement(p,{to:"/about"},"About"),n.a.createElement(p,{to:"/mitmachen"},"Mitmachen")))))},t}(n.a.Component),g=function(){return n.a.createElement("footer",{className:"container footer"},n.a.createElement("p",null,"© Manuel Mauky 2018 | ",n.a.createElement(s.Link,{to:"/impressum"},"Impressum")," |"," ",n.a.createElement(s.Link,{to:"/datenschutz"},"Datenschutz")))},b=a(276),h=a(281),E=a(277),y=function(e){return e.logo,n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",null,n.a.createElement(c.k,null,n.a.createElement(c.b,{sm:"6",xs:"12",md:"12"},n.a.createElement("img",{alt:"Logo der JUG Görlitz",src:a(272)})),n.a.createElement(c.b,{sm:"6",xs:"12",md:"12"},n.a.createElement("h3",null,"Wir sind Mitglied im",n.a.createElement("br",null),n.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband")),n.a.createElement("h3",null,"Andere Medien"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/jug_gr"},n.a.createElement(b.a,{icon:h.d})," Twitter")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/juggr"},n.a.createElement(b.a,{icon:h.a})," Facebook")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://plus.google.com/+Jug-grDe",rel:"publisher"},n.a.createElement(b.a,{icon:h.c})," Google+")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://groups.google.com/d/forum/juggr"},n.a.createElement(b.a,{icon:E.b})," Mailing-List")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/juggr"},n.a.createElement(b.a,{icon:h.b})," Github")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://calendar.google.com/calendar/embed?src=gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com&ctz=Europe/Berlin"},n.a.createElement(b.a,{icon:E.a})," Kalender"),n.a.createElement("a",{href:"https://www.google.com/calendar/ical/gtgjid1tkrv0pl7o1hsqr3d8d8%40group.calendar.google.com/public/basic.ics"},"(ICAL)")))))),n.a.createElement("br",null),n.a.createElement("a",{href:"https://jax.de/"},n.a.createElement("img",{alt:"Banner für die WJAX 2018",src:a(273)})),n.a.createElement("br",null),n.a.createElement("p",null,"Unterstützt durch:"),n.a.createElement("a",{href:"https://www.sogehtsoftware.de"},n.a.createElement("img",{alt:"Logo von Saxonia Systems AG",src:a(274)})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("a",{href:"https://mitp.de/"},n.a.createElement("img",{alt:"Logo des mitp Verlags",src:a(275)})))},w=a(282);w.a.config={autoAddCss:!1},t.a=function(e){var t=e.children;return e.data,n.a.createElement(s.StaticQuery,{query:"3517534738",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"java, usergroup, görlitz, programmierung"}]},n.a.createElement("style",null,w.a.dom.css())),n.a.createElement(A,null),n.a.createElement(c.d,{style:{marginTop:"1em"}},n.a.createElement(c.k,null,n.a.createElement(c.b,{md:"9"},t),n.a.createElement(c.b,{md:"3"},n.a.createElement(y,{logo:e.logo})))),n.a.createElement(g,null))},data:r})}},269:function(e){e.exports={data:{site:{siteMetadata:{title:"Java User Group Görlitz",description:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}},logo:{id:"5eb38168-5a7a-5307-b891-2bf1dbbcf752",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAACj0lEQVQoz2NgQAJCQkIMtra2MC5LTk5OZ3R0dFFhYWG+qampcHZ29nRtbW2Fzs7OTaWlpee9gQCk0K+4V8y3fCoDVqCvrw9jsk2bNm1dXV3dxLlz5/YCDZXo7u7e3tXVNX/SpEnNJqamXJbWtrIghb7lU2z8K6bwoxhUVVUFpqdPnw4X6+/vX1dTUzMRKNbHwcEh3t7evgto2Ob6+npvExMT96rq6gkgdUGVU2OALjQCa/r58yfT7du3mSQkJBiAiplAYkDvWbe2tm6dMGHCroCAAL0pU6bsA7KPA71aHxER4TBx4sTjfX19Z7t7evrBXq6cMcG3fJotNh+DDXR2duYuLi52CgoKkgDx7e3t5VNSUuxgihISEpRy8vJdQGyvqrkmQRWT5vxv4rF82ajEAfLW7Obm5l4jIyMJYIRUODo6Ns2bN48Dqpc1KytrEdDgsPDw8Bhra2tXUNgiOYDRpWLe6s21non/m9l9wSJAwyp0dXW9WFhYJKqrq1cDI2G7pqamYktLy9TU1NSJQHprbGxsamRkZCUwSM6np6fP9/XzK+nu7FiTmldaa1G2tP9/k4DPp0apNLg15eXlbrm5uauAgd8KtKAaGH6rgWG2NSoqyqaxsXEV0KJiIH8mUHwjUK2GjY2NPTC2r9cWZys5lc8t6q5OtwMaOvFOgxY3AzAW586fP/9kfn7+EmCyWAJ00QqgIf0NDQ3LgHZxAcX2Ar29EBizvUD25vj4+DygwWsrK6uOSwlyKac0T5fWK13r8btJJPRLo2QKKLkUV1RUpAM1cwINDS8qKkoEsrk9PT1B4cWQlJRk5eTkFGBmZqZaUlJiBPR+GTCxRxQUFOR4eHqBI0qzeB3fjQZdQ6ArJQG1ZgMkACvozAAAAABJRU5ErkJggg==",aspectRatio:2.03,src:"/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-673cd.png",srcSet:"/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-4dc8e.png 200w,\n/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-d154e.png 400w,\n/static/logo-e9c103f16829b2a6e46db56f7af9a0e2-673cd.png 406w",sizes:"(max-width: 406px) 100vw, 406px"}}}}}},270:function(e,t,a){},272:function(e,t,a){e.exports=a.p+"static/logo-e9c103f16829b2a6e46db56f7af9a0e2.png"},273:function(e,t,a){e.exports=a.p+"static/jax_banner-9b74e1c4795f7dc0b2da6138d8905f60.png"},274:function(e,t,a){e.exports=a.p+"static/saxsys_logo-e011e3b221db3ea703df94f9ce16b5be.jpg"},275:function(e,t){e.exports="data:image/jpeg;base64,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"},278:function(e,t,a){var r=a(22).f,l=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in l||a(23)&&r(l,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},284:function(e,t,a){"use strict";var r=a(24);t.__esModule=!0,t.default=void 0;var l,n=r(a(21)),i=r(a(60)),o=r(a(130)),s=r(a(131)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},p=[],A=null,g=function(){if(null!==A)return A;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return A=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1";return"<img "+i+o+t+a+n+l+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},h=function(e){var t=e.style,a=e.onLoad,r=e.onError,l=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,s.default)({},l,{onLoad:a,onError:r,style:(0,s.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};h.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,l=!0,n=!1;return!m(t)&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,l=!1,n=!0),"undefined"==typeof window&&(r=!1,l=!1),a.state={isVisible:r,imgLoaded:l,IOSupported:n},a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&function(e,t){(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),l).observe(e),p.push([e,t])}(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},a.render=function(){var e,t=this,a=u(this.props),r=a.title,l=a.alt,n=a.className,i=a.outerWrapperClassName,o=a.style,d=void 0===o?{}:o,f=a.imgStyle,m=void 0===f?{}:f,p=a.placeholderStyle,A=void 0===p?{}:p,E=a.fluid,y=a.fixed,w=a.backgroundColor,S=a.Tag;e="boolean"==typeof w?"lightgray":w;var K=(0,s.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},m,A),v=(0,s.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},m);if(E){var U=E;return U.srcWebp&&U.srcSetWebp&&g()&&(U.src=U.srcWebp,U.srcSet=U.srcSetWebp),c.default.createElement(S,{className:(i||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===d.position?"initial":"relative"}},c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},d),ref:this.handleRef},c.default.createElement(S,{style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),U.base64&&c.default.createElement(h,{alt:l,title:r,src:U.base64,style:K}),U.tracedSVG&&c.default.createElement(h,{alt:l,title:r,src:U.tracedSVG,style:K}),e&&c.default.createElement(S,{title:r,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement(h,{alt:l,title:r,srcSet:U.srcSet,src:U.src,sizes:U.sizes,style:v,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()},onError:this.props.onError}),c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:l,title:r},U))}})))}if(y){var k=y,x=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},d);return"inherit"===d.display&&delete x.display,k.srcWebp&&k.srcSetWebp&&g()&&(k.src=k.srcWebp,k.srcSet=k.srcSetWebp),c.default.createElement(S,{className:(i||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===d.position?"initial":"relative"}},c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef},k.base64&&c.default.createElement(h,{alt:l,title:r,src:k.base64,style:K}),k.tracedSVG&&c.default.createElement(h,{alt:l,title:r,src:k.tracedSVG,style:K}),e&&c.default.createElement(S,{title:r,style:{backgroundColor:e,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&c.default.createElement(h,{alt:l,title:r,width:k.width,height:k.height,srcSet:k.srcSet,src:k.src,style:v,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()},onError:this.props.onError}),c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:l,title:r,width:k.width,height:k.height},k))}})))}return null},t}(c.default.Component);E.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:y,sizes:w,fixed:y,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),outerWrapperClassName:d.default.oneOfType([d.default.string,d.default.object]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,position:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var S=E;t.default=S}}]);
//# sourceMappingURL=component---src-templates-speaker-page-js-1771b62ca74a4683f8b5.js.map
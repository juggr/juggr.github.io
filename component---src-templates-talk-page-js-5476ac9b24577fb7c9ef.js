(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var r=a(0),n=a.n(r),i=a(210),l=a(354);t.default=function(e){var t=e.data,a=t.talk,r=t.speakers,s=t.location,o=r.edges.map(function(e){return e.node});return n.a.createElement(i.a,null,n.a.createElement(l.a,{talk:a,speakerList:o,location:s,linkToDetailsPage:!1}))};var s="787498159"},217:function(e,t,a){"use strict";a(25),a(18),a(11),a(63),a(130),a(322);var r=a(15);t.__esModule=!0,t.default=void 0;var n,i=r(a(64)),l=r(a(65)),s=r(a(128)),o=r(a(129)),d=r(a(0)),c=r(a(62)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,E=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(V,(0,o.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},V=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&E&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,L=e.loading,k=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:z?1:0,transition:R?"opacity "+E+"ms":"none"},s),N="boolean"==typeof h?"lightgray":h,P={transitionDelay:E+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&P,s,f),x={title:t,alt:this.state.isVisible?"":a,style:j,className:m};if(g){var _=g,C=_[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),N&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&P)}),C.base64&&d.default.createElement(O,{src:C.base64,spreadProps:x,imageVariants:_,generateSources:w}),C.tracedSVG&&d.default.createElement(O,{src:C.tracedSVG,spreadProps:x,imageVariants:_,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(_),d.default.createElement(V,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},C,{imageVariants:_}))}}))}if(p){var F=p,G=F[0],M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},N&&d.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:N,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},R&&P)}),G.base64&&d.default.createElement(O,{src:G.base64,spreadProps:x,imageVariants:F,generateSources:w}),G.tracedSVG&&d.default.createElement(O,{src:G.tracedSVG,spreadProps:x,imageVariants:F,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(F),d.default.createElement(V,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},G,{imageVariants:F}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:R,sizes:T,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=z;t.default=N},224:function(e,t,a){"use strict";var r=a(317),n=a.n(r);a(340);n.a.locale("de");t.a=function(e){return n()(e).format("LL")}},354:function(e,t,a){"use strict";a(26);var r=a(0),n=a.n(r),i=a(224),l=a(227),s=a(229),o=a(91),d=a(362),c=a(217),u=a.n(c),f=a(403),m=a(407),g=a(408),p=function(e){var t=e.speaker;return n.a.createElement(f.a,null,n.a.createElement(m.a,null,t.frontmatter.pic&&n.a.createElement(g.a,{sm:"6",xs:"12",style:{textAlign:"center",maxWidth:"400px"}},n.a.createElement(o.Link,{to:t.fields.slug},n.a.createElement(u.a,{alt:"speaker",fluid:t.frontmatter.pic.childImageSharp.fluid}))),n.a.createElement(g.a,{sm:"6",xs:"12"},n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement(o.Link,{to:t.fields.slug},n.a.createElement("strong",null,t.frontmatter.name))),t.frontmatter.twitter_name&&n.a.createElement("p",null,"Twitter:"," ",n.a.createElement("a",{href:"https://twitter.com/"+t.frontmatter.twitter_name},"@"+t.frontmatter.twitter_name))),n.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.html}}))))},h=function(e){var t=e.speakerList;return n.a.createElement("span",{className:"lead"},"von"," ",d.a(", ")(t.map(function(e){return n.a.createElement(o.Link,{key:e.fields.slug,to:e.fields.slug},e.frontmatter.name)})))},E=function(e){var t=e.location,a=t.frontmatter;return n.a.createElement(o.Link,{to:t.fields.slug},n.a.createElement("address",null,a.name,n.a.createElement("br",null),a.info&&n.a.createElement(n.a.Fragment,null,a.info,n.a.createElement("br",null)),a.street+" "+a.number,n.a.createElement("br",null),a.zip+" "+a.city,n.a.createElement("br",null)))},b=function(e){var t=e.tags;return t?n.a.createElement(n.a.Fragment,null,d.a(", ")(t.map(function(e){return n.a.createElement(o.Link,{key:e,to:"/tags/#"+e},n.a.createElement(l.a,{icon:s.d})," ",e)}))):null},y=function(e){var t=e.talk;return e.linkToDetailsPage?n.a.createElement("h2",null,n.a.createElement(o.Link,{to:t.fields.slug},t.frontmatter.title)):n.a.createElement("h2",null,t.frontmatter.title)};t.a=function(e){var t,a=e.talk,r=e.speakerList,l=e.location,s=e.linkToDetailsPage;return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{talk:a,linkToDetailsPage:s}),n.a.createElement(h,{speakerList:r})," | ",Object(i.a)(a.frontmatter.date),n.a.createElement("p",null,n.a.createElement(b,{tags:a.frontmatter.tags})),n.a.createElement("article",{className:"talk-content"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),a.frontmatter.poster&&n.a.createElement(o.Link,{to:"/posters#"+a.frontmatter.poster.childImageSharp.id},n.a.createElement(u.a,{fluid:a.frontmatter.poster.childImageSharp.fluid})),n.a.createElement("hr",null),r.map(function(e){return n.a.createElement(p,{key:e.id,speaker:e})}),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("p",null,"Datum: ",Object(i.a)(a.frontmatter.date),", ",null!==(t=a.frontmatter.time)&&void 0!==t?t:"19:00 Uhr"),a.frontmatter.virtual?n.a.createElement(n.a.Fragment,null,"Das Treffen findet Online statt. Siehe Beschreibung."):n.a.createElement(n.a.Fragment,null,"Ort: ",l?n.a.createElement(E,{location:l}):n.a.createElement("span",null,"wird noch bekannt gegeben"))),n.a.createElement("br",null),n.a.createElement("p",null,"Die Veranstaltung wird durch die ",n.a.createElement("i",null,"Java User Group Görlitz")," (im"," ",n.a.createElement("a",{href:"http://www.ijug.eu/"},"iJUG Verband"),") organisiert.")))}}}]);
//# sourceMappingURL=component---src-templates-talk-page-js-5476ac9b24577fb7c9ef.js.map
"use strict";(self.webpackChunkjug_goerlitz=self.webpackChunkjug_goerlitz||[]).push([[743],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,a=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},3723:function(e,t,r){r.d(t,{G:function(){return O},L:function(){return p},M:function(){return E},P:function(){return b},S:function(){return A},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var a=r(7294),n=(r(3204),r(5697)),i=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,r=o(e,u);return a.createElement(a.Fragment,null,a.createElement(m,s({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:r,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,g);return a.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:i}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=a.createElement(f,s({},i,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return a.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],b=function(e){let{fallback:t}=e,r=o(e,v);return t?a.createElement(y,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const k=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:k},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],T=new Set;let x,I;const _=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,h=o(e,C);const{width:f,height:y,layout:w}=n,v=function(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(f,y,w),{style:b,className:E}=v,k=o(v,S),L=(0,a.useRef)(),_=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const O=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,f,y);return(0,a.useEffect)((()=>{x||(x=Promise.all([r.e(774),r.e(223)]).then(r.bind(r,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(_);if(I&&T.has(_))return;let t,a;return x.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=r(s({isLoading:!0,isLoaded:T.has(_),image:n},h)),T.has(_)||(t=requestAnimationFrame((()=>{L.current&&(a=o(L.current,_,T,i,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{T.has(_)&&I&&(L.current.innerHTML=I(s({isLoading:T.has(_),isLoaded:T.has(_),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,a.createElement)(t,s({},k,{style:s({},b,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));O.propTypes=L,O.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],P=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:k,width:P,height:P,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(W=O,function(e){let{src:t,__imageData:r,__error:n}=e,i=o(e,z);return n&&console.warn(n),r?a.createElement(W,s({image:r},i)):(console.warn("Image not loaded",t),null)});var W;A.displayName="StaticImage",A.propTypes=q},2596:function(e,t,r){r.d(t,{F:function(){return i}});var a=r(7294),n=r(7904);const i=()=>a.createElement(a.Fragment,null,a.createElement("title",null,"Java User Group Görlitz"),a.createElement("meta",{name:"description",content:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}),a.createElement("meta",{name:"keywords",content:"java, usergroup, görlitz, programmierung"}),a.createElement("style",null,n.ZP.dom.css()))},8445:function(e,t,r){r.r(t),r.d(t,{Head:function(){return d.F}});var a=r(7294),n=r(4854),i=r(1210),s=r(3723),o=r(8595),l=r(267),c=r(1252),d=r(2596);t.default=e=>{let{data:t}=e;const{talks:r}=t,d=r.edges.map((e=>e.node)).filter((e=>e.frontmatter.poster));return a.createElement(i.Z,null,a.createElement("h2",null,"Alle JUG-Plakate"),a.createElement(o.Z,null,a.createElement("p",null,"Unsere Plakate werden von ",a.createElement(n.Link,{to:"/speakers/marlene_knoche"},"Marlene Knoche")," gestaltet. Sie macht auch viele andere Kunstprojekte. ",a.createElement("br",null),"Schaut doch mal auf ihrer Webseite ",a.createElement("a",{href:"https://www.sanguinik.de/"},"www.sanguinik.de")," vorbei."),a.createElement(l.Z,null,d.map((e=>{var t;return a.createElement(c.Z,{key:e.id,md:6,sm:12},a.createElement("div",{style:{margin:".5rem 0"},id:e.frontmatter.poster.childImageSharp.id},a.createElement(n.Link,{to:e.fields.slug},a.createElement(s.G,{title:e.frontmatter.poster_alt,alt:null!==(t=e.frontmatter.poster_alt)&&void 0!==t?t:"Poster für "+e.frontmatter.title,image:e.frontmatter.poster.childImageSharp.gatsbyImageData,style:{border:"solid 1px #aaa"}}))))})))))}}}]);
//# sourceMappingURL=component---src-pages-posters-tsx-e5ebfca8b1df096c1d82.js.map
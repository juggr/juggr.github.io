"use strict";(self.webpackChunkjug_goerlitz=self.webpackChunkjug_goerlitz||[]).push([[988],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{G:function(){return I},L:function(){return p},M:function(){return v},P:function(){return E},S:function(){return F},_:function(){return o},a:function(){return i},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${n}' width='${a}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=o(e,u);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,m);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var b;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const y=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,y);return t?r.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=w.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(w,i({},e)),r.createElement("noscript",null,r.createElement(w,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=w.propTypes;const k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},z={image:s().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],C=new Set;let _,L;const T=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:u,onStartLoad:g,onLoad:p,onError:m}=e,h=o(e,S);const{width:f,height:w,layout:b}=n,y=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,w,b),{style:E,className:v}=y,k=o(y,x),z=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${a}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,f,w);return(0,r.useEffect)((()=>{_||(_=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=z.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void C.add(T);if(L&&C.has(T))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;z.current&&(z.current.innerHTML=a(i({isLoading:!0,isLoaded:C.has(T),image:n},h)),C.has(T)||(t=requestAnimationFrame((()=>{z.current&&(r=o(z.current,T,C,s,g,p,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{C.has(T)&&L&&(z.current.innerHTML=L(i({isLoading:C.has(T),isLoaded:C.has(T),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:c}),className:`${v}${d?` ${d}`:""}`,ref:z,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));I.propTypes=z,I.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],$=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},G=new Set(["fixed","fullWidth","constrained"]),j={src:s().string.isRequired,alt:k,width:$,height:$,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!G.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},F=(N=I,function(e){let{src:t,__imageData:a,__error:n}=e,s=o(e,O);return n&&console.warn(n),a?r.createElement(N,i({image:a},s)):(console.warn("Image not loaded",t),null)});var N;F.displayName="StaticImage",F.propTypes=j},2596:function(e,t,a){a.d(t,{F:function(){return s}});var r=a(7294),n=a(7904);const s=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"Java User Group Görlitz"),r.createElement("meta",{name:"description",content:"Website der JUG Görlitz. Wir organisieren regelmäßige kostenfreie Vorträge rund um das Thema Programmierung und Java"}),r.createElement("meta",{name:"keywords",content:"java, usergroup, görlitz, programmierung"}),r.createElement("style",null,n.ZP.dom.css()))},7995:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l.F}});var r=a(7294),n=a(3723),s=a(267),i=a(1252),o=a(1210),l=a(2596);const c=e=>{let{name:t,link:a,mapsLink:n,addressFields:s}=e;return r.createElement("div",{style:{marginBottom:"2rem"}},r.createElement("p",{style:{marginBottom:"0"}},r.createElement("a",{href:a},r.createElement("strong",null,t))),s.map((e=>r.createElement("p",{key:e,style:{marginBottom:"0"}},e))),r.createElement("p",null,r.createElement("a",{href:n},"in Google Maps anzeigen")))},d={maxWidth:"500px",marginTop:"2em",marginBottom:"3em",borderBottom:"solid 1px #ddd"},u="../../content/images",g=e=>{let{sponsors:t,children:a}=e;return r.createElement("div",{style:d},r.createElement(s.Z,null,t.map((e=>r.createElement(i.Z,{key:e.link},r.createElement("a",{"aria-label":"Link zum Sponsor",href:e.link},e.logo))))),r.createElement("p",{style:{marginTop:"1em"}},a))},p=e=>{let{sponsor:t,children:a}=e;return r.createElement(g,{sponsors:[t]},a)};t.default=()=>r.createElement(o.Z,null,r.createElement("h2",null,"Unterstützer"),r.createElement("h3",null,"Sponsoren"),r.createElement("p",null,"Diese Firmen unterstützen uns!"),r.createElement(p,{sponsor:{link:"https://www.zeiss.com/digital-innovation",logo:r.createElement(n.S,{src:`${u}/zeiss-logo-rgb.png`,alt:"Logo von ZEISS Digitial Innovation",style:{maxHeight:"200px",maxWidth:"200px"},__imageData:a(9958)})}},r.createElement("strong",null,"ZEISS Digital Innovation")," sponsert unser Catering und Getränke."),r.createElement(g,{sponsors:[{logo:r.createElement(n.S,{src:`${u}/entwickler_tutorials_logo.jpg`,alt:"Logo von Entwickler Press",__imageData:a(1293)}),link:"https://entwickler.de/"},{logo:r.createElement(n.S,{src:`${u}/sands_logo.png`,alt:"Logo von S&S Media",__imageData:a(1658)}),link:"https://sandsmedia.com/de"}]},r.createElement("strong",null,"Entwickler Press / S&S Media")," unterstützt uns regelmäßig mit Preisen zur Verlosung."),r.createElement("p",null,"Wir würden uns über weitere Unterstützer freuen! Sie können uns z. B. Preise für unsere Verlosungen unter den Teilnehmern zur Verfügung stellen."),r.createElement("hr",null),r.createElement("h3",null,"Veranstaltungsorte"),r.createElement("p",null,"Diese Firmen und Organisationen stellen uns regelmäßig ihre Räumlichkeiten zur Verfügung."),r.createElement(c,{name:"CIDEON Software & Services GmbH & Co. KG",link:"https://www.cideon.de",mapsLink:"https://www.google.com/maps/place/CIDEON+Software+%26+Services+GmbH+%26+Co.+KG/@51.156937,14.9891214,17z/data=!3m1!4b1!4m5!3m4!1s0x4708dc3980ef431f:0x781d96282d404f3!8m2!3d51.156937!4d14.99131",addressFields:["Peterstraße 1","02826 Görlitz"]}),r.createElement(c,{name:"Hochschule Zittau/Görlitz",link:"https://www.hszg.de/f-ei",mapsLink:"https://www.google.de/maps/place/Hochschule+Zittau%2FG%C3%B6rlitz+(HSZG)/@51.1491033,14.9954413,17z/data=!3m1!4b1!4m5!3m4!1s0x4708dc2297028feb:0x9ebf92a61b56859a!8m2!3d51.1491!4d14.99763",addressFields:["Brückenstraße 1 (G II)","02826 Görlitz"]}),r.createElement(c,{name:"Carl Zeiss Digital Innovation",link:"https://www.zeiss.com",mapsLink:"https://www.google.de/maps?q=G%C3%B6rlitz+Berliner+Stra%C3%9Fe+63&ie=UTF8&sll=51.139990000000004,14.964935399999993&sspn=0.25938504233517495,0.9385794045212804&t=m&dg=opt&hnear=Berliner+Stra%C3%9Fe+63,+02826+G%C3%B6rlitz&z=16",addressFields:["Berliner Straße 63","02826 Görlitz"]}))},1293:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/e06e1174d84a6e9220926f54db593bda/ec2a7/entwickler_tutorials_logo.jpg","srcSet":"/static/e06e1174d84a6e9220926f54db593bda/42f85/entwickler_tutorials_logo.jpg 65w,\\n/static/e06e1174d84a6e9220926f54db593bda/e87cf/entwickler_tutorials_logo.jpg 129w,\\n/static/e06e1174d84a6e9220926f54db593bda/ec2a7/entwickler_tutorials_logo.jpg 258w","sizes":"(min-width: 258px) 258px, 100vw"},"sources":[{"srcSet":"/static/e06e1174d84a6e9220926f54db593bda/03ed1/entwickler_tutorials_logo.webp 65w,\\n/static/e06e1174d84a6e9220926f54db593bda/7fbd2/entwickler_tutorials_logo.webp 129w,\\n/static/e06e1174d84a6e9220926f54db593bda/78d40/entwickler_tutorials_logo.webp 258w","type":"image/webp","sizes":"(min-width: 258px) 258px, 100vw"}]},"width":258,"height":94}')},9958:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181888","images":{"fallback":{"src":"/static/a02c6e369b15a9124d4f01683366a44d/9e45f/zeiss-logo-rgb.png","srcSet":"/static/a02c6e369b15a9124d4f01683366a44d/d67a0/zeiss-logo-rgb.png 152w,\\n/static/a02c6e369b15a9124d4f01683366a44d/76ac7/zeiss-logo-rgb.png 304w,\\n/static/a02c6e369b15a9124d4f01683366a44d/9e45f/zeiss-logo-rgb.png 608w","sizes":"(min-width: 608px) 608px, 100vw"},"sources":[{"srcSet":"/static/a02c6e369b15a9124d4f01683366a44d/3093b/zeiss-logo-rgb.webp 152w,\\n/static/a02c6e369b15a9124d4f01683366a44d/c2967/zeiss-logo-rgb.webp 304w,\\n/static/a02c6e369b15a9124d4f01683366a44d/c730e/zeiss-logo-rgb.webp 608w","type":"image/webp","sizes":"(min-width: 608px) 608px, 100vw"}]},"width":608,"height":608}')},1658:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#086888","images":{"fallback":{"src":"/static/7dd2c179cdc38e578dd322c57204ecf0/a72e6/sands_logo.png","srcSet":"/static/7dd2c179cdc38e578dd322c57204ecf0/3e749/sands_logo.png 56w,\\n/static/7dd2c179cdc38e578dd322c57204ecf0/30283/sands_logo.png 111w,\\n/static/7dd2c179cdc38e578dd322c57204ecf0/a72e6/sands_logo.png 222w","sizes":"(min-width: 222px) 222px, 100vw"},"sources":[{"srcSet":"/static/7dd2c179cdc38e578dd322c57204ecf0/c3450/sands_logo.webp 56w,\\n/static/7dd2c179cdc38e578dd322c57204ecf0/51c41/sands_logo.webp 111w,\\n/static/7dd2c179cdc38e578dd322c57204ecf0/caed6/sands_logo.webp 222w","type":"image/webp","sizes":"(min-width: 222px) 222px, 100vw"}]},"width":222,"height":79}')}}]);
//# sourceMappingURL=component---src-pages-unterstuetzer-tsx-6c7946d35d5deec320db.js.map
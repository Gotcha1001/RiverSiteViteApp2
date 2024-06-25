import{r as b,a as yf,R as _f,g as vf,b as Dt,c as vr}from"./vendor-9bcc248d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var tu={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=b,Ef=Symbol.for("react.element"),bf=Symbol.for("react.fragment"),If=Object.prototype.hasOwnProperty,Tf=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xf={key:!0,ref:!0,__self:!0,__source:!0};function nu(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)If.call(e,r)&&!xf.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Ef,type:n,key:i,ref:a,props:s,_owner:Tf.current}}ai.Fragment=bf;ai.jsx=nu;ai.jsxs=nu;tu.exports=ai;var h=tu.exports,ru,Sl=yf;ru=Sl.createRoot,Sl.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},kr.apply(this,arguments)}var Vt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Vt||(Vt={}));const Pl="popstate";function Af(n){n===void 0&&(n={});function e(r,s){let{pathname:i,search:a,hash:l}=r.location;return io("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:$s(s)}return Sf(e,t,null,n)}function he(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function su(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Rf(){return Math.random().toString(36).substr(2,8)}function Cl(n,e){return{usr:n.state,key:n.key,idx:e}}function io(n,e,t,r){return t===void 0&&(t=null),kr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Hn(e):e,{state:t,key:e&&e.key||r||Rf()})}function $s(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function Sf(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l=Vt.Pop,u=null,f=p();f==null&&(f=0,a.replaceState(kr({},a.state,{idx:f}),""));function p(){return(a.state||{idx:null}).idx}function g(){l=Vt.Pop;let A=p(),M=A==null?null:A-f;f=A,u&&u({action:l,location:N.location,delta:M})}function _(A,M){l=Vt.Push;let U=io(N.location,A,M);t&&t(U,A),f=p()+1;let O=Cl(U,f),k=N.createHref(U);try{a.pushState(O,"",k)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;s.location.assign(k)}i&&u&&u({action:l,location:N.location,delta:1})}function R(A,M){l=Vt.Replace;let U=io(N.location,A,M);t&&t(U,A),f=p();let O=Cl(U,f),k=N.createHref(U);a.replaceState(O,"",k),i&&u&&u({action:l,location:N.location,delta:0})}function P(A){let M=s.location.origin!=="null"?s.location.origin:s.location.href,U=typeof A=="string"?A:$s(A);return U=U.replace(/ $/,"%20"),he(M,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,M)}let N={get action(){return l},get location(){return n(s,a)},listen(A){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Pl,g),u=A,()=>{s.removeEventListener(Pl,g),u=null}},createHref(A){return e(s,A)},createURL:P,encodeLocation(A){let M=P(A);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:_,replace:R,go(A){return a.go(A)}};return N}var Nl;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Nl||(Nl={}));function Pf(n,e,t){t===void 0&&(t="/");let r=typeof e=="string"?Hn(e):e,s=Fo(r.pathname||"/",t);if(s==null)return null;let i=iu(n);Cf(i);let a=null;for(let l=0;a==null&&l<i.length;++l){let u=qf(s);a=Uf(i[l],u)}return a}function iu(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,a,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let f=jt([r,u.relativePath]),p=t.concat(u);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),iu(i.children,e,p,f)),!(i.path==null&&!i.index)&&e.push({path:f,score:Lf(f,i.index),routesMeta:p})};return n.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,a);else for(let u of ou(i.path))s(i,a,u)}),e}function ou(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=ou(r.join("/")),l=[];return l.push(...a.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...a),l.map(u=>n.startsWith("/")&&u===""?"/":u)}function Cf(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Mf(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Nf=/^:[\w-]+$/,kf=3,Df=2,Vf=1,Of=10,jf=-2,kl=n=>n==="*";function Lf(n,e){let t=n.split("/"),r=t.length;return t.some(kl)&&(r+=jf),e&&(r+=Df),t.filter(s=>!kl(s)).reduce((s,i)=>s+(Nf.test(i)?kf:i===""?Vf:Of),r)}function Mf(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function Uf(n,e){let{routesMeta:t}=n,r={},s="/",i=[];for(let a=0;a<t.length;++a){let l=t[a],u=a===t.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Ff({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f);if(!p)return null;Object.assign(r,p.params);let g=l.route;i.push({params:r,pathname:jt([s,p.pathname]),pathnameBase:Hf(jt([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=jt([s,p.pathnameBase]))}return i}function Ff(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Bf(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((f,p,g)=>{let{paramName:_,isOptional:R}=p;if(_==="*"){let N=l[g]||"";a=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[g];return R&&!P?f[_]=void 0:f[_]=(P||"").replace(/%2F/g,"/"),f},{}),pathname:i,pathnameBase:a,pattern:n}}function Bf(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),su(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function qf(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return su(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Fo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function $f(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Hn(n):n;return{pathname:t?t.startsWith("/")?t:Wf(t,e):e,search:Kf(r),hash:Gf(s)}}function Wf(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Hi(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zf(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function au(n,e){let t=zf(n);return e?t.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function lu(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=Hn(n):(s=kr({},n),he(!s.pathname||!s.pathname.includes("?"),Hi("?","pathname","search",s)),he(!s.pathname||!s.pathname.includes("#"),Hi("#","pathname","hash",s)),he(!s.search||!s.search.includes("#"),Hi("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=t;else{let g=e.length-1;if(!r&&a.startsWith("..")){let _=a.split("/");for(;_[0]==="..";)_.shift(),g-=1;s.pathname=_.join("/")}l=g>=0?e[g]:"/"}let u=$f(s,l),f=a&&a!=="/"&&a.endsWith("/"),p=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(f||p)&&(u.pathname+="/"),u}const jt=n=>n.join("/").replace(/\/\/+/g,"/"),Hf=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Kf=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Gf=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Qf(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const cu=["post","put","patch","delete"];new Set(cu);const Xf=["get",...cu];new Set(Xf);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Dr.apply(this,arguments)}const Bo=b.createContext(null),Jf=b.createContext(null),yn=b.createContext(null),li=b.createContext(null),_n=b.createContext({outlet:null,matches:[],isDataRoute:!1}),uu=b.createContext(null);function Yf(n,e){let{relative:t}=e===void 0?{}:e;$r()||he(!1);let{basename:r,navigator:s}=b.useContext(yn),{hash:i,pathname:a,search:l}=du(n,{relative:t}),u=a;return r!=="/"&&(u=a==="/"?r:jt([r,a])),s.createHref({pathname:u,search:l,hash:i})}function $r(){return b.useContext(li)!=null}function ci(){return $r()||he(!1),b.useContext(li).location}function hu(n){b.useContext(yn).static||b.useLayoutEffect(n)}function yt(){let{isDataRoute:n}=b.useContext(_n);return n?hp():Zf()}function Zf(){$r()||he(!1);let n=b.useContext(Bo),{basename:e,future:t,navigator:r}=b.useContext(yn),{matches:s}=b.useContext(_n),{pathname:i}=ci(),a=JSON.stringify(au(s,t.v7_relativeSplatPath)),l=b.useRef(!1);return hu(()=>{l.current=!0}),b.useCallback(function(f,p){if(p===void 0&&(p={}),!l.current)return;if(typeof f=="number"){r.go(f);return}let g=lu(f,JSON.parse(a),i,p.relative==="path");n==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:jt([e,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[e,r,a,i,n])}function du(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=b.useContext(yn),{matches:s}=b.useContext(_n),{pathname:i}=ci(),a=JSON.stringify(au(s,r.v7_relativeSplatPath));return b.useMemo(()=>lu(n,JSON.parse(a),i,t==="path"),[n,a,i,t])}function ep(n,e){return tp(n,e)}function tp(n,e,t,r){$r()||he(!1);let{navigator:s}=b.useContext(yn),{matches:i}=b.useContext(_n),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let f=ci(),p;if(e){var g;let A=typeof e=="string"?Hn(e):e;u==="/"||(g=A.pathname)!=null&&g.startsWith(u)||he(!1),p=A}else p=f;let _=p.pathname||"/",R=_;if(u!=="/"){let A=u.replace(/^\//,"").split("/");R="/"+_.replace(/^\//,"").split("/").slice(A.length).join("/")}let P=Pf(n,{pathname:R}),N=op(P&&P.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:jt([u,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:jt([u,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,r);return e&&N?b.createElement(li.Provider,{value:{location:Dr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Vt.Pop}},N):N}function np(){let n=up(),e=Qf(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),t?b.createElement("pre",{style:s},t):null,i)}const rp=b.createElement(np,null);class sp extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?b.createElement(_n.Provider,{value:this.props.routeContext},b.createElement(uu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ip(n){let{routeContext:e,match:t,children:r}=n,s=b.useContext(Bo);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(_n.Provider,{value:e},r)}function op(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if((i=t)!=null&&i.errors)n=t.matches;else return null}let a=n,l=(s=t)==null?void 0:s.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);p>=0||he(!1),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,f=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(f=p),g.route.id){let{loaderData:_,errors:R}=t,P=g.route.loader&&_[g.route.id]===void 0&&(!R||R[g.route.id]===void 0);if(g.route.lazy||P){u=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((p,g,_)=>{let R,P=!1,N=null,A=null;t&&(R=l&&g.route.id?l[g.route.id]:void 0,N=g.route.errorElement||rp,u&&(f<0&&_===0?(dp("route-fallback",!1),P=!0,A=null):f===_&&(P=!0,A=g.route.hydrateFallbackElement||null)));let M=e.concat(a.slice(0,_+1)),U=()=>{let O;return R?O=N:P?O=A:g.route.Component?O=b.createElement(g.route.Component,null):g.route.element?O=g.route.element:O=p,b.createElement(ip,{match:g,routeContext:{outlet:p,matches:M,isDataRoute:t!=null},children:O})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?b.createElement(sp,{location:t.location,revalidation:t.revalidation,component:N,error:R,children:U(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):U()},null)}var fu=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(fu||{}),Ws=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Ws||{});function ap(n){let e=b.useContext(Bo);return e||he(!1),e}function lp(n){let e=b.useContext(Jf);return e||he(!1),e}function cp(n){let e=b.useContext(_n);return e||he(!1),e}function pu(n){let e=cp(),t=e.matches[e.matches.length-1];return t.route.id||he(!1),t.route.id}function up(){var n;let e=b.useContext(uu),t=lp(Ws.UseRouteError),r=pu(Ws.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function hp(){let{router:n}=ap(fu.UseNavigateStable),e=pu(Ws.UseNavigateStable),t=b.useRef(!1);return hu(()=>{t.current=!0}),b.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Dr({fromRouteId:e},i)))},[n,e])}const Dl={};function dp(n,e,t){!e&&!Dl[n]&&(Dl[n]=!0)}function Re(n){he(!1)}function fp(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Vt.Pop,navigator:i,static:a=!1,future:l}=n;$r()&&he(!1);let u=e.replace(/^\/*/,"/"),f=b.useMemo(()=>({basename:u,navigator:i,static:a,future:Dr({v7_relativeSplatPath:!1},l)}),[u,l,i,a]);typeof r=="string"&&(r=Hn(r));let{pathname:p="/",search:g="",hash:_="",state:R=null,key:P="default"}=r,N=b.useMemo(()=>{let A=Fo(p,u);return A==null?null:{location:{pathname:A,search:g,hash:_,state:R,key:P},navigationType:s}},[u,p,g,_,R,P,s]);return N==null?null:b.createElement(yn.Provider,{value:f},b.createElement(li.Provider,{children:t,value:N}))}function pp(n){let{children:e,location:t}=n;return ep(oo(e),t)}new Promise(()=>{});function oo(n,e){e===void 0&&(e=[]);let t=[];return b.Children.forEach(n,(r,s)=>{if(!b.isValidElement(r))return;let i=[...e,s];if(r.type===b.Fragment){t.push.apply(t,oo(r.props.children,i));return}r.type!==Re&&he(!1),!r.props.index||!r.props.children||he(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=oo(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ao.apply(this,arguments)}function mp(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function gp(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function yp(n,e){return n.button===0&&(!e||e==="_self")&&!gp(n)}const _p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vp="6";try{window.__reactRouterVersion=vp}catch{}const wp="startTransition",Vl=_f[wp];function Ep(n){let{basename:e,children:t,future:r,window:s}=n,i=b.useRef();i.current==null&&(i.current=Af({window:s,v5Compat:!0}));let a=i.current,[l,u]=b.useState({action:a.action,location:a.location}),{v7_startTransition:f}=r||{},p=b.useCallback(g=>{f&&Vl?Vl(()=>u(g)):u(g)},[u,f]);return b.useLayoutEffect(()=>a.listen(p),[a,p]),b.createElement(fp,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a,future:r})}const bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=b.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:l,target:u,to:f,preventScrollReset:p,unstable_viewTransition:g}=e,_=mp(e,_p),{basename:R}=b.useContext(yn),P,N=!1;if(typeof f=="string"&&Ip.test(f)&&(P=f,bp))try{let O=new URL(window.location.href),k=f.startsWith("//")?new URL(O.protocol+f):new URL(f),$=Fo(k.pathname,R);k.origin===O.origin&&$!=null?f=$+k.search+k.hash:N=!0}catch{}let A=Yf(f,{relative:s}),M=Tp(f,{replace:a,state:l,target:u,preventScrollReset:p,relative:s,unstable_viewTransition:g});function U(O){r&&r(O),O.defaultPrevented||M(O)}return b.createElement("a",ao({},_,{href:P||A,onClick:N||i?r:U,ref:t,target:u}))});var Ol;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var jl;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(jl||(jl={}));function Tp(n,e){let{target:t,replace:r,state:s,preventScrollReset:i,relative:a,unstable_viewTransition:l}=e===void 0?{}:e,u=yt(),f=ci(),p=du(n,{relative:a});return b.useCallback(g=>{if(yp(g,t)){g.preventDefault();let _=r!==void 0?r:$s(f)===$s(p);u(n,{replace:_,state:s,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[f,u,p,r,s,t,n,i,a,l])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},gu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let _=(l&15)<<2|f>>6,R=f&63;u||(R=64,a||(_=64)),r.push(t[p],t[g],t[_],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||f==null||g==null)throw new Ap;const _=i<<2|l>>4;if(r.push(_),f!==64){const R=l<<4&240|f>>2;if(r.push(R),g!==64){const P=f<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ap extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rp=function(n){const e=mu(n);return gu.encodeByteArray(e,!0)},zs=function(n){return Rp(n).replace(/\./g,"")},yu=function(n){try{return gu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=()=>Sp().__FIREBASE_DEFAULTS__,Cp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Np=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yu(n[1]);return e&&JSON.parse(e)},ui=()=>{try{return Pp()||Cp()||Np()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_u=n=>{var e,t;return(t=(e=ui())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kp=n=>{const e=_u(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},vu=()=>{var n;return(n=ui())===null||n===void 0?void 0:n.config},wu=n=>{var e;return(e=ui())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[zs(JSON.stringify(t)),zs(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Op(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function jp(){var n;const e=(n=ui())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Up(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fp(){return!jp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bp(){try{return typeof indexedDB=="object"}catch{return!1}}function qp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$p,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wp(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new _t(s,l,r)}}function Wp(n,e){return n.replace(zp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zp=/\{\$([^}]+)}/g;function Hp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ll(i)&&Ll(a)){if(!Hs(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ll(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Er(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kp(n,e){const t=new Gp(n,e);return t.subscribe.bind(t)}class Gp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ki),s.error===void 0&&(s.error=Ki),s.complete===void 0&&(s.complete=Ki);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ki(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n){return n&&n._delegate?n._delegate:n}class cn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yp(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jp(n){return n===nn?void 0:n}function Yp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const em={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},tm=X.INFO,nm={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},rm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=nm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qo{constructor(e){this.name=e,this._logLevel=tm,this._logHandler=rm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?em[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const sm=(n,e)=>e.some(t=>n instanceof t);let Ml,Ul;function im(){return Ml||(Ml=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function om(){return Ul||(Ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eu=new WeakMap,lo=new WeakMap,bu=new WeakMap,Gi=new WeakMap,$o=new WeakMap;function am(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Lt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Eu.set(t,n)}).catch(()=>{}),$o.set(e,n),e}function lm(n){if(lo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});lo.set(n,e)}let co={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cm(n){co=n(co)}function um(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qi(this),e,...t);return bu.set(r,e.sort?e.sort():[e]),Lt(r)}:om().includes(n)?function(...e){return n.apply(Qi(this),e),Lt(Eu.get(this))}:function(...e){return Lt(n.apply(Qi(this),e))}}function hm(n){return typeof n=="function"?um(n):(n instanceof IDBTransaction&&lm(n),sm(n,im())?new Proxy(n,co):n)}function Lt(n){if(n instanceof IDBRequest)return am(n);if(Gi.has(n))return Gi.get(n);const e=hm(n);return e!==n&&(Gi.set(n,e),$o.set(e,n)),e}const Qi=n=>$o.get(n);function dm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Lt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Lt(a.result),u.oldVersion,u.newVersion,Lt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const fm=["get","getKey","getAll","getAllKeys","count"],pm=["put","add","delete","clear"],Xi=new Map;function Fl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xi.get(e))return Xi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=pm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&u.done]))[0]};return Xi.set(e,i),i}cm(n=>({...n,get:(e,t,r)=>Fl(e,t)||n.get(e,t,r),has:(e,t)=>!!Fl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function gm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uo="@firebase/app",Bl="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new qo("@firebase/app"),ym="@firebase/app-compat",_m="@firebase/analytics-compat",vm="@firebase/analytics",wm="@firebase/app-check-compat",Em="@firebase/app-check",bm="@firebase/auth",Im="@firebase/auth-compat",Tm="@firebase/database",xm="@firebase/database-compat",Am="@firebase/functions",Rm="@firebase/functions-compat",Sm="@firebase/installations",Pm="@firebase/installations-compat",Cm="@firebase/messaging",Nm="@firebase/messaging-compat",km="@firebase/performance",Dm="@firebase/performance-compat",Vm="@firebase/remote-config",Om="@firebase/remote-config-compat",jm="@firebase/storage",Lm="@firebase/storage-compat",Mm="@firebase/firestore",Um="@firebase/vertexai-preview",Fm="@firebase/firestore-compat",Bm="firebase",qm="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="[DEFAULT]",$m={[uo]:"fire-core",[ym]:"fire-core-compat",[vm]:"fire-analytics",[_m]:"fire-analytics-compat",[Em]:"fire-app-check",[wm]:"fire-app-check-compat",[bm]:"fire-auth",[Im]:"fire-auth-compat",[Tm]:"fire-rtdb",[xm]:"fire-rtdb-compat",[Am]:"fire-fn",[Rm]:"fire-fn-compat",[Sm]:"fire-iid",[Pm]:"fire-iid-compat",[Cm]:"fire-fcm",[Nm]:"fire-fcm-compat",[km]:"fire-perf",[Dm]:"fire-perf-compat",[Vm]:"fire-rc",[Om]:"fire-rc-compat",[jm]:"fire-gcs",[Lm]:"fire-gcs-compat",[Mm]:"fire-fst",[Fm]:"fire-fst-compat",[Um]:"fire-vertex","fire-js":"fire-js",[Bm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Map,Wm=new Map,fo=new Map;function ql(n,e){try{n.container.addComponent(e)}catch(t){un.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ln(n){const e=n.name;if(fo.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;fo.set(e,n);for(const t of Ks.values())ql(t,n);for(const t of Wm.values())ql(t,n);return!0}function Wo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function He(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new Wr("app","Firebase",zm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=qm;function Iu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ho,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mt.create("bad-app-name",{appName:String(s)});if(t||(t=vu()),!t)throw Mt.create("no-options");const i=Ks.get(s);if(i){if(Hs(t,i.options)&&Hs(r,i.config))return i;throw Mt.create("duplicate-app",{appName:s})}const a=new Zp(s);for(const u of fo.values())a.addComponent(u);const l=new Hm(t,r,a);return Ks.set(s,l),l}function Tu(n=ho){const e=Ks.get(n);if(!e&&n===ho&&vu())return Iu();if(!e)throw Mt.create("no-app",{appName:n});return e}function Ut(n,e,t){var r;let s=(r=$m[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(l.join(" "));return}Ln(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="firebase-heartbeat-database",Gm=1,Vr="firebase-heartbeat-store";let Ji=null;function xu(){return Ji||(Ji=dm(Km,Gm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mt.create("idb-open",{originalErrorMessage:n.message})})),Ji}async function Qm(n){try{const t=(await xu()).transaction(Vr),r=await t.objectStore(Vr).get(Au(n));return await t.done,r}catch(e){if(e instanceof _t)un.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(t.message)}}}async function $l(n,e){try{const r=(await xu()).transaction(Vr,"readwrite");await r.objectStore(Vr).put(e,Au(n)),await r.done}catch(t){if(t instanceof _t)un.warn(t.message);else{const r=Mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});un.warn(r.message)}}}function Au(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=1024,Jm=30*24*60*60*1e3;class Ym{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Jm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wl(),{heartbeatsToSend:r,unsentEntries:s}=Zm(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wl(){return new Date().toISOString().substring(0,10)}function Zm(n,e=Xm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class eg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bp()?qp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $l(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $l(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zl(n){return zs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){Ln(new cn("platform-logger",e=>new mm(e),"PRIVATE")),Ln(new cn("heartbeat",e=>new Ym(e),"PRIVATE")),Ut(uo,Bl,n),Ut(uo,Bl,"esm2017"),Ut("fire-js","")}tg("");var ng="firebase",rg="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(ng,rg,"app");function zo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Ru(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sg=Ru,Su=new Wr("auth","Firebase",Ru());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new qo("@firebase/auth");function ig(n,...e){Gs.logLevel<=X.WARN&&Gs.warn(`Auth (${Kn}): ${n}`,...e)}function Vs(n,...e){Gs.logLevel<=X.ERROR&&Gs.error(`Auth (${Kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,...e){throw Ko(n,...e)}function Ke(n,...e){return Ko(n,...e)}function Ho(n,e,t){const r=Object.assign(Object.assign({},sg()),{[e]:t});return new Wr("auth","Firebase",r).create(e,{appName:n.name})}function dt(n){return Ho(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function og(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&qe(n,"argument-error"),Ho(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ko(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Su.create(n,...e)}function W(n,e,...t){if(!n)throw Ko(e,...t)}function lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vs(e),new Error(e)}function pt(n,e){n||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ag(){return Hl()==="http:"||Hl()==="https:"}function Hl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ag()||Lp()||"connection"in navigator)?navigator.onLine:!0}function cg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=Op()||Mp()}get(){return lg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n,e){pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Hr(3e4,6e4);function zt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vt(n,e,t,r,s={}){return Cu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=zr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Pu.fetch()(Nu(n,n.config.apiHost,t,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},i))})}async function Cu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ug),e);try{const s=new fg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Rs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Rs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Rs(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ho(n,p,f);qe(n,p)}}catch(s){if(s instanceof _t)throw s;qe(n,"network-request-failed",{message:String(s)})}}async function Kr(n,e,t,r,s={}){const i=await vt(n,e,t,r,s);return"mfaPendingCredential"in i&&qe(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Nu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Go(n.config,s):`${n.config.apiScheme}://${s}`}function dg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),hg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ke(n,e,r);return s.customData._tokenResponse=t,s}function Kl(n){return n!==void 0&&n.enterprise!==void 0}class pg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mg(n,e){return vt(n,"GET","/v2/recaptchaConfig",zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(n,e){return vt(n,"POST","/v1/accounts:delete",e)}async function ku(n,e){return vt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yg(n,e=!1){const t=fe(n),r=await t.getIdToken(e),s=Qo(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ar(Yi(s.auth_time)),issuedAtTime:Ar(Yi(s.iat)),expirationTime:Ar(Yi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yi(n){return Number(n)*1e3}function Qo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Vs("JWT malformed, contained fewer than 3 sections"),null;try{const s=yu(t);return s?JSON.parse(s):(Vs("Failed to decode base64 JWT payload"),null)}catch(s){return Vs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gl(n){const e=Qo(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&_g(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _g({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Mn(n,ku(t,{idToken:r}));W(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Du(i.providerUserInfo):[],l=Eg(n.providerData,a),u=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?f:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new mo(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function wg(n){const e=fe(n);await Qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Du(n){return n.map(e=>{var{providerId:t}=e,r=zo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(n,e){const t=await Cu(n,{},async()=>{const r=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Nu(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Pu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ig(n,e){return vt(n,"POST","/v2/accounts:revokeToken",zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Gl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await bg(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Dn;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yg(this,e)}reload(){return wg(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(dt(this.auth));const e=await this.getIdToken();return await Mn(this,gg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,f,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,A=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,M=(f=t.createdAt)!==null&&f!==void 0?f:void 0,U=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:O,emailVerified:k,isAnonymous:$,providerData:j,stsTokenManager:E}=t;W(O&&E,e,"internal-error");const y=Dn.fromJSON(this.name,E);W(typeof O=="string",e,"internal-error"),Pt(g,e.name),Pt(_,e.name),W(typeof k=="boolean",e,"internal-error"),W(typeof $=="boolean",e,"internal-error"),Pt(R,e.name),Pt(P,e.name),Pt(N,e.name),Pt(A,e.name),Pt(M,e.name),Pt(U,e.name);const v=new ct({uid:O,auth:e,email:_,emailVerified:k,displayName:g,isAnonymous:$,photoURL:P,phoneNumber:R,tenantId:N,stsTokenManager:y,createdAt:M,lastLoginAt:U});return j&&Array.isArray(j)&&(v.providerData=j.map(I=>Object.assign({},I))),A&&(v._redirectEventId=A),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Dn;s.updateFromServerResponse(t);const i=new ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Du(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Dn;l.updateFromIdToken(r);const u=new ct({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new mo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Map;function ut(n){pt(n instanceof Function,"Expected a class definition");let e=Ql.get(n);return e?(pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ql.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vu.type="NONE";const Xl=Vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e,t){return`firebase:${n}:${e}:${t}`}class Vn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Os(this.userKey,s.apiKey,i),this.fullPersistenceKey=Os("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vn(ut(Xl),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||ut(Xl);const a=Os(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const p=await f._get(a);if(p){const g=ct._fromJSON(e,p);f!==i&&(l=g),i=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Vn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ou(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uu(e))return"Blackberry";if(Fu(e))return"Webos";if(Xo(e))return"Safari";if((e.includes("chrome/")||ju(e))&&!e.includes("edge/"))return"Chrome";if(Mu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ou(n=Ie()){return/firefox\//i.test(n)}function Xo(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ju(n=Ie()){return/crios\//i.test(n)}function Lu(n=Ie()){return/iemobile/i.test(n)}function Mu(n=Ie()){return/android/i.test(n)}function Uu(n=Ie()){return/blackberry/i.test(n)}function Fu(n=Ie()){return/webos/i.test(n)}function hi(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tg(n=Ie()){var e;return hi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xg(){return Up()&&document.documentMode===10}function Bu(n=Ie()){return hi(n)||Mu(n)||Fu(n)||Uu(n)||/windows phone/i.test(n)||Lu(n)}function Ag(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n,e=[]){let t;switch(n){case"Browser":t=Jl(Ie());break;case"Worker":t=`${Jl(Ie())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(n,e={}){return vt(n,"GET","/v2/passwordPolicy",zt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=6;class Cg{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Pg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yl(this),this.idTokenSubscription=new Yl(this),this.beforeStateQueue=new Rg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ut(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ku(this,{idToken:e}),r=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(He(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(dt(this));const t=e?fe(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sg(this),t=new Cg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ig(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ut(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Vn.create(this,[ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ig(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ht(n){return fe(n)}class Yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kp(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kg(n){di=n}function $u(n){return di.loadJS(n)}function Dg(){return di.recaptchaEnterpriseScript}function Vg(){return di.gapiScript}function Og(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const jg="recaptcha-enterprise",Lg="NO_RECAPTCHA";class Mg{constructor(e){this.type=jg,this.auth=Ht(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{mg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new pg(u);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,a(f.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Kl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(f=>{a(f)}).catch(()=>{a(Lg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Kl(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Dg();u.length!==0&&(u+=l),$u(u).then(()=>{s(l,i,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function Zl(n,e,t,r=!1){const s=new Mg(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function go(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Zl(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(n,e){const t=Wo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Hs(i,e??{}))return s;qe(s,"already-initialized")}return t.initialize({options:e})}function Fg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ut);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bg(n,e,t){const r=Ht(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Wu(e),{host:a,port:l}=qg(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$g()}function Wu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qg(n){const e=Wu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ec(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ec(a)}}}function ec(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $g(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function Wg(n,e){return vt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(n,e){return Kr(n,"POST","/v1/accounts:signInWithPassword",zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",zt(n,e))}async function Kg(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Jo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Or(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Or(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return go(e,t,"signInWithPassword",zg);case"emailLink":return Hg(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return go(e,r,"signUpPassword",Wg);case"emailLink":return Kg(e,{idToken:t,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e){return Kr(n,"POST","/v1/accounts:signInWithIdp",zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="http://localhost";class hn extends Jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=zo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new hn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return On(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,On(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,On(e,t)}buildRequest(){const e={requestUri:Gg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xg(n){const e=wr(Er(n)).link,t=e?wr(Er(e)).deep_link_id:null,r=wr(Er(n)).deep_link_id;return(r?wr(Er(r)).link:null)||r||t||e||n}class Yo{constructor(e){var t,r,s,i,a,l;const u=wr(Er(e)),f=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Qg((s=u.mode)!==null&&s!==void 0?s:null);W(f&&p&&g,"argument-error"),this.apiKey=f,this.operation=g,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Xg(e);try{return new Yo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,t){return Or._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Yo.parseLink(t);return W(r,"argument-error"),Or._fromEmailAndCode(e,r.code,r.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Zo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Gr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ye.credential(t,r)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Gr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Gr{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(n,e){return Kr(n,"POST","/v1/accounts:signUp",zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ct._fromIdTokenResponse(e,r,s),a=tc(r);return new dn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=tc(r);return new dn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function tc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends _t{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Xs(e,t,r,s)}}function zu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(n,i,e,r):i})}async function Yg(n,e,t=!1){const r=await Mn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(n,e,t=!1){const{auth:r}=n;if(He(r.app))return Promise.reject(dt(r));const s="reauthenticate";try{const i=await Mn(n,zu(r,s,e,n),t);W(i.idToken,r,"internal-error");const a=Qo(i.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),dn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(n,e,t=!1){if(He(n.app))return Promise.reject(dt(n));const r="signIn",s=await zu(n,r,e),i=await dn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function ey(n,e){return Hu(Ht(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(n){const e=Ht(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ty(n,e,t){if(He(n.app))return Promise.reject(dt(n));const r=Ht(n),a=await go(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ku(n),u}),l=await dn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function ny(n,e,t){return He(n.app)?Promise.reject(dt(n)):ey(fe(n),Gn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ku(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(n,e){return vt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=fe(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Mn(r,ry(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function iy(n,e,t,r){return fe(n).onIdTokenChanged(e,t,r)}function oy(n,e,t){return fe(n).beforeAuthStateChanged(e,t)}function fi(n,e,t,r){return fe(n).onAuthStateChanged(e,t,r)}function Gu(n){return fe(n).signOut()}const Js="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Js,"1"),this.storage.removeItem(Js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){const n=Ie();return Xo(n)||hi(n)}const ly=1e3,cy=10;class Xu extends Qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ay()&&Ag(),this.fallbackToPolling=Bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);xg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xu.type="LOCAL";const uy=Xu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ju.type="SESSION";const Yu=Ju;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new pi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(t.origin,i)),u=await hy(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const f=ea("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===f)switch(_.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function fy(n){et().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function py(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function my(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gy(){return Zu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="firebaseLocalStorageDb",yy=1,Ys="firebaseLocalStorage",th="fbase_key";class Qr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mi(n,e){return n.transaction([Ys],e?"readwrite":"readonly").objectStore(Ys)}function _y(){const n=indexedDB.deleteDatabase(eh);return new Qr(n).toPromise()}function yo(){const n=indexedDB.open(eh,yy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ys,{keyPath:th})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ys)?e(r):(r.close(),await _y(),e(await yo()))})})}async function nc(n,e,t){const r=mi(n,!0).put({[th]:e,value:t});return new Qr(r).toPromise()}async function vy(n,e){const t=mi(n,!1).get(e),r=await new Qr(t).toPromise();return r===void 0?null:r.value}function rc(n,e){const t=mi(n,!0).delete(e);return new Qr(t).toPromise()}const wy=800,Ey=3;class nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ey)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(gy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await py(),!this.activeServiceWorker)return;this.sender=new dy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||my()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yo();return await nc(e,Js,"1"),await rc(e,Js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>vy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mi(s,!1).getAll();return new Qr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nh.type="LOCAL";const by=nh;new Hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e){return e?ut(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,t){return On(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Iy(n){return Hu(n.auth,new ta(n),n.bypassAuthState)}function Ty(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Zg(t,new ta(n),n.bypassAuthState)}async function xy(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Yg(t,new ta(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iy;case"linkViaPopup":case"linkViaRedirect":return xy;case"reauthViaPopup":case"reauthViaRedirect":return Ty;default:qe(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Hr(2e3,1e4);async function Ry(n,e,t){if(He(n.app))return Promise.reject(Ke(n,"operation-not-supported-in-this-environment"));const r=Ht(n);og(n,e,Zo);const s=rh(r,t);return new on(r,"signInViaPopup",e,s).executeNotNull()}class on extends sh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=ea();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ay.get())};e()}}on.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="pendingRedirect",js=new Map;class Py extends sh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=js.get(this.auth._key());if(!e){try{const r=await Cy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}js.set(this.auth._key(),e)}return this.bypassAuthState||js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cy(n,e){const t=Dy(e),r=ky(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Ny(n,e){js.set(n._key(),e)}function ky(n){return ut(n._redirectPersistence)}function Dy(n){return Os(Sy,n.config.apiKey,n.name)}async function Vy(n,e,t=!1){if(He(n.app))return Promise.reject(dt(n));const r=Ht(n),s=rh(r,e),a=await new Py(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=10*60*1e3;class jy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ly(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ih(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ke(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Oy&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ih({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ly(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(n,e={}){return vt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fy=/^https?/;async function By(n){if(n.config.emulator)return;const{authorizedDomains:e}=await My(n);for(const t of e)try{if(qy(t))return}catch{}qe(n,"unauthorized-domain")}function qy(n){const e=po(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Fy.test(t))return!1;if(Uy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Hr(3e4,6e4);function ic(){const n=et().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Wy(n){return new Promise((e,t)=>{var r,s,i;function a(){ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ic(),t(Ke(n,"network-request-failed"))},timeout:$y.get()})}if(!((s=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)a();else{const l=Og("iframefcb");return et()[l]=()=>{gapi.load?a():t(Ke(n,"network-request-failed"))},$u(`${Vg()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ls=null,e})}let Ls=null;function zy(n){return Ls=Ls||Wy(n),Ls}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Hr(5e3,15e3),Ky="__/auth/iframe",Gy="emulator/auth/iframe",Qy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jy(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Go(e,Gy):`https://${n.config.authDomain}/${Ky}`,r={apiKey:e.apiKey,appName:n.name,v:Kn},s=Xy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${zr(r).slice(1)}`}async function Yy(n){const e=await zy(n),t=et().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:Jy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ke(n,"network-request-failed"),l=et().setTimeout(()=>{i(a)},Hy.get());function u(){et().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e_=500,t_=600,n_="_blank",r_="http://localhost";class oc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s_(n,e,t,r=e_,s=t_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Zy),{width:r.toString(),height:s.toString(),top:i,left:a}),f=Ie().toLowerCase();t&&(l=ju(f)?n_:t),Ou(f)&&(e=e||r_,u.scrollbars="yes");const p=Object.entries(u).reduce((_,[R,P])=>`${_}${R}=${P},`,"");if(Tg(f)&&l!=="_self")return i_(e||"",l),new oc(null);const g=window.open(e||"",l,p);W(g,n,"popup-blocked");try{g.focus()}catch{}return new oc(g)}function i_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="__/auth/handler",a_="emulator/auth/handler",l_=encodeURIComponent("fac");async function ac(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Kn,eventId:s};if(e instanceof Zo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Hp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries(i||{}))a[p]=g}if(e instanceof Gr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),f=u?`#${l_}=${encodeURIComponent(u)}`:"";return`${c_(n)}?${zr(l).slice(1)}${f}`}function c_({config:n}){return n.emulator?Go(n,a_):`https://${n.authDomain}/${o_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="webStorageSupport";class u_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yu,this._completeRedirectFn=Vy,this._overrideRedirectResult=Ny}async _openPopup(e,t,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ac(e,t,r,po(),s);return s_(e,a,ea())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ac(e,t,r,po(),s);return fy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Yy(e),r=new jy(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zi,{type:Zi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zi];a!==void 0&&t(!!a),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=By(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bu()||Xo()||hi()}}const h_=u_;var lc="@firebase/auth",cc="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p_(n){Ln(new cn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qu(n)},f=new Ng(r,s,i,u);return Fg(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new cn("auth-internal",e=>{const t=Ht(e.getProvider("auth").getImmediate());return(r=>new d_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(lc,cc,f_(n)),Ut(lc,cc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=5*60,g_=wu("authIdTokenMaxAge")||m_;let uc=null;const y_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>g_)return;const s=t==null?void 0:t.token;uc!==s&&(uc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function __(n=Tu()){const e=Wo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ug(n,{popupRedirectResolver:h_,persistence:[by,uy,Yu]}),r=wu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=y_(i.toString());oy(t,a,()=>a(t.currentUser)),iy(t,l=>a(l))}}const s=_u("auth");return s&&Bg(t,`http://${s}`),t}function v_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",v_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p_("Browser");var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ln,oh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(I,T,S){for(var w=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)w[$e-2]=arguments[$e];return y.prototype[T].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)I[T]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(T=0;16>T;++T)I[T]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],T=E.g[2];var S=E.g[3],w=y+(S^v&(T^S))+I[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=S+(T^y&(v^T))+I[1]+3905402710&4294967295,S=y+(w<<12&4294967295|w>>>20),w=T+(v^S&(y^v))+I[2]+606105819&4294967295,T=S+(w<<17&4294967295|w>>>15),w=v+(y^T&(S^y))+I[3]+3250441966&4294967295,v=T+(w<<22&4294967295|w>>>10),w=y+(S^v&(T^S))+I[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(T^y&(v^T))+I[5]+1200080426&4294967295,S=y+(w<<12&4294967295|w>>>20),w=T+(v^S&(y^v))+I[6]+2821735955&4294967295,T=S+(w<<17&4294967295|w>>>15),w=v+(y^T&(S^y))+I[7]+4249261313&4294967295,v=T+(w<<22&4294967295|w>>>10),w=y+(S^v&(T^S))+I[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(T^y&(v^T))+I[9]+2336552879&4294967295,S=y+(w<<12&4294967295|w>>>20),w=T+(v^S&(y^v))+I[10]+4294925233&4294967295,T=S+(w<<17&4294967295|w>>>15),w=v+(y^T&(S^y))+I[11]+2304563134&4294967295,v=T+(w<<22&4294967295|w>>>10),w=y+(S^v&(T^S))+I[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(T^y&(v^T))+I[13]+4254626195&4294967295,S=y+(w<<12&4294967295|w>>>20),w=T+(v^S&(y^v))+I[14]+2792965006&4294967295,T=S+(w<<17&4294967295|w>>>15),w=v+(y^T&(S^y))+I[15]+1236535329&4294967295,v=T+(w<<22&4294967295|w>>>10),w=y+(T^S&(v^T))+I[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^T&(y^v))+I[6]+3225465664&4294967295,S=y+(w<<9&4294967295|w>>>23),w=T+(y^v&(S^y))+I[11]+643717713&4294967295,T=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(T^S))+I[0]+3921069994&4294967295,v=T+(w<<20&4294967295|w>>>12),w=y+(T^S&(v^T))+I[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^T&(y^v))+I[10]+38016083&4294967295,S=y+(w<<9&4294967295|w>>>23),w=T+(y^v&(S^y))+I[15]+3634488961&4294967295,T=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(T^S))+I[4]+3889429448&4294967295,v=T+(w<<20&4294967295|w>>>12),w=y+(T^S&(v^T))+I[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^T&(y^v))+I[14]+3275163606&4294967295,S=y+(w<<9&4294967295|w>>>23),w=T+(y^v&(S^y))+I[3]+4107603335&4294967295,T=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(T^S))+I[8]+1163531501&4294967295,v=T+(w<<20&4294967295|w>>>12),w=y+(T^S&(v^T))+I[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^T&(y^v))+I[2]+4243563512&4294967295,S=y+(w<<9&4294967295|w>>>23),w=T+(y^v&(S^y))+I[7]+1735328473&4294967295,T=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(T^S))+I[12]+2368359562&4294967295,v=T+(w<<20&4294967295|w>>>12),w=y+(v^T^S)+I[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^T)+I[8]+2272392833&4294967295,S=y+(w<<11&4294967295|w>>>21),w=T+(S^y^v)+I[11]+1839030562&4294967295,T=S+(w<<16&4294967295|w>>>16),w=v+(T^S^y)+I[14]+4259657740&4294967295,v=T+(w<<23&4294967295|w>>>9),w=y+(v^T^S)+I[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^T)+I[4]+1272893353&4294967295,S=y+(w<<11&4294967295|w>>>21),w=T+(S^y^v)+I[7]+4139469664&4294967295,T=S+(w<<16&4294967295|w>>>16),w=v+(T^S^y)+I[10]+3200236656&4294967295,v=T+(w<<23&4294967295|w>>>9),w=y+(v^T^S)+I[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^T)+I[0]+3936430074&4294967295,S=y+(w<<11&4294967295|w>>>21),w=T+(S^y^v)+I[3]+3572445317&4294967295,T=S+(w<<16&4294967295|w>>>16),w=v+(T^S^y)+I[6]+76029189&4294967295,v=T+(w<<23&4294967295|w>>>9),w=y+(v^T^S)+I[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^T)+I[12]+3873151461&4294967295,S=y+(w<<11&4294967295|w>>>21),w=T+(S^y^v)+I[15]+530742520&4294967295,T=S+(w<<16&4294967295|w>>>16),w=v+(T^S^y)+I[2]+3299628645&4294967295,v=T+(w<<23&4294967295|w>>>9),w=y+(T^(v|~S))+I[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~T))+I[7]+1126891415&4294967295,S=y+(w<<10&4294967295|w>>>22),w=T+(y^(S|~v))+I[14]+2878612391&4294967295,T=S+(w<<15&4294967295|w>>>17),w=v+(S^(T|~y))+I[5]+4237533241&4294967295,v=T+(w<<21&4294967295|w>>>11),w=y+(T^(v|~S))+I[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~T))+I[3]+2399980690&4294967295,S=y+(w<<10&4294967295|w>>>22),w=T+(y^(S|~v))+I[10]+4293915773&4294967295,T=S+(w<<15&4294967295|w>>>17),w=v+(S^(T|~y))+I[1]+2240044497&4294967295,v=T+(w<<21&4294967295|w>>>11),w=y+(T^(v|~S))+I[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~T))+I[15]+4264355552&4294967295,S=y+(w<<10&4294967295|w>>>22),w=T+(y^(S|~v))+I[6]+2734768916&4294967295,T=S+(w<<15&4294967295|w>>>17),w=v+(S^(T|~y))+I[13]+1309151649&4294967295,v=T+(w<<21&4294967295|w>>>11),w=y+(T^(v|~S))+I[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~T))+I[11]+3174756917&4294967295,S=y+(w<<10&4294967295|w>>>22),w=T+(y^(S|~v))+I[2]+718787259&4294967295,T=S+(w<<15&4294967295|w>>>17),w=v+(S^(T|~y))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+S&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,I=this.B,T=this.h,S=0;S<y;){if(T==0)for(;S<=v;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<y;)if(I[T++]=E.charCodeAt(S++),T==this.blockSize){s(this,I),T=0;break}}else for(;S<y;)if(I[T++]=E[S++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)E[v++]=this.g[y]>>>I&255;return E};function i(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function a(E,y){this.h=y;for(var v=[],I=!0,T=E.length-1;0<=T;T--){var S=E[T]|0;I&&S==y||(v[T]=S,I=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?i(E,function(y){return new a([y|0],0>y?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return A(f(-E));for(var y=[],v=1,I=0;E>=v;I++)y[I]=E/v|0,v*=4294967296;return new a(y,0)}function p(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return A(p(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(y,8)),I=g,T=0;T<E.length;T+=8){var S=Math.min(8,E.length-T),w=parseInt(E.substring(T,T+S),y);8>S?(S=f(Math.pow(y,S)),I=I.j(S).add(f(w))):(I=I.j(v),I=I.add(f(w)))}return I}var g=u(0),_=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-A(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);E+=(0<=I?I:4294967296+I)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+A(this).toString(E);for(var y=f(Math.pow(E,6)),v=this,I="";;){var T=k(v,y).g;v=M(v,T.j(y));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=T,P(v))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=M(this,E),N(E)?-1:P(E)?0:1};function A(E){for(var y=E.g.length,v=[],I=0;I<y;I++)v[I]=~E.g[I];return new a(v,~E.h).add(_)}n.abs=function(){return N(this)?A(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0,T=0;T<=y;T++){var S=I+(this.i(T)&65535)+(E.i(T)&65535),w=(S>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);I=w>>>16,S&=65535,w&=65535,v[T]=w<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function M(E,y){return E.add(A(y))}n.j=function(E){if(P(this)||P(E))return g;if(N(this))return N(E)?A(this).j(A(E)):A(A(this).j(E));if(N(E))return A(this.j(A(E)));if(0>this.l(R)&&0>E.l(R))return f(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<E.g.length;T++){var S=this.i(I)>>>16,w=this.i(I)&65535,$e=E.i(T)>>>16,st=E.i(T)&65535;v[2*I+2*T]+=w*st,U(v,2*I+2*T),v[2*I+2*T+1]+=S*st,U(v,2*I+2*T+1),v[2*I+2*T+1]+=w*$e,U(v,2*I+2*T+1),v[2*I+2*T+2]+=S*$e,U(v,2*I+2*T+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new a(v,0)};function U(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function O(E,y){this.g=E,this.h=y}function k(E,y){if(P(y))throw Error("division by zero");if(P(E))return new O(g,g);if(N(E))return y=k(A(E),y),new O(A(y.g),A(y.h));if(N(y))return y=k(E,A(y)),new O(A(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,I=y;0>=I.l(E);)v=$(v),I=$(I);var T=j(v,1),S=j(I,1);for(I=j(I,2),v=j(v,2);!P(I);){var w=S.add(I);0>=w.l(E)&&(T=T.add(v),S=w),I=j(I,1),v=j(v,1)}return y=M(E,T.j(y)),new O(T,y)}for(T=g;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=f(v),w=S.j(y);N(w)||0<w.l(E);)v-=I,S=f(v),w=S.j(y);P(S)&&(S=_),T=T.add(S),E=M(E,w)}return new O(T,E)}n.A=function(E){return k(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&E.i(I);return new a(v,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|E.i(I);return new a(v,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^E.i(I);return new a(v,this.h^E.h)};function $(E){for(var y=E.g.length+1,v=[],I=0;I<y;I++)v[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(v,E.h)}function j(E,y){var v=y>>5;y%=32;for(var I=E.g.length-v,T=[],S=0;S<I;S++)T[S]=0<y?E.i(S+v)>>>y|E.i(S+v+1)<<32-y:E.i(S+v);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,oh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,ln=a}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ah,lh,br,ch,Ms,_o,uh,hh,dh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ss=="object"&&Ss];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var x=o[m];if(!(x in d))break e;d=d[x]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var d=0,m=!1,x={next:function(){if(!m&&d<o.length){var C=d++;return{value:c(C,o[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,d){return o.call.apply(o.bind,arguments)}function g(o,c,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,m),o.apply(c,x)}}return function(){return o.apply(c,arguments)}}function _(o,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,_.apply(null,arguments)}function R(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function P(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,x,C){for(var L=Array(arguments.length-2),te=2;te<arguments.length;te++)L[te-2]=arguments[te];return c.prototype[x].apply(m,L)}}function N(o){const c=o.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function A(o,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const x=o.length||0,C=m.length||0;o.length=x+C;for(let L=0;L<C;L++)o[x+L]=m[L]}else o.push(m)}}class M{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){return/^[\s\xa0]*$/.test(o)}function O(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function k(o){return k[" "](o),o}k[" "]=function(){};var $=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function j(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function E(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function y(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)o[d]=m[d];for(let C=0;C<v.length;C++)d=v[C],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function T(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function S(o){l.setTimeout(()=>{throw o},0)}function w(){var o=Xe;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class $e{constructor(){this.h=this.g=null}add(c,d){const m=st.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var st=new M(()=>new Pi,o=>o.reset());class Pi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,Fe=!1,Xe=new $e,er=()=>{const o=l.Promise.resolve(void 0);Ne=()=>{o.then(is)}};var is=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){S(d)}var c=st;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Fe=!1};function Je(){this.s=this.s,this.C=this.C}Je.prototype.s=!1,Je.prototype.ma=function(){this.s||(this.s=!0,this.N())},Je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var bt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function It(o,c){if(ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if($){e:{try{k(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:pe[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&It.aa.h.call(this)}}P(It,ae);var pe={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),it=0;function os(o,c,d,m,x){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++it,this.da=this.fa=!1}function Qt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ke(o){this.src=o,this.g={},this.h=0}ke.prototype.add=function(o,c,d,m,x){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=Xt(o,c,m,x);return-1<L?(c=o[L],d||(c.fa=!1)):(c=new os(c,this.src,C,!!m,x),c.fa=d,o.push(c)),c};function Oe(o,c){var d=c.type;if(d in o.g){var m=o.g[d],x=Array.prototype.indexOf.call(m,c,void 0),C;(C=0<=x)&&Array.prototype.splice.call(m,x,1),C&&(Qt(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Xt(o,c,d,m){for(var x=0;x<o.length;++x){var C=o[x];if(!C.da&&C.listener==c&&C.capture==!!d&&C.ha==m)return x}return-1}var En="closure_lm_"+(1e6*Math.random()|0),We={};function as(o,c,d,m,x){if(m&&m.once)return cs(o,c,d,m,x);if(Array.isArray(c)){for(var C=0;C<c.length;C++)as(o,c[C],d,m,x);return null}return d=nr(d),o&&o[Gt]?o.K(c,d,f(m)?!!m.capture:!!m,x):ls(o,c,d,!1,m,x)}function ls(o,c,d,m,x,C){if(!c)throw Error("Invalid event type");var L=f(x)?!!x.capture:!!x,te=Tt(o);if(te||(o[En]=te=new ke(o)),d=te.add(c,d,m,L,C),d.proxy)return d;if(m=Ci(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)bt||(x=L),x===void 0&&(x=!1),o.addEventListener(c.toString(),m,x);else if(o.attachEvent)o.attachEvent(hs(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ci(){function o(d){return c.call(o.src,o.listener,d)}const c=ds;return o}function cs(o,c,d,m,x){if(Array.isArray(c)){for(var C=0;C<c.length;C++)cs(o,c[C],d,m,x);return null}return d=nr(d),o&&o[Gt]?o.L(c,d,f(m)?!!m.capture:!!m,x):ls(o,c,d,!0,m,x)}function us(o,c,d,m,x){if(Array.isArray(c))for(var C=0;C<c.length;C++)us(o,c[C],d,m,x);else m=f(m)?!!m.capture:!!m,d=nr(d),o&&o[Gt]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],d=Xt(C,d,m,x),-1<d&&(Qt(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=Tt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Xt(c,d,m,x)),(d=-1<o?c[o]:null)&&tr(d))}function tr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Gt])Oe(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(hs(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Tt(c))?(Oe(d,o),d.h==0&&(d.src=null,c[En]=null)):Qt(o)}}}function hs(o){return o in We?We[o]:We[o]="on"+o}function ds(o,c){if(o.da)o=!0;else{c=new It(c,this);var d=o.listener,m=o.ha||o.src;o.fa&&tr(o),o=d.call(m,c)}return o}function Tt(o){return o=o[En],o instanceof ke?o:null}var bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function nr(o){return typeof o=="function"?o:(o[bn]||(o[bn]=function(c){return o.handleEvent(c)}),o[bn])}function me(){Je.call(this),this.i=new ke(this),this.M=this,this.F=null}P(me,Je),me.prototype[Gt]=!0,me.prototype.removeEventListener=function(o,c,d,m){us(this,o,c,d,m)};function ye(o,c){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new ae(c,o);else if(c instanceof ae)c.target=c.target||o;else{var x=c;c=new ae(m,o),I(c,x)}if(x=!0,d)for(var C=d.length-1;0<=C;C--){var L=c.g=d[C];x=Jt(L,m,!0,c)&&x}if(L=c.g=o,x=Jt(L,m,!0,c)&&x,x=Jt(L,m,!1,c)&&x,d)for(C=0;C<d.length;C++)L=c.g=d[C],x=Jt(L,m,!1,c)&&x}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],m=0;m<d.length;m++)Qt(d[m]);delete o.g[c],o.h--}}this.F=null},me.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},me.prototype.L=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function Jt(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,C=0;C<c.length;++C){var L=c[C];if(L&&!L.da&&L.capture==d){var te=L.listener,_e=L.ha||L.src;L.fa&&Oe(o.i,L),x=te.call(_e,m)!==!1&&x}}return x&&!m.defaultPrevented}function In(o,c,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function rr(o){o.g=In(()=>{o.g=null,o.i&&(o.i=!1,rr(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class H extends Je{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:rr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Y(o){Je.call(this),this.h=o,this.g={}}P(Y,Je);var Be=[];function xt(o){j(o.g,function(c,d){this.g.hasOwnProperty(d)&&tr(c)},o),o.g={}}Y.prototype.N=function(){Y.aa.N.call(this),xt(this)},Y.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sr=l.JSON.stringify,zd=l.JSON.parse,Hd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ni(){}Ni.prototype.h=null;function La(o){return o.h||(o.h=o.i())}function Ma(){}var ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ki(){ae.call(this,"d")}P(ki,ae);function Di(){ae.call(this,"c")}P(Di,ae);var Yt={},Ua=null;function fs(){return Ua=Ua||new me}Yt.La="serverreachability";function Fa(o){ae.call(this,Yt.La,o)}P(Fa,ae);function or(o){const c=fs();ye(c,new Fa(c))}Yt.STAT_EVENT="statevent";function Ba(o,c){ae.call(this,Yt.STAT_EVENT,o),this.stat=c}P(Ba,ae);function De(o){const c=fs();ye(c,new Ba(c,o))}Yt.Ma="timingevent";function qa(o,c){ae.call(this,Yt.Ma,o),this.size=c}P(qa,ae);function ar(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function Kd(o,c,d,m,x,C){o.info(function(){if(o.g)if(C)for(var L="",te=C.split("&"),_e=0;_e<te.length;_e++){var Z=te[_e].split("=");if(1<Z.length){var Te=Z[0];Z=Z[1];var xe=Te.split("_");L=2<=xe.length&&xe[1]=="type"?L+(Te+"="+Z+"&"):L+(Te+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+L})}function Gd(o,c,d,m,x,C,L){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+C+" "+L})}function Tn(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Xd(o,d)+(m?" "+m:"")})}function Qd(o,c){o.info(function(){return"TIMEOUT: "+c})}lr.prototype.info=function(){};function Xd(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var x=m[1];if(Array.isArray(x)&&!(1>x.length)){var C=x[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<x.length;L++)x[L]=""}}}}return sr(d)}catch{return c}}var ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vi;function ms(){}P(ms,Ni),ms.prototype.g=function(){return new XMLHttpRequest},ms.prototype.i=function(){return{}},Vi=new ms;function At(o,c,d,m){this.j=o,this.i=c,this.l=d,this.R=m||1,this.U=new Y(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wa}function Wa(){this.i=null,this.g="",this.h=!1}var za={},Oi={};function ji(o,c,d){o.L=1,o.v=vs(ot(c)),o.m=d,o.P=!0,Ha(o,null)}function Ha(o,c){o.F=Date.now(),gs(o),o.A=ot(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),ol(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Wa,o.g=Tl(o.j,d?c:null,!o.m),0<o.O&&(o.M=new H(_(o.Y,o,o.g),o.O)),c=o.U,d=o.g,m=o.ca;var x="readystatechange";Array.isArray(x)||(x&&(Be[0]=x.toString()),x=Be);for(var C=0;C<x.length;C++){var L=as(d,x[C],m||c.handleEvent,!1,c.h||c);if(!L)break;c.g[L.key]=L}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),or(),Kd(o.i,o.u,o.A,o.l,o.R,o.m)}At.prototype.ca=function(o){o=o.target;const c=this.M;c&&at(o)==3?c.j():this.Y(o)},At.prototype.Y=function(o){try{if(o==this.g)e:{const xe=at(this.g);var c=this.g.Ba();const Rn=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||fl(this.g)))){this.J||xe!=4||c==7||(c==8||0>=Rn?or(3):or(2)),Li(this);var d=this.g.Z();this.X=d;t:if(Ka(this)){var m=fl(this.g);o="";var x=m.length,C=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),cr(this);var L="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(C&&c==x-1)});m.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,Gd(this.i,this.u,this.A,this.l,this.R,xe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,_e=this.g;if((te=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(te)){var Z=te;break t}}Z=null}if(d=Z)Tn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mi(this,d);else{this.o=!1,this.s=3,De(12),Zt(this),cr(this);break e}}if(this.P){d=!0;let ze;for(;!this.J&&this.C<L.length;)if(ze=Jd(this,L),ze==Oi){xe==4&&(this.s=4,De(14),d=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==za){this.s=4,De(15),Tn(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else Tn(this.i,this.l,ze,null),Mi(this,ze);if(Ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||L.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)Tn(this.i,this.l,L,"[Invalid Chunked Response]"),Zt(this),cr(this);else if(0<L.length&&!this.W){this.W=!0;var Te=this.j;Te.g==this&&Te.ba&&!Te.M&&(Te.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Wi(Te),Te.M=!0,De(11))}}else Tn(this.i,this.l,L,null),Mi(this,L);xe==4&&Zt(this),this.o&&!this.J&&(xe==4?wl(this.j,this):(this.o=!1,gs(this)))}else mf(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Zt(this),cr(this)}}}catch{}finally{}};function Ka(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Jd(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?Oi:(d=Number(c.substring(d,m)),isNaN(d)?za:(m+=1,m+d>c.length?Oi:(c=c.slice(m,m+d),o.C=m+d,c)))}At.prototype.cancel=function(){this.J=!0,Zt(this)};function gs(o){o.S=Date.now()+o.I,Ga(o,o.I)}function Ga(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ar(_(o.ba,o),c)}function Li(o){o.B&&(l.clearTimeout(o.B),o.B=null)}At.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Qd(this.i,this.A),this.L!=2&&(or(),De(17)),Zt(this),this.s=2,cr(this)):Ga(this,this.S-o)};function cr(o){o.j.G==0||o.J||wl(o.j,o)}function Zt(o){Li(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,xt(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Mi(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Ui(d.h,o))){if(!o.K&&Ui(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ts(d),bs(d);else break e;$i(d),De(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=ar(_(d.Za,d),6e3));if(1>=Ja(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tn(d,11)}else if((o.K||d.g==o)&&Ts(d),!U(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let Z=x[c];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Te=Z[3];Te!=null&&(d.la=Te,d.j.info("VER="+d.la));const xe=Z[4];xe!=null&&(d.Aa=xe,d.j.info("SVER="+d.Aa));const Rn=Z[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(m=1.5*Rn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const ze=o.g;if(ze){const As=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(As){var C=m.h;C.g||As.indexOf("spdy")==-1&&As.indexOf("quic")==-1&&As.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Fi(C,C.h),C.h=null))}if(m.D){const zi=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;zi&&(m.ya=zi,re(m.I,m.D,zi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var L=o;if(m.qa=Il(m,m.J?m.ia:null,m.W),L.K){Ya(m.h,L);var te=L,_e=m.L;_e&&(te.I=_e),te.B&&(Li(te),gs(te)),m.g=L}else _l(m);0<d.i.length&&Is(d)}else Z[0]!="stop"&&Z[0]!="close"||tn(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?tn(d,7):qi(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}or(4)}catch{}}var Yd=class{constructor(o,c){this.g=o,this.map=c}};function Qa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ja(o){return o.h?1:o.g?o.g.size:0}function Ui(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Fi(o,c){o.g?o.g.add(c):o.h=c}function Ya(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Qa.prototype.cancel=function(){if(this.i=Za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Za(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return N(o.i)}function Zd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,m=0;m<d;m++)c.push(o[m]);return c}c=[],d=0;for(m in o)c[d++]=o[m];return c}function ef(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const m in o)c[d++]=m;return c}}}function el(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=ef(o),m=Zd(o),x=m.length,C=0;C<x;C++)c.call(void 0,m[C],d&&d[C],o)}var tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),x=null;if(0<=m){var C=o[d].substring(0,m);x=o[d].substring(m+1)}else C=o[d];c(C,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function en(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof en){this.h=o.h,ys(this,o.j),this.o=o.o,this.g=o.g,_s(this,o.s),this.l=o.l;var c=o.i,d=new dr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),nl(this,d),this.m=o.m}else o&&(c=String(o).match(tl))?(this.h=!1,ys(this,c[1]||"",!0),this.o=ur(c[2]||""),this.g=ur(c[3]||"",!0),_s(this,c[4]),this.l=ur(c[5]||"",!0),nl(this,c[6]||"",!0),this.m=ur(c[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}en.prototype.toString=function(){var o=[],c=this.j;c&&o.push(hr(c,rl,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(hr(c,rl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(hr(d,d.charAt(0)=="/"?sf:rf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",hr(d,af)),o.join("")};function ot(o){return new en(o)}function ys(o,c,d){o.j=d?ur(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function _s(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function nl(o,c,d){c instanceof dr?(o.i=c,lf(o.i,o.h)):(d||(c=hr(c,of)),o.i=new dr(c,o.h))}function re(o,c,d){o.i.set(c,d)}function vs(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ur(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,nf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function nf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var rl=/[#\/\?@]/g,rf=/[#\?:]/g,sf=/[#\?]/g,of=/[#\?@]/g,af=/#/g;function dr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Rt(o){o.g||(o.g=new Map,o.h=0,o.i&&tf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=dr.prototype,n.add=function(o,c){Rt(this),this.i=null,o=xn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function sl(o,c){Rt(o),c=xn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function il(o,c){return Rt(o),c=xn(o,c),o.g.has(c)}n.forEach=function(o,c){Rt(this),this.g.forEach(function(d,m){d.forEach(function(x){o.call(c,x,m,this)},this)},this)},n.na=function(){Rt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const x=o[m];for(let C=0;C<x.length;C++)d.push(c[m])}return d},n.V=function(o){Rt(this);let c=[];if(typeof o=="string")il(this,o)&&(c=c.concat(this.g.get(xn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Rt(this),this.i=null,o=xn(this,o),il(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ol(o,c,d){sl(o,c),0<d.length&&(o.i=null,o.g.set(xn(o,c),N(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const C=encodeURIComponent(String(m)),L=this.V(m);for(m=0;m<L.length;m++){var x=C;L[m]!==""&&(x+="="+encodeURIComponent(String(L[m]))),o.push(x)}}return this.i=o.join("&")};function xn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function lf(o,c){c&&!o.j&&(Rt(o),o.i=null,o.g.forEach(function(d,m){var x=m.toLowerCase();m!=x&&(sl(this,m),ol(this,x,d))},o)),o.j=c}function cf(o,c){const d=new lr;if(l.Image){const m=new Image;m.onload=R(St,d,"TestLoadImage: loaded",!0,c,m),m.onerror=R(St,d,"TestLoadImage: error",!1,c,m),m.onabort=R(St,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=R(St,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function uf(o,c){const d=new lr,m=new AbortController,x=setTimeout(()=>{m.abort(),St(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(x),C.ok?St(d,"TestPingServer: ok",!0,c):St(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),St(d,"TestPingServer: error",!1,c)})}function St(o,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function hf(){this.g=new Hd}function df(o,c,d){const m=d||"";try{el(o,function(x,C){let L=x;f(x)&&(L=sr(x)),c.push(m+C+"="+encodeURIComponent(L))})}catch(x){throw c.push(m+"type="+encodeURIComponent("_badmap")),x}}function fr(o){this.l=o.Ub||null,this.j=o.eb||!1}P(fr,Ni),fr.prototype.g=function(){return new ws(this.l,this.j)},fr.prototype.i=function(o){return function(){return o}}({});function ws(o,c){me.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ws,me),n=ws.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,mr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;al(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function al(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?pr(this):mr(this),this.readyState==3&&al(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,pr(this))},n.Qa=function(o){this.g&&(this.response=o,pr(this))},n.ga=function(){this.g&&pr(this)};function pr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,mr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ll(o){let c="";return j(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Bi(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ll(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):re(o,c,d))}function oe(o){me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(oe,me);var ff=/^https?$/i,pf=["POST","PUT"];n=oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vi.g(),this.v=this.o?La(this.o):La(Vi),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){cl(this,C);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),x=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pf,c,void 0))||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of d)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){cl(this,C)}};function cl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ul(o),Es(o)}function ul(o){o.A||(o.A=!0,ye(o,"complete"),ye(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ye(this,"complete"),ye(this,"abort"),Es(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Es(this,!0)),oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hl(this):this.bb())},n.bb=function(){hl(this)};function hl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)In(o.Ea,0,o);else if(ye(o,"readystatechange"),at(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=L===0){var x=String(o.D).match(tl)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),m=!ff.test(x?x.toLowerCase():"")}d=m}if(d)ye(o,"complete"),ye(o,"success");else{o.m=6;try{var C=2<at(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",ul(o)}}finally{Es(o)}}}}function Es(o,c){if(o.g){dl(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||ye(o,"ready");try{d.onreadystatechange=m}catch{}}}function dl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),zd(c)}};function fl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mf(o){const c={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=T(o[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=c[x]||[];c[x]=C,C.push(d)}E(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function pl(o){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gr("baseRetryDelayMs",5e3,o),this.cb=gr("retryDelaySeedMs",1e4,o),this.Wa=gr("forwardChannelMaxRetries",2,o),this.wa=gr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Qa(o&&o.concurrentRequestLimit),this.Da=new hf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=pl.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,m){De(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Il(this,null,this.W),Is(this)};function qi(o){if(ml(o),o.G==3){var c=o.U++,d=ot(o.I);if(re(d,"SID",o.K),re(d,"RID",c),re(d,"TYPE","terminate"),yr(o,d),c=new At(o,o.j,c),c.L=2,c.v=vs(ot(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Tl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),gs(c)}bl(o)}function bs(o){o.g&&(Wi(o),o.g.cancel(),o.g=null)}function ml(o){bs(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ts(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Is(o){if(!Xa(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ne||er(),Fe||(Ne(),Fe=!0),Xe.add(c,o),o.B=0}}function gf(o,c){return Ja(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ar(_(o.Ga,o,c),El(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const x=new At(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(x.H=C,C=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=yl(this,x,c),d=ot(this.I),re(d,"RID",o),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),yr(this,d),C&&(this.O?c="headers="+encodeURIComponent(String(ll(C)))+"&"+c:this.m&&Bi(d,this.m,C)),Fi(this.h,x),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",c),re(d,"SID","null"),x.T=!0,ji(x,d,null)):ji(x,d,c),this.G=2}}else this.G==3&&(o?gl(this,o):this.i.length==0||Xa(this.h)||gl(this))};function gl(o,c){var d;c?d=c.l:d=o.U++;const m=ot(o.I);re(m,"SID",o.K),re(m,"RID",d),re(m,"AID",o.T),yr(o,m),o.m&&o.o&&Bi(m,o.m,o.o),d=new At(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=yl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fi(o.h,d),ji(d,m,c)}function yr(o,c){o.H&&j(o.H,function(d,m){re(c,m,d)}),o.l&&el({},function(d,m){re(c,m,d)})}function yl(o,c,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;e:{var x=o.i;let C=-1;for(;;){const L=["count="+d];C==-1?0<d?(C=x[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let te=!0;for(let _e=0;_e<d;_e++){let Z=x[_e].g;const Te=x[_e].map;if(Z-=C,0>Z)C=Math.max(0,x[_e].g-100),te=!1;else try{df(Te,L,"req"+Z+"_")}catch{m&&m(Te)}}if(te){m=L.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,m}function _l(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ne||er(),Fe||(Ne(),Fe=!0),Xe.add(c,o),o.v=0}}function $i(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ar(_(o.Fa,o),El(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,vl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ar(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),bs(this),vl(this))};function Wi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function vl(o){o.g=new At(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ot(o.qa);re(c,"RID","rpc"),re(c,"SID",o.K),re(c,"AID",o.T),re(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(c,"TO",o.ja),re(c,"TYPE","xmlhttp"),yr(o,c),o.m&&o.o&&Bi(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=vs(ot(c)),d.m=null,d.P=!0,Ha(d,o)}n.Za=function(){this.C!=null&&(this.C=null,bs(this),$i(this),De(19))};function Ts(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function wl(o,c){var d=null;if(o.g==c){Ts(o),Wi(o),o.g=null;var m=2}else if(Ui(o.h,c))d=c.D,Ya(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=o.B;m=fs(),ye(m,new qa(m,d)),Is(o)}else _l(o);else if(x=c.s,x==3||x==0&&0<c.X||!(m==1&&gf(o,c)||m==2&&$i(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),x){case 1:tn(o,5);break;case 4:tn(o,10);break;case 3:tn(o,6);break;default:tn(o,2)}}}function El(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function tn(o,c){if(o.j.info("Error code "+c),c==2){var d=_(o.fb,o),m=o.Xa;const x=!m;m=new en(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ys(m,"https"),vs(m),x?cf(m.toString(),d):uf(m.toString(),d)}else De(2);o.G=0,o.l&&o.l.sa(c),bl(o),ml(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function bl(o){if(o.G=0,o.ka=[],o.l){const c=Za(o.h);(c.length!=0||o.i.length!=0)&&(A(o.ka,c),A(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Il(o,c,d){var m=d instanceof en?ot(d):new en(d);if(m.g!="")c&&(m.g=c+"."+m.g),_s(m,m.s);else{var x=l.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var C=new en(null);m&&ys(C,m),c&&(C.g=c),x&&_s(C,x),d&&(C.l=d),m=C}return d=o.D,c=o.ya,d&&c&&re(m,d,c),re(m,"VER",o.la),yr(o,m),m}function Tl(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new oe(new fr({eb:d})):new oe(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xl(){}n=xl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xs(){}xs.prototype.g=function(o,c){return new Le(o,c)};function Le(o,c){me.call(this),this.g=new pl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!U(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new An(this)}P(Le,me),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){qi(this.g)},Le.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=sr(o),o=d);c.i.push(new Yd(c.Ya++,o)),c.G==3&&Is(c)},Le.prototype.N=function(){this.g.l=null,delete this.j,qi(this.g),delete this.g,Le.aa.N.call(this)};function Al(o){ki.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Al,ki);function Rl(){Di.call(this),this.status=1}P(Rl,Di);function An(o){this.g=o}P(An,xl),An.prototype.ua=function(){ye(this.g,"a")},An.prototype.ta=function(o){ye(this.g,new Al(o))},An.prototype.sa=function(o){ye(this.g,new Rl)},An.prototype.ra=function(){ye(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,dh=function(){return new xs},hh=function(){return fs()},uh=Yt,_o={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ps.NO_ERROR=0,ps.TIMEOUT=8,ps.HTTP_ERROR=6,Ms=ps,$a.COMPLETE="complete",ch=$a,Ma.EventType=ir,ir.OPEN="a",ir.CLOSE="b",ir.ERROR="c",ir.MESSAGE="d",me.prototype.listen=me.prototype.K,br=Ma,lh=fr,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,ah=oe}).apply(typeof Ss<"u"?Ss:typeof self<"u"?self:typeof window<"u"?window:{});const dc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new qo("@firebase/firestore");function _r(){return fn.logLevel}function B(n,...e){if(fn.logLevel<=X.DEBUG){const t=e.map(na);fn.debug(`Firestore (${Qn}): ${n}`,...t)}}function mt(n,...e){if(fn.logLevel<=X.ERROR){const t=e.map(na);fn.error(`Firestore (${Qn}): ${n}`,...t)}}function Un(n,...e){if(fn.logLevel<=X.WARN){const t=e.map(na);fn.warn(`Firestore (${Qn}): ${n}`,...t)}}function na(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: `+n;throw mt(e),new Error(e)}function ne(n,e){n||z()}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class E_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class b_{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new fh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new Se(e)}}class I_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class T_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new I_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string"),this.R=t.token,new x_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=R_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function Fn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new de(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new de(0,0))}static max(){return new K(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends jr{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const S_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends jr{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return S_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new we(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(se.fromString(e))}static fromName(e){return new q(se.fromString(e).popFirst(5))}static empty(){return new q(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new se(e.slice()))}}function P_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new qt(s,q.empty(),e)}function C_(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qt(K.min(),q.empty(),-1)}static max(){return new qt(K.max(),q.empty(),-1)}}function N_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class D_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==k_)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;t(e[f]).next(p=>{a[f]=p,++l,l===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function V_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ra.oe=-1;function gi(n){return n==null}function Zs(n){return n===0&&1/n==-1/0}function O_(n){return typeof n=="number"&&Number.isInteger(n)&&!Zs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function mh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ps(this.root,e,this.comparator,!0)}}class Ps{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pc(this.data.getIterator())}getIteratorFrom(e){return new pc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class pc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Me([])}unionWith(e){let t=new be(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gh("Invalid base64 string: "+i):i}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const j_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(n){if(ne(!!n),typeof n=="string"){let e=0;const t=j_.exec(n);if(ne(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ia(n){const e=n.mapValue.fields.__previous_value__;return sa(e)?ia(e):e}function Lr(n){const e=$t(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t,r,s,i,a,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}class Mr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sa(n)?4:M_(n)?9007199254740991:10:z()}function rt(n,e){if(n===e)return!0;const t=mn(n);if(t!==mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Lr(n).isEqual(Lr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=$t(s.timestampValue),l=$t(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return pn(s.bytesValue).isEqual(pn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ce(s.doubleValue),l=ce(i.doubleValue);return a===l?Zs(a)===Zs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Fn(n.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fc(a)!==fc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!rt(a[u],l[u])))return!1;return!0}(n,e);default:return z()}}function Ur(n,e){return(n.values||[]).find(t=>rt(t,e))!==void 0}function Bn(n,e){if(n===e)return 0;const t=mn(n),r=mn(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ce(i.integerValue||i.doubleValue),u=ce(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return mc(n.timestampValue,e.timestampValue);case 4:return mc(Lr(n),Lr(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(i,a){const l=pn(i),u=pn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const p=ee(l[f],u[f]);if(p!==0)return p}return ee(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ee(ce(i.latitude),ce(a.latitude));return l!==0?l:ee(ce(i.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,a){const l=i.values||[],u=a.values||[];for(let f=0;f<l.length&&f<u.length;++f){const p=Bn(l[f],u[f]);if(p)return p}return ee(l.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===Cs.mapValue&&a===Cs.mapValue)return 0;if(i===Cs.mapValue)return 1;if(a===Cs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},p=Object.keys(f);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const _=ee(u[g],p[g]);if(_!==0)return _;const R=Bn(l[u[g]],f[p[g]]);if(R!==0)return R}return ee(u.length,p.length)}(n.mapValue,e.mapValue);default:throw z()}}function mc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=$t(n),r=$t(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function qn(n){return vo(n)}function vo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=$t(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return pn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=vo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${vo(t.fields[a])}`;return s+"}"}(n.mapValue):z()}function gc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wo(n){return!!n&&"integerValue"in n}function oa(n){return!!n&&"arrayValue"in n}function yc(n){return!!n&&"nullValue"in n}function _c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Us(n){return!!n&&"mapValue"in n}function Rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Rr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function M_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Us(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rr(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Rr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Us(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){vn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new je(Rr(this.value))}}function yh(n){const e=[];return vn(n.fields,(t,r)=>{const s=new we([t]);if(Us(r)){const i=yh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Me(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Pe(e,0,K.min(),K.min(),K.min(),je.empty(),0)}static newFoundDocument(e,t,r,s){return new Pe(e,1,t,K.min(),r,s,0)}static newNoDocument(e,t){return new Pe(e,2,t,K.min(),K.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,K.min(),K.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.position=e,this.inclusive=t}}function vc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=Bn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t="asc"){this.field=e,this.dir=t}}function U_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{}class ue extends _h{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new B_(e,t,r):t==="array-contains"?new W_(e,r):t==="in"?new z_(e,r):t==="not-in"?new H_(e,r):t==="array-contains-any"?new K_(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new q_(e,r):new $_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Bn(t,this.value)):t!==null&&mn(this.value)===mn(t)&&this.matchesComparison(Bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends _h{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Qe(e,t)}matches(e){return vh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vh(n){return n.op==="and"}function wh(n){return F_(n)&&vh(n)}function F_(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function Eo(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(wh(n))return n.filters.map(e=>Eo(e)).join(",");{const e=n.filters.map(t=>Eo(t)).join(",");return`${n.op}(${e})`}}function Eh(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&rt(r.value,s.value)}(n,e):n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Eh(a,s.filters[l]),!0):!1}(n,e):void z()}function bh(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${qn(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(bh).join(" ,")+"}"}(n):"Filter"}class B_ extends ue{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class q_ extends ue{constructor(e,t){super(e,"in",t),this.keys=Ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $_ extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ih(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class W_ extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oa(t)&&Ur(t.arrayValue,this.value)}}class z_ extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ur(this.value.arrayValue,t)}}class H_ extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ur(this.value.arrayValue,t)}}class K_ extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ur(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Ec(n,e=null,t=[],r=[],s=null,i=null,a=null){return new G_(n,e,t,r,s,i,a)}function aa(n){const e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Eo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qn(r)).join(",")),e.ue=t}return e.ue}function la(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!U_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Eh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wc(n.startAt,e.startAt)&&wc(n.endAt,e.endAt)}function bo(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Q_(n,e,t,r,s,i,a,l){return new Yr(n,e,t,r,s,i,a,l)}function Th(n){return new Yr(n)}function bc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xh(n){return n.collectionGroup!==null}function Sr(n){const e=G(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new be(we.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ti(i,r))}),t.has(we.keyField().canonicalString())||e.ce.push(new ti(we.keyField(),r))}return e.ce}function tt(n){const e=G(n);return e.le||(e.le=X_(e,Sr(n))),e.le}function X_(n,e){if(n.limitType==="F")return Ec(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ti(s.field,i)});const t=n.endAt?new ei(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ei(n.startAt.position,n.startAt.inclusive):null;return Ec(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Io(n,e){const t=n.filters.concat([e]);return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function To(n,e,t){return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return la(tt(n),tt(e))&&n.limitType===e.limitType}function Ah(n){return`${aa(tt(n))}|lt:${n.limitType}`}function Pn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>bh(s)).join(", ")}]`),gi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>qn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>qn(s)).join(",")),`Target(${r})`}(tt(n))}; limitType=${n.limitType})`}function _i(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Sr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=vc(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,Sr(r),s)||r.endAt&&!function(a,l,u){const f=vc(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,Sr(r),s))}(n,e)}function J_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Rh(n){return(e,t)=>{let r=!1;for(const s of Sr(n)){const i=Y_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Y_(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?Bn(u,f):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new ie(q.comparator);function gt(){return Z_}const Sh=new ie(q.comparator);function Ir(...n){let e=Sh;for(const t of n)e=e.insert(t.key,t);return e}function Ph(n){let e=Sh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function an(){return Pr()}function Ch(){return Pr()}function Pr(){return new Xn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ev=new ie(q.comparator),tv=new be(q.comparator);function Q(...n){let e=tv;for(const t of n)e=e.add(t);return e}const nv=new be(ee);function rv(){return nv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zs(e)?"-0":e}}function kh(n){return{integerValue:""+n}}function sv(n,e){return O_(e)?kh(e):Nh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function iv(n,e,t){return n instanceof ni?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sa(i)&&(i=ia(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Fr?Vh(n,e):n instanceof Br?Oh(n,e):function(s,i){const a=Dh(s,i),l=Ic(a)+Ic(s.Pe);return wo(a)&&wo(s.Pe)?kh(l):Nh(s.serializer,l)}(n,e)}function ov(n,e,t){return n instanceof Fr?Vh(n,e):n instanceof Br?Oh(n,e):t}function Dh(n,e){return n instanceof ri?function(r){return wo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ni extends vi{}class Fr extends vi{constructor(e){super(),this.elements=e}}function Vh(n,e){const t=jh(e);for(const r of n.elements)t.some(s=>rt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Br extends vi{constructor(e){super(),this.elements=e}}function Oh(n,e){let t=jh(e);for(const r of n.elements)t=t.filter(s=>!rt(s,r));return{arrayValue:{values:t}}}class ri extends vi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ic(n){return ce(n.integerValue||n.doubleValue)}function jh(n){return oa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function av(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Fr&&s instanceof Fr||r instanceof Br&&s instanceof Br?Fn(r.elements,s.elements,rt):r instanceof ri&&s instanceof ri?rt(r.Pe,s.Pe):r instanceof ni&&s instanceof ni}(n.transform,e.transform)}class lv{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function Lh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ca(n.key,Ge.none()):new Zr(n.key,n.data,Ge.none());{const t=n.data,r=je.empty();let s=new be(we.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Kt(n.key,r,new Me(s.toArray()),Ge.none())}}function cv(n,e,t){n instanceof Zr?function(s,i,a){const l=s.value.clone(),u=xc(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Kt?function(s,i,a){if(!Fs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=xc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Mh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Cr(n,e,t,r){return n instanceof Zr?function(i,a,l,u){if(!Fs(i.precondition,a))return l;const f=i.value.clone(),p=Ac(i.fieldTransforms,u,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Kt?function(i,a,l,u){if(!Fs(i.precondition,a))return l;const f=Ac(i.fieldTransforms,u,a),p=a.data;return p.setAll(Mh(i)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return Fs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function uv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Dh(r.transform,s||null);i!=null&&(t===null&&(t=je.empty()),t.set(r.field,i))}return t||null}function Tc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fn(r,s,(i,a)=>av(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zr extends wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kt extends wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function xc(n,e,t){const r=new Map;ne(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,ov(a,l,t[s]))}return r}function Ac(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,iv(i,a,e))}return r}class ca extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hv extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ch();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=Lh(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Fn(this.mutations,e.mutations,(t,r)=>Tc(t,r))&&Fn(this.baseMutations,e.baseMutations,(t,r)=>Tc(t,r))}}class ua{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length);let s=function(){return ev}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ua(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,J;function mv(n){switch(n){default:return z();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Uh(n){if(n===void 0)return mt("GRPC error has no .code"),D.UNKNOWN;switch(n){case le.OK:return D.OK;case le.CANCELLED:return D.CANCELLED;case le.UNKNOWN:return D.UNKNOWN;case le.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case le.INTERNAL:return D.INTERNAL;case le.UNAVAILABLE:return D.UNAVAILABLE;case le.UNAUTHENTICATED:return D.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case le.NOT_FOUND:return D.NOT_FOUND;case le.ALREADY_EXISTS:return D.ALREADY_EXISTS;case le.PERMISSION_DENIED:return D.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case le.ABORTED:return D.ABORTED;case le.OUT_OF_RANGE:return D.OUT_OF_RANGE;case le.UNIMPLEMENTED:return D.UNIMPLEMENTED;case le.DATA_LOSS:return D.DATA_LOSS;default:return z()}}(J=le||(le={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new ln([4294967295,4294967295],0);function Rc(n){const e=gv().encode(n),t=new oh;return t.update(e),new Uint8Array(t.digest())}function Sc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ln([t,r],0),new ln([s,i],0)]}class ha{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Tr(`Invalid padding: ${t}`);if(r<0)throw new Tr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Tr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Tr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ln.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(ln.fromNumber(r)));return s.compare(yv)===1&&(s=new ln([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Rc(e),[r,s]=Sc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ha(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Rc(e),[r,s]=Sc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,es.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ei(K.min(),s,new ie(ee),gt(),Q())}}class es{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new es(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Fh{constructor(e,t){this.targetId=e,this.me=t}}class Bh{constructor(e,t,r=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Pc{constructor(){this.fe=0,this.ge=Nc(),this.pe=Ce.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Q(),t=Q(),r=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new es(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Nc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _v{constructor(e){this.Le=e,this.Be=new Map,this.ke=gt(),this.qe=Cc(),this.Qe=new ie(ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(bo(i))if(r===0){const a=new q(i.path);this.Ue(t,a,Pe.newNoDocument(a,K.min()))}else ne(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=pn(r).toUint8Array()}catch(u){if(u instanceof gh)return Un("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ha(a,s,i)}catch(u){return Un(u instanceof Tr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&bo(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Pe.newNoDocument(u,e))}i.be&&(t.set(a,i.Ce()),i.ve())}});let r=Q();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ei(e,t,this.Qe,this.ke,r);return this.ke=gt(),this.qe=Cc(),this.Qe=new ie(ee),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new be(ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Cc(){return new ie(q.comparator)}function Nc(){return new ie(q.comparator)}const vv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ev=(()=>({and:"AND",or:"OR"}))();class bv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xo(n,e){return n.useProto3Json||gi(e)?e:{value:e}}function si(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Iv(n,e){return si(n,e.toTimestamp())}function nt(n){return ne(!!n),K.fromTimestamp(function(t){const r=$t(t);return new de(r.seconds,r.nanos)}(n))}function da(n,e){return Ao(n,e).canonicalString()}function Ao(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $h(n){const e=se.fromString(n);return ne(Gh(e)),e}function Ro(n,e){return da(n.databaseId,e.path)}function eo(n,e){const t=$h(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(zh(t))}function Wh(n,e){return da(n.databaseId,e)}function Tv(n){const e=$h(n);return e.length===4?se.emptyPath():zh(e)}function So(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zh(n){return ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kc(n,e,t){return{name:Ro(n,e),fields:t.value.mapValue.fields}}function xv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,p){return f.useProto3Json?(ne(p===void 0||typeof p=="string"),Ce.fromBase64String(p||"")):(ne(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ce.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(f){const p=f.code===void 0?D.UNKNOWN:Uh(f.code);return new F(p,f.message||"")}(a);t=new Bh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=eo(n,r.document.name),i=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):K.min(),l=new je({mapValue:{fields:r.document.fields}}),u=Pe.newFoundDocument(s,i,a,l),f=r.targetIds||[],p=r.removedTargetIds||[];t=new Bs(f,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=eo(n,r.document),i=r.readTime?nt(r.readTime):K.min(),a=Pe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Bs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=eo(n,r.document),i=r.removedTargetIds||[];t=new Bs([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new pv(s,i),l=r.targetId;t=new Fh(l,a)}}return t}function Av(n,e){let t;if(e instanceof Zr)t={update:kc(n,e.key,e.value)};else if(e instanceof ca)t={delete:Ro(n,e.key)};else if(e instanceof Kt)t={update:kc(n,e.key,e.data),updateMask:Ov(e.fieldMask)};else{if(!(e instanceof hv))return z();t={verify:Ro(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ni)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Br)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ri)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Iv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function Rv(n,e){return n&&n.length>0?(ne(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?nt(s.updateTime):nt(i);return a.isEqual(K.min())&&(a=nt(i)),new lv(a,s.transformResults||[])}(t,e))):[]}function Sv(n,e){return{documents:[Wh(n,e.path)]}}function Pv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Wh(n,s);const i=function(f){if(f.length!==0)return Kh(Qe.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(p=>function(_){return{field:Cn(_.field),direction:kv(_.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=xo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function Cv(n){let e=Tv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const _=Hh(g);return _ instanceof Qe&&wh(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(_=>function(P){return new ti(Nn(P.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,gi(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(g){const _=!!g.before,R=g.values||[];return new ei(R,_)}(t.startAt));let f=null;return t.endAt&&(f=function(g){const _=!g.before,R=g.values||[];return new ei(R,_)}(t.endAt)),Q_(e,s,a,i,l,"F",u,f)}function Nv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(Nn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>Hh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function kv(n){return vv[n]}function Dv(n){return wv[n]}function Vv(n){return Ev[n]}function Cn(n){return{fieldPath:n.canonicalString()}}function Nn(n){return we.fromServerFormat(n.fieldPath)}function Kh(n){return n instanceof ue?function(t){if(t.op==="=="){if(_c(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NAN"}};if(yc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_c(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NAN"}};if(yc(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(t.field),op:Dv(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(s=>Kh(s));return r.length===1?r[0]:{compositeFilter:{op:Vv(t.op),filters:r}}}(n):z()}function Ov(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,r,s,i=K.min(),a=K.min(),l=Ce.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.ct=e}}function Lv(n){const e=Cv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?To(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this._n=new Uv}addToCollectionParentIndex(e,t){return this._n.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(qt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Uv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new be(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new $n(0)}static Ln(){return new $n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.changes=new Xn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Cr(r.mutation,s,Me.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const s=an();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ir();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=an();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=gt();const a=Pr(),l=function(){return Pr()}();return t.forEach((u,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof Kt)?i=i.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),Cr(p.mutation,f,p.mutation.getFieldMask(),de.now())):a.set(f.key,Me.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((f,p)=>a.set(f,p)),t.forEach((f,p)=>{var g;return l.set(f,new Bv(p,(g=a.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Pr();let s=new ie((a,l)=>a-l),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let p=r.get(u)||Me.empty();p=l.applyToLocalView(f,p),r.set(u,p);const g=(s.get(l.batchId)||Q()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,p=u.value,g=Ch();p.forEach(_=>{if(!i.has(_)){const R=Lh(t.get(_),r.get(_));R!==null&&g.set(_,R),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(an());let l=-1,u=i;return a.next(f=>V.forEach(f,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{u=u.insert(p,_)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,u,f,Q())).next(p=>({batchId:l,changes:Ph(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=Ir();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ir();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const f=function(g,_){return new Yr(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(p=>{p.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Pe.newInvalidDocument(p)))});let l=Ir();return a.forEach((u,f)=>{const p=i.get(u);p!==void 0&&Cr(p.mutation,f,Me.empty(),de.now()),_i(t,f)&&(l=l.insert(u,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return V.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:nt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:Lv(s.bundledQuery),readTime:nt(s.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.overlays=new ie(q.comparator),this.hr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=an();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=an(),i=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let p=i.get(f.largestBatchId);p===null&&(p=an(),i=i.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=an(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=s)););return V.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fv(t,r));let i=this.hr.get(t);i===void 0&&(i=Q(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this.Pr=new be(ge.Ir),this.Tr=new be(ge.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new ge(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new q(new se([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new q(new se([])),r=new ge(t,e),s=new ge(t,e+1);let i=Q();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ge(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return q.comparator(e.key,t.key)||ee(e.pr,t.pr)}static Er(e,t){return ee(e.pr,t.pr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new be(ge.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dv(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(ee);return t.forEach(s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],l=>{r=r.add(l.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new ge(new q(i),0);let l=new be(ee);return this.wr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.pr)),!0)},a),V.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(t.mutations,s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new ge(t,0),s=this.wr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.vr=e,this.docs=function(){return new ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pe.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=gt();const a=t.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:p}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||N_(C_(p),r)<=0||(s.has(p.key)||_i(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Fr(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Kv(this)}getSize(e){return V.resolve(this.size)}}class Kv extends Fv{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.persistence=e,this.Mr=new Xn(t=>aa(t),la),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Or=0,this.Nr=new fa,this.targetCount=0,this.Lr=$n.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),V.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.qn(t),V.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t){this.Br={},this.overlays={},this.kr=new ra(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Gv(this),this.indexManager=new Mv,this.remoteDocumentCache=function(s){return new Hv(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jv(t),this.$r=new $v(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new zv(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new Xv(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class Xv extends D_{constructor(e){super(),this.currentSequenceNumber=e}}class pa{constructor(e){this.persistence=e,this.zr=new fa,this.jr=null}static Hr(e){return new pa(e)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),V.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const s=q.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,K.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return V.or([()=>V.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ma(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Fp()?8:V_(Ie())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Jv;return this.Ji(e,t,a).next(l=>{if(i.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(_r()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(_r()<=X.DEBUG&&B("QueryEngine","Query:",Pn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(_r()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):V.resolve())}ji(e,t){if(bc(t))return V.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=To(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Q(...i);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.Zi(t,l);return this.Xi(t,f,a,u.readTime)?this.ji(e,To(t,null,"F")):this.es(e,f,t,u)}))})))}Hi(e,t,r,s){return bc(t)||s.isEqual(K.min())?V.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(t,i);return this.Xi(t,a,r,s)?V.resolve(null):(_r()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pn(t)),this.es(e,a,t,P_(s,-1)).next(l=>l))})}Zi(e,t){let r=new be(Rh(e));return t.forEach((s,i)=>{_i(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return _r()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Pn(t)),this.zi.getDocumentsMatchingQuery(e,t,qt.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new ie(ee),this.rs=new Xn(i=>aa(i),la),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qv(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function ew(n,e,t,r){return new Zv(n,e,t,r)}async function Qh(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=Q();for(const f of s){a.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}for(const f of i){l.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(f=>({us:f,removedBatchIds:a,addedBatchIds:l}))})})}function tw(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(l,u,f,p){const g=f.batch,_=g.keys();let R=V.resolve();return _.forEach(P=>{R=R.next(()=>p.getEntry(u,P)).next(N=>{const A=f.docVersions.get(P);ne(A!==null),N.version.compareTo(A)<0&&(g.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),p.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Q();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Xh(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function nw(n,e){const t=G(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const l=[];e.targetChanges.forEach((p,g)=>{const _=s.get(g);if(!_)return;l.push(t.Qr.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.Qr.addMatchingKeys(i,p.addedDocuments,g)));let R=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Ce.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(g,R),function(N,A,M){return N.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(_,R,p)&&l.push(t.Qr.updateTargetData(i,R))});let u=gt(),f=Q();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(rw(i,a,e.documentUpdates).next(p=>{u=p.cs,f=p.ls})),!r.isEqual(K.min())){const p=t.Qr.getLastRemoteSnapshotVersion(i).next(g=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(t.ns=s,i))}function rw(n,e,t){let r=Q(),s=Q();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=gt();return t.forEach((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{cs:a,ls:s}})}function sw(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iw(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Qr.allocateTargetId(r).next(a=>(s=new Ot(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Po(n,e,t){const r=G(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Jr(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Dc(n,e,t){const r=G(n);let s=K.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,p){const g=G(u),_=g.rs.get(p);return _!==void 0?V.resolve(g.ns.get(_)):g.Qr.getTargetData(f,p)}(r,a,tt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?s:K.min(),t?i:Q())).next(l=>(ow(r,J_(e),l),{documents:l,hs:i})))}function ow(n,e,t){let r=n.ss.get(e)||K.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}class Vc{constructor(){this.activeTargetIds=rv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aw{constructor(){this.no=new Vc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Vc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns=null;function to(){return Ns===null?Ns=function(){return 268435456+Math.round(2147483648*Math.random())}():Ns++,"0x"+Ns.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="WebChannelConnection";class hw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(t,r,s,i,a){const l=to(),u=this.vo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,i,a),this.Mo(t,u,f,s).then(p=>(B("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw Un("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}xo(t,r,s,i,a,l){return this.Co(t,r,s,i,a)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}vo(t,r){const s=cw[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const i=to();return new Promise((a,l)=>{const u=new ah;u.setWithCredentials(!0),u.listenOnce(ch.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ms.NO_ERROR:const p=u.getResponseJson();B(Ae,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case Ms.TIMEOUT:B(Ae,`RPC '${e}' ${i} timed out`),l(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const g=u.getStatus();if(B(Ae,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const P=function(A){const M=A.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN}(R.status);l(new F(P,R.message))}else l(new F(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(D.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{B(Ae,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);B(Ae,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",f,r,15)})}Oo(e,t,r){const s=to(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dh(),l=hh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.xmlHttpFactory=new lh({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");B(Ae,`Creating RPC '${e}' stream ${s}: ${p}`,u);const g=a.createWebChannel(p,u);let _=!1,R=!1;const P=new uw({lo:A=>{R?B(Ae,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(_||(B(Ae,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),B(Ae,`RPC '${e}' stream ${s} sending:`,A),g.send(A))},ho:()=>g.close()}),N=(A,M,U)=>{A.listen(M,O=>{try{U(O)}catch(k){setTimeout(()=>{throw k},0)}})};return N(g,br.EventType.OPEN,()=>{R||(B(Ae,`RPC '${e}' stream ${s} transport opened.`),P.mo())}),N(g,br.EventType.CLOSE,()=>{R||(R=!0,B(Ae,`RPC '${e}' stream ${s} transport closed`),P.po())}),N(g,br.EventType.ERROR,A=>{R||(R=!0,Un(Ae,`RPC '${e}' stream ${s} transport errored:`,A),P.po(new F(D.UNAVAILABLE,"The operation could not be completed")))}),N(g,br.EventType.MESSAGE,A=>{var M;if(!R){const U=A.data[0];ne(!!U);const O=U,k=O.error||((M=O[0])===null||M===void 0?void 0:M.error);if(k){B(Ae,`RPC '${e}' stream ${s} received error:`,k);const $=k.status;let j=function(v){const I=le[v];if(I!==void 0)return Uh(I)}($),E=k.message;j===void 0&&(j=D.INTERNAL,E="Unknown error status: "+$+" with message "+k.message),R=!0,P.po(new F(j,E)),g.close()}else B(Ae,`RPC '${e}' stream ${s} received:`,U),P.yo(U)}}),N(l,uh.STAT_EVENT,A=>{A.stat===_o.PROXY?B(Ae,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===_o.NOPROXY&&B(Ae,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function no(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){return new bv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,r,s,i,a,l,u){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Jh(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dw extends Yh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=xv(this.serializer,e),r=function(i){if(!("targetChange"in i))return K.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?nt(a.readTime):K.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=So(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=bo(u)?{documents:Sv(i,u)}:{query:Pv(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=qh(i,a.resumeToken);const f=xo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=si(i,a.snapshotVersion.toTimestamp());const f=xo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=Nv(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=So(this.serializer),t.removeTarget=e,this.i_(t)}}class fw extends Yh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Rv(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.A_(r,t)}return ne(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=So(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Av(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,Ao(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(D.UNKNOWN,i.toString())})}xo(e,t,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,Ao(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class mw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(mt(t),this.y_=!1):B("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{wn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=G(u);f.M_.add(4),await ts(f),f.N_.set("Unknown"),f.M_.delete(4),await Ii(f)}(this))})}),this.N_=new mw(r,s)}}async function Ii(n){if(wn(n))for(const e of n.x_)await e(!0)}async function ts(n){for(const e of n.x_)await e(!1)}function Zh(n,e){const t=G(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),va(t)?_a(t):Jn(t).Xo()&&ya(t,e))}function ga(n,e){const t=G(n),r=Jn(t);t.F_.delete(e),r.Xo()&&ed(t,e),t.F_.size===0&&(r.Xo()?r.n_():wn(t)&&t.N_.set("Unknown"))}function ya(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jn(n).P_(e)}function ed(n,e){n.L_.xe(e),Jn(n).I_(e)}function _a(n){n.L_=new _v({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.N_.w_()}function va(n){return wn(n)&&!Jn(n).Zo()&&n.F_.size>0}function wn(n){return G(n).M_.size===0}function td(n){n.L_=void 0}async function yw(n){n.N_.set("Online")}async function _w(n){n.F_.forEach((e,t)=>{ya(n,e)})}async function vw(n,e){td(n),va(n)?(n.N_.D_(e),_a(n)):n.N_.set("Unknown")}async function ww(n,e,t){if(n.N_.set("Online"),e instanceof Bh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ii(n,r)}else if(e instanceof Bs?n.L_.Ke(e):e instanceof Fh?n.L_.He(e):n.L_.We(e),!t.isEqual(K.min()))try{const r=await Xh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.L_.rt(a);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.F_.get(f);p&&i.F_.set(f,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,f)=>{const p=i.F_.get(u);if(!p)return;i.F_.set(u,p.withResumeToken(Ce.EMPTY_BYTE_STRING,p.snapshotVersion)),ed(i,u);const g=new Ot(p.target,u,f,p.sequenceNumber);ya(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await ii(n,r)}}async function ii(n,e,t){if(!Jr(e))throw e;n.M_.add(1),await ts(n),n.N_.set("Offline"),t||(t=()=>Xh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Ii(n)})}function nd(n,e){return e().catch(t=>ii(n,t,e))}async function Ti(n){const e=G(n),t=Wt(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Ew(e);)try{const s=await sw(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,bw(e,s)}catch(s){await ii(e,s)}rd(e)&&sd(e)}function Ew(n){return wn(n)&&n.v_.length<10}function bw(n,e){n.v_.push(e);const t=Wt(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function rd(n){return wn(n)&&!Wt(n).Zo()&&n.v_.length>0}function sd(n){Wt(n).start()}async function Iw(n){Wt(n).V_()}async function Tw(n){const e=Wt(n);for(const t of n.v_)e.d_(t.mutations)}async function xw(n,e,t){const r=n.v_.shift(),s=ua.from(r,e,t);await nd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ti(n)}async function Aw(n,e){e&&Wt(n).E_&&await async function(r,s){if(function(a){return mv(a)&&a!==D.ABORTED}(s.code)){const i=r.v_.shift();Wt(r).t_(),await nd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ti(r)}}(n,e),rd(n)&&sd(n)}async function jc(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=wn(t);t.M_.add(3),await ts(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Ii(t)}async function Rw(n,e){const t=G(n);e?(t.M_.delete(2),await Ii(t)):e||(t.M_.add(2),await ts(t),t.N_.set("Unknown"))}function Jn(n){return n.B_||(n.B_=function(t,r,s){const i=G(t);return i.f_(),new dw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:yw.bind(null,n),To:_w.bind(null,n),Ao:vw.bind(null,n),h_:ww.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),va(n)?_a(n):n.N_.set("Unknown")):(await n.B_.stop(),td(n))})),n.B_}function Wt(n){return n.k_||(n.k_=function(t,r,s){const i=G(t);return i.f_(),new fw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Iw.bind(null,n),Ao:Aw.bind(null,n),R_:Tw.bind(null,n),A_:xw.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Ti(n)):(await n.k_.stop(),n.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new wa(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(n,e){if(mt("AsyncQueue",`${e}: ${n}`),Jr(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Ir(),this.sortedSet=new ie(this.comparator)}static emptySet(e){return new jn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new jn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.q_=new ie(q.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):z():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Wn{constructor(e,t,r,s,i,a,l,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Wn(e,t,jn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Pw{constructor(){this.queries=new Xn(e=>Ah(e),yi),this.onlineState="Unknown",this.z_=new Set}}async function Cw(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new Sw,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await t.onListen(s,!0);break;case 1:i.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Ea(a,`Initialization of query '${Pn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.U_.push(e),e.j_(t.onlineState),i.K_&&e.H_(i.K_)&&ba(t)}async function Nw(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function kw(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&ba(t)}function Dw(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(t);r.queries.delete(e)}function ba(n){n.z_.forEach(e=>{e.next()})}var Co,Mc;(Mc=Co||(Co={})).J_="default",Mc.Cache="cache";class Vw{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Co.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.key=e}}class od{constructor(e){this.key=e}}class Ow{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Q(),this.mutatedKeys=Q(),this.Ia=Rh(e),this.Ta=new jn(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new Lc,s=t?t.Ta:this.Ta;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const _=s.get(p),R=_i(this.query,g)?g:null,P=!!_&&this.mutatedKeys.has(_.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let A=!1;_&&R?_.data.isEqual(R.data)?P!==N&&(r.track({type:3,doc:R}),A=!0):this.Ra(_,R)||(r.track({type:2,doc:R}),A=!0,(u&&this.Ia(R,u)>0||f&&this.Ia(R,f)<0)&&(l=!0)):!_&&R?(r.track({type:0,doc:R}),A=!0):_&&!R&&(r.track({type:1,doc:_}),A=!0,(u||f)&&(l=!0)),A&&(R?(a=a.add(R),i=N?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((p,g)=>function(R,P){const N=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return N(R)-N(P)}(p.type,g.type)||this.Ia(p.doc,g.doc)),this.Va(r),s=s!=null&&s;const l=t&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,f=u!==this.ha;return this.ha=u,a.length!==0||f?{snapshot:new Wn(this.query,e.Ta,i,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Lc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Q(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new od(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new id(r))}),t}pa(e){this.la=e.hs,this.Pa=Q();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Wn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class jw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Lw{constructor(e){this.key=e,this.wa=!1}}class Mw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Xn(l=>Ah(l),yi),this.Da=new Map,this.Ca=new Set,this.va=new ie(q.comparator),this.Fa=new Map,this.Ma=new fa,this.xa={},this.Oa=new Map,this.Na=$n.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Uw(n,e,t=!0){const r=dd(n);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await ad(r,e,t,!0),s}async function Fw(n,e){const t=dd(n);await ad(t,e,!0,!1)}async function ad(n,e,t,r){const s=await iw(n.localStore,tt(e)),i=s.targetId,a=t?n.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await Bw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Zh(n.remoteStore,s),l}async function Bw(n,e,t,r,s){n.Ba=(g,_,R)=>async function(N,A,M,U){let O=A.view.da(M);O.Xi&&(O=await Dc(N.localStore,A.query,!1).then(({documents:E})=>A.view.da(E,O)));const k=U&&U.targetChanges.get(A.targetId),$=U&&U.targetMismatches.get(A.targetId)!=null,j=A.view.applyChanges(O,N.isPrimaryClient,k,$);return Fc(N,A.targetId,j.fa),j.snapshot}(n,g,_,R);const i=await Dc(n.localStore,e,!0),a=new Ow(e,i.hs),l=a.da(i.documents),u=es.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,u);Fc(n,t,f.fa);const p=new jw(e,t,a);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),f.snapshot}async function qw(n,e,t){const r=G(n),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!yi(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Po(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ga(r.remoteStore,s.targetId),No(r,s.targetId)}).catch(Xr)):(No(r,s.targetId),await Po(r.localStore,s.targetId,!0))}async function $w(n,e){const t=G(n),r=t.ba.get(e),s=t.Da.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ga(t.remoteStore,r.targetId))}async function Ww(n,e,t){const r=Jw(n);try{const s=await function(a,l){const u=G(a),f=de.now(),p=l.reduce((R,P)=>R.add(P.key),Q());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=gt(),N=Q();return u.os.getEntries(R,p).next(A=>{P=A,P.forEach((M,U)=>{U.isValidDocument()||(N=N.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,P)).next(A=>{g=A;const M=[];for(const U of l){const O=uv(U,g.get(U.key).overlayedDocument);O!=null&&M.push(new Kt(U.key,O,yh(O.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,M,l)}).next(A=>{_=A;const M=A.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(R,A.batchId,M)})}).then(()=>({batchId:_.batchId,changes:Ph(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let f=a.xa[a.currentUser.toKey()];f||(f=new ie(ee)),f=f.insert(l,u),a.xa[a.currentUser.toKey()]=f}(r,s.batchId,t),await ns(r,s.changes),await Ti(r.remoteStore)}catch(s){const i=Ea(s,"Failed to persist write");t.reject(i)}}async function ld(n,e){const t=G(n);try{const r=await nw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Fa.get(i);a&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?ne(a.wa):s.removedDocuments.size>0&&(ne(a.wa),a.wa=!1))}),await ns(t,r,e)}catch(r){await Xr(r)}}function Uc(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((i,a)=>{const l=a.view.j_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=G(a);u.onlineState=l;let f=!1;u.queries.forEach((p,g)=>{for(const _ of g.U_)_.j_(l)&&(f=!0)}),f&&ba(u)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zw(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new ie(q.comparator);a=a.insert(i,Pe.newNoDocument(i,K.min()));const l=Q().add(i),u=new Ei(K.min(),new Map,new ie(ee),a,l);await ld(r,u),r.va=r.va.remove(i),r.Fa.delete(e),Ia(r)}else await Po(r.localStore,e,!1).then(()=>No(r,e,t)).catch(Xr)}async function Hw(n,e){const t=G(n),r=e.batch.batchId;try{const s=await tw(t.localStore,e);ud(t,r,null),cd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ns(t,s)}catch(s){await Xr(s)}}async function Kw(n,e,t){const r=G(n);try{const s=await function(a,l){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return u.mutationQueue.lookupMutationBatch(f,l).next(g=>(ne(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(f,g))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>u.localDocuments.getDocuments(f,p))})}(r.localStore,e);ud(r,e,t),cd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ns(r,s)}catch(s){await Xr(s)}}function cd(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function ud(n,e,t){const r=G(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function No(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||hd(n,r)})}function hd(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(ga(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),Ia(n))}function Fc(n,e,t){for(const r of t)r instanceof id?(n.Ma.addReference(r.key,e),Gw(n,r)):r instanceof od?(B("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||hd(n,r.key)):z()}function Gw(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(B("SyncEngine","New document in limbo: "+t),n.Ca.add(r),Ia(n))}function Ia(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new q(se.fromString(e)),r=n.Na.next();n.Fa.set(r,new Lw(t)),n.va=n.va.insert(t,r),Zh(n.remoteStore,new Ot(tt(Th(t.path)),r,"TargetPurposeLimboResolution",ra.oe))}}async function ns(n,e,t){const r=G(n),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,e,t).then(f=>{if((f||t)&&r.isPrimaryClient){const p=f&&!f.fromCache;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(f){s.push(f);const p=ma.Ki(u.targetId,f);i.push(p)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,f){const p=G(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(f,_=>V.forEach(_.qi,R=>p.persistence.referenceDelegate.addReference(g,_.targetId,R)).next(()=>V.forEach(_.Qi,R=>p.persistence.referenceDelegate.removeReference(g,_.targetId,R)))))}catch(g){if(!Jr(g))throw g;B("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const _=g.targetId;if(!g.fromCache){const R=p.ns.get(_),P=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(P);p.ns=p.ns.insert(_,N)}}}(r.localStore,i))}async function Qw(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Qh(t.localStore,e);t.currentUser=e,function(i,a){i.Oa.forEach(l=>{l.forEach(u=>{u.reject(new F(D.CANCELLED,a))})}),i.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ns(t,r.us)}}function Xw(n,e){const t=G(n),r=t.Fa.get(e);if(r&&r.wa)return Q().add(r.key);{let s=Q();const i=t.Da.get(e);if(!i)return s;for(const a of i){const l=t.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function dd(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ld.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zw.bind(null,e),e.Sa.h_=kw.bind(null,e.eventManager),e.Sa.ka=Dw.bind(null,e.eventManager),e}function Jw(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kw.bind(null,e),e}class Bc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ew(this.persistence,new Yv,e.initialUser,this.serializer)}createPersistence(e){return new Qv(pa.Hr,this.serializer)}createSharedClientState(e){return new aw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qw.bind(null,this.syncEngine),await Rw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Pw}()}createDatastore(e){const t=bi(e.databaseInfo.databaseId),r=function(i){return new hw(i)}(e.databaseInfo);return function(i,a,l,u){return new pw(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new gw(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Uc(this.syncEngine,t,0),function(){return Oc.D()?new Oc:new lw}())}createSyncEngine(e,t){return function(s,i,a,l,u,f,p){const g=new Mw(s,i,a,l,u,f);return p&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=G(r);B("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await ts(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=ph.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ea(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ro(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Qh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>jc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>jc(e.remoteStore,s)),n._onlineComponents=e}function tE(n){return n.name==="FirebaseError"?n.code===D.FAILED_PRECONDITION||n.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ro(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!tE(t))throw t;Un("Error using user provided cache. Falling back to memory cache: "+t),await ro(n,new Bc)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ro(n,new Bc);return n._offlineComponents}async function fd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await qc(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await qc(n,new Yw))),n._onlineComponents}function rE(n){return fd(n).then(e=>e.syncEngine)}async function sE(n){const e=await fd(n),t=e.eventManager;return t.onListen=Uw.bind(null,e.syncEngine),t.onUnlisten=qw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Fw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$w.bind(null,e.syncEngine),t}function iE(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,f){const p=new Zw({next:_=>{a.enqueueAndForget(()=>Nw(i,g)),_.fromCache&&u.source==="server"?f.reject(new F(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(_)},error:_=>f.reject(_)}),g=new Vw(l,p,{includeMetadataChanges:!0,ra:!0});return Cw(i,g)}(await sE(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oE(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wc(n){if(!q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zc(n){if(q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xi(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ai{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new w_;switch(r.type){case"firstParty":return new T_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=$c.get(t);r&&(B("ComponentProvider","Removing Datastore"),$c.delete(t),r.terminate())}(this),Promise.resolve()}}function aE(n,e,t,r={}){var s;const i=(n=gn(n,Ai))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Se.MOCK_USER;else{l=Vp(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Se(f)}n._authCredentials=new E_(new fh(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class Ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class Bt extends Yn{constructor(e,t,r){super(e,t,Th(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new q(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function wt(n,e,...t){if(n=fe(n),md("collection","path",e),n instanceof Ai){const r=se.fromString(e,...t);return zc(r),new Bt(n,null,r)}{if(!(n instanceof Ue||n instanceof Bt))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return zc(r),new Bt(n.firestore,null,r)}}function ft(n,e,...t){if(n=fe(n),arguments.length===1&&(e=ph.newId()),md("doc","path",e),n instanceof Ai){const r=se.fromString(e,...t);return Wc(r),new Ue(n,null,new q(r))}{if(!(n instanceof Ue||n instanceof Bt))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Wc(r),new Ue(n.firestore,n instanceof Bt?n.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Jh(this,"async_queue_retry"),this.hu=()=>{const t=no();t&&B("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=no();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=no();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Ft;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Jr(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw mt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=wa.createAndSchedule(this,e,t,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class rs extends Ai{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new lE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yd(this),this._firestoreClient.terminate()}}function cE(n,e){const t=typeof n=="object"?n:Tu(),r=typeof n=="string"?n:e||"(default)",s=Wo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kp("firestore");i&&aE(s,...i)}return s}function gd(n){return n._firestoreClient||yd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function yd(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,f,p){return new L_(l,u,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,pd(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new eE(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(Ce.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zn(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=/^__.*__$/;class hE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zr(e,this.data,t,this.fieldTransforms)}}class _d{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Aa{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return oi(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(vd(this.fu)&&uE.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class dE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bi(e)}Fu(e,t,r,s=!1){return new Aa({fu:e,methodName:t,vu:r,path:we.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ra(n){const e=n._freezeSettings(),t=bi(n._databaseId);return new dE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fE(n,e,t,r,s,i={}){const a=n.Fu(i.merge||i.mergeFields?2:0,e,t,s);Sa("Data must be an object, but it was:",a,r);const l=wd(r,a);let u,f;if(i.merge)u=new Me(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const _=ko(e,g,t);if(!a.contains(_))throw new F(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);bd(p,_)||p.push(_)}u=new Me(p),f=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,f=a.fieldTransforms;return new hE(new je(l),u,f)}class Si extends Ta{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Si}}function pE(n,e,t,r){const s=n.Fu(1,e,t);Sa("Data must be an object, but it was:",s,r);const i=[],a=je.empty();vn(r,(u,f)=>{const p=Pa(e,u,t);f=fe(f);const g=s.Su(p);if(f instanceof Si)i.push(p);else{const _=ss(f,g);_!=null&&(i.push(p),a.set(p,_))}});const l=new Me(i);return new _d(a,l,s.fieldTransforms)}function mE(n,e,t,r,s,i){const a=n.Fu(1,e,t),l=[ko(e,r,t)],u=[s];if(i.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(ko(e,i[_])),u.push(i[_+1]);const f=[],p=je.empty();for(let _=l.length-1;_>=0;--_)if(!bd(f,l[_])){const R=l[_];let P=u[_];P=fe(P);const N=a.Su(R);if(P instanceof Si)f.push(R);else{const A=ss(P,N);A!=null&&(f.push(R),p.set(R,A))}}const g=new Me(f);return new _d(p,g,a.fieldTransforms)}function gE(n,e,t,r=!1){return ss(t,n.Fu(r?4:3,e))}function ss(n,e){if(Ed(n=fe(n)))return Sa("Unsupported field value:",e,n),wd(n,e);if(n instanceof Ta)return function(r,s){if(!vd(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=ss(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=de.fromDate(r);return{timestampValue:si(s.serializer,i)}}if(r instanceof de){const i=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:si(s.serializer,i)}}if(r instanceof xa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zn)return{bytesValue:qh(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:da(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${xi(r)}`)}(n,e)}function wd(n,e){const t={};return mh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(n,(r,s)=>{const i=ss(s,e.pu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ed(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof xa||n instanceof zn||n instanceof Ue||n instanceof Ta)}function Sa(n,e,t){if(!Ed(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=xi(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function ko(n,e,t){if((e=fe(e))instanceof Ri)return e._internalPath;if(typeof e=="string")return Pa(n,e);throw oi("Field path arguments must be of type string or ",n,!1,void 0,t)}const yE=new RegExp("[~\\*/\\[\\]]");function Pa(n,e,t){if(e.search(yE)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ri(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new F(D.INVALID_ARGUMENT,l+n+u)}function bd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _E(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Td("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _E extends Id{data(){return super.data()}}function Td(n,e){return typeof e=="string"?Pa(n,e):e instanceof Ri?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ca{}class wE extends Ca{}function xd(n,e,...t){let r=[];e instanceof Ca&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof ka).length,l=i.filter(u=>u instanceof Na).length;if(a>1||a>0&&l>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Na extends wE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Na(e,t,r)}_apply(e){const t=this._parse(e);return Ad(e._query,t),new Yn(e.firestore,e.converter,Io(e._query,t))}_parse(e){const t=Ra(e.firestore);return function(i,a,l,u,f,p,g){let _;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Gc(g,p);const R=[];for(const P of g)R.push(Kc(u,i,P));_={arrayValue:{values:R}}}else _=Kc(u,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Gc(g,p),_=gE(l,a,g,p==="in"||p==="not-in");return ue.create(f,p,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ka extends Ca{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ka(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Ad(a,u),a=Io(a,u)}(e._query,t),new Yn(e.firestore,e.converter,Io(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kc(n,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xh(e)&&t.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!q.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gc(n,new q(r))}if(t instanceof Ue)return gc(n,t._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xi(t)}.`)}function Gc(n,e){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ad(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EE{convertValue(e,t="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return vn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new xa(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ia(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=$t(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);ne(Gh(r));const s=new Mr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||mt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IE extends Id{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Td("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class qs extends IE{data(e={}){return super.data(e)}}class TE{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new qs(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new qs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new qs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:xE(l.type),doc:u,oldIndex:f,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class AE extends EE{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function Zn(n){n=gn(n,Yn);const e=gn(n.firestore,rs),t=gd(e),r=new AE(e);return vE(n._query),iE(t,n._query).then(s=>new TE(e,r,n,s))}function qr(n,e,t,...r){n=gn(n,Ue);const s=gn(n.firestore,rs),i=Ra(s);let a;return a=typeof(e=fe(e))=="string"||e instanceof Ri?mE(i,"updateDoc",n._key,e,t,r):pE(i,"updateDoc",n._key,e),Oa(s,[a.toMutation(n._key,Ge.exists(!0))])}function Da(n){return Oa(gn(n.firestore,rs),[new ca(n._key,Ge.none())])}function Va(n,e){const t=gn(n.firestore,rs),r=ft(n),s=bE(n.converter,e);return Oa(t,[fE(Ra(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function Oa(n,e){return function(r,s){const i=new Ft;return r.asyncQueue.enqueueAndForget(async()=>Ww(await rE(r),s,i)),i.promise}(gd(n),e)}(function(e,t=!0){(function(s){Qn=s})(Kn),Ln(new cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new rs(new b_(r.getProvider("auth-internal")),new A_(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(f.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ut(dc,"4.6.3",e),Ut(dc,"4.6.3","esm2017")})();const RE={apiKey:"AIzaSyDLWyxg82EfeKEjovWBrScFRs6D8tViJpc",authDomain:"riverside-b3d90.firebaseapp.com",projectId:"riverside-b3d90",storageBucket:"riverside-b3d90.appspot.com",messagingSenderId:"479252671468",appId:"1:479252671468:web:03eb7589cd1c60afdaaec9",measurementId:"G-6EMZVK7PJN"},Rd=Iu(RE),ht=__(Rd);new Ye;const Ee=cE(Rd);function SE(){const[n,e]=b.useState(null),[t,r]=b.useState(!1),[s,i]=b.useState(!1),a=b.useRef(null),l=b.useRef(null),u="admin@example.com",f=b.useRef(null),p=yt();b.useEffect(()=>{f.current=new Audio("/long-whoosh.mp3");const N=fi(ht,A=>{e(A)});return()=>N()},[]),b.useEffect(()=>{const N=A=>{a.current&&!a.current.contains(A.target)&&r(!1),l.current&&!l.current.contains(A.target)&&i(!1)};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[]);const g=()=>{f.current.play()},_=async()=>{try{await Gu(ht),p("/")}catch(N){console.error(N)}},R=()=>{r(!t)},P=()=>{i(!s)};return h.jsxs("nav",{className:"navbar",children:[h.jsx("div",{className:"navbar-title mx-3",children:h.jsx(Ve,{to:"/",onClick:g,children:"River Side"})}),h.jsx("ul",{className:"navbar-links flex items-center",children:n?h.jsxs(h.Fragment,{children:[h.jsxs("li",{className:"relative",ref:a,children:[h.jsx("button",{onClick:R,className:"worship-link",children:"Prayer Requests"}),t&&h.jsxs("ul",{className:"absolute bg-gray-800 text-white rounded mt-2 shadow-lg",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[h.jsx("li",{children:h.jsx(Ve,{to:"/prayer-request",className:"block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600",onClick:g,children:"View Prayer Requests"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/submit-prayer-requests",className:"block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600",onClick:g,children:"Submit Prayer Request"})})]})]}),h.jsx("li",{children:h.jsx(Ve,{to:"/worship",onClick:g,children:"Our Worship"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/daily-posts",onClick:g,children:"Daily Posts"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/services",onClick:g,children:"Service Times"})}),n.email===u&&h.jsxs("li",{className:"relative",ref:l,children:[h.jsx("button",{onClick:P,className:"upload-link",children:"Update Site"}),s&&h.jsxs("ul",{className:"absolute bg-gray-800 text-white rounded mt-2 shadow-lg",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[h.jsx("li",{children:h.jsx(Ve,{to:"/upload-video",className:"block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600",onClick:g,children:"Upload Video"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/alter-uploads",className:"block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600",onClick:g,children:"Alter Video"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/update-prayer-requests",className:"block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600",onClick:g,children:"Alter Prayer Requests"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/add-post",className:"block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600",onClick:g,children:"Create Daily Post"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/update-daily-post",className:"block px-4 py-2 hover:scale-105 transition-transform border-b border-gray-600",onClick:g,children:"Update Daily Post"})})]})]}),h.jsx("li",{children:h.jsx(Ve,{to:"/contact-us",onClick:g,children:"Contact Us"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/facebook-live",onClick:g,children:"Facebook Live"})}),h.jsxs("li",{className:"mx-4 bg-teal-500 rounded p-1 text-center hover:bg-teal-700 text-white",children:["Welcome, ",n.email]}),h.jsx("li",{children:h.jsx("button",{onClick:_,className:"logout-button",children:"Logout"})})]}):h.jsxs(h.Fragment,{children:[h.jsx("li",{children:h.jsx(Ve,{to:"/login",onClick:g,children:"Login"})}),h.jsx("li",{children:h.jsx(Ve,{to:"/register",onClick:g,children:"Register"})})]})})]})}var Sd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var i="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(i=s(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var l in i)e.call(i,l)&&i[l]&&(a=s(a,l));return a}function s(i,a){return a?i?i+" "+a:i+a:i}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(Sd);var PE=Sd.exports;const Nr=vf(PE);function Do(){return Do=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Do.apply(null,arguments)}function Pd(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Qc(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function CE(n){var e=NE(n,"string");return typeof e=="symbol"?e:String(e)}function NE(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function kE(n,e,t){var r=b.useRef(n!==void 0),s=b.useState(e),i=s[0],a=s[1],l=n!==void 0,u=r.current;return r.current=l,!l&&u&&i!==e&&a(e),[l?n:i,b.useCallback(function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),_=1;_<p;_++)g[_-1]=arguments[_];t&&t.apply(void 0,[f].concat(g)),a(f)},[t])]}function DE(n,e){return Object.keys(e).reduce(function(t,r){var s,i=t,a=i[Qc(r)],l=i[r],u=Pd(i,[Qc(r),r].map(CE)),f=e[r],p=kE(l,a,n[f]),g=p[0],_=p[1];return Do({},u,(s={},s[r]=g,s[f]=_,s))},n)}function Vo(n,e){return Vo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Vo(n,e)}function VE(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Vo(n,e)}const OE=["xxl","xl","lg","md","sm","xs"],jE="xs",Cd=b.createContext({prefixes:{},breakpoints:OE,minBreakpoint:jE});function ja(n,e){const{prefixes:t}=b.useContext(Cd);return n||t[e]||e}function LE(){const{dir:n}=b.useContext(Cd);return n==="rtl"}function ME(n){return n&&n.ownerDocument||document}function UE(n){var e=ME(n);return e&&e.defaultView||window}function FE(n,e){return UE(n).getComputedStyle(n,e)}var BE=/([A-Z])/g;function qE(n){return n.replace(BE,"-$1").toLowerCase()}var $E=/^ms-/;function Ds(n){return qE(n).replace($E,"-ms-")}var WE=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function zE(n){return!!(n&&WE.test(n))}function Nd(n,e){var t="",r="";if(typeof e=="string")return n.style.getPropertyValue(Ds(e))||FE(n).getPropertyValue(Ds(e));Object.keys(e).forEach(function(s){var i=e[s];!i&&i!==0?n.style.removeProperty(Ds(s)):zE(s)?r+=s+"("+i+") ":t+=Ds(s)+": "+i+";"}),r&&(t+="transform: "+r+";"),n.style.cssText+=";"+t}const Xc={disabled:!1},kd=Dt.createContext(null);var HE=function(e){return e.scrollTop},xr="unmounted",rn="exited",sn="entering",kn="entered",Oo="exiting",Et=function(n){VE(e,n);function e(r,s){var i;i=n.call(this,r,s)||this;var a=s,l=a&&!a.isMounting?r.enter:r.appear,u;return i.appearStatus=null,r.in?l?(u=rn,i.appearStatus=sn):u=kn:r.unmountOnExit||r.mountOnEnter?u=xr:u=rn,i.state={status:u},i.nextCallback=null,i}e.getDerivedStateFromProps=function(s,i){var a=s.in;return a&&i.status===xr?{status:rn}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(s){var i=null;if(s!==this.props){var a=this.state.status;this.props.in?a!==sn&&a!==kn&&(i=sn):(a===sn||a===kn)&&(i=Oo)}this.updateStatus(!1,i)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var s=this.props.timeout,i,a,l;return i=a=l=s,s!=null&&typeof s!="number"&&(i=s.exit,a=s.enter,l=s.appear!==void 0?s.appear:a),{exit:i,enter:a,appear:l}},t.updateStatus=function(s,i){if(s===void 0&&(s=!1),i!==null)if(this.cancelNextCallback(),i===sn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:vr.findDOMNode(this);a&&HE(a)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===rn&&this.setState({status:xr})},t.performEnter=function(s){var i=this,a=this.props.enter,l=this.context?this.context.isMounting:s,u=this.props.nodeRef?[l]:[vr.findDOMNode(this),l],f=u[0],p=u[1],g=this.getTimeouts(),_=l?g.appear:g.enter;if(!s&&!a||Xc.disabled){this.safeSetState({status:kn},function(){i.props.onEntered(f)});return}this.props.onEnter(f,p),this.safeSetState({status:sn},function(){i.props.onEntering(f,p),i.onTransitionEnd(_,function(){i.safeSetState({status:kn},function(){i.props.onEntered(f,p)})})})},t.performExit=function(){var s=this,i=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:vr.findDOMNode(this);if(!i||Xc.disabled){this.safeSetState({status:rn},function(){s.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Oo},function(){s.props.onExiting(l),s.onTransitionEnd(a.exit,function(){s.safeSetState({status:rn},function(){s.props.onExited(l)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(s,i){i=this.setNextCallback(i),this.setState(s,i)},t.setNextCallback=function(s){var i=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,i.nextCallback=null,s(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},t.onTransitionEnd=function(s,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:vr.findDOMNode(this),l=s==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],f=u[0],p=u[1];this.props.addEndListener(f,p)}s!=null&&setTimeout(this.nextCallback,s)},t.render=function(){var s=this.state.status;if(s===xr)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=Pd(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Dt.createElement(kd.Provider,{value:null},typeof a=="function"?a(s,l):Dt.cloneElement(Dt.Children.only(a),l))},e}(Dt.Component);Et.contextType=kd;Et.propTypes={};function Sn(){}Et.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Sn,onEntering:Sn,onEntered:Sn,onExit:Sn,onExiting:Sn,onExited:Sn};Et.UNMOUNTED=xr;Et.EXITED=rn;Et.ENTERING=sn;Et.ENTERED=kn;Et.EXITING=Oo;const KE=Et,GE=!!(typeof window<"u"&&window.document&&window.document.createElement);var jo=!1,Lo=!1;try{var so={get passive(){return jo=!0},get once(){return Lo=jo=!0}};GE&&(window.addEventListener("test",so,so),window.removeEventListener("test",so,!0))}catch{}function QE(n,e,t,r){if(r&&typeof r!="boolean"&&!Lo){var s=r.once,i=r.capture,a=t;!Lo&&s&&(a=t.__once||function l(u){this.removeEventListener(e,l,i),t.call(this,u)},t.__once=a),n.addEventListener(e,a,jo?r:i)}n.addEventListener(e,t,r)}function XE(n,e,t,r){var s=r&&typeof r!="boolean"?r.capture:r;n.removeEventListener(e,t,s),t.__once&&n.removeEventListener(e,t.__once,s)}function Dd(n,e,t,r){return QE(n,e,t,r),function(){XE(n,e,t,r)}}function JE(n,e,t,r){if(t===void 0&&(t=!1),r===void 0&&(r=!0),n){var s=document.createEvent("HTMLEvents");s.initEvent(e,t,r),n.dispatchEvent(s)}}function YE(n){var e=Nd(n,"transitionDuration")||"",t=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*t}function ZE(n,e,t){t===void 0&&(t=5);var r=!1,s=setTimeout(function(){r||JE(n,"transitionend",!0)},e+t),i=Dd(n,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(s),i()}}function e0(n,e,t,r){t==null&&(t=YE(n)||0);var s=ZE(n,t,r),i=Dd(n,"transitionend",e);return function(){s(),i()}}function Jc(n,e){const t=Nd(n,e)||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function t0(n,e){const t=Jc(n,"transitionDuration"),r=Jc(n,"transitionDelay"),s=e0(n,i=>{i.target===n&&(s(),e(i))},t+r)}function n0(n){n.offsetHeight}const Yc=n=>!n||typeof n=="function"?n:e=>{n.current=e};function r0(n,e){const t=Yc(n),r=Yc(e);return s=>{t&&t(s),r&&r(s)}}function s0(n,e){return b.useMemo(()=>r0(n,e),[n,e])}function i0(n){return n&&"setState"in n?vr.findDOMNode(n):n??null}const o0=Dt.forwardRef(({onEnter:n,onEntering:e,onEntered:t,onExit:r,onExiting:s,onExited:i,addEndListener:a,children:l,childRef:u,...f},p)=>{const g=b.useRef(null),_=s0(g,u),R=j=>{_(i0(j))},P=j=>E=>{j&&g.current&&j(g.current,E)},N=b.useCallback(P(n),[n]),A=b.useCallback(P(e),[e]),M=b.useCallback(P(t),[t]),U=b.useCallback(P(r),[r]),O=b.useCallback(P(s),[s]),k=b.useCallback(P(i),[i]),$=b.useCallback(P(a),[a]);return h.jsx(KE,{ref:p,...f,onEnter:N,onEntered:M,onEntering:A,onExit:U,onExited:k,onExiting:O,addEndListener:$,nodeRef:g,children:typeof l=="function"?(j,E)=>l(j,{...E,ref:R}):Dt.cloneElement(l,{ref:R})})}),a0=o0;function Vd(n){const e=b.useRef(n);return b.useEffect(()=>{e.current=n},[n]),e}function Mo(n){const e=Vd(n);return b.useCallback(function(...t){return e.current&&e.current(...t)},[e])}function l0(){const n=b.useRef(!0),e=b.useRef(()=>n.current);return b.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),e.current}const c0=["as","disabled"];function u0(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function h0(n){return!n||n.trim()==="#"}function Od({tagName:n,disabled:e,href:t,target:r,rel:s,role:i,onClick:a,tabIndex:l=0,type:u}){n||(t!=null||r!=null||s!=null?n="a":n="button");const f={tagName:n};if(n==="button")return[{type:u||"button",disabled:e},f];const p=_=>{if((e||n==="a"&&h0(t))&&_.preventDefault(),e){_.stopPropagation();return}a==null||a(_)},g=_=>{_.key===" "&&(_.preventDefault(),p(_))};return n==="a"&&(t||(t="#"),e&&(t=void 0)),[{role:i??"button",disabled:void 0,tabIndex:e?void 0:l,href:t,target:n==="a"?r:void 0,"aria-disabled":e||void 0,rel:n==="a"?s:void 0,onClick:p,onKeyDown:g},f]}const d0=b.forwardRef((n,e)=>{let{as:t,disabled:r}=n,s=u0(n,c0);const[i,{tagName:a}]=Od(Object.assign({tagName:t,disabled:r},s));return h.jsx(a,Object.assign({},s,i,{ref:e}))});d0.displayName="Button";const f0=["onKeyDown"];function p0(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function m0(n){return!n||n.trim()==="#"}const jd=b.forwardRef((n,e)=>{let{onKeyDown:t}=n,r=p0(n,f0);const[s]=Od(Object.assign({tagName:"a"},r)),i=Mo(a=>{s.onKeyDown(a),t==null||t(a)});return m0(r.href)||r.role==="button"?h.jsx("a",Object.assign({ref:e},r,s,{onKeyDown:i})):h.jsx("a",Object.assign({ref:e},r,{onKeyDown:t}))});jd.displayName="Anchor";const Zc=jd;function g0(n,e){const t=b.useRef(!0);b.useEffect(()=>{if(t.current){t.current=!1;return}return n()},e)}function y0(n){const e=b.useRef(n);return e.current=n,e}function _0(n){const e=y0(n);b.useEffect(()=>()=>e.current(),[])}const Uo=2**31-1;function Ld(n,e,t){const r=t-Date.now();n.current=r<=Uo?setTimeout(e,r):setTimeout(()=>Ld(n,e,t),Uo)}function v0(){const n=l0(),e=b.useRef();return _0(()=>clearTimeout(e.current)),b.useMemo(()=>{const t=()=>clearTimeout(e.current);function r(s,i=0){n()&&(t(),i<=Uo?e.current=setTimeout(s,i):Ld(e,s,Date.now()+i))}return{set:r,clear:t,handleRef:e}},[])}const Md=b.forwardRef(({className:n,bsPrefix:e,as:t="div",...r},s)=>(e=ja(e,"carousel-caption"),h.jsx(t,{ref:s,className:Nr(n,e),...r})));Md.displayName="CarouselCaption";const w0=Md,Ud=b.forwardRef(({as:n="div",bsPrefix:e,className:t,...r},s)=>{const i=Nr(t,ja(e,"carousel-item"));return h.jsx(n,{ref:s,...r,className:i})});Ud.displayName="CarouselItem";const E0=Ud;function eu(n,e){let t=0;return b.Children.map(n,r=>b.isValidElement(r)?e(r,t++):r)}function b0(n,e){let t=0;b.Children.forEach(n,r=>{b.isValidElement(r)&&e(r,t++)})}const I0=40;function T0(n){if(!n||!n.style||!n.parentNode||!n.parentNode.style)return!1;const e=getComputedStyle(n);return e.display!=="none"&&e.visibility!=="hidden"&&getComputedStyle(n.parentNode).display!=="none"}const Fd=b.forwardRef(({defaultActiveIndex:n=0,...e},t)=>{const{as:r="div",bsPrefix:s,slide:i=!0,fade:a=!1,controls:l=!0,indicators:u=!0,indicatorLabels:f=[],activeIndex:p,onSelect:g,onSlide:_,onSlid:R,interval:P=5e3,keyboard:N=!0,onKeyDown:A,pause:M="hover",onMouseOver:U,onMouseOut:O,wrap:k=!0,touch:$=!0,onTouchStart:j,onTouchMove:E,onTouchEnd:y,prevIcon:v=h.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:I="Previous",nextIcon:T=h.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:S="Next",variant:w,className:$e,children:st,...Pi}=DE({defaultActiveIndex:n,...e},{activeIndex:"onSelect"}),Ne=ja(s,"carousel"),Fe=LE(),Xe=b.useRef(null),[er,is]=b.useState("next"),[Je,ae]=b.useState(!1),[bt,It]=b.useState(!1),[pe,Gt]=b.useState(p||0);b.useEffect(()=>{!bt&&p!==pe&&(Xe.current?is(Xe.current):is((p||0)>pe?"next":"prev"),i&&It(!0),Gt(p||0))},[p,bt,pe,i]),b.useEffect(()=>{Xe.current&&(Xe.current=null)});let it=0,os;b0(st,(H,Y)=>{++it,Y===p&&(os=H.props.interval)});const Qt=Vd(os),ke=b.useCallback(H=>{if(bt)return;let Y=pe-1;if(Y<0){if(!k)return;Y=it-1}Xe.current="prev",g==null||g(Y,H)},[bt,pe,g,k,it]),Oe=Mo(H=>{if(bt)return;let Y=pe+1;if(Y>=it){if(!k)return;Y=0}Xe.current="next",g==null||g(Y,H)}),Xt=b.useRef();b.useImperativeHandle(t,()=>({element:Xt.current,prev:ke,next:Oe}));const En=Mo(()=>{!document.hidden&&T0(Xt.current)&&(Fe?ke():Oe())}),We=er==="next"?"start":"end";g0(()=>{i||(_==null||_(pe,We),R==null||R(pe,We))},[pe]);const as=`${Ne}-item-${er}`,ls=`${Ne}-item-${We}`,Ci=b.useCallback(H=>{n0(H),_==null||_(pe,We)},[_,pe,We]),cs=b.useCallback(()=>{It(!1),R==null||R(pe,We)},[R,pe,We]),us=b.useCallback(H=>{if(N&&!/input|textarea/i.test(H.target.tagName))switch(H.key){case"ArrowLeft":H.preventDefault(),Fe?Oe(H):ke(H);return;case"ArrowRight":H.preventDefault(),Fe?ke(H):Oe(H);return}A==null||A(H)},[N,A,ke,Oe,Fe]),tr=b.useCallback(H=>{M==="hover"&&ae(!0),U==null||U(H)},[M,U]),hs=b.useCallback(H=>{ae(!1),O==null||O(H)},[O]),ds=b.useRef(0),Tt=b.useRef(0),bn=v0(),nr=b.useCallback(H=>{ds.current=H.touches[0].clientX,Tt.current=0,M==="hover"&&ae(!0),j==null||j(H)},[M,j]),me=b.useCallback(H=>{H.touches&&H.touches.length>1?Tt.current=0:Tt.current=H.touches[0].clientX-ds.current,E==null||E(H)},[E]),ye=b.useCallback(H=>{if($){const Y=Tt.current;Math.abs(Y)>I0&&(Y>0?ke(H):Oe(H))}M==="hover"&&bn.set(()=>{ae(!1)},P||void 0),y==null||y(H)},[$,M,ke,Oe,bn,P,y]),Jt=P!=null&&!Je&&!bt,In=b.useRef();b.useEffect(()=>{var H,Y;if(!Jt)return;const Be=Fe?ke:Oe;return In.current=window.setInterval(document.visibilityState?En:Be,(H=(Y=Qt.current)!=null?Y:P)!=null?H:void 0),()=>{In.current!==null&&clearInterval(In.current)}},[Jt,ke,Oe,Qt,P,En,Fe]);const rr=b.useMemo(()=>u&&Array.from({length:it},(H,Y)=>Be=>{g==null||g(Y,Be)}),[u,it,g]);return h.jsxs(r,{ref:Xt,...Pi,onKeyDown:us,onMouseOver:tr,onMouseOut:hs,onTouchStart:nr,onTouchMove:me,onTouchEnd:ye,className:Nr($e,Ne,i&&"slide",a&&`${Ne}-fade`,w&&`${Ne}-${w}`),children:[u&&h.jsx("div",{className:`${Ne}-indicators`,children:eu(st,(H,Y)=>h.jsx("button",{type:"button","data-bs-target":"","aria-label":f!=null&&f.length?f[Y]:`Slide ${Y+1}`,className:Y===pe?"active":void 0,onClick:rr?rr[Y]:void 0,"aria-current":Y===pe},Y))}),h.jsx("div",{className:`${Ne}-inner`,children:eu(st,(H,Y)=>{const Be=Y===pe;return i?h.jsx(a0,{in:Be,onEnter:Be?Ci:void 0,onEntered:Be?cs:void 0,addEndListener:t0,children:(xt,sr)=>b.cloneElement(H,{...sr,className:Nr(H.props.className,Be&&xt!=="entered"&&as,(xt==="entered"||xt==="exiting")&&"active",(xt==="entering"||xt==="exiting")&&ls)})}):b.cloneElement(H,{className:Nr(H.props.className,Be&&"active")})})}),l&&h.jsxs(h.Fragment,{children:[(k||p!==0)&&h.jsxs(Zc,{className:`${Ne}-control-prev`,onClick:ke,children:[v,I&&h.jsx("span",{className:"visually-hidden",children:I})]}),(k||p!==it-1)&&h.jsxs(Zc,{className:`${Ne}-control-next`,onClick:Oe,children:[T,S&&h.jsx("span",{className:"visually-hidden",children:S})]})]})]})});Fd.displayName="Carousel";const Ze=Object.assign(Fd,{Caption:w0,Item:E0}),x0="/HomeImage.jpg",Bd="/pic2.jpg",qd="/pic4.jpg",$d="/pic6.jpg",Wd="/pic7.jpg",A0=()=>h.jsxs("div",{className:"home flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-white",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx("h1",{className:"text-3xl font-semibold text-white mb-2 mt-3",children:"Welcome to Riverside Home Page"}),h.jsx("h2",{className:"text-lg text-gray-300 mb-4",children:"Life is loving"}),h.jsx("div",{className:"relative  rounded-lg overflow-hidden p-3 sm:p-5 zoom",children:h.jsx("img",{src:x0,alt:"Home Image",style:{borderRadius:"20px",objectFit:"cover",width:"500px",height:"500px"}})}),h.jsx("a",{href:"https://www.facebook.com/Riversidechurchwestville1",target:"_blank",rel:"noopener noreferrer",className:"text-blue-700 hover:underline block mt-4 text-lg",children:"Visit us on Facebook"})]}),h.jsxs(Ze,{interval:1e3,controls:!1,indicators:!1,style:{maxWidth:"800px",margin:"auto",marginTop:"15px",marginBottom:"50px"},children:[h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:Bd,alt:"Image 2",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:qd,alt:"Image 4",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:$d,alt:"Image 6",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:Wd,alt:"Image 7",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})})]})]}),R0=()=>{const n="/Nature.mp3";return h.jsxs("div",{className:"flex flex-col justify-start items-center min-h-screen bg-gradient-to-r from-black to-white pt-20",children:[h.jsx("h1",{className:"text-4xl font-bold text-white mb-8",children:"Worship"}),h.jsx("div",{className:"w-64 h-64 rounded-full shadow-lg overflow-hidden",children:h.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr1DMONakU9MUecTXVHg290MknEaXlFRhrA&s",alt:"Worship",className:"object-cover w-full h-full"})}),h.jsxs("div",{className:"w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mb-8 mt-8 transition-transform transform hover:scale-105",children:[" ",h.jsx("h2",{className:"text-3xl font-bold text-center text-black mb-4",children:"What is Worship?"}),h.jsxs("p",{className:"text-lg text-gray-700 text-center hover:text-teal-500 transition duration-300",children:["Worship is the heart's cry of gratitude and love,",h.jsx("br",{}),"A sacred moment with the divine above.",h.jsx("br",{}),"It's in the whispers of the soul at peace,",h.jsx("br",{}),"In songs of joy that never cease.",h.jsx("br",{}),"Worship is more than words can say,",h.jsx("br",{}),"It's a life lived in a holy way.",h.jsx("br",{})]})]}),h.jsx("div",{className:"w-full max-w-screen-sm mx-auto",children:h.jsxs(Ze,{interval:1e3,controls:!1,indicators:!1,style:{maxWidth:"800px",marginTop:"15px",marginBottom:"50px"},children:[h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:Bd,alt:"Image 2",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:qd,alt:"Image 4",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:$d,alt:"Image 6",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),h.jsx(Ze.Item,{children:h.jsx("div",{style:{display:"flex",justifyContent:"center"},children:h.jsx("img",{src:Wd,alt:"Image 7",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})})]})}),h.jsxs("audio",{controls:!0,autoPlay:!0,children:[h.jsx("source",{src:n,type:"audio/mp3"}),"Your browser does not support the audio element."]})]})},S0=()=>{const[n,e]=b.useState([]),[t,r]=b.useState(1),s=5,i=b.useCallback(async()=>{const R=(await Zn(wt(Ee,"prayer-requests"))).docs.map(P=>({id:P.id,...P.data()})).filter(P=>P.approved).sort((P,N)=>N.date-P.date);e(R)},[]);b.useEffect(()=>{i()},[i]);const a=t*s,l=a-s,u=n.slice(l,a),f=_=>r(_),p=()=>r(_=>Math.min(_+1,Math.ceil(n.length/s))),g=()=>r(_=>Math.max(_-1,1));return h.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[h.jsx("h1",{className:"text-4xl font-bold text-white my-8",children:"Prayer Requests"}),h.jsxs("div",{className:"prayer-requests-list w-full max-w-2xl mt-8",children:[u.map(_=>h.jsxs("div",{className:"prayer-request-item mb-4 p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105",children:[h.jsx("h2",{className:"text-2xl font-bold mb-2",children:_.title}),h.jsx("p",{className:"text-gray-700 mb-4",children:_.content}),_.picUrl&&h.jsxs("div",{className:"w-full h-80 mb-4 rounded overflow-hidden",children:[" ",h.jsx("img",{src:_.picUrl,alt:_.title,className:"object-cover w-full h-full transition transform hover:scale-110",style:{"@media (minWidth: 1024px)":{width:"600px",height:"400px"}}})]}),h.jsxs("p",{className:"text-gray-500 text-sm mb-2",children:["Submitted by: ",_.userName]}),h.jsxs("p",{className:"text-gray-500 text-sm",children:["Date: ",new Date(_.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]},_.id)),h.jsx(P0,{itemsPerPage:s,totalItems:n.length,currentPage:t,paginate:f,nextPage:p,prevPage:g})]})]})},P0=({itemsPerPage:n,totalItems:e,paginate:t,currentPage:r,nextPage:s,prevPage:i})=>{const a=Math.ceil(e/n);return h.jsx("nav",{children:h.jsxs("ul",{className:"flex justify-center mt-4",children:[h.jsx("li",{children:h.jsx("button",{onClick:i,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===1,children:"Previous"})}),h.jsx("li",{className:"mx-2",children:h.jsx("span",{className:"page-link px-4 py-2 rounded shadow-md border border-teal-500 bg-teal-500 text-white",children:r})}),h.jsx("li",{children:h.jsx("button",{onClick:s,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===a?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===a,children:"Next"})})]})})},C0=()=>h.jsx(S0,{});function N0(){const[n,e]=b.useState([]),[t,r]=b.useState(1),[s]=b.useState(5),[i,a]=b.useState(null),[l,u]=b.useState({title:"",sermonBy:"",videoUrl:"",content:"",date:""}),[f,p]=b.useState(!1),g=yt();b.useEffect(()=>{(async()=>{const y=(await Zn(wt(Ee,"facebook-video"))).docs.map(v=>({id:v.id,...v.data()}));e(y)})()},[]);const _=j=>{a(j.id),u({...j,date:new Date(j.date).toISOString().split("T")[0]}),p(!0)},R=async j=>{await Da(ft(Ee,"facebook-video",j)),e(n.filter(E=>E.id!==j))},P=j=>{u({...l,[j.target.name]:j.target.value})},N=async j=>{j.preventDefault(),await qr(ft(Ee,"facebook-video",i),{...l,date:new Date(l.date).toISOString()}),a(null),p(!1),e(n.map(E=>E.id===i?{id:E.id,...l}:E)),g("/facebook-live")},A=t*s,M=A-s,U=n.slice(M,A),O=j=>r(j),k=()=>r(j=>Math.min(j+1,Math.ceil(n.length/s))),$=()=>r(j=>Math.max(j-1,1));return h.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[h.jsx("h1",{className:"text-4xl font-bold text-white my-8",children:"Alter Uploads"}),h.jsxs("div",{className:"w-full max-w-2xl mt-8 bg-white p-6 rounded-lg shadow-md",children:[U.map(j=>h.jsxs("div",{className:"mb-4 p-4 border-b border-gray-300 last:border-b-0",children:[h.jsx("h2",{className:"text-xl font-bold",children:j.title}),h.jsxs("p",{className:"text-gray-700",children:["Sermon By: ",j.sermonBy]}),h.jsxs("p",{className:"text-gray-700",children:["Content: ",j.content]}),h.jsxs("p",{className:"text-gray-700",children:["Date: ",new Date(j.date).toLocaleDateString()]}),h.jsx("button",{className:"px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 mr-2",onClick:()=>_(j),children:"Edit"}),h.jsx("button",{className:"px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300",onClick:()=>R(j.id),children:"Delete"})]},j.id)),h.jsx(k0,{videosPerPage:s,totalVideos:n.length,paginate:O,currentPage:t,nextPage:k,prevPage:$})]}),f&&h.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center",children:h.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Edit Video"}),h.jsxs("form",{onSubmit:N,children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Title:"}),h.jsx("input",{type:"text",name:"title",value:l.title,onChange:P,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Sermon By:"}),h.jsx("input",{type:"text",name:"sermonBy",value:l.sermonBy,onChange:P,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Video URL:"}),h.jsx("input",{type:"text",name:"videoUrl",value:l.videoUrl,onChange:P,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),h.jsx("textarea",{name:"content",value:l.content,onChange:P,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-pre-wrap"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Date:"}),h.jsx("input",{type:"date",name:"date",value:l.date,onChange:P,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"flex justify-end",children:[h.jsx("button",{type:"button",className:"px-4 py-2 mr-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300",onClick:()=>p(!1),children:"Cancel"}),h.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:"Save"})]})]})]})})]})}const k0=({videosPerPage:n,totalVideos:e,currentPage:t,nextPage:r,prevPage:s})=>h.jsx("nav",{children:h.jsxs("ul",{className:"flex justify-center mt-4",children:[h.jsx("li",{children:h.jsx("button",{onClick:s,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${t===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:t===1,children:"Previous"})}),h.jsx("li",{className:"mx-2",children:h.jsx("span",{className:"page-link px-4 py-2 rounded shadow-md border border-teal-500 bg-teal-500 text-white",children:t})}),h.jsx("li",{children:h.jsx("button",{onClick:r,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${t===Math.ceil(e/n)?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:t===Math.ceil(e/n),children:"Next"})})]})}),D0=()=>h.jsxs("div",{children:[h.jsx(N0,{})," "]}),V0=()=>{const[n,e]=b.useState(""),[t,r]=b.useState(""),[s,i]=b.useState(""),[a,l]=b.useState(null),u=yt();b.useEffect(()=>{const R=fi(ht,P=>{l(P),P&&u("/")});return()=>R()},[u]);const f=async R=>{if(R.preventDefault(),!n||!t){alert("Please enter both email and password");return}try{await ny(ht,n,t),u("/")}catch(P){P.code==="auth/user-not-found"||P.code==="auth/wrong-password"?alert("Incorrect email or password. Please try again or register."):alert("Error logging in user: Please check your password ")}},p=new Ye,g=async()=>{try{await Ry(ht,p)}catch(R){console.error(R)}},_=async()=>{try{await Gu(ht),e(""),r(""),i(""),l(null),u("/")}catch(R){console.error(R)}};return b.useEffect(()=>{e(""),r("")},[a]),h.jsx("div",{className:"flex justify-center items-center h-screen bg-gradient-to-r from-black via-red-500 to-yellow-600",children:a?h.jsxs("div",{className:"text-center",children:[h.jsxs("h2",{className:"text-xl font-bold text-white mb-4",children:["Welcome, ",a.email]}),h.jsx("button",{className:"px-6 py-3 text-lg text-teal-100 rounded-sm bg-teal-500 hover:bg-teal-700",onClick:_,children:"Logout"})]}):h.jsxs("div",{className:"login-form p-8 rounded-lg shadow-lg text-center max-w-md w-full bg-black",children:[h.jsx("h2",{className:"mb-6 text-2xl font-bold text-white",children:"Login"}),s&&h.jsx("p",{className:"mb-4 text-sm text-red-500",children:s}),h.jsxs("form",{onSubmit:f,autoComplete:"new-password",children:[h.jsxs("div",{className:"mb-4 text-left",children:[h.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-white",children:"Email"}),h.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white",value:n,onChange:R=>e(R.target.value),autoComplete:"new-password"})]}),h.jsxs("div",{className:"mb-4 text-left",children:[h.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-white",children:"Password"}),h.jsx("input",{type:"password",id:"password",name:"password",required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white",value:t,onChange:R=>r(R.target.value),autoComplete:"new-password"})]}),h.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-gray-800 text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-900",children:"Sign In"})]}),h.jsx("button",{type:"button",className:"w-full py-2 px-4 bg-gray-700 text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-900 mt-4",onClick:g,children:"Sign in with Google"})]})})};function O0(){const[n,e]=b.useState(""),[t,r]=b.useState(""),[s,i]=b.useState(""),[a,l]=b.useState(""),u=yt(),f=async p=>{if(p.preventDefault(),!n||!t||!s){alert("Please enter all fields");return}if(!/\S+@\S+\.\S+/.test(n)){alert("Please enter a valid email address");return}try{const _=(await ty(ht,n,t)).user;await sy(_,{displayName:s}),e(""),r(""),i(""),l(""),alert("Registered successfully"),u("/")}catch(g){g.code==="auth/email-already-in-use"?alert("Email is already registered"):l("Error registering user: "+g.message)}};return b.useEffect(()=>{e(""),r(""),i("")},[]),h.jsx("div",{className:"flex justify-center items-center h-screen bg-gradient-to-r from-black via-red-500 to-yellow-600",children:h.jsxs("div",{className:"register-form p-8 rounded-lg shadow-lg text-center max-w-md w-full bg-black",children:[h.jsx("h2",{className:"mb-6 text-2xl font-bold text-white",children:"Register"}),a&&h.jsx("p",{className:"mb-4 text-sm text-red-500",children:a}),h.jsxs("form",{onSubmit:f,autoComplete:"off",children:[h.jsxs("div",{className:"mb-4 text-left",children:[h.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-white",children:"Name"}),h.jsx("input",{type:"text",id:"name",name:"new-name",className:"w-full p-2 border border-gray-300 rounded-md",value:s,onChange:p=>i(p.target.value),required:!0,autoComplete:"off"})]}),h.jsxs("div",{className:"mb-4 text-left",children:[h.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-white",children:"Email"}),h.jsx("input",{type:"email",id:"email",name:"new-email",className:"w-full p-2 border border-gray-300 rounded-md",value:n,onChange:p=>e(p.target.value),required:!0,autoComplete:"off"})]}),h.jsxs("div",{className:"mb-4 text-left",children:[h.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-white",children:"Password"}),h.jsx("input",{type:"password",id:"password",name:"new-password",className:"w-full p-2 border border-gray-300 rounded-md",value:t,onChange:p=>r(p.target.value),required:!0,autoComplete:"off"})]}),h.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-gray-800 text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-900",children:"Register"})]})]})})}function j0(){const[n,e]=b.useState(""),[t,r]=b.useState(""),[s,i]=b.useState(""),[a,l]=b.useState(""),[u,f]=b.useState(0),[p,g]=b.useState(""),_=yt(),R=async P=>{P.preventDefault();try{await Va(wt(Ee,"daily-posts"),{date:n,imgUrl:t,postedBy:s,content:a,likes:u}),g("Post added successfully!"),e(""),r(""),i(""),l(""),f(0),_("/daily-posts")}catch(N){console.error("Error adding document: ",N),g("Failed to add post.")}};return h.jsxs("form",{onSubmit:R,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Add New Daily Post"}),p&&h.jsx("p",{className:`mb-4 ${p.includes("successfully")?"text-green-500":"text-red-500"}`,children:p}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Date:"}),h.jsx("input",{type:"date",value:n,onChange:P=>e(P.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Image URL:"}),h.jsx("input",{type:"text",value:t,onChange:P=>r(P.target.value),placeholder:"Image URL",required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Posted By:"}),h.jsx("input",{type:"text",value:s,onChange:P=>i(P.target.value),placeholder:"Posted By",required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),h.jsx("textarea",{value:a,onChange:P=>l(P.target.value),placeholder:"Content",required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none whitespace-pre-wrap"})]}),h.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:"Add Post"})]})}const L0=()=>{const[n,e]=b.useState(""),[t,r]=b.useState(""),[s,i]=b.useState(""),[a,l]=b.useState(!1),[u,f]=b.useState(null),[p,g]=b.useState(""),_=yt();b.useEffect(()=>{const P=fi(ht,N=>{g(N?N.displayName||N.email:"")});return()=>P()},[]);const R=async P=>{P.preventDefault(),l(!0);try{await Va(wt(Ee,"prayer-requests"),{userName:p,title:n,content:t,picUrl:s,date:new Date().toISOString(),approved:!1}),e(""),r(""),i(""),f(null),alert("Prayer request submitted successfully"),_("/")}catch(N){f(N.message)}finally{l(!1)}};return h.jsxs("form",{onSubmit:R,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-8",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Submit a Prayer Request"}),u&&h.jsx("p",{className:"text-red-500 mb-4",children:u}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Title:"}),h.jsx("input",{type:"text",value:n,onChange:P=>e(P.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),h.jsx("textarea",{value:t,onChange:P=>r(P.target.value),required:!0,placeholder:"Enter your prayer request here...",className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none",style:{whiteSpace:"pre-line",wordBreak:"break-word"}})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Picture URL:"}),h.jsx("input",{type:"text",value:s,onChange:P=>i(P.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("button",{type:"button",onClick:()=>_("/"),className:"py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300",children:"Cancel"}),h.jsx("button",{type:"submit",disabled:a,className:"py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:a?"Submitting...":"Submit"})]})]})},M0=()=>h.jsx(L0,{});function U0(){return h.jsx("div",{className:"min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white",children:h.jsxs("div",{className:"container mx-auto py-8 p-3",children:[h.jsx("h1",{className:"text-3xl font-bold text-center mb-8 zoom",children:"Contact Page"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Pastor Cedric Olivier"}),h.jsx("p",{children:"Phone Number: 0834487334"}),h.jsx("p",{children:"Email: cedric@riversidechurch.org.za"})]}),h.jsxs("div",{className:"bg-teal-800 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Riverside Church"}),h.jsx("p",{children:"Email: info@riversidechurch.org.za"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Pastor Louise Olivier"}),h.jsx("p",{children:"Phone Number: 0834149502"}),h.jsx("p",{children:"Email: cedwees@absamail.co.za"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Church Leaders"}),h.jsx("p",{children:"Adrian Munsamy"}),h.jsx("p",{children:"Phone Number: 0812406768"}),h.jsx("p",{children:"Email: cedric@riversidechurch.org.za"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{children:"Susan Greer"}),h.jsx("p",{children:"Phone Number: 0764078773"}),h.jsx("p",{children:"Email: susanlgreer@gmail.com"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{children:"Charles Frankel"}),h.jsx("p",{children:"Phone Number: 0828515700"}),h.jsx("p",{children:"Email: charlesf@revtech.co.za"})]})]}),h.jsxs("div",{className:"bg-slate-700 p-4 rounded-lg text-center mt-8 hover:shadow-xl transform hover:scale-105 zoom",children:[h.jsx("h1",{className:"text-2xl font-bold mb-4 zoom",children:"Banking Details"}),h.jsx("p",{children:"Westville Assembly of God"}),h.jsx("p",{children:"Std Bank Westville"}),h.jsx("p",{children:"Acc no 053102800"}),h.jsx("p",{children:"Branch code 045426"})]})]})})}function F0(){const[n,e]=b.useState([]),[t,r]=b.useState(1),[s]=b.useState(5),[i,a]=b.useState(!0),[l,u]=b.useState(null);yt(),b.useEffect(()=>{(async()=>{try{const M=xd(wt(Ee,"daily-posts")),O=(await Zn(M)).docs.map(k=>({id:k.id,...k.data()}));e(O),console.log("Posts fetched successfully:",O)}catch(M){console.error("Error fetching posts:",M),u("Failed to load posts.")}finally{a(!1)}})()},[]);const f=async(A,M)=>{try{const U=ft(Ee,"daily-posts",A);await qr(U,{likes:M+1}),e(O=>O.map(k=>k.id===A?{...k,likes:M+1}:k))}catch(U){console.error("Error updating likes:",U)}},p=t*s,g=p-s,_=n.slice(g,p),R=A=>r(A),P=()=>r(A=>Math.min(A+1,Math.ceil(n.length/s))),N=()=>r(A=>Math.max(A-1,1));return i?h.jsx("p",{children:"Loading..."}):l?h.jsx("p",{children:l}):h.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[h.jsx("h1",{className:"text-4xl font-bold text-white my-8 mt-16 zoom",children:"Daily Quotes"}),h.jsx("div",{className:"daily-posts-list w-full max-w-2xl mt-1",children:_.length>0?_.map((A,M)=>h.jsxs("div",{className:"daily-post-item mb-4 p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105",children:[h.jsxs("p",{className:"text-2xl font-bold mb-2",children:["Date Posted: ",new Date(A.date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})]}),A.imgUrl&&h.jsx("div",{className:"w-full h-96 mb-4 rounded overflow-hidden flex justify-center items-center",children:h.jsx("img",{src:A.imgUrl,alt:"Post Image",className:"w-full h-full object-cover transition transform hover:wobble"})}),h.jsxs("p",{className:"text-gray-700 mb-4",children:["Content: ",A.content]}),h.jsxs("p",{className:"text-gray-500 text-sm mb-2",children:["Posted by: ",A.postedBy]}),h.jsxs("div",{className:"flex items-center",children:[h.jsxs("p",{className:"text-gray-500 text-sm mr-2",children:["Likes: ",A.likes]}),h.jsx("button",{onClick:()=>f(A.id,A.likes),className:"bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition",children:"Like"})]})]},M)):h.jsx("p",{className:"text-white",children:"No posts available"})}),h.jsx(B0,{postsPerPage:s,totalPosts:n.length,paginate:R,currentPage:t,nextPage:P,prevPage:N})]})}const B0=({postsPerPage:n,totalPosts:e,paginate:t,currentPage:r,nextPage:s,prevPage:i})=>h.jsx("nav",{children:h.jsxs("ul",{className:"flex justify-center mt-4",children:[h.jsx("li",{children:h.jsx("button",{onClick:i,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===1,children:"Previous"})}),h.jsx("li",{children:h.jsx("button",{onClick:()=>t(r),className:`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"bg-teal-500 text-white":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,children:r})}),h.jsx("li",{children:h.jsx("button",{onClick:s,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===Math.ceil(e/n)?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===Math.ceil(e/n),children:"Next"})})]})});function q0(){return h.jsx("div",{children:h.jsx(F0,{})})}function $0(){return h.jsxs("div",{className:"min-h-screen p-3 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white",children:[h.jsx("h1",{className:"text-4xl font-bold text-white mb-8 zoom",children:"Service Times"}),h.jsx("div",{className:"w-full max-w-md bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105",children:h.jsxs("div",{className:"group mb-6",children:[h.jsx("h4",{className:"text-3xl font-bold mb-2 text-center",children:h.jsx("span",{className:"text-black",children:"Sundays : 9am"})}),h.jsx("p",{className:"text-lg text-gray-700 text-center",children:"Services and special events"})]})}),h.jsx("h1",{className:"text-4xl font-bold text-white mb-4 mt-5 zoom",children:"Life Groups"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105 relative",children:[h.jsx("p",{className:"font-bold",children:"Louise Olivier: Ladies Meeting"}),h.jsx("p",{children:"Day/Time: Tuesdays at 9am"}),h.jsx("p",{children:"Place: Riverside Church 39 Stafford Road, Westville"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Susan Greer"}),h.jsx("p",{children:"Day/Time: Thursdays at 7pm"}),h.jsx("p",{children:"Place: Riverside Church 39 Stafford Road, Westville"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Charles Frankel"}),h.jsx("p",{children:"Day/Time: Mondays at 9am"}),h.jsx("p",{children:"Place: Dawncliffe Park 7 Queen Elizabeth Drive Dawncliffe"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Adrian Munsamy"}),h.jsx("p",{children:"Day/Time: Thursdays at 7pm"}),h.jsx("p",{children:"Place: 37 David McLean Drive Westville 3630"})]}),h.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[h.jsx("p",{className:"font-bold",children:"Satish Harilal"}),h.jsx("p",{children:"Day/Time: Thursdays at 7pm"}),h.jsx("p",{children:"Place: 46 Kirriemuir Drive Atholl Heights"}),h.jsx("p",{children:"Email: satishhari2407@gmail.com"})]}),h.jsx("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:h.jsx("p",{className:"font-bold zoom",children:"Join a Life Group today"})})]})]})}const W0=({postsPerPage:n,totalPosts:e,paginate:t,currentPage:r,nextPage:s,prevPage:i})=>{const a=[];for(let l=1;l<=Math.ceil(e/n);l++)a.push(l);return h.jsx("nav",{children:h.jsxs("ul",{className:"flex justify-center mt-4",children:[h.jsx("li",{children:h.jsx("button",{onClick:i,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===1,children:"Previous"})}),a.map(l=>h.jsx("li",{className:"mx-2",children:h.jsx("button",{onClick:()=>t(l),className:`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${r===l?"bg-teal-500 text-white":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,children:l})},l)),h.jsx("li",{children:h.jsx("button",{onClick:s,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===a.length?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===a.length,children:"Next"})})]})})},z0=()=>{const[n,e]=b.useState([]),[t,r]=b.useState(1),[s]=b.useState(5),[i,a]=b.useState(!0),[l,u]=b.useState(null);b.useEffect(()=>{(async()=>{try{const M=(await Zn(wt(Ee,"facebook-video"))).docs.map(U=>({id:U.id,...U.data()}));e(M),a(!1)}catch(A){console.error("Error fetching videos:",A),u("Failed to load videos."),a(!1)}})()},[]);const f=t*s,p=f-s,g=n.slice(p,f),_=N=>r(N),R=()=>r(N=>Math.min(N+1,Math.ceil(n.length/s))),P=()=>r(N=>Math.max(N-1,1));return i?h.jsx("p",{children:"Loading..."}):l?h.jsx("p",{children:l}):h.jsxs("div",{className:"flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[h.jsx("h1",{className:"text-4xl font-bold text-white mb-8",children:"Facebook Recorded Services"}),g.map(N=>h.jsxs("div",{className:"card-content mb-8 bg-teal-500 p-4 rounded-lg mx-auto w-full lg:w-2/3",children:[h.jsx("h2",{className:"text-2xl font-bold text-white",children:N.title}),h.jsxs("p",{className:"text-lg text-gray-300 mb-1",children:["Sermon By: ",N.sermonBy]}),h.jsxs("p",{className:"text-lg text-gray-300 mb-1",children:["Date: ",new Date(N.date).toLocaleDateString()]}),N.embeddable?h.jsx("div",{className:"video-container",children:h.jsx(H0,{videoUrl:N.videoUrl})}):h.jsxs("p",{className:"text-red-500",children:["This video cannot be embedded. You can watch it"," ",h.jsx("a",{href:N.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline",children:"here"}),"."]}),h.jsx("p",{className:"text-gray-300 mt-4",children:N.content})]},N.id)),h.jsx(W0,{postsPerPage:s,totalPosts:n.length,paginate:_,currentPage:t,nextPage:R,prevPage:P})]})},H0=({videoUrl:n})=>{const e=`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(n)}&show_text=false&width=734`;return h.jsx("div",{children:h.jsx("iframe",{src:e,width:"100%",height:"100%",style:{border:"none",overflow:"hidden",borderRadius:"8px"},allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})};function K0(){const[n,e]=b.useState([]),[t,r]=b.useState(null),[s,i]=b.useState({title:"",content:"",picUrl:""}),[a,l]=b.useState(1),[u]=b.useState(5);b.useEffect(()=>{(async()=>{const j=(await Zn(wt(Ee,"prayer-requests"))).docs.map(E=>({id:E.id,...E.data()}));j.sort((E,y)=>new Date(y.date)-new Date(E.date)),e(j)})()},[]);const f=k=>{r(k.id),i({title:k.title,content:k.content,picUrl:k.picUrl})},p=async k=>{await Da(ft(Ee,"prayer-requests",k)),e(n.filter($=>$.id!==k))},g=async k=>{await qr(ft(Ee,"prayer-requests",k),{approved:!0}),e(n.map($=>$.id===k?{...$,approved:!0}:$))},_=k=>{i({...s,[k.target.name]:k.target.value})},R=async k=>{k.preventDefault(),await qr(ft(Ee,"prayer-requests",t),s),r(null);const $=[...n],j=$.findIndex(E=>E.id===t);j!==-1&&($[j]={id:t,...s},$.sort((E,y)=>new Date(y.date)-new Date(E.date)),e($))},P=a*u,N=P-u,A=n.slice(N,P),M=k=>l(k),U=()=>l(k=>Math.min(k+1,Math.ceil(n.length/u))),O=()=>l(k=>Math.max(k-1,1));return h.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[h.jsx("h1",{className:"text-4xl font-bold text-white my-8",children:"Update Prayer Requests"}),t?h.jsxs("form",{onSubmit:R,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Edit Prayer Request"}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Title:"}),h.jsx("input",{type:"text",name:"title",value:s.title,onChange:_,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),h.jsx("textarea",{name:"content",value:s.content,onChange:_,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none",style:{whiteSpace:"pre-line",wordBreak:"break-word"}})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Picture URL:"}),h.jsx("input",{type:"text",name:"picUrl",value:s.picUrl,onChange:_,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:"Save Changes"})]}):h.jsx("div",{className:"w-full max-w-2xl mt-8",children:A.map(k=>h.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md mb-4",children:[h.jsx("h2",{className:"text-xl font-bold",children:k.title}),h.jsx("p",{className:"text-gray-700",children:k.content}),k.picUrl&&h.jsx("div",{className:"w-full h-80 mt-4",children:h.jsx("img",{src:k.picUrl,alt:k.title,className:"object-cover w-full h-full"})}),h.jsxs("p",{className:"text-gray-500 text-sm mt-2",children:["Submitted by: ",k.userName]}),h.jsxs("p",{className:"text-gray-500 text-sm",children:["Date: ",new Date(k.date).toLocaleString()]}),h.jsxs("div",{className:"flex space-x-4 mt-4",children:[h.jsx("button",{className:"px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300",onClick:()=>f(k),children:"Edit"}),h.jsx("button",{className:"px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300",onClick:()=>p(k.id),children:"Delete"}),!k.approved&&h.jsx("button",{className:"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300",onClick:()=>g(k.id),children:"Approve"})]})]},k.id))}),h.jsxs("div",{className:"flex justify-center mt-4",children:[h.jsx("button",{onClick:O,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${a===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:a===1,children:"Previous"}),h.jsx("button",{onClick:()=>M(a),className:`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${a===1?"bg-teal-500 text-white":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,children:a}),h.jsx("button",{onClick:U,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${a===Math.ceil(n.length/u)?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:a===Math.ceil(n.length/u),children:"Next"})]})]})}function G0(){const[n,e]=b.useState([]),[t,r]=b.useState(1),[s]=b.useState(5),[i,a]=b.useState(null),[l,u]=b.useState(!1);b.useEffect(()=>{(async()=>{try{const k=xd(wt(Ee,"daily-posts")),j=(await Zn(k)).docs.map(E=>({id:E.id,...E.data()}));e(j)}catch(k){console.error("Error fetching posts:",k)}})()},[]);const f=O=>{a(O),u(!0)},p=async O=>{try{await Da(ft(Ee,"daily-posts",O)),e(n.filter(k=>k.id!==O))}catch(k){console.error("Error deleting post:",k)}},g=async O=>{O.preventDefault();const{id:k,date:$,content:j,imgUrl:E,likes:y,postedBy:v}=i;try{const I=ft(Ee,"daily-posts",k);await qr(I,{date:$,content:j,imgUrl:E,likes:y,postedBy:v}),u(!1)}catch(I){console.error("Error updating post:",I)}},_=O=>{const{name:k,value:$}=O.target;a(j=>({...j,[k]:$}))},R=t*s,P=R-s,N=n.slice(P,R),A=O=>r(O),M=()=>r(O=>Math.min(O+1,Math.ceil(n.length/s))),U=()=>r(O=>Math.max(O-1,1));return h.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[h.jsx("h1",{className:"text-4xl font-bold text-white my-8 mt-16",children:"Update Daily Posts"}),h.jsx("div",{className:"daily-posts-list w-full max-w-2xl mt-1",children:N.length>0?N.map((O,k)=>h.jsxs("div",{className:"bg-gray-800 text-white rounded-lg shadow-lg p-6 mb-4",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4",children:O.content}),h.jsxs("p",{className:"mb-4",children:[h.jsx("strong",{children:"Date:"})," ",new Date(O.date).toLocaleDateString()]}),h.jsxs("p",{className:"mb-4",children:[h.jsx("strong",{children:"Posted By:"})," ",O.postedBy]}),O.imgUrl&&h.jsx("div",{className:"mb-4 flex justify-center",children:h.jsx("img",{src:O.imgUrl,alt:"Post",className:"w-full h-auto rounded-lg"})}),h.jsx("button",{className:"bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mr-2",onClick:()=>f(O),children:"Update"}),h.jsx("button",{className:"bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded",onClick:()=>p(O.id),children:"Delete"})]},k)):h.jsx("p",{children:"No daily posts available."})}),l&&i&&h.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-75",children:h.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Update Post"}),h.jsxs("form",{onSubmit:g,children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{htmlFor:"date",className:"block text-gray-700 font-bold mb-2",children:"Date:"}),h.jsx("input",{type:"date",id:"date",name:"date",value:new Date(i.date).toISOString().split("T")[0],onChange:_,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{htmlFor:"content",className:"block text-gray-700 font-bold mb-2",children:"Content:"}),h.jsx("textarea",{id:"content",name:"content",value:i.content,onChange:_,className:"w-full p-2 border border-gray-300 rounded whitespace-pre-wrap",required:!0})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{htmlFor:"imgUrl",className:"block text-gray-700 font-bold mb-2",children:"Image URL:"}),h.jsx("input",{type:"text",id:"imgUrl",name:"imgUrl",value:i.imgUrl,onChange:_,className:"w-full p-2 border border-gray-300 rounded"}),i.imgUrl&&h.jsx("div",{className:"mt-4 flex justify-center",children:h.jsx("img",{src:i.imgUrl,alt:"Post",className:"w-32 h-auto rounded-lg"})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{htmlFor:"likes",className:"block text-gray-700 font-bold mb-2",children:"Likes:"}),h.jsx("input",{type:"number",id:"likes",name:"likes",value:i.likes,onChange:_,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{htmlFor:"postedBy",className:"block text-gray-700 font-bold mb-2",children:"Posted By:"}),h.jsx("input",{type:"text",id:"postedBy",name:"postedBy",value:i.postedBy,onChange:_,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),h.jsxs("div",{className:"flex justify-end",children:[h.jsx("button",{type:"button",className:"bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded mr-2",onClick:()=>u(!1),children:"Cancel"}),h.jsx("button",{type:"submit",className:"bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded",children:"Update"})]})]})]})}),h.jsxs("div",{className:"flex justify-center mt-4",children:[h.jsx("button",{onClick:U,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${t===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:t===1,children:"Previous"}),h.jsx("button",{onClick:()=>A(t),className:`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${t===1?"bg-teal-500 text-white":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,children:t}),h.jsx("button",{onClick:M,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${t===Math.ceil(n.length/s)?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:t===Math.ceil(n.length/s),children:"Next"})]})]})}function Q0(){return h.jsx(G0,{})}const X0=({onVideoUploaded:n})=>{const[e,t]=b.useState(""),[r,s]=b.useState(""),[i,a]=b.useState(""),[l,u]=b.useState(""),[f,p]=b.useState(""),[g,_]=b.useState(!1),[R,P]=b.useState(null),[N,A]=b.useState(""),M=yt();b.useEffect(()=>{const k=fi(ht,$=>{A($?$.displayName||$.email:"")});return()=>k()},[]);const U=async k=>{k.preventDefault(),_(!0);const $=await O(i);try{await Va(wt(Ee,"facebook-video"),{title:e,sermonBy:r,videoUrl:i,content:l,date:f,userName:N,embeddable:$}),t(""),s(""),a(""),u(""),p(""),P(null),n(),M("/facebook-live")}catch(j){P(j.message)}finally{_(!1)}},O=async k=>new Promise($=>{const j=document.createElement("iframe");j.src=`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(k)}&show_text=false&width=734`,j.style.display="none",document.body.appendChild(j),j.onload=()=>{$(!0),document.body.removeChild(j)},j.onerror=()=>{$(!1),document.body.removeChild(j)}});return h.jsxs("form",{onSubmit:U,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Upload Video"}),R&&h.jsx("p",{className:"text-red-500 mb-4",children:R}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Title:"}),h.jsx("input",{type:"text",value:e,onChange:k=>t(k.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Sermon By:"}),h.jsx("input",{type:"text",value:r,onChange:k=>s(k.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Video URL:"}),h.jsx("input",{type:"text",value:i,onChange:k=>a(k.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),h.jsx("textarea",{value:l,onChange:k=>u(k.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none whitespace-pre-wrap"})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Date:"}),h.jsx("input",{type:"date",value:f,onChange:k=>p(k.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),h.jsx("button",{type:"submit",disabled:g,className:"w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:g?"Uploading...":"Upload"})]})};function J0(){return h.jsxs(Ep,{children:[h.jsx(SE,{}),h.jsxs(pp,{children:[h.jsx(Re,{path:"/",element:h.jsx(A0,{})}),h.jsx(Re,{path:"/worship",element:h.jsx(R0,{})}),h.jsx(Re,{path:"/prayer-request",element:h.jsx(C0,{})}),h.jsx(Re,{path:"/alter-uploads",element:h.jsx(D0,{})}),h.jsx(Re,{path:"/login",element:h.jsx(V0,{})}),h.jsx(Re,{path:"/register",element:h.jsx(O0,{})}),h.jsx(Re,{path:"/add-post",element:h.jsx(j0,{})}),h.jsx(Re,{path:"/submit-prayer-requests",element:h.jsx(M0,{})}),h.jsx(Re,{path:"/contact-us",element:h.jsx(U0,{})}),h.jsx(Re,{path:"/daily-posts",element:h.jsx(q0,{})}),h.jsx(Re,{path:"/services",element:h.jsx($0,{})}),h.jsx(Re,{path:"/facebook-live",element:h.jsx(z0,{})}),h.jsx(Re,{path:"/update-prayer-requests",element:h.jsx(K0,{})}),h.jsx(Re,{path:"/update-daily-post",element:h.jsx(Q0,{})})," ",h.jsx(Re,{path:"/upload-video",element:h.jsx(X0,{})})]})]})}ru(document.getElementById("root")).render(h.jsx(Dt.StrictMode,{children:h.jsx(J0,{})}));

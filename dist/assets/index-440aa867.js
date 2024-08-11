import{r as w,a as up,R as hp,g as dp,b as Be,c as qr}from"./vendor-9bcc248d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ch={exports:{}},Bi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=w,mp=Symbol.for("react.element"),pp=Symbol.for("react.fragment"),gp=Object.prototype.hasOwnProperty,yp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_p={key:!0,ref:!0,__self:!0,__source:!0};function uh(n,e,t){var r,s={},i=null,l=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)gp.call(e,r)&&!_p.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:mp,type:n,key:i,ref:l,props:s,_owner:yp.current}}Bi.Fragment=pp;Bi.jsx=uh;Bi.jsxs=uh;ch.exports=Bi;var a=ch.exports,hh,Nc=up;hh=Nc.createRoot,Nc.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},rs.apply(this,arguments)}var Qt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Qt||(Qt={}));const Ac="popstate";function vp(n){n===void 0&&(n={});function e(r,s){let{pathname:i,search:l,hash:c}=r.location;return Go("",{pathname:i,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:yi(s)}return wp(e,t,null,n)}function fe(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function dh(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bp(){return Math.random().toString(36).substr(2,8)}function Sc(n,e){return{usr:n.state,key:n.key,idx:e}}function Go(n,e,t,r){return t===void 0&&(t=null),rs({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?hr(e):e,{state:t,key:e&&e.key||r||bp()})}function yi(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function hr(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function wp(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,l=s.history,c=Qt.Pop,u=null,d=m();d==null&&(d=0,l.replaceState(rs({},l.state,{idx:d}),""));function m(){return(l.state||{idx:null}).idx}function g(){c=Qt.Pop;let R=m(),L=R==null?null:R-d;d=R,u&&u({action:c,location:k.location,delta:L})}function v(R,L){c=Qt.Push;let P=Go(k.location,R,L);t&&t(P,R),d=m()+1;let j=Sc(P,d),D=k.createHref(P);try{l.pushState(j,"",D)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;s.location.assign(D)}i&&u&&u({action:c,location:k.location,delta:1})}function T(R,L){c=Qt.Replace;let P=Go(k.location,R,L);t&&t(P,R),d=m();let j=Sc(P,d),D=k.createHref(P);l.replaceState(j,"",D),i&&u&&u({action:c,location:k.location,delta:0})}function A(R){let L=s.location.origin!=="null"?s.location.origin:s.location.href,P=typeof R=="string"?R:yi(R);return P=P.replace(/ $/,"%20"),fe(L,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,L)}let k={get action(){return c},get location(){return n(s,l)},listen(R){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Ac,g),u=R,()=>{s.removeEventListener(Ac,g),u=null}},createHref(R){return e(s,R)},createURL:A,encodeLocation(R){let L=A(R);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:v,replace:T,go(R){return l.go(R)}};return k}var Pc;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Pc||(Pc={}));function xp(n,e,t){return t===void 0&&(t="/"),Ep(n,e,t,!1)}function Ep(n,e,t,r){let s=typeof e=="string"?hr(e):e,i=nr(s.pathname||"/",t);if(i==null)return null;let l=fh(n);Tp(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let d=Op(i);c=jp(l[u],d,r)}return c}function fh(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,l,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Jt([r,u.relativePath]),m=t.concat(u);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),fh(i.children,e,m,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:Cp(d,i.index),routesMeta:m})};return n.forEach((i,l)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,l);else for(let u of mh(i.path))s(i,l,u)}),e}function mh(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let l=mh(r.join("/")),c=[];return c.push(...l.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...l),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function Tp(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:kp(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Ip=/^:[\w-]+$/,Rp=3,Np=2,Ap=1,Sp=10,Pp=-2,Cc=n=>n==="*";function Cp(n,e){let t=n.split("/"),r=t.length;return t.some(Cc)&&(r+=Pp),e&&(r+=Np),t.filter(s=>!Cc(s)).reduce((s,i)=>s+(Ip.test(i)?Rp:i===""?Ap:Sp),r)}function kp(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function jp(n,e,t){t===void 0&&(t=!1);let{routesMeta:r}=n,s={},i="/",l=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,m=i==="/"?e:e.slice(i.length)||"/",g=_i({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),v=u.route;if(!g&&d&&t&&!r[r.length-1].route.index&&(g=_i({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!g)return null;Object.assign(s,g.params),l.push({params:s,pathname:Jt([i,g.pathname]),pathnameBase:Up(Jt([i,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(i=Jt([i,g.pathnameBase]))}return l}function _i(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Dp(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((d,m,g)=>{let{paramName:v,isOptional:T}=m;if(v==="*"){let k=c[g]||"";l=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const A=c[g];return T&&!A?d[v]=void 0:d[v]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:n}}function Dp(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),dh(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function Op(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dh(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function nr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Lp(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?hr(n):n;return{pathname:t?t.startsWith("/")?t:Vp(t,e):e,search:Fp(r),hash:Bp(s)}}function Vp(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Po(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mp(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ph(n,e){let t=Mp(n);return e?t.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function gh(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=hr(n):(s=rs({},n),fe(!s.pathname||!s.pathname.includes("?"),Po("?","pathname","search",s)),fe(!s.pathname||!s.pathname.includes("#"),Po("#","pathname","hash",s)),fe(!s.search||!s.search.includes("#"),Po("#","search","hash",s)));let i=n===""||s.pathname==="",l=i?"/":s.pathname,c;if(l==null)c=t;else{let g=e.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),g-=1;s.pathname=v.join("/")}c=g>=0?e[g]:"/"}let u=Lp(s,c),d=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}const Jt=n=>n.join("/").replace(/\/\/+/g,"/"),Up=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Fp=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Bp=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function qp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const yh=["post","put","patch","delete"];new Set(yh);const $p=["get",...yh];new Set($p);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ss.apply(this,arguments)}const qi=w.createContext(null),_h=w.createContext(null),on=w.createContext(null),$i=w.createContext(null),jn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),vh=w.createContext(null);function Wp(n,e){let{relative:t}=e===void 0?{}:e;ms()||fe(!1);let{basename:r,navigator:s}=w.useContext(on),{hash:i,pathname:l,search:c}=Wi(n,{relative:t}),u=l;return r!=="/"&&(u=l==="/"?r:Jt([r,l])),s.createHref({pathname:u,search:c,hash:i})}function ms(){return w.useContext($i)!=null}function dr(){return ms()||fe(!1),w.useContext($i).location}function bh(n){w.useContext(on).static||w.useLayoutEffect(n)}function kt(){let{isDataRoute:n}=w.useContext(jn);return n?rg():zp()}function zp(){ms()||fe(!1);let n=w.useContext(qi),{basename:e,future:t,navigator:r}=w.useContext(on),{matches:s}=w.useContext(jn),{pathname:i}=dr(),l=JSON.stringify(ph(s,t.v7_relativeSplatPath)),c=w.useRef(!1);return bh(()=>{c.current=!0}),w.useCallback(function(d,m){if(m===void 0&&(m={}),!c.current)return;if(typeof d=="number"){r.go(d);return}let g=gh(d,JSON.parse(l),i,m.relative==="path");n==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Jt([e,g.pathname])),(m.replace?r.replace:r.push)(g,m.state,m)},[e,r,l,i,n])}function Wi(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=w.useContext(on),{matches:s}=w.useContext(jn),{pathname:i}=dr(),l=JSON.stringify(ph(s,r.v7_relativeSplatPath));return w.useMemo(()=>gh(n,JSON.parse(l),i,t==="path"),[n,l,i,t])}function Gp(n,e){return Hp(n,e)}function Hp(n,e,t,r){ms()||fe(!1);let{navigator:s}=w.useContext(on),{matches:i}=w.useContext(jn),l=i[i.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let d=dr(),m;if(e){var g;let R=typeof e=="string"?hr(e):e;u==="/"||(g=R.pathname)!=null&&g.startsWith(u)||fe(!1),m=R}else m=d;let v=m.pathname||"/",T=v;if(u!=="/"){let R=u.replace(/^\//,"").split("/");T="/"+v.replace(/^\//,"").split("/").slice(R.length).join("/")}let A=xp(n,{pathname:T}),k=Xp(A&&A.map(R=>Object.assign({},R,{params:Object.assign({},c,R.params),pathname:Jt([u,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Jt([u,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,t,r);return e&&k?w.createElement($i.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Qt.Pop}},k):k}function Kp(){let n=ng(),e=qp(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),t?w.createElement("pre",{style:s},t):null,i)}const Qp=w.createElement(Kp,null);class Yp extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?w.createElement(jn.Provider,{value:this.props.routeContext},w.createElement(vh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jp(n){let{routeContext:e,match:t,children:r}=n,s=w.useContext(qi);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(jn.Provider,{value:e},r)}function Xp(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if((i=t)!=null&&i.errors)n=t.matches;else return null}let l=n,c=(s=t)==null?void 0:s.errors;if(c!=null){let m=l.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);m>=0||fe(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,d=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let g=l[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=m),g.route.id){let{loaderData:v,errors:T}=t,A=g.route.loader&&v[g.route.id]===void 0&&(!T||T[g.route.id]===void 0);if(g.route.lazy||A){u=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,g,v)=>{let T,A=!1,k=null,R=null;t&&(T=c&&g.route.id?c[g.route.id]:void 0,k=g.route.errorElement||Qp,u&&(d<0&&v===0?(sg("route-fallback",!1),A=!0,R=null):d===v&&(A=!0,R=g.route.hydrateFallbackElement||null)));let L=e.concat(l.slice(0,v+1)),P=()=>{let j;return T?j=k:A?j=R:g.route.Component?j=w.createElement(g.route.Component,null):g.route.element?j=g.route.element:j=m,w.createElement(Jp,{match:g,routeContext:{outlet:m,matches:L,isDataRoute:t!=null},children:j})};return t&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?w.createElement(Yp,{location:t.location,revalidation:t.revalidation,component:k,error:T,children:P(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):P()},null)}var wh=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(wh||{}),vi=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(vi||{});function Zp(n){let e=w.useContext(qi);return e||fe(!1),e}function eg(n){let e=w.useContext(_h);return e||fe(!1),e}function tg(n){let e=w.useContext(jn);return e||fe(!1),e}function xh(n){let e=tg(),t=e.matches[e.matches.length-1];return t.route.id||fe(!1),t.route.id}function ng(){var n;let e=w.useContext(vh),t=eg(vi.UseRouteError),r=xh(vi.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function rg(){let{router:n}=Zp(wh.UseNavigateStable),e=xh(vi.UseNavigateStable),t=w.useRef(!1);return bh(()=>{t.current=!0}),w.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,ss({fromRouteId:e},i)))},[n,e])}const kc={};function sg(n,e,t){!e&&!kc[n]&&(kc[n]=!0)}function X(n){fe(!1)}function ig(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Qt.Pop,navigator:i,static:l=!1,future:c}=n;ms()&&fe(!1);let u=e.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:u,navigator:i,static:l,future:ss({v7_relativeSplatPath:!1},c)}),[u,c,i,l]);typeof r=="string"&&(r=hr(r));let{pathname:m="/",search:g="",hash:v="",state:T=null,key:A="default"}=r,k=w.useMemo(()=>{let R=nr(m,u);return R==null?null:{location:{pathname:R,search:g,hash:v,state:T,key:A},navigationType:s}},[u,m,g,v,T,A,s]);return k==null?null:w.createElement(on.Provider,{value:d},w.createElement($i.Provider,{children:t,value:k}))}function og(n){let{children:e,location:t}=n;return Gp(Ho(e),t)}new Promise(()=>{});function Ho(n,e){e===void 0&&(e=[]);let t=[];return w.Children.forEach(n,(r,s)=>{if(!w.isValidElement(r))return;let i=[...e,s];if(r.type===w.Fragment){t.push.apply(t,Ho(r.props.children,i));return}r.type!==X&&fe(!1),!r.props.index||!r.props.children||fe(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ho(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},bi.apply(this,arguments)}function Eh(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function ag(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lg(n,e){return n.button===0&&(!e||e==="_self")&&!ag(n)}const cg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ug=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],hg="6";try{window.__reactRouterVersion=hg}catch{}const dg=w.createContext({isTransitioning:!1}),fg="startTransition",jc=hp[fg];function mg(n){let{basename:e,children:t,future:r,window:s}=n,i=w.useRef();i.current==null&&(i.current=vp({window:s,v5Compat:!0}));let l=i.current,[c,u]=w.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},m=w.useCallback(g=>{d&&jc?jc(()=>u(g)):u(g)},[u,d]);return w.useLayoutEffect(()=>l.listen(m),[l,m]),w.createElement(ig,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:l,future:r})}const pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ps=w.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:i,replace:l,state:c,target:u,to:d,preventScrollReset:m,unstable_viewTransition:g}=e,v=Eh(e,cg),{basename:T}=w.useContext(on),A,k=!1;if(typeof d=="string"&&gg.test(d)&&(A=d,pg))try{let j=new URL(window.location.href),D=d.startsWith("//")?new URL(j.protocol+d):new URL(d),V=nr(D.pathname,T);D.origin===j.origin&&V!=null?d=V+D.search+D.hash:k=!0}catch{}let R=Wp(d,{relative:s}),L=_g(d,{replace:l,state:c,target:u,preventScrollReset:m,relative:s,unstable_viewTransition:g});function P(j){r&&r(j),j.defaultPrevented||L(j)}return w.createElement("a",bi({},v,{href:A||R,onClick:k||i?r:P,ref:t,target:u}))}),ce=w.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:l=!1,style:c,to:u,unstable_viewTransition:d,children:m}=e,g=Eh(e,ug),v=Wi(u,{relative:g.relative}),T=dr(),A=w.useContext(_h),{navigator:k,basename:R}=w.useContext(on),L=A!=null&&vg(v)&&d===!0,P=k.encodeLocation?k.encodeLocation(v).pathname:v.pathname,j=T.pathname,D=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;s||(j=j.toLowerCase(),D=D?D.toLowerCase():null,P=P.toLowerCase()),D&&R&&(D=nr(D,R)||D);const V=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let O=j===P||!l&&j.startsWith(P)&&j.charAt(V)==="/",E=D!=null&&(D===P||!l&&D.startsWith(P)&&D.charAt(P.length)==="/"),y={isActive:O,isPending:E,isTransitioning:L},_=O?r:void 0,b;typeof i=="function"?b=i(y):b=[i,O?"active":null,E?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let I=typeof c=="function"?c(y):c;return w.createElement(ps,bi({},g,{"aria-current":_,className:b,ref:t,style:I,to:u,unstable_viewTransition:d}),typeof m=="function"?m(y):m)});var Ko;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ko||(Ko={}));var Dc;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Dc||(Dc={}));function yg(n){let e=w.useContext(qi);return e||fe(!1),e}function _g(n,e){let{target:t,replace:r,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:c}=e===void 0?{}:e,u=kt(),d=dr(),m=Wi(n,{relative:l});return w.useCallback(g=>{if(lg(g,t)){g.preventDefault();let v=r!==void 0?r:yi(d)===yi(m);u(n,{replace:v,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:c})}},[d,u,m,r,s,t,n,i,l,c])}function vg(n,e){e===void 0&&(e={});let t=w.useContext(dg);t==null&&fe(!1);let{basename:r}=yg(Ko.useViewTransitionState),s=Wi(n,{relative:e.relative});if(!t.isTransitioning)return!1;let i=nr(t.currentLocation.pathname,r)||t.currentLocation.pathname,l=nr(t.nextLocation.pathname,r)||t.nextLocation.pathname;return _i(s.pathname,l)!=null||_i(s.pathname,i)!=null}/**
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
 */const Th=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],l=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(l&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],l=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|l&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],l=s+1<n.length,c=l?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,T=d&63;u||(T=64,l||(v=64)),r.push(t[m],t[g],t[v],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Th(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new wg;const v=i<<2|c>>4;if(r.push(v),d!==64){const T=c<<4&240|d>>2;if(r.push(T),g!==64){const A=d<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xg=function(n){const e=Th(n);return Ih.encodeByteArray(e,!0)},wi=function(n){return xg(n).replace(/\./g,"")},Rh=function(n){try{return Ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Eg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tg=()=>Eg().__FIREBASE_DEFAULTS__,Ig=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rh(n[1]);return e&&JSON.parse(e)},zi=()=>{try{return Tg()||Ig()||Rg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nh=n=>{var e,t;return(t=(e=zi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ah=n=>{const e=Nh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Sh=()=>{var n;return(n=zi())===null||n===void 0?void 0:n.config},Ph=n=>{var e;return(e=zi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ng{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ch(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[wi(JSON.stringify(t)),wi(JSON.stringify(l)),c].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ag(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Sg(){var n;const e=(n=zi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kg(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jg(){return!Sg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dg(){try{return typeof indexedDB=="object"}catch{return!1}}function Og(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Lg="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Lg,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],l=i?Vg(i,r):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new yt(s,c,r)}}function Vg(n,e){return n.replace(Mg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mg=/\{\$([^}]+)}/g;function Ug(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],l=e[s];if(Oc(i)&&Oc(l)){if(!xi(i,l))return!1}else if(i!==l)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Oc(n){return n!==null&&typeof n=="object"}/**
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
 */function ys(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $r(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Wr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Fg(n,e){const t=new Bg(n,e);return t.subscribe.bind(t)}class Bg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Co),s.error===void 0&&(s.error=Co),s.complete===void 0&&(s.complete=Co);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Co(){}/**
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
 */function ae(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class $g{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ng;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zg(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&l.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const l=this.instances.get(s);return l&&e(l,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wg(n){return n===gn?void 0:n}function zg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $g(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Hg={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Kg=Y.INFO,Qg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Yg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Qg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=Kg,this._logHandler=Yg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Jg=(n,e)=>e.some(t=>n instanceof t);let Lc,Vc;function Xg(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zg(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kh=new WeakMap,Qo=new WeakMap,jh=new WeakMap,ko=new WeakMap,Na=new WeakMap;function ey(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",l)},i=()=>{t(Xt(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&kh.set(t,n)}).catch(()=>{}),Na.set(e,n),e}function ty(n){if(Qo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",l),n.removeEventListener("abort",l)},i=()=>{t(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",l),n.addEventListener("abort",l)});Qo.set(n,e)}let Yo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ny(n){Yo=n(Yo)}function ry(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(jo(this),e,...t);return jh.set(r,e.sort?e.sort():[e]),Xt(r)}:Zg().includes(n)?function(...e){return n.apply(jo(this),e),Xt(kh.get(this))}:function(...e){return Xt(n.apply(jo(this),e))}}function sy(n){return typeof n=="function"?ry(n):(n instanceof IDBTransaction&&ty(n),Jg(n,Xg())?new Proxy(n,Yo):n)}function Xt(n){if(n instanceof IDBRequest)return ey(n);if(ko.has(n))return ko.get(n);const e=sy(n);return e!==n&&(ko.set(n,e),Na.set(e,n)),e}const jo=n=>Na.get(n);function iy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const l=indexedDB.open(n,e),c=Xt(l);return r&&l.addEventListener("upgradeneeded",u=>{r(Xt(l.result),u.oldVersion,u.newVersion,Xt(l.transaction),u)}),t&&l.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const oy=["get","getKey","getAll","getAllKeys","count"],ay=["put","add","delete","clear"],Do=new Map;function Mc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Do.get(e))return Do.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ay.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oy.includes(t)))return;const i=async function(l,...c){const u=this.transaction(l,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Do.set(e,i),i}ny(n=>({...n,get:(e,t,r)=>Mc(e,t)||n.get(e,t,r),has:(e,t)=>!!Mc(e,t)||n.has(e,t)}));/**
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
 */class ly{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jo="@firebase/app",Uc="0.10.5";/**
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
 */const Tn=new Ra("@firebase/app"),uy="@firebase/app-compat",hy="@firebase/analytics-compat",dy="@firebase/analytics",fy="@firebase/app-check-compat",my="@firebase/app-check",py="@firebase/auth",gy="@firebase/auth-compat",yy="@firebase/database",_y="@firebase/database-compat",vy="@firebase/functions",by="@firebase/functions-compat",wy="@firebase/installations",xy="@firebase/installations-compat",Ey="@firebase/messaging",Ty="@firebase/messaging-compat",Iy="@firebase/performance",Ry="@firebase/performance-compat",Ny="@firebase/remote-config",Ay="@firebase/remote-config-compat",Sy="@firebase/storage",Py="@firebase/storage-compat",Cy="@firebase/firestore",ky="@firebase/vertexai-preview",jy="@firebase/firestore-compat",Dy="firebase",Oy="10.12.2";/**
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
 */const Xo="[DEFAULT]",Ly={[Jo]:"fire-core",[uy]:"fire-core-compat",[dy]:"fire-analytics",[hy]:"fire-analytics-compat",[my]:"fire-app-check",[fy]:"fire-app-check-compat",[py]:"fire-auth",[gy]:"fire-auth-compat",[yy]:"fire-rtdb",[_y]:"fire-rtdb-compat",[vy]:"fire-fn",[by]:"fire-fn-compat",[wy]:"fire-iid",[xy]:"fire-iid-compat",[Ey]:"fire-fcm",[Ty]:"fire-fcm-compat",[Iy]:"fire-perf",[Ry]:"fire-perf-compat",[Ny]:"fire-rc",[Ay]:"fire-rc-compat",[Sy]:"fire-gcs",[Py]:"fire-gcs-compat",[Cy]:"fire-fst",[jy]:"fire-fst-compat",[ky]:"fire-vertex","fire-js":"fire-js",[Dy]:"fire-js-all"};/**
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
 */const Ei=new Map,Vy=new Map,Zo=new Map;function Fc(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){const e=n.name;if(Zo.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,n);for(const t of Ei.values())Fc(t,n);for(const t of Vy.values())Fc(t,n);return!0}function Gi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rt(n){return n.settings!==void 0}/**
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
 */const My={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new gs("app","Firebase",My);/**
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
 */class Uy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Dn=Oy;function Dh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(t||(t=Sh()),!t)throw Zt.create("no-options");const i=Ei.get(s);if(i){if(xi(t,i.options)&&xi(r,i.config))return i;throw Zt.create("duplicate-app",{appName:s})}const l=new Gg(s);for(const u of Zo.values())l.addComponent(u);const c=new Uy(t,r,l);return Ei.set(s,c),c}function Aa(n=Xo){const e=Ei.get(n);if(!e&&n===Xo&&Sh())return Dh();if(!e)throw Zt.create("no-app",{appName:n});return e}function dt(n,e,t){var r;let s=(r=Ly[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),l=e.match(/\s|\//);if(i||l){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(c.join(" "));return}In(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fy="firebase-heartbeat-database",By=1,is="firebase-heartbeat-store";let Oo=null;function Oh(){return Oo||(Oo=iy(Fy,By,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(is)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Oo}async function qy(n){try{const t=(await Oh()).transaction(is),r=await t.objectStore(is).get(Lh(n));return await t.done,r}catch(e){if(e instanceof yt)Tn.warn(e.message);else{const t=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(t.message)}}}async function Bc(n,e){try{const r=(await Oh()).transaction(is,"readwrite");await r.objectStore(is).put(e,Lh(n)),await r.done}catch(t){if(t instanceof yt)Tn.warn(t.message);else{const r=Zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tn.warn(r.message)}}}function Lh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $y=1024,Wy=30*24*60*60*1e3;class zy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(l=>l.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=Wy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qc(),{heartbeatsToSend:r,unsentEntries:s}=Gy(this._heartbeatsCache.heartbeats),i=wi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qc(){return new Date().toISOString().substring(0,10)}function Gy(n,e=$y){const t=[];let r=n.slice();for(const s of n){const i=t.find(l=>l.agent===s.agent);if(i){if(i.dates.push(s.date),$c(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$c(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Hy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dg()?Og().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $c(n){return wi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ky(n){In(new tn("platform-logger",e=>new ly(e),"PRIVATE")),In(new tn("heartbeat",e=>new zy(e),"PRIVATE")),dt(Jo,Uc,n),dt(Jo,Uc,"esm2017"),dt("fire-js","")}Ky("");var Qy="firebase",Yy="10.12.2";/**
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
 */dt(Qy,Yy,"app");function Sa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Vh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jy=Vh,Mh=new gs("auth","Firebase",Vh());/**
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
 */const Ti=new Ra("@firebase/auth");function Xy(n,...e){Ti.logLevel<=Y.WARN&&Ti.warn(`Auth (${Dn}): ${n}`,...e)}function li(n,...e){Ti.logLevel<=Y.ERROR&&Ti.error(`Auth (${Dn}): ${n}`,...e)}/**
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
 */function et(n,...e){throw Ca(n,...e)}function st(n,...e){return Ca(n,...e)}function Pa(n,e,t){const r=Object.assign(Object.assign({},Jy()),{[e]:t});return new gs("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return Pa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zy(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(n,"argument-error"),Pa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ca(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Mh.create(n,...e)}function W(n,e,...t){if(!n)throw Ca(e,...t)}function xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw li(e),new Error(e)}function At(n,e){n||xt(e)}/**
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
 */function ea(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function e_(){return Wc()==="http:"||Wc()==="https:"}function Wc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function t_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e_()||Pg()||"connection"in navigator)?navigator.onLine:!0}function n_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class _s{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=Ag()||Cg()}get(){return t_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ka(n,e){At(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Uh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const r_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const s_=new _s(3e4,6e4);function jt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _t(n,e,t,r,s={}){return Fh(n,s,async()=>{let i={},l={};r&&(e==="GET"?l=r:i={body:JSON.stringify(r)});const c=ys(Object.assign({key:n.config.apiKey},l)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Uh.fetch()(Bh(n,n.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},i))})}async function Fh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},r_),e);try{const s=new o_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await i.json();if("needConfirmation"in l)throw ei(n,"account-exists-with-different-credential",l);if(i.ok&&!("errorMessage"in l))return l;{const c=i.ok?l.errorMessage:l.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",l);if(u==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",l);if(u==="USER_DISABLED")throw ei(n,"user-disabled",l);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Pa(n,m,d);et(n,m)}}catch(s){if(s instanceof yt)throw s;et(n,"network-request-failed",{message:String(s)})}}async function vs(n,e,t,r,s={}){const i=await _t(n,e,t,r,s);return"mfaPendingCredential"in i&&et(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Bh(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ka(n.config,s):`${n.config.apiScheme}://${s}`}function i_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),s_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ei(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=st(n,e,r);return s.customData._tokenResponse=t,s}function zc(n){return n!==void 0&&n.enterprise!==void 0}class a_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return i_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function l_(n,e){return _t(n,"GET","/v2/recaptchaConfig",jt(n,e))}/**
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
 */async function c_(n,e){return _t(n,"POST","/v1/accounts:delete",e)}async function qh(n,e){return _t(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u_(n,e=!1){const t=ae(n),r=await t.getIdToken(e),s=ja(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,l=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yr(Lo(s.auth_time)),issuedAtTime:Yr(Lo(s.iat)),expirationTime:Yr(Lo(s.exp)),signInProvider:l||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lo(n){return Number(n)*1e3}function ja(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rh(t);return s?JSON.parse(s):(li("Failed to decode base64 JWT payload"),null)}catch(s){return li("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gc(n){const e=ja(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yt&&h_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function h_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class d_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ta{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(n){var e;const t=n.auth,r=await n.getIdToken(),s=await rr(n,qh(t,{idToken:r}));W(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const l=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$h(i.providerUserInfo):[],c=m_(n.providerData,l),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ta(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function f_(n){const e=ae(n);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function m_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $h(n){return n.map(e=>{var{providerId:t}=e,r=Sa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function p_(n,e){const t=await Fh(n,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,l=Bh(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Uh.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function g_(n,e){return _t(n,"POST","/v2/accounts:revokeToken",jt(n,e))}/**
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
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Gc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await p_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,l=new Xn;return r&&(W(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),l.expirationTime=i),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function Wt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Sa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ta(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return u_(this,e)}reload(){return f_(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await rr(this,c_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,l,c,u,d,m;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(l=t.photoURL)!==null&&l!==void 0?l:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,R=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,L=(d=t.createdAt)!==null&&d!==void 0?d:void 0,P=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:j,emailVerified:D,isAnonymous:V,providerData:O,stsTokenManager:E}=t;W(j&&E,e,"internal-error");const y=Xn.fromJSON(this.name,E);W(typeof j=="string",e,"internal-error"),Wt(g,e.name),Wt(v,e.name),W(typeof D=="boolean",e,"internal-error"),W(typeof V=="boolean",e,"internal-error"),Wt(T,e.name),Wt(A,e.name),Wt(k,e.name),Wt(R,e.name),Wt(L,e.name),Wt(P,e.name);const _=new Et({uid:j,auth:e,email:v,emailVerified:D,displayName:g,isAnonymous:V,photoURL:A,phoneNumber:T,tenantId:k,stsTokenManager:y,createdAt:L,lastLoginAt:P});return O&&Array.isArray(O)&&(_.providerData=O.map(b=>Object.assign({},b))),R&&(_._redirectEventId=R),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new Xn;s.updateFromServerResponse(t);const i=new Et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ii(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$h(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Xn;c.updateFromIdToken(r);const u=new Et({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:l}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ta(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Hc=new Map;function Tt(n){At(n instanceof Function,"Expected a class definition");let e=Hc.get(n);return e?(At(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hc.set(n,e),e)}/**
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
 */class Wh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wh.type="NONE";const Kc=Wh;/**
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
 */function ci(n,e,t){return`firebase:${n}:${e}:${t}`}class Zn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ci(this.userKey,s.apiKey,i),this.fullPersistenceKey=ci("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zn(Tt(Kc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Tt(Kc);const l=ci(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(l);if(m){const g=Et._fromJSON(e,m);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Zn(i,e,r):(i=u[0],c&&await i._set(l,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(l)}catch{}})),new Zn(i,e,r))}}/**
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
 */function Qc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qh(e))return"Blackberry";if(Yh(e))return"Webos";if(Da(e))return"Safari";if((e.includes("chrome/")||Gh(e))&&!e.includes("edge/"))return"Chrome";if(Kh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zh(n=Pe()){return/firefox\//i.test(n)}function Da(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gh(n=Pe()){return/crios\//i.test(n)}function Hh(n=Pe()){return/iemobile/i.test(n)}function Kh(n=Pe()){return/android/i.test(n)}function Qh(n=Pe()){return/blackberry/i.test(n)}function Yh(n=Pe()){return/webos/i.test(n)}function Hi(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function y_(n=Pe()){var e;return Hi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function __(){return kg()&&document.documentMode===10}function Jh(n=Pe()){return Hi(n)||Kh(n)||Yh(n)||Qh(n)||/windows phone/i.test(n)||Hh(n)}function v_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xh(n,e=[]){let t;switch(n){case"Browser":t=Qc(Pe());break;case"Worker":t=`${Qc(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dn}/${r}`}/**
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
 */class b_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((l,c)=>{try{const u=e(i);l(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function w_(n,e={}){return _t(n,"GET","/v2/passwordPolicy",jt(n,e))}/**
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
 */const x_=6;class E_{constructor(e){var t,r,s,i;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:x_,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,l,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(l=u.containsNumericCharacter)!==null&&l!==void 0?l:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class T_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yc(this),this.idTokenSubscription=new Yc(this),this.beforeStateQueue=new b_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qh(this,{idToken:e}),r=await Et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!l||l===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(It(this));const t=e?ae(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w_(this),t=new E_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await g_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{l||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{l=!0,u()}}else{const u=e.addObserver(t);return()=>{l=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Xy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Dt(n){return ae(n)}class Yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fg(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I_(n){Ki=n}function Zh(n){return Ki.loadJS(n)}function R_(){return Ki.recaptchaEnterpriseScript}function N_(){return Ki.gapiScript}function A_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const S_="recaptcha-enterprise",P_="NO_RECAPTCHA";class C_{constructor(e){this.type=S_,this.auth=Dt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(l,c)=>{l_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new a_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,l(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,l,c){const u=window.grecaptcha;zc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{l(d)}).catch(()=>{l(P_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,l)=>{r(this.auth).then(c=>{if(!t&&zc(window.grecaptcha))s(c,i,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let u=R_();u.length!==0&&(u+=c),Zh(u).then(()=>{s(c,i,l)}).catch(d=>{l(d)})}}).catch(c=>{l(c)})})}}async function Jc(n,e,t,r=!1){const s=new C_(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:i}):Object.assign(l,{captchaResponse:i}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ri(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jc(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(i)})}/**
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
 */function k_(n,e){const t=Gi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(xi(i,e??{}))return s;et(s,"already-initialized")}return t.initialize({options:e})}function j_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function D_(n,e,t){const r=Dt(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=ed(e),{host:l,port:c}=O_(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${l}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||L_()}function ed(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function O_(n){const e=ed(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xc(r.substr(i.length+1))}}else{const[i,l]=r.split(":");return{host:i,port:Xc(l)}}}function Xc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function L_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}async function V_(n,e){return _t(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function M_(n,e){return vs(n,"POST","/v1/accounts:signInWithPassword",jt(n,e))}async function td(n,e){return _t(n,"POST","/v1/accounts:sendOobCode",jt(n,e))}async function U_(n,e){return td(n,e)}async function F_(n,e){return td(n,e)}/**
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
 */async function B_(n,e){return vs(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}async function q_(n,e){return vs(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}/**
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
 */class os extends Oa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new os(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new os(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ri(e,t,"signInWithPassword",M_);case"emailLink":return B_(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ri(e,r,"signUpPassword",V_);case"emailLink":return q_(e,{idToken:t,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function er(n,e){return vs(n,"POST","/v1/accounts:signInWithIdp",jt(n,e))}/**
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
 */const $_="http://localhost";class Rn extends Oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Sa(t,["providerId","signInMethod"]);if(!r||!s)return null;const l=new Rn(r,s);return l.idToken=i.idToken||void 0,l.accessToken=i.accessToken||void 0,l.secret=i.secret,l.nonce=i.nonce,l.pendingToken=i.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){const e={requestUri:$_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ys(t)}return e}}/**
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
 */function W_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z_(n){const e=$r(Wr(n)).link,t=e?$r(Wr(e)).deep_link_id:null,r=$r(Wr(n)).deep_link_id;return(r?$r(Wr(r)).link:null)||r||t||e||n}class La{constructor(e){var t,r,s,i,l,c;const u=$r(Wr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,g=W_((s=u.mode)!==null&&s!==void 0?s:null);W(d&&m&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(l=u.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=z_(e);try{return new La(t)}catch{return null}}}/**
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
 */class fr{constructor(){this.providerId=fr.PROVIDER_ID}static credential(e,t){return os._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=La.parseLink(t);return W(r,"argument-error"),os._fromEmailAndCode(e,r.code,r.tenantId)}}fr.PROVIDER_ID="password";fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bs extends Va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends bs{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class ct extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rn._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
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
 */class Gt extends bs{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Ht extends bs{constructor(){super("twitter.com")}static credential(e,t){return Rn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function G_(n,e){return vs(n,"POST","/v1/accounts:signUp",jt(n,e))}/**
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
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Et._fromIdTokenResponse(e,r,s),l=Zc(r);return new Nn({user:i,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Zc(r);return new Nn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Zc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ni extends yt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ni(e,t,r,s)}}function nd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(n,i,e,r):i})}async function H_(n,e,t=!1){const r=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Nn._forOperation(n,"link",r)}/**
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
 */async function K_(n,e,t=!1){const{auth:r}=n;if(rt(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await rr(n,nd(r,s,e,n),t);W(i.idToken,r,"internal-error");const l=ja(i.idToken);W(l,r,"internal-error");const{sub:c}=l;return W(n.uid===c,r,"user-mismatch"),Nn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&et(r,"user-mismatch"),i}}/**
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
 */async function rd(n,e,t=!1){if(rt(n.app))return Promise.reject(It(n));const r="signIn",s=await nd(n,r,e),i=await Nn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Q_(n,e){return rd(Dt(n),e)}/**
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
 */function sd(n,e,t){var r;W(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),W(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(W(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(W(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function id(n){const e=Dt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Y_(n,e,t){const r=Dt(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&sd(r,s,t),await Ri(r,s,"getOobCode",F_)}async function J_(n,e,t){if(rt(n.app))return Promise.reject(It(n));const r=Dt(n),l=await Ri(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",G_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&id(n),u}),c=await Nn._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function X_(n,e,t){return rt(n.app)?Promise.reject(It(n)):Q_(ae(n),fr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&id(n),r})}async function Z_(n,e){const t=ae(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&sd(t.auth,s,e);const{email:i}=await U_(t.auth,s);i!==n.email&&await n.reload()}/**
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
 */async function ev(n,e){return _t(n,"POST","/v1/accounts:update",e)}/**
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
 */async function tv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ae(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},l=await rr(r,ev(r.auth,i));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function nv(n,e,t,r){return ae(n).onIdTokenChanged(e,t,r)}function rv(n,e,t){return ae(n).beforeAuthStateChanged(e,t)}function Qi(n,e,t,r){return ae(n).onAuthStateChanged(e,t,r)}function Ai(n){return ae(n).signOut()}const Si="__sak";/**
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
 */class od{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Si,"1"),this.storage.removeItem(Si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sv(){const n=Pe();return Da(n)||Hi(n)}const iv=1e3,ov=10;class ad extends od{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sv()&&v_(),this.fallbackToPolling=Jh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,c,u)=>{this.notifyListeners(l,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},i=this.storage.getItem(r);__()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ov):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},iv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ad.type="LOCAL";const av=ad;/**
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
 */class ld extends od{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ld.type="SESSION";const cd=ld;/**
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
 */function lv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(l).map(async d=>d(t.origin,i)),u=await lv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yi.receivers=[];/**
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
 */function Ma(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class cv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,l;return new Promise((c,u)=>{const d=Ma("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function ft(){return window}function uv(n){ft().location.href=n}/**
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
 */function ud(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function hv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function fv(){return ud()?self:null}/**
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
 */const hd="firebaseLocalStorageDb",mv=1,Pi="firebaseLocalStorage",dd="fbase_key";class ws{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ji(n,e){return n.transaction([Pi],e?"readwrite":"readonly").objectStore(Pi)}function pv(){const n=indexedDB.deleteDatabase(hd);return new ws(n).toPromise()}function na(){const n=indexedDB.open(hd,mv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Pi,{keyPath:dd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Pi)?e(r):(r.close(),await pv(),e(await na()))})})}async function eu(n,e,t){const r=Ji(n,!0).put({[dd]:e,value:t});return new ws(r).toPromise()}async function gv(n,e){const t=Ji(n,!1).get(e),r=await new ws(t).toPromise();return r===void 0?null:r.value}function tu(n,e){const t=Ji(n,!0).delete(e);return new ws(t).toPromise()}const yv=800,_v=3;class fd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await na(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>_v)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ud()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yi._getInstance(fv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hv(),!this.activeServiceWorker)return;this.sender=new cv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await na();return await eu(e,Si,"1"),await tu(e,Si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>eu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>gv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ji(s,!1).getAll();return new ws(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fd.type="LOCAL";const vv=fd;new _s(3e4,6e4);/**
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
 */function md(n,e){return e?Tt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ua extends Oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bv(n){return rd(n.auth,new Ua(n),n.bypassAuthState)}function wv(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),K_(t,new Ua(n),n.bypassAuthState)}async function xv(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),H_(t,new Ua(n),n.bypassAuthState)}/**
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
 */class pd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:l,type:c}=e;if(l){this.reject(l);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bv;case"linkViaPopup":case"linkViaRedirect":return xv;case"reauthViaPopup":case"reauthViaRedirect":return wv;default:et(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ev=new _s(2e3,1e4);async function Tv(n,e,t){if(rt(n.app))return Promise.reject(st(n,"operation-not-supported-in-this-environment"));const r=Dt(n);Zy(n,e,Va);const s=md(r,t);return new bn(r,"signInViaPopup",e,s).executeNotNull()}class bn extends pd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=Ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ev.get())};e()}}bn.currentPopupAction=null;/**
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
 */const Iv="pendingRedirect",ui=new Map;class Rv extends pd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const r=await Nv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nv(n,e){const t=Pv(e),r=Sv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Av(n,e){ui.set(n._key(),e)}function Sv(n){return Tt(n._redirectPersistence)}function Pv(n){return ci(Iv,n.config.apiKey,n.name)}async function Cv(n,e,t=!1){if(rt(n.app))return Promise.reject(It(n));const r=Dt(n),s=md(r,e),l=await new Rv(r,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const kv=10*60*1e3;class jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(st(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kv&&this.cachedEventUids.clear(),this.cachedEventUids.has(nu(e))}saveEventToCache(e){this.cachedEventUids.add(nu(e)),this.lastProcessedEventTime=Date.now()}}function nu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gd(n);default:return!1}}/**
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
 */async function Ov(n,e={}){return _t(n,"GET","/v1/projects",e)}/**
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
 */const Lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vv=/^https?/;async function Mv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ov(n);for(const t of e)try{if(Uv(t))return}catch{}et(n,"unauthorized-domain")}function Uv(n){const e=ea(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!Vv.test(t))return!1;if(Lv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Fv=new _s(3e4,6e4);function ru(){const n=ft().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Bv(n){return new Promise((e,t)=>{var r,s,i;function l(){ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ru(),t(st(n,"network-request-failed"))},timeout:Fv.get()})}if(!((s=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ft().gapi)===null||i===void 0)&&i.load)l();else{const c=A_("iframefcb");return ft()[c]=()=>{gapi.load?l():t(st(n,"network-request-failed"))},Zh(`${N_()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw hi=null,e})}let hi=null;function qv(n){return hi=hi||Bv(n),hi}/**
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
 */const $v=new _s(5e3,15e3),Wv="__/auth/iframe",zv="emulator/auth/iframe",Gv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kv(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ka(e,zv):`https://${n.config.authDomain}/${Wv}`,r={apiKey:e.apiKey,appName:n.name,v:Dn},s=Hv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ys(r).slice(1)}`}async function Qv(n){const e=await qv(n),t=ft().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:Kv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const l=st(n,"network-request-failed"),c=ft().setTimeout(()=>{i(l)},$v.get());function u(){ft().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(l)})}))}/**
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
 */const Yv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jv=500,Xv=600,Zv="_blank",eb="http://localhost";class su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tb(n,e,t,r=Jv,s=Xv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Yv),{width:r.toString(),height:s.toString(),top:i,left:l}),d=Pe().toLowerCase();t&&(c=Gh(d)?Zv:t),zh(d)&&(e=e||eb,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[T,A])=>`${v}${T}=${A},`,"");if(y_(d)&&c!=="_self")return nb(e||"",c),new su(null);const g=window.open(e||"",c,m);W(g,n,"popup-blocked");try{g.focus()}catch{}return new su(g)}function nb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const rb="__/auth/handler",sb="emulator/auth/handler",ib=encodeURIComponent("fac");async function iu(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Dn,eventId:s};if(e instanceof Va){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Ug(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries(i||{}))l[m]=g}if(e instanceof bs){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(l.scopes=m.join(","))}n.tenantId&&(l.tid=n.tenantId);const c=l;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${ib}=${encodeURIComponent(u)}`:"";return`${ob(n)}?${ys(c).slice(1)}${d}`}function ob({config:n}){return n.emulator?ka(n,sb):`https://${n.authDomain}/${rb}`}/**
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
 */const Vo="webStorageSupport";class ab{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cd,this._completeRedirectFn=Cv,this._overrideRedirectResult=Av}async _openPopup(e,t,r,s){var i;At((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const l=await iu(e,t,r,ea(),s);return tb(e,l,Ma())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await iu(e,t,r,ea(),s);return uv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(At(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Qv(e),r=new jv(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vo,{type:Vo},s=>{var i;const l=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vo];l!==void 0&&t(!!l),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jh()||Da()||Hi()}}const lb=ab;var ou="@firebase/auth",au="1.7.4";/**
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
 */class cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ub(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hb(n){In(new tn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;W(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:l,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xh(n)},d=new T_(r,s,i,u);return j_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),In(new tn("auth-internal",e=>{const t=Dt(e.getProvider("auth").getImmediate());return(r=>new cb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(ou,au,ub(n)),dt(ou,au,"esm2017")}/**
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
 */const db=5*60,fb=Ph("authIdTokenMaxAge")||db;let lu=null;const mb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>fb)return;const s=t==null?void 0:t.token;lu!==s&&(lu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pb(n=Aa()){const e=Gi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=k_(n,{popupRedirectResolver:lb,persistence:[vv,av,cd]}),r=Ph("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const l=mb(i.toString());rv(t,l,()=>l(t.currentUser)),nv(t,c=>l(c))}}const s=Nh("auth");return s&&D_(t,`http://${s}`),t}function gb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}I_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=st("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",gb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hb("Browser");var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,yd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function _(){}_.prototype=y.prototype,E.D=y.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(b,I,N){for(var x=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)x[xe-2]=arguments[xe];return y.prototype[I].apply(b,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)b[I]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(I=0;16>I;++I)b[I]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=E.g[0],_=E.g[1],I=E.g[2];var N=E.g[3],x=y+(N^_&(I^N))+b[0]+3614090360&4294967295;y=_+(x<<7&4294967295|x>>>25),x=N+(I^y&(_^I))+b[1]+3905402710&4294967295,N=y+(x<<12&4294967295|x>>>20),x=I+(_^N&(y^_))+b[2]+606105819&4294967295,I=N+(x<<17&4294967295|x>>>15),x=_+(y^I&(N^y))+b[3]+3250441966&4294967295,_=I+(x<<22&4294967295|x>>>10),x=y+(N^_&(I^N))+b[4]+4118548399&4294967295,y=_+(x<<7&4294967295|x>>>25),x=N+(I^y&(_^I))+b[5]+1200080426&4294967295,N=y+(x<<12&4294967295|x>>>20),x=I+(_^N&(y^_))+b[6]+2821735955&4294967295,I=N+(x<<17&4294967295|x>>>15),x=_+(y^I&(N^y))+b[7]+4249261313&4294967295,_=I+(x<<22&4294967295|x>>>10),x=y+(N^_&(I^N))+b[8]+1770035416&4294967295,y=_+(x<<7&4294967295|x>>>25),x=N+(I^y&(_^I))+b[9]+2336552879&4294967295,N=y+(x<<12&4294967295|x>>>20),x=I+(_^N&(y^_))+b[10]+4294925233&4294967295,I=N+(x<<17&4294967295|x>>>15),x=_+(y^I&(N^y))+b[11]+2304563134&4294967295,_=I+(x<<22&4294967295|x>>>10),x=y+(N^_&(I^N))+b[12]+1804603682&4294967295,y=_+(x<<7&4294967295|x>>>25),x=N+(I^y&(_^I))+b[13]+4254626195&4294967295,N=y+(x<<12&4294967295|x>>>20),x=I+(_^N&(y^_))+b[14]+2792965006&4294967295,I=N+(x<<17&4294967295|x>>>15),x=_+(y^I&(N^y))+b[15]+1236535329&4294967295,_=I+(x<<22&4294967295|x>>>10),x=y+(I^N&(_^I))+b[1]+4129170786&4294967295,y=_+(x<<5&4294967295|x>>>27),x=N+(_^I&(y^_))+b[6]+3225465664&4294967295,N=y+(x<<9&4294967295|x>>>23),x=I+(y^_&(N^y))+b[11]+643717713&4294967295,I=N+(x<<14&4294967295|x>>>18),x=_+(N^y&(I^N))+b[0]+3921069994&4294967295,_=I+(x<<20&4294967295|x>>>12),x=y+(I^N&(_^I))+b[5]+3593408605&4294967295,y=_+(x<<5&4294967295|x>>>27),x=N+(_^I&(y^_))+b[10]+38016083&4294967295,N=y+(x<<9&4294967295|x>>>23),x=I+(y^_&(N^y))+b[15]+3634488961&4294967295,I=N+(x<<14&4294967295|x>>>18),x=_+(N^y&(I^N))+b[4]+3889429448&4294967295,_=I+(x<<20&4294967295|x>>>12),x=y+(I^N&(_^I))+b[9]+568446438&4294967295,y=_+(x<<5&4294967295|x>>>27),x=N+(_^I&(y^_))+b[14]+3275163606&4294967295,N=y+(x<<9&4294967295|x>>>23),x=I+(y^_&(N^y))+b[3]+4107603335&4294967295,I=N+(x<<14&4294967295|x>>>18),x=_+(N^y&(I^N))+b[8]+1163531501&4294967295,_=I+(x<<20&4294967295|x>>>12),x=y+(I^N&(_^I))+b[13]+2850285829&4294967295,y=_+(x<<5&4294967295|x>>>27),x=N+(_^I&(y^_))+b[2]+4243563512&4294967295,N=y+(x<<9&4294967295|x>>>23),x=I+(y^_&(N^y))+b[7]+1735328473&4294967295,I=N+(x<<14&4294967295|x>>>18),x=_+(N^y&(I^N))+b[12]+2368359562&4294967295,_=I+(x<<20&4294967295|x>>>12),x=y+(_^I^N)+b[5]+4294588738&4294967295,y=_+(x<<4&4294967295|x>>>28),x=N+(y^_^I)+b[8]+2272392833&4294967295,N=y+(x<<11&4294967295|x>>>21),x=I+(N^y^_)+b[11]+1839030562&4294967295,I=N+(x<<16&4294967295|x>>>16),x=_+(I^N^y)+b[14]+4259657740&4294967295,_=I+(x<<23&4294967295|x>>>9),x=y+(_^I^N)+b[1]+2763975236&4294967295,y=_+(x<<4&4294967295|x>>>28),x=N+(y^_^I)+b[4]+1272893353&4294967295,N=y+(x<<11&4294967295|x>>>21),x=I+(N^y^_)+b[7]+4139469664&4294967295,I=N+(x<<16&4294967295|x>>>16),x=_+(I^N^y)+b[10]+3200236656&4294967295,_=I+(x<<23&4294967295|x>>>9),x=y+(_^I^N)+b[13]+681279174&4294967295,y=_+(x<<4&4294967295|x>>>28),x=N+(y^_^I)+b[0]+3936430074&4294967295,N=y+(x<<11&4294967295|x>>>21),x=I+(N^y^_)+b[3]+3572445317&4294967295,I=N+(x<<16&4294967295|x>>>16),x=_+(I^N^y)+b[6]+76029189&4294967295,_=I+(x<<23&4294967295|x>>>9),x=y+(_^I^N)+b[9]+3654602809&4294967295,y=_+(x<<4&4294967295|x>>>28),x=N+(y^_^I)+b[12]+3873151461&4294967295,N=y+(x<<11&4294967295|x>>>21),x=I+(N^y^_)+b[15]+530742520&4294967295,I=N+(x<<16&4294967295|x>>>16),x=_+(I^N^y)+b[2]+3299628645&4294967295,_=I+(x<<23&4294967295|x>>>9),x=y+(I^(_|~N))+b[0]+4096336452&4294967295,y=_+(x<<6&4294967295|x>>>26),x=N+(_^(y|~I))+b[7]+1126891415&4294967295,N=y+(x<<10&4294967295|x>>>22),x=I+(y^(N|~_))+b[14]+2878612391&4294967295,I=N+(x<<15&4294967295|x>>>17),x=_+(N^(I|~y))+b[5]+4237533241&4294967295,_=I+(x<<21&4294967295|x>>>11),x=y+(I^(_|~N))+b[12]+1700485571&4294967295,y=_+(x<<6&4294967295|x>>>26),x=N+(_^(y|~I))+b[3]+2399980690&4294967295,N=y+(x<<10&4294967295|x>>>22),x=I+(y^(N|~_))+b[10]+4293915773&4294967295,I=N+(x<<15&4294967295|x>>>17),x=_+(N^(I|~y))+b[1]+2240044497&4294967295,_=I+(x<<21&4294967295|x>>>11),x=y+(I^(_|~N))+b[8]+1873313359&4294967295,y=_+(x<<6&4294967295|x>>>26),x=N+(_^(y|~I))+b[15]+4264355552&4294967295,N=y+(x<<10&4294967295|x>>>22),x=I+(y^(N|~_))+b[6]+2734768916&4294967295,I=N+(x<<15&4294967295|x>>>17),x=_+(N^(I|~y))+b[13]+1309151649&4294967295,_=I+(x<<21&4294967295|x>>>11),x=y+(I^(_|~N))+b[4]+4149444226&4294967295,y=_+(x<<6&4294967295|x>>>26),x=N+(_^(y|~I))+b[11]+3174756917&4294967295,N=y+(x<<10&4294967295|x>>>22),x=I+(y^(N|~_))+b[2]+718787259&4294967295,I=N+(x<<15&4294967295|x>>>17),x=_+(N^(I|~y))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(I+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var _=y-this.blockSize,b=this.B,I=this.h,N=0;N<y;){if(I==0)for(;N<=_;)s(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<y;)if(b[I++]=E.charCodeAt(N++),I==this.blockSize){s(this,b),I=0;break}}else for(;N<y;)if(b[I++]=E[N++],I==this.blockSize){s(this,b),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var _=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=_&255,_/=256;for(this.u(E),E=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)E[_++]=this.g[y]>>>b&255;return E};function i(E,y){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=y(E)}function l(E,y){this.h=y;for(var _=[],b=!0,I=E.length-1;0<=I;I--){var N=E[I]|0;b&&N==y||(_[I]=N,b=!1)}this.g=_}var c={};function u(E){return-128<=E&&128>E?i(E,function(y){return new l([y|0],0>y?-1:0)}):new l([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return R(d(-E));for(var y=[],_=1,b=0;E>=_;b++)y[b]=E/_|0,_*=4294967296;return new l(y,0)}function m(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return R(m(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(y,8)),b=g,I=0;I<E.length;I+=8){var N=Math.min(8,E.length-I),x=parseInt(E.substring(I,I+N),y);8>N?(N=d(Math.pow(y,N)),b=b.j(N).add(d(x))):(b=b.j(_),b=b.add(d(x)))}return b}var g=u(0),v=u(1),T=u(16777216);n=l.prototype,n.m=function(){if(k(this))return-R(this).m();for(var E=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);E+=(0<=b?b:4294967296+b)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(k(this))return"-"+R(this).toString(E);for(var y=d(Math.pow(E,6)),_=this,b="";;){var I=D(_,y).g;_=L(_,I.j(y));var N=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=I,A(_))return N+b;for(;6>N.length;)N="0"+N;b=N+b}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=L(this,E),k(E)?-1:A(E)?0:1};function R(E){for(var y=E.g.length,_=[],b=0;b<y;b++)_[b]=~E.g[b];return new l(_,~E.h).add(v)}n.abs=function(){return k(this)?R(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],b=0,I=0;I<=y;I++){var N=b+(this.i(I)&65535)+(E.i(I)&65535),x=(N>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);b=x>>>16,N&=65535,x&=65535,_[I]=x<<16|N}return new l(_,_[_.length-1]&-2147483648?-1:0)};function L(E,y){return E.add(R(y))}n.j=function(E){if(A(this)||A(E))return g;if(k(this))return k(E)?R(this).j(R(E)):R(R(this).j(E));if(k(E))return R(this.j(R(E)));if(0>this.l(T)&&0>E.l(T))return d(this.m()*E.m());for(var y=this.g.length+E.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var I=0;I<E.g.length;I++){var N=this.i(b)>>>16,x=this.i(b)&65535,xe=E.i(I)>>>16,Ee=E.i(I)&65535;_[2*b+2*I]+=x*Ee,P(_,2*b+2*I),_[2*b+2*I+1]+=N*Ee,P(_,2*b+2*I+1),_[2*b+2*I+1]+=x*xe,P(_,2*b+2*I+1),_[2*b+2*I+2]+=N*xe,P(_,2*b+2*I+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new l(_,0)};function P(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function j(E,y){this.g=E,this.h=y}function D(E,y){if(A(y))throw Error("division by zero");if(A(E))return new j(g,g);if(k(E))return y=D(R(E),y),new j(R(y.g),R(y.h));if(k(y))return y=D(E,R(y)),new j(R(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=v,b=y;0>=b.l(E);)_=V(_),b=V(b);var I=O(_,1),N=O(b,1);for(b=O(b,2),_=O(_,2);!A(b);){var x=N.add(b);0>=x.l(E)&&(I=I.add(_),N=x),b=O(b,1),_=O(_,1)}return y=L(E,I.j(y)),new j(I,y)}for(I=g;0<=E.l(y);){for(_=Math.max(1,Math.floor(E.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),N=d(_),x=N.j(y);k(x)||0<x.l(E);)_-=b,N=d(_),x=N.j(y);A(N)&&(N=v),I=I.add(N),E=L(E,x)}return new j(I,E)}n.A=function(E){return D(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&E.i(b);return new l(_,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|E.i(b);return new l(_,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^E.i(b);return new l(_,this.h^E.h)};function V(E){for(var y=E.g.length+1,_=[],b=0;b<y;b++)_[b]=E.i(b)<<1|E.i(b-1)>>>31;return new l(_,E.h)}function O(E,y){var _=y>>5;y%=32;for(var b=E.g.length-_,I=[],N=0;N<b;N++)I[N]=0<y?E.i(N+_)>>>y|E.i(N+_+1)<<32-y:E.i(N+_);return new l(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yd=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=m,xn=l}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _d,vd,zr,bd,di,ra,wd,xd,Ed;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ti=="object"&&ti];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in f))break e;f=f[S]}o=o[o.length-1],p=f[o],h=h(p),h!=p&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,p=!1,S={next:function(){if(!p&&f<o.length){var C=f++;return{value:h(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function d(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function m(o,h,f){return o.call.apply(o.bind,arguments)}function g(o,h,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(h,S)}}return function(){return o.apply(h,arguments)}}function v(o,h,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,v.apply(null,arguments)}function T(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var F=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)F[ne-2]=arguments[ne];return h.prototype[S].apply(p,F)}}function k(o){const h=o.length;if(0<h){const f=Array(h);for(let p=0;p<h;p++)f[p]=o[p];return f}return[]}function R(o,h){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(u(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let F=0;F<C;F++)o[S+F]=p[F]}else o.push(p)}}class L{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var V=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function O(o,h,f){for(const p in o)h.call(f,o[p],p,o)}function E(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function y(o){const h={};for(const f in o)h[f]=o[f];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,h){let f,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(f in p)o[f]=p[f];for(let C=0;C<_.length;C++)f=_[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function I(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function N(o){c.setTimeout(()=>{throw o},0)}function x(){var o=at;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class xe{constructor(){this.h=this.g=null}add(h,f){const p=Ee.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Ee=new L(()=>new Lt,o=>o.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Ye=!1,at=new xe,xr=()=>{const o=c.Promise.resolve(void 0);Ve=()=>{o.then(ks)}};var ks=()=>{for(var o;o=x();){try{o.h.call(o.g)}catch(f){N(f)}var h=Ee;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}Ye=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Vt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return o}();function Mt(o,h){if(me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(V){e:{try{D(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ve[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Mt.aa.h.call(this)}}A(Mt,me);var ve={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),vt=0;function js(o,h,f,p,S){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=S,this.key=++vt,this.da=this.fa=!1}function cn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Me(o){this.src=o,this.g={},this.h=0}Me.prototype.add=function(o,h,f,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var F=un(o,h,p,S);return-1<F?(h=o[F],f||(h.fa=!1)):(h=new js(h,this.src,C,!!p,S),h.fa=f,o.push(h)),h};function qe(o,h){var f=h.type;if(f in o.g){var p=o.g[f],S=Array.prototype.indexOf.call(p,h,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(cn(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function un(o,h,f,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==h&&C.capture==!!f&&C.ha==p)return S}return-1}var Un="closure_lm_"+(1e6*Math.random()|0),tt={};function Ds(o,h,f,p,S){if(p&&p.once)return Ls(o,h,f,p,S);if(Array.isArray(h)){for(var C=0;C<h.length;C++)Ds(o,h[C],f,p,S);return null}return f=Tr(f),o&&o[ln]?o.K(h,f,d(p)?!!p.capture:!!p,S):Os(o,h,f,!1,p,S)}function Os(o,h,f,p,S,C){if(!h)throw Error("Invalid event type");var F=d(S)?!!S.capture:!!S,ne=Ut(o);if(ne||(o[Un]=ne=new Me(o)),f=ne.add(h,f,p,F,C),f.proxy)return f;if(p=mo(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)Vt||(S=F),S===void 0&&(S=!1),o.addEventListener(h.toString(),p,S);else if(o.attachEvent)o.attachEvent(Ms(h.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function mo(){function o(f){return h.call(o.src,o.listener,f)}const h=Us;return o}function Ls(o,h,f,p,S){if(Array.isArray(h)){for(var C=0;C<h.length;C++)Ls(o,h[C],f,p,S);return null}return f=Tr(f),o&&o[ln]?o.L(h,f,d(p)?!!p.capture:!!p,S):Os(o,h,f,!0,p,S)}function Vs(o,h,f,p,S){if(Array.isArray(h))for(var C=0;C<h.length;C++)Vs(o,h[C],f,p,S);else p=d(p)?!!p.capture:!!p,f=Tr(f),o&&o[ln]?(o=o.i,h=String(h).toString(),h in o.g&&(C=o.g[h],f=un(C,f,p,S),-1<f&&(cn(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[h],o.h--)))):o&&(o=Ut(o))&&(h=o.g[h.toString()],o=-1,h&&(o=un(h,f,p,S)),(f=-1<o?h[o]:null)&&Er(f))}function Er(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[ln])qe(h.i,o);else{var f=o.type,p=o.proxy;h.removeEventListener?h.removeEventListener(f,p,o.capture):h.detachEvent?h.detachEvent(Ms(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=Ut(h))?(qe(f,o),f.h==0&&(f.src=null,h[Un]=null)):cn(o)}}}function Ms(o){return o in tt?tt[o]:tt[o]="on"+o}function Us(o,h){if(o.da)o=!0;else{h=new Mt(h,this);var f=o.listener,p=o.ha||o.src;o.fa&&Er(o),o=f.call(p,h)}return o}function Ut(o){return o=o[Un],o instanceof Me?o:null}var Fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tr(o){return typeof o=="function"?o:(o[Fn]||(o[Fn]=function(h){return o.handleEvent(h)}),o[Fn])}function be(){lt.call(this),this.i=new Me(this),this.M=this,this.F=null}A(be,lt),be.prototype[ln]=!0,be.prototype.removeEventListener=function(o,h,f,p){Vs(this,o,h,f,p)};function Te(o,h){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=h.type||h,typeof h=="string")h=new me(h,o);else if(h instanceof me)h.target=h.target||o;else{var S=h;h=new me(p,o),b(h,S)}if(S=!0,f)for(var C=f.length-1;0<=C;C--){var F=h.g=f[C];S=hn(F,p,!0,h)&&S}if(F=h.g=o,S=hn(F,p,!0,h)&&S,S=hn(F,p,!1,h)&&S,f)for(C=0;C<f.length;C++)F=h.g=f[C],S=hn(F,p,!1,h)&&S}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],p=0;p<f.length;p++)cn(f[p]);delete o.g[h],o.h--}}this.F=null},be.prototype.K=function(o,h,f,p){return this.i.add(String(o),h,!1,f,p)},be.prototype.L=function(o,h,f,p){return this.i.add(String(o),h,!0,f,p)};function hn(o,h,f,p){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,C=0;C<h.length;++C){var F=h[C];if(F&&!F.da&&F.capture==f){var ne=F.listener,Ie=F.ha||F.src;F.fa&&qe(o.i,F),S=ne.call(Ie,p)!==!1&&S}}return S&&!p.defaultPrevented}function Bn(o,h,f){if(typeof o=="function")f&&(o=v(o,f));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(o,h||0)}function Ir(o){o.g=Bn(()=>{o.g=null,o.i&&(o.i=!1,Ir(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class G extends lt{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ir(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){lt.call(this),this.h=o,this.g={}}A(Z,lt);var Je=[];function Ft(o){O(o.g,function(h,f){this.g.hasOwnProperty(f)&&Er(h)},o),o.g={}}Z.prototype.N=function(){Z.aa.N.call(this),Ft(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rr=c.JSON.stringify,Um=c.JSON.parse,Fm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function po(){}po.prototype.h=null;function Ll(o){return o.h||(o.h=o.i())}function Vl(){}var Nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function go(){me.call(this,"d")}A(go,me);function yo(){me.call(this,"c")}A(yo,me);var dn={},Ml=null;function Fs(){return Ml=Ml||new be}dn.La="serverreachability";function Ul(o){me.call(this,dn.La,o)}A(Ul,me);function Ar(o){const h=Fs();Te(h,new Ul(h))}dn.STAT_EVENT="statevent";function Fl(o,h){me.call(this,dn.STAT_EVENT,o),this.stat=h}A(Fl,me);function Ue(o){const h=Fs();Te(h,new Fl(h,o))}dn.Ma="timingevent";function Bl(o,h){me.call(this,dn.Ma,o),this.size=h}A(Bl,me);function Sr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},h)}function Pr(){this.g=!0}Pr.prototype.xa=function(){this.g=!1};function Bm(o,h,f,p,S,C){o.info(function(){if(o.g)if(C)for(var F="",ne=C.split("&"),Ie=0;Ie<ne.length;Ie++){var ee=ne[Ie].split("=");if(1<ee.length){var Ce=ee[0];ee=ee[1];var ke=Ce.split("_");F=2<=ke.length&&ke[1]=="type"?F+(Ce+"="+ee+"&"):F+(Ce+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+h+`
`+f+`
`+F})}function qm(o,h,f,p,S,C,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+h+`
`+f+`
`+C+" "+F})}function qn(o,h,f,p){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+Wm(o,f)+(p?" "+p:"")})}function $m(o,h){o.info(function(){return"TIMEOUT: "+h})}Pr.prototype.info=function(){};function Wm(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return Rr(f)}catch{return h}}var Bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_o;function qs(){}A(qs,po),qs.prototype.g=function(){return new XMLHttpRequest},qs.prototype.i=function(){return{}},_o=new qs;function Bt(o,h,f,p){this.j=o,this.i=h,this.l=f,this.R=p||1,this.U=new Z(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $l}function $l(){this.i=null,this.g="",this.h=!1}var Wl={},vo={};function bo(o,h,f){o.L=1,o.v=Gs(bt(h)),o.m=f,o.P=!0,zl(o,null)}function zl(o,h){o.F=Date.now(),$s(o),o.A=bt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ic(f.i,"t",p),o.C=0,f=o.j.J,o.h=new $l,o.g=Ec(o.j,f?h:null,!o.m),0<o.O&&(o.M=new G(v(o.Y,o,o.g),o.O)),h=o.U,f=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Je[0]=S.toString()),S=Je);for(var C=0;C<S.length;C++){var F=Ds(f,S[C],p||h.handleEvent,!1,h.h||h);if(!F)break;h.g[F.key]=F}h=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),Ar(),Bm(o.i,o.u,o.A,o.l,o.R,o.m)}Bt.prototype.ca=function(o){o=o.target;const h=this.M;h&&wt(o)==3?h.j():this.Y(o)},Bt.prototype.Y=function(o){try{if(o==this.g)e:{const ke=wt(this.g);var h=this.g.Ba();const zn=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||dc(this.g)))){this.J||ke!=4||h==7||(h==8||0>=zn?Ar(3):Ar(2)),wo(this);var f=this.g.Z();this.X=f;t:if(Gl(this)){var p=dc(this.g);o="";var S=p.length,C=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Cr(this);var F="";break t}this.h.i=new c.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,o+=this.h.i.decode(p[h],{stream:!(C&&h==S-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,qm(this.i,this.u,this.A,this.l,this.R,ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,Ie=this.g;if((ne=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(ne)){var ee=ne;break t}}ee=null}if(f=ee)qn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,f);else{this.o=!1,this.s=3,Ue(12),fn(this),Cr(this);break e}}if(this.P){f=!0;let nt;for(;!this.J&&this.C<F.length;)if(nt=zm(this,F),nt==vo){ke==4&&(this.s=4,Ue(14),f=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Wl){this.s=4,Ue(15),qn(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else qn(this.i,this.l,nt,null),xo(this,nt);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||F.length!=0||this.h.h||(this.s=1,Ue(16),f=!1),this.o=this.o&&f,!f)qn(this.i,this.l,F,"[Invalid Chunked Response]"),fn(this),Cr(this);else if(0<F.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Ao(Ce),Ce.M=!0,Ue(11))}}else qn(this.i,this.l,F,null),xo(this,F);ke==4&&fn(this),this.o&&!this.J&&(ke==4?vc(this.j,this):(this.o=!1,$s(this)))}else lp(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),fn(this),Cr(this)}}}catch{}finally{}};function Gl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function zm(o,h){var f=o.C,p=h.indexOf(`
`,f);return p==-1?vo:(f=Number(h.substring(f,p)),isNaN(f)?Wl:(p+=1,p+f>h.length?vo:(h=h.slice(p,p+f),o.C=p+f,h)))}Bt.prototype.cancel=function(){this.J=!0,fn(this)};function $s(o){o.S=Date.now()+o.I,Hl(o,o.I)}function Hl(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Sr(v(o.ba,o),h)}function wo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?($m(this.i,this.A),this.L!=2&&(Ar(),Ue(17)),fn(this),this.s=2,Cr(this)):Hl(this,this.S-o)};function Cr(o){o.j.G==0||o.J||vc(o.j,o)}function fn(o){wo(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,Ft(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function xo(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||Eo(f.h,o))){if(!o.K&&Eo(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Js(f),Qs(f);else break e;No(f),Ue(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Sr(v(f.Za,f),6e3));if(1>=Yl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else pn(f,11)}else if((o.K||f.g==o)&&Js(f),!P(h))for(S=f.Da.g.parse(h),h=0;h<S.length;h++){let ee=S[h];if(f.T=ee[0],ee=ee[1],f.G==2)if(ee[0]=="c"){f.K=ee[1],f.ia=ee[2];const Ce=ee[3];Ce!=null&&(f.la=Ce,f.j.info("VER="+f.la));const ke=ee[4];ke!=null&&(f.Aa=ke,f.j.info("SVER="+f.Aa));const zn=ee[5];zn!=null&&typeof zn=="number"&&0<zn&&(p=1.5*zn,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const nt=o.g;if(nt){const Zs=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var C=p.h;C.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(To(C,C.h),C.h=null))}if(p.D){const So=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;So&&(p.ya=So,se(p.I,p.D,So))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var F=o;if(p.qa=xc(p,p.J?p.ia:null,p.W),F.K){Jl(p.h,F);var ne=F,Ie=p.L;Ie&&(ne.I=Ie),ne.B&&(wo(ne),$s(ne)),p.g=F}else yc(p);0<f.i.length&&Ys(f)}else ee[0]!="stop"&&ee[0]!="close"||pn(f,7);else f.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?pn(f,7):Ro(f):ee[0]!="noop"&&f.l&&f.l.ta(ee),f.v=0)}}Ar(4)}catch{}}var Gm=class{constructor(o,h){this.g=o,this.map=h}};function Kl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ql(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yl(o){return o.h?1:o.g?o.g.size:0}function Eo(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function To(o,h){o.g?o.g.add(h):o.h=h}function Jl(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Kl.prototype.cancel=function(){if(this.i=Xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return k(o.i)}function Hm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var h=[],f=o.length,p=0;p<f;p++)h.push(o[p]);return h}h=[],f=0;for(p in o)h[f++]=o[p];return h}function Km(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const p in o)h[f++]=p;return h}}}function Zl(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=Km(o),p=Hm(o),S=p.length,C=0;C<S;C++)h.call(void 0,p[C],f&&f[C],o)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qm(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),S=null;if(0<=p){var C=o[f].substring(0,p);S=o[f].substring(p+1)}else C=o[f];h(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function mn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof mn){this.h=o.h,Ws(this,o.j),this.o=o.o,this.g=o.g,zs(this,o.s),this.l=o.l;var h=o.i,f=new Dr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),tc(this,f),this.m=o.m}else o&&(h=String(o).match(ec))?(this.h=!1,Ws(this,h[1]||"",!0),this.o=kr(h[2]||""),this.g=kr(h[3]||"",!0),zs(this,h[4]),this.l=kr(h[5]||"",!0),tc(this,h[6]||"",!0),this.m=kr(h[7]||"")):(this.h=!1,this.i=new Dr(null,this.h))}mn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(jr(h,nc,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(jr(h,nc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(jr(f,f.charAt(0)=="/"?Xm:Jm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",jr(f,ep)),o.join("")};function bt(o){return new mn(o)}function Ws(o,h,f){o.j=f?kr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function zs(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function tc(o,h,f){h instanceof Dr?(o.i=h,tp(o.i,o.h)):(f||(h=jr(h,Zm)),o.i=new Dr(h,o.h))}function se(o,h,f){o.i.set(h,f)}function Gs(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function kr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function jr(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,Ym),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ym(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nc=/[#\/\?@]/g,Jm=/[#\?:]/g,Xm=/[#\?]/g,Zm=/[#\?@]/g,ep=/#/g;function Dr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function qt(o){o.g||(o.g=new Map,o.h=0,o.i&&Qm(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Dr.prototype,n.add=function(o,h){qt(this),this.i=null,o=$n(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function rc(o,h){qt(o),h=$n(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function sc(o,h){return qt(o),h=$n(o,h),o.g.has(h)}n.forEach=function(o,h){qt(this),this.g.forEach(function(f,p){f.forEach(function(S){o.call(h,S,p,this)},this)},this)},n.na=function(){qt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let p=0;p<h.length;p++){const S=o[p];for(let C=0;C<S.length;C++)f.push(h[p])}return f},n.V=function(o){qt(this);let h=[];if(typeof o=="string")sc(this,o)&&(h=h.concat(this.g.get($n(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},n.set=function(o,h){return qt(this),this.i=null,o=$n(this,o),sc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function ic(o,h,f){rc(o,h),0<f.length&&(o.i=null,o.g.set($n(o,h),k(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var p=h[f];const C=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var S=C;F[p]!==""&&(S+="="+encodeURIComponent(String(F[p]))),o.push(S)}}return this.i=o.join("&")};function $n(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function tp(o,h){h&&!o.j&&(qt(o),o.i=null,o.g.forEach(function(f,p){var S=p.toLowerCase();p!=S&&(rc(this,p),ic(this,S,f))},o)),o.j=h}function np(o,h){const f=new Pr;if(c.Image){const p=new Image;p.onload=T($t,f,"TestLoadImage: loaded",!0,h,p),p.onerror=T($t,f,"TestLoadImage: error",!1,h,p),p.onabort=T($t,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=T($t,f,"TestLoadImage: timeout",!1,h,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else h(!1)}function rp(o,h){const f=new Pr,p=new AbortController,S=setTimeout(()=>{p.abort(),$t(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?$t(f,"TestPingServer: ok",!0,h):$t(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),$t(f,"TestPingServer: error",!1,h)})}function $t(o,h,f,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(f)}catch{}}function sp(){this.g=new Fm}function ip(o,h,f){const p=f||"";try{Zl(o,function(S,C){let F=S;d(S)&&(F=Rr(S)),h.push(p+C+"="+encodeURIComponent(F))})}catch(S){throw h.push(p+"type="+encodeURIComponent("_badmap")),S}}function Or(o){this.l=o.Ub||null,this.j=o.eb||!1}A(Or,po),Or.prototype.g=function(){return new Hs(this.l,this.j)},Or.prototype.i=function(o){return function(){return o}}({});function Hs(o,h){be.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Hs,be),n=Hs.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function oc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Lr(this):Vr(this),this.readyState==3&&oc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Lr(this))},n.Qa=function(o){this.g&&(this.response=o,Lr(this))},n.ga=function(){this.g&&Lr(this)};function Lr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vr(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function Vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ac(o){let h="";return O(o,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function Io(o,h,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=ac(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):se(o,h,f))}function de(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(de,be);var op=/^https?$/i,ap=["POST","PUT"];n=de.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_o.g(),this.v=this.o?Ll(this.o):Ll(_o),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(C){lc(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)f.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ap,h,void 0))||p||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,F]of f)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){lc(this,C)}};function lc(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,cc(o),Ks(o)}function cc(o){o.A||(o.A=!0,Te(o,"complete"),Te(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Te(this,"complete"),Te(this,"abort"),Ks(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ks(this,!0)),de.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uc(this):this.bb())},n.bb=function(){uc(this)};function uc(o){if(o.h&&typeof l<"u"&&(!o.v[1]||wt(o)!=4||o.Z()!=2)){if(o.u&&wt(o)==4)Bn(o.Ea,0,o);else if(Te(o,"readystatechange"),wt(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var p;if(p=F===0){var S=String(o.D).match(ec)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),p=!op.test(S?S.toLowerCase():"")}f=p}if(f)Te(o,"complete"),Te(o,"success");else{o.m=6;try{var C=2<wt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",cc(o)}}finally{Ks(o)}}}}function Ks(o,h){if(o.g){hc(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||Te(o,"ready");try{f.onreadystatechange=p}catch{}}}function hc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function wt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Um(h)}};function dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lp(o){const h={};o=(o.g&&2<=wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(P(o[p]))continue;var f=I(o[p]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=h[S]||[];h[S]=C,C.push(f)}E(h,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function fc(o){this.Aa=0,this.i=[],this.j=new Pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mr("baseRetryDelayMs",5e3,o),this.cb=Mr("retryDelaySeedMs",1e4,o),this.Wa=Mr("forwardChannelMaxRetries",2,o),this.wa=Mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Kl(o&&o.concurrentRequestLimit),this.Da=new sp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fc.prototype,n.la=8,n.G=1,n.connect=function(o,h,f,p){Ue(0),this.W=o,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=xc(this,null,this.W),Ys(this)};function Ro(o){if(mc(o),o.G==3){var h=o.U++,f=bt(o.I);if(se(f,"SID",o.K),se(f,"RID",h),se(f,"TYPE","terminate"),Ur(o,f),h=new Bt(o,o.j,h),h.L=2,h.v=Gs(bt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ec(h.j,null),h.g.ea(h.v)),h.F=Date.now(),$s(h)}wc(o)}function Qs(o){o.g&&(Ao(o),o.g.cancel(),o.g=null)}function mc(o){Qs(o),o.u&&(c.clearTimeout(o.u),o.u=null),Js(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ys(o){if(!Ql(o.h)&&!o.s){o.s=!0;var h=o.Ga;Ve||xr(),Ye||(Ve(),Ye=!0),at.add(h,o),o.B=0}}function cp(o,h){return Yl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Sr(v(o.Ga,o,h),bc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Bt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=gc(this,S,h),f=bt(this.I),se(f,"RID",o),se(f,"CVER",22),this.D&&se(f,"X-HTTP-Session-Id",this.D),Ur(this,f),C&&(this.O?h="headers="+encodeURIComponent(String(ac(C)))+"&"+h:this.m&&Io(f,this.m,C)),To(this.h,S),this.Ua&&se(f,"TYPE","init"),this.P?(se(f,"$req",h),se(f,"SID","null"),S.T=!0,bo(S,f,null)):bo(S,f,h),this.G=2}}else this.G==3&&(o?pc(this,o):this.i.length==0||Ql(this.h)||pc(this))};function pc(o,h){var f;h?f=h.l:f=o.U++;const p=bt(o.I);se(p,"SID",o.K),se(p,"RID",f),se(p,"AID",o.T),Ur(o,p),o.m&&o.o&&Io(p,o.m,o.o),f=new Bt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=gc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),To(o.h,f),bo(f,p,h)}function Ur(o,h){o.H&&O(o.H,function(f,p){se(h,p,f)}),o.l&&Zl({},function(f,p){se(h,p,f)})}function gc(o,h,f){f=Math.min(o.i.length,f);var p=o.l?v(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const F=["count="+f];C==-1?0<f?(C=S[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let ne=!0;for(let Ie=0;Ie<f;Ie++){let ee=S[Ie].g;const Ce=S[Ie].map;if(ee-=C,0>ee)C=Math.max(0,S[Ie].g-100),ne=!1;else try{ip(Ce,F,"req"+ee+"_")}catch{p&&p(Ce)}}if(ne){p=F.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,p}function yc(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Ve||xr(),Ye||(Ve(),Ye=!0),at.add(h,o),o.v=0}}function No(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Sr(v(o.Fa,o),bc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,_c(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Sr(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),Qs(this),_c(this))};function Ao(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function _c(o){o.g=new Bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=bt(o.qa);se(h,"RID","rpc"),se(h,"SID",o.K),se(h,"AID",o.T),se(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(h,"TO",o.ja),se(h,"TYPE","xmlhttp"),Ur(o,h),o.m&&o.o&&Io(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Gs(bt(h)),f.m=null,f.P=!0,zl(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Qs(this),No(this),Ue(19))};function Js(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function vc(o,h){var f=null;if(o.g==h){Js(o),Ao(o),o.g=null;var p=2}else if(Eo(o.h,h))f=h.D,Jl(o.h,h),p=1;else return;if(o.G!=0){if(h.o)if(p==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var S=o.B;p=Fs(),Te(p,new Bl(p,f)),Ys(o)}else yc(o);else if(S=h.s,S==3||S==0&&0<h.X||!(p==1&&cp(o,h)||p==2&&No(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),S){case 1:pn(o,5);break;case 4:pn(o,10);break;case 3:pn(o,6);break;default:pn(o,2)}}}function bc(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function pn(o,h){if(o.j.info("Error code "+h),h==2){var f=v(o.fb,o),p=o.Xa;const S=!p;p=new mn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ws(p,"https"),Gs(p),S?np(p.toString(),f):rp(p.toString(),f)}else Ue(2);o.G=0,o.l&&o.l.sa(h),wc(o),mc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function wc(o){if(o.G=0,o.ka=[],o.l){const h=Xl(o.h);(h.length!=0||o.i.length!=0)&&(R(o.ka,h),R(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function xc(o,h,f){var p=f instanceof mn?bt(f):new mn(f);if(p.g!="")h&&(p.g=h+"."+p.g),zs(p,p.s);else{var S=c.location;p=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var C=new mn(null);p&&Ws(C,p),h&&(C.g=h),S&&zs(C,S),f&&(C.l=f),p=C}return f=o.D,h=o.ya,f&&h&&se(p,f,h),se(p,"VER",o.la),Ur(o,p),p}function Ec(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new de(new Or({eb:f})):new de(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tc(){}n=Tc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xs(){}Xs.prototype.g=function(o,h){return new Ge(o,h)};function Ge(o,h){be.call(this),this.g=new fc(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!P(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!P(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Wn(this)}A(Ge,be),Ge.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){Ro(this.g)},Ge.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Rr(o),o=f);h.i.push(new Gm(h.Ya++,o)),h.G==3&&Ys(h)},Ge.prototype.N=function(){this.g.l=null,delete this.j,Ro(this.g),delete this.g,Ge.aa.N.call(this)};function Ic(o){go.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}A(Ic,go);function Rc(){yo.call(this),this.status=1}A(Rc,yo);function Wn(o){this.g=o}A(Wn,Tc),Wn.prototype.ua=function(){Te(this.g,"a")},Wn.prototype.ta=function(o){Te(this.g,new Ic(o))},Wn.prototype.sa=function(o){Te(this.g,new Rc)},Wn.prototype.ra=function(){Te(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,Ed=function(){return new Xs},xd=function(){return Fs()},wd=dn,ra={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,di=Bs,ql.COMPLETE="complete",bd=ql,Vl.EventType=Nr,Nr.OPEN="a",Nr.CLOSE="b",Nr.ERROR="c",Nr.MESSAGE="d",be.prototype.listen=be.prototype.K,zr=Vl,vd=Or,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,_d=de}).apply(typeof ti<"u"?ti:typeof self<"u"?self:typeof window<"u"?window:{});const uu="@firebase/firestore";/**
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
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
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
 */let mr="10.12.1";/**
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
 */const An=new Ra("@firebase/firestore");function Fr(){return An.logLevel}function q(n,...e){if(An.logLevel<=Y.DEBUG){const t=e.map(Fa);An.debug(`Firestore (${mr}): ${n}`,...t)}}function St(n,...e){if(An.logLevel<=Y.ERROR){const t=e.map(Fa);An.error(`Firestore (${mr}): ${n}`,...t)}}function sr(n,...e){if(An.logLevel<=Y.WARN){const t=e.map(Fa);An.warn(`Firestore (${mr}): ${n}`,...t)}}function Fa(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: `+n;throw St(e),new Error(e)}function re(n,e){n||z()}function K(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Td{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class _b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vb{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rt,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rt)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new Td(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new De(e)}}class bb{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wb{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new bb(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const l=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new xb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Tb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Id{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Tb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function ir(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class oe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new oe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new oe(0,0))}static max(){return new H(new oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class as{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return as.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof as?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),l=t.get(s);if(i<l)return-1;if(i>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends as{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const Ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends as{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return Ib.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(r+=c,s++):(i(),s++)}if(i(),l)throw new B(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ie.fromString(e))}static fromName(e){return new $(ie.fromString(e).popFirst(5))}static empty(){return new $(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ie(e.slice()))}}function Rb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new nn(s,$.empty(),e)}function Nb(n){return new nn(n.readTime,n.key,-1)}class nn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nn(H.min(),$.empty(),-1)}static max(){return new nn(H.max(),$.empty(),-1)}}function Ab(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */const Sb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Sb)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,l=!1;e.forEach(c=>{++s,c.next(()=>{++i,l&&i===s&&t()},u=>r(u))}),l=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,l=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{l[d]=m,++c,c===i&&r(l)},m=>s(m))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Cb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Es(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ba{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ba.oe=-1;function Xi(n){return n==null}function Ci(n){return n===0&&1/n==-1/0}function kb(n){return typeof n=="number"&&Number.isInteger(n)&&!Ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function hu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function On(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Rd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ni(this.root,e,this.comparator,!0)}}class ni{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Re.RED,this.left=s??Re.EMPTY,this.right=i??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Re(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Re.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(e){return new du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ke{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new Se(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ir(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nd("Invalid base64 string: "+i):i}}(e);return new Le(t)}static fromUint8Array(e){const t=function(s){let i="";for(let l=0;l<s.length;++l)i+=String.fromCharCode(s[l]);return i}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(re(!!n),typeof n=="string"){let e=0;const t=jb.exec(n);if(re(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
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
 */function qa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $a(n){const e=n.mapValue.fields.__previous_value__;return qa(e)?$a(e):e}function ls(n){const e=rn(n.mapValue.fields.__local_write_time__.timestampValue);return new oe(e.seconds,e.nanos)}/**
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
 */class Db{constructor(e,t,r,s,i,l,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class cs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ri={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qa(n)?4:Ob(n)?9007199254740991:10:z()}function gt(n,e){if(n===e)return!0;const t=Pn(n);if(t!==Pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ls(n).isEqual(ls(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const l=rn(s.timestampValue),c=rn(i.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Sn(s.bytesValue).isEqual(Sn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const l=ge(s.doubleValue),c=ge(i.doubleValue);return l===c?Ci(l)===Ci(c):isNaN(l)&&isNaN(c)}return!1}(n,e);case 9:return ir(n.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:return function(s,i){const l=s.mapValue.fields||{},c=i.mapValue.fields||{};if(hu(l)!==hu(c))return!1;for(const u in l)if(l.hasOwnProperty(u)&&(c[u]===void 0||!gt(l[u],c[u])))return!1;return!0}(n,e);default:return z()}}function us(n,e){return(n.values||[]).find(t=>gt(t,e))!==void 0}function or(n,e){if(n===e)return 0;const t=Pn(n),r=Pn(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,l){const c=ge(i.integerValue||i.doubleValue),u=ge(l.integerValue||l.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return fu(n.timestampValue,e.timestampValue);case 4:return fu(ls(n),ls(e));case 5:return te(n.stringValue,e.stringValue);case 6:return function(i,l){const c=Sn(i),u=Sn(l);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,l){const c=i.split("/"),u=l.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=te(c[d],u[d]);if(m!==0)return m}return te(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,l){const c=te(ge(i.latitude),ge(l.latitude));return c!==0?c:te(ge(i.longitude),ge(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,l){const c=i.values||[],u=l.values||[];for(let d=0;d<c.length&&d<u.length;++d){const m=or(c[d],u[d]);if(m)return m}return te(c.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,l){if(i===ri.mapValue&&l===ri.mapValue)return 0;if(i===ri.mapValue)return 1;if(l===ri.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=l.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const v=te(u[g],m[g]);if(v!==0)return v;const T=or(c[u[g]],d[m[g]]);if(T!==0)return T}return te(u.length,m.length)}(n.mapValue,e.mapValue);default:throw z()}}function fu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=rn(n),r=rn(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function ar(n){return sa(n)}function sa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=sa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const l of r)i?i=!1:s+=",",s+=`${l}:${sa(t.fields[l])}`;return s+"}"}(n.mapValue):z()}function mu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ia(n){return!!n&&"integerValue"in n}function Wa(n){return!!n&&"arrayValue"in n}function pu(n){return!!n&&"nullValue"in n}function gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fi(n){return!!n&&"mapValue"in n}function Jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return On(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ob(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(t)}setAll(e){let t=Ae.emptyPath(),r={},s=[];e.forEach((l,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}l?r[c.lastSegment()]=Jr(l):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];fi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){On(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new We(Jr(this.value))}}function Ad(n){const e=[];return On(n.fields,(t,r)=>{const s=new Ae([t]);if(fi(r)){const i=Ad(r.mapValue).fields;if(i.length===0)e.push(s);else for(const l of i)e.push(s.child(l))}else e.push(s)}),new Ke(e)}/**
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
 */class Oe{constructor(e,t,r,s,i,l,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=l,this.documentState=c}static newInvalidDocument(e){return new Oe(e,0,H.min(),H.min(),H.min(),We.empty(),0)}static newFoundDocument(e,t,r,s){return new Oe(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Oe(e,2,t,H.min(),H.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,H.min(),H.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ki{constructor(e,t){this.position=e,this.inclusive=t}}function yu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],l=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(l.referenceValue),t.key):r=or(l,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _u(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Lb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Sd{}class ye extends Sd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Mb(e,t,r):t==="array-contains"?new Bb(e,r):t==="in"?new qb(e,r):t==="not-in"?new $b(e,r):t==="array-contains-any"?new Wb(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ub(e,r):new Fb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(or(t,this.value)):t!==null&&Pn(this.value)===Pn(t)&&this.matchesComparison(or(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends Sd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ot(e,t)}matches(e){return Pd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pd(n){return n.op==="and"}function Cd(n){return Vb(n)&&Pd(n)}function Vb(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function oa(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+ar(n.value);if(Cd(n))return n.filters.map(e=>oa(e)).join(",");{const e=n.filters.map(t=>oa(t)).join(",");return`${n.op}(${e})`}}function kd(n,e){return n instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.field.isEqual(s.field)&&gt(r.value,s.value)}(n,e):n instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,l,c)=>i&&kd(l,s.filters[c]),!0):!1}(n,e):void z()}function jd(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${ar(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(jd).join(" ,")+"}"}(n):"Filter"}class Mb extends ye{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ub extends ye{constructor(e,t){super(e,"in",t),this.keys=Dd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fb extends ye{constructor(e,t){super(e,"not-in",t),this.keys=Dd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Dd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Bb extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wa(t)&&us(t.arrayValue,this.value)}}class qb extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&us(this.value.arrayValue,t)}}class $b extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!us(this.value.arrayValue,t)}}class Wb extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>us(this.value.arrayValue,r))}}/**
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
 */class zb{constructor(e,t=null,r=[],s=[],i=null,l=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=l,this.endAt=c,this.ue=null}}function vu(n,e=null,t=[],r=[],s=null,i=null,l=null){return new zb(n,e,t,r,s,i,l)}function za(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>oa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ar(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ar(r)).join(",")),e.ue=t}return e.ue}function Ga(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Lb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_u(n.startAt,e.startAt)&&_u(n.endAt,e.endAt)}function aa(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class pr{constructor(e,t=null,r=[],s=[],i=null,l="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=l,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gb(n,e,t,r,s,i,l,c){return new pr(n,e,t,r,s,i,l,c)}function Ha(n){return new pr(n)}function bu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Od(n){return n.collectionGroup!==null}function Xr(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Se(Ae.comparator);return l.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new hs(i,r))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new hs(Ae.keyField(),r))}return e.ce}function mt(n){const e=K(n);return e.le||(e.le=Hb(e,Xr(n))),e.le}function Hb(n,e){if(n.limitType==="F")return vu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new hs(s.field,i)});const t=n.endAt?new ki(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ki(n.startAt.position,n.startAt.inclusive):null;return vu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function la(n,e){const t=n.filters.concat([e]);return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ca(n,e,t){return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zi(n,e){return Ga(mt(n),mt(e))&&n.limitType===e.limitType}function Ld(n){return`${za(mt(n))}|lt:${n.limitType}`}function Kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>jd(s)).join(", ")}]`),Xi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ar(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ar(s)).join(",")),`Target(${r})`}(mt(n))}; limitType=${n.limitType})`}function eo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Xr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(l,c,u){const d=yu(l,c,u);return l.inclusive?d<=0:d<0}(r.startAt,Xr(r),s)||r.endAt&&!function(l,c,u){const d=yu(l,c,u);return l.inclusive?d>=0:d>0}(r.endAt,Xr(r),s))}(n,e)}function Kb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vd(n){return(e,t)=>{let r=!1;for(const s of Xr(n)){const i=Qb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Qb(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,l,c){const u=l.data.field(i),d=c.data.field(i);return u!==null&&d!==null?or(u,d):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class gr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Rd(this.inner)}size(){return this.innerSize}}/**
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
 */const Yb=new ue($.comparator);function Pt(){return Yb}const Md=new ue($.comparator);function Gr(...n){let e=Md;for(const t of n)e=e.insert(t.key,t);return e}function Ud(n){let e=Md;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function wn(){return Zr()}function Fd(){return Zr()}function Zr(){return new gr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jb=new ue($.comparator),Xb=new Se($.comparator);function Q(...n){let e=Xb;for(const t of n)e=e.add(t);return e}const Zb=new Se(te);function ew(){return Zb}/**
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
 */function Bd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ci(e)?"-0":e}}function qd(n){return{integerValue:""+n}}function tw(n,e){return kb(e)?qd(e):Bd(n,e)}/**
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
 */class to{constructor(){this._=void 0}}function nw(n,e,t){return n instanceof ji?function(s,i){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qa(i)&&(i=$a(i)),i&&(l.fields.__previous_value__=i),{mapValue:l}}(t,e):n instanceof ds?Wd(n,e):n instanceof fs?zd(n,e):function(s,i){const l=$d(s,i),c=wu(l)+wu(s.Pe);return ia(l)&&ia(s.Pe)?qd(c):Bd(s.serializer,c)}(n,e)}function rw(n,e,t){return n instanceof ds?Wd(n,e):n instanceof fs?zd(n,e):t}function $d(n,e){return n instanceof Di?function(r){return ia(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ji extends to{}class ds extends to{constructor(e){super(),this.elements=e}}function Wd(n,e){const t=Gd(e);for(const r of n.elements)t.some(s=>gt(s,r))||t.push(r);return{arrayValue:{values:t}}}class fs extends to{constructor(e){super(),this.elements=e}}function zd(n,e){let t=Gd(e);for(const r of n.elements)t=t.filter(s=>!gt(s,r));return{arrayValue:{values:t}}}class Di extends to{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wu(n){return ge(n.integerValue||n.doubleValue)}function Gd(n){return Wa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ds&&s instanceof ds||r instanceof fs&&s instanceof fs?ir(r.elements,s.elements,gt):r instanceof Di&&s instanceof Di?gt(r.Pe,s.Pe):r instanceof ji&&s instanceof ji}(n.transform,e.transform)}class iw{constructor(e,t){this.version=e,this.transformResults=t}}class it{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class no{}function Hd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ka(n.key,it.none()):new Ts(n.key,n.data,it.none());{const t=n.data,r=We.empty();let s=new Se(Ae.comparator);for(let i of e.fields)if(!s.has(i)){let l=t.field(i);l===null&&i.length>1&&(i=i.popLast(),l=t.field(i)),l===null?r.delete(i):r.set(i,l),s=s.add(i)}return new an(n.key,r,new Ke(s.toArray()),it.none())}}function ow(n,e,t){n instanceof Ts?function(s,i,l){const c=s.value.clone(),u=Eu(s.fieldTransforms,i,l.transformResults);c.setAll(u),i.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,e,t):n instanceof an?function(s,i,l){if(!mi(s.precondition,i))return void i.convertToUnknownDocument(l.version);const c=Eu(s.fieldTransforms,i,l.transformResults),u=i.data;u.setAll(Kd(s)),u.setAll(c),i.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,l){i.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function es(n,e,t,r){return n instanceof Ts?function(i,l,c,u){if(!mi(i.precondition,l))return c;const d=i.value.clone(),m=Tu(i.fieldTransforms,u,l);return d.setAll(m),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof an?function(i,l,c,u){if(!mi(i.precondition,l))return c;const d=Tu(i.fieldTransforms,u,l),m=l.data;return m.setAll(Kd(i)),m.setAll(d),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,l,c){return mi(i.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,e,t)}function aw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=$d(r.transform,s||null);i!=null&&(t===null&&(t=We.empty()),t.set(r.field,i))}return t||null}function xu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ir(r,s,(i,l)=>sw(i,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ts extends no{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class an extends no{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Eu(n,e,t){const r=new Map;re(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],l=i.transform,c=e.data.field(i.field);r.set(i.field,rw(l,c,t[s]))}return r}function Tu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,l=t.data.field(s.field);r.set(s.field,nw(i,l,e))}return r}class Ka extends no{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lw extends no{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ow(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fd();return this.mutations.forEach(s=>{const i=e.get(s.key),l=i.overlayedDocument;let c=this.applyToLocalView(l,i.mutatedFields);c=t.has(s.key)?null:c;const u=Hd(l,c);u!==null&&r.set(s.key,u),l.isValidDocument()||l.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&ir(this.mutations,e.mutations,(t,r)=>xu(t,r))&&ir(this.baseMutations,e.baseMutations,(t,r)=>xu(t,r))}}class Qa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){re(e.mutations.length===r.length);let s=function(){return Jb}();const i=e.mutations;for(let l=0;l<i.length;l++)s=s.insert(i[l].key,r[l].version);return new Qa(e,t,r,s)}}/**
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
 */class uw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pe,J;function dw(n){switch(n){default:return z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Qd(n){if(n===void 0)return St("GRPC error has no .code"),M.UNKNOWN;switch(n){case pe.OK:return M.OK;case pe.CANCELLED:return M.CANCELLED;case pe.UNKNOWN:return M.UNKNOWN;case pe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case pe.INTERNAL:return M.INTERNAL;case pe.UNAVAILABLE:return M.UNAVAILABLE;case pe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case pe.NOT_FOUND:return M.NOT_FOUND;case pe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case pe.ABORTED:return M.ABORTED;case pe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case pe.DATA_LOSS:return M.DATA_LOSS;default:return z()}}(J=pe||(pe={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fw(){return new TextEncoder}/**
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
 */const mw=new xn([4294967295,4294967295],0);function Iu(n){const e=fw().encode(n),t=new yd;return t.update(e),new Uint8Array(t.digest())}function Ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([t,r],0),new xn([s,i],0)]}class Ya{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hr(`Invalid padding: ${t}`);if(r<0)throw new Hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(xn.fromNumber(r)));return s.compare(mw)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Iu(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const l=this.Ee(r,s,i);if(!this.de(l))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),l=new Ya(i,s,t);return r.forEach(c=>l.insert(c)),l}insert(e){if(this.Ie===0)return;const t=Iu(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const l=this.Ee(r,s,i);this.Ae(l)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ro{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Is.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ro(H.min(),s,new ue(te),Pt(),Q())}}class Is{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Is(r,t,Q(),Q(),Q())}}/**
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
 */class pi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Yd{constructor(e,t){this.targetId=e,this.me=t}}class Jd{constructor(e,t,r=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nu{constructor(){this.fe=0,this.ge=Su(),this.pe=Le.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Q(),t=Q(),r=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Is(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Su()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pw{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pt(),this.qe=Au(),this.Qe=new ue(te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(aa(i))if(r===0){const l=new $(i.path);this.Ue(t,l,Oe.newNoDocument(l,H.min()))}else re(r===1);else{const l=this.Ye(t);if(l!==r){const c=this.Ze(e),u=c?this.Xe(c,e,l):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let l,c;try{l=Sn(r).toUint8Array()}catch(u){if(u instanceof Nd)return sr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ya(l,s,i)}catch(u){return sr(u instanceof Hr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const l=this.Le.tt(),c=`projects/${l.projectId}/databases/${l.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,l)=>{const c=this.Je(l);if(c){if(i.current&&aa(c.target)){const u=new $(c.target.path);this.ke.get(u)!==null||this.it(l,u)||this.Ue(l,u,Oe.newNoDocument(u,e))}i.be&&(t.set(l,i.Ce()),i.ve())}});let r=Q();this.qe.forEach((i,l)=>{let c=!0;l.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,l)=>l.setReadTime(e));const s=new ro(e,t,this.Qe,this.ke,r);return this.ke=Pt(),this.qe=Au(),this.Qe=new ue(te),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Nu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Se(te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Au(){return new ue($.comparator)}function Su(){return new ue($.comparator)}const gw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_w=(()=>({and:"AND",or:"OR"}))();class vw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ua(n,e){return n.useProto3Json||Xi(e)?e:{value:e}}function Oi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bw(n,e){return Oi(n,e.toTimestamp())}function pt(n){return re(!!n),H.fromTimestamp(function(t){const r=rn(t);return new oe(r.seconds,r.nanos)}(n))}function Ja(n,e){return ha(n,e).canonicalString()}function ha(n,e){const t=function(s){return new ie(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Zd(n){const e=ie.fromString(n);return re(sf(e)),e}function da(n,e){return Ja(n.databaseId,e.path)}function Mo(n,e){const t=Zd(e);if(t.get(1)!==n.databaseId.projectId)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(tf(t))}function ef(n,e){return Ja(n.databaseId,e)}function ww(n){const e=Zd(n);return e.length===4?ie.emptyPath():tf(e)}function fa(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tf(n){return re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Pu(n,e,t){return{name:da(n,e),fields:t.value.mapValue.fields}}function xw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(re(m===void 0||typeof m=="string"),Le.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Le.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(d){const m=d.code===void 0?M.UNKNOWN:Qd(d.code);return new B(m,d.message||"")}(l);t=new Jd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mo(n,r.document.name),i=pt(r.document.updateTime),l=r.document.createTime?pt(r.document.createTime):H.min(),c=new We({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(s,i,l,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new pi(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mo(n,r.document),i=r.readTime?pt(r.readTime):H.min(),l=Oe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new pi([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mo(n,r.document),i=r.removedTargetIds||[];t=new pi([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,l=new hw(s,i),c=r.targetId;t=new Yd(c,l)}}return t}function Ew(n,e){let t;if(e instanceof Ts)t={update:Pu(n,e.key,e.value)};else if(e instanceof Ka)t={delete:da(n,e.key)};else if(e instanceof an)t={update:Pu(n,e.key,e.data),updateMask:kw(e.fieldMask)};else{if(!(e instanceof lw))return z();t={verify:da(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,l){const c=l.transform;if(c instanceof ji)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ds)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fs)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Di)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function Tw(n,e){return n&&n.length>0?(re(e!==void 0),n.map(t=>function(s,i){let l=s.updateTime?pt(s.updateTime):pt(i);return l.isEqual(H.min())&&(l=pt(i)),new iw(l,s.transformResults||[])}(t,e))):[]}function Iw(n,e){return{documents:[ef(n,e.path)]}}function Rw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ef(n,s);const i=function(d){if(d.length!==0)return rf(ot.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const l=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Qn(v.field),direction:Sw(v.dir)}}(m))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const c=ua(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Nw(n){let e=ww(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){re(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(g){const v=nf(g);return v instanceof ot&&Cd(v)?v.getFilters():[v]}(t.where));let l=[];t.orderBy&&(l=function(g){return g.map(v=>function(A){return new hs(Yn(A.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(g){let v;return v=typeof g=="object"?g.value:g,Xi(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,T=g.values||[];return new ki(T,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,T=g.values||[];return new ki(T,v)}(t.endAt)),Gb(e,s,l,i,c,"F",u,d)}function Aw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Yn(t.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yn(t.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yn(t.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Yn(t.unaryFilter.field);return ye.create(l,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return ye.create(Yn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>nf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function Sw(n){return gw[n]}function Pw(n){return yw[n]}function Cw(n){return _w[n]}function Qn(n){return{fieldPath:n.canonicalString()}}function Yn(n){return Ae.fromServerFormat(n.fieldPath)}function rf(n){return n instanceof ye?function(t){if(t.op==="=="){if(gu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(pu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(pu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Pw(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(s=>rf(s));return r.length===1?r[0]:{compositeFilter:{op:Cw(t.op),filters:r}}}(n):z()}function kw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Yt{constructor(e,t,r,s,i=H.min(),l=H.min(),c=Le.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jw{constructor(e){this.ct=e}}function Dw(n){const e=Nw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ca(e,e.limit,"L"):e}/**
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
 */class Ow{constructor(){this._n=new Lw}addToCollectionParentIndex(e,t){return this._n.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(nn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(nn.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class Lw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Se(ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Se(ie.comparator)).toArray()}}/**
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
 */class lr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new lr(0)}static Ln(){return new lr(-1)}}/**
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
 */class Vw{constructor(){this.changes=new gr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Mw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Uw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&es(r.mutation,s,Ke.empty(),oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const s=wn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let l=Gr();return i.forEach((c,u)=>{l=l.insert(c,u.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=wn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((l,c)=>{t.set(l,c)})})}computeViews(e,t,r,s){let i=Pt();const l=Zr(),c=function(){return Zr()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof an)?i=i.insert(d.key,d):m!==void 0?(l.set(d.key,m.mutation.getFieldMask()),es(m.mutation,d,m.mutation.getFieldMask(),oe.now())):l.set(d.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>l.set(d,m)),t.forEach((d,m)=>{var g;return c.set(d,new Mw(m,(g=l.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Zr();let s=new ue((l,c)=>l-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const c of l)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ke.empty();m=c.applyToLocalView(d,m),r.set(u,m);const g=(s.get(c.batchId)||Q()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,g=Fd();m.forEach(v=>{if(!i.has(v)){const T=Hd(t.get(v),r.get(v));T!==null&&g.set(v,T),i=i.add(v)}}),l.push(this.documentOverlayCache.saveOverlays(e,d,g))}return U.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(l){return $.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Od(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const l=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(wn());let c=-1,u=i;return l.next(d=>U.forEach(d,(m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?U.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{u=u.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,Q())).next(m=>({batchId:c,changes:Ud(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Gr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let l=Gr();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,u=>{const d=function(g,v){return new pr(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((g,v)=>{l=l.insert(g,v)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(i=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(l=>{i.forEach((u,d)=>{const m=d.getKey();l.get(m)===null&&(l=l.insert(m,Oe.newInvalidDocument(m)))});let c=Gr();return l.forEach((u,d)=>{const m=i.get(u);m!==void 0&&es(m.mutation,d,Ke.empty(),oe.now()),eo(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class Fw{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return U.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:pt(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:Dw(s.bundledQuery),readTime:pt(s.readTime)}}(t)),U.resolve()}}/**
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
 */class Bw{constructor(){this.overlays=new ue($.comparator),this.hr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wn();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=wn(),i=t.length+1,l=new $(t.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ue((d,m)=>d-m);const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=wn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=wn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return U.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new uw(t,r));let i=this.hr.get(t);i===void 0&&(i=Q(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
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
 */class Xa{constructor(){this.Pr=new Se(we.Ir),this.Tr=new Se(we.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new we(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new we(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new $(new ie([])),r=new we(t,e),s=new we(t,e+1),i=[];return this.Tr.forEachInRange([r,s],l=>{this.Ar(l),i.push(l.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new $(new ie([])),r=new we(t,e),s=new we(t,e+1);let i=Q();return this.Tr.forEachInRange([r,s],l=>{i=i.add(l.key)}),i}containsKey(e){const t=new we(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return $.comparator(e.key,t.key)||te(e.pr,t.pr)}static Er(e,t){return te(e.pr,t.pr)||$.comparator(e.key,t.key)}}/**
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
 */class qw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Se(we.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new cw(i,t,r,s);this.mutationQueue.push(l);for(const c of s)this.wr=this.wr.add(new we(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(l)}lookupMutationBatch(e,t){return U.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new we(t,0),s=new we(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],l=>{const c=this.Sr(l.pr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(te);return t.forEach(s=>{const i=new we(s,0),l=new we(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,l],c=>{r=r.add(c.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const l=new we(new $(i),0);let c=new Se(te);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.pr)),!0)},l),U.resolve(this.Dr(c))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){re(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(t.mutations,s=>{const i=new we(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new we(t,0),s=this.wr.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $w{constructor(e){this.vr=e,this.docs=function(){return new ue($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,l=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=Pt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Oe.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Pt();const l=t.path,c=new $(l.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||Ab(Nb(m),r)<=0||(s.has(m.key)||eo(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Fr(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ww(this)}getSize(e){return U.resolve(this.size)}}class Ww extends Vw{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class zw{constructor(e){this.persistence=e,this.Mr=new gr(t=>za(t),Ga),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Xa,this.targetCount=0,this.Lr=lr.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),U.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new lr(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.qn(t),U.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((l,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Mr.delete(l),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(l=>{i.push(s.markPotentiallyOrphaned(e,l))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.Nr.containsKey(t))}}/**
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
 */class Gw{constructor(e,t){this.Br={},this.overlays={},this.kr=new Ba(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new zw(this),this.indexManager=new Ow,this.remoteDocumentCache=function(s){return new $w(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jw(t),this.$r=new Fw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new qw(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new Hw(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class Hw extends Pb{constructor(e){super(),this.currentSequenceNumber=e}}class Za{constructor(e){this.persistence=e,this.zr=new Xa,this.jr=null}static Hr(e){return new Za(e)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),U.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const s=$.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return U.or([()=>U.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class el{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new el(e,t.fromCache,r,s)}}/**
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
 */class Kw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Qw{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return jg()?8:Cb(Pe())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(l=>{i.result=l}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(l=>{i.result=l})}).next(()=>{if(i.result)return;const l=new Kw;return this.Ji(e,t,l).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,t,l,c.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(Fr()<=Y.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(Fr()<=Y.DEBUG&&q("QueryEngine","Query:",Kn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Fr()<=Y.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):U.resolve())}ji(e,t){if(bu(t))return U.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ca(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const l=Q(...i);return this.zi.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Zi(t,c);return this.Xi(t,d,l,u.readTime)?this.ji(e,ca(t,null,"F")):this.es(e,d,t,u)}))})))}Hi(e,t,r,s){return bu(t)||s.isEqual(H.min())?U.resolve(null):this.zi.getDocuments(e,r).next(i=>{const l=this.Zi(t,i);return this.Xi(t,l,r,s)?U.resolve(null):(Fr()<=Y.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kn(t)),this.es(e,l,t,Rb(s,-1)).next(c=>c))})}Zi(e,t){let r=new Se(Vd(e));return t.forEach((s,i)=>{eo(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return Fr()<=Y.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.zi.getDocumentsMatchingQuery(e,t,nn.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(l=>{i=i.insert(l.key,l)}),i))}}/**
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
 */class Yw{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new ue(te),this.rs=new gr(i=>za(i),Ga),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uw(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Jw(n,e,t,r){return new Yw(n,e,t,r)}async function of(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const l=[],c=[];let u=Q();for(const d of s){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:l,addedBatchIds:c}))})})}function Xw(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const g=d.batch,v=g.keys();let T=U.resolve();return v.forEach(A=>{T=T.next(()=>m.getEntry(u,A)).next(k=>{const R=d.docVersions.get(A);re(R!==null),k.version.compareTo(R)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=Q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function af(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function Zw(n,e){const t=K(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const l=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const c=[];e.targetChanges.forEach((m,g)=>{const v=s.get(g);if(!v)return;c.push(t.Qr.removeMatchingKeys(i,m.removedDocuments,g).next(()=>t.Qr.addMatchingKeys(i,m.addedDocuments,g)));let T=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Le.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,r)),s=s.insert(g,T),function(k,R,L){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(v,T,m)&&c.push(t.Qr.updateTargetData(i,T))});let u=Pt(),d=Q();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(ex(i,l,e.documentUpdates).next(m=>{u=m.cs,d=m.ls})),!r.isEqual(H.min())){const m=t.Qr.getLastRemoteSnapshotVersion(i).next(g=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return U.waitFor(c).next(()=>l.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.ns=s,i))}function ex(n,e,t){let r=Q(),s=Q();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let l=Pt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),l=l.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),l=l.insert(c,u)):q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{cs:l,ls:s}})}function tx(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nx(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.Qr.allocateTargetId(r).next(l=>(s=new Yt(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function ma(n,e,t){const r=K(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,l=>r.persistence.referenceDelegate.removeTarget(l,s))}catch(l){if(!Es(l))throw l;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Cu(n,e,t){const r=K(n);let s=H.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",l=>function(u,d,m){const g=K(u),v=g.rs.get(m);return v!==void 0?U.resolve(g.ns.get(v)):g.Qr.getTargetData(d,m)}(r,l,mt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(l,c.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(l,e,t?s:H.min(),t?i:Q())).next(c=>(rx(r,Kb(e),c),{documents:c,hs:i})))}function rx(n,e,t){let r=n.ss.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}class ku{constructor(){this.activeTargetIds=ew()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sx{constructor(){this.no=new ku,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ku,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ix{io(e){}shutdown(){}}/**
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
 */class ju{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let si=null;function Uo(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
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
 */const ox={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ax{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const je="WebChannelConnection";class lx extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(t,r,s,i,l){const c=Uo(),u=this.vo(t,r.toUriEncodedString());q("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,i,l),this.Mo(t,u,d,s).then(m=>(q("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw sr("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",u,"request:",s),m})}xo(t,r,s,i,l,c){return this.Co(t,r,s,i,l)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,l)=>t[l]=i),s&&s.headers.forEach((i,l)=>t[l]=i)}vo(t,r){const s=ox[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const i=Uo();return new Promise((l,c)=>{const u=new _d;u.setWithCredentials(!0),u.listenOnce(bd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case di.NO_ERROR:const m=u.getResponseJson();q(je,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),l(m);break;case di.TIMEOUT:q(je,`RPC '${e}' ${i} timed out`),c(new B(M.DEADLINE_EXCEEDED,"Request time out"));break;case di.HTTP_ERROR:const g=u.getStatus();if(q(je,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v==null?void 0:v.error;if(T&&T.status&&T.message){const A=function(R){const L=R.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(L)>=0?L:M.UNKNOWN}(T.status);c(new B(A,T.message))}else c(new B(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(M.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{q(je,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);q(je,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Oo(e,t,r){const s=Uo(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=Ed(),c=xd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new vd({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");q(je,`Creating RPC '${e}' stream ${s}: ${m}`,u);const g=l.createWebChannel(m,u);let v=!1,T=!1;const A=new ax({lo:R=>{T?q(je,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(v||(q(je,`Opening RPC '${e}' stream ${s} transport.`),g.open(),v=!0),q(je,`RPC '${e}' stream ${s} sending:`,R),g.send(R))},ho:()=>g.close()}),k=(R,L,P)=>{R.listen(L,j=>{try{P(j)}catch(D){setTimeout(()=>{throw D},0)}})};return k(g,zr.EventType.OPEN,()=>{T||(q(je,`RPC '${e}' stream ${s} transport opened.`),A.mo())}),k(g,zr.EventType.CLOSE,()=>{T||(T=!0,q(je,`RPC '${e}' stream ${s} transport closed`),A.po())}),k(g,zr.EventType.ERROR,R=>{T||(T=!0,sr(je,`RPC '${e}' stream ${s} transport errored:`,R),A.po(new B(M.UNAVAILABLE,"The operation could not be completed")))}),k(g,zr.EventType.MESSAGE,R=>{var L;if(!T){const P=R.data[0];re(!!P);const j=P,D=j.error||((L=j[0])===null||L===void 0?void 0:L.error);if(D){q(je,`RPC '${e}' stream ${s} received error:`,D);const V=D.status;let O=function(_){const b=pe[_];if(b!==void 0)return Qd(b)}(V),E=D.message;O===void 0&&(O=M.INTERNAL,E="Unknown error status: "+V+" with message "+D.message),T=!0,A.po(new B(O,E)),g.close()}else q(je,`RPC '${e}' stream ${s} received:`,P),A.yo(P)}}),k(c,wd.STAT_EVENT,R=>{R.stat===ra.PROXY?q(je,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===ra.NOPROXY&&q(je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function Fo(){return typeof document<"u"?document:null}/**
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
 */function so(n){return new vw(n,!0)}/**
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
 */class lf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class cf{constructor(e,t,r,s,i,l,c,u){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new lf(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new B(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cx extends cf{constructor(e,t,r,s,i,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,l),this.serializer=i}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=xw(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const l=i.targetChange;return l.targetIds&&l.targetIds.length?H.min():l.readTime?pt(l.readTime):H.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=fa(this.serializer),t.addTarget=function(i,l){let c;const u=l.target;if(c=aa(u)?{documents:Iw(i,u)}:{query:Rw(i,u)._t},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=Xd(i,l.resumeToken);const d=ua(i,l.expectedCount);d!==null&&(c.expectedCount=d)}else if(l.snapshotVersion.compareTo(H.min())>0){c.readTime=Oi(i,l.snapshotVersion.toTimestamp());const d=ua(i,l.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Aw(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=fa(this.serializer),t.removeTarget=e,this.i_(t)}}class ux extends cf{constructor(e,t,r,s,i,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,l),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Tw(e.writeResults,e.commitTime),r=pt(e.commitTime);return this.listener.A_(r,t)}return re(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=fa(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ew(this.serializer,r))};this.i_(t)}}/**
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
 */class hx extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,l])=>this.connection.Co(e,ha(t,r),s,i,l)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(M.UNKNOWN,i.toString())})}xo(e,t,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.xo(e,ha(t,r),s,l,c,i)).catch(l=>{throw l.name==="FirebaseError"?(l.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new B(M.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class dx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(St(t),this.y_=!1):q("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class fx{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(l=>{r.enqueueAndForget(async()=>{Ln(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=K(u);d.M_.add(4),await Rs(d),d.N_.set("Unknown"),d.M_.delete(4),await io(d)}(this))})}),this.N_=new dx(r,s)}}async function io(n){if(Ln(n))for(const e of n.x_)await e(!0)}async function Rs(n){for(const e of n.x_)await e(!1)}function uf(n,e){const t=K(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),sl(t)?rl(t):yr(t).Xo()&&nl(t,e))}function tl(n,e){const t=K(n),r=yr(t);t.F_.delete(e),r.Xo()&&hf(t,e),t.F_.size===0&&(r.Xo()?r.n_():Ln(t)&&t.N_.set("Unknown"))}function nl(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yr(n).P_(e)}function hf(n,e){n.L_.xe(e),yr(n).I_(e)}function rl(n){n.L_=new pw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),yr(n).start(),n.N_.w_()}function sl(n){return Ln(n)&&!yr(n).Zo()&&n.F_.size>0}function Ln(n){return K(n).M_.size===0}function df(n){n.L_=void 0}async function mx(n){n.N_.set("Online")}async function px(n){n.F_.forEach((e,t)=>{nl(n,e)})}async function gx(n,e){df(n),sl(n)?(n.N_.D_(e),rl(n)):n.N_.set("Unknown")}async function yx(n,e,t){if(n.N_.set("Online"),e instanceof Jd&&e.state===2&&e.cause)try{await async function(s,i){const l=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,l),s.F_.delete(c),s.L_.removeTarget(c))}(n,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Li(n,r)}else if(e instanceof pi?n.L_.Ke(e):e instanceof Yd?n.L_.He(e):n.L_.We(e),!t.isEqual(H.min()))try{const r=await af(n.localStore);t.compareTo(r)>=0&&await function(i,l){const c=i.L_.rt(l);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.F_.get(d);m&&i.F_.set(d,m.withResumeToken(u.resumeToken,l))}}),c.targetMismatches.forEach((u,d)=>{const m=i.F_.get(u);if(!m)return;i.F_.set(u,m.withResumeToken(Le.EMPTY_BYTE_STRING,m.snapshotVersion)),hf(i,u);const g=new Yt(m.target,u,d,m.sequenceNumber);nl(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Li(n,r)}}async function Li(n,e,t){if(!Es(e))throw e;n.M_.add(1),await Rs(n),n.N_.set("Offline"),t||(t=()=>af(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await io(n)})}function ff(n,e){return e().catch(t=>Li(n,t,e))}async function oo(n){const e=K(n),t=sn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;_x(e);)try{const s=await tx(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,vx(e,s)}catch(s){await Li(e,s)}mf(e)&&pf(e)}function _x(n){return Ln(n)&&n.v_.length<10}function vx(n,e){n.v_.push(e);const t=sn(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function mf(n){return Ln(n)&&!sn(n).Zo()&&n.v_.length>0}function pf(n){sn(n).start()}async function bx(n){sn(n).V_()}async function wx(n){const e=sn(n);for(const t of n.v_)e.d_(t.mutations)}async function xx(n,e,t){const r=n.v_.shift(),s=Qa.from(r,e,t);await ff(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await oo(n)}async function Ex(n,e){e&&sn(n).E_&&await async function(r,s){if(function(l){return dw(l)&&l!==M.ABORTED}(s.code)){const i=r.v_.shift();sn(r).t_(),await ff(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oo(r)}}(n,e),mf(n)&&pf(n)}async function Du(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Ln(t);t.M_.add(3),await Rs(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await io(t)}async function Tx(n,e){const t=K(n);e?(t.M_.delete(2),await io(t)):e||(t.M_.add(2),await Rs(t),t.N_.set("Unknown"))}function yr(n){return n.B_||(n.B_=function(t,r,s){const i=K(t);return i.f_(),new cx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:mx.bind(null,n),To:px.bind(null,n),Ao:gx.bind(null,n),h_:yx.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),sl(n)?rl(n):n.N_.set("Unknown")):(await n.B_.stop(),df(n))})),n.B_}function sn(n){return n.k_||(n.k_=function(t,r,s){const i=K(t);return i.f_(),new ux(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:bx.bind(null,n),Ao:Ex.bind(null,n),R_:wx.bind(null,n),A_:xx.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await oo(n)):(await n.k_.stop(),n.v_.length>0&&(q("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class il{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const l=Date.now()+r,c=new il(e,t,l,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(n,e){if(St("AsyncQueue",`${e}: ${n}`),Es(n))return new B(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class tr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Gr(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new tr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ou{constructor(){this.q_=new ue($.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):z():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class cr{constructor(e,t,r,s,i,l,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const l=[];return t.forEach(c=>{l.push({type:0,doc:c})}),new cr(e,t,tr.emptySet(t),l,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Ix{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Rx{constructor(){this.queries=new gr(e=>Ld(e),Zi),this.onlineState="Unknown",this.z_=new Set}}async function gf(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new Ix,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await t.onListen(s,!0);break;case 1:i.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(l){const c=ol(l,`Initialization of query '${Kn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.U_.push(e),e.j_(t.onlineState),i.K_&&e.H_(i.K_)&&al(t)}async function yf(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const l=i.U_.indexOf(e);l>=0&&(i.U_.splice(l,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Nx(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,l=t.queries.get(i);if(l){for(const c of l.U_)c.H_(s)&&(r=!0);l.K_=s}}r&&al(t)}function Ax(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(t);r.queries.delete(e)}function al(n){n.z_.forEach(e=>{e.next()})}var pa,Lu;(Lu=pa||(pa={})).J_="default",Lu.Cache="cache";class _f{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==pa.Cache}}/**
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
 */class vf{constructor(e){this.key=e}}class bf{constructor(e){this.key=e}}class Sx{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Q(),this.mutatedKeys=Q(),this.Ia=Vd(e),this.Ta=new tr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new Ou,s=t?t.Ta:this.Ta;let i=t?t.mutatedKeys:this.mutatedKeys,l=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,g)=>{const v=s.get(m),T=eo(this.query,g)?g:null,A=!!v&&this.mutatedKeys.has(v.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let R=!1;v&&T?v.data.isEqual(T.data)?A!==k&&(r.track({type:3,doc:T}),R=!0):this.Ra(v,T)||(r.track({type:2,doc:T}),R=!0,(u&&this.Ia(T,u)>0||d&&this.Ia(T,d)<0)&&(c=!0)):!v&&T?(r.track({type:0,doc:T}),R=!0):v&&!T&&(r.track({type:1,doc:v}),R=!0,(u||d)&&(c=!0)),R&&(T?(l=l.add(T),i=k?i.add(m):i.delete(m)):(l=l.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const m=this.query.limitType==="F"?l.last():l.first();l=l.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ta:l,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const l=e.Aa.Q_();l.sort((m,g)=>function(T,A){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return k(T)-k(A)}(m.type,g.type)||this.Ia(m.doc,g.doc)),this.Va(r),s=s!=null&&s;const c=t&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,d=u!==this.ha;return this.ha=u,l.length!==0||d?{snapshot:new cr(this.query,e.Ta,i,l,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ou,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Q(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new bf(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new vf(r))}),t}pa(e){this.la=e.hs,this.Pa=Q();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return cr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Px{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Cx{constructor(e){this.key=e,this.wa=!1}}class kx{constructor(e,t,r,s,i,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new gr(c=>Ld(c),Zi),this.Da=new Map,this.Ca=new Set,this.va=new ue($.comparator),this.Fa=new Map,this.Ma=new Xa,this.xa={},this.Oa=new Map,this.Na=lr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function jx(n,e,t=!0){const r=Rf(n);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await wf(r,e,t,!0),s}async function Dx(n,e){const t=Rf(n);await wf(t,e,!0,!1)}async function wf(n,e,t,r){const s=await nx(n.localStore,mt(e)),i=s.targetId,l=t?n.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await Ox(n,e,i,l==="current",s.resumeToken)),n.isPrimaryClient&&t&&uf(n.remoteStore,s),c}async function Ox(n,e,t,r,s){n.Ba=(g,v,T)=>async function(k,R,L,P){let j=R.view.da(L);j.Xi&&(j=await Cu(k.localStore,R.query,!1).then(({documents:E})=>R.view.da(E,j)));const D=P&&P.targetChanges.get(R.targetId),V=P&&P.targetMismatches.get(R.targetId)!=null,O=R.view.applyChanges(j,k.isPrimaryClient,D,V);return Mu(k,R.targetId,O.fa),O.snapshot}(n,g,v,T);const i=await Cu(n.localStore,e,!0),l=new Sx(e,i.hs),c=l.da(i.documents),u=Is.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=l.applyChanges(c,n.isPrimaryClient,u);Mu(n,t,d.fa);const m=new Px(e,t,l);return n.ba.set(e,m),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function Lx(n,e,t){const r=K(n),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(l=>!Zi(l,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ma(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&tl(r.remoteStore,s.targetId),ga(r,s.targetId)}).catch(xs)):(ga(r,s.targetId),await ma(r.localStore,s.targetId,!0))}async function Vx(n,e){const t=K(n),r=t.ba.get(e),s=t.Da.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tl(t.remoteStore,r.targetId))}async function Mx(n,e,t){const r=zx(n);try{const s=await function(l,c){const u=K(l),d=oe.now(),m=c.reduce((T,A)=>T.add(A.key),Q());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let A=Pt(),k=Q();return u.os.getEntries(T,m).next(R=>{A=R,A.forEach((L,P)=>{P.isValidDocument()||(k=k.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,A)).next(R=>{g=R;const L=[];for(const P of c){const j=aw(P,g.get(P.key).overlayedDocument);j!=null&&L.push(new an(P.key,j,Ad(j.value.mapValue),it.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,L,c)}).next(R=>{v=R;const L=R.applyToLocalDocumentSet(g,k);return u.documentOverlayCache.saveOverlays(T,R.batchId,L)})}).then(()=>({batchId:v.batchId,changes:Ud(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(l,c,u){let d=l.xa[l.currentUser.toKey()];d||(d=new ue(te)),d=d.insert(c,u),l.xa[l.currentUser.toKey()]=d}(r,s.batchId,t),await Ns(r,s.changes),await oo(r.remoteStore)}catch(s){const i=ol(s,"Failed to persist write");t.reject(i)}}async function xf(n,e){const t=K(n);try{const r=await Zw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const l=t.Fa.get(i);l&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?l.wa=!0:s.modifiedDocuments.size>0?re(l.wa):s.removedDocuments.size>0&&(re(l.wa),l.wa=!1))}),await Ns(t,r,e)}catch(r){await xs(r)}}function Vu(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((i,l)=>{const c=l.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(l,c){const u=K(l);u.onlineState=c;let d=!1;u.queries.forEach((m,g)=>{for(const v of g.U_)v.j_(c)&&(d=!0)}),d&&al(u)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ux(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Fa.get(e),i=s&&s.key;if(i){let l=new ue($.comparator);l=l.insert(i,Oe.newNoDocument(i,H.min()));const c=Q().add(i),u=new ro(H.min(),new Map,new ue(te),l,c);await xf(r,u),r.va=r.va.remove(i),r.Fa.delete(e),ll(r)}else await ma(r.localStore,e,!1).then(()=>ga(r,e,t)).catch(xs)}async function Fx(n,e){const t=K(n),r=e.batch.batchId;try{const s=await Xw(t.localStore,e);Tf(t,r,null),Ef(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ns(t,s)}catch(s){await xs(s)}}async function Bx(n,e,t){const r=K(n);try{const s=await function(l,c){const u=K(l);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(re(g!==null),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);Tf(r,e,t),Ef(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ns(r,s)}catch(s){await xs(s)}}function Ef(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Tf(n,e,t){const r=K(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function ga(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||If(n,r)})}function If(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(tl(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),ll(n))}function Mu(n,e,t){for(const r of t)r instanceof vf?(n.Ma.addReference(r.key,e),qx(n,r)):r instanceof bf?(q("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||If(n,r.key)):z()}function qx(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(q("SyncEngine","New document in limbo: "+t),n.Ca.add(r),ll(n))}function ll(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new $(ie.fromString(e)),r=n.Na.next();n.Fa.set(r,new Cx(t)),n.va=n.va.insert(t,r),uf(n.remoteStore,new Yt(mt(Ha(t.path)),r,"TargetPurposeLimboResolution",Ba.oe))}}async function Ns(n,e,t){const r=K(n),s=[],i=[],l=[];r.ba.isEmpty()||(r.ba.forEach((c,u)=>{l.push(r.Ba(u,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const m=d&&!d.fromCache;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=el.Ki(u.targetId,d);i.push(m)}}))}),await Promise.all(l),r.Sa.h_(s),await async function(u,d){const m=K(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>U.forEach(d,v=>U.forEach(v.qi,T=>m.persistence.referenceDelegate.addReference(g,v.targetId,T)).next(()=>U.forEach(v.Qi,T=>m.persistence.referenceDelegate.removeReference(g,v.targetId,T)))))}catch(g){if(!Es(g))throw g;q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const T=m.ns.get(v),A=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(A);m.ns=m.ns.insert(v,k)}}}(r.localStore,i))}async function $x(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await of(t.localStore,e);t.currentUser=e,function(i,l){i.Oa.forEach(c=>{c.forEach(u=>{u.reject(new B(M.CANCELLED,l))})}),i.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ns(t,r.us)}}function Wx(n,e){const t=K(n),r=t.Fa.get(e);if(r&&r.wa)return Q().add(r.key);{let s=Q();const i=t.Da.get(e);if(!i)return s;for(const l of i){const c=t.ba.get(l);s=s.unionWith(c.view.Ea)}return s}}function Rf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ux.bind(null,e),e.Sa.h_=Nx.bind(null,e.eventManager),e.Sa.ka=Ax.bind(null,e.eventManager),e}function zx(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bx.bind(null,e),e}class Uu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=so(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Jw(this.persistence,new Qw,e.initialUser,this.serializer)}createPersistence(e){return new Gw(Za.Hr,this.serializer)}createSharedClientState(e){return new sx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gx{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$x.bind(null,this.syncEngine),await Tx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rx}()}createDatastore(e){const t=so(e.databaseInfo.databaseId),r=function(i){return new lx(i)}(e.databaseInfo);return function(i,l,c,u){return new hx(i,l,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,l,c){return new fx(r,s,i,l,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Vu(this.syncEngine,t,0),function(){return ju.D()?new ju:new ix}())}createSyncEngine(e,t){return function(s,i,l,c,u,d,m){const g=new kx(s,i,l,c,u,d);return m&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=K(r);q("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Rs(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Nf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Hx{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=De.UNAUTHENTICATED,this.clientId=Id.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ol(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bo(n,e){n.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await of(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Fu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qx(n);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Du(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Du(e.remoteStore,s)),n._onlineComponents=e}function Kx(n){return n.name==="FirebaseError"?n.code===M.FAILED_PRECONDITION||n.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Qx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Kx(t))throw t;sr("Error using user provided cache. Falling back to memory cache: "+t),await Bo(n,new Uu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Bo(n,new Uu);return n._offlineComponents}async function Af(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Fu(n,n._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Fu(n,new Gx))),n._onlineComponents}function Yx(n){return Af(n).then(e=>e.syncEngine)}async function Sf(n){const e=await Af(n),t=e.eventManager;return t.onListen=jx.bind(null,e.syncEngine),t.onUnlisten=Lx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Dx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vx.bind(null,e.syncEngine),t}function Jx(n,e,t={}){const r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(i,l,c,u,d){const m=new Nf({next:v=>{l.enqueueAndForget(()=>yf(i,g));const T=v.docs.has(c);!T&&v.fromCache?d.reject(new B(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&u&&u.source==="server"?d.reject(new B(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new _f(Ha(c.path),m,{includeMetadataChanges:!0,ra:!0});return gf(i,g)}(await Sf(n),n.asyncQueue,e,t,r)),r.promise}function Xx(n,e,t={}){const r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(i,l,c,u,d){const m=new Nf({next:v=>{l.enqueueAndForget(()=>yf(i,g)),v.fromCache&&u.source==="server"?d.reject(new B(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new _f(c,m,{includeMetadataChanges:!0,ra:!0});return gf(i,g)}(await Sf(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Pf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Bu=new Map;/**
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
 */function Cf(n,e,t){if(!t)throw new B(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Zx(n,e,t,r){if(e===!0&&r===!0)throw new B(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qu(n){if(!$.isDocumentKey(n))throw new B(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $u(n){if($.isDocumentKey(n))throw new B(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ao(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function Ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ao(n);throw new B(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Wu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yb;switch(r.type){case"firstParty":return new wb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Bu.get(t);r&&(q("ComponentProvider","Removing Datastore"),Bu.delete(t),r.terminate())}(this),Promise.resolve()}}function e0(n,e,t,r={}){var s;const i=(n=Ct(n,lo))._getSettings(),l=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==l&&sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:l,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=De.MOCK_USER;else{c=Ch(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new B(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new De(d)}n._authCredentials=new _b(new Td(c,u))}}/**
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
 */class Vn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vn(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class en extends Vn{constructor(e,t,r){super(e,t,Ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new $(e))}withConverter(e){return new en(this.firestore,e,this._path)}}function Xe(n,e,...t){if(n=ae(n),Cf("collection","path",e),n instanceof lo){const r=ie.fromString(e,...t);return $u(r),new en(n,null,r)}{if(!(n instanceof ze||n instanceof en))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return $u(r),new en(n.firestore,null,r)}}function Ze(n,e,...t){if(n=ae(n),arguments.length===1&&(e=Id.newId()),Cf("doc","path",e),n instanceof lo){const r=ie.fromString(e,...t);return qu(r),new ze(n,null,new $(r))}{if(!(n instanceof ze||n instanceof en))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return qu(r),new ze(n.firestore,n instanceof en?n.converter:null,new $(r))}}/**
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
 */class t0{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new lf(this,"async_queue_retry"),this.hu=()=>{const t=Fo();t&&q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Fo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Rt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Es(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw St("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=il.createAndSchedule(this,e,t,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class _r extends lo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new t0}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kf(this),this._firestoreClient.terminate()}}function n0(n,e){const t=typeof n=="object"?n:Aa(),r=typeof n=="string"?n:e||"(default)",s=Gi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ah("firestore");i&&e0(s,...i)}return s}function cl(n){return n._firestoreClient||kf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kf(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,m){return new Db(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Pf(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Hx(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(Le.fromBase64String(e))}catch(t){throw new B(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ur(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class co{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ul{constructor(e){this._methodName=e}}/**
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
 */class hl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const r0=/^__.*__$/;class s0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}}class jf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new an(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Df(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class dl{constructor(e,t,r,s,i,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new dl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Vi(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Df(this.fu)&&r0.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class i0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||so(e)}Fu(e,t,r,s=!1){return new dl({fu:e,methodName:t,vu:r,path:Ae.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fl(n){const e=n._freezeSettings(),t=so(n._databaseId);return new i0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function o0(n,e,t,r,s,i={}){const l=n.Fu(i.merge||i.mergeFields?2:0,e,t,s);ml("Data must be an object, but it was:",l,r);const c=Of(r,l);let u,d;if(i.merge)u=new Ke(l.fieldMask),d=l.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const v=ya(e,g,t);if(!l.contains(v))throw new B(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Vf(m,v)||m.push(v)}u=new Ke(m),d=l.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=l.fieldTransforms;return new s0(new We(c),u,d)}class uo extends ul{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uo}}function a0(n,e,t,r){const s=n.Fu(1,e,t);ml("Data must be an object, but it was:",s,r);const i=[],l=We.empty();On(r,(u,d)=>{const m=pl(e,u,t);d=ae(d);const g=s.Su(m);if(d instanceof uo)i.push(m);else{const v=As(d,g);v!=null&&(i.push(m),l.set(m,v))}});const c=new Ke(i);return new jf(l,c,s.fieldTransforms)}function l0(n,e,t,r,s,i){const l=n.Fu(1,e,t),c=[ya(e,r,t)],u=[s];if(i.length%2!=0)throw new B(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(ya(e,i[v])),u.push(i[v+1]);const d=[],m=We.empty();for(let v=c.length-1;v>=0;--v)if(!Vf(d,c[v])){const T=c[v];let A=u[v];A=ae(A);const k=l.Su(T);if(A instanceof uo)d.push(T);else{const R=As(A,k);R!=null&&(d.push(T),m.set(T,R))}}const g=new Ke(d);return new jf(m,g,l.fieldTransforms)}function c0(n,e,t,r=!1){return As(t,n.Fu(r?4:3,e))}function As(n,e){if(Lf(n=ae(n)))return ml("Unsupported field value:",e,n),Of(n,e);if(n instanceof ul)return function(r,s){if(!Df(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let l=0;for(const c of r){let u=As(c,s.bu(l));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),l++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:Oi(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oi(s.serializer,i)}}if(r instanceof hl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ur)return{bytesValue:Xd(s.serializer,r._byteString)};if(r instanceof ze){const i=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(i))throw s.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ja(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ao(r)}`)}(n,e)}function Of(n,e){const t={};return Rd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(n,(r,s)=>{const i=As(s,e.pu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Lf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof hl||n instanceof ur||n instanceof ze||n instanceof ul)}function ml(n,e,t){if(!Lf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ao(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function ya(n,e,t){if((e=ae(e))instanceof co)return e._internalPath;if(typeof e=="string")return pl(n,e);throw Vi("Field path arguments must be of type string or ",n,!1,void 0,t)}const u0=new RegExp("[~\\*/\\[\\]]");function pl(n,e,t){if(e.search(u0)>=0)throw Vi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new co(...e.split("."))._internalPath}catch{throw Vi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vi(n,e,t,r,s){const i=r&&!r.isEmpty(),l=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||l)&&(u+=" (found",i&&(u+=` in field ${r}`),l&&(u+=` in document ${s}`),u+=")"),new B(M.INVALID_ARGUMENT,c+n+u)}function Vf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Mf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class h0 extends Mf{data(){return super.data()}}function gl(n,e){return typeof e=="string"?pl(n,e):e instanceof co?e._internalPath:e._delegate._internalPath}/**
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
 */function d0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yl{}class Uf extends yl{}function _l(n,e,...t){let r=[];e instanceof yl&&r.push(e),r=r.concat(t),function(i){const l=i.filter(u=>u instanceof bl).length,c=i.filter(u=>u instanceof vl).length;if(l>1||l>0&&c>0)throw new B(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class vl extends Uf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new vl(e,t,r)}_apply(e){const t=this._parse(e);return Ff(e._query,t),new Vn(e.firestore,e.converter,la(e._query,t))}_parse(e){const t=fl(e.firestore);return function(i,l,c,u,d,m,g){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new B(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Gu(g,m);const T=[];for(const A of g)T.push(zu(u,i,A));v={arrayValue:{values:T}}}else v=zu(u,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Gu(g,m),v=c0(c,l,g,m==="in"||m==="not-in");return ye.create(d,m,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class bl extends yl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let l=s;const c=i.getFlattenedFilters();for(const u of c)Ff(l,u),l=la(l,u)}(e._query,t),new Vn(e.firestore,e.converter,la(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wl extends Uf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wl(e,t)}_apply(e){const t=function(s,i,l){if(s.startAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hs(i,l)}(e._query,this._field,this._direction);return new Vn(e.firestore,e.converter,function(s,i){const l=s.explicitOrderBy.concat([i]);return new pr(s.path,s.collectionGroup,l,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function f0(n,e="asc"){const t=e,r=gl("orderBy",n);return wl._create(r,t)}function zu(n,e,t){if(typeof(t=ae(t))=="string"){if(t==="")throw new B(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Od(e)&&t.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!$.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mu(n,new $(r))}if(t instanceof ze)return mu(n,t._key);throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ao(t)}.`)}function Gu(n,e){if(!Array.isArray(n)||n.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ff(n,e){const t=function(s,i){for(const l of s)for(const c of l.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class m0{convertValue(e,t="none"){switch(Pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return On(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new hl(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$a(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const t=rn(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);re(sf(r));const s=new cs(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||St(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function p0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Kr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bf extends Mf{constructor(e,t,r,s,i,l){super(e,t,r,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(gl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class gi extends Bf{data(e={}){return super.data(e)}}class g0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new gi(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map(c=>{const u=new gi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:l++}})}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new gi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),m=l.indexOf(c.doc.key)),{type:y0(c.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function y0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function _0(n){n=Ct(n,ze);const e=Ct(n.firestore,_r);return Jx(cl(e),n._key).then(t=>v0(e,n,t))}class qf extends m0{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}function vr(n){n=Ct(n,Vn);const e=Ct(n.firestore,_r),t=cl(e),r=new qf(e);return d0(n._query),Xx(t,n._query).then(s=>new g0(e,r,n,s))}function Cn(n,e,t,...r){n=Ct(n,ze);const s=Ct(n.firestore,_r),i=fl(s);let l;return l=typeof(e=ae(e))=="string"||e instanceof co?l0(i,"updateDoc",n._key,e,t,r):a0(i,"updateDoc",n._key,e),Tl(s,[l.toMutation(n._key,it.exists(!0))])}function xl(n){return Tl(Ct(n.firestore,_r),[new Ka(n._key,it.none())])}function El(n,e){const t=Ct(n.firestore,_r),r=Ze(n),s=p0(n.converter,e);return Tl(t,[o0(fl(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,it.exists(!1))]).then(()=>r)}function Tl(n,e){return function(r,s){const i=new Rt;return r.asyncQueue.enqueueAndForget(async()=>Mx(await Yx(r),s,i)),i.promise}(cl(n),e)}function v0(n,e,t){const r=t.docs.get(e._key),s=new qf(n);return new Bf(n,s,e._key,r,new Kr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){mr=s})(Dn),In(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const l=r.getProvider("app").getImmediate(),c=new _r(new vb(r.getProvider("auth-internal")),new Eb(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cs(d.options.projectId,m)}(l,s),l);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),dt(uu,"4.6.3",e),dt(uu,"4.6.3","esm2017")})();/**
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
 */const $f="firebasestorage.googleapis.com",Wf="storageBucket",b0=2*60*1e3,w0=10*60*1e3,x0=1e3;/**
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
 */class he extends yt{constructor(e,t,r=0){super(qo(e),`Firebase Storage: ${t} (${qo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var le;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(le||(le={}));function qo(n){return"storage/"+n}function Il(){const n="An unknown error occurred, please check the error payload for server response.";return new he(le.UNKNOWN,n)}function E0(n){return new he(le.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function T0(n){return new he(le.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function I0(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(le.UNAUTHENTICATED,n)}function R0(){return new he(le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function N0(n){return new he(le.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function zf(){return new he(le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gf(){return new he(le.CANCELED,"User canceled the upload/download.")}function A0(n){return new he(le.INVALID_URL,"Invalid URL '"+n+"'.")}function S0(n){return new he(le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function P0(){return new he(le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wf+"' property when initializing the app?")}function Hf(){return new he(le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C0(){return new he(le.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function k0(){return new he(le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function j0(n){return new he(le.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _a(n){return new he(le.INVALID_ARGUMENT,n)}function Kf(){return new he(le.APP_DELETED,"The Firebase app was deleted.")}function D0(n){return new he(le.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ts(n,e){return new he(le.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Br(n){throw new he(le.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Qe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Qe.makeFromUrl(e,t)}catch{return new Qe(e,"")}if(r.path==="")return r;throw S0(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+s+l,"i"),u={bucket:1,path:3};function d(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",T=new RegExp(`^https?://${g}/${m}/b/${s}/o${v}`,"i"),A={bucket:1,path:3},k=t===$f?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",L=new RegExp(`^https?://${k}/${s}/${R}`,"i"),j=[{regex:c,indices:u,postModify:i},{regex:T,indices:A,postModify:d},{regex:L,indices:{bucket:1,path:2},postModify:d}];for(let D=0;D<j.length;D++){const V=j[D],O=V.regex.exec(e);if(O){const E=O[V.indices.bucket];let y=O[V.indices.path];y||(y=""),r=new Qe(E,y),V.postModify(r);break}}if(r==null)throw A0(e);return r}}class O0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function L0(n,e,t){let r=1,s=null,i=null,l=!1,c=0;function u(){return c===2}let d=!1;function m(...R){d||(d=!0,e.apply(null,R))}function g(R){s=setTimeout(()=>{s=null,n(T,u())},R)}function v(){i&&clearTimeout(i)}function T(R,...L){if(d){v();return}if(R){v(),m.call(null,R,...L);return}if(u()||l){v(),m.call(null,R,...L);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,g(j)}let A=!1;function k(R){A||(A=!0,v(),!d&&(s!==null?(R||(c=2),clearTimeout(s),g(0)):R||(c=1)))}return g(0),i=setTimeout(()=>{l=!0,k(!0)},t),k}function V0(n){n(!1)}/**
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
 */function M0(n){return n!==void 0}function U0(n){return typeof n=="function"}function F0(n){return typeof n=="object"&&!Array.isArray(n)}function ho(n){return typeof n=="string"||n instanceof String}function Hu(n){return Rl()&&n instanceof Blob}function Rl(){return typeof Blob<"u"}function Ku(n,e,t,r){if(r<e)throw _a(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw _a(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function br(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Qf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
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
 */var En;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(En||(En={}));/**
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
 */function Yf(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class B0{constructor(e,t,r,s,i,l,c,u,d,m,g,v=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,A)=>{this.resolve_=T,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ii(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const l=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(l),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(l),this.pendingConnection_=null;const c=i.getErrorCode()===En.NO_ERROR,u=i.getStatus();if(!c||Yf(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===En.ABORT;r(!1,new ii(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new ii(d,i))})},t=(r,s)=>{const i=this.resolve_,l=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());M0(u)?i(u):i()}catch(u){l(u)}else if(c!==null){const u=Il();u.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,u)):l(u)}else if(s.canceled){const u=this.appDelete_?Kf():Gf();l(u)}else{const u=zf();l(u)}};this.canceled_?t(!1,new ii(!1,null,!0)):this.backoffId_=L0(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&V0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ii{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function q0(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function W0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function z0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function G0(n,e,t,r,s,i,l=!0){const c=Qf(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return W0(d,e),q0(d,t),$0(d,i),z0(d,r),new B0(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,l)}/**
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
 */function H0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function K0(...n){const e=H0();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Rl())return new Blob(n);throw new he(le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Q0(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Y0(n){if(typeof atob>"u")throw j0("base-64");return atob(n)}/**
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
 */const ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $o{constructor(e,t){this.data=e,this.contentType=t||null}}function J0(n,e){switch(n){case ht.RAW:return new $o(Jf(e));case ht.BASE64:case ht.BASE64URL:return new $o(Xf(n,e));case ht.DATA_URL:return new $o(Z0(e),eE(e))}throw Il()}function Jf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,l=n.charCodeAt(++t);r=65536|(i&1023)<<10|l&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function X0(n){let e;try{e=decodeURIComponent(n)}catch{throw ts(ht.DATA_URL,"Malformed data URL.")}return Jf(e)}function Xf(n,e){switch(n){case ht.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ts(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ht.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ts(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Y0(e)}catch(s){throw s.message.includes("polyfill")?s:ts(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Zf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ts(ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=tE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Z0(n){const e=new Zf(n);return e.base64?Xf(ht.BASE64,e.rest):X0(e.rest)}function eE(n){return new Zf(n).contentType}function tE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Kt{constructor(e,t){let r=0,s="";Hu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Hu(this.data_)){const r=this.data_,s=Q0(r,e,t);return s===null?null:new Kt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Kt(r,!0)}}static getBlob(...e){if(Rl()){const t=e.map(r=>r instanceof Kt?r.data_:r);return new Kt(K0.apply(null,t))}else{const t=e.map(l=>ho(l)?J0(ht.RAW,l).data:l.data_);let r=0;t.forEach(l=>{r+=l.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(l=>{for(let c=0;c<l.length;c++)s[i++]=l[c]}),new Kt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function em(n){let e;try{e=JSON.parse(n)}catch{return null}return F0(e)?e:null}/**
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
 */function nE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function rE(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function tm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function sE(n,e){return e}class Fe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||sE}}let oi=null;function iE(n){return!ho(n)||n.length<2?n:tm(n)}function nm(){if(oi)return oi;const n=[];n.push(new Fe("bucket")),n.push(new Fe("generation")),n.push(new Fe("metageneration")),n.push(new Fe("name","fullPath",!0));function e(i,l){return iE(l)}const t=new Fe("name");t.xform=e,n.push(t);function r(i,l){return l!==void 0?Number(l):l}const s=new Fe("size");return s.xform=r,n.push(s),n.push(new Fe("timeCreated")),n.push(new Fe("updated")),n.push(new Fe("md5Hash",null,!0)),n.push(new Fe("cacheControl",null,!0)),n.push(new Fe("contentDisposition",null,!0)),n.push(new Fe("contentEncoding",null,!0)),n.push(new Fe("contentLanguage",null,!0)),n.push(new Fe("contentType",null,!0)),n.push(new Fe("metadata","customMetadata",!0)),oi=n,oi}function oE(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Qe(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function aE(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const l=t[i];r[l.local]=l.xform(r,e[l.server])}return oE(r,n),r}function rm(n,e,t){const r=em(e);return r===null?null:aE(n,r,t)}function lE(n,e,t,r){const s=em(e);if(s===null||!ho(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const l=encodeURIComponent;return i.split(",").map(d=>{const m=n.bucket,g=n.fullPath,v="/b/"+l(m)+"/o/"+l(g),T=br(v,t,r),A=Qf({alt:"media",token:d});return T+A})[0]}function sm(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Mn{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Nt(n){if(!n)throw Il()}function Nl(n,e){function t(r,s){const i=rm(n,s,e);return Nt(i!==null),i}return t}function cE(n,e){function t(r,s){const i=rm(n,s,e);return Nt(i!==null),lE(i,s,n.host,n._protocol)}return t}function Ss(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=R0():s=I0():t.getStatus()===402?s=T0(n.bucket):t.getStatus()===403?s=N0(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Al(n){const e=Ss(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=E0(n.path)),i.serverResponse=s.serverResponse,i}return t}function uE(n,e,t){const r=e.fullServerUrl(),s=br(r,n.host,n._protocol),i="GET",l=n.maxOperationRetryTime,c=new Mn(s,i,Nl(n,t),l);return c.errorHandler=Al(e),c}function hE(n,e,t){const r=e.fullServerUrl(),s=br(r,n.host,n._protocol),i="GET",l=n.maxOperationRetryTime,c=new Mn(s,i,cE(n,t),l);return c.errorHandler=Al(e),c}function dE(n,e){const t=e.fullServerUrl(),r=br(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function l(u,d){}const c=new Mn(r,s,l,i);return c.successCodes=[200,204],c.errorHandler=Al(e),c}function fE(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function im(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=fE(null,e)),r}function mE(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function c(){let j="";for(let D=0;D<2;D++)j=j+Math.random().toString().slice(2);return j}const u=c();l["Content-Type"]="multipart/related; boundary="+u;const d=im(e,r,s),m=sm(d,t),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+u+"--",T=Kt.getBlob(g,r,v);if(T===null)throw Hf();const A={name:d.fullPath},k=br(i,n.host,n._protocol),R="POST",L=n.maxUploadRetryTime,P=new Mn(k,R,Nl(n,t),L);return P.urlParams=A,P.headers=l,P.body=T.uploadData(),P.errorHandler=Ss(e),P}class Mi{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function Sl(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Nt(!1)}return Nt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function pE(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),l=im(e,r,s),c={name:l.fullPath},u=br(i,n.host,n._protocol),d="POST",m={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},g=sm(l,t),v=n.maxUploadRetryTime;function T(k){Sl(k);let R;try{R=k.getResponseHeader("X-Goog-Upload-URL")}catch{Nt(!1)}return Nt(ho(R)),R}const A=new Mn(u,d,T,v);return A.urlParams=c,A.headers=m,A.body=g,A.errorHandler=Ss(e),A}function gE(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(d){const m=Sl(d,["active","final"]);let g=null;try{g=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Nt(!1)}g||Nt(!1);const v=Number(g);return Nt(!isNaN(v)),new Mi(v,r.size(),m==="final")}const l="POST",c=n.maxUploadRetryTime,u=new Mn(t,l,i,c);return u.headers=s,u.errorHandler=Ss(e),u}const Qu=256*1024;function yE(n,e,t,r,s,i,l,c){const u=new Mi(0,0);if(l?(u.current=l.current,u.total=l.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw C0();const d=u.total-u.current;let m=d;s>0&&(m=Math.min(m,s));const g=u.current,v=g+m;let T="";m===0?T="finalize":d===m?T="upload, finalize":T="upload";const A={"X-Goog-Upload-Command":T,"X-Goog-Upload-Offset":`${u.current}`},k=r.slice(g,v);if(k===null)throw Hf();function R(D,V){const O=Sl(D,["active","final"]),E=u.current+m,y=r.size();let _;return O==="final"?_=Nl(e,i)(D,V):_=null,new Mi(E,y,O==="final",_)}const L="POST",P=e.maxUploadRetryTime,j=new Mn(t,L,R,P);return j.headers=A,j.body=k.uploadData(),j.progressCallback=c||null,j.errorHandler=Ss(n),j}const $e={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wo(n){switch(n){case"running":case"pausing":case"canceling":return $e.RUNNING;case"paused":return $e.PAUSED;case"success":return $e.SUCCESS;case"canceled":return $e.CANCELED;case"error":return $e.ERROR;default:return $e.ERROR}}/**
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
 */class _E{constructor(e,t,r){if(U0(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Gn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class vE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=En.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=En.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=En.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Br("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Br("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Br("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Br("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Br("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bE extends vE{initXhr(){this.xhr_.responseType="text"}}function vn(){return new bE}/**
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
 */class wE{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=nm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(le.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Yf(s.status,[]))if(i)s=zf();else{this.sleepTime=Math.max(this.sleepTime*2,x0),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(le.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=pE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,vn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=gE(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,vn,t,r);this._request=i,i.getPromise().then(l=>{l=l,this._request=void 0,this._updateProgress(l.current),this._needToFetchStatus=!1,l.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Qu*this._chunkMultiplier,t=new Mi(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let l;try{l=yE(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const c=this._ref.storage._makeRequest(l,vn,s,i,!1);this._request=c,c.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Qu*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=uE(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,vn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=mE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,vn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Gf(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Wo(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new _E(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Wo(this._state)){case $e.SUCCESS:Gn(this._resolve.bind(null,this.snapshot))();break;case $e.CANCELED:case $e.ERROR:const t=this._reject;Gn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Wo(this._state)){case $e.RUNNING:case $e.PAUSED:e.next&&Gn(e.next.bind(e,this.snapshot))();break;case $e.SUCCESS:e.complete&&Gn(e.complete.bind(e))();break;case $e.CANCELED:case $e.ERROR:e.error&&Gn(e.error.bind(e,this._error))();break;default:e.error&&Gn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class kn{constructor(e,t){this._service=e,t instanceof Qe?this._location=t:this._location=Qe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new kn(e,t)}get root(){const e=new Qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tm(this._location.path)}get storage(){return this._service}get parent(){const e=nE(this._location.path);if(e===null)return null;const t=new Qe(this._location.bucket,e);return new kn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw D0(e)}}function xE(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new wE(n,new Kt(e),t)}function EE(n){n._throwIfRoot("getDownloadURL");const e=hE(n.storage,n._location,nm());return n.storage.makeRequestWithTokens(e,vn).then(t=>{if(t===null)throw k0();return t})}function TE(n){n._throwIfRoot("deleteObject");const e=dE(n.storage,n._location);return n.storage.makeRequestWithTokens(e,vn)}function IE(n,e){const t=rE(n._location.path,e),r=new Qe(n._location.bucket,t);return new kn(n.storage,r)}/**
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
 */function RE(n){return/^[A-Za-z]+:\/\//.test(n)}function NE(n,e){return new kn(n,e)}function om(n,e){if(n instanceof Pl){const t=n;if(t._bucket==null)throw P0();const r=new kn(t,t._bucket);return e!=null?om(r,e):r}else return e!==void 0?IE(n,e):n}function AE(n,e){if(e&&RE(e)){if(n instanceof Pl)return NE(n,e);throw _a("To use ref(service, url), the first argument must be a Storage instance.")}else return om(n,e)}function Yu(n,e){const t=e==null?void 0:e[Wf];return t==null?null:Qe.makeFromBucketSpec(t,n)}function SE(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Ch(s,n.app.options.projectId))}class Pl{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=$f,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=b0,this._maxUploadRetryTime=w0,this._requests=new Set,s!=null?this._bucket=Qe.makeFromBucketSpec(s,this._host):this._bucket=Yu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qe.makeFromBucketSpec(this._url,e):this._bucket=Yu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ku("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ku("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new O0(Kf());{const l=G0(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Ju="@firebase/storage",Xu="0.12.5";/**
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
 */const am="storage";function lm(n,e,t){return n=ae(n),xE(n,e,t)}function Cl(n){return n=ae(n),EE(n)}function cm(n){return n=ae(n),TE(n)}function Ps(n,e){return n=ae(n),AE(n,e)}function fo(n=Aa(),e){n=ae(n);const r=Gi(n,am).getImmediate({identifier:e}),s=Ah("storage");return s&&PE(r,...s),r}function PE(n,e,t,r={}){SE(n,e,t,r)}function CE(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Pl(t,r,s,e,Dn)}function kE(){In(new tn(am,CE,"PUBLIC").setMultipleInstances(!0)),dt(Ju,Xu,""),dt(Ju,Xu,"esm2017")}kE();const jE={apiKey:"AIzaSyDLWyxg82EfeKEjovWBrScFRs6D8tViJpc",authDomain:"riverside-b3d90.firebaseapp.com",projectId:"riverside-b3d90",storageBucket:"riverside-b3d90.appspot.com",messagingSenderId:"479252671468",appId:"1:479252671468:web:03eb7589cd1c60afdaaec9",measurementId:"G-6EMZVK7PJN"},kl=Dh(jE),He=pb(kl);new ct;const _e=n0(kl),um=fo(kl);function DE(){const[n,e]=w.useState(!1),[t,r]=w.useState(null),[s,i]=w.useState(!1),[l,c]=w.useState(!1),u=w.useRef(null),d=w.useRef(null),m="admin@example.com",g=w.useRef(null),v=kt();w.useEffect(()=>{g.current=new Audio("/click.mp3");const P=Qi(He,j=>{r(j)});return()=>P()},[]),w.useEffect(()=>{const P=j=>{u.current&&!u.current.contains(j.target)&&i(!1),d.current&&!d.current.contains(j.target)&&c(!1)};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[]);const T=()=>{g.current.play(),e(!1)},A=async()=>{try{await Ai(He),v("/")}catch(P){console.error(P)}},k=()=>{e(!n)},R=()=>{i(!s)},L=()=>{c(!l)};return a.jsxs("nav",{className:"navbar",children:[a.jsx("div",{className:"navbar-title mx-3",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx(ps,{to:"/",className:"mb-4 md:mb-0 zoom horizontal-spin navbar-logo",onClick:T,children:a.jsx("img",{src:"/NavbarLogo.png",alt:"Main Image",className:"navbar-logo"})}),a.jsx("button",{className:"block md:hidden ml-4",onClick:k,children:a.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})]})}),a.jsx("div",{className:`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${n?"block":"hidden"} md:block`,children:a.jsxs("ul",{className:"navbar-links flex items-center",children:[t?a.jsxs(a.Fragment,{children:[a.jsxs("li",{className:"relative",ref:u,children:[a.jsx("button",{onClick:R,className:"worship-link",children:"Prayer Requests"}),s&&a.jsxs("ul",{className:"absolute bg-gray-800 text-white rounded mt-2 shadow-lg",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[a.jsx("li",{children:a.jsx(ce,{to:"/prayer-request",className:({isActive:P})=>P?"active-link block px-4 py-2":"block px-4 py-2",onClick:T,children:"View Prayer Requests"})}),a.jsx("li",{children:a.jsx(ce,{to:"/submit-prayer-requests",className:({isActive:P})=>P?"active-link block px-4 py-2":"block px-4 py-2",onClick:T,children:"Submit Prayer Request"})})]})]}),a.jsx("li",{children:a.jsx(ce,{to:"/worship",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Our Worship"})}),a.jsx("li",{children:a.jsx(ce,{to:"/daily-posts",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Daily Posts"})}),a.jsx("li",{children:a.jsx(ce,{to:"/givings",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Giving"})}),a.jsx("li",{children:a.jsx(ce,{to:"/services",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Service Times"})}),t.email===m&&a.jsxs("li",{className:"relative",ref:d,children:[a.jsx("button",{onClick:L,className:"upload-link",children:"Update Site"}),l&&a.jsxs("ul",{className:"absolute bg-gray-800 text-white rounded mt-2 shadow-lg",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[a.jsx("li",{children:a.jsx(ce,{to:"/upload-video",className:({isActive:P})=>P?"active-link block px-4 py-2":"block px-4 py-2",onClick:T,children:"Upload Video"})}),a.jsx("li",{children:a.jsx(ce,{to:"/alter-uploads",className:({isActive:P})=>P?"active-link block px-4 py-2":"block px-4 py-2",onClick:T,children:"Alter Video"})}),a.jsx("li",{children:a.jsx(ce,{to:"/update-prayer-requests",className:({isActive:P})=>P?"active-link block px-4 py-2":"block px-4 py-2",onClick:T,children:"Alter Prayer Requests"})}),a.jsx("li",{children:a.jsx(ce,{to:"/add-post",className:({isActive:P})=>P?"active-link block px-4 py-2":"block px-4 py-2",onClick:T,children:"Create Daily Post"})}),a.jsx("li",{children:a.jsx(ce,{to:"/update-daily-post",className:({isActive:P})=>P?"active-link block px-4 py-2":"block px-4 py-2",onClick:T,children:"Update Daily Post"})})]})]}),a.jsx("li",{children:a.jsx(ce,{to:"/contact-us",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Contact Us"})}),a.jsx("li",{children:a.jsx(ce,{to:"/facebook-live",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Shared Videos"})}),a.jsxs("li",{className:"welcome-item mx-4 bg-teal-500 rounded p-1 text-center hover:bg-teal-700 text-white",children:["Welcome, ",t.email]}),a.jsx("li",{children:a.jsx("button",{onClick:A,className:"logout-button",children:"Logout"})})]}):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(ce,{to:"/login",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Login"})}),a.jsx("li",{children:a.jsx(ce,{to:"/register",onClick:T,className:({isActive:P})=>P?"active-link":"",children:"Register"})})]}),a.jsx("li",{className:"ml-4 navbar-social-icon facebook zoom",children:a.jsx("a",{href:"https://www.facebook.com/Riversidechurchwestville1",target:"_blank",rel:"noopener noreferrer",children:a.jsx("i",{className:"fab fa-facebook"})})}),a.jsx("li",{className:"ml-4 navbar-social-icon youtube zoom",children:a.jsx("a",{href:"https://www.youtube.com/channel/UCt9cUcS2QRvknkcwcFEVtWw",target:"_blank",rel:"noopener noreferrer",children:a.jsx("i",{className:"fab fa-youtube"})})})]})})]})}var hm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var i="",l=0;l<arguments.length;l++){var c=arguments[l];c&&(i=s(i,r(c)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var c in i)e.call(i,c)&&i[c]&&(l=s(l,c));return l}function s(i,l){return l?i?i+" "+l:i+l:i}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(hm);var OE=hm.exports;const ns=dp(OE);function va(){return va=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},va.apply(null,arguments)}function dm(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Zu(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function LE(n){var e=VE(n,"string");return typeof e=="symbol"?e:String(e)}function VE(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ME(n,e,t){var r=w.useRef(n!==void 0),s=w.useState(e),i=s[0],l=s[1],c=n!==void 0,u=r.current;return r.current=c,!c&&u&&i!==e&&l(e),[c?n:i,w.useCallback(function(d){for(var m=arguments.length,g=new Array(m>1?m-1:0),v=1;v<m;v++)g[v-1]=arguments[v];t&&t.apply(void 0,[d].concat(g)),l(d)},[t])]}function UE(n,e){return Object.keys(e).reduce(function(t,r){var s,i=t,l=i[Zu(r)],c=i[r],u=dm(i,[Zu(r),r].map(LE)),d=e[r],m=ME(c,l,n[d]),g=m[0],v=m[1];return va({},u,(s={},s[r]=g,s[d]=v,s))},n)}function ba(n,e){return ba=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},ba(n,e)}function FE(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,ba(n,e)}const BE=["xxl","xl","lg","md","sm","xs"],qE="xs",fm=w.createContext({prefixes:{},breakpoints:BE,minBreakpoint:qE});function jl(n,e){const{prefixes:t}=w.useContext(fm);return n||t[e]||e}function $E(){const{dir:n}=w.useContext(fm);return n==="rtl"}function WE(n){return n&&n.ownerDocument||document}function zE(n){var e=WE(n);return e&&e.defaultView||window}function GE(n,e){return zE(n).getComputedStyle(n,e)}var HE=/([A-Z])/g;function KE(n){return n.replace(HE,"-$1").toLowerCase()}var QE=/^ms-/;function ai(n){return KE(n).replace(QE,"-ms-")}var YE=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function JE(n){return!!(n&&YE.test(n))}function mm(n,e){var t="",r="";if(typeof e=="string")return n.style.getPropertyValue(ai(e))||GE(n).getPropertyValue(ai(e));Object.keys(e).forEach(function(s){var i=e[s];!i&&i!==0?n.style.removeProperty(ai(s)):JE(s)?r+=s+"("+i+") ":t+=ai(s)+": "+i+";"}),r&&(t+="transform: "+r+";"),n.style.cssText+=";"+t}const eh={disabled:!1},pm=Be.createContext(null);var XE=function(e){return e.scrollTop},Qr="unmounted",yn="exited",_n="entering",Jn="entered",wa="exiting",Ot=function(n){FE(e,n);function e(r,s){var i;i=n.call(this,r,s)||this;var l=s,c=l&&!l.isMounting?r.enter:r.appear,u;return i.appearStatus=null,r.in?c?(u=yn,i.appearStatus=_n):u=Jn:r.unmountOnExit||r.mountOnEnter?u=Qr:u=yn,i.state={status:u},i.nextCallback=null,i}e.getDerivedStateFromProps=function(s,i){var l=s.in;return l&&i.status===Qr?{status:yn}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(s){var i=null;if(s!==this.props){var l=this.state.status;this.props.in?l!==_n&&l!==Jn&&(i=_n):(l===_n||l===Jn)&&(i=wa)}this.updateStatus(!1,i)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var s=this.props.timeout,i,l,c;return i=l=c=s,s!=null&&typeof s!="number"&&(i=s.exit,l=s.enter,c=s.appear!==void 0?s.appear:l),{exit:i,enter:l,appear:c}},t.updateStatus=function(s,i){if(s===void 0&&(s=!1),i!==null)if(this.cancelNextCallback(),i===_n){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:qr.findDOMNode(this);l&&XE(l)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===yn&&this.setState({status:Qr})},t.performEnter=function(s){var i=this,l=this.props.enter,c=this.context?this.context.isMounting:s,u=this.props.nodeRef?[c]:[qr.findDOMNode(this),c],d=u[0],m=u[1],g=this.getTimeouts(),v=c?g.appear:g.enter;if(!s&&!l||eh.disabled){this.safeSetState({status:Jn},function(){i.props.onEntered(d)});return}this.props.onEnter(d,m),this.safeSetState({status:_n},function(){i.props.onEntering(d,m),i.onTransitionEnd(v,function(){i.safeSetState({status:Jn},function(){i.props.onEntered(d,m)})})})},t.performExit=function(){var s=this,i=this.props.exit,l=this.getTimeouts(),c=this.props.nodeRef?void 0:qr.findDOMNode(this);if(!i||eh.disabled){this.safeSetState({status:yn},function(){s.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:wa},function(){s.props.onExiting(c),s.onTransitionEnd(l.exit,function(){s.safeSetState({status:yn},function(){s.props.onExited(c)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(s,i){i=this.setNextCallback(i),this.setState(s,i)},t.setNextCallback=function(s){var i=this,l=!0;return this.nextCallback=function(c){l&&(l=!1,i.nextCallback=null,s(c))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},t.onTransitionEnd=function(s,i){this.setNextCallback(i);var l=this.props.nodeRef?this.props.nodeRef.current:qr.findDOMNode(this),c=s==null&&!this.props.addEndListener;if(!l||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],d=u[0],m=u[1];this.props.addEndListener(d,m)}s!=null&&setTimeout(this.nextCallback,s)},t.render=function(){var s=this.state.status;if(s===Qr)return null;var i=this.props,l=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var c=dm(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Be.createElement(pm.Provider,{value:null},typeof l=="function"?l(s,c):Be.cloneElement(Be.Children.only(l),c))},e}(Be.Component);Ot.contextType=pm;Ot.propTypes={};function Hn(){}Ot.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Hn,onEntering:Hn,onEntered:Hn,onExit:Hn,onExiting:Hn,onExited:Hn};Ot.UNMOUNTED=Qr;Ot.EXITED=yn;Ot.ENTERING=_n;Ot.ENTERED=Jn;Ot.EXITING=wa;const ZE=Ot,eT=!!(typeof window<"u"&&window.document&&window.document.createElement);var xa=!1,Ea=!1;try{var zo={get passive(){return xa=!0},get once(){return Ea=xa=!0}};eT&&(window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,!0))}catch{}function tT(n,e,t,r){if(r&&typeof r!="boolean"&&!Ea){var s=r.once,i=r.capture,l=t;!Ea&&s&&(l=t.__once||function c(u){this.removeEventListener(e,c,i),t.call(this,u)},t.__once=l),n.addEventListener(e,l,xa?r:i)}n.addEventListener(e,t,r)}function nT(n,e,t,r){var s=r&&typeof r!="boolean"?r.capture:r;n.removeEventListener(e,t,s),t.__once&&n.removeEventListener(e,t.__once,s)}function gm(n,e,t,r){return tT(n,e,t,r),function(){nT(n,e,t,r)}}function rT(n,e,t,r){if(t===void 0&&(t=!1),r===void 0&&(r=!0),n){var s=document.createEvent("HTMLEvents");s.initEvent(e,t,r),n.dispatchEvent(s)}}function sT(n){var e=mm(n,"transitionDuration")||"",t=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*t}function iT(n,e,t){t===void 0&&(t=5);var r=!1,s=setTimeout(function(){r||rT(n,"transitionend",!0)},e+t),i=gm(n,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(s),i()}}function oT(n,e,t,r){t==null&&(t=sT(n)||0);var s=iT(n,t,r),i=gm(n,"transitionend",e);return function(){s(),i()}}function th(n,e){const t=mm(n,e)||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function aT(n,e){const t=th(n,"transitionDuration"),r=th(n,"transitionDelay"),s=oT(n,i=>{i.target===n&&(s(),e(i))},t+r)}function lT(n){n.offsetHeight}const nh=n=>!n||typeof n=="function"?n:e=>{n.current=e};function cT(n,e){const t=nh(n),r=nh(e);return s=>{t&&t(s),r&&r(s)}}function uT(n,e){return w.useMemo(()=>cT(n,e),[n,e])}function hT(n){return n&&"setState"in n?qr.findDOMNode(n):n??null}const dT=Be.forwardRef(({onEnter:n,onEntering:e,onEntered:t,onExit:r,onExiting:s,onExited:i,addEndListener:l,children:c,childRef:u,...d},m)=>{const g=w.useRef(null),v=uT(g,u),T=O=>{v(hT(O))},A=O=>E=>{O&&g.current&&O(g.current,E)},k=w.useCallback(A(n),[n]),R=w.useCallback(A(e),[e]),L=w.useCallback(A(t),[t]),P=w.useCallback(A(r),[r]),j=w.useCallback(A(s),[s]),D=w.useCallback(A(i),[i]),V=w.useCallback(A(l),[l]);return a.jsx(ZE,{ref:m,...d,onEnter:k,onEntered:L,onEntering:R,onExit:P,onExited:D,onExiting:j,addEndListener:V,nodeRef:g,children:typeof c=="function"?(O,E)=>c(O,{...E,ref:T}):Be.cloneElement(c,{ref:T})})}),fT=dT;function ym(n){const e=w.useRef(n);return w.useEffect(()=>{e.current=n},[n]),e}function Ta(n){const e=ym(n);return w.useCallback(function(...t){return e.current&&e.current(...t)},[e])}function mT(){const n=w.useRef(!0),e=w.useRef(()=>n.current);return w.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),e.current}const pT=["as","disabled"];function gT(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function yT(n){return!n||n.trim()==="#"}function _m({tagName:n,disabled:e,href:t,target:r,rel:s,role:i,onClick:l,tabIndex:c=0,type:u}){n||(t!=null||r!=null||s!=null?n="a":n="button");const d={tagName:n};if(n==="button")return[{type:u||"button",disabled:e},d];const m=v=>{if((e||n==="a"&&yT(t))&&v.preventDefault(),e){v.stopPropagation();return}l==null||l(v)},g=v=>{v.key===" "&&(v.preventDefault(),m(v))};return n==="a"&&(t||(t="#"),e&&(t=void 0)),[{role:i??"button",disabled:void 0,tabIndex:e?void 0:c,href:t,target:n==="a"?r:void 0,"aria-disabled":e||void 0,rel:n==="a"?s:void 0,onClick:m,onKeyDown:g},d]}const _T=w.forwardRef((n,e)=>{let{as:t,disabled:r}=n,s=gT(n,pT);const[i,{tagName:l}]=_m(Object.assign({tagName:t,disabled:r},s));return a.jsx(l,Object.assign({},s,i,{ref:e}))});_T.displayName="Button";const vT=["onKeyDown"];function bT(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function wT(n){return!n||n.trim()==="#"}const vm=w.forwardRef((n,e)=>{let{onKeyDown:t}=n,r=bT(n,vT);const[s]=_m(Object.assign({tagName:"a"},r)),i=Ta(l=>{s.onKeyDown(l),t==null||t(l)});return wT(r.href)||r.role==="button"?a.jsx("a",Object.assign({ref:e},r,s,{onKeyDown:i})):a.jsx("a",Object.assign({ref:e},r,{onKeyDown:t}))});vm.displayName="Anchor";const rh=vm;function xT(n,e){const t=w.useRef(!0);w.useEffect(()=>{if(t.current){t.current=!1;return}return n()},e)}function ET(n){const e=w.useRef(n);return e.current=n,e}function TT(n){const e=ET(n);w.useEffect(()=>()=>e.current(),[])}const Ia=2**31-1;function bm(n,e,t){const r=t-Date.now();n.current=r<=Ia?setTimeout(e,r):setTimeout(()=>bm(n,e,t),Ia)}function IT(){const n=mT(),e=w.useRef();return TT(()=>clearTimeout(e.current)),w.useMemo(()=>{const t=()=>clearTimeout(e.current);function r(s,i=0){n()&&(t(),i<=Ia?e.current=setTimeout(s,i):bm(e,s,Date.now()+i))}return{set:r,clear:t,handleRef:e}},[])}const wm=w.forwardRef(({className:n,bsPrefix:e,as:t="div",...r},s)=>(e=jl(e,"carousel-caption"),a.jsx(t,{ref:s,className:ns(n,e),...r})));wm.displayName="CarouselCaption";const RT=wm,xm=w.forwardRef(({as:n="div",bsPrefix:e,className:t,...r},s)=>{const i=ns(t,jl(e,"carousel-item"));return a.jsx(n,{ref:s,...r,className:i})});xm.displayName="CarouselItem";const NT=xm;function sh(n,e){let t=0;return w.Children.map(n,r=>w.isValidElement(r)?e(r,t++):r)}function AT(n,e){let t=0;w.Children.forEach(n,r=>{w.isValidElement(r)&&e(r,t++)})}const ST=40;function PT(n){if(!n||!n.style||!n.parentNode||!n.parentNode.style)return!1;const e=getComputedStyle(n);return e.display!=="none"&&e.visibility!=="hidden"&&getComputedStyle(n.parentNode).display!=="none"}const Em=w.forwardRef(({defaultActiveIndex:n=0,...e},t)=>{const{as:r="div",bsPrefix:s,slide:i=!0,fade:l=!1,controls:c=!0,indicators:u=!0,indicatorLabels:d=[],activeIndex:m,onSelect:g,onSlide:v,onSlid:T,interval:A=5e3,keyboard:k=!0,onKeyDown:R,pause:L="hover",onMouseOver:P,onMouseOut:j,wrap:D=!0,touch:V=!0,onTouchStart:O,onTouchMove:E,onTouchEnd:y,prevIcon:_=a.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:b="Previous",nextIcon:I=a.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:N="Next",variant:x,className:xe,children:Ee,...Lt}=UE({defaultActiveIndex:n,...e},{activeIndex:"onSelect"}),Ve=jl(s,"carousel"),Ye=$E(),at=w.useRef(null),[xr,ks]=w.useState("next"),[lt,me]=w.useState(!1),[Vt,Mt]=w.useState(!1),[ve,ln]=w.useState(m||0);w.useEffect(()=>{!Vt&&m!==ve&&(at.current?ks(at.current):ks((m||0)>ve?"next":"prev"),i&&Mt(!0),ln(m||0))},[m,Vt,ve,i]),w.useEffect(()=>{at.current&&(at.current=null)});let vt=0,js;AT(Ee,(G,Z)=>{++vt,Z===m&&(js=G.props.interval)});const cn=ym(js),Me=w.useCallback(G=>{if(Vt)return;let Z=ve-1;if(Z<0){if(!D)return;Z=vt-1}at.current="prev",g==null||g(Z,G)},[Vt,ve,g,D,vt]),qe=Ta(G=>{if(Vt)return;let Z=ve+1;if(Z>=vt){if(!D)return;Z=0}at.current="next",g==null||g(Z,G)}),un=w.useRef();w.useImperativeHandle(t,()=>({element:un.current,prev:Me,next:qe}));const Un=Ta(()=>{!document.hidden&&PT(un.current)&&(Ye?Me():qe())}),tt=xr==="next"?"start":"end";xT(()=>{i||(v==null||v(ve,tt),T==null||T(ve,tt))},[ve]);const Ds=`${Ve}-item-${xr}`,Os=`${Ve}-item-${tt}`,mo=w.useCallback(G=>{lT(G),v==null||v(ve,tt)},[v,ve,tt]),Ls=w.useCallback(()=>{Mt(!1),T==null||T(ve,tt)},[T,ve,tt]),Vs=w.useCallback(G=>{if(k&&!/input|textarea/i.test(G.target.tagName))switch(G.key){case"ArrowLeft":G.preventDefault(),Ye?qe(G):Me(G);return;case"ArrowRight":G.preventDefault(),Ye?Me(G):qe(G);return}R==null||R(G)},[k,R,Me,qe,Ye]),Er=w.useCallback(G=>{L==="hover"&&me(!0),P==null||P(G)},[L,P]),Ms=w.useCallback(G=>{me(!1),j==null||j(G)},[j]),Us=w.useRef(0),Ut=w.useRef(0),Fn=IT(),Tr=w.useCallback(G=>{Us.current=G.touches[0].clientX,Ut.current=0,L==="hover"&&me(!0),O==null||O(G)},[L,O]),be=w.useCallback(G=>{G.touches&&G.touches.length>1?Ut.current=0:Ut.current=G.touches[0].clientX-Us.current,E==null||E(G)},[E]),Te=w.useCallback(G=>{if(V){const Z=Ut.current;Math.abs(Z)>ST&&(Z>0?Me(G):qe(G))}L==="hover"&&Fn.set(()=>{me(!1)},A||void 0),y==null||y(G)},[V,L,Me,qe,Fn,A,y]),hn=A!=null&&!lt&&!Vt,Bn=w.useRef();w.useEffect(()=>{var G,Z;if(!hn)return;const Je=Ye?Me:qe;return Bn.current=window.setInterval(document.visibilityState?Un:Je,(G=(Z=cn.current)!=null?Z:A)!=null?G:void 0),()=>{Bn.current!==null&&clearInterval(Bn.current)}},[hn,Me,qe,cn,A,Un,Ye]);const Ir=w.useMemo(()=>u&&Array.from({length:vt},(G,Z)=>Je=>{g==null||g(Z,Je)}),[u,vt,g]);return a.jsxs(r,{ref:un,...Lt,onKeyDown:Vs,onMouseOver:Er,onMouseOut:Ms,onTouchStart:Tr,onTouchMove:be,onTouchEnd:Te,className:ns(xe,Ve,i&&"slide",l&&`${Ve}-fade`,x&&`${Ve}-${x}`),children:[u&&a.jsx("div",{className:`${Ve}-indicators`,children:sh(Ee,(G,Z)=>a.jsx("button",{type:"button","data-bs-target":"","aria-label":d!=null&&d.length?d[Z]:`Slide ${Z+1}`,className:Z===ve?"active":void 0,onClick:Ir?Ir[Z]:void 0,"aria-current":Z===ve},Z))}),a.jsx("div",{className:`${Ve}-inner`,children:sh(Ee,(G,Z)=>{const Je=Z===ve;return i?a.jsx(fT,{in:Je,onEnter:Je?mo:void 0,onEntered:Je?Ls:void 0,addEndListener:aT,children:(Ft,Rr)=>w.cloneElement(G,{...Rr,className:ns(G.props.className,Je&&Ft!=="entered"&&Ds,(Ft==="entered"||Ft==="exiting")&&"active",(Ft==="entering"||Ft==="exiting")&&Os)})}):w.cloneElement(G,{className:ns(G.props.className,Je&&"active")})})}),c&&a.jsxs(a.Fragment,{children:[(D||m!==0)&&a.jsxs(rh,{className:`${Ve}-control-prev`,onClick:Me,children:[_,b&&a.jsx("span",{className:"visually-hidden",children:b})]}),(D||m!==vt-1)&&a.jsxs(rh,{className:`${Ve}-control-next`,onClick:qe,children:[I,N&&a.jsx("span",{className:"visually-hidden",children:N})]})]})]})});Em.displayName="Carousel";const ut=Object.assign(Em,{Caption:RT,Item:NT}),CT="/aboutus.jpg",Tm="/pic2.jpg",Im="/pic4.jpg",Rm="/pic6.jpg",Nm="/pic7.jpg",kT=()=>{const n="admin@example.com",[e,t]=w.useState("https://images.pexels.com/photos/8236570/pexels-photo-8236570.jpeg?auto=compress&cs=tinysrgb&w=600"),[r,s]=w.useState(CT),[i,l]=w.useState(!1),[c,u]=w.useState(!1),[d,m]=w.useState(!1),[g,v]=w.useState(""),[T,A]=w.useState(""),[k,R]=w.useState(!1),[L,P]=w.useState(null);w.useEffect(()=>{const V=He.onAuthStateChanged(E=>{E?(P(E.email),R(E.email===n)):(P(null),R(!1))});return(async()=>{try{const E=Ze(Xe(_e,"settings"),"background"),y=await _0(E);if(y.exists()){const _=y.data();t(_.backgroundMediaUrl||""),s(_.mainImageUrl||""),l(_.isVideoBackground||!1)}else t(""),s(""),l(!1)}catch(E){console.error("Error fetching background media:",E)}})(),V},[]);const j=async()=>{const V=g.endsWith(".mp4");t(g),l(V),u(!1),v("");const O=Ze(Xe(_e,"settings"),"background");await Cn(O,{backgroundMediaUrl:g,isVideoBackground:V})},D=async()=>{s(T),m(!1),A("");const V=Ze(Xe(_e,"settings"),"background");await Cn(V,{mainImageUrl:T})};return a.jsxs("div",{className:"relative min-h-screen overflow-hidden",children:[i?a.jsx("video",{className:"absolute inset-0 w-full h-full object-cover -z-10",src:e,autoPlay:!0,loop:!0,muted:!0}):a.jsx("div",{className:"absolute inset-0 bg-cover bg-center -z-10",style:{backgroundImage:`url(${e})`}}),a.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen",children:[k&&a.jsxs("div",{className:"w-full flex justify-center mt-4",children:[a.jsx("button",{className:"bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg mt-4 mr-4",onClick:()=>u(!0),children:"Change Background Media"}),a.jsx("button",{className:"bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg mt-4",onClick:()=>m(!0),children:"Change Main Image"})]}),a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("h1",{className:"text-3xl font-semibold text-gray-300 mb-2 mt-3 rounded-full p-3 gradient-background2 shadow-teal",children:"Welcome to Riverside Church Westville SA"}),a.jsx("div",{className:"relative rounded-lg overflow-hidden p-3 sm:p-5 flex justify-center",children:a.jsx("img",{src:"/HomeQuote.jpg",alt:"Home Image",style:{borderRadius:"0px",objectFit:"contain",width:"350px",height:"300px"}})}),a.jsx("div",{className:"relative rounded-lg overflow-hidden p-3 sm:p-5 zoom",children:a.jsx("img",{src:r,alt:"Main Image",style:{borderRadius:"20px",objectFit:"cover",width:"500px",height:"500px"}})}),a.jsxs("div",{className:"flex justify-center space-x-4 mt-4",children:[a.jsx("a",{href:"https://www.facebook.com/Riversidechurchwestville1",target:"_blank",rel:"noopener noreferrer",className:"text-blue-700 hover:text-blue-500 text-3xl",children:a.jsx("i",{className:"fab fa-facebook"})}),a.jsx("a",{href:"https://www.youtube.com/channel/UCt9cUcS2QRvknkcwcFEVtWw",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 hover:text-red-400 text-3xl",children:a.jsx("i",{className:"fab fa-youtube"})})]}),a.jsx("div",{className:"mt-4 bg-teal-400 rounded-lg p-1",children:a.jsx("a",{href:"https://gotcha1001.github.io/Random-Scripture/index.html",target:"_blank",rel:"noopener noreferrer",className:"text-lg text-blue-500 hover:text-blue-700",children:"Scripture Daily Reading"})}),a.jsx("div",{className:"mt-4",children:a.jsx(ps,{to:"/about-us",className:"text-lg text-white hover:text-gray-300",children:"About Us"})})]}),a.jsxs(ut,{interval:1e3,controls:!1,indicators:!1,style:{maxWidth:"800px",margin:"auto",marginTop:"15px",marginBottom:"50px"},children:[a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Tm,alt:"Image 2",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Im,alt:"Image 4",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Rm,alt:"Image 6",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Nm,alt:"Image 7",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})})]}),c&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:a.jsxs("div",{className:"w-full max-w-md rounded-lg bg-white p-6 shadow-lg",children:[a.jsx("h2",{className:"mb-4 text-xl font-bold",children:"Change Background Media"}),a.jsx("input",{type:"text",value:g,onChange:V=>v(V.target.value),placeholder:"Enter new background media URL",className:"mb-4 w-full rounded border border-gray-300 px-3 py-2"}),a.jsxs("div",{className:"flex justify-end space-x-2",children:[a.jsx("button",{onClick:()=>u(!1),className:"bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded",children:"Cancel"}),a.jsx("button",{onClick:j,className:"bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded",children:"Save"})]})]})}),d&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:a.jsxs("div",{className:"w-full max-w-md rounded-lg bg-white p-6 shadow-lg",children:[a.jsx("h2",{className:"mb-4 text-xl font-bold",children:"Change Main Image"}),a.jsx("input",{type:"text",value:T,onChange:V=>A(V.target.value),placeholder:"Enter new main image URL",className:"mb-4 w-full rounded border border-gray-300 px-3 py-2"}),a.jsxs("div",{className:"flex justify-end space-x-2",children:[a.jsx("button",{onClick:()=>m(!1),className:"bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded",children:"Cancel"}),a.jsx("button",{onClick:D,className:"bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded",children:"Save"})]})]})})]})]})},jT=()=>{const n="/Nature.mp3";return a.jsxs("div",{className:"flex flex-col justify-start items-center min-h-screen bg-gradient-to-r from-black to-white pt-20",children:[a.jsx("h1",{className:"text-4xl font-bold bg-black text-white mb-8 zoom rounded-md p-2",children:"Worship"}),a.jsx("div",{className:"w-64 h-64 rounded-full  overflow-hidden ",children:a.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr1DMONakU9MUecTXVHg290MknEaXlFRhrA&s",alt:"Worship",className:"object-cover w-full h-full"})}),a.jsxs("div",{className:"w-full max-w-lg bg-slate-950 rounded-lg p-6 mb-8 mt-8 transition-transform transform hover:scale-105 shadow-neon",children:[a.jsx("h2",{className:"text-3xl font-bold text-center text-gray-200 mb-4 zoom ",children:"What is Worship?"}),a.jsxs("p",{className:"text-lg text-gray-200 text-center hover:text-teal-500 transition duration-300",children:["Worship is the heart's cry of gratitude and love,",a.jsx("br",{}),"A sacred moment with the divine above.",a.jsx("br",{}),"It's in the whispers of the soul at peace,",a.jsx("br",{}),"In songs of joy that never cease.",a.jsx("br",{}),"Worship is more than words can say,",a.jsx("br",{}),"It's a life lived in a holy way.",a.jsx("br",{})]})]}),a.jsxs("div",{className:"w-full max-w-lg bg-slate-950  rounded-lg p-6 mb-8 mt-8 transition-transform transform hover:scale-105 shadow-neon",children:[a.jsx("h2",{className:"text-3xl font-bold text-center text-gray-200 mb-4 zoom",children:"The Light of Grace"}),a.jsxs("p",{className:"text-lg text-gray-200 text-center hover:text-teal-500 transition duration-300",children:["In the stillness of the morning light, When dawn breaks through the endless night, A whisper echoes, pure and true, The name of Jesus, ever new.",a.jsx("br",{}),a.jsx("br",{}),"In fields of green and skies so blue, His love surrounds, His grace imbues. A shepherd’s heart, a savior’s call, He lifts the weak, redeems us all.",a.jsx("br",{}),a.jsx("br",{}),"With gentle hands, He heals the lame, Restores the blind, erases shame. A crown of thorns, a cross He bore, For all our sins, forevermore.",a.jsx("br",{}),a.jsx("br",{}),"His voice like thunder, calm yet strong, Through every trial, He leads along. In valleys deep and mountains high, His presence lingers, ever nigh.",a.jsx("br",{}),a.jsx("br",{}),"O Lamb of God, so pure and kind, In You, true peace our hearts do find. You conquered death, the grave defied, Our risen Lord, forever glorified.",a.jsx("br",{}),a.jsx("br",{}),"In shadows cast by doubt and fear, Your light breaks forth, Your love draws near. No greater love could e’er be shown, Than Christ, our King, on heaven’s throne.",a.jsx("br",{}),a.jsx("br",{}),"We lift our voices, hearts ablaze, In endless songs of wondrous praise. For Jesus Christ, the Holy One, Our hope, our joy, God’s precious Son"]})]}),a.jsx("div",{className:"w-full max-w-screen-sm mx-auto  rounded-lg",children:a.jsxs(ut,{interval:1e3,controls:!1,indicators:!1,style:{maxWidth:"800px",marginTop:"15px",marginBottom:"50px"},children:[a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Tm,alt:"Image 2",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Im,alt:"Image 4",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Rm,alt:"Image 6",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})}),a.jsx(ut.Item,{children:a.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a.jsx("img",{src:Nm,alt:"Image 7",style:{borderRadius:"10px",objectFit:"cover",width:"100%",height:"100%"}})})})]})}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-screen-lg mx-auto mt-8",children:[a.jsx("div",{className:"bg-white  rounded-lg overflow-hidden ",children:a.jsx("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h3ISvvaF6nk?si=FCnrrx_LJmCDPl7B",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),a.jsx("div",{className:"bg-white  rounded-lg overflow-hidden ",children:a.jsx("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/I8h0eZZQt6I?si=g1zF51QFg1WLCJt5",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),a.jsx("div",{className:"bg-white rounded-lg overflow-hidden ",children:a.jsx("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/RXp3Ld7-ahg?si=572uG_OYNp917M58",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),a.jsx("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden",children:a.jsx("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/LLCEEIsEDjg?si=fFcrFq7S1a7w5Tq5",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]}),a.jsxs("audio",{controls:!0,autoPlay:!0,className:"p-3",children:[a.jsx("source",{src:n,type:"audio/mp3"}),"Your browser does not support the audio element."]})]})},Dl=({requestsPerPage:n,totalRequests:e,paginate:t,currentPage:r,nextPage:s,prevPage:i})=>a.jsx("nav",{children:a.jsxs("ul",{className:"flex justify-center mt-4",children:[a.jsx("li",{children:a.jsx("button",{onClick:i,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===1,children:"Previous"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t(r),className:`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"bg-teal-500 text-white":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,children:r})}),a.jsx("li",{children:a.jsx("button",{onClick:s,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===Math.ceil(e/n)?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===Math.ceil(e/n),children:"Next"})})]})}),wr=()=>a.jsx("div",{className:"flex justify-center items-center h-full",children:a.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})}),DT=()=>{const[n,e]=w.useState([]),[t,r]=w.useState(1),[s]=w.useState(5),[i,l]=w.useState(!0);w.useEffect(()=>{(async()=>{try{const R=(await vr(Xe(_e,"prayer-requests"))).docs.map(L=>{const P=L.data();return{id:L.id,...P,date:P.date.toDate()}}).filter(L=>L.isApproved);R.sort((L,P)=>P.date-L.date),e(R)}catch(A){console.error("Error fetching prayer requests:",A)}finally{l(!1)}})()},[]);const c=t*s,u=c-s,d=n.slice(u,c),m=T=>r(T),g=()=>r(T=>Math.min(T+1,Math.ceil(n.length/s))),v=()=>r(T=>Math.max(T-1,1));return w.useEffect(()=>{console.log("Scrolling to top due to page change:",t),window.scrollTo({top:0,behavior:"smooth"})},[t]),i?a.jsx(wr,{}):a.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[a.jsx("h1",{className:"text-4xl font-bold text-white my-8 zoom",children:"Prayer Requests"}),a.jsxs("div",{className:"prayer-requests-list w-full max-w-2xl mt-8 flex flex-col items-center",children:[d.map(T=>a.jsxs("div",{className:"prayer-request-item mb-4 p-6 bg-slate-900 rounded-lg shadow-lg transition transform hover:scale-105",children:[a.jsxs("h2",{className:"text-2xl font-bold mb-2 text-white",children:["Title: ",T.title]}),a.jsxs("p",{className:"text-gray-100 mb-4",children:["Content: ",T.content]}),T.picUrl&&a.jsx("div",{className:"w-full h-80 mb-4 rounded overflow-hidden",children:a.jsx("img",{src:T.picUrl,alt:T.title,className:"object-contain w-full h-full transition transform hover:scale-110"})}),a.jsxs("p",{className:"text-gray-900 text-sm mb-2",children:["Submitted by: ",T.userName]}),a.jsxs("p",{className:"text-gray-900 text-sm",children:["Date: ",new Date(T.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]},T.id)),a.jsx(Dl,{requestsPerPage:s,totalRequests:n.length,paginate:m,currentPage:t,nextPage:g,prevPage:v})]})]})};function OT(){const[n,e]=w.useState([]),[t,r]=w.useState(1),[s]=w.useState(5),[i,l]=w.useState(null),[c,u]=w.useState({title:"",sermonBy:"",videoUrl:"",content:"",date:""}),[d,m]=w.useState(!1),[g,v]=w.useState(!0),[T,A]=w.useState(null),k=kt();w.useEffect(()=>{(async()=>{try{const I=_l(Xe(_e,"facebook-video"),f0("date","desc")),x=(await vr(I)).docs.map(xe=>{const Ee=xe.data(),Lt=Ee.date?new Date(Ee.date.seconds*1e3):null;return{id:xe.id,...Ee,date:Lt?`${Lt.getDate()}-${Lt.getMonth()+1}-${Lt.getFullYear()}`:null}});e(x),v(!1)}catch(I){console.error("Error fetching videos:",I),A("Failed to load videos."),v(!1)}})()},[]);const R=b=>{try{l(b.id);let I="";if(b.date){const N=new Date(b.date.seconds*1e3);isNaN(N)||(I=`${N.getFullYear()}-${String(N.getMonth()+1).padStart(2,"0")}-${String(N.getDate()).padStart(2,"0")}`)}u({title:b.title||"",sermonBy:b.sermonBy||"",videoUrl:b.videoUrl||"",content:b.content||"",date:I}),m(!0)}catch(I){console.error("Error in handleEdit:",I)}},L=async b=>{b.preventDefault();try{const[I,N,x]=c.date.split("-").map(Number),xe=new Date(I,N-1,x);await Cn(Ze(_e,"facebook-video",i),{...c,date:oe.fromDate(xe)}),l(null),m(!1),e(n.map(Ee=>Ee.id===i?{...Ee,...c,date:xe.toISOString()}:Ee)),k("/facebook-live")}catch(I){console.error("Error updating video:",I)}},P=async b=>{try{await xl(Ze(_e,"facebook-video",b)),e(n.filter(I=>I.id!==b))}catch(I){console.error("Error deleting video:",I)}},j=b=>{u({...c,[b.target.name]:b.target.value})},D=t*s,V=D-s,O=n.slice(V,D),E=b=>r(b),y=()=>r(b=>Math.min(b+1,Math.ceil(n.length/s))),_=()=>r(b=>Math.max(b-1,1));return g?a.jsx(wr,{}):T?a.jsx("p",{children:T}):a.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[a.jsx("h1",{className:"text-4xl font-bold text-white my-8",children:"Alter Uploads"}),a.jsxs("div",{className:"w-full max-w-2xl mt-8 bg-white p-6 rounded-lg shadow-md",children:[O.map(b=>a.jsxs("div",{className:"mb-4 p-4 border-b border-gray-300 last:border-b-0",children:[a.jsx("h2",{className:"text-xl font-bold",children:b.title}),a.jsxs("p",{className:"text-gray-700",children:["Sermon By: ",b.sermonBy]}),a.jsxs("p",{className:"text-gray-700",children:["Content: ",b.content]}),a.jsxs("p",{className:"text-gray-700",children:["Date: ",b.date]}),a.jsx("button",{className:"px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 mr-2",onClick:()=>R(b),children:"Edit"}),a.jsx("button",{className:"px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300",onClick:()=>P(b.id),children:"Delete"})]},b.id)),a.jsx(Dl,{videosPerPage:s,totalVideos:n.length,paginate:E,currentPage:t,nextPage:y,prevPage:_})]}),d&&a.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center",children:a.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Edit Video"}),a.jsxs("form",{onSubmit:L,children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Title:"}),a.jsx("input",{type:"text",name:"title",value:c.title,onChange:j,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Sermon By:"}),a.jsx("input",{type:"text",name:"sermonBy",value:c.sermonBy,onChange:j,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Video URL:"}),a.jsx("input",{type:"text",name:"videoUrl",value:c.videoUrl,onChange:j,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),a.jsx("textarea",{name:"content",value:c.content,onChange:j,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-pre-wrap"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Date:"}),a.jsx("input",{type:"date",name:"date",value:c.date,onChange:j,required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"flex justify-end",children:[a.jsx("button",{type:"button",className:"px-4 py-2 mr-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300",onClick:()=>m(!1),children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:"Update Video"})]})]})]})})]})}const LT=()=>{const[n,e]=w.useState(""),[t,r]=w.useState(""),[s,i]=w.useState(""),[l,c]=w.useState(null),u=kt();w.useEffect(()=>{const T=Qi(He,A=>{c(A),A&&u("/")});return()=>T()},[u]);const d=async T=>{if(T.preventDefault(),!n||!t){alert("Please enter both email and password");return}try{const k=(await X_(He,n,t)).user;if(n!=="admin@example.com"&&!k.emailVerified){await Ai(He),alert("Please verify your email before trying to log in.");return}u("/")}catch(A){A.code==="auth/user-not-found"||A.code==="auth/wrong-password"?alert("Incorrect email or password. Please try again or register."):alert("Error logging in user: Please check your password")}},m=new ct,g=async()=>{try{await Tv(He,m)}catch(T){console.error(T)}},v=async()=>{try{await Ai(He),e(""),r(""),i(""),c(null),u("/")}catch(T){console.error(T)}};return w.useEffect(()=>{e(""),r("")},[l]),a.jsx("div",{className:"flex h-screen items-center justify-center bg-gradient-to-r from-black via-red-500 to-yellow-600",children:l?a.jsxs("div",{className:"text-center",children:[a.jsxs("h2",{className:"mb-4 text-xl font-bold text-white",children:["Welcome, ",l.email]}),a.jsx("button",{className:"rounded-sm bg-teal-500 px-6 py-3 text-lg text-teal-100 hover:bg-teal-700",onClick:v,children:"Logout"})]}):a.jsxs("div",{className:"login-form w-full max-w-md rounded-lg bg-black p-8 text-center shadow-lg",children:[a.jsx("h2",{className:"mb-6 text-2xl font-bold text-white",children:"Login"}),s&&a.jsx("p",{className:"mb-4 text-sm text-red-500",children:s}),a.jsxs("form",{onSubmit:d,autoComplete:"off",children:[a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-medium text-white",children:"Email"}),a.jsx("input",{type:"email",id:"email",name:"email",className:"w-full rounded-md border border-gray-300 p-2",value:n,onChange:T=>e(T.target.value),required:!0})]}),a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm font-medium text-white",children:"Password"}),a.jsx("input",{type:"password",id:"password",name:"password",className:"w-full rounded-md border border-gray-300 p-2",value:t,onChange:T=>r(T.target.value),required:!0})]}),a.jsx("button",{type:"submit",className:"w-full cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-gray-900",children:"Login"})]}),a.jsx("div",{className:"mt-4",children:a.jsx("button",{className:"cursor-pointer rounded-md bg-teal-600 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-teal-700",onClick:g,children:"Login with Google"})}),a.jsx("div",{className:"mt-4",children:a.jsx(ps,{to:"/reset-password",className:"text-sm text-teal-500 transition duration-300 ease-in-out hover:text-yellow-500",children:"Forgot Password?"})})]})})};var Am={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ih=Be.createContext&&Be.createContext(Am),VT=["attr","size","title"];function MT(n,e){if(n==null)return{};var t=UT(n,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function UT(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Ui(){return Ui=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ui.apply(this,arguments)}function oh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Fi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oh(Object(t),!0).forEach(function(r){FT(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):oh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function FT(n,e,t){return e=BT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function BT(n){var e=qT(n,"string");return typeof e=="symbol"?e:e+""}function qT(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Sm(n){return n&&n.map((e,t)=>Be.createElement(e.tag,Fi({key:t},e.attr),Sm(e.child)))}function Pm(n){return e=>Be.createElement($T,Ui({attr:Fi({},n.attr)},e),Sm(n.child))}function $T(n){var e=t=>{var{attr:r,size:s,title:i}=n,l=MT(n,VT),c=s||t.size||"1em",u;return t.className&&(u=t.className),n.className&&(u=(u?u+" ":"")+n.className),Be.createElement("svg",Ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:u,style:Fi(Fi({color:n.color||t.color},t.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&Be.createElement("title",null,i),n.children)};return ih!==void 0?Be.createElement(ih.Consumer,null,t=>e(t)):e(Am)}function ah(n){return Pm({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(n)}function lh(n){return Pm({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(n)}function WT(){const[n,e]=w.useState(""),[t,r]=w.useState(""),[s,i]=w.useState(""),[l,c]=w.useState(""),[u,d]=w.useState(""),[m,g]=w.useState(""),[v,T]=w.useState(""),[A,k]=w.useState(""),[R,L]=w.useState(!1),[P,j]=w.useState(!1),[D,V]=w.useState(!1),O=kt(),E=async I=>{if(I.preventDefault(),!n||!t||!s||!l||!u||!m||!v){alert("Please enter all fields");return}if(!/\S+@\S+\.\S+/.test(u)){alert("Please enter a valid email address");return}if(m!==v){alert("Passwords do not match");return}if(!D){alert("Please accept the terms and conditions");return}try{const x=(await J_(He,u,m)).user;await tv(x,{displayName:`${n} ${t}`}),await Z_(x),e(""),r(""),i(""),c(""),d(""),g(""),T(""),V(!1),k(""),alert("Registered successfully. Please verify your email."),await Ai(He),O("/login")}catch(N){N.code==="auth/email-already-in-use"?alert("Email is already registered"):k("Error registering user: "+N.message)}},y=()=>{L(!R)},_=()=>{j(!P)},b=I=>{V(I.target.checked)};return a.jsx("div",{className:"flex h-screen items-center justify-center bg-gradient-to-r from-black via-teal-500 to-purple-900",children:a.jsxs("div",{className:"register-form w-full max-w-md rounded-lg bg-black p-8 text-center shadow-lg",children:[a.jsx("h2",{className:"mb-6 text-2xl font-bold text-white",children:"Register"}),A&&a.jsx("p",{className:"mb-4 text-sm text-red-500",children:A}),a.jsxs("form",{onSubmit:E,autoComplete:"off",children:[a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"first-name",className:"mb-2 block text-sm font-medium text-white",children:"First Name"}),a.jsx("input",{type:"text",id:"first-name",name:"first-name",className:"w-full rounded-md border border-gray-300 p-2",value:n,onChange:I=>e(I.target.value),required:!0})]}),a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"last-name",className:"mb-2 block text-sm font-medium text-white",children:"Last Name"}),a.jsx("input",{type:"text",id:"last-name",name:"last-name",className:"w-full rounded-md border border-gray-300 p-2",value:t,onChange:I=>r(I.target.value),required:!0})]}),a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"gender",className:"mb-2 block text-sm font-medium text-white",children:"Gender"}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsxs("label",{className:"flex items-center text-white",children:[a.jsx("input",{type:"radio",name:"gender",value:"male",className:"mr-2",checked:s==="male",onChange:I=>i(I.target.value),required:!0}),"Male"]}),a.jsxs("label",{className:"flex items-center text-white",children:[a.jsx("input",{type:"radio",name:"gender",value:"female",className:"mr-2",checked:s==="female",onChange:I=>i(I.target.value),required:!0}),"Female"]})]})]}),a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"date-of-birth",className:"mb-2 block text-sm font-medium text-white",children:"Date of Birth"}),a.jsx("input",{type:"date",id:"date-of-birth",name:"date-of-birth",className:"w-full rounded-md border border-gray-300 p-2",value:l,onChange:I=>c(I.target.value),required:!0})]}),a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-medium text-white",children:"Email"}),a.jsx("input",{type:"email",id:"email",name:"email",className:"w-full rounded-md border border-gray-300 p-2",value:u,onChange:I=>d(I.target.value),required:!0})]}),a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm font-medium text-white",children:"Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:R?"text":"password",id:"password",name:"password",className:"w-full rounded-md border border-gray-300 p-2",value:m,onChange:I=>g(I.target.value),required:!0}),a.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center px-2",onClick:y,style:{cursor:"pointer"},children:R?a.jsx(ah,{}):a.jsx(lh,{})})]})]}),a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"confirm-password",className:"mb-2 block text-sm font-medium text-white",children:"Confirm Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:P?"text":"password",id:"confirm-password",name:"confirm-password",className:"w-full rounded-md border border-gray-300 p-2",value:v,onChange:I=>T(I.target.value),required:!0}),a.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center px-2",onClick:_,style:{cursor:"pointer"},children:P?a.jsx(ah,{}):a.jsx(lh,{})})]})]}),a.jsxs("div",{className:"mb-4 text-left flex items-center space-x-2",children:[a.jsx("input",{type:"checkbox",id:"terms",className:"custom-checkbox",checked:D,onChange:b,required:!0}),a.jsx("label",{htmlFor:"terms",className:"text-sm font-medium text-white",children:"I accept the terms and conditions"})]}),a.jsx("button",{type:"submit",className:"w-full rounded-md bg-gradient-to-r from-green-400 to-green-600 py-2 px-4 font-semibold text-white hover:from-green-500 hover:to-green-700",children:"Register"})]})]})})}function zT(){const[n,e]=w.useState(""),[t,r]=w.useState(null),[s,i]=w.useState(""),[l,c]=w.useState(""),[u,d]=w.useState(0),[m,g]=w.useState(""),[v,T]=w.useState(0),A=kt(),k=async R=>{R.preventDefault();try{if(!t){g("Please select an image to upload.");return}const L=new Date(n),P=oe.fromDate(L),j=fo(),D=Ps(j,`images/${t.name}`),V=lm(D,t);V.on("state_changed",O=>{const E=O.bytesTransferred/O.totalBytes*100;T(E)},O=>{console.error("Upload failed",O),g("Failed to upload image.")},async()=>{const O=await Cl(V.snapshot.ref);await El(Xe(_e,"daily-posts"),{date:P,imgUrl:O,postedBy:s,content:l,likes:u}),g("Post added successfully!"),e(""),r(null),i(""),c(""),d(0),T(0),A("/daily-posts")})}catch(L){console.error("Error adding document: ",L),g("Failed to add post.")}};return a.jsxs("form",{onSubmit:k,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto gradient-background m-4",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Add New Daily Post"}),m&&a.jsx("p",{className:`mb-4 ${m.includes("successfully")?"text-green-500":"text-red-500"}`,children:m}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Date:"}),a.jsx("input",{type:"date",value:n,onChange:R=>e(R.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Image:"}),a.jsx("input",{type:"file",onChange:R=>r(R.target.files[0]),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),v>0&&a.jsx("progress",{value:v,max:"100",className:"w-full mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Posted By:"}),a.jsx("input",{type:"text",value:s,onChange:R=>i(R.target.value),placeholder:"Posted By",required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),a.jsx("textarea",{value:l,onChange:R=>c(R.target.value),placeholder:"Content",required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none whitespace-pre-wrap"})]}),a.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:"Add Post"})]})}const GT=()=>{const[n,e]=w.useState(""),[t,r]=w.useState(""),[s,i]=w.useState(null),[l,c]=w.useState(""),[u,d]=w.useState(!1),[m,g]=w.useState(null),[v,T]=w.useState(""),[A,k]=w.useState(0),R=kt();w.useEffect(()=>{const D=Qi(He,V=>{T(V?V.displayName||V.email:"")});return()=>D()},[]);const L=D=>{D.target.files[0]&&i(D.target.files[0])},P=async D=>{D.preventDefault(),d(!0);try{const V=oe.now();if(s){const O=fo(),E=Ps(O,`prayer-requests/${s.name}`),y=lm(E,s);y.on("state_changed",_=>{const b=_.bytesTransferred/_.totalBytes*100;k(b)},_=>{console.error("Upload failed",_),g("Failed to upload image."),d(!1)},async()=>{const _=await Cl(y.snapshot.ref);c(_),j(V,_)})}else j(V,"")}catch(V){console.error("Error adding prayer request:",V),g("Failed to add prayer request."),d(!1)}},j=async(D,V)=>{try{await El(Xe(_e,"prayer-requests"),{userName:v,title:n,content:t,picUrl:V,date:D,approved:!1}),e(""),r(""),i(null),c(""),g(null),alert("Prayer request submitted successfully, It wont be displayed untill its approved!"),R("/")}catch(O){console.error("Error adding prayer request:",O),g("Failed to add prayer request.")}finally{d(!1)}};return a.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center",children:a.jsx("div",{className:"form-container p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto mt-10 mb-4 gradient-background",children:a.jsxs("form",{onSubmit:P,className:"space-y-6",children:[a.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800",children:"Submit a Prayer Request"}),m&&a.jsx("p",{className:"text-red-500",children:m}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-gray-700 mb-2",children:"Title:"}),a.jsx("input",{type:"text",value:n,onChange:D=>e(D.target.value),required:!0,className:"w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-gray-700 mb-2",children:"Content:"}),a.jsx("textarea",{value:t,onChange:D=>r(D.target.value),required:!0,placeholder:"Enter your prayer request here...",className:"w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-gray-700 mb-2",children:"Image:"}),a.jsx("input",{type:"file",onChange:L,className:"w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),A>0&&a.jsx("progress",{value:A,max:"100",className:"w-full mt-2"})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("button",{type:"button",onClick:()=>R("/"),className:"py-2 px-5 bg-red-500 text-white rounded hover:bg-red-600",children:"Cancel"}),a.jsx("button",{type:"submit",disabled:u,className:"py-2 px-5 bg-blue-500 text-white rounded hover:bg-blue-600",children:u?"Submitting...":"Submit"})]})]})})})};class Cs{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const HT=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Ne={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:HT()},Ol=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},KT=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Ol(n);Ne.publicKey=t.publicKey,Ne.blockHeadless=t.blockHeadless,Ne.storageProvider=t.storageProvider,Ne.blockList=t.blockList,Ne.limitRate=t.limitRate,Ne.origin=t.origin||e},Cm=async(n,e,t={})=>{const r=await fetch(Ne.origin+n,{method:"POST",headers:t,body:e}),s=await r.text(),i=new Cs(r.status,s);if(r.ok)return i;throw i},km=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},QT=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},jm=n=>n.webdriver||!n.languages||n.languages.length===0,Dm=()=>new Cs(451,"Unavailable For Headless Browser"),YT=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},JT=n=>{var e;return!((e=n.list)!=null&&e.length)||!n.watchVariable},XT=(n,e)=>n instanceof FormData?n.get(e):n[e],Om=(n,e)=>{if(JT(n))return!1;YT(n.list,n.watchVariable);const t=XT(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},Lm=()=>new Cs(403,"Forbidden"),ZT=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a string"},eI=async(n,e,t)=>{const r=Number(await t.get(n)||0);return e-Date.now()+r},Vm=async(n,e,t)=>{if(!e.throttle||!t)return!1;ZT(e.throttle,e.id);const r=e.id||n;return await eI(r,e.throttle,t)>0?!0:(await t.set(r,Date.now().toString()),!1)},Mm=()=>new Cs(429,"Too Many Requests"),tI=async(n,e,t,r)=>{const s=Ol(r),i=s.publicKey||Ne.publicKey,l=s.blockHeadless||Ne.blockHeadless,c=Ne.storageProvider||s.storageProvider,u={...Ne.blockList,...s.blockList},d={...Ne.limitRate,...s.limitRate};return l&&jm(navigator)?Promise.reject(Dm()):(km(i,n,e),QT(t),t&&Om(u,t)?Promise.reject(Lm()):await Vm(location.pathname,d,c)?Promise.reject(Mm()):Cm("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:i,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},nI=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},rI=n=>typeof n=="string"?document.querySelector(n):n,sI=async(n,e,t,r)=>{const s=Ol(r),i=s.publicKey||Ne.publicKey,l=s.blockHeadless||Ne.blockHeadless,c=Ne.storageProvider||s.storageProvider,u={...Ne.blockList,...s.blockList},d={...Ne.limitRate,...s.limitRate};if(l&&jm(navigator))return Promise.reject(Dm());const m=rI(t);km(i,n,e),nI(m);const g=new FormData(m);return Om(u,g)?Promise.reject(Lm()):await Vm(location.pathname,d,c)?Promise.reject(Mm()):(g.append("lib_version","4.3.3"),g.append("service_id",n),g.append("template_id",e),g.append("user_id",i),Cm("/api/v1.0/email/send-form",g))},iI={init:KT,send:tI,sendForm:sI,EmailJSResponseStatus:Cs},oI=()=>{const n=w.useRef(),e=t=>{t.preventDefault(),iI.sendForm("service_mnw8hsc","template_qp4eszh",n.current,"fVHRzzG1yJLPK4m_k").then(()=>{alert("Email sent successfully!"),n.current.reset()},r=>{console.log("FAILED...",r.text),alert("Failed to send email. Please try again later.")})};return a.jsx("div",{className:"flex justify-center",children:a.jsxs("form",{ref:n,onSubmit:e,className:"max-w-md w-full bg-slate-600 hover:bg-teal-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 zoom",children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-slate-950 text-sm font-bold mb-2",htmlFor:"name",children:"Name"}),a.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",name:"user_name",placeholder:"Your Name"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-slate-950 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),a.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email",name:"user_email",placeholder:"Your Email"})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("label",{className:"block text-slate-950 text-sm font-bold mb-2",htmlFor:"message",children:"Message"}),a.jsx("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none",id:"message",name:"message",placeholder:"Your Message"})]}),a.jsx("div",{className:"flex items-center justify-between",children:a.jsx("button",{className:"bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Send"})})]})})},aI=()=>a.jsx("div",{className:"min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white",children:a.jsxs("div",{className:"container mx-auto py-8 p-3",children:[a.jsx("h1",{className:"text-3xl font-bold text-center mb-8 zoom shadow-neon rounded-md p-2",children:"Contact Page"}),a.jsx(oI,{}),a.jsx("h2",{className:"text-xl font-bold mb-4 text-center",children:"VISITORS ALWAYS WELCOME"}),a.jsx("p",{className:"text-center mb-8",children:"39 Stafford Road, Westville, 3629"}),a.jsx("div",{className:"my-8 rounded-lg overflow-hidden shadow-xl",children:a.jsx("iframe",{className:"w-full h-64 md:h-96 ",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.69226328978266!2d30.90946777074869!3d-29.81988375320584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef701cef542c8cb%3A0xae666abbb3029097!2sRiverside%20Church!5e0!3m2!1sen!2sza!4v1719852798917!5m2!1sen!2sza",width:"600",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Riverside Church Location"})}),a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"text-xl font-bold mb-2 shadow-neon rounded-lg",children:"OUR EMAIL"}),a.jsx("a",{href:"mailto:info@riversidechurch.org.za",className:"text-blue-500 hover:underline mb-4 block",children:"info@riversidechurch.org.za"}),a.jsx("h3",{className:"text-xl font-bold mb-2",children:"CALL US"}),a.jsx("p",{className:"mb-3",children:"083 448 7334"})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"bg-teal-500 p-4 shadow- rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Pastor Cedric Olivier"}),a.jsx("p",{children:"Phone Number: 0834487334"}),a.jsx("p",{children:"Email: cedric@riversidechurch.org.za"})]}),a.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Riverside Church"}),a.jsx("p",{children:"Email: info@riversidechurch.org.za"})]}),a.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Pastor Louise Olivier"}),a.jsx("p",{children:"Phone Number: 0834149502"}),a.jsx("p",{children:"Email: cedwees@absamail.co.za"})]}),a.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Church Leaders"}),a.jsx("p",{children:"Adrian Munsamy"}),a.jsx("p",{children:"Phone Number: 0812406768"}),a.jsx("p",{children:"Email: cedric@riversidechurch.org.za"})]}),a.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{children:"Susan Greer"}),a.jsx("p",{children:"Phone Number: 0764078773"}),a.jsx("p",{children:"Email: susanlgreer@gmail.com"})]}),a.jsxs("div",{className:"bg-teal-500 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{children:"Charles Frankel"}),a.jsx("p",{children:"Phone Number: 0828515700"}),a.jsx("p",{children:"Email: charlesf@revtech.co.za"})]})]}),a.jsx("div",{className:"flex justify-center items-center mt-8 space-x-4 shadow-neon p-3",children:a.jsx("img",{src:"/zapper1.jpg",alt:"Image 1",className:"w-1/2 max-w-sm rounded-md shadow-md"})}),a.jsxs("div",{className:"bg-slate-700 p-4 rounded-lg text-center shadow-neon mt-8 hover:shadow-xl transform hover:scale-105 zoom",children:[a.jsx("h1",{className:"text-2xl font-bold mb-4 zoom",children:"Banking Details"}),a.jsx("p",{children:"Westville Assembly of God"}),a.jsx("p",{children:"Std Bank Westville"}),a.jsx("p",{children:"Acc no 053102800"}),a.jsx("p",{children:"Branch code 045426"})]})]})});function lI(){const[n,e]=w.useState([]),[t,r]=w.useState(1),[s]=w.useState(5),[i,l]=w.useState(!0),[c,u]=w.useState(null);kt(),w.useEffect(()=>{(async()=>{try{const L=_l(Xe(_e,"daily-posts"));let j=(await vr(L)).docs.map(D=>({id:D.id,...D.data(),date:new Date(D.data().date.seconds*1e3)}));for(let D of j)if(D.imgPath){const V=Ps(um,D.imgPath);D.imgUrl=await Cl(V)}j.sort((D,V)=>V.date-D.date),e(j),console.log("Posts fetched successfully:",j)}catch(L){console.error("Error fetching posts:",L),u("Failed to load posts.")}finally{l(!1)}})()},[]);const d=async(R,L)=>{try{const P=Ze(_e,"daily-posts",R),j=Number(L)+1;await Cn(P,{likes:j}),e(D=>D.map(V=>V.id===R?{...V,likes:j}:V))}catch(P){console.error("Error updating likes:",P)}},m=t*s,g=m-s,v=n.slice(g,m),T=R=>r(R),A=()=>r(R=>Math.min(R+1,Math.ceil(n.length/s))),k=()=>r(R=>Math.max(R-1,1));return w.useEffect(()=>{console.log("Scrolling to top due to page change:",t),window.scrollTo({top:0,behavior:"smooth"})},[t]),i?a.jsx(wr,{}):c?a.jsx("p",{children:c}):a.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[a.jsx("h1",{className:"text-4xl  text-white my-8 mt-16 font-extrabold font-serif zoom mb-3",children:"Daily Posts"}),a.jsx("div",{className:"daily-posts-list w-full max-w-2xl mt-1",children:v.length>0?v.map((R,L)=>a.jsxs("div",{className:"daily-post-item mb-4 shadow-neon p-6 bg-slate-950 rounded-lg  transition transform hover:scale-105",children:[a.jsxs("p",{className:"text-2xl font-bold mb-2 text-white",children:["Date Posted: ",R.date.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})]}),R.imgUrl&&a.jsx("div",{className:"w-full h-96 mb-4 rounded overflow-hidden flex justify-center items-center",children:a.jsx("img",{src:R.imgUrl,alt:"Post Image",className:"w-full h-full object-contain transition transform hover:wobble"})}),a.jsxs("p",{className:"text-gray-200 mb-4",children:["Content: ",R.content]}),a.jsxs("p",{className:"text-gray-200 text-sm mb-2",children:["Posted by: ",R.postedBy]}),a.jsxs("div",{className:"flex items-center",children:[a.jsxs("p",{className:"text-gray-200 text-sm mr-2",children:["Likes: ",R.likes]}),a.jsx("button",{onClick:()=>d(R.id,R.likes),className:"bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition",children:"Like"})]})]},L)):a.jsx("p",{className:"text-white",children:"No posts available"})}),a.jsx(cI,{postsPerPage:s,totalPosts:n.length,paginate:T,currentPage:t,nextPage:A,prevPage:k})]})}const cI=({postsPerPage:n,totalPosts:e,paginate:t,currentPage:r,nextPage:s,prevPage:i})=>a.jsx("nav",{children:a.jsxs("ul",{className:"flex justify-center mt-4",children:[a.jsx("li",{children:a.jsx("button",{onClick:i,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===1,children:"Previous"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t(r),className:`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${r===1?"bg-teal-500 text-white":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,children:r})}),a.jsx("li",{children:a.jsx("button",{onClick:s,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${r===Math.ceil(e/n)?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:r===Math.ceil(e/n),children:"Next"})})]})});function uI(){return a.jsxs("div",{className:"min-h-screen p-3 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white",children:[a.jsx("h1",{className:"text-4xl font-bold text-white mb-8 zoom shadow-neon p-2 rounded-md",children:"Service Times"}),a.jsx("div",{className:"w-full max-w-lg bg-slate-950 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105",children:a.jsxs("div",{className:"group mb-6",children:[a.jsx("h4",{className:"text-3xl font-bold mb-4 text-center",children:a.jsx("span",{className:"text-gray-300  rounded-md p-2",children:"Sundays Church Service: 9am"})}),a.jsx("h4",{className:"text-3xl font-bold mb-2 text-center",children:a.jsx("span",{className:"text-gray-300",children:"Kids Vibe: 9am"})}),a.jsx("p",{className:"text-lg text-gray-400 text-center",children:"3 to 12 years"})]})}),a.jsx("h1",{className:"text-4xl font-bold text-white mb-4 mt-5 zoom",children:"Life Groups"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"bg-slate-700 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105 relative",children:[a.jsx("p",{className:"font-bold",children:"Louise Olivier: Ladies Meeting"}),a.jsx("p",{children:"Day/Time: Tuesdays at 9am"}),a.jsx("p",{children:"Place: Riverside Church 39 Stafford Road, Westville"})]}),a.jsxs("div",{className:"bg-slate-700 p-4 rounded-lg shadow-neon text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Susan Greer"}),a.jsx("p",{children:"Day/Time: Thursdays at 7pm"}),a.jsx("p",{children:"Place: Riverside Church 39 Stafford Road, Westville"})]}),a.jsxs("div",{className:"bg-slate-700 p-4 rounded-lg shadow-neon text-center hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Charles Frankel"}),a.jsx("p",{children:"Day/Time: Mondays at 9am"}),a.jsx("p",{children:"Place: Dawncliffe Park 7 Queen Elizabeth Drive Dawncliffe"})]}),a.jsxs("div",{className:"bg-slate-700 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Adrian Munsamy"}),a.jsx("p",{children:"Day/Time: Thursdays at 7pm"}),a.jsx("p",{children:"Place: 37 David McLean Drive Westville 3630"})]}),a.jsxs("div",{className:"bg-slate-700 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105",children:[a.jsx("p",{className:"font-bold",children:"Satish Harilal"}),a.jsx("p",{children:"Day/Time: Thursdays at 7pm"}),a.jsx("p",{children:"Place: 46 Kirriemuir Drive Atholl Heights"}),a.jsx("p",{children:"Email: satishhari2407@gmail.com"})]}),a.jsx("div",{className:"bg-teal-500 p-4 rounded-lg text-center shadow-neon hover:shadow-xl transform hover:scale-105",children:a.jsx("p",{className:"font-bold zoom",children:"Join a Life Group today, we all need a thursday in our life"})})]})]})}const hI=({videoUrl:n})=>{let e="";return n.includes("youtu.be")?e=`https://www.youtube.com/embed/${n.split("/").pop().split("?")[0]}`:n.includes("youtube.com")?e=`https://www.youtube.com/embed/${new URLSearchParams(new URL(n).search).get("v")}`:n.includes("fb.watch")?e=`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(n)}&show_text=false&width=734`:n.includes("facebook.com")?e=`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(n)}&show_text=false&width=734`:e=n,a.jsx("div",{className:"video-container",children:a.jsx("iframe",{src:e,width:"734",height:"413",style:{border:"none",overflow:"hidden"},allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})},dI=({postsPerPage:n,totalPosts:e,currentPage:t,nextPage:r,prevPage:s})=>a.jsx("nav",{children:a.jsxs("ul",{className:"flex justify-center mt-4",children:[a.jsx("li",{children:a.jsx("button",{onClick:s,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${t===1?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:t===1,children:"Previous"})}),a.jsx("li",{className:"mx-2",children:a.jsx("span",{className:"page-link px-4 py-2 rounded shadow-md border border-teal-500 bg-teal-500 text-white",children:t})}),a.jsx("li",{children:a.jsx("button",{onClick:r,className:`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${t===Math.ceil(e/n)?"cursor-not-allowed text-gray-500":"text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg"}`,disabled:t===Math.ceil(e/n),children:"Next"})})]})}),fI=()=>{const[n,e]=w.useState([]),[t,r]=w.useState(1),[s]=w.useState(5),[i,l]=w.useState(!0),[c,u]=w.useState(null);w.useEffect(()=>{(async()=>{try{const R=(await vr(Xe(_e,"facebook-video"))).docs.map(L=>{const P=L.data();let j;return P.date&&P.date.toDate?j=P.date.toDate():P.date&&(j=new Date(P.date*1e3)),{id:L.id,...P,date:j}});R.sort((L,P)=>P.date-L.date),e(R),l(!1)}catch(k){console.error("Error fetching videos:",k),u("Failed to load videos."),l(!1)}})()},[]);const d=t*s,m=d-s,g=n.slice(m,d),v=()=>r(A=>Math.min(A+1,Math.ceil(n.length/s))),T=()=>r(A=>Math.max(A-1,1));return w.useEffect(()=>{console.log("Scrolling to top due to page change:",t),window.scrollTo({top:0,behavior:"smooth"})},[t]),i?a.jsx(wr,{}):c?a.jsx("p",{children:c}):a.jsxs("div",{className:"flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[a.jsx("h1",{className:"text-4xl font-bold text-white bg-black mb-10 text-center p-3  rounded-lg ",children:"Shared Videos"}),g.map(A=>a.jsxs("div",{className:"card-content mb-8 bg-slate-950 p-4 rounded-lg mx-auto w-full lg:w-2/3 shadow-neon",children:[a.jsx("h2",{className:"text-2xl font-bold text-white",children:A.title}),a.jsxs("p",{className:"text-lg text-gray-300 mb-1",children:["Sermon By: ",A.sermonBy]}),a.jsxs("p",{className:"text-lg text-gray-300 mb-1",children:["Date: ",mI(A.date)]}),a.jsx(hI,{videoUrl:A.videoUrl}),a.jsx("p",{className:"text-gray-300 mt-4",children:A.content})]},A.id)),a.jsx(dI,{postsPerPage:s,totalPosts:n.length,currentPage:t,nextPage:v,prevPage:T})]})},mI=n=>{if(!n)return"";const e={year:"numeric",month:"long",day:"numeric"};return n instanceof Date?n.toLocaleDateString(void 0,e):""};function pI(){const[n,e]=w.useState([]),[t,r]=w.useState(null),[s,i]=w.useState(!1),[l,c]=w.useState(1),[u]=w.useState(5),[d,m]=w.useState(!0);w.useEffect(()=>{(async()=>{try{const y=(await vr(Xe(_e,"prayer-requests"))).docs.map(_=>{const b=_.data();return{id:_.id,...b,date:b.date.toDate()}});y.sort((_,b)=>b.date-_.date),e(y)}catch(E){console.error("Error fetching prayer requests:",E)}finally{m(!1)}})()},[]);const g=O=>{r({...O,date:O.date.toISOString().split("T")[0]}),i(!0)},v=async(O,E)=>{try{if(E){const y=fo(),_=Ps(y,E);await cm(_)}await xl(Ze(_e,"prayer-requests",O)),e(n.filter(y=>y.id!==O))}catch(y){console.error("Error deleting prayer request:",y)}},T=async O=>{O.preventDefault();const{id:E,date:y,content:_,userName:b,picUrl:I}=t;try{const N=Ze(_e,"prayer-requests",E);await Cn(N,{date:oe.fromDate(new Date(y)),content:_,userName:b,picUrl:I}),i(!1),window.location.reload()}catch(N){console.error("Error updating prayer request:",N)}},A=async O=>{try{const E=Ze(_e,"prayer-requests",O);await Cn(E,{isApproved:!0}),e(n.map(y=>y.id===O?{...y,isApproved:!0}:y))}catch(E){console.error("Error approving prayer request:",E)}},k=O=>{const{name:E,value:y}=O.target;r(_=>({..._,[E]:y}))},R=l*u,L=R-u,P=n.slice(L,R),j=O=>c(O),D=()=>c(O=>Math.min(O+1,Math.ceil(n.length/u))),V=()=>c(O=>Math.max(O-1,1));return d?a.jsx(wr,{}):a.jsxs("div",{className:"flex flex-col items-center ",children:[a.jsx("h1",{className:"text-4xl font-bold my-8 zoom",children:"Edit Prayer Request"}),a.jsxs("div",{className:"prayer-requests-list w-full max-w-2xl mt-8 flex flex-col items-center ",children:[P.map(O=>a.jsxs("div",{className:"p-4 border mb-4 rounded gradient-background",children:[a.jsx("h2",{className:"text-xl font-bold mb-2",children:O.title}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Content:"})," ",O.content]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Date:"})," ",O.date.toLocaleDateString("en-GB")]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"User Name:"})," ",O.userName]}),O.picUrl&&a.jsx("img",{src:O.picUrl,alt:"Prayer Request",className:"mb-2 rounded-lg max-w-full h-auto"}),a.jsxs("div",{className:"flex",children:[a.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded mr-2",onClick:()=>g(O),children:"Edit"}),a.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded mr-2",onClick:()=>v(O.id,O.picUrl),children:"Delete"}),!O.isApproved&&a.jsx("button",{className:"bg-green-500 text-white px-4 py-2 rounded",onClick:()=>A(O.id),children:"Approve"})]})]},O.id)),a.jsx(Dl,{requestsPerPage:u,totalRequests:n.length,paginate:j,currentPage:l,nextPage:D,prevPage:V})]}),s&&t&&a.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50",children:a.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg max-w-md",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Edit Prayer Request"}),a.jsxs("form",{onSubmit:T,children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"date",className:"block text-gray-700 font-bold mb-2",children:"Date:"}),a.jsx("input",{type:"date",id:"date",name:"date",value:t.date,onChange:k,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"content",className:"block text-gray-700 font-bold mb-2",children:"Content:"}),a.jsx("textarea",{id:"content",name:"content",value:t.content,onChange:k,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"userName",className:"block text-gray-700 font-bold mb-2",children:"User Name:"}),a.jsx("input",{type:"text",id:"userName",name:"userName",value:t.userName,onChange:k,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"picUrl",className:"block text-gray-700 font-bold mb-2",children:"Picture URL:"}),a.jsx("input",{type:"text",id:"picUrl",name:"picUrl",value:t.picUrl||"",onChange:k,className:"w-full p-2 border border-gray-300 rounded"})]}),a.jsxs("div",{className:"flex justify-end",children:[a.jsx("button",{type:"button",className:"bg-gray-500 text-white px-4 py-2 rounded mr-2",onClick:()=>i(!1),children:"Cancel"}),a.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Save Changes"})]})]})]})})]})}function gI(){const n=V=>{const O={weekday:"long",year:"numeric",month:"long",day:"numeric"};return V.toLocaleDateString("en-US",O)},[e,t]=w.useState([]),[r,s]=w.useState(1),[i]=w.useState(5),[l,c]=w.useState(null),[u,d]=w.useState(!1),[m,g]=w.useState(!0);w.useEffect(()=>{(async()=>{try{const O=_l(Xe(_e,"daily-posts")),y=(await vr(O)).docs.map(_=>({id:_.id,..._.data(),date:_.data().date.toDate()}));y.sort((_,b)=>b.date-_.date),t(y),g(!1)}catch(O){console.error("Error fetching posts:",O)}})()},[]);const v=V=>{c(V),d(!0)},T=async V=>{try{if(V.imgUrl&&V.imgUrl.startsWith("https://firebasestorage.googleapis.com/")){const O=Ps(um,V.imgUrl);await cm(O)}await xl(Ze(_e,"daily-posts",V.id)),t(e.filter(O=>O.id!==V.id))}catch(O){console.error("Error deleting post:",O)}},A=async V=>{V.preventDefault();const{id:O,date:E,content:y,imgUrl:_,likes:b,postedBy:I}=l;try{const N=Ze(_e,"daily-posts",O);await Cn(N,{date:oe.fromDate(new Date(E)),content:y,imgUrl:_,likes:b,postedBy:I}),d(!1),window.location.reload()}catch(N){console.error("Error updating post:",N)}},k=V=>{const{name:O,value:E}=V.target;c(y=>({...y,[O]:E}))},R=r*i,L=R-i,P=e.slice(L,R),j=()=>s(V=>Math.min(V+1,Math.ceil(e.length/i))),D=()=>s(V=>Math.max(V-1,1));return a.jsxs("div",{className:"flex flex-col items-center min-h-screen bg-gradient-to-r from-black to-white p-4",children:[a.jsx("h1",{className:"text-4xl font-bold text-white my-8 mt-16",children:"Update Daily Posts"}),a.jsx("div",{className:"daily-posts-list w-full max-w-2xl mt-1",children:m?a.jsx(wr,{}):P.length>0?P.map((V,O)=>a.jsxs("div",{className:"bg-gray-800 text-white rounded-lg shadow-lg p-6 mb-4",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:V.content}),a.jsxs("p",{className:"mb-4",children:[a.jsx("strong",{children:"Date:"})," ",n(new Date(V.date))]}),a.jsxs("p",{className:"mb-4",children:[a.jsx("strong",{children:"Posted By:"})," ",V.postedBy]}),V.imgUrl&&a.jsx("div",{className:"mb-4 flex justify-center",children:a.jsx("img",{src:V.imgUrl,alt:"Post",className:"w-full h-auto rounded-lg"})}),a.jsx("button",{className:"bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mr-2",onClick:()=>v(V),children:"Update"}),a.jsx("button",{className:"bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded",onClick:()=>T(V),children:"Delete"})]},O)):a.jsx("p",{children:"No daily posts available."})}),u&&l&&a.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-75",children:a.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Update Post"}),a.jsxs("form",{onSubmit:A,children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"date",className:"block text-gray-700 font-bold mb-2",children:"Date:"}),a.jsx("input",{type:"date",id:"date",name:"date",value:new Date(l.date).toISOString().split("T")[0],onChange:k,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"content",className:"block text-gray-700 font-bold mb-2",children:"Content:"}),a.jsx("textarea",{id:"content",name:"content",value:l.content,onChange:k,className:"w-full p-2 border border-gray-300 rounded whitespace-pre-wrap",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"imgUrl",className:"block text-gray-700 font-bold mb-2",children:"Image URL:"}),a.jsx("input",{type:"text",id:"imgUrl",name:"imgUrl",value:l.imgUrl,onChange:k,className:"w-full p-2 border border-gray-300 rounded"}),l.imgUrl&&a.jsx("div",{className:"mt-4 flex justify-center",children:a.jsx("img",{src:l.imgUrl,alt:"Post",className:"w-32 h-auto rounded-lg"})})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"likes",className:"block text-gray-700 font-bold mb-2",children:"Likes:"}),a.jsx("input",{type:"number",id:"likes",name:"likes",value:l.likes,onChange:k,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"postedBy",className:"block text-gray-700 font-bold mb-2",children:"Posted By:"}),a.jsx("input",{type:"text",id:"postedBy",name:"postedBy",value:l.postedBy,onChange:k,className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),a.jsxs("div",{className:"flex justify-end",children:[a.jsx("button",{type:"button",className:"bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded mr-2",onClick:()=>d(!1),children:"Cancel"}),a.jsx("button",{type:"submit",className:"bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded",children:"Update"})]})]})]})}),a.jsxs("div",{className:"flex justify-center mt-4",children:[a.jsx("button",{className:"bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mr-2",onClick:D,disabled:r===1,children:"Previous"}),a.jsx("button",{className:"bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded",onClick:j,disabled:r===Math.ceil(e.length/i),children:"Next"})]})]})}const yI=({onVideoUploaded:n})=>{const[e,t]=w.useState(""),[r,s]=w.useState(""),[i,l]=w.useState(""),[c,u]=w.useState(""),[d,m]=w.useState(!1),[g,v]=w.useState(null),[T,A]=w.useState(""),k=kt();w.useEffect(()=>{const j=Qi(He,D=>{A(D?D.displayName||D.email:"")});return()=>j()},[]);const R=async j=>{j.preventDefault(),m(!0);const D=await L(i);try{await El(Xe(_e,"facebook-video"),{title:e,sermonBy:r,videoUrl:i,content:c,date:oe.fromDate(new Date),userName:T,embeddable:D}),t(""),s(""),l(""),u(""),v(null),alert("Video uploaded successfully!"),k("/facebook-live")}catch(V){v(V.message)}finally{m(!1)}},L=async j=>new Promise(D=>{const V=document.createElement("iframe");V.src=`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(j)}&show_text=false&width=734`,V.style.display="none",document.body.appendChild(V),V.onload=()=>{D(!0),document.body.removeChild(V)},V.onerror=()=>{D(!1),document.body.removeChild(V)}}),P=()=>{k("/facebook-live")};return a.jsxs("form",{onSubmit:R,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Upload Video"}),g&&a.jsx("p",{className:"text-red-500 mb-4",children:g}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Title:"}),a.jsx("input",{type:"text",value:e,onChange:j=>t(j.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Sermon By:"}),a.jsx("input",{type:"text",value:r,onChange:j=>s(j.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Video URL:"}),a.jsx("input",{type:"text",value:i,onChange:j=>l(j.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Content:"}),a.jsx("textarea",{value:c,onChange:j=>u(j.target.value),required:!0,className:"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none whitespace-pre-wrap"})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("button",{type:"button",onClick:P,className:"py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300",children:"Cancel"}),a.jsx("button",{type:"submit",disabled:d,className:"py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300",children:d?"Uploading...":"Upload"})]})]})};function _I(){return a.jsxs("div",{className:"flex flex-col items-center mt-8 space-y-8 gradient-background",children:[a.jsx("div",{className:"w-full max-w-sm",children:a.jsx("img",{src:"/zapper1.jpg",alt:"Image 1",className:"w-full h-84 object-contain rounded-md shadow-md mt-4"})}),a.jsxs("div",{className:"bg-slate-900 p-6 rounded-lg text-center w-full max-w-sm hover:shadow-xl transform hover:scale-105 transition duration-300 mb-4 zoom",children:[a.jsx("h1",{className:"text-2xl font-bold mb-4 text-white",children:"Banking Details"}),a.jsx("p",{className:"text-white",children:"Westville Assembly of God"}),a.jsx("p",{className:"text-white",children:"Std Bank Westville"}),a.jsx("p",{className:"text-white",children:"Acc no 053102800"}),a.jsx("p",{className:"text-white",children:"Branch code 045426"})]})]})}const vI=()=>a.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-white",children:a.jsxs("div",{className:"max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center",children:[a.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-4",children:"Successful Payment"}),a.jsx("p",{className:"text-lg text-gray-700 mb-8",children:"Thank you for your payment."}),a.jsx("div",{className:"w-64 h-64 mx-auto mb-8",children:a.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr1DMONakU9MUecTXVHg290MknEaXlFRhrA&s",alt:"Success",className:"object-cover w-full h-full rounded-lg"})})]})}),bI=()=>a.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-white",children:a.jsxs("div",{className:"max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8",children:[a.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-4",children:"Payment Cancelled"}),a.jsx("p",{className:"text-lg text-gray-700 text-center",children:"Your payment was cancelled."})]})}),wI=()=>(console.log("IPN received"),a.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-white",children:a.jsxs("div",{className:"max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8",children:[a.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-4",children:"Payment Notification Received"}),a.jsx("p",{className:"text-lg text-gray-700 text-center",children:"IPN notification received."})]})}));function xI(){const n=()=>{new Audio("/click.mp3").play()};return a.jsx("footer",{className:"footer bg-gray-200 py-4",children:a.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row items-center justify-between",children:[a.jsxs("div",{className:"mb-4 sm:mb-0 sm:mr-4 hover:bg-black p-2 rounded-lg text-center",children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"OUR EMAIL"}),a.jsx("a",{href:"mailto:info@riversidechurch.org.za",className:"text-blue-500 hover:underline mb-4 block",children:"info@riversidechurch.org.za"})]}),a.jsxs("ul",{className:"footer-links flex flex-col sm:flex-row sm:justify-center text-center",children:[a.jsx("li",{className:"mb-4 sm:mb-0 ml-6",children:a.jsx(ce,{to:"/about-us",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"About Us"})}),a.jsx("li",{className:"mb-4 sm:mb-0",children:a.jsx(ce,{to:"/baptism",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Baptism"})}),a.jsx("li",{className:"mb-4 sm:mb-0",children:a.jsx(ce,{to:"/fasting",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Fasting"})}),a.jsx("li",{className:"mb-4 sm:mb-0 sm:ml-4",children:a.jsx(ce,{to:"/giving",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Giving"})}),a.jsx("li",{className:"mb-4 sm:mb-0 sm:ml-4",children:a.jsx(ce,{to:"/growth-track",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Growth Track"})}),a.jsx("li",{className:"mb-4 sm:mb-0 sm:ml-4",children:a.jsx(ce,{to:"/life-groups",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Life Groups"})}),a.jsx("li",{className:"mb-4 sm:mb-0 sm:ml-4",children:a.jsx(ce,{to:"/ministries",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Ministries"})}),a.jsx("li",{className:"mb-4 sm:mb-0 sm:ml-4",children:a.jsx(ce,{to:"/resources",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Resources"})}),a.jsx("li",{className:"mb-4 sm:mb-0 sm:ml-4",children:a.jsx(ce,{to:"/data-protection-policy",onClick:n,className:({isActive:e})=>e?"active-footer-link text-gray-900 block":"text-gray-700 hover:text-gray-900 block",children:"Data Protection Policy"})}),a.jsx("li",{className:"mb-4 sm:mb-0 sm:ml-4 ",children:a.jsx("a",{href:"https://aoggroup.org.za/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-700 hover:text-gray-900 block",children:"Assemblies of God"})})]}),a.jsxs("div",{className:"social-icons mt-4 flex justify-center space-x-4 sm:justify-start sm:mt-0 sm:ml-8 lg:ml-16",children:[a.jsx("a",{href:"https://www.facebook.com/Riversidechurchwestville1",target:"_blank",rel:"noopener noreferrer",className:"text-blue-700 hover:text-blue-500 text-4xl m-4 wobble",children:a.jsx("i",{className:"fab fa-facebook"})}),a.jsx("a",{href:"https://www.youtube.com/channel/UCt9cUcS2QRvknkcwcFEVtWw",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 hover:text-red-400 text-4xl m-4 wobble",children:a.jsx("i",{className:"fab fa-youtube"})})]}),a.jsx("div",{className:"mt-8 sm:mt-0 sm:ml-8",children:a.jsxs("div",{className:"text-center sm:text-left mx-auto sm:mx-0 hover:bg-black p-2 rounded-md",children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"CALL US"}),a.jsx("p",{className:"mb-3",children:"083 448 7334"}),a.jsx("p",{className:"mb-3",children:"Visit us: 39 Stafford Road, Westville, 3629"})]})})]})})}function EI(){return a.jsxs("div",{className:"container py-4 gradient-background1",children:[a.jsx("div",{className:"lg:flex lg:items-center lg:justify-between mb-8",children:a.jsxs("div",{className:"lg:w-1/2 lg:mx-auto text-center mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 zoom text-white",children:"About Us"}),a.jsx("img",{src:"/aboutus.jpg",alt:"Church Image",className:"w-full lg:max-w-xs rounded-full mx-auto mb-4"}),a.jsxs("p",{className:"text-lg gradient-background2 rounded-lg text-white",children:["MESSAGE FROM PASTOR CEDRIC AND PASTOR LOUISE OLIVIER",a.jsx("br",{}),a.jsx("br",{}),"Welcome to a Church that is determined to stay on the cutting edge of worship, prayer and practical Bible teaching.",a.jsx("br",{}),a.jsx("br",{}),"We experience a real presence of God and a wonderful sense of family – we love doing life together. All are invited to join us and encounter a fresh approach to church – God touches hearts and lives and people are changed for the better.",a.jsx("br",{}),a.jsx("br",{}),"We love God with a passion, serve Him wholeheartedly and believe in fulfilling His purposes with excellence. We know Jesus is the answer and His church has the solution to all of life’s questions and problems.",a.jsx("br",{}),a.jsx("br",{}),"Whenever you are in the area please feel free to join us."]}),a.jsx("p",{className:"text-lg font-bold text-white",children:"Cedric and Louise"})]})}),a.jsxs("div",{className:"lg:flex lg:items-center lg:justify-between mb-8 gradient-background2",children:[a.jsxs("div",{className:"lg:flex-1 lg:mb-0 mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 text-white text-center",children:"Our Beliefs"}),a.jsxs("ul",{className:"list-disc pl-6 mb-8 text-white",children:[a.jsx("li",{className:"text-lg mb-2",children:"We believe the Bible is the inspired, infallible and authoritative Word of God. (2 Tim 3:16)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe there is one God, eternally existing in three persons: God the Father, God the Son, and God the Holy Spirit. (1 Peter 3:18/11Cor 13:14)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe that Jesus Christ was begotten by The Holy Spirit, born of the virgin Mary and is true God and true man. (Matt 1: 8 – 23)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe that the Lord Jesus Christ died as a substitute for us and that the only means of being cleansed from sin and being saved is through repentance and faith in the redemptive work of Jesus. (Acts 2: 38 – 39)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe in the bodily resurrection of Jesus Christ, His ascension into Heaven and His present life as our High Priest. (Heb 4: 15 – 16)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe in the baptism of the Holy Spirit, empowering and equipping believers for service with the accompanying supernatural gifts of the Holy Spirit. (1 Cor 12: 4 – 11)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe in the God-given fivefold ministry of the apostle, prophet, evangelist, pastor, and teacher, for the equipping of the saints. (Eph 4: 11 – 12)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe in the resurrection of both the just and the unjust, the eternal blessedness of the redeemed, and the eternal banishment of those who have rejected the offer of salvation. (Heb 9:27)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe that the one true Church is the whole company of those who have been redeemed by Jesus Christ. (1 Cor 12:13)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe that the Lord Jesus Christ appointed two ordinances: The Lord’s supper (1 Cor 11:23 – 26) Baptism by immersion in water (Matt 28:19)"}),a.jsx("li",{className:"text-lg mb-2",children:"We believe that divine healing and deliverance from bondage forms an integral part of the gospel. (Acts 5:16)"})]})]}),a.jsx("div",{className:"lg:flex-1 lg:ml-4",children:a.jsx("img",{src:"/aboutus3.jpg",alt:"Our Beliefs Image",className:"w-full lg:max-w-lg rounded-lg mx-auto mb-4"})})]}),a.jsx("div",{className:"lg:flex lg:items-center lg:justify-between mb-8",children:a.jsxs("div",{className:"lg:w-1/2 lg:mx-auto mb-8 text-center",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 text-white",children:"Our Leadership Team"}),a.jsx("img",{src:"/aboutus4.jpg",alt:"Leadership Team Image",className:"w-full lg:max-w-full rounded-lg mx-auto mb-4 zoom"}),a.jsxs("div",{className:"text-lg mb-8 bg-teal-600 rounded-lg hover:bg-teal-200 ",children:[a.jsx("h3",{className:"font-bold mb-2",children:"Pastors:"}),a.jsx("p",{className:"mb-2",children:"Cedric Olivier"}),a.jsx("p",{className:"mb-4",children:"Louise Olivier"}),a.jsx("h3",{className:"font-bold mb-2",children:"Leadership:"}),a.jsx("p",{className:"mb-2",children:"Adrian Munsamy"}),a.jsx("p",{className:"mb-2",children:"Charles Frankel"}),a.jsx("p",{children:"Susan Greer"})]})]})})]})}function TI(){return a.jsxs("div",{className:"container py-4",children:[a.jsxs("div",{className:"lg:flex lg:items-start lg:justify-between mb-8",children:[a.jsxs("div",{className:"lg:w-1/2 lg:pr-4 mb-8 gradient-background2 p-4 rounded-lg",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 text-center lg:text-left text-white",children:"Giving"}),a.jsxs("p",{className:"mb-4 text-white",children:["MAKING AN IMPACT WITH YOUR INCOME",a.jsx("br",{}),"TAKING THE STEP OF FAITH – “By tithing to God through your church where you get spiritually fed (store house)” Malachi 3:10",a.jsx("br",{}),"Want to join us in our mission of reaching people with the life-giving message of Jesus? Your generosity enables us to help more and more people to experience a life-changing relationship with Him. We are truly grateful for your giving and hope the convenience and simplicity of online giving will be helpful to you.",a.jsx("br",{}),"Financial giving can be divided into three categories: tithes, offerings and missions. The Bible teaches us that we worship the Lord with our tithe (which is HIS), ten percent of our income contributed to His church on a regular basis. When we feel called to give over and above our tithe, we do so as an offering or sow into our missions."]})]}),a.jsx("div",{className:"lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-8 lg:mt-0 lg:ml-8 lg:self-center",children:a.jsxs("p",{className:"mb-4",children:[a.jsx("span",{className:"font-bold",children:"“Remember this:"})," Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.”",a.jsx("br",{}),a.jsx("span",{className:"font-bold",children:"2 Corinthians 9:6-7"})]})})]}),a.jsxs("div",{className:"text-center mt-16",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 bg-teal-500 rounded-md",children:"OFFERING"}),a.jsx("div",{className:"flex justify-center items-center mt-8 space-x-4",children:a.jsx("img",{src:"/zapper1.jpg",alt:"Image 1",className:"w-1/2 max-w-sm rounded-md shadow-md"})}),a.jsx("p",{className:"mb-4",children:"This is an opportunity to give to God during the service. Offerings are taken up at our Sunday meetings, where you may utilize cash, Snapscan and Yoco."}),a.jsx("p",{className:"mb-4 font-bold ",children:"EFT – ELECTRONIC FUNDS TRANSFER"}),a.jsxs("p",{className:"mb-4 bg-slate-950 rounded-md text-white zoom",children:["You are welcome to use the EFT method.",a.jsx("br",{}),"Riverside Family Church",a.jsx("br",{}),"Standard Bank Westville",a.jsx("br",{}),"Account no.: 053102800",a.jsx("br",{}),"Branch code: 045426"]})]})]})}function II(){return a.jsxs("div",{className:"container py-4",children:[a.jsxs("div",{className:"lg:flex lg:items-start lg:justify-between mb-8 gradient-background2 rounded-lg p-3",children:[a.jsxs("div",{className:"lg:w-1/2 lg:pr-4 mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 text-white",children:"Growth Track"}),a.jsxs("p",{className:"mb-4 text-white",children:["WELCOME TO GROWTH TRACK",a.jsx("br",{}),"God has an incredible purpose for your life, and the Growth Track is designed to help you connect with that purpose. The Riverside church Growth Track guides you to discover your redemptive purpose and live the life God created for you. The Growth Track is made up of four steps that equip you to..."]}),a.jsx("img",{src:"/5GrowthTrackpage.jpg",alt:"Growth Track",className:"rounded-lg mt-4"})]}),a.jsx("div",{className:"lg:w-1/2",children:a.jsx("img",{src:"/6.GrowthTrackpage.jpg",alt:"Growth Track Full",className:"rounded-lg w-full h-full object-cover"})})]}),a.jsx("div",{className:"w-full zoom",children:a.jsx("img",{src:"/growthtrack7.jpg",alt:"Full Width Growth Track",className:"rounded-lg w-full object-cover"})})]})}function RI(){return a.jsxs("div",{className:"container py-4",children:[a.jsxs("div",{className:"lg:flex lg:items-center lg:justify-between mb-8",children:[a.jsxs("div",{className:"lg:w-1/2 lg:pr-4 mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 gradient-background rounded-lg",children:"Life Groups"}),a.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Your LIFE is your GROUP"}),a.jsx("h4",{className:"text-lg font-medium mb-4",children:"Life Groups have one, simple purpose: to bring people together."}),a.jsx("p",{className:"mb-4",children:"Life Groups provide a place to connect with others, share life experiences, and grow spiritually. We believe life is better when you live it together. By participating in a Life Group, you have the opportunity to reach out to others, while growing in your walk with God."}),a.jsx("p",{className:"mb-4",children:"Being part of a Life Group means joining a community where you can share your life and faith journey. Our Life Groups meet regularly to study the Bible, pray for one another, and provide support in both good and challenging times."}),a.jsx("p",{className:"mb-4",children:"Life Groups allow you to form lasting relationships and be part of a supportive network of friends who encourage and uplift you. Whether you are looking to grow in your faith, find a place to belong, or serve others, there is a Life Group for you."}),a.jsx("p",{className:"mb-4",children:"What happens at a Life Group meeting? You’ve probably seen Life Groups meeting and not even realized it. A life group looks like friends at lunch, teams playing tennis, or people studying a book or topic of interest. At its core, a life group is a small gathering of people, and it is less about what you do and more about who you do it with. By participating in Life Groups, you can expect to connect with others through a common activity, engage in life-giving conversation, and request prayer."})]}),a.jsx("div",{className:"lg:w-1/2 flex justify-center",children:a.jsx("img",{src:"/8LifegroupsPage.jpg",alt:"Life Groups",className:"rounded-lg w-full h-full object-cover ml-4 lg:ml-0 filter brightness-90 hover:brightness-100"})})]}),a.jsxs("div",{className:"lg:flex lg:items-start lg:justify-between mb-8",children:[a.jsxs("div",{className:"lg:w-1/2 lg:pr-4 mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 gradient-background rounded-lg",children:"How often does a small group meet?"}),a.jsx("p",{className:"mb-4",children:"Our Life Groups meet once, twice, three times a month, or weekly. Life Groups are meant to bring meaning and community into the flow of your life, so even if you can’t attend every meeting, there is still great value in joining a group."}),a.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Where do Life Groups meet?"}),a.jsx("p",{className:"mb-4",children:"Life Groups meet wherever they want to: homes, restaurants, sports fields, etc."}),a.jsx("h2",{className:"text-3xl font-bold mb-4",children:"How long does a typical Life Group stay together?"}),a.jsx("p",{className:"mb-4",children:"Most Life Groups meet for a term. This way, new people can join groups easily and regularly. Also, the term format allows you to try multiple groups each year. As relationships form, some groups choose to stay together for consecutive terms, but new members are always welcome."})]}),a.jsxs("div",{className:"lg:w-1/2",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 gradient-background rounded-lg",children:"Life Group Next Steps"}),a.jsx("p",{className:"mb-4",children:"Sometimes, total life change happens in an instant, but more often it happens gradually. As life group leaders, our primary role is to uncover the spiritual condition of group members and walk beside them leading them one step closer to God. What this looks like will be different for each person. Here are some practical examples to help you:"}),a.jsxs("ul",{className:"list-disc pl-4",children:[a.jsx("li",{children:"If a group member is not in a relationship with Christ, bring them to a church service where they can hear a clear presentation of the Gospel."}),a.jsx("li",{children:"Encourage group members to be water baptized."}),a.jsx("li",{children:"Invite group members to complete the Growth Track."}),a.jsx("li",{children:"Connect group members to the Dream Team."}),a.jsx("li",{children:"Introduce group members to the idea of daily prayer and Bible reading."})]}),a.jsx("p",{className:"mt-4 ",children:"Our Life Groups will be most healthy when leaders take an active role in knowing each person in their group and intentionally helping them move one step closer to Christ."})]})]})]})}function NI(){return a.jsxs("div",{className:"container py-4",children:[a.jsxs("div",{className:"text-center mb-8 gradient-background2 rounded-lg",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 zoom text-white",children:"Baptism"}),a.jsx("p",{className:"mb-4 text-white",children:"Baptism is an important step of obedience that shows others we have personally trusted Jesus for our salvation. Jesus was baptized when He was on the earth, and we do this to follow His example. When Christians are baptized, they are submerged under water to identify with the death and burial of Jesus and raised out of the water to identify with His resurrection. We believe that water baptism is a public declaration of three important things: you are a follower of Jesus Christ, you are beginning a changed life in Christ, and you are part of a new family."}),a.jsx("p",{className:"mb-4 text-white",children:"Those who are baptized are following Jesus’ example and obeying His command."}),a.jsx("blockquote",{className:"text-lg font-medium mb-4 text-white",children:"“As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him. And a voice from heaven said, ‘This is my Son, whom I love; with him I am well pleased.’” —Matthew 3:16–17"}),a.jsx("blockquote",{className:"text-lg font-medium text-white",children:"“Then Jesus came to them and said, ‘All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.’” —Matthew 28:18–20"})]}),a.jsxs("div",{className:"lg:flex lg:items-start lg:justify-between mb-8",children:[a.jsxs("div",{className:"lg:w-1/2 lg:pr-4 mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Water baptism is a public declaration of three very important things:"}),a.jsxs("ul",{className:"list-disc pl-4 mb-8",children:[a.jsxs("li",{className:"mb-4",children:[a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"You are a follower of Jesus Christ."}),a.jsx("blockquote",{className:"text-lg font-medium",children:"“Those who accepted his message were baptized.” —Acts 2:41"})]}),a.jsxs("li",{className:"mb-4",children:[a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"You are beginning a changed life in Christ."}),a.jsx("blockquote",{className:"text-lg font-medium",children:"“We were buried with Him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.” —Romans 6:4"})]}),a.jsxs("li",{children:[a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"You are part of a new family."}),a.jsx("blockquote",{className:"text-lg font-medium",children:"“So in Christ Jesus you are all children of God through faith, for all of you who were baptized into Christ have clothed yourselves with Christ.” —Galatians 3:26–27"})]})]})]}),a.jsxs("div",{className:"lg:w-1/2 lg:pl-4 mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Other questions"}),a.jsxs("div",{className:"mb-8",children:[a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"I have already been baptized. Should I be baptized again?"}),a.jsx("p",{className:"mb-4",children:"Your baptism should have signified you becoming a follower of Jesus, beginning a changed life, and uniting with a new family. If your baptism did not reflect this change of life, then you should be baptized again."})]}),a.jsxs("div",{className:"mb-8",children:[a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Can my child be baptized?"}),a.jsx("p",{className:"mb-4",children:"We will baptize anyone over age 10 who understands what baptism symbolizes and wants to make that personal public declaration. We encourage parents to take the journey of salvation with their child to see the fruits of salvation. Also to meet the pastor to discuss your child’s baptism."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Can my infant be baptized?"}),a.jsx("p",{className:"mb-4",children:"Throughout the New Testament, the Bible teaches that baptism is a public expression of worship symbolizing the new life we have when we follow Jesus. In the Bible we see that Jesus’ parents dedicated him to the Lord (Luke 2:22–40), and he was later baptized as an adult (Matthew 3:16–17)."}),a.jsx("p",{className:"mb-4",children:"We understand that some churches practice “infant baptism”. This ceremony is intended to be a commitment between the parents and God on the behalf of the child. The parents promise to raise their child in the faith until the child is old enough to make his or her own personal confession of Christ. This custom began about 300 years after the Bible was completed and is different from the biblical examples of new believers being baptized to publicly profess their faith in Jesus."}),a.jsx("p",{className:"mb-4",children:"So at Riverside church we provide opportunities for child dedication and believer’s baptism. To schedule a baby dedication, please contact the pastor for a chat."})]})]})]}),a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4",children:"We run a baptismal class when needed"}),a.jsx("img",{src:"/9BaptismPage.jpg",alt:"Baptismal Class",className:"mx-auto mb-4 rounded-lg shadow-lg zoom",style:{maxWidth:"100%",height:"auto"}})]})]})}const AI=()=>{const n=[{id:1,title:"Riverside Kids",content:"That’s why we are committed to creating safe and fun environments where your children are taught about the Bible and the love of Jesus through relevant, age-appropriate kids services. Our ultimate hope is to see a generation of children come to know God at an early age.",buttonLabel:"Learn More",buttonLink:"/riverside-kids"},{id:2,title:"Riverside Teens",content:"Our teen program runs on Fridays from 7 – 8:30pm. At every Ignite meeting, you will experience powerful worship and a great message! We’d love to spend time with you and have some fun surprises! Also, feel free to invite as many friends as you like, you do not need to be a member of Riverside Church to attend! At our IGNITE meetings you will experience food, games, eating, fun, singing, bible ..& so much MORE"},{id:3,title:"Riverside Ladies",content:"Our ladies meet once a term for a special meeting geared around a theme, resulting in lots of Food, Fun and Interaction, to which friends can be invited. These meetings always have a God centered focus."},{id:4,title:"Riverside Missions",content:"Our Heart is — Influencing Africa & beyond with the Gospel of Jesus Christ.",buttonLabel:"Learn More",buttonLink:"/local-missions"},{id:5,title:"Away Missions",content:"Our Heart is — Influencing Africa & beyond with the Gospel of Jesus Christ.",buttonLabel:"Learn More",buttonLink:"/away-missions"},{id:6,title:"Riverside Men",content:"We meet once a month for a breakfast (or otherwise announced) for fellowship & input from the Word of God. Great friends are formed here & all are encouraged to be great men of God in all the areas of our lives."}],e=t=>{const r=document.getElementById(`ministry-content-${t}`);r&&(r.classList.toggle("hidden"),r.classList.toggle("block"))};return a.jsxs("div",{className:"container py-4 gradient-background2",children:[a.jsx("h2",{className:"text-3xl font-bold mb-8 text-center zoom",children:"Ministries"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map(t=>a.jsxs("div",{className:"ministry-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out",onMouseEnter:()=>e(t.id),onMouseLeave:()=>e(t.id),children:[a.jsx("h3",{className:"text-xl font-bold mb-4",children:t.title}),a.jsxs("div",{id:`ministry-content-${t.id}`,className:"hidden text-sm mb-4",children:[a.jsx("p",{children:t.content}),t.buttonLabel&&t.buttonLink&&a.jsx(ps,{to:t.buttonLink,className:"inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",children:t.buttonLabel})]})]},t.id))}),a.jsx("div",{className:"text-center mt-8",children:a.jsx("img",{src:"https://media.istockphoto.com/id/1448698670/photo/teamwork-hands-heart-and-diversity-partnership-business-people-support-or-community-care.jpg?b=1&s=612x612&w=0&k=20&c=VLGsPf-V1Pv1QzNzbWXH1KNq8rQF6p8K07DG9VWJ8iI=",alt:"Large Image",className:"mx-auto rounded-lg shadow-lg"})})]})},SI=()=>a.jsxs("div",{className:"container mx-auto py-8",children:[a.jsxs("div",{className:"flex flex-wrap",children:[a.jsx("div",{className:"w-full lg:w-2/3 px-4 mb-8",children:a.jsxs("div",{className:"gradient-background rounded-lg p-6",children:[a.jsx("h2",{className:"text-3xl font-bold mb-2 text-white",children:"Riverside Kids"}),a.jsx("h3",{className:"text-xl font-semibold mb-4 text-white",children:"We want your kids to Love Church"}),a.jsx("p",{className:"mb-4 text-white",children:"That’s why we are committed to creating safe and fun environments where your children are taught about the Bible and the love of Jesus through relevant, age-appropriate kids services. Our ultimate hope is to see a generation of children come to know God at an early age."}),a.jsx("p",{className:"mb-4 text-white",children:"Children learn the Bible through age-appropriate activities like stories, crafts, and Bible action songs that reinforce Bible truths. They are also given the opportunity to build meaningful relationships with their friends and teachers. Our services are designed to present the love of Jesus to our kids in a way that is exciting and makes sense to them. Every week they get to play games, experience dynamic worship, work on a Bible story, learn an interesting object lesson, receive prayer, and make friends."})]})}),a.jsx("div",{className:"w-full lg:w-1/3 px-4 mb-8 flex justify-center items-center ",children:a.jsx("img",{src:"/riversidekids1.jpg",alt:"Riverside Kids",className:"w-full h-auto rounded-lg"})})]}),a.jsxs("div",{className:"text-center mb-8 gradient-background2",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 text-white",children:"At Riverside Kids, We Value..."}),a.jsx("img",{src:"/riversidekids2.jpg",alt:"Riverside Kids Values",className:"mx-auto mb-4 rounded-lg"})]}),a.jsx("div",{className:"text-center zoom ",children:a.jsx("img",{src:"/riversidekids3.jpg",alt:"Centered Image",className:"mx-auto mb-8 rounded-lg "})})]}),PI=()=>a.jsxs("div",{className:"container py-4",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4 text-center",children:"Local Missions"}),a.jsx("h3",{className:"text-xl font-bold mb-2 text-center",children:"Banana City"}),a.jsx("p",{className:"text-lg mb-4 text-center",children:"Riverside established a Christian pre-school in the area that caters for approximately 40 children – it is one of the “Safe & Sound” schools all over South Africa."}),a.jsx("div",{className:"text-center",children:a.jsx("img",{src:"https://images.pexels.com/photos/5945848/pexels-photo-5945848.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Banana City",className:"mx-auto rounded-lg shadow-lg",style:{maxWidth:"100%",maxHeight:"auto"}})})]}),CI=()=>a.jsxs("div",{className:"container py-4",children:[a.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Away Missions"}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Lesotho Outreach"}),a.jsx("p",{className:"text-lg mb-4",children:"We are part of the Assemblies of God initiative in planting viable churches in this country. There are now 8 churches planted. We support the resident missionary family – The Van der Pol family (Arno, Adele, Rebecca (4), Reuben (1.5)) and the Mason’s (Brett, Rene, and their newborn daughter, Lily) – who live there with financial support and short-term mission visits. We also pray much into the work in this country."}),a.jsx("img",{src:"/12MinistriesAwayMissionsPage.jpg",alt:"Lesotho Outreach",className:"w-full mb-8 rounded-lg shadow-lg"}),a.jsx("img",{src:"/13MinistriesAwayMissions2.jpg",alt:"Missionary Families",className:"w-full mb-8 rounded-lg shadow-lg"}),a.jsx("p",{className:"text-lg mb-4",children:"The Van der Pol family (Arno, Adele, Rebecca (4), Reuben (1.5)) and the Mason’s (Brett and Rene, and their newborn daughter, Lily)"})]}),kI=()=>a.jsxs("div",{className:"container mx-auto p-4 gradient-background2",children:[a.jsx("h1",{className:"text-3xl font-bold mb-4 text-center hover:text-white p-3 rounded-lg hover:bg-slate-900 zoom",children:"Fasting"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"card p-4 bg-white shadow-lg rounded hover:text-teal-500 transition-colors duration-300",children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"The Goal of Fasting"}),a.jsx("p",{children:"The goal of fasting is to draw nearer to God. Biblical fasting always has to do with eliminating distractions for a spiritual purpose; it hits the reset button of our soul and renews us from the inside out. It also enables us to celebrate the goodness and mercy of God and prepares our hearts for all the good things God desires to bring into our lives. Remember, your personal fast should present a level of challenge, but it is very important to know your body, your options, and, most importantly, to seek God in prayer and follow what the Holy Spirit leads you to do. God desires to grow us in faith during our Daniel fast. Make your first prayer request – Lord, I want to know You more."})]}),a.jsxs("div",{className:"card p-4 bg-white shadow-lg rounded hover:text-teal-500 transition-colors duration-300",children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Biblical Fasting Focus"}),a.jsx("h3",{className:"text-xl font-semibold mb-1",children:"Pray"}),a.jsx("p",{children:"We will be praying for all areas of the church, country, and personal needs."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Fast"}),a.jsx("p",{children:"We do encourage all in Riverside Church to do some form of fasting e.g., selective fast, complete fast, partial fast, soul fast, or any combination of them. It is for you to be led by The Holy Spirit."})]}),a.jsxs("div",{className:"card p-4 bg-white shadow-lg rounded hover:text-teal-500 transition-colors duration-300",children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Daniel Fast Food List"}),a.jsx("h3",{className:"text-xl font-semibold mb-1",children:"Fruits"}),a.jsx("p",{children:"Apples, Apricots, Bananas, Blackberries, Blueberries, Cranberries, Raspberries, Strawberries, Cherries, Grapefruit, Grapes, Guava, Kiwi, Lemons, Limes, Mangoes, Watermelon, Nectarines, Oranges, Peaches, Pears, Pineapples, Plums, Tangerines."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Vegetables"}),a.jsx("p",{children:"Artichokes, Asparagus, Beets, Broccoli, Cauliflower, Brussels Sprouts, Carrots, Celery, Chili Peppers, Cucumbers, Eggplant, Garlic, Ginger Root, Leeks, Lettuce, Cabbage, Spinach, Mushrooms, Onions, Potatoes, Sweet Potatoes, Radishes, Sprouts, Squashes, Zucchini, Tomatoes, Turnips, Yams."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Whole Grains"}),a.jsx("p",{children:"Whole Wheat, Brown Rice, Quinoa, Oats, Barley, Grits, Rice Cakes, Popcorn."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Nuts, Seeds, and Legumes"}),a.jsx("p",{children:"Sunflower Seeds, Cashews, Peanuts, Sesame, Nut Butter, Peanut Butter, Dried Beans, Pinto Beans, Split Peas, Lentils, Black Eyed Peas, Kidney Beans, Black Beans, Cannellini Beans, White Beans."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Oils and Beverages"}),a.jsx("p",{children:"Olive, Canola, Grape Seed, Peanut, Sesame, Spring Water, Distilled Water, Other Pure Waters."})]}),a.jsxs("div",{className:"card p-4 bg-white shadow-lg rounded hover:text-teal-500 transition-colors duration-300",children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Scripture References"}),a.jsxs("ul",{className:"list-disc list-inside",children:[a.jsx("li",{children:"Matthew 6:16-18"}),a.jsx("li",{children:"Matthew 9:14-15"}),a.jsx("li",{children:"Luke 18:9-14"}),a.jsx("li",{children:"Acts 27:33-37"}),a.jsx("li",{children:"Nehemiah 9:1-3"})]})]}),a.jsxs("div",{className:"card p-4 bg-white shadow-lg rounded hover:text-teal-500 transition-colors duration-300",children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Types of Fasts"}),a.jsx("p",{children:"Your personal fast should present a level of challenge, but it is very important to know your body, your options, and most importantly, to seek God in prayer and follow what the Holy Spirit leads you to do."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Complete Fast"}),a.jsx("p",{children:"In this type of fast, you drink only liquids, typically water with light juices as an option."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Selective Fast"}),a.jsx("p",{children:"This type of fast involves removing certain elements from your diet. One example of a selective fast is the Daniel Fast, during which you remove meat, sweets, and bread from your diet and consume water and juice for fluids and fruits and vegetables for food."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Partial Fast"}),a.jsx("p",{children:"This fast is sometimes called the “Jewish Fast” and involves abstaining from eating any type of food in the morning and afternoon. This can either correlate to specific times of the day, such as 6:00 am to 3:00 pm, or from sunup to sundown."}),a.jsx("h3",{className:"text-xl font-semibold mt-2 mb-1",children:"Soul Fast"}),a.jsx("p",{children:"This fast is a great option if you do not have much experience fasting food, have health issues that prevent you from fasting food, or if you wish to refocus certain areas of your life that are out of balance. For example, you might choose to stop using social media or watching television for the duration of the fast and then carefully bring that element back into your life in healthy doses at the conclusion of the fast."})]}),a.jsxs("div",{className:"card p-4 bg-white shadow-lg rounded hover:text-teal-500 transition-colors duration-300",children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Fasting Basics"}),a.jsx("p",{children:"Simply stated, biblical fasting is refraining from food for a spiritual purpose. According to the Bible, there are three duties of every Christian: give, pray, and fast. Biblical fasting takes a lot of discipline and strength—strength which you can only receive from God. Your private discipline will bring you rewards in Heaven, says Matthew 6. When you give God your first through fasting, prayer, and giving at the beginning of the year, you set the course for the entire year."})]}),a.jsxs("div",{className:"card p-4 bg-white shadow-lg rounded hover:text-teal-500 transition-colors duration-300",children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Why Should I Fast?"}),a.jsxs("ul",{className:"list-disc list-inside",children:[a.jsx("li",{children:"Are you in need of healing or a miracle?"}),a.jsx("li",{children:"Do you need the tender touch of God in your life?"}),a.jsx("li",{children:"Is there a dream inside you that only He can make possible?"}),a.jsx("li",{children:"Are you in need of a fresh encounter?"}),a.jsx("li",{children:"Do you desire a deeper, more intimate, and powerful relationship with the Lord?"}),a.jsx("li",{children:"Are you ready to have heightened sensitivity to the desires of God?"}),a.jsx("li",{children:"Do you need to break away from bondages that have been holding you hostage?"}),a.jsx("li",{children:"Is there a friend or loved one that needs Salvation?"}),a.jsx("li",{children:"Do you desire to know God’s will for your life?"})]})]})]})]});function jI(){const[n,e]=w.useState({courses:!1,kidsVibe:!1}),t=s=>{e(i=>({...i,[s]:!0}))},r=s=>{e(i=>({...i,[s]:!1}))};return a.jsxs("div",{className:"container mx-auto p-4 text-center",children:[a.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Resources"}),a.jsxs("p",{className:"text-lg mb-6",children:["All Sunday Messages are available on our ",a.jsx("a",{href:"https://www.facebook.com/Riversidechurchwestville1",className:"text-blue-600 underline",children:"Facebook Live page"}),"."]}),a.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center mb-6",children:a.jsxs("div",{className:"w-full sm:w-1/2 p-4",children:[a.jsx("h2",{className:"text-3xl font-bold mb-2",children:"Courses"}),a.jsx("div",{className:"relative w-full h-96 perspective",children:a.jsx("div",{className:`absolute inset-0 w-full h-full rounded shadow-lg transition-transform duration-700 transform ${n.courses?"rotate-y-180":""}`,onMouseEnter:()=>t("courses"),onMouseLeave:()=>r("courses"),children:a.jsx("img",{src:"https://riversidechurch.org.za/wp-content/uploads/2019/02/CS-Welcome-Slide.jpg",alt:"Courses",className:"w-full h-full object-cover rounded cursor-pointer",style:{maxHeight:"100%",maxWidth:"100%"}})})})]})}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"The Caring Seminar Part 1"}),a.jsx("p",{className:"text-lg mb-2",children:"Download the PDF:"}),a.jsx("a",{href:"https://riversidechurch.org.za/wp-content/uploads/2019/02/CS_P1_pg1-6.pdf",target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block",children:"Download PDF"})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"The Caring Seminar Part 2"}),a.jsx("p",{className:"text-lg mb-2",children:"Listen to the Audio:"}),a.jsx("a",{href:"https://riversidechurch.org.za/wp-content/uploads/2019/02/The-Caring-Seminar-Part-2.mp3",target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block",children:"Listen Audio"})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"The Caring Seminar Part 3"}),a.jsx("p",{className:"text-lg mb-2",children:"Listen to the Audio:"}),a.jsx("a",{href:"https://riversidechurch.org.za/wp-content/uploads/2019/03/The-Caring-Seminar-Part-3.mp3",target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block",children:"Listen Audio"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"The Caring Seminar Part 4"}),a.jsx("p",{className:"text-lg mb-2",children:"Listen to the Audio:"}),a.jsx("a",{href:"https://riversidechurch.org.za/wp-content/uploads/2019/03/The-Caring-Seminar-Part-4.mp3",target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block",children:"Listen Audio"})]})]})}function DI(){return a.jsxs("div",{className:"container mx-auto p-4 text-left",children:[a.jsx("h1",{className:"text-4xl font-bold mb-4",children:"DATA PROTECTION POLICY"}),a.jsx("p",{className:"mb-4",children:a.jsx("strong",{children:"January 2022"})}),a.jsxs("p",{children:["Westville Riverside Church is committed to protecting personal data and respecting the rights of our data subjects (people whose personal data we collect and use). Westville Riverside Church values the personal information entrusted to us and we respect that trust by complying with all relevant laws*, and adopting good practice.",a.jsx("br",{}),"(*Protection of Personal Information Act, hereinafter “POPIA”)"]}),a.jsx("p",{className:"mt-4",children:"We process personal data to help us:"}),a.jsxs("ul",{className:"list-disc list-inside mt-2",children:[a.jsx("li",{children:"Maintain a database of our church members"}),a.jsx("li",{children:"Provide pastoral support for members and others connected with our church"}),a.jsx("li",{children:"Provide services to the community"}),a.jsx("li",{children:"Safeguard children, young people, and adults at risk"}),a.jsx("li",{children:"Recruit, support and manage staff and volunteers"}),a.jsx("li",{children:"Maintain our church accounts and records"}),a.jsx("li",{children:"Promote our services"}),a.jsx("li",{children:"Maintain the security of property and premises"}),a.jsx("li",{children:"Respond effectively to enquirers and handle any complaints"}),a.jsx("li",{children:"For any fundraising events that might require this information"})]}),a.jsx("p",{className:"mt-4",children:"This policy has been approved by the Westville Riverside Church Leadership Team who are responsible for ensuring that we comply with all our legal obligations. It sets out the legal rules that apply whenever we gather, process, store or use personal data."}),a.jsx("h2",{className:"text-2xl font-bold mt-4",children:"WHY THIS POLICY IS IMPORTANT"}),a.jsxs("p",{children:[a.jsx("strong",{children:"A."})," We are committed to protecting personal data from being misused, getting into the wrong hands because of poor security or being shared carelessly, or being accurate.",a.jsx("br",{}),a.jsx("strong",{children:"B."})," This policy sets out the measures we are committed to taking as a church and what each of us will do to ensure we comply with the relevant legislation.",a.jsx("br",{}),a.jsx("strong",{children:"C."})," For instance, we will make sure that all personal data is:"]}),a.jsxs("ul",{className:"list-disc list-inside mt-2",children:[a.jsx("li",{children:"Processed lawfully, fairly and done transparently"}),a.jsx("li",{children:"Processed for specific and legitimate purposes and not in a manner that is incompatible with those purposes"}),a.jsx("li",{children:"Adequate, relevant, and limited to what is necessary for the purposes for which it is being processed"}),a.jsx("li",{children:"Accurate, complete, and up to date"}),a.jsx("li",{children:"Not kept longer than necessary for the purposes for which it is being processed"}),a.jsx("li",{children:"Processed in a secure manner, by using appropriate technical and organizational means"}),a.jsx("li",{children:"Processed in keeping with the rights of data subjects regarding personal data"})]}),a.jsxs("p",{className:"mt-4",children:[a.jsx("strong",{children:"HOW THIS POLICY APPLIES TO YOU AND WHAT YOU NEED TO KNOW"}),a.jsx("br",{}),a.jsx("strong",{children:"A."})," As an employee or volunteer, processing personal information on behalf of the church, you are required to comply with this policy. If you think that you have accidentally breached the policy, it is important that you contact our Information Office immediately so that we can take action try to and limit the impact of the breach. Anyone who breaches the Data Protection Policy may be subject to disciplinary action, and where that individual has breached the policy intentionally, recklessly or for personal benefit they may also be liable for prosecution or to regulatory action.",a.jsx("br",{}),a.jsx("strong",{children:"B."})," As a leader and/or manager you are required to make sure that any procedures that involve personal data, which you are responsible for in your area, follow the rules set out in this Data Protection Policy.",a.jsx("br",{}),a.jsx("strong",{children:"C."})," As a data subject of Westville Riverside Church, you can be assured that we will handle your personal information in line with this policy.",a.jsx("br",{}),a.jsx("strong",{children:"D."})," As an appointed data processor/contractor, you are required to comply with this policy under the contract with us. Any breach of this policy will be taken seriously and could lead to us taking contract enforcement action against the company or terminating the contract.",a.jsx("br",{}),a.jsx("strong",{children:"E."})," Our Information Officer is responsible for advising Westville Riverside Church and its staff and members about their legal obligations under data protection law, monitoring compliance with data protection law, dealing with data security breaches and with the development of this policy. Any questions about this policy or any concerns that the policy has not been followed should be referred to them at: ",a.jsx("a",{href:"mailto:info@Riversidechurch.org.za",children:"info@Riversidechurch.org.za"})]}),a.jsx("p",{className:"mt-4",children:"Before you collect or handle any personal data as part of your work (paid or otherwise) for Westville Riverside Church, it is important that you take the time to read this policy carefully and understand exactly what is required of you, as well as the organisation’s responsibilities when we process data."}),a.jsx("h2",{className:"text-2xl font-bold mt-4",children:"HR & INTERNAL DATA COLLECTED, STORED AND PROCESSED"}),a.jsxs("p",{children:[a.jsx("strong",{children:"A."})," Employees and staff are periodically trained on what is lawful processing of personal information, and the risks associated with day-to-day handling and processing of personal information should be addressed and limited through education.",a.jsx("br",{}),a.jsx("strong",{children:"B."})," A clause has to be added to each employment contract to confirm the company’s undertaking to ensure that the employee’s personal data will be securely held and lawfully processed in terms of POPI (data protection clause)."]}),a.jsx("h2",{className:"text-2xl font-bold mt-4",children:"WEBSITE, COOKIES AND MARKETING"}),a.jsxs("p",{children:[a.jsx("strong",{children:"A."})," We believe that transparency is important when dealing with data subjects and their personal information, therefore our website collects no personal information but is still compliant with POPI.",a.jsx("br",{}),a.jsx("strong",{children:"B."})," The Westville Riverside Church POPI Act: Procedures and Policies’ document is available on the website for data subjects to peruse should they need to know how their data is processed within each department and by each service provider of the church."]}),a.jsx("p",{className:"mt-4",children:"We sent out a consent form to all existing members to reaffirm the church’s undertaking to continue to process any personal information in its possession lawfully and securely in terms of POPI."}),a.jsx("h2",{className:"text-2xl font-bold mt-4",children:"CYBERSECURITY & DATA BREACH PROTECTION"}),a.jsxs("p",{children:[a.jsx("strong",{children:"A."})," All personal data collected, stored and processed by Westville Riverside Church is done within a POPI compliant framework – accompanied by the necessary consent from all members, visitors or staff (to have their data processed).",a.jsx("br",{}),a.jsx("strong",{children:"B."})," Please note that Westville Riverside Church deals with a lot of personal information including medical conditions and certain preferences or conditions. We ensure that our internal practices are backed up by written policy or secure procedure which promotes secure and lawful processing of personal information at all times."]}),a.jsx("h2",{className:"text-2xl font-bold mt-4",children:"POLICY AND PROCEDURES"}),a.jsx("h3",{className:"text-xl font-bold mt-4",children:"Finance"}),a.jsxs("ol",{className:"list-decimal list-inside mt-2",children:[a.jsxs("li",{children:["Vendor/Supplier Invoices",a.jsxs("ol",{className:"list-decimal list-inside mt-2",children:[a.jsx("li",{children:"Staff member receives invoice from supplier."}),a.jsx("li",{children:"Staff member pays the invoice after being checked."}),a.jsx("li",{children:"All paid invoices with paperwork are then filed in a locked office with camera monitoring."})]})]}),a.jsxs("li",{children:["All HR/employee contracts etc.",a.jsxs("ol",{className:"list-decimal list-inside mt-2",children:[a.jsx("li",{children:"These are stored in a lockable office with camera monitoring when the employee is out of the office."}),a.jsxs("li",{children:["Staff reimbursement forms/staff fuel claims.",a.jsxs("ol",{className:"list-decimal list-inside mt-2",children:[a.jsx("li",{children:"Staff member hands in payment reimbursement/claim (original)."}),a.jsx("li",{children:"All paid paperwork is then filed in lockable filing cupboard."}),a.jsx("li",{children:"Office is lockable and camera monitored, when employee is out of office."})]})]})]})]}),a.jsxs("li",{children:["Financial documents/records from previous years (up to 5 years)",a.jsx("ol",{className:"list-decimal list-inside mt-2",children:a.jsx("li",{children:"These are stored in a lockable room."})})]})]}),a.jsx("h3",{className:"text-xl font-bold mt-4",children:"Legal Requirements"}),a.jsxs("ol",{className:"list-decimal list-inside mt-2",children:[a.jsx("li",{children:"Westville Riverside Church is held to and complies with the rules of the ‘Protection of Personal Information Act (POPIA)’."}),a.jsx("li",{children:"Westville Riverside Church does not store any personal data or require you to opt into receiving communications to process the data lawfully and fairly (as required by the legislation)"})]}),a.jsx("p",{className:"mt-4",children:"In general, this policy has been designed to ensure that we meet our legal obligations to protect the data rights of staff, members and all other individuals we hold personal data on behalf of (data subjects)."}),a.jsx("p",{className:"mt-4",children:"Should you have any concerns about the way we handle or use personal information, please contact us in writing at the address provided above, via email, or telephone."}),a.jsx("p",{className:"mt-4",children:"Signatures"}),a.jsx("div",{className:"mt-8 flex justify-center",children:a.jsx("img",{src:"/signatures.jpg",alt:"Data Protection Policy",className:"max-w-full h-auto"})}),a.jsxs("div",{className:"mt-8",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"WESTVILLE RIVERSIDE CHURCH COMPLIANCE"}),a.jsx("p",{children:a.jsx("strong",{children:"APPOINTMENT LETTER FOR INFORMATION OFFICER ROLE: WESTVILLE RIVERSIDE CHURCH"})}),a.jsx("p",{children:"The Information Officer role is by default that of the Designated Head of a Private Body in terms of the provisions of both the Promotion of Access to Information Act 2 of 2000 (PAIA) and the Promotion of Personal Information Act 4 of 2013 (POPI)."}),a.jsx("p",{children:"The responsibilities defined for these roles in Westville Riverside Church, a private body in terms of the aforementioned Acts are:"}),a.jsxs("ol",{className:"list-decimal ml-8",children:[a.jsxs("li",{children:["POPI Act Section 55(1): An Information Officer’s responsibilities include:",a.jsxs("ol",{className:"list-decimal ml-8",children:[a.jsx("li",{children:"the encouragement of compliance, by the body, with the conditions for the lawful processing of personal information;"}),a.jsx("li",{children:"dealing with requests made to the body pursuant to this Act;"}),a.jsx("li",{children:"working with the Regulator in relation to investigations conducted pursuant to Chapter 6 (prior authorization) in relation to the body,"}),a.jsx("li",{children:"otherwise ensuring compliance by the body with the provisions of this Act;"}),a.jsx("li",{children:"as may be prescribed."})]})]}),a.jsxs("li",{children:["POPI Regulations 2018: Responsibilities of Information Officers",a.jsxs("ol",{className:"list-decimal ml-8",children:[a.jsxs("li",{children:["An Information Officer must, in addition to the responsibilities referred to in s55(1) of the POPI Act, ensure that:",a.jsxs("ol",{className:"list-decimal ml-8",children:[a.jsx("li",{children:"A compliance framework is developed, implemented, monitored and maintained;"}),a.jsx("li",{children:"A personal information impact assessment is done to ensure that adequate measures and standards exist in order to comply with the conditions for the lawful processing of personal information;"}),a.jsx("li",{children:"A manual is developed, monitored, maintained and made available as prescribed in s14 and s51 of the PAIA Act;"}),a.jsx("li",{children:"Internal measures are developed together with adequate systems to process requests for information or access thereto; and"}),a.jsx("li",{children:"Internal awareness sessions are conducted regarding the provisions of the Act, regulations made in terms of the Act, codes of conduct, or information obtained from the Regulator."})]})]}),a.jsx("li",{children:"The Information officer shall upon request by any person, provide copies of the manual to that person upon the payment of a fee to be determined by the Regulator from time to time."})]})]})]}),a.jsx("p",{children:"Westville Riverside Church Information Officer role appointment acceptance:"}),a.jsx("p",{className:"font-semibold",children:"Signature: _____________________________"}),a.jsx("div",{className:"mt-8 flex justify-center",children:a.jsx("img",{src:"/signature2.jpg",alt:"Data Protection Policy",className:"max-w-full h-auto"})})]}),a.jsxs("div",{className:"mt-8",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"POPI Act: Section 56: Designation and delegation of Deputy Information Officer(s)"}),a.jsx("p",{children:"Each public and private body must make provision, in the manner prescribed in Section 17 of the Promotion of Access to Information Act, with the necessary changes, for the designation of –"}),a.jsxs("ol",{className:"list-decimal ml-8",children:[a.jsx("li",{children:"Such a number of persons, if any, as deputy information officers as is necessary to perform the duties and responsibilities as set out in section 55(1) of this Act; and"}),a.jsx("li",{children:"Any power or duty conferred or imposed on an information officer by this Act to a deputy information officer of that public or private body."})]}),a.jsx("p",{children:"Westville Riverside Church Information Deputy Officer role appointment acceptance:"}),a.jsx("p",{className:"font-semibold",children:"Signature: _____________________________"})]}),a.jsx("div",{className:"mt-8 flex justify-center",children:a.jsx("img",{src:"/signatures3.jpg",alt:"Data Protection Policy",className:"max-w-full h-auto"})}),a.jsx("div",{className:"mt-8 flex justify-center",children:a.jsx("img",{src:"/6.GrowthTrackpage.jpg",alt:"Data Protection Policy",className:"max-w-full h-auto"})}),a.jsx("div",{className:"mt-8",children:a.jsxs("ul",{className:"list-disc ml-8",children:[a.jsxs("li",{className:"mb-4",children:[a.jsx("strong",{children:"Knowing GOD:  "}),a.jsx("p",{children:"Finding out what it really means to live with & for God."})]}),a.jsxs("li",{className:"mb-4",children:[a.jsx("strong",{children:"Get CONNECTED:  "}),a.jsx("p",{children:"Explore the ministry of Riverside church and find out how to connect with our church."})]}),a.jsxs("li",{className:"mb-4",children:[a.jsx("strong",{children:"Discover PURPOSE:  "}),a.jsx("p",{children:"Dive into the details of your personality, discover your gifts, and see how your design reveals your purpose in life and your best fit in ministry."})]}),a.jsxs("li",{className:"mb-4",children:[a.jsx("strong",{children:"Make a DIFFERENCE:  "}),a.jsx("p",{children:"Connect to the opportunities available at Riverside church to live out your purpose and serve others by using your God-given gifts."})]})]})})]})}const OI=()=>{const[n,e]=w.useState(""),[t,r]=w.useState(""),[s,i]=w.useState(!1),l=async c=>{c.preventDefault();try{await Y_(He,n),r("Password reset email sent. Please check your inbox."),i(!1)}catch(u){r(`Error: ${u.message}`),i(!0)}};return a.jsx("div",{className:"flex justify-center items-center h-screen bg-gradient-to-r from-black via-red-500 to-yellow-600",children:a.jsxs("div",{className:"password-reset-container p-8 rounded-lg shadow-lg text-center max-w-md w-full bg-black",children:[a.jsx("h2",{className:"mb-6 text-2xl font-bold text-white",children:"Reset Password"}),a.jsxs("form",{onSubmit:l,autoComplete:"off",children:[a.jsxs("div",{className:"mb-4 text-left",children:[a.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-white",children:"Email"}),a.jsx("input",{type:"email",id:"email",className:"w-full p-2 border border-gray-300 rounded-md",value:n,onChange:c=>e(c.target.value),required:!0})]}),a.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-gray-800 text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-900",children:"Send Password Reset Email"})]}),t&&a.jsx("p",{className:`mt-4 p-2 rounded ${s?"bg-red-200 text-red-800 border border-red-300":"bg-teal-500 zoom "}`,children:t})]})})};function LI(){const{pathname:n}=dr();return w.useEffect(()=>{window.scrollTo(0,0)},[n]),null}function VI(){return a.jsxs(mg,{children:[a.jsx(LI,{})," ",a.jsx(DE,{}),a.jsxs(og,{children:[a.jsx(X,{path:"/",element:a.jsx(kT,{})}),a.jsx(X,{path:"/worship",element:a.jsx(jT,{})}),a.jsx(X,{path:"/prayer-request",element:a.jsx(DT,{})}),a.jsx(X,{path:"/alter-uploads",element:a.jsx(OT,{})}),a.jsx(X,{path:"/login",element:a.jsx(LT,{})}),a.jsx(X,{path:"/register",element:a.jsx(WT,{})}),a.jsx(X,{path:"/add-post",element:a.jsx(zT,{})}),a.jsx(X,{path:"/submit-prayer-requests",element:a.jsx(GT,{})}),a.jsx(X,{path:"/contact-us",element:a.jsx(aI,{})}),a.jsx(X,{path:"/daily-posts",element:a.jsx(lI,{})}),a.jsx(X,{path:"/services",element:a.jsx(uI,{})}),a.jsx(X,{path:"/facebook-live",element:a.jsx(fI,{})}),a.jsx(X,{path:"/update-prayer-requests",element:a.jsx(pI,{})}),a.jsx(X,{path:"/update-daily-post",element:a.jsx(gI,{})}),a.jsx(X,{path:"/upload-video",element:a.jsx(yI,{})}),a.jsx(X,{path:"/givings",element:a.jsx(_I,{})}),a.jsx(X,{path:"/payment-success",element:a.jsx(vI,{})}),a.jsx(X,{path:"/payment-cancel",element:a.jsx(bI,{})}),a.jsx(X,{path:"/payment-notify",element:a.jsx(wI,{})}),a.jsx(X,{path:"/reset-password",element:a.jsx(OI,{})}),a.jsx(X,{path:"/about-us",element:a.jsx(EI,{})}),a.jsx(X,{path:"/giving",element:a.jsx(TI,{})}),a.jsx(X,{path:"/growth-track",element:a.jsx(II,{})}),a.jsx(X,{path:"/life-groups",element:a.jsx(RI,{})}),a.jsx(X,{path:"/baptism",element:a.jsx(NI,{})}),a.jsx(X,{path:"/ministries",element:a.jsx(AI,{})}),a.jsx(X,{path:"/riverside-kids",element:a.jsx(SI,{})}),a.jsx(X,{path:"/local-missions",element:a.jsx(PI,{})})," ",a.jsx(X,{path:"/away-missions",element:a.jsx(CI,{})}),a.jsx(X,{path:"/fasting",element:a.jsx(kI,{})}),a.jsx(X,{path:"/resources",element:a.jsx(jI,{})}),a.jsx(X,{path:"/data-protection-policy",element:a.jsx(DI,{})})]}),a.jsx(xI,{})]})}hh(document.getElementById("root")).render(a.jsx(Be.StrictMode,{children:a.jsx(VI,{})}));

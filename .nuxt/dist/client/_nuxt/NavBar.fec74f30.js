import{_ as de}from"./nuxt-link.6fdb87f8.js";import{o as I,c as M,a as E,j as b,f as H,k as D,J as T,l as S,h as R,m as ve,s as fe,x as me,_ as pe,b as k,w as _,u as w,i as F,y as q,A as J,F as Y,r as z,d as O,t as X,T as he,n as Q,g as Z,p as ge,e as be}from"./entry.128413f0.js";import{u as we}from"./vue.f36acd1f.f6b7f8da.js";import{u as xe,a as ye}from"./useTransitionTracking.fca2e196.js";import{u as Ie}from"./const.be8bc19c.js";import{o as h,a as U,u as oe,c as _e,l as A,H as L,t as K,p as Ee,N as ee}from"./env.c66b33fd.js";function Se(e,n){return I(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function ke(e,n){return I(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})])}function Me(e,n){return I(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[E("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})])}var g=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(g||{});function Te(e){throw new Error("Unexpected object: "+e)}var y=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(y||{});function De(e,n){let a=n.resolveItems();if(a.length<=0)return null;let u=n.resolveActiveIndex(),t=u??-1,o=(()=>{switch(e.focus){case 0:return a.findIndex(l=>!n.resolveDisabled(l));case 1:{let l=a.slice().reverse().findIndex((i,m,v)=>t!==-1&&v.length-m-1>=t?!1:!n.resolveDisabled(i));return l===-1?l:a.length-1-l}case 2:return a.findIndex((l,i)=>i<=t?!1:!n.resolveDisabled(l));case 3:{let l=a.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return l===-1?l:a.length-1-l}case 4:return a.findIndex(l=>n.resolveId(l)===e.id);case 5:return null;default:Te(e)}})();return o===-1?u:o}function te(e,n){if(e)return e;let a=n??"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function Pe(e,n){let a=b(te(e.value.type,e.value.as));return H(()=>{a.value=te(e.value.type,e.value.as)}),D(()=>{var u;a.value||h(n)&&h(n)instanceof HTMLButtonElement&&!((u=h(n))!=null&&u.hasAttribute("type"))&&(a.value="button")}),a}function V(e){if(U.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=h(e);if(n)return n.ownerDocument}return document}function Fe({container:e,accept:n,walk:a,enabled:u}){D(()=>{let t=e.value;if(!t||u!==void 0&&!u.value)return;let o=V(e);if(!o)return;let l=Object.assign(m=>n(m),{acceptNode:n}),i=o.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,l,!1);for(;i.nextNode();)a(i.currentNode)})}let B=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var j=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(j||{}),Ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ne||{}),Ae=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ae||{});function le(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(B)).sort((n,a)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER)))}var W=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(W||{});function G(e,n=0){var a;return e===((a=V(e))==null?void 0:a.body)?!1:oe(n,{0(){return e.matches(B)},1(){let u=e;for(;u!==null;){if(u.matches(B))return!0;u=u.parentElement}return!1}})}function ue(e){let n=V(e);T(()=>{n&&!G(n.activeElement,0)&&Le(e)})}var Re=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Re||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Le(e){e==null||e.focus({preventScroll:!0})}let Ce=["textarea","input"].join(",");function Oe(e){var n,a;return(a=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,Ce))!=null?a:!1}function ie(e,n=a=>a){return e.slice().sort((a,u)=>{let t=n(a),o=n(u);if(t===null||o===null)return 0;let l=t.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function $e(e,n){return Be(le(),n,{relativeTo:e})}function Be(e,n,{sorted:a=!0,relativeTo:u=null,skipElements:t=[]}={}){var o;let l=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,i=Array.isArray(e)?a?ie(e):e:le(e);t.length>0&&i.length>1&&(i=i.filter(s=>!t.includes(s))),u=u??l.activeElement;let m=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,i.indexOf(u))-1;if(n&4)return Math.max(0,i.indexOf(u))+1;if(n&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),r=n&32?{preventScroll:!0}:{},p=0,d=i.length,f;do{if(p>=d||p+d<=0)return 0;let s=v+p;if(n&16)s=(s+d)%d;else{if(s<0)return 3;if(s>=d)return 1}f=i[s],f==null||f.focus(r),p+=m}while(f!==l.activeElement);return n&6&&Oe(f)&&f.select(),2}function N(e,n,a){U.isServer||D(u=>{document.addEventListener(e,n,a),u(()=>document.removeEventListener(e,n,a))})}function je(e,n,a){U.isServer||D(u=>{window.addEventListener(e,n,a),u(()=>window.removeEventListener(e,n,a))})}function He(e,n,a=S(()=>!0)){function u(o,l){if(!a.value||o.defaultPrevented)return;let i=l(o);if(i===null||!i.getRootNode().contains(i))return;let m=function v(r){return typeof r=="function"?v(r()):Array.isArray(r)||r instanceof Set?r:[r]}(e);for(let v of m){if(v===null)continue;let r=v instanceof HTMLElement?v:h(v);if(r!=null&&r.contains(i)||o.composed&&o.composedPath().includes(r))return}return!G(i,W.Loose)&&i.tabIndex!==-1&&o.preventDefault(),n(o,i)}let t=b(null);N("pointerdown",o=>{var l,i;a.value&&(t.value=((i=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:i[0])||o.target)},!0),N("mousedown",o=>{var l,i;a.value&&(t.value=((i=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:i[0])||o.target)},!0),N("click",o=>{t.value&&(u(o,()=>t.value),t.value=null)},!0),N("touchend",o=>u(o,()=>o.target instanceof HTMLElement?o.target:null),!0),je("blur",o=>u(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ne(e){return[e.screenX,e.screenY]}function Ue(){let e=b([-1,-1]);return{wasMoved(n){let a=ne(n);return e.value[0]===a[0]&&e.value[1]===a[1]?!1:(e.value=a,!0)},update(n){e.value=ne(n)}}}let ae=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function re(e){var n,a;let u=(n=e.innerText)!=null?n:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return u;let o=!1;for(let i of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),o=!0;let l=o?(a=t.innerText)!=null?a:"":u;return ae.test(l)&&(l=l.replace(ae,"")),l}function Ke(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let a=e.getAttribute("aria-labelledby");if(a){let u=a.split(" ").map(t=>{let o=document.getElementById(t);if(o){let l=o.getAttribute("aria-label");return typeof l=="string"?l.trim():re(o).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return re(e).trim()}function Ve(e){let n=b(""),a=b("");return()=>{let u=h(e);if(!u)return"";let t=u.innerText;if(n.value===t)return a.value;let o=Ke(u).trim().toLowerCase();return n.value=t,a.value=o,o}}var We=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(We||{}),Ge=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ge||{});function qe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let se=Symbol("MenuContext");function C(e){let n=me(se,null);if(n===null){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,C),a}return n}let Je=R({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:a}){let u=b(1),t=b(null),o=b(null),l=b([]),i=b(""),m=b(null),v=b(1);function r(d=f=>f){let f=m.value!==null?l.value[m.value]:null,s=ie(d(l.value.slice()),x=>h(x.dataRef.domRef)),c=f?s.indexOf(f):null;return c===-1&&(c=null),{items:s,activeItemIndex:c}}let p={menuState:u,buttonRef:t,itemsRef:o,items:l,searchQuery:i,activeItemIndex:m,activationTrigger:v,closeMenu:()=>{u.value=1,m.value=null},openMenu:()=>u.value=0,goToItem(d,f,s){let c=r(),x=De(d===y.Specific?{focus:y.Specific,id:f}:{focus:d},{resolveItems:()=>c.items,resolveActiveIndex:()=>c.activeItemIndex,resolveId:P=>P.id,resolveDisabled:P=>P.dataRef.disabled});i.value="",m.value=x,v.value=s??1,l.value=c.items},search(d){let f=i.value!==""?0:1;i.value+=d.toLowerCase();let s=(m.value!==null?l.value.slice(m.value+f).concat(l.value.slice(0,m.value+f)):l.value).find(x=>x.dataRef.textValue.startsWith(i.value)&&!x.dataRef.disabled),c=s?l.value.indexOf(s):-1;c===-1||c===m.value||(m.value=c,v.value=1)},clearSearch(){i.value=""},registerItem(d,f){let s=r(c=>[...c,{id:d,dataRef:f}]);l.value=s.items,m.value=s.activeItemIndex,v.value=1},unregisterItem(d){let f=r(s=>{let c=s.findIndex(x=>x.id===d);return c!==-1&&s.splice(c,1),s});l.value=f.items,m.value=f.activeItemIndex,v.value=1}};return He([t,o],(d,f)=>{var s;p.closeMenu(),G(f,W.Loose)||(d.preventDefault(),(s=h(t))==null||s.focus())},S(()=>u.value===0)),ve(se,p),_e(S(()=>oe(u.value,{0:A.Open,1:A.Closed}))),()=>{let d={open:u.value===0,close:p.closeMenu};return L({ourProps:{},theirProps:e,slot:d,slots:n,attrs:a,name:"Menu"})}}}),Ye=R({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${K()}`}},setup(e,{attrs:n,slots:a,expose:u}){let t=C("MenuButton");u({el:t.buttonRef,$el:t.buttonRef});function o(v){switch(v.key){case g.Space:case g.Enter:case g.ArrowDown:v.preventDefault(),v.stopPropagation(),t.openMenu(),T(()=>{var r;(r=h(t.itemsRef))==null||r.focus({preventScroll:!0}),t.goToItem(y.First)});break;case g.ArrowUp:v.preventDefault(),v.stopPropagation(),t.openMenu(),T(()=>{var r;(r=h(t.itemsRef))==null||r.focus({preventScroll:!0}),t.goToItem(y.Last)});break}}function l(v){switch(v.key){case g.Space:v.preventDefault();break}}function i(v){e.disabled||(t.menuState.value===0?(t.closeMenu(),T(()=>{var r;return(r=h(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})})):(v.preventDefault(),t.openMenu(),qe(()=>{var r;return(r=h(t.itemsRef))==null?void 0:r.focus({preventScroll:!0})})))}let m=Pe(S(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var v;let r={open:t.menuState.value===0},{id:p,...d}=e,f={ref:t.buttonRef,id:p,type:m.value,"aria-haspopup":"menu","aria-controls":(v=h(t.itemsRef))==null?void 0:v.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:l,onClick:i};return L({ourProps:f,theirProps:d,slot:r,attrs:n,slots:a,name:"MenuButton"})}}}),ze=R({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${K()}`}},setup(e,{attrs:n,slots:a,expose:u}){let t=C("MenuItems"),o=b(null);u({el:t.itemsRef,$el:t.itemsRef}),Fe({container:S(()=>h(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(r){return r.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});function l(r){var p;switch(o.value&&clearTimeout(o.value),r.key){case g.Space:if(t.searchQuery.value!=="")return r.preventDefault(),r.stopPropagation(),t.search(r.key);case g.Enter:if(r.preventDefault(),r.stopPropagation(),t.activeItemIndex.value!==null){let d=t.items.value[t.activeItemIndex.value];(p=h(d.dataRef.domRef))==null||p.click()}t.closeMenu(),ue(h(t.buttonRef));break;case g.ArrowDown:return r.preventDefault(),r.stopPropagation(),t.goToItem(y.Next);case g.ArrowUp:return r.preventDefault(),r.stopPropagation(),t.goToItem(y.Previous);case g.Home:case g.PageUp:return r.preventDefault(),r.stopPropagation(),t.goToItem(y.First);case g.End:case g.PageDown:return r.preventDefault(),r.stopPropagation(),t.goToItem(y.Last);case g.Escape:r.preventDefault(),r.stopPropagation(),t.closeMenu(),T(()=>{var d;return(d=h(t.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case g.Tab:r.preventDefault(),r.stopPropagation(),t.closeMenu(),T(()=>$e(h(t.buttonRef),r.shiftKey?j.Previous:j.Next));break;default:r.key.length===1&&(t.search(r.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function i(r){switch(r.key){case g.Space:r.preventDefault();break}}let m=Ee(),v=S(()=>m!==null?(m.value&A.Open)===A.Open:t.menuState.value===0);return()=>{var r,p;let d={open:t.menuState.value===0},{id:f,...s}=e,c={"aria-activedescendant":t.activeItemIndex.value===null||(r=t.items.value[t.activeItemIndex.value])==null?void 0:r.id,"aria-labelledby":(p=h(t.buttonRef))==null?void 0:p.id,id:f,onKeydown:l,onKeyup:i,role:"menu",tabIndex:0,ref:t.itemsRef};return L({ourProps:c,theirProps:s,slot:d,attrs:n,slots:a,features:ee.RenderStrategy|ee.Static,visible:v.value,name:"MenuItems"})}}}),Xe=R({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${K()}`}},setup(e,{slots:n,attrs:a,expose:u}){let t=C("MenuItem"),o=b(null);u({el:o,$el:o});let l=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),i=Ve(o),m=S(()=>({disabled:e.disabled,get textValue(){return i()},domRef:o}));H(()=>t.registerItem(e.id,m)),fe(()=>t.unregisterItem(e.id)),D(()=>{t.menuState.value===0&&l.value&&t.activationTrigger.value!==0&&T(()=>{var c,x;return(x=(c=h(o))==null?void 0:c.scrollIntoView)==null?void 0:x.call(c,{block:"nearest"})})});function v(c){if(e.disabled)return c.preventDefault();t.closeMenu(),ue(h(t.buttonRef))}function r(){if(e.disabled)return t.goToItem(y.Nothing);t.goToItem(y.Specific,e.id)}let p=Ue();function d(c){p.update(c)}function f(c){p.wasMoved(c)&&(e.disabled||l.value||t.goToItem(y.Specific,e.id,0))}function s(c){p.wasMoved(c)&&(e.disabled||l.value&&t.goToItem(y.Nothing))}return()=>{let{disabled:c}=e,x={active:l.value,disabled:c,close:t.closeMenu},{id:P,...ce}=e;return L({ourProps:{id:P,ref:o,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,disabled:void 0,onClick:v,onFocus:r,onPointerenter:d,onMouseenter:d,onPointermove:f,onMousemove:f,onPointerleave:s,onMouseleave:s},theirProps:{...a,...ce},slot:x,attrs:a,slots:n,name:"MenuItem"})}}});const $=""+globalThis.__publicAssetsURL("favicon.png");const Qe=e=>(ge("data-v-dcd491ca"),e=e(),be(),e),Ze={class:"lg:w-1/12"},et=Qe(()=>E("p",null,"JY",-1)),tt={key:0,class:"nav-links"},nt={class:"lg:w-1/12 flex items-center justify-end gap-4"},at={class:"ml-5 flex items-center"},rt={class:"menu-button"},ot={class:"menu-item-padding"},lt={__name:"NavBar",setup(e){we({script:[{children:`if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`}]});const{enabled:n,toggleTheme:a}=xe(),{trackTransitionCompleted:u,transitionCompletedOnce:t}=ye(),{navigation:o}=Ie();let l=b(!t.value);const i=b("bg-black text-white"),m=b($),v=p=>{Z.set(p,{opacity:0})},r=(p,d)=>{Z.to(p,{opacity:1,duration:.8,delay:p.dataset.index*.2,onComplete:d})};return D(()=>{i.value="bg-white text-black dark:bg-[#121212]",m.value=$,n.value&&(m.value=$)}),H(()=>{l.value=!1,setTimeout(()=>{u()},3e3)}),(p,d)=>{const f=de;return I(),M("nav",{id:"nav-bar",class:Q(["navPadding",w(i)]),style:{height:"70px"}},[E("div",Ze,[k(J,{appear:"",name:"fadeIn"},{default:_(()=>[w(l)?q("",!0):(I(),F(f,{key:0,href:"/",class:"home-button","aria-label":"JY"},{default:_(()=>[et]),_:1}))]),_:1})]),w(l)?q("",!0):(I(),M("div",tt,[k(he,{appear:"",onBeforeEnter:v,onEnter:r},{default:_(()=>[(I(!0),M(Y,null,z(w(o),(s,c)=>(I(),F(f,{key:s.id,"data-index":c,href:s.href,class:"underAnimation"},{default:_(()=>[O(X(s.name),1)]),_:2},1032,["data-index","href"]))),128))]),_:1})])),E("div",nt,[E("div",at,[E("button",{type:"button","aria-label":"theme toggle",onClick:d[0]||(d[0]=s=>w(a)())},[w(n)?(I(),F(w(ke),{key:1,class:"w-5 h-5"},{default:_(()=>[O("Dark mode")]),_:1})):(I(),F(w(Me),{key:0,class:"w-5 h-5"}))])]),k(w(Je),{as:"div",class:"mobile-hamburger"},{default:_(()=>[E("div",rt,[k(w(Ye),{"aria-label":"Menu"},{default:_(()=>[k(w(Se))]),_:1})]),k(J,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:_(()=>[k(w(ze),{class:"menu-items"},{default:_(()=>[E("div",ot,[(I(!0),M(Y,null,z(w(o),s=>(I(),F(w(Xe),{key:s},{default:_(({active:c})=>[k(f,{href:s.href,class:Q([c?"bg-gray-500 text-white":"text-gray-900","group"])},{default:_(()=>[O(X(s.name),1)]),_:2},1032,["href","class"])]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1})])],2)}}},ft=pe(lt,[["__scopeId","data-v-dcd491ca"]]);export{ft as _};

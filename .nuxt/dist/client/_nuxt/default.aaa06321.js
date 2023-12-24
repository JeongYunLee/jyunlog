import{_ as g}from"./nuxt-link.dbc04f0b.js";import{h as N,C as v,M as y,v as f,s as j,o as u,c as w,q as i,a3 as e,ab as b,ac as k,a1 as $,a4 as M,a0 as l,a2 as x,V as _,S as A,u as d,r as H}from"./entry.6c2be2ae.js";import{_ as R}from"./SocialIcon.f54c0a2f.js";import{u as z}from"./config.d4eb953b.js";import{_ as D}from"./SectionContainer.f356f554.js";import{a as V,B as F}from"./components.8496b591.js";import"./Icon.423fc7eb.js";const E=N({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(r,{slots:t,attrs:n}){const s=v(!1);return y(()=>{s.value=!0}),o=>{var m;if(s.value)return(m=t.default)==null?void 0:m.call(t);const a=t.fallback||t.placeholder;if(a)return a();const h=o.fallback||o.placeholder||"",c=o.fallbackTag||o.placeholderTag||"span";return f(c,n,h)}}}),G={},O=e("button",{type:"button",class:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"},"(*.*)",-1),P={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"text-gray-900 dark:text-gray-100"},X={fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"},q={d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"};function I(r,t){const n=E;return u(),w(n,null,{fallback:i(()=>[O]),default:i(()=>[e("button",{"aria-label":"Toggle Dark Mode",type:"button",class:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:t[0]||(t[0]=s=>r.$colorMode.preference=r.$colorMode.value==="dark"?"light":"dark")},[(u(),f("svg",P,[b(e("path",X,null,512),[[k,r.$colorMode.value==="dark"]]),b(e("path",q,null,512),[[k,r.$colorMode.value==="light"]])]))])]),_:1})}const Y=j(G,[["render",I]]),J={class:"sm:hidden"},K=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"text-gray-900 dark:text-gray-100"},[e("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})],-1),Q=[K],U=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"text-gray-900 dark:text-gray-100"},[e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})],-1),W=[U],Z={class:"fixed mt-8 h-full"},ee={__name:"MobileNav",setup(r){const t=[{href:"/",title:"About"},{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/Latest",title:"Latest"}],n=v(!1);function s(){n?document.body.style.overflow="auto":document.body.style.overflow="hidden",n.value=!n.value}return(o,a)=>{const h=g;return u(),f("div",J,[e("button",{type:"button",class:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:s},Q),e("div",{class:A(["fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800",d(n)?"translate-x-0":"translate-x-full"])},[e("div",{class:"flex justify-end"},[e("button",{type:"button",class:"mr-5 mt-11 h-8 w-8 rounded","aria-label":"Toggle Menu",onClick:s},W)]),e("nav",Z,[(u(),f($,null,M(t,c=>e("div",{key:c.title,class:"px-12 py-4"},[l(h,{href:c.href,class:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:s},{default:i(()=>[x(_(c.title),1)]),_:2},1032,["href"])])),64))])],2)])}}},te={class:"mt-16 mb-16 flex flex-col items-center"},ae={class:"mb-3 flex space-x-4"},oe={class:"mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400"},le=e("div",null,_(" • "),-1),ne=e("div",null,_(" • "),-1),se={__name:"Footer",setup(r){const t=z().metadata;return(n,s)=>{const o=R,a=g;return u(),f("footer",null,[e("div",te,[e("div",ae,[l(o,{kind:"mail",href:`mailto:${d(t).email}`,size:6},null,8,["href"]),l(o,{kind:"github",href:d(t).github,size:6},null,8,["href"]),l(o,{kind:"linkedin",href:d(t).linkedin,size:6},null,8,["href"])]),e("div",oe,[e("div",null,_(d(t).author),1),le,e("div",null,_(`© ${new Date().getFullYear()}`),1),ne,l(a,{href:"/"},{default:i(()=>[x(_(d(t).title),1)]),_:1})])])])}}},re={class:"flex h-screen flex-col justify-between"},ce={class:"flex items-center justify-between py-10"},ie={class:"flex items-center text-base leading-5"},de={class:"hidden sm:block"},_e={class:"mb-auto"},ue="https://www.googletagmanager.com/gtag/js?id=G-91SBXSS665",be={__name:"default",setup(r){const t=[{href:"/",title:"About"},{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/Latest",title:"Latest"}],n=z().metadata,s=v([]),o=(...a)=>s.value.push(a);return y(()=>{{const a=document.createElement("script");a.async=!0,a.src=ue,document.head.appendChild(a),a.onload=()=>{o("js",new Date),o("config","G-91SBXSS665")}}}),(a,h)=>{const c=g,m=Y,S=ee,C=se,L=D,B=F,T=V;return u(),w(T,{lang:"en",class:"scroll-smooth"},{default:i(()=>[l(B,{class:"bg-white text-black antialiased dark:bg-gray-900 dark:text-white"},{default:i(()=>[l(L,null,{default:i(()=>[e("div",re,[e("header",ce,[e("div",null,[l(c,{href:"/","aria-label":d(n).headerTitle},null,8,["aria-label"])]),e("div",ie,[e("div",de,[(u(),f($,null,M(t,p=>l(c,{key:p.title,href:p.href,class:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"},{default:i(()=>[x(_(p.title),1)]),_:2},1032,["href"])),64))]),l(m),l(S)])]),e("main",_e,[H(a.$slots,"default")]),l(C)])]),_:3})]),_:3})]),_:3})}}};export{be as default};

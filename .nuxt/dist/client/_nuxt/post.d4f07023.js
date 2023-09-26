import{u as w}from"./config.c4ebe987.js";import{C as S,M as V,F as $,o as a,v as s,u as h,a5 as r,a3 as t,S as B,c as x,q as l,a0 as n,V as d,a2 as c,a4 as f,a1 as k}from"./entry.c2a4a61e.js";import{_ as L}from"./PageTitle.50206eca.js";import{_ as M}from"./nuxt-img.e53a3d9e.js";import{_ as N}from"./nuxt-link.85b28329.js";import z from"./ContentRenderer.e00242ed.js";import{_ as A}from"./Tag.c42a79bb.js";import{_ as D}from"./SectionContainer.81c6c6b5.js";import"./ContentRendererMarkdown.14377820.js";import"./index.a6ef77ff.js";import"./preview.6f853748.js";import"./kebabCase.4e53e42d.js";const R=t("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})],-1),E=[R],P=t("svg",{class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})],-1),j=[P],F={__name:"ScrollTopAndComment",setup(e){const i=S(!1),p=w().comment,u=()=>{window.scrollTo({top:0})},y=()=>{document.getElementById("comment").scrollIntoView()},_=()=>{window.scrollY>50?i.value=!0:i.value=!1};return V(()=>{window.addEventListener("scroll",_)}),$(()=>{window.removeEventListener("scroll",_)}),(v,g)=>(a(),s("div",{class:B(`fixed right-8 bottom-8 hidden flex-col gap-3 ${h(i)?"md:flex":"md:hidden"}`)},[h(p).provider?(a(),s("button",{key:0,"aria-label":"Scroll To Comment",type:"button",onClick:y,class:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"},E)):r("",!0),t("button",{"aria-label":"Scroll To Top",type:"button",onClick:u,class:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"},j)],2))}},H={class:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"},I={class:"pt-6 xl:pb-6"},q={class:"space-y-1 text-center"},U={class:"space-y-10"},W=t("dt",{class:"sr-only"},"Published on",-1),Y={class:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400"},G={dateTime:"{date}"},J={class:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",style:{gridTemplateRows:"auto 1fr"}},K={class:"pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"},O=t("dt",{class:"sr-only"},"Authors",-1),Q={class:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"},X={class:"whitespace-nowrap text-sm font-medium leading-5"},Z=t("dt",{class:"sr-only"},"Name",-1),tt={class:"text-gray-900 dark:text-gray-100"},et=t("dt",{class:"sr-only"},"Twitter",-1),at={class:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"},ot={class:"prose max-w-none pt-10 pb-8 dark:prose-dark"},st=t("div",{class:"pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300"},null,-1),rt={class:"divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"},lt={key:0,class:"py-4 xl:py-8"},nt=t("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"}," Tags ",-1),dt={class:"flex flex-wrap"},it={key:1,class:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"},ct={key:0},_t=t("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"}," Previous Article ",-1),mt={class:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"},xt={key:1},pt=t("h2",{class:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"}," Next Article ",-1),ht={class:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"},ut={class:"pt-4 xl:pt-8"},Bt={__name:"post",props:["post","authorDetails","next","prev"],setup(e){const i=w().metadata,p={weekday:"long",year:"numeric",month:"long",day:"numeric"};return(u,y)=>{const _=F,v=L,g=M,m=N,b=z,C=A,T=D;return a(),x(T,null,{default:l(()=>[n(_),t("article",null,[t("div",H,[t("header",I,[t("div",q,[t("dl",U,[t("div",null,[W,t("dd",Y,[t("time",G,d(new Date(e.post.date).toLocaleDateString(h(i).locale,p)),1)])])]),t("div",null,[n(v,null,{default:l(()=>[c(d(e.post.title),1)]),_:1})])])]),t("div",J,[t("dl",K,[O,t("dd",null,[t("ul",Q,[(a(!0),s(k,null,f(e.authorDetails,o=>(a(),s("li",{class:"flex items-center space-x-2",key:o.name},[o.avatar?(a(),x(g,{key:0,src:o.avatar,width:"38",height:"38",alt:"avatar",class:"h-10 w-10 rounded-full"},null,8,["src"])):r("",!0),t("dl",X,[Z,t("dd",tt,d(o.name),1),et,t("dd",null,[o.twitter?(a(),x(m,{key:0,href:o.twitter,class:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"},{default:l(()=>[c(d(o.twitter.replace("https://twitter.com/","@")),1)]),_:2},1032,["href"])):r("",!0)])])]))),128))])])]),t("div",at,[t("div",ot,[n(b,{value:e.post},null,8,["value"])]),st]),t("footer",null,[t("div",rt,[e.post.tags?(a(),s("div",lt,[nt,t("div",dt,[(a(!0),s(k,null,f(e.post.tags,o=>(a(),x(C,{key:o,text:o},null,8,["text"]))),128))])])):r("",!0),e.next||e.prev?(a(),s("div",it,[e.prev?(a(),s("div",ct,[_t,t("div",mt,[n(m,{href:e.prev._path},{default:l(()=>[c(d(e.prev.title),1)]),_:1},8,["href"])])])):r("",!0),e.next?(a(),s("div",xt,[pt,t("div",ht,[n(m,{href:e.next._path},{default:l(()=>[c(d(e.next.title),1)]),_:1},8,["href"])])])):r("",!0)])):r("",!0)]),t("div",ut,[n(m,{href:"/blog",class:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"},{default:l(()=>[c(" ← Back to the blog ")]),_:1})])])])])])]),_:1})}}};export{Bt as default};

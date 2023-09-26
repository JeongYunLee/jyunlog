var D=Object.defineProperty;var T=(a,r,e)=>r in a?D(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var f=(a,r,e)=>(T(a,typeof r!="symbol"?r+"":r,e),e);import{_ as B}from"./nuxt-link.85b28329.js";import{_ as V}from"./Tag.c42a79bb.js";import{l as g,C as q,v as u,a3 as t,V as m,ab as k,ad as E,u as i,ae as N,a1 as h,a2 as v,a4 as w,ac as j,a0 as P,o as d,q as I,c as M}from"./entry.c2a4a61e.js";import{_ as R}from"./formatDate.51234201.js";import"./kebabCase.4e53e42d.js";import"./config.c4ebe987.js";const $={__name:"Pagination",props:{currentPage:{required:!0},totalPages:{required:!0}},setup(a){const{currentPage:r,totalPages:e}=a;return g(()=>parseInt(r)-1>0),g(()=>parseInt(r)+1<=parseInt(e)),(S,C)=>null}};class b{}f(b,"POSTS_PER_PAGE",5);const A={class:"divide-y divide-gray-200 dark:divide-gray-700"},G={class:"space-y-2 pt-6 pb-8 md:space-y-5"},O={class:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},z={class:"relative max-w-lg"},F=t("svg",{class:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"{2}",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),U={class:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"},W=t("dt",{class:"sr-only"},"Published on",-1),H={class:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400"},J=["dateTime"],K={class:"space-y-3 xl:col-span-3"},Q={class:"text-2xl font-bold leading-8 tracking-tight"},X={class:"flex flex-wrap"},Y={class:"prose max-w-none text-gray-500 dark:text-gray-400"},ot={__name:"list",props:{title:{required:!0},posts:{required:!0},currentPage:{default:1},pagination:{default:!0}},setup(a){const{title:r,posts:e,currentPage:S,pagination:C}=a,c=q("");g(()=>{const o=c.value.toString();return o?e.filter(s=>(s.title+s.summary+s.tags.join(" ")).toLowerCase().includes(o.toLowerCase())):e});const p=g(()=>Math.ceil(e.length/b.POSTS_PER_PAGE)),x=g(()=>{const o=c.value.toString();let s=e;return o&&(s=e.filter(l=>(l.title+l.summary+l.tags.join(" ")).toLowerCase().includes(o.toLowerCase()))),s.sort((l,_)=>new Date(_.date)-new Date(l.date))});return(o,s)=>{const l=B,_=V,L=$;return d(),u(h,null,[t("div",A,[t("div",G,[t("h1",O,m(a.title),1),t("div",z,[k(t("input",{"aria-label":"Search articles",type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>N(c)?c.value=n:null),placeholder:"Search articles",class:"block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"},null,512),[[E,i(c)]]),F])]),t("ul",null,[i(x).length?(d(!0),u(h,{key:1},w(i(x),n=>(d(),u("li",{key:n._path,class:"py-4"},[t("article",U,[t("dl",null,[W,t("dd",H,[t("time",{dateTime:n.date},m(("formatDate"in o?o.formatDate:i(R))(n.date)),9,J)])]),t("div",K,[t("div",null,[t("h3",Q,[P(l,{href:`${n._path}`,class:"text-gray-900 dark:text-gray-100"},{default:I(()=>[v(m(n.title),1)]),_:2},1032,["href"])]),t("div",X,[(d(!0),u(h,null,w(n.tags,y=>(d(),M(_,{key:y,text:y},null,8,["text"]))),128))])]),t("div",Y,m(n.summary),1)])])]))),128)):(d(),u(h,{key:0},[v("No posts found.")],64))])]),k(P(L,{"current-page":a.currentPage,"total-pages":i(p)},null,8,["current-page","total-pages"]),[[j,i(p)>1&&!i(c)]])],64)}}};export{ot as default};

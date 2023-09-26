import{_ as y}from"./nuxt-img.e53a3d9e.js";import{_ as u}from"./nuxt-link.85b28329.js";import{o as t,v as o,a3 as a,a1 as h,c,q as d,a0 as b,a5 as f,a2 as m,V as g,S as k,R as _,a4 as v,u as p}from"./entry.c2a4a61e.js";import{q as S}from"./query.5ba961d3.js";import"./utils.6168ccf7.js";import"./preview.6f853748.js";const w={class:"md p-4 md:w-1/2",style:{"max-width":"'544px'"}},j={class:"p-6"},$={class:"mb-3 text-2xl font-bold leading-8 tracking-tight"},C={class:"prose mb-3 max-w-none text-gray-500 dark:text-gray-400"},L={__name:"Card",props:["title","description","imgSrc","href"],setup(e){return(r,l)=>{const s=y,n=u;return t(),o("div",w,[a("div",{class:k(`${e.imgSrc&&"h-full"}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`)},[e.imgSrc?(t(),o(h,{key:0},[e.href?(t(),c(n,{key:0,href:e.href,"aria-label":`Link to ${e.title}`},{default:d(()=>[b(s,{alt:e.title,src:e.imgSrc,class:"object-cover object-center md:h-36 lg:h-48",width:544,height:306},null,8,["alt","src"])]),_:1},8,["href","aria-label"])):(t(),c(s,{key:1,alt:e.title,src:e.imgSrc,class:"object-cover object-center md:h-36 lg:h-48",width:544,height:306},null,8,["alt","src"]))],64)):f("",!0),a("div",j,[a("h2",$,[e.href?(t(),c(n,{key:0,href:e.href,"aria-label":`Link to ${e.title}`},{default:d(()=>[m(g(e.title),1)]),_:1},8,["href","aria-label"])):(t(),o(h,{key:1},[m(" title ")],64))]),a("p",C,g(e.description),1),e.href?(t(),c(n,{key:0,href:e.href,class:"text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":`Link to ${e.title}`},{default:d(()=>[m(" Learn more → ")]),_:1},8,["href","aria-label"])):f("",!0)])],2)])}}},N={class:"divide-y divide-gray-200 dark:divide-gray-700"},V=a("div",{class:"space-y-2 pt-6 pb-8 md:space-y-5"},[a("h1",{class:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"}," Projects "),a("p",{class:"text-lg leading-7 text-gray-500 dark:text-gray-400"}," Some of the projects I've build or been a part of ")],-1),B={class:"container py-12"},q={class:"-m-4 flex flex-wrap"},P={__name:"projects",async setup(e){let r,l;const{body:s}=([r,l]=_(()=>S("projectsdata").findOne()),r=await r,l(),r);return(n,D)=>{const x=L;return t(),o("div",N,[V,a("div",B,[a("div",q,[(t(!0),o(h,null,v(p(s),i=>(t(),c(x,{key:i.title,title:i.title,description:i.description,imgSrc:i.imgSrc,href:i.href},null,8,["title","description","imgSrc","href"]))),128))])])])}}};export{P as default};

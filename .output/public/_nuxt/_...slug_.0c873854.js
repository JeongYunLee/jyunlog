import{a as m,R as n,c as f,u as o,a6 as d,o as x}from"./entry.c2a4a61e.js";import{u as y}from"./asyncData.4dcd3019.js";import{q as r}from"./query.5ba961d3.js";import"./utils.6168ccf7.js";import"./preview.6f853748.js";const w="post",k={__name:"[...slug]",async setup(D){let t,a;const{path:e}=m(),{data:s}=([t,a]=n(()=>y(`content-${e}`,()=>r().where({_path:e}).findOne())),t=await t,a(),t),c=(s.value.authors||["default"]).map(async u=>await r().where({_path:"/authors/"+u}).findOne()),p=([t,a]=n(()=>Promise.all(c)),t=await t,a(),t),[i,_]=([t,a]=n(()=>r("blog").only(["_path","title"]).sort({date:1}).findSurround(e)),t=await t,a(),t);return(u,l)=>{const h=d;return x(),f(h,{name:o(s).layout||w,post:o(s),authorDetails:o(p),next:o(_),prev:o(i)},null,8,["name","post","authorDetails","next","prev"])}}};export{k as default};
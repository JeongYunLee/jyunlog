import{u as f}from"./asyncData.17d98894.js";import{f as v,_ as g,h as l,t as d,l as h,m as _,i as y,k as r}from"./entry.6c2be2ae.js";import{q as w,h as m,e as C,j as P}from"./query.d7a6ec5f.js";import{_ as $}from"./nuxt-link.dbc04f0b.js";import{w as c,s as N,u as j}from"./utils.a19fc629.js";import{u as T}from"./preview.8087ba34.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${m(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${m(a)}.${t.integrity}.json`);if(N())return(await g(()=>import("./client-db.b4ce8c3f.js"),["./client-db.b4ce8c3f.js","./entry.6c2be2ae.js","./entry.2d6a5e6f.css","./query.d7a6ec5f.js","./utils.a19fc629.js","./preview.8087ba34.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:P(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},R=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await f(`content-navigation-${m(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}});export{R as default};

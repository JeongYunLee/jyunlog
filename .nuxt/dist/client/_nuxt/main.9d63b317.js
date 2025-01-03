import{_ as r}from"./NavBar.fec74f30.js";import{c as n,b as s,M as c,N as i,o as p}from"./entry.128413f0.js";import{u as m}from"./vue.f36acd1f.f6b7f8da.js";import"./nuxt-link.6fdb87f8.js";import"./useTransitionTracking.fca2e196.js";import"./const.be8bc19c.js";import"./env.c66b33fd.js";const N={__name:"main",setup(u){const t=i(),a=`
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "${t.public.NUXT_GTM_ID}");
`;return m({script:[{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${t.public.NUXT_GTM_ID}`},{type:"text/javascript",innerHTML:a},{type:"text/javascript",src:"js/useCopy.js"}]}),(e,g)=>{const o=r;return p(),n("div",null,[s(o),c(e.$slots,"default")])}}};export{N as default};

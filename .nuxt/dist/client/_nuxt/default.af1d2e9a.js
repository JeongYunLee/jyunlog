import{_ as p}from"./NavBar.fec74f30.js";import{_ as m,a as u,b as d}from"./GithubIcon.81a6273d.js";import{o as _,c as i,a as t,b as o,t as g,u as f,M as h,N as b}from"./entry.128413f0.js";import{u as w}from"./vue.f36acd1f.f6b7f8da.js";import"./nuxt-link.6fdb87f8.js";import"./useTransitionTracking.fca2e196.js";import"./const.be8bc19c.js";import"./env.c66b33fd.js";const y={class:"footer-section"},I={class:"social-icons-and-navigation"},v={href:"mailto:your-email@example.com","aria-label":"Email",class:"footerIcon"},x={href:"https://www.linkedin.com/in/yzpo/","aria-label":"Linkden",target:"_blank",class:"footerIcon"},k={href:"https://github.com/eazypau","aria-label":"Github",target:"_blank",class:"footerIcon"},L={class:"copyright"},N={__name:"Footer",setup(l){const e=new Date().getFullYear();return(s,c)=>{const r=m,n=u,a=d;return _(),i("div",y,[t("footer",null,[t("div",I,[t("div",null,[t("a",v,[o(r)]),t("a",x,[o(n)]),t("a",k,[o(a)])])]),t("div",L," © "+g(f(e))+" - Present JeongYun Lee. All rights reserved. ",1)])])}}},j=N,R={__name:"default",setup(l){const e=b(),s=`
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "${e.public.NUXT_GTM_ID}");
`;return w({script:[{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${e.public.NUXT_GTM_ID}`},{type:"text/javascript",innerHTML:s},{type:"text/javascript",src:"js/useCopy.js"}]}),(c,r)=>{const n=p,a=j;return _(),i("div",null,[o(n),h(c.$slots,"default"),o(a)])}}};export{R as default};

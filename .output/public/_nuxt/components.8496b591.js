import{h as o,e as p}from"./entry.6c2be2ae.js";const d=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),s=(e,t)=>(n,r)=>(p(()=>e({...d(n),...r.attrs},r)),()=>{var i,a;return t?(a=(i=r.slots).default)==null?void 0:a.call(i):null}),l={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},u=o({name:"Title",inheritAttrs:!1,setup:s((e,{slots:t})=>{var r,i,a;return{title:((a=(i=(r=t.default)==null?void 0:r.call(t))==null?void 0:i[0])==null?void 0:a.children)||null}})}),S=o({name:"Meta",inheritAttrs:!1,props:{...l,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),m=o({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var n,r;return(r=(n=t.slots).default)==null?void 0:r.call(n)}}),c=o({name:"Html",inheritAttrs:!1,props:{...l,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:s(e=>({htmlAttrs:e}),!0)}),f=o({name:"Body",inheritAttrs:!1,props:{...l,renderPriority:[String,Number]},setup:s(e=>({bodyAttrs:e}),!0)});export{f as B,m as H,S as M,u as T,c as a};

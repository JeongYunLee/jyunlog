(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{295:function(t,e,l){"use strict";l.r(e);l(20),l(49);var o={props:["title","description","date","slug","tags"],data:function(){return{postTitle:this.title,postDescription:this.description,postSlug:this.slug,postDate:this.date,postTag:this.tags}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){console.log("postTag:",this.postTag)}},n=l(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("article",{staticClass:"relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"},[l("h3",{staticClass:"mb-2 text-2xl text-slate-700 tracking-tight font-bold dark:text-slate-200"},[l("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.postSlug}}}},[t._v("\n        "+t._s(t.postTitle))])],1),t._v(" "),l("div",{staticClass:"mb-6 prose prose-slate dark:prose-dark"},[l("p",[t._v("\n        "+t._s(t.postDescription)+"\n      ")])]),t._v(" "),l("div",{staticClass:"mt-auto flex flex-row-reverse items-center justify-end"},[l("dl",[l("dt",{staticClass:"sr-only"},[t._v("Date")]),t._v(" "),l("dd",{staticClass:"text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold"},[l("time",{staticClass:"bg-green-500 text-white py-1 px-2 rounded-md",attrs:{datetime:"2022-02-24T12:00:00.000Z"}},[t._v(t._s(t.formatDate(t.postDate)))])])])]),t._v(" "),l("br")])])}),[],!1,null,null,null);e.default=component.exports}}]);
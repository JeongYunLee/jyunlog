import { i as useServerSeoMeta, h as __nuxt_component_0 } from "../server.mjs";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import { u as useAppConfig } from "./config-acf75f8a.js";
import "vue-router";
import { q as queryContent } from "./query-6b46fb82.js";
import { ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ufo";
import "klona";
import "defu";
import "ohash";
import "./utils-4d957cff.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const siteMetadata = useAppConfig().metadata;
    useServerSeoMeta({
      title: `Blog - ${siteMetadata.author}`,
      description: siteMetadata.description
    });
    const posts = ([__temp, __restore] = withAsyncContext(() => queryContent("blog").find()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({
        name: "list",
        title: "All Posts",
        posts: unref(posts),
        "current-page": 1
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-8f05066a.js.map

import { u as useRoute, h as __nuxt_component_0 } from "../server.mjs";
import { q as queryContent } from "./query-6b46fb82.js";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "ohash";
import "./utils-4d957cff.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
const _sfc_main = {
  __name: "[page]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const posts = ([__temp, __restore] = withAsyncContext(() => queryContent("blog").find()), __temp = await __temp, __restore(), __temp);
    const { params: { page } } = useRoute();
    console.log("page", page);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({
        name: "list",
        title: "All Posts",
        posts: unref(posts),
        "current-page": unref(page)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/page/[page].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_page_-319b137e.js.map

import { u as useRoute, h as __nuxt_component_0 } from "../server.mjs";
import { q as queryContent } from "./query-6b46fb82.js";
import { withAsyncContext, computed, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { _ as __unimport_kebabCase } from "./kebabCase-69c98d7b.js";
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
import "github-slugger";
const _sfc_main = {
  __name: "[tag]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const allPosts = ([__temp, __restore] = withAsyncContext(() => queryContent("blog").find()), __temp = await __temp, __restore(), __temp);
    const { params: { tag } } = useRoute();
    const filteredPosts = computed(() => allPosts.filter(
      (post) => post.draft !== true && post.tags.map((t) => __unimport_kebabCase(t)).includes(tag)
    ));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({
        name: "list",
        title: unref(tag),
        posts: unref(filteredPosts),
        pagination: false
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/[tag].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_tag_-12bea2f9.js.map

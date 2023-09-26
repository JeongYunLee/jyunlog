import { u as useRoute, h as __nuxt_component_0 } from "../server.mjs";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { u as useAsyncData } from "./asyncData-795de5cc.js";
import "destr";
import "devalue";
import "klona";
import { q as queryContent } from "./query-6b46fb82.js";
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
const DEFAULT_LAYOUT = "post";
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${path}`, () => {
      return queryContent().where({ _path: path }).findOne();
    })), __temp = await __temp, __restore(), __temp);
    const authorList = post.value.authors || ["default"];
    const authorPromise = authorList.map(async (author) => {
      const authorResults = await queryContent().where({ _path: "/authors/" + author }).findOne();
      return authorResults;
    });
    const authorDetails = ([__temp, __restore] = withAsyncContext(() => Promise.all(authorPromise)), __temp = await __temp, __restore(), __temp);
    const [prev, next] = ([__temp, __restore] = withAsyncContext(() => queryContent("blog").only(["_path", "title"]).sort({ date: 1 }).findSurround(path)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({
        name: unref(post).layout || DEFAULT_LAYOUT,
        post: unref(post),
        authorDetails: unref(authorDetails),
        next: unref(next),
        prev: unref(prev)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-8164fe28.js.map

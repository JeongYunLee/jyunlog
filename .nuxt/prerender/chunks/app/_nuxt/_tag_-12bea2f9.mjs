import { u as useRoute, h as __nuxt_component_0 } from '../server.mjs';
import { q as queryContent } from './query-6b46fb82.mjs';
import { withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/vue/index.mjs';
import { _ as __unimport_kebabCase } from './kebabCase-69c98d7b.mjs';
import { ssrRenderComponent } from 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/h3/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/destr/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/scule/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/klona/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/radix3/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/pathe/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unified/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/micromark-util-character/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/remark-emoji/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/rehype-slug/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/rehype-external-links/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/remark-gfm/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/rehype-raw/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/remark-parse/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/remark-rehype/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/detab/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unist-builder/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/mdurl/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/slugify/slugify.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unist-util-position/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unist-util-visit/index.js';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/unenv/runtime/npm/consola.mjs';
import 'node:url';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/ipx/dist/index.mjs';
import './utils-4d957cff.mjs';
import './ssr-b54361f8.mjs';
import './preview-b7a8fe22.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/github-slugger/index.js';

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

export { _sfc_main as default };
//# sourceMappingURL=_tag_-12bea2f9.mjs.map
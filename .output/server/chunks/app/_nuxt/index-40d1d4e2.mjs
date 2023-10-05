import { _ as __nuxt_component_6 } from './Tag-ec745377.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-5d0b373b.mjs';
import { q as queryContent } from './query-6b46fb82.mjs';
import { _ as __unimport_kebabCase } from './kebabCase-69c98d7b.mjs';
import { withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'ipx';
import './utils-4d957cff.mjs';
import './ssr-b54361f8.mjs';
import './preview-b7a8fe22.mjs';
import 'cookie-es';
import 'github-slugger';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const posts = ([__temp, __restore] = withAsyncContext(() => queryContent("blog").only("tags").find()), __temp = await __temp, __restore(), __temp);
    const tags = {};
    posts.forEach((post) => {
      if (post.tags && post.draft !== true) {
        post.tags.forEach((tag) => {
          const formattedTag = __unimport_kebabCase(tag);
          if (formattedTag in tags) {
            tags[formattedTag] += 1;
          } else {
            tags[formattedTag] = 1;
          }
        });
      }
    });
    const sortedTags = computed(() => Object.keys(tags).sort((a, b) => tags[b] - tags[a]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tag = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0" }, _attrs))}><div class="space-x-2 pt-6 pb-8 md:space-y-5"><h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14"> Tags </h1></div><div class="flex max-w-lg flex-wrap">`);
      if (Object.keys(tags).length === 0) {
        _push(`<!--[-->No tags found.<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(sortedTags), (tag) => {
          _push(`<div class="mt-2 mb-2 mr-5">`);
          _push(ssrRenderComponent(_component_Tag, { text: tag }, null, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: `/tags/${("kebabCase" in _ctx ? _ctx.kebabCase : unref(__unimport_kebabCase))(tag)}`,
            class: "-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(` (${tags[tag]})`)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(` (${tags[tag]})`), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-40d1d4e2.mjs.map

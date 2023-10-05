import { _ as __nuxt_component_0$1 } from './nuxt-link-5d0b373b.mjs';
import { _ as __nuxt_component_3 } from './nuxt-img-26dc8bff.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { q as queryContent } from './query-6b46fb82.mjs';
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

const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: ["title", "description", "imgSrc", "href"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_nuxt_img = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "md p-4 md:w-1/2",
        style: { "max-width": "'544px'" }
      }, _attrs))}><div class="${ssrRenderClass(`${__props.imgSrc && "h-full"}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`)}">`);
      if (__props.imgSrc) {
        _push(`<!--[-->`);
        if (__props.href) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: __props.href,
            "aria-label": `Link to ${__props.title}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_nuxt_img, {
                  alt: __props.title,
                  src: __props.imgSrc,
                  class: "object-cover object-center md:h-36 lg:h-48",
                  width: 544,
                  height: 306
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_nuxt_img, {
                    alt: __props.title,
                    src: __props.imgSrc,
                    class: "object-cover object-center md:h-36 lg:h-48",
                    width: 544,
                    height: 306
                  }, null, 8, ["alt", "src"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_nuxt_img, {
            alt: __props.title,
            src: __props.imgSrc,
            class: "object-cover object-center md:h-36 lg:h-48",
            width: 544,
            height: 306
          }, null, _parent));
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-6"><h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">`);
      if (__props.href) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: __props.href,
          "aria-label": `Link to ${__props.title}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[--> title <!--]-->`);
      }
      _push(`</h2><p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">${ssrInterpolate(__props.description)}</p>`);
      if (__props.href) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: __props.href,
          class: "text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
          "aria-label": `Link to ${__props.title}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Learn more \u2192 `);
            } else {
              return [
                createTextVNode(" Learn more \u2192 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { body: projectsData } = ([__temp, __restore] = withAsyncContext(() => queryContent("projectsdata").findOne()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-y divide-gray-200 dark:divide-gray-700" }, _attrs))}><div class="space-y-2 pt-6 pb-8 md:space-y-5"><h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"> Projects </h1><p class="text-lg leading-7 text-gray-500 dark:text-gray-400"> Some of the projects I&#39;ve build or been a part of </p></div><div class="container py-12"><div class="-m-4 flex flex-wrap"><!--[-->`);
      ssrRenderList(unref(projectsData), (d) => {
        _push(ssrRenderComponent(_component_Card, {
          key: d.title,
          title: d.title,
          description: d.description,
          imgSrc: d.imgSrc,
          href: d.href
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-44cbab77.mjs.map

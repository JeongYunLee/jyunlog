import { a as Html, B as Body } from './components-6ce1bb61.mjs';
import { _ as __nuxt_component_0$1 } from './SectionContainer-a4c68ffb.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-5d0b373b.mjs';
import { mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext, ref, defineComponent, createElementBlock } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$3 } from './SocialIcon-2c1e5172.mjs';
import { u as useAppConfig } from './config-acf75f8a.mjs';
import 'ufo';
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
import './Icon-d628ef7c.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = __nuxt_component_0;
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
    fallback: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button type="button" class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"${_scopeId}>(*.*)</button>`);
      } else {
        return [
          createVNode("button", {
            type: "button",
            class: "ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
          }, "(*.*)")
        ];
      }
    })
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeSwitch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "MobileNav",
  __ssrInlineRender: true,
  setup(__props) {
    const headerNavLinks = [
      { href: "/", title: "About" },
      { href: "/blog", title: "Blog" },
      { href: "/tags", title: "Tags" },
      { href: "/projects", title: "Projects" },
      { href: "/Latest", title: "Latest" }
    ];
    const navShow = ref(false);
    function onToggleNav() {
      if (navShow) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      navShow.value = !navShow.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:hidden" }, _attrs))}><button type="button" class="ml-1 mr-1 h-8 w-8 rounded py-1" aria-label="Toggle Menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button><div class="${ssrRenderClass([unref(navShow) ? "translate-x-0" : "translate-x-full", "fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800"])}"><div class="flex justify-end"><button type="button" class="mr-5 mt-11 h-8 w-8 rounded" aria-label="Toggle Menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div><nav class="fixed mt-8 h-full"><!--[-->`);
      ssrRenderList(headerNavLinks, (link) => {
        _push(`<div class="px-12 py-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: link.href,
          class: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
          onClick: onToggleNav
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></nav></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const siteMetadata = useAppConfig().metadata;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SocialIcon = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="mt-16 mb-16 flex flex-col items-center"><div class="mb-3 flex space-x-4">`);
      _push(ssrRenderComponent(_component_SocialIcon, {
        kind: "mail",
        href: `mailto:${unref(siteMetadata).email}`,
        size: 6
      }, null, _parent));
      _push(ssrRenderComponent(_component_SocialIcon, {
        kind: "github",
        href: unref(siteMetadata).github,
        size: 6
      }, null, _parent));
      _push(ssrRenderComponent(_component_SocialIcon, {
        kind: "linkedin",
        href: unref(siteMetadata).linkedin,
        size: 6
      }, null, _parent));
      _push(`</div><div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400"><div>${ssrInterpolate(unref(siteMetadata).author)}</div><div>${ssrInterpolate(` \u2022 `)}</div><div>${ssrInterpolate(`\xA9 ${( new Date()).getFullYear()}`)}</div><div>${ssrInterpolate(` \u2022 `)}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(siteMetadata).title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(siteMetadata).title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const headerNavLinks = [
      { href: "/", title: "About" },
      { href: "/blog", title: "Blog" },
      { href: "/tags", title: "Tags" },
      { href: "/projects", title: "Projects" },
      { href: "/Latest", title: "Latest" }
    ];
    const siteMetadata = useAppConfig().metadata;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Html = Html;
      const _component_Body = Body;
      const _component_SectionContainer = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_ThemeSwitch = __nuxt_component_4;
      const _component_MobileNav = __nuxt_component_5;
      const _component_Footer = __nuxt_component_6;
      _push(ssrRenderComponent(_component_Html, mergeProps({
        lang: "en",
        class: "scroll-smooth"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Body, { class: "bg-white text-black antialiased dark:bg-gray-900 dark:text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex h-screen flex-col justify-between"${_scopeId3}><header class="flex items-center justify-between py-10"${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          href: "/",
                          "aria-label": unref(siteMetadata).headerTitle
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center text-base leading-5"${_scopeId3}><div class="hidden sm:block"${_scopeId3}><!--[-->`);
                        ssrRenderList(headerNavLinks, (link) => {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            key: link.title,
                            href: link.href,
                            class: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(link.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(link.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                        _push4(ssrRenderComponent(_component_ThemeSwitch, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_MobileNav, null, null, _parent4, _scopeId3));
                        _push4(`</div></header><main class="mb-auto"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`</main>`);
                        _push4(ssrRenderComponent(_component_Footer, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex h-screen flex-col justify-between" }, [
                            createVNode("header", { class: "flex items-center justify-between py-10" }, [
                              createVNode("div", null, [
                                createVNode(_component_NuxtLink, {
                                  href: "/",
                                  "aria-label": unref(siteMetadata).headerTitle
                                }, null, 8, ["aria-label"])
                              ]),
                              createVNode("div", { class: "flex items-center text-base leading-5" }, [
                                createVNode("div", { class: "hidden sm:block" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(headerNavLinks, (link) => {
                                    return createVNode(_component_NuxtLink, {
                                      key: link.title,
                                      href: link.href,
                                      class: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]);
                                  }), 64))
                                ]),
                                createVNode(_component_ThemeSwitch),
                                createVNode(_component_MobileNav)
                              ])
                            ]),
                            createVNode("main", { class: "mb-auto" }, [
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            createVNode(_component_Footer)
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionContainer, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex h-screen flex-col justify-between" }, [
                          createVNode("header", { class: "flex items-center justify-between py-10" }, [
                            createVNode("div", null, [
                              createVNode(_component_NuxtLink, {
                                href: "/",
                                "aria-label": unref(siteMetadata).headerTitle
                              }, null, 8, ["aria-label"])
                            ]),
                            createVNode("div", { class: "flex items-center text-base leading-5" }, [
                              createVNode("div", { class: "hidden sm:block" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(headerNavLinks, (link) => {
                                  return createVNode(_component_NuxtLink, {
                                    key: link.title,
                                    href: link.href,
                                    class: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 64))
                              ]),
                              createVNode(_component_ThemeSwitch),
                              createVNode(_component_MobileNav)
                            ])
                          ]),
                          createVNode("main", { class: "mb-auto" }, [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          createVNode(_component_Footer)
                        ])
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Body, { class: "bg-white text-black antialiased dark:bg-gray-900 dark:text-white" }, {
                default: withCtx(() => [
                  createVNode(_component_SectionContainer, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex h-screen flex-col justify-between" }, [
                        createVNode("header", { class: "flex items-center justify-between py-10" }, [
                          createVNode("div", null, [
                            createVNode(_component_NuxtLink, {
                              href: "/",
                              "aria-label": unref(siteMetadata).headerTitle
                            }, null, 8, ["aria-label"])
                          ]),
                          createVNode("div", { class: "flex items-center text-base leading-5" }, [
                            createVNode("div", { class: "hidden sm:block" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(headerNavLinks, (link) => {
                                return createVNode(_component_NuxtLink, {
                                  key: link.title,
                                  href: link.href,
                                  class: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(link.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]);
                              }), 64))
                            ]),
                            createVNode(_component_ThemeSwitch),
                            createVNode(_component_MobileNav)
                          ])
                        ]),
                        createVNode("main", { class: "mb-auto" }, [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        createVNode(_component_Footer)
                      ])
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-566a7aa9.mjs.map

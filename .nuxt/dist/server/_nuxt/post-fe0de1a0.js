import { _ as __nuxt_component_0 } from "./SectionContainer-a4c68ffb.js";
import { ref, onUnmounted, mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import "hookable";
import "destr";
import "devalue";
import { u as useAppConfig } from "./config-acf75f8a.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as __nuxt_component_1$1 } from "./PageTitle-1a47bcf4.js";
import { _ as __nuxt_component_3 } from "./nuxt-img-26dc8bff.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-5d0b373b.js";
import _sfc_main$2 from "./ContentRenderer-0d69b4aa.js";
import { _ as __nuxt_component_6 } from "./Tag-ec745377.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "klona";
import "defu";
import "./ssr-b54361f8.js";
import "./ContentRendererMarkdown-81c14c00.js";
import "scule";
import "property-information";
import "./preview-b7a8fe22.js";
import "cookie-es";
import "ohash";
import "./kebabCase-69c98d7b.js";
import "github-slugger";
const _sfc_main$1 = {
  __name: "ScrollTopAndComment",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const comment = useAppConfig().comment;
    const handleWindowScroll = () => {
      if (window.scrollY > 50)
        show.value = true;
      else
        show.value = false;
    };
    onUnmounted(() => {
      window.removeEventListener("scroll", handleWindowScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `fixed right-8 bottom-8 hidden flex-col gap-3 ${unref(show) ? "md:flex" : "md:hidden"}`
      }, _attrs))}>`);
      if (unref(comment).provider) {
        _push(`<button aria-label="Scroll To Comment" type="button" class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button aria-label="Scroll To Top" type="button" class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollTopAndComment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "post",
  __ssrInlineRender: true,
  props: [
    "post",
    "authorDetails",
    "next",
    "prev"
  ],
  setup(__props) {
    const siteMetadata = useAppConfig().metadata;
    const postDateTemplate = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionContainer = __nuxt_component_0;
      const _component_ScrollTopAndComment = __nuxt_component_1;
      const _component_PageTitle = __nuxt_component_1$1;
      const _component_nuxt_img = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ContentRenderer = _sfc_main$2;
      const _component_Tag = __nuxt_component_6;
      _push(ssrRenderComponent(_component_SectionContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ScrollTopAndComment, null, null, _parent2, _scopeId));
            _push2(`<article${_scopeId}><div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"${_scopeId}><header class="pt-6 xl:pb-6"${_scopeId}><div class="space-y-1 text-center"${_scopeId}><dl class="space-y-10"${_scopeId}><div${_scopeId}><dt class="sr-only"${_scopeId}>Published on</dt><dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"${_scopeId}><time dateTime="{date}"${_scopeId}>${ssrInterpolate(new Date(__props.post.date).toLocaleDateString(unref(siteMetadata).locale, postDateTemplate))}</time></dd></div></dl><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.post.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.post.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></header><div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0" style="${ssrRenderStyle({ gridTemplateRows: "auto 1fr" })}"${_scopeId}><dl class="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"${_scopeId}><dt class="sr-only"${_scopeId}>Authors</dt><dd${_scopeId}><ul class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"${_scopeId}><!--[-->`);
            ssrRenderList(__props.authorDetails, (author) => {
              _push2(`<li class="flex items-center space-x-2"${_scopeId}>`);
              if (author.avatar) {
                _push2(ssrRenderComponent(_component_nuxt_img, {
                  src: author.avatar,
                  width: "38",
                  height: "38",
                  alt: "avatar",
                  class: "h-10 w-10 rounded-full"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<dl class="whitespace-nowrap text-sm font-medium leading-5"${_scopeId}><dt class="sr-only"${_scopeId}>Name</dt><dd class="text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(author.name)}</dd><dt class="sr-only"${_scopeId}>Twitter</dt><dd${_scopeId}>`);
              if (author.twitter) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  href: author.twitter,
                  class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(author.twitter.replace("https://twitter.com/", "@"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(author.twitter.replace("https://twitter.com/", "@")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</dd></dl></li>`);
            });
            _push2(`<!--]--></ul></dd></dl><div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"${_scopeId}><div class="prose max-w-none pt-10 pb-8 dark:prose-dark"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContentRenderer, { value: __props.post }, null, _parent2, _scopeId));
            _push2(`</div><div class="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300"${_scopeId}></div></div><footer${_scopeId}><div class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"${_scopeId}>`);
            if (__props.post.tags) {
              _push2(`<div class="py-4 xl:py-8"${_scopeId}><h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"${_scopeId}> Tags </h2><div class="flex flex-wrap"${_scopeId}><!--[-->`);
              ssrRenderList(__props.post.tags, (tag) => {
                _push2(ssrRenderComponent(_component_Tag, {
                  key: tag,
                  text: tag
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.next || __props.prev) {
              _push2(`<div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"${_scopeId}>`);
              if (__props.prev) {
                _push2(`<div${_scopeId}><h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"${_scopeId}> Previous Article </h2><div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  href: __props.prev._path
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(__props.prev.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(__props.prev.title), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.next) {
                _push2(`<div${_scopeId}><h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"${_scopeId}> Next Article </h2><div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  href: __props.next._path
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(__props.next.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(__props.next.title), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="pt-4 xl:pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              href: "/blog",
              class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ← Back to the blog `);
                } else {
                  return [
                    createTextVNode(" ← Back to the blog ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></footer></div></div></article>`);
          } else {
            return [
              createVNode(_component_ScrollTopAndComment),
              createVNode("article", null, [
                createVNode("div", { class: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700" }, [
                  createVNode("header", { class: "pt-6 xl:pb-6" }, [
                    createVNode("div", { class: "space-y-1 text-center" }, [
                      createVNode("dl", { class: "space-y-10" }, [
                        createVNode("div", null, [
                          createVNode("dt", { class: "sr-only" }, "Published on"),
                          createVNode("dd", { class: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400" }, [
                            createVNode("time", { dateTime: "{date}" }, toDisplayString(new Date(__props.post.date).toLocaleDateString(unref(siteMetadata).locale, postDateTemplate)), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_PageTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.post.title), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", {
                    class: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",
                    style: { gridTemplateRows: "auto 1fr" }
                  }, [
                    createVNode("dl", { class: "pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700" }, [
                      createVNode("dt", { class: "sr-only" }, "Authors"),
                      createVNode("dd", null, [
                        createVNode("ul", { class: "flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.authorDetails, (author) => {
                            return openBlock(), createBlock("li", {
                              class: "flex items-center space-x-2",
                              key: author.name
                            }, [
                              author.avatar ? (openBlock(), createBlock(_component_nuxt_img, {
                                key: 0,
                                src: author.avatar,
                                width: "38",
                                height: "38",
                                alt: "avatar",
                                class: "h-10 w-10 rounded-full"
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode("dl", { class: "whitespace-nowrap text-sm font-medium leading-5" }, [
                                createVNode("dt", { class: "sr-only" }, "Name"),
                                createVNode("dd", { class: "text-gray-900 dark:text-gray-100" }, toDisplayString(author.name), 1),
                                createVNode("dt", { class: "sr-only" }, "Twitter"),
                                createVNode("dd", null, [
                                  author.twitter ? (openBlock(), createBlock(_component_NuxtLink, {
                                    key: 0,
                                    href: author.twitter,
                                    class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(author.twitter.replace("https://twitter.com/", "@")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])) : createCommentVNode("", true)
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0" }, [
                      createVNode("div", { class: "prose max-w-none pt-10 pb-8 dark:prose-dark" }, [
                        createVNode(_component_ContentRenderer, { value: __props.post }, null, 8, ["value"])
                      ]),
                      createVNode("div", { class: "pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300" })
                    ]),
                    createVNode("footer", null, [
                      createVNode("div", { class: "divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y" }, [
                        __props.post.tags ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "py-4 xl:py-8"
                        }, [
                          createVNode("h2", { class: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400" }, " Tags "),
                          createVNode("div", { class: "flex flex-wrap" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.post.tags, (tag) => {
                              return openBlock(), createBlock(_component_Tag, {
                                key: tag,
                                text: tag
                              }, null, 8, ["text"]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        __props.next || __props.prev ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"
                        }, [
                          __props.prev ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("h2", { class: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400" }, " Previous Article "),
                            createVNode("div", { class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" }, [
                              createVNode(_component_NuxtLink, {
                                href: __props.prev._path
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.prev.title), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])) : createCommentVNode("", true),
                          __props.next ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("h2", { class: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400" }, " Next Article "),
                            createVNode("div", { class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" }, [
                              createVNode(_component_NuxtLink, {
                                href: __props.next._path
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.next.title), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "pt-4 xl:pt-8" }, [
                        createVNode(_component_NuxtLink, {
                          href: "/blog",
                          class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" ← Back to the blog ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=post-fe0de1a0.js.map

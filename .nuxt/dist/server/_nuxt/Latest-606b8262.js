import { H as Head, T as Title, M as Meta } from "./components-6ce1bb61.js";
import _sfc_main$1 from "./ContentList-676c5b65.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-5d0b373b.js";
import { _ as __nuxt_component_6 } from "./Tag-ec745377.js";
import { withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import { u as useAppConfig } from "./config-acf75f8a.js";
import { _ as __unimport_formatDate } from "./formatDate-30905004.js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
import "./ContentQuery-29ca4e9c.js";
import "./asyncData-795de5cc.js";
import "ohash";
import "./query-6b46fb82.js";
import "./utils-4d957cff.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
import "./kebabCase-69c98d7b.js";
import "github-slugger";
const MAX_DISPLAY = 5;
const _sfc_main = {
  __name: "Latest",
  __ssrInlineRender: true,
  setup(__props) {
    const siteMetadata = useAppConfig().metadata;
    useAppConfig().newsletter;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_ContentList = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Tag = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(siteMetadata).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(siteMetadata).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: unref(siteMetadata).description
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(siteMetadata).title), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: unref(siteMetadata).description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ContentList, {
        path: "blog",
        query: { sort: [{ date: -1 }] }
      }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><div class="space-y-2 pt-6 pb-8 md:space-y-5"${_scopeId}><h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"${_scopeId}> Latest </h1><p class="text-lg leading-7 text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(siteMetadata).description)}</p></div><ul class="divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><!--[-->`);
            ssrRenderList(list.slice(0, MAX_DISPLAY), (post) => {
              _push2(`<li class="py-12"${_scopeId}><article${_scopeId}><div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"${_scopeId}><dl${_scopeId}><dt class="sr-only"${_scopeId}>Published on</dt><dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"${_scopeId}><time${ssrRenderAttr("dateTime", post.date)}${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(__unimport_formatDate))(post.date))}</time></dd></dl><div class="space-y-5 xl:col-span-3"${_scopeId}><div class="space-y-6"${_scopeId}><div${_scopeId}><h2 class="text-2xl font-bold leading-8 tracking-tight"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, { class: "text-gray-900 dark:text-gray-100" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h2><div class="flex flex-wrap"${_scopeId}><!--[-->`);
              ssrRenderList(post.tags, (tag) => {
                _push2(ssrRenderComponent(_component_Tag, {
                  key: tag,
                  text: tag
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div><div class="prose max-w-none text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(post.summary)}</div></div><div class="text-base font-medium leading-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                href: `${post._path}`,
                "aria-label": `Read '${post.title}'`
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Read more → `);
                  } else {
                    return [
                      createTextVNode(" Read more → ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></article></li>`);
            });
            _push2(`<!--]--></ul></div>`);
            if (list.length > MAX_DISPLAY) {
              _push2(`<div class="flex justify-end text-base font-medium leading-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                href: "/blog",
                class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                "aria-label": "all posts"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` All Posts → `);
                  } else {
                    return [
                      createTextVNode(" All Posts → ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "divide-y divide-gray-200 dark:divide-gray-700" }, [
                createVNode("div", { class: "space-y-2 pt-6 pb-8 md:space-y-5" }, [
                  createVNode("h1", { class: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14" }, " Latest "),
                  createVNode("p", { class: "text-lg leading-7 text-gray-500 dark:text-gray-400" }, toDisplayString(unref(siteMetadata).description), 1)
                ]),
                createVNode("ul", { class: "divide-y divide-gray-200 dark:divide-gray-700" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(list.slice(0, MAX_DISPLAY), (post) => {
                    return openBlock(), createBlock("li", {
                      key: post._path,
                      class: "py-12"
                    }, [
                      createVNode("article", null, [
                        createVNode("div", { class: "space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0" }, [
                          createVNode("dl", null, [
                            createVNode("dt", { class: "sr-only" }, "Published on"),
                            createVNode("dd", { class: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400" }, [
                              createVNode("time", {
                                dateTime: post.date
                              }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(__unimport_formatDate))(post.date)), 9, ["dateTime"])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-5 xl:col-span-3" }, [
                            createVNode("div", { class: "space-y-6" }, [
                              createVNode("div", null, [
                                createVNode("h2", { class: "text-2xl font-bold leading-8 tracking-tight" }, [
                                  createVNode(_component_NuxtLink, { class: "text-gray-900 dark:text-gray-100" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(post.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", { class: "flex flex-wrap" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (tag) => {
                                    return openBlock(), createBlock(_component_Tag, {
                                      key: tag,
                                      text: tag
                                    }, null, 8, ["text"]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { class: "prose max-w-none text-gray-500 dark:text-gray-400" }, toDisplayString(post.summary), 1)
                            ]),
                            createVNode("div", { class: "text-base font-medium leading-6" }, [
                              createVNode(_component_NuxtLink, {
                                class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                href: `${post._path}`,
                                "aria-label": `Read '${post.title}'`
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Read more → ")
                                ]),
                                _: 2
                              }, 1032, ["href", "aria-label"])
                            ])
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              list.length > MAX_DISPLAY ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-end text-base font-medium leading-6"
              }, [
                createVNode(_component_NuxtLink, {
                  href: "/blog",
                  class: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                  "aria-label": "all posts"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" All Posts → ")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Latest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Latest-606b8262.js.map

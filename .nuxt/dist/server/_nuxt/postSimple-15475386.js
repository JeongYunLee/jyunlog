import { _ as __nuxt_component_0 } from "./SectionContainer-a4c68ffb.js";
import { _ as __nuxt_component_1 } from "./PageTitle-1a47bcf4.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "klona";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionContainer = __nuxt_component_0;
  const _component_PageTitle = __nuxt_component_1;
  const _component_Comments = resolveComponent("Comments");
  _push(ssrRenderComponent(_component_SectionContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<article${_scopeId}><div${_scopeId}><header${_scopeId}><div class="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700"${_scopeId}><dl${_scopeId}><div${_scopeId}><dt class="sr-only"${_scopeId}>Published on</dt><dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"${_scopeId}><time dateTime="{date}"${_scopeId}>{formatDate(date)}</time></dd></div></dl><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PageTitle, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`{title}`);
            } else {
              return [
                createTextVNode("{title}")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></header><div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0" style="${ssrRenderStyle({
          gridTemplateRows: "auto 1fr"
        })}"${_scopeId}><div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"${_scopeId}><div class="prose max-w-none pt-10 pb-8 dark:prose-dark"${_scopeId}>{children}</div></div>`);
        _push2(ssrRenderComponent(_component_Comments, { frontMatter: "{frontMatter}" }, null, _parent2, _scopeId));
        _push2(`<footer${_scopeId}><div class="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base"${_scopeId}></div></footer></div></div></article>`);
      } else {
        return [
          createVNode("article", null, [
            createVNode("div", null, [
              createVNode("header", null, [
                createVNode("div", { class: "space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700" }, [
                  createVNode("dl", null, [
                    createVNode("div", null, [
                      createVNode("dt", { class: "sr-only" }, "Published on"),
                      createVNode("dd", { class: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400" }, [
                        createVNode("time", { dateTime: "{date}" }, "{formatDate(date)}")
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_PageTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("{title}")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode("div", {
                class: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0",
                style: {
                  gridTemplateRows: "auto 1fr"
                }
              }, [
                createVNode("div", { class: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0" }, [
                  createVNode("div", { class: "prose max-w-none pt-10 pb-8 dark:prose-dark" }, "{children}")
                ]),
                createVNode(_component_Comments, { frontMatter: "{frontMatter}" }),
                createVNode("footer", null, [
                  createVNode("div", { class: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base" })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/postSimple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const postSimple = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  postSimple as default
};
//# sourceMappingURL=postSimple-15475386.js.map

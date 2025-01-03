import { _ as __nuxt_component_0 } from "./nuxt-layout-3f321871.js";
import { openBlock, createElementBlock, createElementVNode, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { r as render$1 } from "./LinkIcon-3d3baf22.js";
import { u as useConstants } from "./const-369fb235.js";
import { u as useHead } from "./index-6a088328.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    })
  ]);
}
const _sfc_main$1 = {
  __name: "TimelineSection",
  __ssrInlineRender: true,
  props: {
    timeline: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "timeline" }, _attrs))}><h2 class="timeline-title">My Career Journey</h2><ul><!--[-->`);
      ssrRenderList(__props.timeline, (item, index) => {
        _push(`<li class="timeline-item">`);
        if (index !== 0) {
          _push(`<div class="line"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="timeline-card"><div><h3>${ssrInterpolate(item.title)}</h3><span>`);
        _push(ssrRenderComponent(unref(render), { class: "w-5 h-5" }, null, _parent));
        _push(`${ssrInterpolate(item.date)}</span></div><p>${ssrInterpolate(item.description)}</p>`);
        if (item.link) {
          _push(`<a${ssrRenderAttr("href", item.link.url)} target="_blank">${ssrInterpolate(item.link.text)} `);
          _push(ssrRenderComponent(unref(render$1), { class: "w-4 h-4 md:w-5 md:h-5" }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TimelineSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "Timeline",
  __ssrInlineRender: true,
  setup(__props) {
    const { timeline } = useConstants();
    useHead({
      title: "Web Developer Portfolio | Career Journey",
      meta: [
        {
          property: "og:title",
          content: "Web Developer Portfolio | Career Journey"
        },
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Career Journey"
        },
        {
          property: "og:site",
          content: "https://www.eazypau.com/timeline"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_TimelineSection = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TimelineSection, { timeline: unref(timeline) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TimelineSection, { timeline: unref(timeline) }, null, 8, ["timeline"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Timeline-b46e77d7.js.map

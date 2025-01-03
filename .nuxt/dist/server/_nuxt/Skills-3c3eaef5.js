import { _ as __nuxt_component_0 } from "./nuxt-layout-3f321871.js";
import { mergeProps, useSSRContext, withCtx, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const Skills_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Skills",
  __ssrInlineRender: true,
  props: {
    skillSet: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "skills" }, _attrs))}><div><h2 class="techTitle">Technologies &amp; Framework</h2></div><ul><!--[-->`);
      ssrRenderList(__props.skillSet, (skill) => {
        _push(`<li class="skillStyle"><img${ssrRenderAttr("src", skill.imgUrl)}${ssrRenderAttr("alt", skill.alt)}${ssrRenderAttr("width", skill.width)}${ssrRenderAttr("height", skill.height)} loading="lazy"><p>${ssrInterpolate(skill.name)}</p></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const { skillWithLogo } = useConstants();
    useHead({
      title: "Web Developer Portfolio | Skills",
      meta: [
        {
          property: "og:title",
          content: "Web Developer Portfolio | Skills"
        },
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Skills"
        },
        {
          property: "og:site",
          content: "https://www.eazypau.com/skills"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Skills = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Skills, { "skill-set": unref(skillWithLogo) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Skills, { "skill-set": unref(skillWithLogo) }, null, 8, ["skill-set"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Skills-3c3eaef5.js.map

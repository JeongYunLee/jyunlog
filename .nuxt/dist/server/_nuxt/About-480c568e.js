import { _ as __nuxt_component_0$2 } from "./nuxt-layout-3f321871.js";
import { _ as __nuxt_component_0$1, a as __nuxt_component_1$1, b as __nuxt_component_2$1 } from "./GithubIcon-d30b4e0a.js";
import { mergeProps, useSSRContext, defineComponent, withCtx, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useConstants } from "./const-369fb235.js";
import { u as useHead } from "./index-6a088328.js";
import "vue-router";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "klona";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
import "defu";
const _imports_0 = "" + __publicAssetsURL("profile-pics/profile.jpeg");
const TextLeftImgRight_vue_vue_type_style_index_0_scoped_d6a68e3f_lang = "";
const _sfc_main$3 = {
  __name: "TextLeftImgRight",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsMailIcon = __nuxt_component_0$1;
      const _component_IconsLinkedInIcon = __nuxt_component_1$1;
      const _component_IconsGithubIcon = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "overflow-x-hidden flex items-center bg-white py-8 2xl:pb-10 md:py-20 lg:py-0 dark:bg-[#121212]"
      }, _attrs))} data-v-d6a68e3f><div class="px-6 mx-auto md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12" data-v-d6a68e3f><div class="items-center justify-between lg:flex lg:space-x-10" data-v-d6a68e3f><div class="lg:w-7/12 leftText" data-v-d6a68e3f><h2 class="profile-title" data-v-d6a68e3f>Who am I?</h2><div class="profile-description-container" data-v-d6a68e3f><p data-v-d6a68e3f> I’m JeongYun Lee, a master’s student majoring in the Department of Library and Information Science at Chung-Ang University in Seoul. I’m excited to share my current learning experiences with you. As I have a wide range of interests across various fields and topics, the content I cover will be quite diverse. I hope this blog serves as a valuable record of my studies and becomes helpful to others. Have a wonderful day! </p><p data-v-d6a68e3f>Here are a few areas I&#39;ve been studying/working on recently:</p></div><div class="summary-skill-list-container" data-v-d6a68e3f><ul data-v-d6a68e3f><li data-v-d6a68e3f>AI (with a focus on NLP)</li><li data-v-d6a68e3f>Large Models</li><li data-v-d6a68e3f>Knowledge Graphs</li><li data-v-d6a68e3f>Simple development</li></ul></div><div class="profile-social-icons" data-v-d6a68e3f><a href="mailto:your-email@example.com" aria-label="Email" data-v-d6a68e3f>`);
      _push(ssrRenderComponent(_component_IconsMailIcon, null, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/yzpo/" aria-label="Linkden" target="blank" data-v-d6a68e3f>`);
      _push(ssrRenderComponent(_component_IconsLinkedInIcon, null, null, _parent));
      _push(`</a><a href="https://github.com/eazypau" aria-label="Github" target="blank" data-v-d6a68e3f>`);
      _push(ssrRenderComponent(_component_IconsGithubIcon, null, null, _parent));
      _push(`</a></div></div><div class="mt-8 lg:mt-0 lg:w-4/12 xl:w-4/12 right-img-container" data-v-d6a68e3f><div class="flex items-center justify-center lg:justify-end group" data-v-d6a68e3f><div class="profile-img-container" data-v-d6a68e3f><img${ssrRenderAttr("src", _imports_0)} width="350" height="350" alt="profile image" loading="lazy" data-v-d6a68e3f></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TextLeftImgRight.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d6a68e3f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    title: {
      type: String,
      default: "title"
    },
    content: {
      type: String,
      default: "content"
    },
    classBg: {
      type: String,
      default: "bg-gray-200"
    }
  },
  setup() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [_ctx.classBg, "hobby-card-container"]
  }, _attrs))}><div><p>${ssrInterpolate(_ctx.title)}</p><p>${ssrInterpolate(_ctx.content)}</p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/Hobby.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "HobbySection",
  __ssrInlineRender: true,
  props: {
    hobbies: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardsHobby = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "hobbies" }, _attrs))}><h2 class="hobbyTitle">Some of My Favourite Activities</h2><div class="hobby-grid"><!--[-->`);
      ssrRenderList(__props.hobbies, (item) => {
        _push(ssrRenderComponent(_component_CardsHobby, {
          key: item,
          title: item.title,
          content: item.text,
          "class-bg": item.classBg,
          class: "relative"
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HobbySection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const { hobbies } = useConstants();
    useHead({
      meta: [
        {
          property: "og:site",
          content: "https://www.eazypau.com/about"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$2;
      const _component_TextLeftImgRight = __nuxt_component_1;
      const _component_HobbySection = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TextLeftImgRight, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HobbySection, { hobbies: unref(hobbies) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TextLeftImgRight),
              createVNode(_component_HobbySection, { hobbies: unref(hobbies) }, null, 8, ["hobbies"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=About-480c568e.js.map

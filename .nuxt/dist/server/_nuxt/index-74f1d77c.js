import { _ as __nuxt_component_0 } from "./nuxt-layout-3f321871.js";
import { ref, watchEffect, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { u as useTheme, a as useTransitionTracking } from "./useTransitionTracking-b0686054.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "/main_bg.JPG";
import { _ as _export_sfc } from "../server.mjs";
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
const Header_vue_vue_type_style_index_0_scoped_38049647_lang = "";
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const counter = ref(0);
    ref(4);
    ref(20);
    ref(1300);
    ref(2800);
    ref(2500);
    const showBgImg = ref(false);
    const showContent = ref(false);
    const isMobile = ref(false);
    const { enabled } = useTheme();
    const { transitionCompletedOnce } = useTransitionTracking();
    ref(0);
    ref(0);
    const introObj = ref({
      lineOne: "",
      lineTwo: "",
      lineThree: ""
    });
    const triggerRevealBackground = () => {
      if (counter.value === 4 && !enabled.value) {
        setTimeout(() => {
          showBgImg.value = true;
        }, 200);
      } else if (enabled.value) {
        const delay = transitionCompletedOnce.value ? 300 : isMobile.value ? 500 : 1200;
        setTimeout(() => {
          showBgImg.value = true;
        }, delay);
      }
    };
    watchEffect(() => {
      triggerRevealBackground();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "headerHeight" }, _attrs))} data-v-38049647><div${ssrRenderAttrs({
        name: "list",
        class: "header-bg"
      })}><img class="${ssrRenderClass(unref(showBgImg) ? "opacity-100" : "opacity-0")}"${ssrRenderAttr("src", _imports_0)} width="1920" height="1280" alt="blue red fusion" data-v-38049647></div><div class="${ssrRenderClass([unref(showContent) ? "opacity-85" : "opacity-0", "content text-center"])}" data-v-38049647><h1 class="leading-3" data-v-38049647><span class="text-3xl md:text-5xl font-semibold" data-v-38049647>${ssrInterpolate(unref(introObj).lineOne)}</span><br data-v-38049647><span class="text-2xl md:text-3xl font-medium" data-v-38049647>${ssrInterpolate(unref(introObj).lineTwo)}</span><br data-v-38049647><span class="text-xl md:text-2xl" data-v-38049647>${ssrInterpolate(unref(introObj).lineThree)}</span></h1></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-38049647"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Web Developer Portfolio | Po Yi Zhi",
      author: {
        "@type": "Person",
        "@id": "#poyizhi"
      },
      url: "https://www.eazypau.com/",
      description: "Personal Portfolio Website. Hi, I am Po Yi Zhi. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
      keywords: "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Po Yi Zhi, Yi Zhi, eazypau, Malaysia",
      image: "https://www.eazypau.com/profile-pics/profile.jpeg"
    };
    const personJson = {
      "@context": "https://schema.org/",
      "@type": "Person",
      "@id": "#poyizhi",
      name: "Po Yi Zhi",
      email: "poyizhi@gmail.com",
      url: "https://www.eazypau.com/"
    };
    useHead({
      script: [
        {
          children: JSON.stringify(jsonLd),
          type: "application/ld+json"
        },
        {
          children: JSON.stringify(personJson),
          type: "application/ld+json"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Header = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Header, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Header)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-74f1d77c.js.map

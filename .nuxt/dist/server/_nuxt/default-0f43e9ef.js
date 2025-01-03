import { _ as __nuxt_component_0$1 } from "./NavBar-865a2443.js";
import { _ as __nuxt_component_0, a as __nuxt_component_1$1, b as __nuxt_component_2 } from "./GithubIcon-d30b4e0a.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { e as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./index-6a088328.js";
import "destr";
import "devalue";
import "klona";
import "./nuxt-link-b70c525a.js";
import "ufo";
import "hookable";
import "./useTransitionTracking-b0686054.js";
import "./const-369fb235.js";
import "./env-949238f5.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const CURRENT_YEAR = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsMailIcon = __nuxt_component_0;
      const _component_IconsLinkedInIcon = __nuxt_component_1$1;
      const _component_IconsGithubIcon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-section" }, _attrs))}><footer><div class="social-icons-and-navigation"><div><a href="mailto:your-email@example.com" aria-label="Email" class="footerIcon">`);
      _push(ssrRenderComponent(_component_IconsMailIcon, null, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/yzpo/" aria-label="Linkden" target="_blank" class="footerIcon">`);
      _push(ssrRenderComponent(_component_IconsLinkedInIcon, null, null, _parent));
      _push(`</a><a href="https://github.com/eazypau" aria-label="Github" target="_blank" class="footerIcon">`);
      _push(ssrRenderComponent(_component_IconsGithubIcon, null, null, _parent));
      _push(`</a></div></div><div class="copyright"> © ${ssrInterpolate(unref(CURRENT_YEAR))} - Present JeongYun Lee. All rights reserved. </div></footer></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const gtag = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "${runtimeConfig.public.NUXT_GTM_ID}");
`;
    useHead({
      script: [
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.NUXT_GTM_ID}`
        },
        {
          type: "text/javascript",
          innerHTML: gtag
        },
        {
          type: "text/javascript",
          src: "js/useCopy.js"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0$1;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-0f43e9ef.js.map

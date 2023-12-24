import __nuxt_component_0$1 from './Icon-d628ef7c.mjs';
import { useSSRContext, mergeProps } from 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "SocialIcon",
  __ssrInlineRender: true,
  props: {
    kind: String,
    href: String,
    size: {
      type: Number,
      default: 8
    }
  },
  setup(__props) {
    const icons = {
      mail: "fluent:mail-24-filled",
      github: "simple-icons:github",
      facebook: "simple-icons:facebook",
      youtube: "simple-icons:youtube",
      linkedin: "simple-icons:linkedin",
      twitter: "simple-icons:twitter",
      instagram: "simple-icons:instagram"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      if (__props.kind && __props.href) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: "text-sm text-gray-500 transition hover:text-gray-600",
          target: "_blank",
          rel: "noopener noreferrer",
          href: __props.href
        }, _attrs))}><span class="sr-only">${ssrInterpolate(__props.kind)}</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: icons[__props.kind],
          class: "fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400",
          height: __props.size * 3,
          width: __props.size * 3
        }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=SocialIcon-c2d691da.mjs.map

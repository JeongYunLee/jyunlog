import { _ as __nuxt_component_0 } from './nuxt-link-5d0b373b.mjs';
import { _ as __unimport_kebabCase } from './kebabCase-69c98d7b.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file:///Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Tag",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: `/tags/${("kebabCase" in _ctx ? _ctx.kebabCase : unref(__unimport_kebabCase))(__props.text)}`,
        class: "mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text.split(" ").join("-"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text.split(" ").join("-")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main;

export { __nuxt_component_6 as _ };
//# sourceMappingURL=Tag-ec745377.mjs.map

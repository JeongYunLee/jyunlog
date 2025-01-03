import { _ as __nuxt_component_0$1 } from "./nuxt-layout-3f321871.js";
import { openBlock, createElementBlock, createElementVNode, mergeProps, unref, useSSRContext, defineComponent, ref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { r as render$1 } from "./LinkIcon-3d3baf22.js";
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
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const Modal_vue_vue_type_style_index_0_scoped_0796447d_lang = "";
const _sfc_main$3 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    closeModal: {
      type: Function,
      default: () => {
        return "Default function";
      }
    },
    modalContent: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "modal-container",
          "aria-labelledby": "modal-title",
          role: "dialog",
          "aria-modal": "true"
        }, _attrs))} data-v-0796447d><div class="modal-bg" data-v-0796447d></div><div class="modal-fixed-wrapper" data-v-0796447d><div class="modal-size" data-v-0796447d><div class="modal" data-v-0796447d>`);
        _push(ssrRenderComponent(unref(render), {
          class: "x-icon",
          onClick: __props.closeModal
        }, null, _parent));
        _push(`<p class="modal-heading" data-v-0796447d>${ssrInterpolate((_a = __props.modalContent) == null ? void 0 : _a.heading)}</p><hr data-v-0796447d><div class="modal-content-wrapper" data-v-0796447d><div class="lg:flex justify-between gap-10 lg:px-2 lg:mb-7 xl:mb-10" data-v-0796447d><p class="text-sm lg:text-base lg:w-1/2" data-v-0796447d>${ssrInterpolate((_b = __props.modalContent) == null ? void 0 : _b.description)}</p><div class="lg:flex flex-col justify-between lg:w-1/2" data-v-0796447d><div class="lg:mb-7" data-v-0796447d>`);
        if (__props.modalContent.highlights) {
          _push(`<div class="mt-3 mb-3 lg:mt-0" data-v-0796447d><p class="text-sm lg:text-base" data-v-0796447d>Highlight(s):</p><p class="flex flex-wrap text-sm lg:text-base" data-v-0796447d>${ssrInterpolate(__props.modalContent.highlights)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.modalContent.teamMembers.length > 0) {
          _push(`<div class="mt-3 mb-3 lg:mt-0" data-v-0796447d><p class="text-sm lg:text-base" data-v-0796447d>Team Member:</p><p class="flex flex-wrap" data-v-0796447d><!--[-->`);
          ssrRenderList((_c = __props.modalContent) == null ? void 0 : _c.teamMembers, (member, index) => {
            var _a2;
            _push(`<span class="text-sm lg:text-base" data-v-0796447d><a${ssrRenderAttr("href", member.linkedIn)} target="_blank" rel="noopener noreferrer" data-v-0796447d>${ssrInterpolate(member.name)}</a>`);
            if (index !== ((_a2 = __props.modalContent) == null ? void 0 : _a2.teamMembers.length) - 1) {
              _push(`<span data-v-0796447d> · </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          });
          _push(`<!--]--></p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-3 lg:mt-0" data-v-0796447d><p class="text-sm lg:text-base" data-v-0796447d>Tech Stack:</p><p class="flex flex-wrap" data-v-0796447d><!--[-->`);
        ssrRenderList((_d = __props.modalContent) == null ? void 0 : _d.techStack, (tech, index) => {
          var _a2;
          _push(`<span class="text-sm lg:text-base" data-v-0796447d>${ssrInterpolate(tech)}`);
          if (index !== ((_a2 = __props.modalContent) == null ? void 0 : _a2.techStack.length) - 1) {
            _push(`<span data-v-0796447d> · </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></p></div></div><div class="flex items-center flex-wrap mt-3 lg:mt-0" data-v-0796447d>`);
        _push(ssrRenderComponent(unref(render$1), { class: "w-4 h-4 mr-1 text-gray-500" }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList((_e = __props.modalContent) == null ? void 0 : _e.urls, (url, index) => {
          var _a2;
          _push(`<p class="flex text-sm lg:text-base" data-v-0796447d><a class="block text-center text-gray-600 underline"${ssrRenderAttr("href", url.link)} target="_blank" rel="noopener noreferrer" data-v-0796447d>${ssrInterpolate(url.name)}</a>`);
          if (index !== ((_a2 = __props.modalContent) == null ? void 0 : _a2.urls.length) - 1) {
            _push(`<span data-v-0796447d> · </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        });
        _push(`<!--]--></div></div></div><hr data-v-0796447d><div class="space-y-7 lg:space-y-12 px-2 pb-5" data-v-0796447d><!--[-->`);
        ssrRenderList((_f = __props.modalContent) == null ? void 0 : _f.imageShowcase, (imageShowcase) => {
          _push(`<div data-v-0796447d><p class="uppercase text-center text-sm lg:text-base mb-1 font-semibold" data-v-0796447d>${ssrInterpolate(imageShowcase.title)}</p><img${ssrRenderAttr("src", imageShowcase.src)}${ssrRenderAttr("alt", imageShowcase.alt)} class="shadow-md rounded-md"${ssrRenderAttr("title", imageShowcase.title)} data-v-0796447d></div>`);
        });
        _push(`<!--]--></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0796447d"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    image: {
      type: Object,
      default: () => {
      }
    },
    bgColor: {
      type: String,
      default: "bg-white"
    },
    onClickFunction: {
      type: Function,
      default: () => {
        return "Default function";
      }
    },
    content: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "work-card-container" }, _attrs))}><img class="${ssrRenderClass((_a = _ctx.image) == null ? void 0 : _a.maxWidth)}"${ssrRenderAttr("src", _ctx.image.src)}${ssrRenderAttr("alt", _ctx.image.alt)}${ssrRenderAttr("width", _ctx.image.width)}${ssrRenderAttr("height", _ctx.image.height)} loading="lazy"></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/WorkCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const WorkSection_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "WorkSection",
  __ssrInlineRender: true,
  props: {
    workingProjects: {
      type: Array,
      default: () => []
    },
    onClickFunction: {
      type: Function,
      default: () => {
        return "Default function";
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardsWorkCard = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "works" }, _attrs))}><h2 class="workTitle">Career Highlights</h2><div class="work-card-lane"><!--[-->`);
      ssrRenderList(__props.workingProjects, (project) => {
        _push(ssrRenderComponent(_component_CardsWorkCard, {
          key: project.imgSrc,
          image: project.image,
          "on-click-function": __props.onClickFunction,
          content: project
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "Works",
  __ssrInlineRender: true,
  setup(__props) {
    const { workingProjects } = useConstants();
    const isOpen = ref(false);
    const currentModalContent = ref({});
    const showModal = (content) => {
      currentModalContent.value = content;
      isOpen.value = true;
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
      isOpen.value = false;
      document.body.style.height = "auto";
      document.body.style.overflow = "visible";
    };
    useHead({
      title: "Web Developer Portfolio | Career Highlights",
      meta: [
        {
          property: "og:title",
          content: "Web Developer Portfolio | Career Highlights"
        },
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Career Highlights"
        },
        {
          property: "og:site",
          content: "https://www.eazypau.com/works"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_Modal = __nuxt_component_1;
      const _component_WorkSection = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              "is-open": unref(isOpen),
              "close-modal": closeModal,
              "modal-content": unref(currentModalContent)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_WorkSection, {
              "working-projects": unref(workingProjects),
              "on-click-function": showModal
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                "is-open": unref(isOpen),
                "close-modal": closeModal,
                "modal-content": unref(currentModalContent)
              }, null, 8, ["is-open", "modal-content"]),
              createVNode(_component_WorkSection, {
                "working-projects": unref(workingProjects),
                "on-click-function": showModal
              }, null, 8, ["working-projects"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Works-a6ec7a4e.js.map

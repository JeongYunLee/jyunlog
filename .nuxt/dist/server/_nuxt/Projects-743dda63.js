import { _ as __nuxt_component_0$1 } from "./nuxt-layout-3f321871.js";
import { defineComponent, ref, h, computed, onMounted, onUnmounted, watchEffect, watch, provide, normalizeClass, inject, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { N as N$1, C, S, u, o as o$1, c, l as l$1, a as c$1, H, p, T, t as t$1 } from "./env-949238f5.js";
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
function t(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o() {
  let a = [], s = { addEventListener(e, t2, r, i) {
    return e.addEventListener(t2, r, i), s.add(() => e.removeEventListener(t2, r, i));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    s.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    s.requestAnimationFrame(() => {
      s.requestAnimationFrame(...e);
    });
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    s.add(() => clearTimeout(t2));
  }, microTask(...e) {
    let t$12 = { current: true };
    return t(() => {
      t$12.current && e[0]();
    }), s.add(() => {
      t$12.current = false;
    });
  }, style(e, t2, r) {
    let i = e.style.getPropertyValue(t2);
    return Object.assign(e.style, { [t2]: r }), this.add(() => {
      Object.assign(e.style, { [t2]: i });
    });
  }, group(e) {
    let t2 = o();
    return e(t2), this.add(() => t2.dispose());
  }, add(e) {
    return a.push(e), () => {
      let t2 = a.indexOf(e);
      if (t2 >= 0)
        for (let r of a.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e of a.splice(0))
      e();
  } };
  return s;
}
function l(r) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r(...t2);
  };
}
function m(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function d(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
var g$1 = ((i) => (i.Finished = "finished", i.Cancelled = "cancelled", i))(g$1 || {});
function F(e, t2) {
  let i = o();
  if (!e)
    return i.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [l2, s] = [n, a].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i.setTimeout(() => t2("finished"), l2 + s) : t2("finished"), i.add(() => t2("cancelled")), i.dispose;
}
function L$1(e, t2, i, n, a, l$12) {
  let s = o(), o$12 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e, ...a), m(e, ...t2, ...i), s.nextFrame(() => {
    d(e, ...i), m(e, ...n), s.add(F(e, (u2) => (d(e, ...n, ...t2), m(e, ...a), o$12(u2))));
  }), s.add(() => d(e, ...t2, ...i, ...n, ...a)), s.add(() => o$12("cancelled")), s.dispose;
}
function g(e = "") {
  return e.split(" ").filter((t2) => t2.trim().length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a) => (a.Visible = "visible", a.Hidden = "hidden", a))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e = inject(R, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ge() {
  let e = inject(N, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let N = Symbol("NestingContext");
function L(e) {
  return "children" in e ? L(e.children) : e.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e) {
  let t2 = ref([]), a = ref(false);
  onMounted(() => a.value = true), onUnmounted(() => a.value = false);
  function s(n, r = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f }) => f === n);
    l2 !== -1 && (u(r, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a.value && (e == null || e()));
  }
  function h2(n) {
    let r = t2.value.find(({ id: l2 }) => l2 === n);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n, state: "visible" }), () => s(n, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s };
}
let W = N$1.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a, slots: s, expose: h$1 }) {
  let n = ref(0);
  function r() {
    n.value |= l$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n.value &= ~l$1.Opening, t2("afterEnter");
  }
  function f() {
    n.value |= l$1.Closing, t2("beforeLeave");
  }
  function S$1() {
    n.value &= ~l$1.Closing, t2("afterLeave");
  }
  if (!me() && C())
    return () => h(Se, { ...e, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f, onAfterLeave: S$1 }, s);
  let d2 = ref(null), b = computed(() => e.unmount ? S.Unmount : S.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v, appear: A } = Te(), { register: D, unregister: H$1 } = ge(), i = ref(v.value ? "visible" : "hidden"), I = { value: true }, c$2 = t$1(), y = { value: false }, P = Q(() => {
    !y.value && i.value !== "hidden" && (i.value = "hidden", H$1(c$2), S$1());
  });
  onMounted(() => {
    let o2 = D(c$2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (b.value === S.Hidden && c$2) {
      if (v.value && i.value !== "visible") {
        i.value = "visible";
        return;
      }
      u(i.value, { ["hidden"]: () => H$1(c$2), ["visible"]: () => D(c$2) });
    }
  });
  let j = g(e.enter), M = g(e.enterFrom), X = g(e.enterTo), _ = g(e.entered), Y = g(e.leave), Z = g(e.leaveFrom), ee = g(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E = I.value && !A.value, p2 = o$1(d2);
    !p2 || !(p2 instanceof HTMLElement) || E || (y.value = true, v.value && r(), v.value || f(), o2(v.value ? L$1(p2, j, M, X, _, (V) => {
      y.value = false, V === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _, (V) => {
      y.value = false, V === g$1.Finished && (L(P) || (i.value = "hidden", H$1(c$2), S$1()));
    })));
  }
  return onMounted(() => {
    watch([v], (o2, E, p2) => {
      te(p2), I.value = false;
    }, { immediate: true });
  }), provide(N, P), c(computed(() => u(i.value, { ["visible"]: l$1.Open, ["hidden"]: l$1.Closed }) | n.value)), () => {
    let { appear: o2, show: E, enter: p2, enterFrom: V, enterTo: Ce, entered: be, leave: ye, leaveFrom: Ee, leaveTo: Ve, ...U } = e, ne = { ref: d2 }, re = { ...U, ...A.value && v.value && c$1.isServer ? { class: normalizeClass([a.class, U.class, ...j, ...M]) } : {} };
    return H({ theirProps: re, ourProps: ne, slot: {}, slots: s, attrs: a, features: W, visible: i.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a, slots: s }) {
  let h$1 = p(), n = computed(() => e.show === null && h$1 !== null ? (h$1.value & l$1.Open) === l$1.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f = ref(true), S2 = { show: n, appear: computed(() => e.appear || !f.value) };
  return onMounted(() => {
    watchEffect(() => {
      f.value = false, n.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return H({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a, ...b, ...d2 }, s.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const NewProject_vue_vue_type_style_index_0_scoped_6a05b3ff_lang = "";
const _sfc_main$2 = {
  __name: "NewProject",
  __ssrInlineRender: true,
  props: {
    // isReverse: {
    //   type: Boolean,
    //   default: false,
    // },
    projectDetails: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    let hovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-card" }, _attrs))} data-v-6a05b3ff><div class="project-img-container" data-v-6a05b3ff><img${ssrRenderAttr("src", __props.projectDetails.imageUrl)} width="535" height="261" alt="project image" loading="lazy" data-v-6a05b3ff><div class="${ssrRenderClass(__props.projectDetails.filterColor)}" data-v-6a05b3ff><h3 class="${ssrRenderClass(__props.projectDetails.titleColor)}" data-v-6a05b3ff>${ssrInterpolate(__props.projectDetails.title)}</h3></div></div>`);
      _push(ssrRenderComponent(unref(Se), {
        show: unref(hovered),
        as: "template",
        appear: "",
        enter: "transform transition duration-700",
        "enter-from": "-translate-y-full",
        "enter-to": "translate-y-0",
        leave: "transform duration-500 transition ease-in-out",
        "leave-from": "translate-y-0",
        "leave-to": "-translate-y-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="project-text-container" data-v-6a05b3ff${_scopeId}><div data-v-6a05b3ff${_scopeId}><h4 data-v-6a05b3ff${_scopeId}>${ssrInterpolate(__props.projectDetails.title)}</h4><p class="project-description" data-v-6a05b3ff${_scopeId}>${ssrInterpolate(__props.projectDetails.description)}</p></div><div class="stack-and-project-links" data-v-6a05b3ff${_scopeId}><div class="tech-stack-container" data-v-6a05b3ff${_scopeId}><!--[-->`);
            ssrRenderList(__props.projectDetails.techStack, (tech, index) => {
              _push2(`<div data-v-6a05b3ff${_scopeId}><p data-v-6a05b3ff${_scopeId}>${ssrInterpolate(tech)}`);
              if (index !== __props.projectDetails.techStack.length - 1) {
                _push2(`<span data-v-6a05b3ff${_scopeId}>·</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p></div>`);
            });
            _push2(`<!--]--></div><div class="project-links" data-v-6a05b3ff${_scopeId}>`);
            if (__props.projectDetails.isUrl) {
              _push2(`<a${ssrRenderAttr("href", __props.projectDetails.urlLink)} target="blank" class="cursor-pointer" data-v-6a05b3ff${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-right-square-fill w-5 h-5 hover:text-gray-600 rounded" viewBox="0 0 16 16" data-v-6a05b3ff${_scopeId}><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" data-v-6a05b3ff${_scopeId}></path></svg></a>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.projectDetails.githubLink) {
              _push2(`<a class="mx-2"${ssrRenderAttr("href", __props.projectDetails.githubLink)} target="blank" aria-label="Github" data-v-6a05b3ff${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github w-5 h-5 hover:text-gray-600" viewBox="0 0 16 16" data-v-6a05b3ff${_scopeId}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-6a05b3ff${_scopeId}></path></svg></a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "project-text-container" }, [
                createVNode("div", null, [
                  createVNode("h4", null, toDisplayString(__props.projectDetails.title), 1),
                  createVNode("p", { class: "project-description" }, toDisplayString(__props.projectDetails.description), 1)
                ]),
                createVNode("div", { class: "stack-and-project-links" }, [
                  createVNode("div", { class: "tech-stack-container" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.projectDetails.techStack, (tech, index) => {
                      return openBlock(), createBlock("div", { key: tech }, [
                        createVNode("p", null, [
                          createTextVNode(toDisplayString(tech), 1),
                          index !== __props.projectDetails.techStack.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, "·")) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "project-links" }, [
                    __props.projectDetails.isUrl ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: __props.projectDetails.urlLink,
                      target: "blank",
                      class: "cursor-pointer"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "currentColor",
                        class: "bi bi-arrow-up-right-square-fill w-5 h-5 hover:text-gray-600 rounded",
                        viewBox: "0 0 16 16"
                      }, [
                        createVNode("path", { d: "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" })
                      ]))
                    ], 8, ["href"])) : createCommentVNode("", true),
                    __props.projectDetails.githubLink ? (openBlock(), createBlock("a", {
                      key: 1,
                      class: "mx-2",
                      href: __props.projectDetails.githubLink,
                      target: "blank",
                      "aria-label": "Github"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "currentColor",
                        class: "bi bi-github w-5 h-5 hover:text-gray-600",
                        viewBox: "0 0 16 16"
                      }, [
                        createVNode("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" })
                      ]))
                    ], 8, ["href"])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/NewProject.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6a05b3ff"]]);
const ProjectSection_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "ProjectSection",
  __ssrInlineRender: true,
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardsNewProject = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "project-section" }, _attrs))}><h2 class="project-title">My Personal Projects</h2><div class="project-grid"><!--[-->`);
      ssrRenderList(__props.projects, (project) => {
        _push(ssrRenderComponent(_component_CardsNewProject, {
          key: project,
          "project-details": project,
          "is-reverse": project.isReverse
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { projects } = useConstants();
    useHead({
      title: "Web Developer Portfolio | Personal Projects",
      meta: [
        {
          property: "og:title",
          content: "Web Developer Portfolio | Personal Projects"
        },
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Personal Projects"
        },
        {
          property: "og:site",
          content: "https://www.eazypau.com/projects"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_ProjectSection = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ProjectSection, { projects: unref(projects) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ProjectSection, { projects: unref(projects) }, null, 8, ["projects"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Projects-743dda63.js.map

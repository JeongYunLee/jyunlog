import { _ as __nuxt_component_0$1 } from "./nuxt-link-b70c525a.js";
import { u as useHead } from "./index-6a088328.js";
import { u as useTheme, a as useTransitionTracking } from "./useTransitionTracking-b0686054.js";
import { u as useConstants } from "./const-369fb235.js";
import { openBlock, createElementBlock, createElementVNode, ref, onMounted, watchEffect, nextTick, computed, defineComponent, provide, onUnmounted, inject, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, Fragment, renderList, Transition, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { o as o$2, a as c$1, u as u$2, c as c$2, l, H as H$1, t, p as p$2, N as N$1 } from "./env-949238f5.js";
function render$2(_ctx, _cache) {
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function render$1(_ctx, _cache) {
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
      d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    })
  ]);
}
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
      d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    })
  ]);
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function f(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a$1 = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(a$1 || {});
function x(r2, n) {
  let t2 = n.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n.resolveActiveIndex(), s = l2 != null ? l2 : -1, d = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e) => !n.resolveDisabled(e));
      case 1: {
        let e = t2.slice().reverse().findIndex((i, c2, u2) => s !== -1 && u2.length - c2 - 1 >= s ? false : !n.resolveDisabled(i));
        return e === -1 ? e : t2.length - 1 - e;
      }
      case 2:
        return t2.findIndex((e, i) => i <= s ? false : !n.resolveDisabled(e));
      case 3: {
        let e = t2.slice().reverse().findIndex((i) => !n.resolveDisabled(i));
        return e === -1 ? e : t2.length - 1 - e;
      }
      case 4:
        return t2.findIndex((e) => n.resolveId(e) === r2.id);
      case 5:
        return null;
      default:
        f(r2);
    }
  })();
  return d === -1 ? l2 : d;
}
function r$1(t2, e) {
  if (t2)
    return t2;
  let n = e != null ? e : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function b(t2, e) {
  let n = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var o2;
    n.value || o$2(e) && o$2(e) instanceof HTMLButtonElement && !((o2 = o$2(e)) != null && o2.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function m(r2) {
  if (c$1.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n = o$2(r2);
    if (n)
      return n.ownerDocument;
  }
  return document;
}
function p$1({ container: e, accept: t2, walk: d, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = m(e);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n.nextNode(); )
      d(n.currentNode);
  });
}
let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var N = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(N || {}), T = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
function E(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$1(e, r2 = 0) {
  var t2;
  return e === ((t2 = m(e)) == null ? void 0 : t2.body) ? false : u$2(r2, { [0]() {
    return e.matches(c);
  }, [1]() {
    let l2 = e;
    for (; l2 !== null; ) {
      if (l2.matches(c))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function _(e) {
  let r2 = m(e);
  nextTick(() => {
    r2 && !w$1(r2.activeElement, 0) && S(e);
  });
}
var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
function S(e) {
  e == null || e.focus({ preventScroll: true });
}
let H = ["textarea", "input"].join(",");
function I(e) {
  var r2, t2;
  return (t2 = (r2 = e == null ? void 0 : e.matches) == null ? void 0 : r2.call(e, H)) != null ? t2 : false;
}
function O$1(e, r2 = (t2) => t2) {
  return e.slice().sort((t2, l2) => {
    let o2 = r2(t2), i = r2(l2);
    if (o2 === null || i === null)
      return 0;
    let n = o2.compareDocumentPosition(i);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v(e, r2) {
  return P(E(), r2, { relativeTo: e });
}
function P(e, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i = (m2 = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? m2 : document, n = Array.isArray(e) ? t2 ? O$1(e) : e : E(e);
  o2.length > 0 && n.length > 1 && (n = n.filter((s) => !o2.includes(s))), l2 = l2 != null ? l2 : i.activeElement;
  let x2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n.indexOf(l2)) - 1;
    if (r2 & 4)
      return Math.max(0, n.indexOf(l2)) + 1;
    if (r2 & 8)
      return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d = n.length, u2;
  do {
    if (a2 >= d || a2 + d <= 0)
      return 0;
    let s = p2 + a2;
    if (r2 & 16)
      s = (s + d) % d;
    else {
      if (s < 0)
        return 3;
      if (s >= d)
        return 1;
    }
    u2 = n[s], u2 == null || u2.focus(L), a2 += x2;
  } while (u2 !== i.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function u$1(e, t2, n) {
  c$1.isServer || watchEffect((o2) => {
    document.addEventListener(e, t2, n), o2(() => document.removeEventListener(e, t2, n));
  });
}
function w(e, n, t2) {
  c$1.isServer || watchEffect((o2) => {
    window.addEventListener(e, n, t2), o2(() => window.removeEventListener(e, n, t2));
  });
}
function y(f2, c2, i = computed(() => true)) {
  function a2(e, r2) {
    if (!i.value || e.defaultPrevented)
      return;
    let t2 = r2(e);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let m2 = function o2(n) {
      return typeof n == "function" ? o2(n()) : Array.isArray(n) || n instanceof Set ? n : [n];
    }(f2);
    for (let o2 of m2) {
      if (o2 === null)
        continue;
      let n = o2 instanceof HTMLElement ? o2 : o$2(o2);
      if (n != null && n.contains(t2) || e.composed && e.composedPath().includes(n))
        return;
    }
    return !w$1(t2, h.Loose) && t2.tabIndex !== -1 && e.preventDefault(), c2(e, t2);
  }
  let u2 = ref(null);
  u$1("pointerdown", (e) => {
    var r2, t2;
    i.value && (u2.value = ((t2 = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), u$1("mousedown", (e) => {
    var r2, t2;
    i.value && (u2.value = ((t2 = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), u$1("click", (e) => {
    u2.value && (a2(e, () => u2.value), u2.value = null);
  }, true), u$1("touchend", (e) => a2(e, () => e.target instanceof HTMLElement ? e.target : null), true), w("blur", (e) => a2(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
function r(e) {
  return [e.screenX, e.screenY];
}
function u() {
  let e = ref([-1, -1]);
  return { wasMoved(n) {
    let t2 = r(n);
    return e.value[0] === t2[0] && e.value[1] === t2[1] ? false : (e.value = t2, true);
  }, update(n) {
    e.value = r(n);
  } };
}
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e) {
  var r2, i;
  let n = (r2 = e.innerText) != null ? r2 : "", t2 = e.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i = t2.innerText) != null ? i : "" : n;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t2 = e.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = document.getElementById(l2);
      if (r2) {
        let i = r2.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e = o$2(a2);
    if (!e)
      return "";
    let l2 = e.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
var Y = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Y || {}), Z = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(Z || {});
function ee(r2) {
  requestAnimationFrame(() => requestAnimationFrame(r2));
}
let A = Symbol("MenuContext");
function O(r2) {
  let b2 = inject(A, null);
  if (b2 === null) {
    let l2 = new Error(`<${r2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, O), l2;
  }
  return b2;
}
let Me = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(r2, { slots: b2, attrs: l$1 }) {
  let I2 = ref(1), e = ref(null), f2 = ref(null), s = ref([]), g2 = ref(""), d = ref(null), o2 = ref(1);
  function t2(a2 = (i) => i) {
    let i = d.value !== null ? s.value[d.value] : null, u2 = O$1(a2(s.value.slice()), (v2) => o$2(v2.dataRef.domRef)), n = i ? u2.indexOf(i) : null;
    return n === -1 && (n = null), { items: u2, activeItemIndex: n };
  }
  let p2 = { menuState: I2, buttonRef: e, itemsRef: f2, items: s, searchQuery: g2, activeItemIndex: d, activationTrigger: o2, closeMenu: () => {
    I2.value = 1, d.value = null;
  }, openMenu: () => I2.value = 0, goToItem(a2, i, u2) {
    let n = t2(), v2 = x(a2 === a$1.Specific ? { focus: a$1.Specific, id: i } : { focus: a2 }, { resolveItems: () => n.items, resolveActiveIndex: () => n.activeItemIndex, resolveId: (M) => M.id, resolveDisabled: (M) => M.dataRef.disabled });
    g2.value = "", d.value = v2, o2.value = u2 != null ? u2 : 1, s.value = n.items;
  }, search(a2) {
    let u2 = g2.value !== "" ? 0 : 1;
    g2.value += a2.toLowerCase();
    let v2 = (d.value !== null ? s.value.slice(d.value + u2).concat(s.value.slice(0, d.value + u2)) : s.value).find((x2) => x2.dataRef.textValue.startsWith(g2.value) && !x2.dataRef.disabled), M = v2 ? s.value.indexOf(v2) : -1;
    M === -1 || M === d.value || (d.value = M, o2.value = 1);
  }, clearSearch() {
    g2.value = "";
  }, registerItem(a2, i) {
    let u2 = t2((n) => [...n, { id: a2, dataRef: i }]);
    s.value = u2.items, d.value = u2.activeItemIndex, o2.value = 1;
  }, unregisterItem(a2) {
    let i = t2((u2) => {
      let n = u2.findIndex((v2) => v2.id === a2);
      return n !== -1 && u2.splice(n, 1), u2;
    });
    s.value = i.items, d.value = i.activeItemIndex, o2.value = 1;
  } };
  return y([e, f2], (a2, i) => {
    var u2;
    p2.closeMenu(), w$1(i, h.Loose) || (a2.preventDefault(), (u2 = o$2(e)) == null || u2.focus());
  }, computed(() => I2.value === 0)), provide(A, p2), c$2(computed(() => u$2(I2.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let a2 = { open: I2.value === 0, close: p2.closeMenu };
    return H$1({ ourProps: {}, theirProps: r2, slot: a2, slots: b2, attrs: l$1, name: "Menu" });
  };
} }), Re = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${t()}` } }, setup(r2, { attrs: b$1, slots: l2, expose: I2 }) {
  let e = O("MenuButton");
  I2({ el: e.buttonRef, $el: e.buttonRef });
  function f2(o2) {
    switch (o2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        o2.preventDefault(), o2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(a$1.First);
        });
        break;
      case o$1.ArrowUp:
        o2.preventDefault(), o2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(a$1.Last);
        });
        break;
    }
  }
  function s(o2) {
    switch (o2.key) {
      case o$1.Space:
        o2.preventDefault();
        break;
    }
  }
  function g2(o2) {
    r2.disabled || (e.menuState.value === 0 ? (e.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o$2(e.buttonRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })) : (o2.preventDefault(), e.openMenu(), ee(() => {
      var t2;
      return (t2 = o$2(e.itemsRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })));
  }
  let d = b(computed(() => ({ as: r2.as, type: b$1.type })), e.buttonRef);
  return () => {
    var i;
    let o2 = { open: e.menuState.value === 0 }, { id: t2, ...p2 } = r2, a2 = { ref: e.buttonRef, id: t2, type: d.value, "aria-haspopup": "menu", "aria-controls": (i = o$2(e.itemsRef)) == null ? void 0 : i.id, "aria-expanded": e.menuState.value === 0, onKeydown: f2, onKeyup: s, onClick: g2 };
    return H$1({ ourProps: a2, theirProps: p2, slot: o2, attrs: b$1, slots: l2, name: "MenuButton" });
  };
} }), he = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-menu-items-${t()}` } }, setup(r2, { attrs: b2, slots: l$1, expose: I2 }) {
  let e = O("MenuItems"), f2 = ref(null);
  I2({ el: e.itemsRef, $el: e.itemsRef }), p$1({ container: computed(() => o$2(e.itemsRef)), enabled: computed(() => e.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function s(t2) {
    var p2;
    switch (f2.value && clearTimeout(f2.value), t2.key) {
      case o$1.Space:
        if (e.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e.search(t2.key);
      case o$1.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e.activeItemIndex.value !== null) {
          let i = e.items.value[e.activeItemIndex.value];
          (p2 = o$2(i.dataRef.domRef)) == null || p2.click();
        }
        e.closeMenu(), _(o$2(e.buttonRef));
        break;
      case o$1.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a$1.Next);
      case o$1.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a$1.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a$1.First);
      case o$1.End:
      case o$1.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a$1.Last);
      case o$1.Escape:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => {
          var a2;
          return (a2 = o$2(e.buttonRef)) == null ? void 0 : a2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => v(o$2(e.buttonRef), t2.shiftKey ? N.Previous : N.Next));
        break;
      default:
        t2.key.length === 1 && (e.search(t2.key), f2.value = setTimeout(() => e.clearSearch(), 350));
        break;
    }
  }
  function g2(t2) {
    switch (t2.key) {
      case o$1.Space:
        t2.preventDefault();
        break;
    }
  }
  let d = p$2(), o2 = computed(() => d !== null ? (d.value & l.Open) === l.Open : e.menuState.value === 0);
  return () => {
    var u2, n;
    let t2 = { open: e.menuState.value === 0 }, { id: p2, ...a2 } = r2, i = { "aria-activedescendant": e.activeItemIndex.value === null || (u2 = e.items.value[e.activeItemIndex.value]) == null ? void 0 : u2.id, "aria-labelledby": (n = o$2(e.buttonRef)) == null ? void 0 : n.id, id: p2, onKeydown: s, onKeyup: g2, role: "menu", tabIndex: 0, ref: e.itemsRef };
    return H$1({ ourProps: i, theirProps: a2, slot: t2, attrs: b2, slots: l$1, features: N$1.RenderStrategy | N$1.Static, visible: o2.value, name: "MenuItems" });
  };
} }), ye = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-menu-item-${t()}` } }, setup(r2, { slots: b2, attrs: l2, expose: I2 }) {
  let e = O("MenuItem"), f2 = ref(null);
  I2({ el: f2, $el: f2 });
  let s = computed(() => e.activeItemIndex.value !== null ? e.items.value[e.activeItemIndex.value].id === r2.id : false), g2 = p(f2), d = computed(() => ({ disabled: r2.disabled, get textValue() {
    return g2();
  }, domRef: f2 }));
  onMounted(() => e.registerItem(r2.id, d)), onUnmounted(() => e.unregisterItem(r2.id)), watchEffect(() => {
    e.menuState.value === 0 && s.value && e.activationTrigger.value !== 0 && nextTick(() => {
      var n, v2;
      return (v2 = (n = o$2(f2)) == null ? void 0 : n.scrollIntoView) == null ? void 0 : v2.call(n, { block: "nearest" });
    });
  });
  function o2(n) {
    if (r2.disabled)
      return n.preventDefault();
    e.closeMenu(), _(o$2(e.buttonRef));
  }
  function t2() {
    if (r2.disabled)
      return e.goToItem(a$1.Nothing);
    e.goToItem(a$1.Specific, r2.id);
  }
  let p$12 = u();
  function a2(n) {
    p$12.update(n);
  }
  function i(n) {
    p$12.wasMoved(n) && (r2.disabled || s.value || e.goToItem(a$1.Specific, r2.id, 0));
  }
  function u$12(n) {
    p$12.wasMoved(n) && (r2.disabled || s.value && e.goToItem(a$1.Nothing));
  }
  return () => {
    let { disabled: n } = r2, v2 = { active: s.value, disabled: n, close: e.closeMenu }, { id: M, ...x2 } = r2;
    return H$1({ ourProps: { id: M, ref: f2, role: "menuitem", tabIndex: n === true ? void 0 : -1, "aria-disabled": n === true ? true : void 0, disabled: void 0, onClick: o2, onFocus: t2, onPointerenter: a2, onMouseenter: a2, onPointermove: i, onMousemove: i, onPointerleave: u$12, onMouseleave: u$12 }, theirProps: { ...l2, ...x2 }, slot: v2, attrs: l2, slots: b2, name: "MenuItem" });
  };
} });
const whiteBlackFavicon = "" + __publicAssetsURL("favicon.png");
const NavBar_vue_vue_type_style_index_0_scoped_dcd491ca_lang = "";
const _sfc_main = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`
        }
      ]
    });
    const { enabled, toggleTheme } = useTheme();
    const { trackTransitionCompleted, transitionCompletedOnce } = useTransitionTracking();
    const { navigation } = useConstants();
    let loading = ref(transitionCompletedOnce.value ? false : true);
    const navBgTextColor = ref("bg-black text-white");
    const logo = ref(whiteBlackFavicon);
    watchEffect(() => {
      navBgTextColor.value = "bg-white text-black dark:bg-[#121212]";
      logo.value = whiteBlackFavicon;
      if (enabled.value) {
        logo.value = whiteBlackFavicon;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        id: "nav-bar",
        class: ["navPadding", unref(navBgTextColor)],
        style: { "height": "70px" }
      }, _attrs))} data-v-dcd491ca><div class="lg:w-1/12" data-v-dcd491ca>`);
      if (!unref(loading)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: "/",
          class: "home-button",
          "aria-label": "JY"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-dcd491ca${_scopeId}>JY</p>`);
            } else {
              return [
                createVNode("p", null, "JY")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(loading)) {
        _push(`<div class="nav-links" data-v-dcd491ca><!--[-->`);
        ssrRenderList(unref(navigation), (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.id,
            "data-index": index,
            href: item.href,
            class: "underAnimation"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="lg:w-1/12 flex items-center justify-end gap-4" data-v-dcd491ca><div class="ml-5 flex items-center" data-v-dcd491ca><button type="button" aria-label="theme toggle" data-v-dcd491ca>`);
      if (!unref(enabled)) {
        _push(ssrRenderComponent(unref(render), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(render$1), { class: "w-5 h-5" }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Dark mode`);
            } else {
              return [
                createTextVNode("Dark mode")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</button></div>`);
      _push(ssrRenderComponent(unref(Me), {
        as: "div",
        class: "mobile-hamburger"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="menu-button" data-v-dcd491ca${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Re), { "aria-label": "Menu" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(render$2), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(render$2))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(he), { class: "menu-items" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="menu-item-padding" data-v-dcd491ca${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(navigation), (item) => {
                    _push3(ssrRenderComponent(unref(ye), { key: item }, {
                      default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            href: item.href,
                            class: [
                              active ? "bg-gray-500 text-white" : "text-gray-900",
                              "group"
                            ]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              href: item.href,
                              class: [
                                active ? "bg-gray-500 text-white" : "text-gray-900",
                                "group"
                              ]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href", "class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "menu-item-padding" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (item) => {
                        return openBlock(), createBlock(unref(ye), { key: item }, {
                          default: withCtx(({ active }) => [
                            createVNode(_component_NuxtLink, {
                              href: item.href,
                              class: [
                                active ? "bg-gray-500 text-white" : "text-gray-900",
                                "group"
                              ]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href", "class"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "menu-button" }, [
                createVNode(unref(Re), { "aria-label": "Menu" }, {
                  default: withCtx(() => [
                    createVNode(unref(render$2))
                  ]),
                  _: 1
                })
              ]),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(he), { class: "menu-items" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "menu-item-padding" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (item) => {
                          return openBlock(), createBlock(unref(ye), { key: item }, {
                            default: withCtx(({ active }) => [
                              createVNode(_component_NuxtLink, {
                                href: item.href,
                                class: [
                                  active ? "bg-gray-500 text-white" : "text-gray-900",
                                  "group"
                                ]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["href", "class"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dcd491ca"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=NavBar-865a2443.js.map

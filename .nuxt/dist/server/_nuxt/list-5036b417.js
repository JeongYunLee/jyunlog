var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { _ as __nuxt_component_0 } from "./nuxt-link-5d0b373b.js";
import { _ as __nuxt_component_6 } from "./Tag-ec745377.js";
import { computed, useSSRContext, ref, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { _ as __unimport_formatDate } from "./formatDate-30905004.js";
import { ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "destr";
import "klona";
import "defu";
import "./kebabCase-69c98d7b.js";
import "github-slugger";
import "./config-acf75f8a.js";
const _sfc_main$1 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      required: true
    },
    totalPages: {
      required: true
    }
  },
  setup(__props) {
    const { currentPage, totalPages } = __props;
    computed(() => parseInt(currentPage) - 1 > 0);
    computed(() => parseInt(currentPage) + 1 <= parseInt(totalPages));
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
class Constants {
}
__publicField(Constants, "POSTS_PER_PAGE", 5);
const _sfc_main = {
  __name: "list",
  __ssrInlineRender: true,
  props: {
    title: {
      required: true
    },
    posts: {
      required: true
    },
    currentPage: {
      default: 1
    },
    pagination: {
      default: true
    }
  },
  setup(__props) {
    const { title, posts, currentPage, pagination } = __props;
    const searchValue = ref("");
    computed(() => {
      const searchString = searchValue.value.toString();
      if (searchString) {
        return posts.filter((post) => {
          const searchContent = post.title + post.summary + post.tags.join(" ");
          return searchContent.toLowerCase().includes(searchString.toLowerCase());
        });
      }
      return posts;
    });
    const totalPages = computed(() => Math.ceil(posts.length / Constants.POSTS_PER_PAGE));
    const sortedBlogPosts = computed(() => {
      const searchString = searchValue.value.toString();
      let filteredPosts = posts;
      if (searchString) {
        filteredPosts = posts.filter((post) => {
          const searchContent = post.title + post.summary + post.tags.join(" ");
          return searchContent.toLowerCase().includes(searchString.toLowerCase());
        });
      }
      return filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Tag = __nuxt_component_6;
      const _component_Pagination = __nuxt_component_2;
      _push(`<!--[--><div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="space-y-2 pt-6 pb-8 md:space-y-5"><h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">${ssrInterpolate(__props.title)}</h1><div class="relative max-w-lg"><input aria-label="Search articles" type="text"${ssrRenderAttr("value", unref(searchValue))} placeholder="Search articles" class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"><svg class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div><ul>`);
      if (!unref(sortedBlogPosts).length) {
        _push(`<!--[-->No posts found.<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(sortedBlogPosts), (post) => {
          _push(`<li class="py-4"><article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"><dl><dt class="sr-only">Published on</dt><dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time${ssrRenderAttr("dateTime", post.date)}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(__unimport_formatDate))(post.date))}</time></dd></dl><div class="space-y-3 xl:col-span-3"><div><h3 class="text-2xl font-bold leading-8 tracking-tight">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: `${post._path}`,
            class: "text-gray-900 dark:text-gray-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(post.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h3><div class="flex flex-wrap"><!--[-->`);
          ssrRenderList(post.tags, (tag) => {
            _push(ssrRenderComponent(_component_Tag, {
              key: tag,
              text: tag
            }, null, _parent));
          });
          _push(`<!--]--></div></div><div class="prose max-w-none text-gray-500 dark:text-gray-400">${ssrInterpolate(post.summary)}</div></div></article></li>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</ul></div>`);
      _push(ssrRenderComponent(_component_Pagination, {
        style: unref(totalPages) > 1 && !unref(searchValue) ? null : { display: "none" },
        "current-page": __props.currentPage,
        "total-pages": unref(totalPages)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=list-5036b417.js.map

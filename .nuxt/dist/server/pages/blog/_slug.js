exports.ids = [11];
exports.modules = {

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("51d029c2", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("41175ec1", content, true)

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "pre[class*=language-].line-numbers{counter-reset:linenumber;padding-left:3.8em;position:relative}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{border-right:1px solid #999;font-size:100%;left:-3.8em;letter-spacing:-1px;pointer-events:none;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:3em}.line-numbers-rows>span{counter-increment:linenumber;display:block}.line-numbers-rows>span:before{color:#999;content:counter(linenumber);display:block;padding-right:.8em;text-align:right}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7d4a7790_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7d4a7790_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7d4a7790_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7d4a7790_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7d4a7790_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-content h2{font-size:28px;font-weight:700}.nuxt-content h3{font-size:22px;font-weight:700}.nuxt-content p{margin-bottom:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=7d4a7790&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10"
  }, [_vm._ssrNode("<p class=\"text-center font-bold my-5 text-green-500\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.formatDate(_vm.article.date)) + "\n  ") + "</p> <h1 class=\"text-4xl text-gray-700 font-extrabold mb-10 text-center\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.article.title) + "\n  ") + "</h1> "), _vm._ssrNode("<div class=\"flex items-center font-medium mt-6 sm:mx-3 justify-center\">", "</div>", [_c('nuxt-img', {
    staticClass: "mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800",
    attrs: {
      "src": _vm.siteMetadata.siteLogo,
      "loading": "lazy",
      "alt": ""
    }
  }), _vm._ssrNode(" <div><div class=\"text-slate-900 dark:text-slate-200\"><a target=\"_blank\" rel=\"noopener noreferrer\"" + _vm._ssrAttr("href", _vm.siteMetadata.home) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.siteMetadata.author) + " \n        ") + "</a></div></div>")], 2), _vm._ssrNode(" "), _c('nuxt-content', {
    staticClass: "prose min-w-full p-10 mx-auto",
    attrs: {
      "document": _vm.article
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=7d4a7790&

// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__(39);
var external_prismjs_default = /*#__PURE__*/__webpack_require__.n(external_prismjs_);

// EXTERNAL MODULE: external "prismjs/plugins/toolbar/prism-toolbar"
var prism_toolbar_ = __webpack_require__(40);

// EXTERNAL MODULE: external "prismjs/plugins/line-numbers/prism-line-numbers"
var prism_line_numbers_ = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css
var prism_line_numbers = __webpack_require__(82);

// EXTERNAL MODULE: external "prismjs/components/prism-bash.js"
var prism_bash_js_ = __webpack_require__(42);

// CONCATENATED MODULE: ./plugins/prism.js


// Include the toolbar plugin: (optional)


// Include the line numbers plugin: (optional)



// Include the line highlight plugin: (optional)
// import "prismjs/plugins/line-highlight/prism-line-highlight";
// import "prismjs/plugins/line-highlight/prism-line-highlight.css";

// Include some other plugins: (optional)
// import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
// import "prismjs/plugins/show-language/prism-show-language";
//import "prismjs/plugins/highlight-keywords/prism-highlight-keywords";

// Include additional languages


// Set vue SFC to markdown
external_prismjs_default.a.languages.vue = external_prismjs_default.a.languages.markup;
/* harmony default export */ var prism = (external_prismjs_default.a);
// EXTERNAL MODULE: ./data/sitemetainfo.js
var sitemetainfo = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  data() {
    return {
      title: 0,
      siteMetadata: sitemetainfo["a" /* default */]
    };
  },
  async asyncData({
    $content,
    params
  }) {
    const article = await $content("articles", params.slug).fetch();
    return {
      article: article
    };
  },
  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  mounted() {
    prism.highlightAll();
  },
  head() {
    //console.log(this.article.title);
    return {
      title: this.article.title,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "34e88dce"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map
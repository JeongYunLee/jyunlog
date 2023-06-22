exports.ids = [1];
exports.modules = {

/***/ 58:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: ["mr-1",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","fill":"none","width":"24","height":"24","viewBox":"0 0 25 25","stroke":"currentColor"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])
          )
        }
      }
    

/***/ }),

/***/ 59:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: ["mr-1",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","fill":"none","width":"24","height":"24","viewBox":"0 0 25 25","stroke":"currentColor"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])
          )
        }
      }
    

/***/ }),

/***/ 60:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"22","height":"22","viewBox":"0 0 26 26"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"}})])
          )
        }
      }
    

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AuthorCard.vue?vue&type=template&id=1686da71&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "md:fixed"
  }, [_vm._ssrNode("<div class=\"md:block flex justify-center items-center\">", "</div>", [_c('nuxt-img', {
    staticClass: "shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full",
    attrs: {
      "src": _vm.siteMetadata.author_image,
      "loading": "",
      "alt": "me"
    }
  }), _vm._ssrNode(" <div class=\"mb-2 mx-7 mt-4 justify-center items-center\"><h1 class=\"md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.siteMetadata.author) + "\n      ") + "</h1> <div class=\"md:text-lg text-gray-600 dark:text-blue-100\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.siteMetadata.position) + "\n      ") + "</div> <a" + _vm._ssrAttr("href", `mailto:${_vm.siteMetadata.email}`) + " class=\"text-gray-600 md:hidden mt-1 dark:text-blue-100\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.siteMetadata.email) + "\n      ") + "</a></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mx-7 hidden md:block\">", "</div>", [_vm._ssrNode("<div class=\"my-2 text-gray-600 flex dark:text-blue-100\">", "</div>", [_c('Mail'), _vm._ssrNode(" <a" + _vm._ssrAttr("href", `mailto:${_vm.siteMetadata.email}`) + ">" + _vm._ssrEscape(" " + _vm._s(_vm.siteMetadata.email)) + "</a>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"my-2 text-gray-600 flex dark:text-blue-100\">", "</div>", [_c('Glob'), _vm._ssrNode(" <p>" + _vm._ssrEscape(_vm._s(_vm.siteMetadata.location)) + "</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"my-2 text-gray-600 flex dark:text-blue-200\">", "</div>", [_c('Github'), _vm._ssrNode(" <a" + _vm._ssrAttr("href", _vm.siteMetadata.github) + ">" + _vm._ssrEscape(" " + _vm._s(_vm.siteMetadata.githubUser)) + "</a>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AuthorCard.vue?vue&type=template&id=1686da71&

// EXTERNAL MODULE: ./assets/icon/mail.svg?inline
var mailinline = __webpack_require__(58);
var mailinline_default = /*#__PURE__*/__webpack_require__.n(mailinline);

// EXTERNAL MODULE: ./assets/icon/glob.svg?inline
var globinline = __webpack_require__(59);
var globinline_default = /*#__PURE__*/__webpack_require__.n(globinline);

// EXTERNAL MODULE: ./assets/icon/github_new.svg?inline
var github_newinline = __webpack_require__(60);
var github_newinline_default = /*#__PURE__*/__webpack_require__.n(github_newinline);

// EXTERNAL MODULE: ./data/sitemetainfo.js
var sitemetainfo = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AuthorCard.vue?vue&type=script&lang=js&




/* harmony default export */ var AuthorCardvue_type_script_lang_js_ = ({
  components: {
    Mail: mailinline_default.a,
    Glob: globinline_default.a,
    Github: github_newinline_default.a
  },
  data: () => {
    return {
      siteMetadata: sitemetainfo["a" /* default */]
    };
  }
});
// CONCATENATED MODULE: ./components/AuthorCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AuthorCardvue_type_script_lang_js_ = (AuthorCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AuthorCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AuthorCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dda4089a"
  
)

/* harmony default export */ var AuthorCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=author-card.js.map
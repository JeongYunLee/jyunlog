exports.ids = [14,9];
exports.modules = {

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/external.b9085dd.svg";

/***/ }),

/***/ 55:
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
              class: ["text-primary-color dark:text-primary-color-dark h-10 w-10",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"}})])
          )
        }
      }
    

/***/ }),

/***/ 56:
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
              class: ["text-gray-700 dark:text-gray-200 hover:text-primary-color dark:hover:text-primary-color-dark h-5 w-5",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"}})])
          )
        }
      }
    

/***/ }),

/***/ 57:
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"}})])
          )
        }
      }
    

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCard.vue?vue&type=template&id=89737cee&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-4 md:w-1/2 md",
    staticStyle: {
      "max-width": "544px"
    }
  }, [_vm._ssrNode("<div class=\"h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700\">", "</div>", [_vm._ssrNode("<div class=\"p-6\">", "</div>", [_vm._ssrNode("<div class=\"flex flex-row justify-between items-center\">", "</div>", [_vm._ssrNode("<div class=\"my-2\">", "</div>", [_c('Folder', {
    staticClass: "text-green-800"
  })], 1), _vm._ssrNode(" <div class=\"flex flex-row justify-between\"><div class=\"mx-1\"><a target=\"_blank\" rel=\"noopener noreferrer\"" + _vm._ssrAttr("href", _vm.projectHref) + " class=\"text-sm text-gray-500 transition hover:text-gray-600\"><span class=\"sr-only\"></span><img" + _vm._ssrAttr("src", __webpack_require__(54)) + " class=\"w-6 h-6\"></a></div> <div class=\"mx-1\"><a target=\"_blank\" rel=\"noopener noreferrer\"" + _vm._ssrAttr("href", _vm.projectGithub) + " class=\"text-sm text-gray-500 transition hover:text-gray-600\"><span class=\"sr-only\">github</span><img" + _vm._ssrAttr("src", __webpack_require__(21)) + " class=\"w-6 h-6\"></a></div></div>")], 2), _vm._ssrNode(" <h2 class=\"text-2xl font-bold leading-8 tracking-tight mb-3\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.projectTitle) + "\n      ") + "</h2> <p class=\"prose text-gray-500 max-w-none dark:text-gray-400 mb-3\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.projectDescription) + "\n      ") + "</p> <div class=\"flex flex-row justify-between\"><div class=\"text-gray-400 text-sm font-extralight\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.projectTech1) + " • " + _vm._s(_vm.projectTech2) + " • " + _vm._s(_vm.ProjectTech3) + "\n        ") + "</div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProjectCard.vue?vue&type=template&id=89737cee&

// EXTERNAL MODULE: ./assets/icon/folder.svg?inline
var folderinline = __webpack_require__(55);
var folderinline_default = /*#__PURE__*/__webpack_require__.n(folderinline);

// EXTERNAL MODULE: ./assets/icon/external.svg?inline
var externalinline = __webpack_require__(56);
var externalinline_default = /*#__PURE__*/__webpack_require__.n(externalinline);

// EXTERNAL MODULE: ./assets/icon/github.svg?inline
var githubinline = __webpack_require__(57);
var githubinline_default = /*#__PURE__*/__webpack_require__.n(githubinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCard.vue?vue&type=script&lang=js&



/* harmony default export */ var ProjectCardvue_type_script_lang_js_ = ({
  props: ["title", "description", "href", "github", "tech1", "tech2", "tech3"],
  components: {
    Folder: folderinline_default.a,
    External: externalinline_default.a,
    Github: githubinline_default.a
  },
  data() {
    return {
      projectTitle: this.title,
      projectDescription: this.description,
      projectHref: this.href,
      projectGithub: this.github,
      projectTech1: this.tech1,
      projectTech2: this.tech2,
      ProjectTech3: this.tech3
    };
  }
});
// CONCATENATED MODULE: ./components/ProjectCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectCardvue_type_script_lang_js_ = (ProjectCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "44930c81"
  
)

/* harmony default export */ var ProjectCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects.vue?vue&type=template&id=de177ca4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0"
  }, [_vm._ssrNode("<div class=\"pt-6 pb-8 space-y-2 md:space-y-5\"><h1 class=\"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14\">\n      Projects\n    </h1> <p class=\"text-lg leading-7 text-gray-500 dark:text-gray-400\">\n      Some of the projects I've build or been a part of.\n    </p></div> "), _vm._ssrNode("<main class=\"relative mb-auto\">", "</main>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"container py-12\">", "</div>", [_vm._ssrNode("<div class=\"flex flex-wrap -m-4\">", "</div>", _vm._l(_vm.projectsData, function (item) {
    return _c('project-card', {
      key: item.title,
      attrs: {
        "title": item.title,
        "description": item.description,
        "href": item.href,
        "github": item.github,
        "tech1": item.tech1,
        "tech2": item.tech2,
        "tech3": item.tech3
      }
    });
  }), 1)])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/projects.vue?vue&type=template&id=de177ca4&

// CONCATENATED MODULE: ./data/projects.js
const projectsData = [{
  title: "JYunlog",
  description: `JYun's personal website`,
  imgSrc: "",
  href: "https://jyunlee.com",
  github: "https://github.com/JeongYunLee/jyunlog",
  tech1: "blog",
  tech2: "Nuxt",
  tech3: "Tailwind"
}, {
  title: "Covid-19 Our Memory",
  description: `한국의 COVID-19에 대한 한국 사회의 대응 및 데이터 기반 사회문화적 이슈의 분석`,
  imgSrc: "",
  href: "okfn.kr/projects/covid-19-our-memory/",
  github: "https://github.com/Open-Knowledge-Korea/covid-19-our-memory",
  tech1: "COVID-19",
  tech2: "Digital Archive",
  tech3: "CAU"
}, {
  title: "CulturalHeritage-2022",
  description: `문화재 시냅스: 국보 데이터 연결하기`,
  imgSrc: "",
  href: "https://culturalheritage-teamcayley.netlify.app/",
  github: "https://github.com/TeamCayley-official/CulturalHeritage-2022",
  tech1: "Korean Cultural Heritage",
  tech2: "Digital Archive",
  tech3: "CAU"
}, {
  title: "Forest_Welfare",
  description: `시각화로 알아보는 산림복지: 2021 산림복지진흥원 공모전 수상작품`,
  imgSrc: "",
  github: "https://github.com/JeongYunLee/Forest_Welfare",
  tech1: "",
  tech2: "",
  tech3: ""
}, {
  title: "covid19-cluster-infection",
  description: `코로나19 집단감염 데이터 수집 (~2022.05)`,
  imgSrc: "",
  github: "https://github.com/hike-lab/covid19-cluster-infection",
  tech1: "COVID-19",
  tech2: "Data Collection",
  tech3: ""
}, {
  title: "2021-Earthday",
  description: `2021 Earth day - Better recycling, Better Earth`,
  imgSrc: "",
  href: "https://jeongyunlee.github.io/2021-Earthday/",
  github: "https://github.com/JeongYunLee/2021-Earthday",
  tech1: "Bootstrap",
  tech2: "Netlify",
  tech3: ""
}];
/* harmony default export */ var projects = (projectsData);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects.vue?vue&type=script&lang=js&

/* harmony default export */ var projectsvue_type_script_lang_js_ = ({
  data() {
    return {
      projectsData: projects
    };
  },
  head: {
    title: "JYun | Projects",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Some of Projects developed by Solaiman"
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.png"
    }]
  }
});
// CONCATENATED MODULE: ./pages/projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/projects.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05471d36"
  
)

/* harmony default export */ var pages_projects = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProjectCard: __webpack_require__(77).default})


/***/ })

};;
//# sourceMappingURL=projects.js.map
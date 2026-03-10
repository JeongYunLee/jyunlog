const fs = require("node:fs");

const tsParserCandidates = [
  "/Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/@typescript-eslint/parser/dist/index.js",
  "/opt/homebrew/lib/node_modules/netlify-cli/node_modules/@typescript-eslint/parser/dist/index.js",
  "/usr/local/lib/node_modules/netlify-cli/node_modules/@typescript-eslint/parser/dist/index.js",
];

const tsParser = tsParserCandidates.find((candidate) => fs.existsSync(candidate));

if (!tsParser) {
  throw new Error("Unable to locate @typescript-eslint/parser for ESLint.");
}

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  globals: {
    navigateTo: "readonly",
    onMounted: "readonly",
    ref: "readonly",
    useHead: "readonly",
    useRuntimeConfig: "readonly",
  },
  ignorePatterns: [".nuxt/", ".output/", "node_modules/"],
  extends: [
    "eslint:recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "**/*.ts"],
      parser: tsParser,
    },
    {
      files: ["*.vue", "**/*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        parser: tsParser,
        sourceType: "module",
      },
    },
    {
      files: ["layouts/**/*.vue", "pages/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};

<template>
    <Giscus lang="en" repo="larssonoliver/blg" repo-id="R_kgDOHHMn8g" category="Post Discussions"
        category-id="DIC_kwDOHHMn8s4CXcgA" strict="0" reactions-enabled="1" emit-metadata="0" input-position="bottom"
        loading="lazy" mapping="pathname" />
</template>
  
<script setup lang="ts">
import Giscus from "@giscus/vue";

const { protocol, host } = useRequestURL();
</script>
  
<style lang="css">
/*! * Modified from GitHub's Dark Dimmed theme, licensed under the MIT License * Copyright (c) 2018 GitHub Inc. * https://github.com/primer/primitives/blob/main/LICENSE */
main {
    --color-prettylights-syntax-comment: #616E88;
    --color-prettylights-syntax-constant: #EBCB8B;
    --color-prettylights-syntax-entity: #8FBCBB;
    --color-prettylights-syntax-storage-modifier-import: #8FBCBB;
    --color-prettylights-syntax-entity-tag: #81A1C1;
    --color-prettylights-syntax-keyword: #81A1C1;
    --color-prettylights-syntax-string: #A3BE8C;
    --color-prettylights-syntax-variable: #D8DEE9;
    --color-prettylights-syntax-brackethighlighter-unmatched: #BF616A;
    --color-prettylights-syntax-invalid-illegal-text: #D8DEE9;
    --color-prettylights-syntax-invalid-illegal-bg: #BF616A;
    --color-prettylights-syntax-carriage-return-text: #D8DEE9;
    /* --color-prettylights-syntax-carriage-return-bg:#ad2e2c; */
    --color-prettylights-syntax-string-regexp: #81A1C1;
    --color-prettylights-syntax-markup-list: #81A1C1;
    --color-prettylights-syntax-markup-heading: #99C0D0;
    --color-prettylights-syntax-markup-italic: #8FBCBB;
    --color-prettylights-syntax-markup-bold: #8FBCBB;
    --color-prettylights-syntax-markup-deleted-text: #BF616A;
    /* --color-prettylights-syntax-markup-deleted-bg:#78191b; */
    --color-prettylights-syntax-markup-inserted-text: #A3BE8C;
    /* --color-prettylights-syntax-markup-inserted-bg:#1b4721; */
    --color-prettylights-syntax-markup-changed-text: #EBCB8B;
    /* --color-prettylights-syntax-markup-changed-bg:#682d0f; */
    --color-prettylights-syntax-markup-ignored-text: #8FBCBB;
    /* --color-prettylights-syntax-markup-ignored-bg:#255ab2; */
    --color-prettylights-syntax-meta-diff-range: #8FBCBB;
    /* --color-prettylights-syntax-brackethighlighter-angle:#616E88; */
    /* --color-prettylights-syntax-sublimelinter-gutter-mark:#545d68; */
    --color-prettylights-syntax-constant-other-reference-link: #A3BE8C;
    --color-btn-text: #ECEFF4;
    --color-btn-bg: #3b4252;
    --color-btn-border: #434c5e;
    --color-btn-shadow: 0 0 transparent;
    --color-btn-inset-shadow: 0 0 transparent;
    --color-btn-hover-bg: #4c566a;
    --color-btn-hover-border: #616E88;
    --color-btn-active-bg: #3d444d;
    --color-btn-active-border: #434c5e;
    --color-btn-selected-bg: #4c566a;
    --color-btn-primary-text: #ECEFF4;
    --color-btn-primary-bg: #81a1c1;
    --color-btn-primary-border: #434c5e;
    --color-btn-primary-shadow: 0 0 transparent;
    --color-btn-primary-inset-shadow: 0 0 transparent;
    --color-btn-primary-hover-bg: #88C0D0;
    --color-btn-primary-hover-border: #434c5e;
    --color-btn-primary-selected-bg: #88C0D0;
    --color-btn-primary-selected-shadow: 0 0 transparent;
    --color-btn-primary-disabled-text: #616E88;
    --color-btn-primary-disabled-bg: #2e3440;
    --color-btn-primary-disabled-border: #434c5e;
    --color-fg-default: #ECEFF4;
    --color-fg-muted: #616E88;
    --color-fg-subtle: #E5E9F0;

    --color-canvas-default: #2e3440;
    --color-canvas-overlay: #2e3440;
    --color-canvas-inset: #2e3440;
    --color-canvas-subtle: #3b4252;

    --color-border-default: #434c5e;
    --color-border-muted: #3b4252;
    --color-neutral-muted: #616E88;
    /* --color-accent-fg:#539bf5; */
    --color-accent-emphasis: #81a1c1;
    --color-accent-muted: #616E88;
    --color-accent-subtle: #3b4252;
    /* --color-success-fg:#57ab5a; */
    /* --color-attention-fg:#c69026; */
    --color-attention-muted: #616E88;
    --color-attention-subtle: #3b4252;
    --color-danger-fg: #BF616A;
    --color-danger-muted: #616E88;
    --color-danger-subtle: #3b4252;
    --color-primer-shadow-inset: 0 0 transparent;
    --color-primer-shadow-focus: 0 0 0 3px #143d79;
    --color-scale-gray-7: #4c566a;
    --color-scale-blue-8: #81a1c1;
    /*! Extensions from @primer/css/alerts/flash.scss */
    --color-social-reaction-bg-hover: var(--color-scale-gray-7);
    --color-social-reaction-bg-reacted-hover: var(--color-scale-blue-8)
}

main .pagination-loader-container {
    background-image: url(https://github.com/images/modules/pulls/progressive-disclosure-line-dark.svg)
}

/*! Custom CSS */
.gsc-reactions-count {
    display: none
}

.gsc-timeline {
    flex-direction: column-reverse
}

.gsc-header {
    padding-bottom: 1rem
}

.gsc-comments>.gsc-header {
    order: 1
}

.gsc-comments>.gsc-comment-box {
    margin-bottom: 1rem;
    order: 2
}

.gsc-comments>.gsc-timeline {
    order: 3
}

.gsc-homepage-bg {
    background-color: #15202b
}

main .gsc-loading-image {
    background-image: url(https://github.githubassets.com/images/mona-loading-dimmed.gif)
}
</style>
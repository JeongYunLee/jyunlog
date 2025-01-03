import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    build: {
      rollupOptions: {
       
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "jyunlee.com",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. Hi, I am JeongYun Lee from Seoul, South Korea. Have a good day!",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Po Yi Zhi" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Po Yi Zhi, Yi Zhi, eazypau, Malaysia",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "jyunlee.com",
        },
        {
          property: "og:site",
          content: "https://jyunee.com/",
        },
        {
          property: "og:title",
          content: "jyunlee.com",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Hi, I am JeongYun Lee from Seoul, South Korea. Have a good day!",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "https://jyunlee.com/favicon.png", ///favicon-wb.png
        },
        // google site verification
        // {
        //   name: "google-site-verification",
        //   content: "CpKqeACrIS7JLwdilAnMgoDicJnoBaNmupPoq6fUtFs",
        // },
      ],
      link: [{ rel: "icon", href: "/favicon.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});

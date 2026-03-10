import { defineNuxtConfig } from "nuxt/config";

const siteUrl = "https://jyunlee.com";
const siteName = "JeongYun Lee";
const siteDescription =
  "Concise CV site for JeongYun Lee: profile, experience, selected projects, skills, and contact links.";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: siteName,
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { name: "description", content: siteDescription },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "JeongYun Lee" },
        {
          name: "keywords",
          content:
            "JeongYun Lee, CV, Resume, Portfolio, Researcher, Frontend Developer, Nuxt, Vue, JavaScript, TypeScript",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: siteName },
        { property: "og:title", content: siteName },
        { property: "og:description", content: siteDescription },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: `${siteUrl}/favicon.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: siteName },
        { name: "twitter:description", content: siteDescription },
        { name: "twitter:image", content: `${siteUrl}/favicon.png` },
      ],
      link: [
        { rel: "icon", href: "/favicon.png" },
        { rel: "canonical", href: siteUrl },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteDescription,
    },
  },
});

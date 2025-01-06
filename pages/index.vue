<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "JeongYun Lee",
  author: {
    "@type": "Person",
    "@id": "#jyunlee",
  },
  url: "https://www.eazypau.com/",
  description:
    "",
  keywords:
    "",
  image: "https://www.eazypau.com/profile-pics/profile.jpeg",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#jyunlee",
  name: "JeongYun Lee",
  email: "cathx618@gmail.com",
  url: "https://jyunlee.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>

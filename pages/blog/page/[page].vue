<script setup>
const posts = await queryContent('blog').find();
const { params: { page } } = useRoute();
console.log("page", page)
</script>
<template>
    <NuxtLayout name="list" title="All Posts" :posts="posts" :current-page="page">
    </NuxtLayout>
</template>
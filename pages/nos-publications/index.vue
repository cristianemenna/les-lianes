<template lang="pug">
  .portfolio
    h1 Nos publications
    template(v-for="post of posts")
      h2 {{ post.title }}
      span {{ post.description }}
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

export default {
  async asyncData({ $content, params, error }) {
    let posts;
    try {
      posts = await $content("portfolio").fetch();
    } catch (e) {
      error({ message: "Post not found" });
    }

    return {
      posts,
    };
  },
};
</script>

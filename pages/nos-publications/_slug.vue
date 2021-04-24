<template lang="pug">
  .portfolio
    h2 {{ post.title }}
    nuxt-content(:document="post")
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("portfolio", params.slug).fetch();
    } catch (e) {
      error({ message: "Post not found" });
    }

    return {
      post,
    };
  },
};
</script>

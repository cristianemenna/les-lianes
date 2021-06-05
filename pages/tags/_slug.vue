<template lang="pug">
  .tag-item
    Navbar
    .main-container
      .tag-container
        span {{ tag }}
    Footer
</template>

<script>
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar
  },
  async asyncData({ $content, params, error }) {
    let tag;
    try {
      tag = await $content("tag", params.slug).fetch();
    } catch (e) {
      error({ message: "Post not found" });
    }

    return {
      tag
    };
  }
};
</script>

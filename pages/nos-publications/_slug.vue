<template lang="pug">
  .portfolio-item
    Navbar
    .main-container
      .publication-container
        .publication-image
          img(:src="post.image")
        .publication-details-container
          h1 {{ post.title }}
          p {{ post.description }}
          .publication-details
            span Publié le :
            span {{ formatDate(post.date) }}
          .publication-details
            span.publicated-by Par :
            //- a(:href="'/le-collectif/' + post.author")
            span {{ post.author }}
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
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("fr", options);
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("portfolio", params.slug).fetch();
    } catch (e) {
      error({ message: "Post not found" });
    }

    return {
      post
    };
  }
};
</script>

<style lang="less" scoped>

.publication-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 300px 4fr;
  grid-gap: 80px;
  align-items: center;
  .publication-image {
    img {
      width: 100%;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    }
  }
  .publication-details-container {
    h1 {
      font-size: 30px;
    }
    p {
      text-align: justify;
      margin: 30px 0;
    }
    .publication-details {
      span:first-child {
        font-family: "Raleway Bold";
        font-style: italic;
        margin-right: 10px;
      }
    }
  }
}
</style>

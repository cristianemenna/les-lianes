<template lang="pug">
  .portfolio-item
    Navbar
    .main-container
      .publication-container
        .publication-image
          img(:src="post.image")
        .publication-details-container
          h1 {{ post.title }}
          pre.description {{ post.description }}
          iframe(v-if="post.video" :src="post.video" allowfullscreen)
          .publication-details
            span Publié le :
            span {{ formatDate(post.date) }}
          .publication-details
            span.publicated-by Par :
            span {{ post.author }}
          .publication-details(v-if="post.source")
            span A retrouver sur :
            a(:href="post.source" target="_blank")
              span.publicated-on {{ post.source }}
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
    iframe {
      width: 100%;
      height: 400px;
      margin-bottom: 30px;
      border: none;
    }
    .publication-details {
      span:first-child {
        font-family: "Raleway Bold";
        font-style: italic;
        margin-right: 10px;
      }
    }
    .publicated-on {
      font-family: "Raleway" !important;
    }
  }
}

pre.description {
  white-space: pre-wrap;
  text-align: justify;
  font-family: "Raleway" !important;
  margin: 30px 0;
}
</style>

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
            img(src="~/assets/icons/calender-icon.svg")
            span Publié le :
            span {{ formatDate(post.date) }}
          .publication-details
            img(src="~/assets/icons/user-icon.svg")
            span.publicated-by Par :
            span {{ post.author }}
          .publication-details(v-if="post.source")
            img(src="~/assets/icons/link-icon.svg")
            span A retrouver sur :
            a(:href="post.source" target="_blank")
              span.publicated-on {{ post.source }}
      .author-related-content
        h2 Publications de la même autrice
        Portfolio(:portfolio="portfolio")
    Footer
</template>

<script>
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";
import Portfolio from "../../components/portfolio/Portfolio.vue";

export default {
  components: {
    Footer,
    Navbar,
    Portfolio
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("fr", options);
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    let portfolio;
    try {
      post = await $content("portfolio", params.slug).fetch();
      portfolio = await $content("portfolio")
        .where({
          author: {
            $eq: post.author
          }
        })
        .fetch();
    } catch (e) {
      error({ message: "Post not found" });
    }

    // TODO exclude post slug from list

    return {
      post,
      portfolio
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
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: flex-start;
      grid-gap: 5px;
      span:nth-child(2) {
        font-family: "Raleway Bold";
        font-style: italic;
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

.main-container {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 100px;
}

.author-related-content {
  h2 {
    margin: 50px 0;
  }
}
</style>

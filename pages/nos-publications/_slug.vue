<template lang="pug">
  .portfolio-item
    Navbar(@click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main-container(:class="{ overlay : showDropdown }")
      .publication-container
        .publication-details-container
          img(:src="post.image")
          h1 {{ post.title }}
          .publication-details.publication-author
            img.avatar(:src="member[0].avatar" :alt="member[0].avatarAlt")
            span {{ post.author }}
            span.separator ⸱
            span.date {{ formatDate(post.date) }}
          pre.description {{ post.description }}
          iframe(v-if="post.video" :src="post.video" allowfullscreen)
          audio(v-if="post.audio" controls :src="post.audio")
          .publication-details(v-if="post.source")
            img(src="~/assets/icons/link-icon.svg")
            span A retrouver sur :
            a(:href="post.source" target="_blank") {{ post.sourceName ? post.sourceName : "Publication d'origine"}}
      .author-related-content(v-if="portfolio.length")
        h2 Publications de la même autrice
        Portfolio(:portfolio="portfolio")
    Footer
</template>

<script>
import DropDownMenu from "../../components/drop-down-menu/DropDownMenu.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";
import Portfolio from "../../components/portfolio/Portfolio.vue";

export default {
  components: {
    DropDownMenu,
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
  data() {
    return {
      showDropdown: false,
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    let portfolio;
    let member;
    try {
      post = await $content("portfolio", params.slug).fetch();
      member = await $content("collective")
        .where({
          fullName: {
            $eq: post.author
          }
        })
        .fetch();
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

    // removing current post of author posts list
    const index = portfolio.findIndex(p => p.date === post.date);
    portfolio.splice(index, 1);

    if (post.audio) {
      let toRemove = "/static";
      post.audio = post.audio.replace(toRemove, "");
    }

    return {
      post,
      portfolio,
      member
    };
  }
};
</script>

<style lang="less" scoped>
.publication-container {
  display: grid;
  grid-gap: 80px;
  width: 800px;
  margin: 0 auto;
  .publication-image {
    img {
      width: 100%;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    }
  }
  .publication-details-container {
    img {
      width: 100%;
    }
    h1 {
      margin-top: 30px;
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
    audio {
      margin-bottom: 30px;
    }
    .avatar{
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
    .publication-details {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: flex-start;
      grid-gap: 5px;
      &.publication-author {
        grid-gap: 15px;
      }
      .separator {
        font-weight: bold;
      }
      .date {
        font-size: 13px;
        font-style: italic;
      }
    }
  }
}

pre.description {
  white-space: pre-wrap;
  text-align: justify;
  font-family: "RobotoC" !important;
  margin: 30px 0;
}

.main-container {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 100px;
}

.author-related-content {
  h2 {
    font-size: 20px;
    margin: 50px 0;
  }
}
</style>

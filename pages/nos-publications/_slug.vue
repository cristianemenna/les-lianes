<template lang="pug">
.portfolio-item
  Navbar(@click="(opened) => (showDropdown = opened)")
  DropDownMenu(v-if="showDropdown")
  .main-container(:class="{ overlay: showDropdown }")
    .publication-container(v-if="post")
      .publication-details-container
        img(:src="post.image", :alt="post.imageAlt")
        p.image-credit(v-if="post.image") {{ post.imageCredit }}
        h1 {{ post.title }}
        .publication-details.publication-author
          a(:href="publicPath + '/le-collectif/' + member[0].slug")
            img.avatar(:src="member[0].avatar", :alt="member[0].avatarAlt")
            span {{ post.author }}
          span.separator ⸱
          span.date {{ formatDate(post.date) }}
        pre.description {{ post.description }}
        iframe(v-if="post.video", :src="post.video", allowfullscreen)
        .publication-audios(v-if="audios")
          template(v-for="(audio, i) in audios")
            span {{ audio.title }}
            audio(
              controls
              :key="i"
              :src="audio.audio"
            )
        .publication-details(v-if="post.source")
          img(src="~/assets/icons/link-icon.svg")
          span A retrouver sur :
          a(:href="post.source", target="_blank") {{  post.sourceName ? post.sourceName : "Publication d'origine"  }}
        .publication-carousel(v-if="carousel")
          img(
            v-for="(photo, i) in carousel"
            :key="i"
            :src="photo.photo"
            :alt="photo.photoAlt"
            @click="selection = photo"
          )
    .author-related-content(v-if="portfolio && portfolio.length")
      h2 Publications de la même autrice
      Portfolio(:portfolio="portfolio")
  .image-view(v-if="selection")
    img.close-icon(src="~/assets/icons/close.svg" @click="selection = ''")
    img.photo(
      :src="selection.photo"
      :alt="selection.photoAlt"
    )
  ScrollToTop
  Footer
</template>

<script>
import DropDownMenu from "../../components/drop-down-menu/DropDownMenu.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";
import Portfolio from "../../components/portfolio/Portfolio.vue";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop.vue";

export default {
  components: {
    DropDownMenu,
    Footer,
    Navbar,
    Portfolio,
    ScrollToTop
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
      publicPath: process.env.baseUrl,
      selection: null
    };
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

    let audios;
    if (post.media) {
      try {
        audios = await $content("audios")
          .where({
            title: {
              $eq: post.media
            }
          })
          .fetch();
        audios = audios[0].audios;
      } catch (e) {
        error({ message: "Audios not found" });
      }
    }

    let carousel;
    if (post.carousel) {
      try {
        carousel = await $content("carousel")
          .where({
            title: {
              $eq: post.carousel
            }
          })
          .fetch();
        carousel = carousel[0].photos;
      } catch (e) {
        error({ message: "Carousel not found" });
      }
    }

    // removing current post of author posts list
    const index = await portfolio.findIndex(p => p.date === post.date);
    await portfolio.splice(index, 1);

    return {
      audios,
      carousel,
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
  @media only screen and (max-width: 800px) {
    width: unset;
  }
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
      color: #000000;
      @media only screen and (max-width: 800px) {
        margin: 30px 0;
      }
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
    .avatar {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
    .image-credit {
      margin: 0;
      padding: 0;
      font-style: italic;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
    .publication-details {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: flex-start;
      grid-gap: 5px;
      a:hover {
        color: rgba(37, 156, 147, 0.8);
      }
      &.publication-author {
        grid-gap: 15px;
        @media only screen and (max-width: 800px) {
          grid-gap: 5px;
        }
      }
      .separator {
        font-weight: bold;
      }
      .date {
        font-size: 13px;
        font-style: italic;
        @media only screen and (max-width: 800px) {
          font-size: 11px;
        }
      }
      a {
        display: grid;
        grid-auto-flow: column;
        place-items: center;
        grid-gap: 10px;
      }
    }
  }
}

pre.description {
  white-space: pre-wrap;
  text-align: justify;
  font-family: "Noto" !important;
  margin: 30px 0;
}

.main-container {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 100px;
  @media only screen and (max-width: 800px) {
    grid-gap: 50px;
  }
}

.author-related-content {
  h2 {
    font-size: 20px;
    margin: 50px 0;
  }
}

.publication-audios {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 6px;
  span {
    font-weight: bold;
  }
}

.publication-carousel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin: 50px 0;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}

.image-view {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(204, 218, 220, 0.9);
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 50px auto;
  place-items: center;
  img.photo {
    max-height: 100vh - 15%;
    max-width: 100vw;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .close-icon {
    width: 25px;
    place-self: end;
    align-self: end;
    margin-right: 30px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

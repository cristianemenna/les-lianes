<template lang="pug">
  .tags
    Navbar(@click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main-container(:class="{ overlay : showDropdown }")
      h1 Tags
      Tags(:tags="tagsList" @click="tag => selectedTag = tag")
      .portfolio-container
        PortfolioFilteredByTag(:portfolio="portfolio" :tag="selectedTag" :tags="tagsList")
    ScrollToTop
    Footer
</template>

<script lang="ts">
import DropDownMenu from "../../components/drop-down-menu/DropDownMenu.vue";
import { Vue, Component } from "vue-property-decorator";
import Tags from "../../components/tags/Tags.vue";
import PortFolioFilteredByTag from "../../components/portfolio/PortfolioFilteredByTag.vue";

export default {
  components: {
    DropDownMenu,
    Tags,
    PortFolioFilteredByTag
  },
  // @ts-ignore
  async asyncData({ $content, params, error }) {
    let portfolio;
    let tags;
    try {
      portfolio = await $content("portfolio").sortBy('date').fetch();
      tags = await $content("tags").fetch();
    } catch (e) {
      error({ message: "Not found" });
    }
    // @ts-ignore
    const tagsList = tags.map(t => t.tag);

    return {
      portfolio,
      tagsList
    };
  },
  data() {
    return {
      selectedTag: "",
      showDropdown: false
    };
  },
  created() {
    // @ts-ignore
    this.selectedTag = Object.keys(this.$route.query)[0];
  }
};
</script>

<style lang="less" scoped>
.main-container {
  h1 {
    font-size: 30px;
  }
}

.tags {
  grid-template-columns: repeat(8, 1fr) !important;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

.portfolio-container {
  margin-top: 50px;
  /deep/ .tags {
    display: none;
  }
  /deep/ .portfolio {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 50px;
    grid-column-gap: 15px;
    img {
      width: 250px;
      height: 180px;
      object-fit: cover;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

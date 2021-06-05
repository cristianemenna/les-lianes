<template lang="pug">
  .tags
    Navbar
    .main-container
      h1 Tags
      Tags(:tags="tagsList" @click="tag => selectedTag = tag")
      span {{ selectedTag }}
      .portfolio-container
        //- Portfolio(:portfolio="portfolio")
        template(v-for="post of portfolio.map(p => p.tag ? p.tag.includes(selectedTag) : t)")
          span {{ post.tag }}
    Footer
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Tags from "../../components/tags/Tags.vue";

export default {
  components: {
    Tags,
  },
  async asyncData({ $content, params, error }) {
    let portfolio;
    let tags;
    try {
      portfolio = await $content("portfolio").fetch();
      tags = await $content("tags").fetch();
    } catch (e) {
      error({ message: "Not found" });
    }
    const tagsList = tags.map(t => t.tag);

    return {
      portfolio,
      tagsList
    };
  },
  data: () => {
    return {
      selectedTag: "Politique",
    }
  },
  computed: {
    test: function() {
      return this.selectedTag;
    }
  },
};
</script>

<style lang="less" scoped>

.main-container {
  h1 {
    font-size: 30px;
  }
}

.tags {
  grid-template-columns: repeat(8, 1fr);
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

<template lang="pug">
  .portfolio
    Navbar(portfolio @click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main-container(:class="{ overlay : showDropdown }")
      h1 Nos publications
      .portfolio-container
        Portfolio(:portfolio="portfolio")
    Footer
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

export default {
  data() {
    return {
      showDropdown: false
    };
  },
  async asyncData({ $content, params, error }) {
    let portfolio;
    try {
      portfolio = await $content("portfolio").fetch();
    } catch (e) {
      error({ message: "Portfolio not found" });
    }

    return {
      portfolio
    };
  }
};
</script>

<style lang="less" scoped>
.main-container {
  h1 {
    font-size: 30px;
    @media only screen and (max-width: 800px) {
      font-size: 20px;
    }
  }
}

.portfolio-container {
  margin-top: 50px;
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

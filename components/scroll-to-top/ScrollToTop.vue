<template lang="pug">
  .scroll-to-top(v-if="visible")
    img(src="~/assets/icons/back-to-top.svg" @click="scrollingToTop")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ScrollToTop extends Vue {
  public visible = false;

  public mounted() {
    console.log("mounted");
    window.addEventListener("scroll", this.scrollListener);
  }

  public beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  public scrollListener() {
    if (window.pageYOffset > 150) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  public scrollingToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
</script>

<style lang="less" scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    bottom: 0px;
    right: 0px;
    padding: 20px;
  }
  img {
    width: 50px;
    height: 50px;
    @media only screen and (max-width: 800px) {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

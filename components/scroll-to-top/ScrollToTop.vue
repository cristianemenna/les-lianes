<template lang="pug">
  .scroll-to-top
    img(src="~/assets/icons/back-to-top.svg" @click="scrollToTop" v-show="visible")
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ScrollToTop extends Vue {
  public visible = false;

  public mounted() {
    window.addEventListener("scroll", this.scrollListener);
  }

  public beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  public scrollListener() {
    this.visible = window.scrollY > 150;
  }

  public scrollToTop() {
    window.scroll(0, 0);
  }
}
</script>

<style lang="less" scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
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

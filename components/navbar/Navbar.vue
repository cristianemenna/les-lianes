<template lang="pug">
  .navbar
    .navbar-content
      ul
        li
          a(href="/")
            img(id="logo" src="~/assets/img/logo.png")
        li
          a(href="/nos-publications" :class="{ selected : portfolio }") Nos publications
        li
          a(href="/le-collectif" :class="{ selected : collective }") Qui sommes-nous ?
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  props: {
    portfolio: Boolean,
    collective: Boolean,
    home: Boolean,
  }
})
export default class Navbar extends Vue {
  public mounted() {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      if (scrollY > 90) {
        navbar.style.boxShadow = "0 -2px 4px 1px rgba(0, 0, 0, 0.5)";
        navbar.style.width = "100vw"
      }

      if (scrollY === 0) {
        navbar.style.boxShadow = "unset";
      }
    });
  }
}
</script>

<style lang="less" scoped>
.navbar {
  width: 100vw;
  height: 100px;
  position: sticky;
  top: 0;
  color: #000000;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  z-index: 1;
}

.navbar-content {
  width: 1000px;
  margin: 0 auto;
}

ul {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 5fr 1fr 1fr;
  align-items: center;
  padding: 0;
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: black;
      &.selected {
        padding-bottom: 4px;
        border-bottom: 3px solid #228782;
      }
      &:hover {
        color: #228782;
      }
    }
  }
}

#logo {
  width: 200px;
}
</style>

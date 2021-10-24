<template lang="pug">
  .navbar
    .navbar-content
      ul
        li
          a(href="/")
            img(id="logo" src="~/assets/img/logo.png" alt="logo")
        li
          a(href="/nos-publications" :class="{ selected : portfolio }") Nos publications
        li
          a(href="/le-collectif" :class="{ selected : collective }") Qui sommes-nous ?
        li(@click="opened = !opened, $emit('click', opened)")
          img(src="~/assets/icons/menu-icon.svg" alt="picto du menu")
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  props: {
    portfolio: Boolean,
    collective: Boolean,
    home: Boolean
  }
})
export default class Navbar extends Vue {
  public opened = false;

  public mounted() {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      if (scrollY > 90) {
        navbar.style.boxShadow = "0 -2px 4px 1px rgba(0, 0, 0, 0.5)";
        navbar.style.width = "100vw";
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
  z-index: 2;
  @media only screen and (max-width: 800px) {
    height: 80px;
  }
}

.navbar-content {
  width: 1000px;
  margin: 0 auto;
  position: relative;
}

ul {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  padding: 0;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 2fr 1fr;
    align-items: baseline;
  }
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      &.selected {
        padding-bottom: 4px;
        border-bottom: 3px solid #228782;
      }
      &:hover {
        color: #228782;
      }
    }
    &:nth-child(4) {
      display: none;
    }
    @media only screen and (max-width: 800px) {
      &:nth-child(1) {
        margin-left: 20px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        display: none;
      }
      &:nth-child(4) {
        display: block;
        justify-self: center;
        img {
          width: 28px;
        }
      }
    }
  }
}

#logo {
  width: 200px;
  @media only screen and (max-width: 800px) {
    width: 150px;
  }
}

</style>

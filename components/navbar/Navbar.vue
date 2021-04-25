<template lang="pug">
  .navbar
    .navbar-content
      ul
        li
          img(id="logo" src="~/assets/img/logo.png")
        li
          a(href="/nos-publications") Nos publications
        li
          a(href="/le-collectif") Le collectif
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {

  public mounted() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (scrollY > 90) {
        navbar.style.boxShadow = '0 -2px 4px 1px rgba(0, 0, 0, 0.5)';
      }

      if (scrollY === 0) {
        navbar.style.boxShadow = 'unset';
      }
    })
  }
}
</script>

<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 150px;
  position: sticky;
  top: 0;
  color: #000000;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
}

.navbar-content {
  width: 1300px;
  margin: 0 auto;
}

ul {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 6fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: black;
    }
  }
}

#logo {
  width: 250px;
}
</style>

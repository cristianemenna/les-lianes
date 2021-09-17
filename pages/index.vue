<template lang="pug">
  .les-lianes
    Navbar(@click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main(:style="{ backgroundImage: `url(${photo})` }")
      .main-container
        a(href="/le-collectif")
          .main-presentation
            h1 COLLECTIF LES LIANES
            p Nous sommes un collectif de journalistes et de photographes.
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import DropDownMenu from "../components/drop-down-menu/DropDownMenu.vue";
import Navbar from "../components/navbar/Navbar.vue";
import Footer from "../components/footer/Footer.vue";

Component.registerHooks(["asyncData"]);

@Component({
  components: {
    DropDownMenu,
    Navbar
  }
})
export default class Index extends Vue {
  public showDropdown = false;

  public mounted() {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }

  public head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }

  async asyncData({ $content, params, error }) {
    let homeBackgroundPhoto;

    try {
      homeBackgroundPhoto = await $content("photos").fetch();
    } catch (e) {
      error({ message: "Photo not found" });
    }

    const photo = require(`@/static${homeBackgroundPhoto[0].homeBackground}`);
    return {
      photo,
    };
  }
}
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  background-size: cover;
}

/deep/ .navbar {
  background-color: rgba(255, 255, 255, 0.5) !important;
  height: 100px;
  z-index: 2;
  @media only screen and (max-width: 800px) {
    height: 80px;
    background-color: #ffffff !important;
  }
}

.main-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 2fr 1.8fr;
  place-items: center;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  a {
    grid-column: 3;
    @media only screen and (max-width: 1000px) {
      grid-column: 1 / span 2;
    }
  }
}

.main-presentation {
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  border-radius: 5px;
  text-align: center;
  h1 {
    color: #000000;
    font-family: "Raleway Bold";
    font-size: 27px;
    filter: brightness(7.9);
  }
  p {
    margin: 25px 0;
    font-size: 16px;
  }
  @media only screen and (max-width: 800px) {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 15px;
  }
}
</style>

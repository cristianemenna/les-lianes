<template lang="pug">
  .les-lianes
    Navbar
    .main
      .main-container
        a(href="/le-collectif")
          .main-presentation
            h1 Collectif Les Lianes
            p Collectif de cinq journalistes et photographes. Nos domaines de prédilection sont la politique internationale, les féministes, l'environnement.
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navbar from "../components/navbar/Navbar.vue";
import Footer from "../components/footer/Footer.vue";

@Component({
  components: {
    Navbar
  }
})
export default class Index extends Vue {
  public head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
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
  background-image: url("~/assets/img/home2.jpg");
  background-size: cover;
}

/deep/ .navbar {
  background-color: rgba(255, 255, 255, 0.5) !important;
  height: 100px;
  z-index: 1;
  @media only screen and (max-width: 800px) {
    height: 80px;
  }
}

.main-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 2fr 1.5fr;
  place-items: center;
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
}
</style>

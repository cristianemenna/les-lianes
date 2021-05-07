<template lang="pug">
  .les-lianes
    Navbar
    .main-container
      .intro-card
        p Nous sommes un collectif de cinq journalistes et photographes.
        p Nos domaines de prédilection sont la politique internationale, les féministes, l'environnement.
        a(href="/accueil") Entrer
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Collective from "./le-collectif.vue";
import Navbar from "../components/navbar/Navbar.vue";
import Footer from "../components/footer/Footer.vue";

@Component({
  components: {
    Collective,
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
.main-container {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2fr 1.2fr 200px;
  place-content: center;
  background: #000000;
  background-image: url("~/assets/img/home2.jpg");
  background-position: center;
  background-size: cover;
  filter: brightness(0.7);
}

/deep/ .navbar {
  background-color: unset;
  z-index: 1;
  a {
    color: #ffffff;
  }
}

.intro-card {
  height: fit-content;
  min-height: 200px;
  grid-column: 2;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;
  justify-items: start;
  padding: 40px;
  margin-right: 100px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 30px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  p {
    font-size: 1.2em;
  }
  a {
    align-self: center;
    justify-self: center;
    color: #000000;
    text-transform: uppercase;
  }
}
</style>

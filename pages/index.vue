<template lang="pug">
  .les-lianes
    Navbar
    .main-container
      .card
        h1 Bienvenue sur le site du collectif Les Lianes
        p Nous sommes un collectif de cinq journalistes et photographes. <br> Nos domaines de prédilection sont la politique internationale, les féministes, l'environnement .
      .card
        h2 Pourquoi « Les Lianes » ?
        p Parce que comme les lianes, on « grandit » en s’accrochant à un maximum de supports, on multiplie les sources, on les croise, afin de produire une info crédible et vérifiée face aux rumeurs et à la désinformation. Comme elles, on est flexibles sur le terrain. On passe partout pour atteindre notre but : trouver le bon témoignage, avancer dans une enquête… On « grimpe » en prenant le temps. On privilégie les formats longs : l’investigation, le reportage, le documentaire, le podcast, etc. Être curieuses, tenaces, rigoureuses sur l’info, indépendantes, voilà ce qui nous ressemble et qui nous rassemble.
        h2 Notre rencontre
        p Les lianes, comme les liens qui nous unissent, également. Le collectif a germé le 13 avril 2019, lors des premiers États généraux des femmes journalistes, à Paris. Cette journée nous a donné envie de se rassembler entre pigistes féministes et solidaires. Et de poursuivre ensemble notre travail.
        .actions
          a(href="/nos-publications") Découvrir nos publications
    Footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Collective from './le-collectif.vue'
import Navbar from '../components/navbar/Navbar.vue';
import Footer from '../components/footer/Footer.vue';

@Component({
  components: {
    Collective,
    Navbar,
  }
})
export default class Index extends Vue {
  public head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  }
}
</script>

<style lang="less" scoped>

.card {
  width: 1200px;
  padding: 60px;
  margin: 30px 0;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  & h1 + p {
    margin: 20px 0;
  }
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
  color: #228782;
}

p {
  margin: 20px 0 50px 0;
  text-align: justify;
  line-height: 1.8em;
}

a {
  margin: 0 auto;
  padding: 15px 20px;
  margin: 0 auto;
  background-color: #228782;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 8px;
  &:hover {
    background-color: #24b5ad;
  }
}

.actions {
  width: max-content;
  margin: 0 auto;
}
</style>

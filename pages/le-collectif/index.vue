<template lang="pug">
  .collective
    Navbar(collective)
    .main-container
      .collective-container
        img(src="~/assets/img/home2.jpg")
        .collective-container-content
          h2 Pourquoi « Les Lianes » ?
          p Parce que comme les lianes, on « grandit » en s’accrochant à un maximum de supports, on multiplie les sources, on les croise, afin de produire une info crédible et vérifiée face aux rumeurs et à la désinformation. Comme elles, on est flexibles sur le terrain. On passe partout pour atteindre notre but : trouver le bon témoignage, avancer dans une enquête… On « grimpe » en prenant le temps. On privilégie les formats longs : l’investigation, le reportage, le documentaire, le podcast, etc. Être curieuses, tenaces, rigoureuses sur l’info, indépendantes, voilà ce qui nous ressemble et qui nous rassemble.
          h2 Notre rencontre
          p Les lianes, comme les liens qui nous unissent, également. Le collectif a germé le 13 avril 2019, lors des premiers États généraux des femmes journalistes, à Paris. Cette journée nous a donné envie de se rassembler entre pigistes féministes et solidaires. Et de poursuivre ensemble notre travail.
      .members-container
        template(v-for="member of collective")
          Card(
            :avatar="member.avatar"
            :avatarAlt="member.avatarAlt"
            :fullName="member.fullName",
            :profession="member.role"
          )
    Footer
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Card from "../../components/members/Card.vue";
import Footer from '../../components/footer/Footer.vue';
import Navbar from '../../components/navbar/Navbar.vue';

export default {
  components: {
    Card,
    Footer,
    Navbar,
  },

  async asyncData({ $content, params, error }) {
    let collective;
    try {
      collective = await $content("collective").fetch();
    } catch (e) {
      error({ message: "Member not found" });
    }

    return {
      collective,
    };
  },
};
</script>

<style lang="less" scoped>

.main-container {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 100px;
  place-items: center;
}

.members-container {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 50px;
}

.collective-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;

  img {
    width: 500px;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
}

</style>

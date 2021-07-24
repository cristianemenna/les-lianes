<template lang="pug">
  .collective
    Navbar(collective @click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main-container
      .collective-container
        img(src="~/assets/img/home-container.jpg")
        .collective-container-content
          h2 Pourquoi « Les Lianes » ?
          p Parce que comme les lianes, on « grandit » en s’accrochant à un maximum de supports, on multiplie les sources, on les croise, afin de produire une info crédible et vérifiée face aux rumeurs et à la désinformation. Comme elles, on est flexibles sur le terrain. On passe partout pour atteindre notre but : trouver le bon témoignage, avancer dans une enquête… On « grimpe » en prenant le temps. On privilégie les formats longs : l’investigation, le reportage, le documentaire, le podcast, etc. Être curieuses, tenaces, rigoureuses sur l’info, indépendantes, voilà ce qui nous ressemble et qui nous rassemble.
          h2 Notre rencontre
          p Les lianes, comme les liens qui nous unissent, également. Le collectif a germé le 13 avril 2019, lors des premiers États généraux des femmes journalistes, à Paris. Cette journée nous a donné envie de se rassembler entre pigistes féministes et solidaires. Et de poursuivre ensemble notre travail.
      .members-container
        template(v-for="member of collective")
          a(:href="'/le-collectif/' + member.slug")
            Card(
              :key="member.slug"
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
import DropDownMenu from "../../components/drop-down-menu/DropDownMenu.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";

export default {
  components: {
    Card,
    DropDownMenu,
    Footer,
    Navbar
  },
  data() {
    return {
      showDropdown: false
    };
  },
  async asyncData({ $content, params, error }) {
    let collective;
    try {
      collective = await $content("collective").fetch();
    } catch (e) {
      error({ message: "Member not found" });
    }

    collective = collective.sort((m1, m2) => {
      const member1 = m1.fullName
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const member2 = m2.fullName
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return member1 < member2 ? -1 : member1 > member2 ? 1 : 0;
    });

    return {
      collective
    };
  }
};
</script>

<style lang="less" scoped>
.collective {
  display: grid;
  justify-content: center;
}

.main-container {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 150px;
  place-items: center;
  @media only screen and (max-width: 800px) {
    grid-gap: 50px;
  }
}

.members-container {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 30px;
  @media only screen and (max-width: 800px) {
    grid-auto-flow: row;
  }
}

.collective-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 450px auto;
  grid-gap: 30px;
  align-items: center;
  text-align: justify;
  @media only screen and (max-width: 800px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    @media only screen and (max-width: 800px) {
      // display: none;
    }
  }
}
</style>

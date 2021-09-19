<template lang="pug">
  .collective
    Navbar(collective @click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main-container(:class="{ overlay : showDropdown }")
      .collective-container
        img(:src="photo")
        .collective-container-content
          template(v-for="text of texts")
            h2 {{ text.title }}
            pre {{ text.content }}
      .members-container
        template(v-for="member of collective")
          a(:href="'/le-collectif/' + member.slug")
            Card(
              :key="member.slug"
              :avatar="member.avatar"
              :avatarAlt="member.avatarAlt"
              :fullName="member.fullName"
              :profession="member.role"
            )
    ScrollToTop
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
    let photos;
    let texts;
    try {
      collective = await $content("collective").fetch();
      photos = await $content("photos").fetch();
      texts = await $content("texts").fetch();
    } catch (e) {
      error({ message: "Content not found" });
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

    const photo = photos[0].home;
    texts = texts[0].contentBlock;

    return {
      collective,
      photo,
      texts,
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
  grid-template-columns: 500px auto;
  grid-gap: 50px;
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
  }
}

pre {
  white-space: pre-wrap;
  text-align: justify;
  font-family: "Noto" !important;
  white-space: pre-line;
}
</style>

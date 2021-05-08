<template lang="pug">
  .collective
    Navbar(collective)
    .main-container
      h1 Le collectif
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

</style>

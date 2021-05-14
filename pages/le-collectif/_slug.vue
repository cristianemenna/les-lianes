<template lang="pug">
  .member
    Navbar
    .main-container
      .member-container
        .member-avatar
          img(:src="collective.avatar" :alt="collective.avatarAlt")
        .member-presentation
          h1 {{ collective.fullName }}
          p.member-role {{ collective.role }}
          p.member-presentation {{ collective.description }}
          p Contact : {{ collective.email }}
      .member-portfolio
        h2 Publications
        p testing
    Footer
      nuxt-content(:document="collective")
</template>

<script>
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar
  },
  async asyncData({ $content, params, error }) {
    let collective;
    try {
      collective = await $content("collective", params.slug).fetch();
    } catch (e) {
      error({ message: "Member not found" });
    }

    return {
      collective
    };
  }
};
</script>

<style lang="less" scoped>

.main-container {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr 1fr;
  grid-gap: 100px;
}

.member-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 200px 9fr 1fr;
  grid-gap: 80px;
  place-items: center;
  .member-avatar {
    grid-column: 2;
    img {
      width: 100%;
      border-radius: 50%;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    }
  }
  .member-presentation {
    grid-column: 3;
    h1 {
      font-size: 30px;
    }
    p {
      text-align: justify;
      &.member-role {
        font-style: italic;
      }
      &.member-presentation {
        margin: 30px 0;
      }
    }
  }
}
</style>

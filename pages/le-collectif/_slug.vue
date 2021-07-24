<template lang="pug">
  .member
    Navbar(@click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main-container(:class="{ overlay : showDropdown }")
      .member-container
        .member-avatar
          img(:src="member.avatar" :alt="member.avatarAlt")
        .member-presentation
          h1 {{ member.fullName }}
          p.member-role {{ member.role }}
          p.member-presentation {{ member.description }}
          .contact
            img(src="~/assets/icons/mail-icon.svg")
            p Contact : {{ member.email }}
      .member-portfolio
        Portfolio(:portfolio="portfolio")
    Footer
</template>

<script>
import DropDownMenu from "../../components/drop-down-menu/DropDownMenu.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";
import Portfolio from "../../components/portfolio/Portfolio.vue";

export default {
  components: {
    DropDownMenu,
    Footer,
    Navbar,
    Portfolio
  },
  data() {
    return {
      showDropdown: false
    };
  },
  async asyncData({ $content, params, error }) {
    let member;
    let portfolio;
    try {
      member = await $content("collective", params.slug).fetch();
      portfolio = await $content("portfolio")
        .where({
          author: {
            $eq: member.fullName
          }
        })
        .fetch();
    } catch (e) {
      error({ message: e });
    }

    return {
      member,
      portfolio
    };
  }
};
</script>

<style lang="less" scoped>
.main-container {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 150px;
}

.member-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px auto;
  grid-gap: 50px;
  place-items: center;
  align-content: left;
  @media only screen and (max-width: 800px) {
    grid-auto-flow: row;
    grid-template-rows: 1fr auto;
    grid-template-columns: unset;
  }
  .member-avatar {
    grid-column: 1;
    @media only screen and (max-width: 800px) {
    }
    img {
      width: 100%;
      border-radius: 50%;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
      @media only screen and (max-width: 800px) {
        width: 75%;
      }
    }
  }
  .member-presentation {
    grid-column: 3;
    @media only screen and (max-width: 800px) {
      grid-column: unset;
    }
    h1 {
      font-size: 30px;
    }
    p {
      text-align: justify;
      &.member-role {
        font-family: "Raleway Bold";
        font-style: italic;
      }
      &.member-presentation {
        margin: 30px 0;
      }
    }
  }
}

.contact {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 5px;
  img {
    width: 25px;
    height: 25px;
  }
}
</style>

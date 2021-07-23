<template lang="pug">
  .tag-item
    Navbar(@click="opened => showDropdown = opened")
    DropDownMenu(v-if="showDropdown")
    .main-container
      .tag-container
        span {{ tag }}
    Footer
</template>

<script>
import DropDownMenu from "../../components/drop-down-menu/DropDownMenu.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/navbar/Navbar.vue";

export default {
  components: {
    DropDownMenu,
    Footer,
    Navbar
  },
  data() {
    return {
      showDropdown: false,
    }
  },
  async asyncData({ $content, params, error }) {
    let tag;
    try {
      tag = await $content("tag", params.slug).fetch();
    } catch (e) {
      error({ message: "Post not found" });
    }

    return {
      tag
    };
  }
};
</script>

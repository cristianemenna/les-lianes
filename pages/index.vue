<template lang="pug">
  .les-lianes
    Navbar
    Collective
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

<template lang="pug">
  Collective
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Collective from './le-collectif.vue'

@Component({
  components: {
    Collective,
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

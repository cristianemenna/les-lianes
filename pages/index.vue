<template lang="pug">
  div
    Collective
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Collective from './les-lianes.vue'

@Component({
  components: {
    Collective,
  }
})
export default class Index extends Vue {}
</script>

<style lang="less" scoped>


</style>

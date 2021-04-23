<template lang="pug">
  .portfolio-card
    h2 {{ title }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    title: String,
  }
})
export default class PortfolioCard extends Vue {}
</script>

<style lang="less" scoped>
.card {
  height: 300px;
  width: 200px;
  background-color: cadetblue;
  color: white
}
</style>

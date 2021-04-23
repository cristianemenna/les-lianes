<template lang="pug">
  .card
    h2 {{ fullName }}
    span {{ profession }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    fullName: String,
    profession: String,
  }
})
export default class Card extends Vue {}
</script>

<style lang="less" scoped>
.card {
  height: 300px;
  width: 200px;
  background-color: cadetblue;
  color: white
}
</style>

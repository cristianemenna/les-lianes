<template lang="pug">
  .footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
.footer {
  height: 80px;
  background-color: cadetblue;
  color: white
}
</style>

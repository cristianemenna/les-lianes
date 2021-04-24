<template lang="pug">
  .navbar
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {}
</script>

<style lang="less" scoped>
.navbar {
  height: 80px;
  background-color: cadetblue;
  color: white
}
</style>

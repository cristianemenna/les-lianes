<template lang="pug">
  .dropdown
    ul
      li
        a(href="/nos-publications") Nos publications
      hr
      li
        a(href="/le-collectif") Qui sommes-nous ?
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class DropDownMenu extends Vue {
  public opened = false;
}
</script>

<style lang="less" scoped>
.dropdown {
  width: 100%;
  height: 90px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5) !important;
  right: 0;
  top: 100;
  display: grid;
  align-items: center;
  justify-content: start;
}

ul {
  li {
    list-style: none;
    margin: 8px 0px;
  }
}
</style>

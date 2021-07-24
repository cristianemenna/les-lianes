<template lang="pug">
  transition(name="slide-down" appear)
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
  position: fixed;
  width: 100%;
  height: 90px;
  z-index: 1;
  background-color: #ffffff !important;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  right: 0;
  top: 80px;
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

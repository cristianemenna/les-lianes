<template lang="pug">
  .footer
    ul
      li Les Lianes
      li © {{ currentYear }}

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  get currentYear() {
    return new Date().getFullYear();
  }
}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 100px;
  bottom: 0;
  margin-top: 30px;
  background-color: #FFFFFF;
  color: #000000;
  display: grid;
  align-content: center;
  justify-content: center;
  box-shadow: 0 -1px 4px 0px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 800px) {
    height: 80px;
  }
}

ul {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
  li {
    list-style: none;
    &:first-of-type {
      font-family: 'Raleway';
    }
  }
}
</style>

<template lang="pug">
  .footer
    ul
      li Les Lianes
      li © {{ currentYear }}

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

  get currentYear() {
    return new Date().getFullYear();
  }
  
}
</script>

<style lang="less" scoped>
.footer {
  height: 120px;
  background-color: #FFFFFF;
  color: #000000;
  display: grid;
  align-content: center;
  justify-content: center;
}

ul {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
  li {
    list-style: none;
  }
}
</style>

<template lang="pug">
  .member-portfolio
    template(v-for="post of portfolio")
      a(:href="'/nos-publications/' + post.slug")
        .portfolio-item
          img(:src="post.image")
          p {{ post.title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  props: {
    portfolio: Array,
  }
})
export default class Portfolio extends Vue {}
</script>

<style lang="less" scoped>
.member-portfolio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 15px;
  img {
    width: 300px;
    height: 250px;
    object-fit: cover ;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  }
}

.portfolio-item {
  display: grid;
  grid-auto-flow: row;
  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
    z-index: 0;
  }
  p {
    margin-top: 15px;
    font-family: 'Raleway Bold';
  }
}
</style>

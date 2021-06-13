<template lang="pug">
  .portfolio
    template(v-for="post of portfolioFilteredByTag")
      .portfolio-item
        a(:href="'/nos-publications/' + post.slug")
          img(:src="post.image")
        p {{ post.title }}
    span {{ tag }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Tags from "../tags/Tags.vue";

@Component({
  components: {
    Tags,
  }
})
export default class Portfolio extends Vue {

  @Prop()
  public tag: string;

  @Prop()
  public portfolio: any[];

  get portfolioFilteredByTag() {
    const portofolioWithTags = this.portfolio.filter(p => p.tag);
    return portofolioWithTags.filter(p => p.tag.includes(this.tag));
  }

}
</script>

<style lang="less" scoped>
.portfolio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 15px;
  img {
    width: 300px;
    height: 250px;
    object-fit: cover ;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    &:hover {
      filter: brightness(0.8);
    }
  }
}

.portfolio-item {
  display: grid;
  grid-auto-flow: row;
  &:hover {
    z-index: 0;
  }
  p {
    margin-top: 15px;
    font-family: 'Raleway Bold';
  }
}
</style>

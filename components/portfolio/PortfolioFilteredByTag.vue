<template lang="pug">
  .portfolio-wrapper
    template(v-for="post of portfolioFilteredByTag")
      .portfolio-item
        a(:href="'/nos-publications/' + post.slug")
          img(:src="post.image")
        p {{ post.title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Portfolio extends Vue {
  @Prop()
  public tag!: string;

  @Prop()
  public portfolio!: any[];

  get portfolioFilteredByTag() {
    const portfolioWithTags = this.portfolio.filter(p => p.tag);
    return portfolioWithTags.filter(p => p.tag.includes(this.tag));
  }
}
</script>

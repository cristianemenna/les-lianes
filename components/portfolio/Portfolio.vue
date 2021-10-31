<template lang="pug">
  .portfolio-wrapper
    template(v-for="item of portfolioItems")
      .portfolio-item
        a(:href="'/nos-publications/' + item.slug")
          img(:src="item.image")
        Tags(:tags="item.tag" link)
        a(:href="'/nos-publications/' + item.slug")
          p {{ item.title }}
    .showMore(v-if="itemsToShow <= portfolio.length" @click="itemsToShow += 3") Voir plus
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Tags from "../tags/Tags.vue";

@Component({
  components: {
    Tags
  }
})
export default class Portfolio extends Vue {
  @Prop({ required: true })
  public portfolio!: any[];

  @Prop({ default: false })
  public slug!: boolean;
  public itemsToShow = 9;

  public created() {
    if (this.portfolio.length < this.itemsToShow) {
      this.itemsToShow = this.portfolio.length;
    }
  }

  get portfolioItems() {
    if (!this.slug) {
      return this.portfolio.filter((item, index) => index < this.itemsToShow);
    }
    this.itemsToShow = this.portfolio.length + 1;
    return this.portfolio;
  }
}
</script>

<style lang="less" scoped>
.showMore {
  margin: 30px auto;
  padding: 10px 50px;
  grid-column: 2;
  background-color: #228782;
  color: #ffffff;
  text-align: center;
  border-radius: 8px;
  @media only screen and (max-width: 800px) {
    margin: unset;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(37, 156, 147, 0.8);
  }
}

.portfolio-item {
  margin-bottom: 60px;
  p {
    margin-top: 10px;
  }
}
</style>

<template lang="pug">
  .portfolio-wrapper
    template(v-for="itemIndex in itemsToShow")
      template(v-if="itemIndex <= portfolio.length")
        .portfolio-item
          a(:href="'/nos-publications/' + portfolio[itemIndex - 1].slug")
            img(:src="portfolio[itemIndex -1].image")
            Tags(:tags="portfolio[itemIndex -1].tag" link)
          p {{ portfolio[itemIndex -1].title }}
    .showMore(v-if="itemsToShow < portfolio.length" @click="itemsToShow += 3") Voir plus
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
  @Prop()
  public portfolio!: any[];

  public itemsToShow = 9;

  public mounted() {
    const showMoreButton = this.$el.querySelector(".showMore") as HTMLElement;
    showMoreButton.addEventListener("click", () => {
      const portfolioItem = this.$el.querySelectorAll(
        ".portfolio-item"
      );
      console.log(portfolioItem);
      for (let p of portfolioItem as any) {
        p.style.paddingTop = "15px";
      }
    });
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
  &:hover {
    cursor: pointer;
    background-color: rgba(37, 156, 147, 0.8);
  }
}
</style>

<template lang="pug">
  .portfolio-wrapper
    template(v-for="itemIndex in itemsToShow")
      template(v-if="itemIndex <= portfolio.length")
        .portfolio-item
          span {{ itemIndex }}
          a(:href="'/nos-publications/' + portfolio[itemIndex - 1].slug")
            img(:src="portfolio[itemIndex -1].image")
          //- Tags(:tags="portfolio[itemIndex -1].tag" link)
          a(:href="'/nos-publications/' + portfolio[itemIndex - 1].slug")
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
  @Prop({ required: true })
  public portfolio!: any[];

  public itemsToShow = 9;

  public created() {
    if (this.portfolio.length < this.itemsToShow) {
      this.itemsToShow = this.portfolio.length;
    }
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

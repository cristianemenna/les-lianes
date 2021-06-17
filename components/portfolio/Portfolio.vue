<template lang="pug">
  .portfolio-wrapper
    template(v-for="itemIndex in itemsToShow")
      template(v-if="itemIndex <= portfolio.length")
        .portfolio-item
          a(:href="'/nos-publications/' + portfolio[itemIndex - 1].slug")
            img(:src="portfolio[itemIndex -1].image")
            Tags(:tags="portfolio[itemIndex -1].tag" link)
          p {{ portfolio[itemIndex -1].title }}
    input(v-if="itemsToShow < portfolio.length" type="button" value="Voir plus" @click="itemsToShow += 3")
    p {{ itemsToShow }}
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

  public itemsToShow = 3;
}
</script>

<style lang="less" scoped>

input:hover {
  cursor: pointer;
}

</style>
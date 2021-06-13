<template lang="pug">
  .portfolio-wrapper
    template(v-for="post of portfolio")
      .portfolio-item
        a(:href="'/nos-publications/' + post.slug")
          img(:src="post.image")
          Tags(:tags="post.tag" link)
        p {{ post.title }}
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
}
</script>

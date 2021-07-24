<template lang="pug">
  .tags
    template(v-for="tag of tags")
      a(v-if="link" :href="'/tags?=' + tag")
        span.tag {{ tag }}
      span.tag(v-else @click="$emit('click', tag)") {{ tag }}


</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  props: {
    tags: Array,
    link: Boolean,
  }
})
export default class Tags extends Vue {}
</script>

<style lang="less" scoped>
.tags {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
}

.tag {
  margin-top: 10px;
  padding: 4px 10px;
  background-color: rgba(37, 156, 147, 0.6);
  color: #ffffff;
  border-radius: 15px;
  font-size: 11px;
  font-style: italic;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: rgba(37, 156, 147, 0.8);
  }
}
</style>

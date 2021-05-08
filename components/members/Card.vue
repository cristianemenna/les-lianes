<template lang="pug">
  .card
    img(:src="avatar" :alt="avatarAlt")
    span.card-member-title {{ fullName }}
    span.card-member-description {{ profession }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    avatar: String,
    avatarAlt: String,
    fullName: String,
    profession: String,
  }
})
export default class Card extends Vue {}
</script>

<style lang="less" scoped>
.card {
  width: 200px;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
}

img {
  width: 100%;
}

.card-member-title {
  font-size: 1.1em;
}

.card-member-description {
  font-size: 0.9em;
  font-style: italic;
}
</style>

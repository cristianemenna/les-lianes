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
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 30px;
    grid-gap: unset;
    grid-row-gap: 10px;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
    background-color: rgba(255, 255, 255, 0.1);
  }
}

img {
  width: 100%;
  height: auto;
}

.card-member-title {
  font-size: 1.1em;
  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
    font-weight: bold;
  }
}

.card-member-description {
  font-size: 0.9em;
  font-style: italic;
  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }
}
</style>

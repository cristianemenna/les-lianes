<template lang="pug">
  .collective
    h1 Le collectif
    template(v-for="member of collective")
      Card(:fullName="member.fullName", :profession="member.profession")
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Card from "../components/members/Card.vue";
import { CollectiveType } from "../types/CollectiveType";

@Component({
  components: {
    Card
  }
})
export default class Collective extends Vue {
  public collective: CollectiveType[] = [];

  public created() {
    this.collective = [
      {
        fullName: "Emma Roulin",
        profession: "Journaliste"
      },
      {
        fullName: "Adama Sissoko",
        profession: "Journaliste"
      },
      {
        fullName: "Marion Vercelot",
        profession: "Photographe"
      }
    ];
  }
}
</script>

<template>
  <div class="main">
    <div class="container">
      <img id="logo" src="~/assets/img/logo.png" alt="logo"/>
      <div v-if="error.statusCode === 404">
        <h1>Page inexistante</h1>
        <p>Cette page n'existe pas sur notre site</p>
      </div>
      <h1 v-else>Nous avons trouvé une erreur.</h1>
      <NuxtLink to="/">Retour sur la page d'accueil</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>

<style lang="less" scoped>
img {
  width: 300px;
}

a {
  &:hover {
    cursor: pointer;
    color: #228782;
  }
}

.main {
  grid-template-rows: 1fr 1fr;
  display: grid;
  grid-auto-flow: row;
}

.container {
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-content: center;
  grid-row: 2;
  text-align: center;
  div, a {
    margin-top: 30px;
  }
  a {
    font-weight: bold;
  }
}
</style>

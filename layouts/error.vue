<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page inexistante</h1>
    <h1 v-else>Nous avons trouvé une erreur.</h1>
    <p>Cette page n'existe pas sur notre site</p>
    <NuxtLink to="/">Retour sur la page d'accueil</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<template>
  <main class="">
    <Navbar />
    <RouterView></RouterView>
  </main>
</template>

<script>
  import { RouterView } from 'vue-router';
  import Navbar from "./components/Navbar.vue"
  export default {
    name: 'App',
    components: {
      Navbar,
    }
  }
</script>

<style scoped>

</style>
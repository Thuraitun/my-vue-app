<template>
  <Navbar @open-login-modal="isLoginOpen= true" />
  <div class="">
    <RouterView></RouterView>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login= "isLoginOpen = false"/>
</template>

<script>
  import { RouterView } from 'vue-router';
  import Navbar from "./components/Navbar.vue";
  import LoginModal from "./components/LoginModal.vue";

  export default {
    name: 'App',
    components: {
      Navbar,
      LoginModal
    },
    data() {
      return {
        isLoginOpen: false,
      }
    },
  }
</script>

<style scoped>

</style>
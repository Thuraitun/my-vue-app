<template>
    <section @click="$emit('close-login')" class="fixed top-0 z-20 w-screen h-screen bg-gray-500 opacity-50"></section>
  
    <!-- login section -->
    <section class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 w-1/3 p-2 m-auto bg-gray-200 rounded-lg shadow">
          <div class="p-2">
            <h1 class="text-2xl font-bold text-center text-red-600">Login</h1>
            <form class="p-2 my-3" @submit.prevent="submit">
              <div class="my-4">
                <label for="email">Email or Username</label>
                <input v-model="form.email" type="text" id="email" class="w-full p-2 rounded-lg shadow" placeholder="Enter your email or username">
              </div>
              <div class="my-4">
                <label for="password">Password</label>
                <input v-model="form.password" type="password" id="password" class="w-full p-2 rounded-lg shadow" placeholder="Enter your password">
              </div>
              <div class="my-4">
                <button class="w-full py-2 rounded-lg shadow-sm bg-gradient-to-r from-red-500 to-pink-800" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LoginModal',
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      submit() {
        // Add your login logic here
        // For example, you can emit an event with the form data
        this.$emit('login', this.form);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  
<template>
  <form @submit="handleSubmit" class="login-form">
    <input type="email" placeholder="E-mail" />
    <input type="password" placeholder="Senha" />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    async handleSubmit() {
      return 1
    }
  }
  // $axios.$post('/login', '{email, password}')
})
</script>

<style lang="scss" scoped></style>

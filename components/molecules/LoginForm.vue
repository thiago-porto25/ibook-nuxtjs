<template>
  <form @submit="handleSubmit" class="login-form">
    <input type="email" placeholder="E-mail" />
    <input type="password" placeholder="Senha" />
    <button type="submit">Entrar</button>
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

<style lang="scss" scoped>
.login-form {
  input {
    padding: 0 10px;
    border: 1px solid color('light');
    background-color: color('dark', 'darkest');
    color: color('light');

    &:focus,
    &:hover {
      box-shadow: 0 0 3px #ffffff99;
    }

    &:first-of-type {
      margin-bottom: 5px;
    }
  }

  button {
    cursor: pointer;
    margin-top: 30px;
    font-weight: 500;

    &:hover {
      background-color: color('dark');
      color: color('light');
    }
  }

  input,
  button {
    height: 2rem;
    width: 100%;
    border-radius: 20px;
    transition: 150ms ease-in-out;
  }
}
</style>

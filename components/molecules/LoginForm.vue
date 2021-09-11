<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <input minlength="6" type="email" placeholder="E-mail" v-model="email" />
    <input
      minlength="6"
      type="password"
      placeholder="Senha"
      v-model="password"
    />
    <button type="submit">Entrar</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async handleSubmit() {
      auth.validate({ email: this.email, password: this.password })
    }
  }
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

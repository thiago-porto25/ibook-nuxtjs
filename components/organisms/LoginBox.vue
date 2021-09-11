<template>
  <div class="login-box">
    <div class="logo-container">
      <Logo />
    </div>
    <LoginGreeting />
    <LoginForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.login-box {
  background-color: color('dark', 'darkest');
  max-width: 330px;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-rows: auto auto;
  padding: 50px 30px;
  gap: 30px;

  @include screen('small') {
    height: 100%;
    max-width: 100%;
  }

  .logo-container {
    width: 100px;
  }
}
</style>

<template>
  <div class="login-greeting">
    <h1>Bem vindo(a) ao Dashboard<br /><b>Entre na sua conta</b></h1>
  </div>
</template>

<style lang="scss" scoped>
.login-greeting {
  color: color('light');

  h1 {
    font-size: 16px;
    font-weight: normal;

    @include screen('small') {
      font-size: 18px;
    }

    b {
      font-size: 18px;

      @include screen('small') {
        font-size: 20px;
      }
    }
  }
}
</style>

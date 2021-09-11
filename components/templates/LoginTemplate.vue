<template>
  <div class="login-template">
    <Container>
      <LoginBox />
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.login-template {
  background-color: color('light');
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    @include screen('small') {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>

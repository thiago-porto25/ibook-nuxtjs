<template>
  <div class="error">
    <Container>
      <img src="@/assets/img/404.svg" alt="404 - not found!" />
      <p>
        A página que você está procurando<br />
        não existe ou foi removida.
      </p>
      <button><NuxtLink to="/">Voltar para Home</NuxtLink></button>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeMount() {
    const body = document.querySelector('body') as HTMLElement
    body.style.overflow = 'hidden'
  },

  beforeDestroy() {
    const body = document.querySelector('body') as HTMLElement
    body.style.overflow = 'initial'
  }
})
</script>

<style lang="scss" scoped>
.error {
  background-color: color('dark', 'darkest');
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .container {
    display: grid;
    grid-template-rows: auto auto auto;
    justify-items: center;
    align-items: center;
    gap: 60px;

    p {
      color: color('light');
      text-align: center;
    }

    img {
      max-width: 350px;
      width: 80%;
    }

    button {
      padding: 5px 10px;
      cursor: pointer;

      a {
        color: color('dark', 'darkest');
      }
    }
  }
}
</style>

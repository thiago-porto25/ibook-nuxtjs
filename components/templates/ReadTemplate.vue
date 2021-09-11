<template>
  <div class="read-template">
    <h1>{{ $book.title }}</h1>
    <ReadSlider />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    }
  }
})
</script>

<style lang="scss" scoped>
.read-template {
  h1 {
    text-align: center;
  }
}
</style>

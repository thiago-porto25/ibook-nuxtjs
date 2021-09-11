<template>
  <ReadTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
import { Book } from '@/models'

export default Vue.extend({
  layout: 'ibook',

  validate({ params }) {
    return books.$all.some((book: Book) => book.id === parseInt(params.id, 10))
  }
})
</script>

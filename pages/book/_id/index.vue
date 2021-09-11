<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
import { Book } from '@/models'

export default Vue.extend({
  layout: 'ibook',

  async asyncData({ params }) {
    await books.show({ id: params.id as any })
  },

  async validate({ params }) {
    await books.index()

    const result = books.$all.some(
      (book: Book) => book.id === parseInt(params.id, 10)
    )

    return result
  },

  head() {
    return {
      title: books.$single.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: books.$single.description
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped></style>

<template>
  <div class="read-slide">
    <div class="book-page-container">
      <SlideItem v-for="page in $book.pages" :key="page.id" :page="page" />
    </div>
    <div class="arrows-container">
      <SlideArrow direction="left" />
      <SlideArrow direction="right" />
    </div>
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
.read-slide {
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
}
.book-page-container {
  max-width: 700px;
  height: 988px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: white;
  box-shadow: 2px 2px 10px #00000044;
  border: 1px solid rgba(211, 211, 211, 0.767);
}

.arrows-container {
  display: flex;
  width: fit-content;
  gap: 20px;
  margin-left: auto;
  margin-top: 20px;
}
</style>

<template>
  <div class="slide-item">
    <p v-html="page.text"></p>
    <span class="page-number">{{ page.pageNumber }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Page } from '@/models'

export default Vue.extend({
  props: {
    page: { type: Object, required: true } as PropOptions<Page>
  }
})
</script>

<style lang="scss" scoped>
.slide-item {
  min-width: 100%;
  padding: 50px 40px;
  position: relative;

  .page-number {
    position: absolute;
    bottom: 20px;
    left: 49%;
  }
}
</style>

<template>
  <div class="slide-arrow">
    <img
      v-if="direction === 'left'"
      class="arrow left"
      src="@/assets/img/arrow.svg"
      alt="left arrow"
    />
    <img
      v-else-if="direction === 'right'"
      class="arrow right"
      src="@/assets/img/arrow.svg"
      alt="right arrow"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    direction: { type: String, required: true }
  }
})
</script>

<style lang="scss" scoped>
.slide-arrow {
  cursor: pointer;

  .arrow {
    background-color: black;
    padding: 10px 15px;
  }

  .right {
    transform: rotate(180deg);
  }
}
</style>

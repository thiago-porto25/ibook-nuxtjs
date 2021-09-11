<template>
  <div class="dashboard-box">
    <DashboardGreeting />
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    logout() {
      console.log('logging out')
    }
  }
})
</script>

<style lang="scss" scoped>
.dashboard-box {
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  gap: 30px;

  button {
    padding: 5px 15px;
    font-weight: bold;
    background-color: color('dark', 'darkest');
    color: color('light');
    cursor: pointer;
  }
}
</style>

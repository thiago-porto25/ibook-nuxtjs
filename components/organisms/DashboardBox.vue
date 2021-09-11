<template>
  <div class="dashboard-box">
    <DashboardGreeting />
    <button><NuxtLink to="/login">Logout</NuxtLink></button>
  </div>
</template>

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

    a {
      color: inherit;
    }
  }
}
</style>

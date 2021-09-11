<template>
  <div class="dashboard-greeting">
    <img src="@/assets/img/dashboard.svg" alt="dashboard" />
    <PageTitle text="Você está no " strong="Dashboard" />
  </div>
</template>

<style lang="scss" scoped>
.dashboard-greeting {
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  gap: 30px;

  img {
    max-width: 100px;
  }
}
</style>

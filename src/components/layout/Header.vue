<template>
  <header>
    <div id="navbar" class="navbar">
      <h1 class="logo">
        <i class="fas fa-viruses"></i>
      </h1>
      <router-link to="/">United States</router-link>
      <router-link to="/global">Global</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background: #333;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  width: 1400px;
  height: 70px;
  margin: auto;
}

.navbar .logo {
  margin-left: 15px;
}
</style>

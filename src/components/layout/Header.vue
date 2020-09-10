<template>
  <header>
    <div id="navbar" class="navbar">
      <h1 class="logo">
        <i class="fas fa-viruses"></i>
      </h1>
      <nav>
        <router-link to="/">United States</router-link>
        <router-link to="/global">Global</router-link>
        <router-link to="/about">About</router-link>
      </nav>
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

.navbar a {
  color: #fff;
  padding: 10px 20px;
  margin: 0 5px;
  text-decoration: none;
}

.navbar a:hover {
  border-bottom: red 2px solid;
}
</style>

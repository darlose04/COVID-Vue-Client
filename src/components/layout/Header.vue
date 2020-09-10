<template>
  <header class="header">
    <div id="nav">
      <h1 class="logo">
        <i class="fas fa-viruses"></i>
      </h1>
      <router-link to="/">United States</router-link> |
      <router-link to="/global">Global</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
.header [ background: #333; ]
<style scoped></style>

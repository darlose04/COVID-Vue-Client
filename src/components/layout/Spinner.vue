<template>
  <div class="spinner">
    <img v-bind:spinner="spinner" alt="Loading Gif" />
  </div>
</template>

<script>
import spinner from "../../assets/Spin-1s-200px.gif";

export default {
  name: "Spinner",
};
</script>

<style scoped>
.spinner {
  text-align: center;
  margin-top: 5rem;
}
</style>

<template>
  <div class="data-wrapper">
    US Map will go here
  </div>
</template>

<script>
import { SvgMap } from 'vue-svg-map';
import USA from "@svg-maps/usa";

export default {
  name: "USMap"
}
</script>

<style scoped>
  .data-wrapper {
  width: 1400px;
  margin: auto;
}
</style>
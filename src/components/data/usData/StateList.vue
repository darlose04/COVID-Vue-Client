<template>
  <div class="list-data">
    <Totals />
    <div class="state-list">
      <h2>States / Territories</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Totals from "./Totals";

export default {
  name: "StateList",
  components: {
    Totals,
  },
};
</script>

<style scoped>
.list-data {
  margin-left: 1rem;
  padding: 1rem 1rem;
  max-height: 1000px;
}
</style>

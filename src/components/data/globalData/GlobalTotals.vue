<template>
  <div class="global-totals">
    <h2>Global Totals</h2>
    <ul>
      <li>Confirmed:</li>
      <li>Deaths:</li>
      <li>Active:</li>
      <li>Recovered:</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GlobalTotals",
  methods: {
    ...mapActions("globalDailyReport", ["globalTotals"]),
  },
};
</script>

<style scoped>
.global-totals {
  margin-bottom: 1rem;
  border-bottom: 1px dotted black;
  height: 130px;
}

.global-totals h2 {
  border-bottom: 2px solid black;
  margin-bottom: 0.5rem;
}

.global-totals h2:hover {
  cursor: pointer;
  color: red;
}
</style>

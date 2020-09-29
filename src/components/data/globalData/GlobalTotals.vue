<template>
  <div class="global-totals">
    <h2>Global Totals</h2>
    <ul>
      <li>Confirmed: {{ this.globalTotals.totalCases }}</li>
      <li>Deaths: {{ this.globalTotals.totalDeaths }}</li>
      <li>Active: {{ this.globalTotals.totalActive }}</li>
      <li>Recovered: {{ this.globalTotals.totalRecovered }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GlobalTotals",
  methods: {
    ...mapActions(["createGlobalTotals"]),
  },
  computed: {
    ...mapGetters({
      globalTotals: "getGlobalTotals",
    }),
  },
  created() {
    this.createGlobalTotals();
  },
  mounted() {
    console.log(this.globalTotals);
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

<template>
  <div class="global-totals">
    <h2>Global Totals</h2>
    <ul>
      <li>Confirmed: {{ numWithCommas(this.globalTotals.totalCases) }}</li>
      <li>Deaths: {{ numWithCommas(this.globalTotals.totalDeaths) }}</li>
      <li>Active: {{ numWithCommas(this.globalTotals.totalActive) }}</li>
      <li>Recovered: {{ numWithCommas(this.globalTotals.totalRecovered) }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GlobalTotals",

  methods: {
    ...mapActions(["createGlobalTotals"]),
    numWithCommas: function(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: {
    ...mapGetters({
      globalTotals: "getGlobalTotals",
    }),
  },
  created() {
    this.createGlobalTotals();
  },
  mounted() {},
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

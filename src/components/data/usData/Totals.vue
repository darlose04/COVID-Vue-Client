<template>
  <div class="totals">
    <h2 v-on:click="changeNameOfState" class="US-Totals">
      U.S. Totals
    </h2>
    <ul>
      <li>Confirmed: {{ numWithCommas(this.usTotals.totalCases) }}</li>
      <li>Deaths: {{ numWithCommas(this.usTotals.totalDeaths) }}</li>
      <li>Active: {{ numWithCommas(this.usTotals.totalActive) }}</li>
      <li>
        Hospitalized: <!-- {{ numWithCommas(this.usTotals.totalHospitalized) }} --> Data unavailable
      </li>
      <li>Tested: {{ numWithCommas(this.usTotals.totalTested) }}</li>
      <li>Recovered: {{ numWithCommas(this.usTotals.totalRecovered) }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Totals",
  props: ["changeNameOfState"],
  methods: {
    ...mapActions(["createUSTotals"]),
    numWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: {
    ...mapGetters({
      usTotals: "getUSTotals",
    }),
  },
  created() {
    this.createUSTotals();
  },
};
</script>

<style scoped>
.totals {
  margin-bottom: 1rem;
  border-bottom: 1px dotted black;
  height: 170px;
}

.totals h2 {
  border-bottom: 2px solid black;
  margin-bottom: 0.5rem;
}

.US-Totals:hover {
  cursor: pointer;
  color: red;
}
</style>

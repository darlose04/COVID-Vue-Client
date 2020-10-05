<template>
  <div class="totals">
    <h2 v-on:click="changeStateName" class="US-Totals">
      U.S. Totals
    </h2>
    <ul>
      <li>Confirmed: {{ this.usTotals.totalCases }}</li>
      <li>Deaths: {{ this.usTotals.totalDeaths }}</li>
      <li>Active: {{ this.usTotals.totalActive }}</li>
      <li>Hospitalized: {{ this.usTotals.totalHospitalized }}</li>
      <li>Tested: {{ this.usTotals.totalTested }}</li>
      <li>Recovered: {{ this.usTotals.totalRecovered }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Totals",
  props: ["changeStateName"],
  methods: {
    ...mapActions(["createUSTotals"]),
    // numWithCommas(num) {
    //   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // },
  },
  computed: {
    ...mapGetters({
      usTotals: "getUSTotals",
    }),
    // getTotalData: function() {
    //   let totalCases = 0;
    //   let totalDeaths = 0;
    //   let totalActive = 0;
    //   let totalHospitalized = 0;
    //   let totalTested = 0;
    //   let totalRecovered = 0;
    //   this.dailyReport.map((state) => {
    //     totalCases += state.Confirmed;
    //     totalDeaths += state.Deaths;
    //     totalActive += state.Active;
    //     totalHospitalized += state.People_Hospitalized;
    //     totalTested += state.People_Tested;
    //     totalRecovered += state.Recovered;
    //   });
    //   return {
    //     totalCases,
    //     totalDeaths,
    //     totalActive,
    //     totalHospitalized,
    //     totalTested,
    //     totalRecovered,
    //   };
    // },
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

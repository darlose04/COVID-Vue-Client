<template>
  <div class="totals">
    <h2 class="US-Totals">U.S. Totals</h2>
    <ul>
      <li>Confirmed: {{ this.totalCases }}</li>
      <li>Deaths: {{ this.totalDeaths }}</li>
      <li>Active: {{ this.totalActive }}</li>
      <li>Hospitalized: {{ this.totalHospitalized }}</li>
      <li>Tested: {{ this.totalTested }}</li>
      <li>Recovered: {{ this.totalRecovered }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Totals",
  props: ["dailyReport"],
  data() {
    return {
      totalCases: 0,
      totalDeaths: 0,
      totalActive: 0,
      totalHospitalized: 0,
      totalTested: 0,
      totalRecovered: 0,
    };
  },
  created() {
    this.dailyReport.map((state) => {
      this.totalCases += state.Confirmed;
      this.totalDeaths += state.Deaths;
      this.totalActive += state.Active;
      this.totalHospitalized += state.People_Hospitalized;
      this.totalTested += state.People_Tested;
      this.totalRecovered += state.Recovered;
    });
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

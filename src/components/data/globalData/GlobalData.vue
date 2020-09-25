<template>
  <div>
    <h1>This is the page for displaying the global data</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GlobalData",
  methods: {
    ...mapActions([
      "fetchGlobalCases",
      "fetchGlobalDeaths",
      "fetchGlobalDailyReport",
      "getCountryTotals",
    ]),
  },
  computed: mapGetters([
    "allCases",
    "allDeaths",
    "dailyReport",
    "countryTotals",
  ]),
  created() {
    this.fetchGlobalCases();
    this.fetchGlobalDeaths();
    this.fetchGlobalDailyReport();
    this.getCountryTotals();
  },
  mounted() {
    // console.log(this.allDailyReport);
    console.log(this.countryTotals);
  },
};
</script>

<style scoped></style>

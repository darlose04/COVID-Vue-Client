<template>
  <div>
    <Disclaimer />
    <div>
      <!-- <Spinner /> -->
      <CountryList />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Disclaimer from "../../layout/Disclaimer";
// import Spinner from "../../layout/Spinner";
import CountryList from "./CountryList";

export default {
  name: "GlobalData",
  components: {
    Disclaimer,
    // Spinner,
    CountryList,
  },
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

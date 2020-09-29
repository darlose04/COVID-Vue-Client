<template>
  <div>
    <Disclaimer />
    <div v-if="getDailyReport.length < 3500">
      <Spinner />
    </div>
    <div v-else>
      <CountryList />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import CountryList from "./CountryList";

export default {
  name: "GlobalData",
  components: {
    Disclaimer,
    Spinner,
    CountryList,
  },
  methods: {
    ...mapActions([
      // "fetchGlobalCases",
      // "fetchGlobalDeaths",
      "fetchGlobalDailyReport",
      "createCountryTotals",
    ]),
  },
  computed: mapGetters([
    // "allCases",
    // "allDeaths",
    "getDailyReport",
    "getCountryTotals",
  ]),
  created() {
    // this.fetchGlobalCases();
    // this.fetchGlobalDeaths();
    this.fetchGlobalDailyReport();
    this.createCountryTotals();
  },
  mounted() {
    // console.log("GlobalData Component: ");
  },
};
</script>

<style scoped></style>

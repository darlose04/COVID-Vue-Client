<template>
  <div class="data-wrapper">
    <Disclaimer />
    <div v-if="getGlobalDailyReport.length < 3500">
      <Spinner />
    </div>
    <div class="data" v-else>
      <CountryList v-bind:changeNameOfCountry="changeNameOfCountry" />
      <div class="charts">
        <GlobalLineCharts v-bind:countryName="countryName" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import CountryList from "./CountryList";
import GlobalLineCharts from "./GlobalLineCharts";

export default {
  name: "GlobalData",
  components: {
    Disclaimer,
    Spinner,
    CountryList,
    GlobalLineCharts,
  },
  data() {
    return {
      countryName: "",
    };
  },
  methods: {
    ...mapActions([
      "fetchGlobalCases",
      "fetchGlobalDeaths",
      "fetchGlobalDailyReport",
      "createCountryTotals",
    ]),
    changeNameOfCountry(event) {
      if (event.target.innerText === "Global Totals") {
        this.countryName = "";
      } else {
        this.countryName = event.target.innerText;
      }
    },
  },
  computed: mapGetters([
    "getGlobalCases",
    "getGlobalDeaths",
    "getGlobalDailyReport",
    "getCountryTotals",
  ]),
  created() {
    this.fetchGlobalCases();
    this.fetchGlobalDeaths();
    this.fetchGlobalDailyReport();
    this.createCountryTotals();
  },
  mounted() {},
  beforeUpdate() {},
};
</script>

<style scoped>
.data-wrapper {
  width: 1400px;
  margin: auto;
}

.data {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  height: 2000px;
  margin-bottom: 4rem;
}

.charts {
  padding: 1rem 0rem;
  grid-column: 2 / span 3;
  max-height: 1000px;
}

.data:last-child {
  grid-column: 5 / span 1;
}
</style>

<template>
  <div class="data-wrapper">
    <Disclaimer />
    <div v-if="getGlobalDailyReport.length < 3500">
      <Spinner />
    </div>
    <div class="data" v-else>
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
      "fetchGlobalCases",
      "fetchGlobalDeaths",
      "fetchGlobalDailyReport",
      "createCountryTotals",
    ]),
  },
  computed: mapGetters([
    "getGlobalCases",
    "getGlobalDeaths",
    "getGlobalDailyReport",
    "getCountryTotals",
  ]),
  created() {
    this.fetchGlobalDailyReport();
    this.createCountryTotals();
  },
  mounted() {},
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

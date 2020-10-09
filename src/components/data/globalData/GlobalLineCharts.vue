<template>
  <div class="line-chart">
    <div v-if="globalChartLabel.length > 0">
      <div v-if="countryName === ''">
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="globalChartCases"
          v-bind:color="casesColor"
          v-bind:label="'Total Global Cases'"
        />
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="globalChartDeaths"
          v-bind:color="deathsColor"
          v-bind:label="'Total Global Deaths'"
        />
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="globalDailyIncreaseCases"
          v-bind:color="casesColor"
          v-bind:label="'Daily Increase in Global Cases'"
        />
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="globalDailyIncreaseDeaths"
          v-bind:color="deathsColor"
          v-bind:label="'Daily Increase in Global Deaths'"
        />
      </div>
      <div v-if="countryName !== ''" :key="countryName">
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="countryChartCases"
          v-bind:color="casesColor"
          v-bind:label="countryName + ' Cases'"
        />
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="countryChartDeaths"
          v-bind:color="deathsColor"
          v-bind:label="countryName + ' Deaths'"
        />
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="countryChartCases"
          v-bind:color="casesColor"
          v-bind:label="'Daily Increase in ' + countryName + ' Cases'"
        />
        <ChartInfo
          v-bind:chartLabel="globalChartLabel"
          v-bind:infoArray="countryChartDeaths"
          v-bind:color="deathsColor"
          v-bind:label="'Daily Increase in ' + countryName + ' Deaths'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ChartInfo from "../ChartInfo";

export default {
  name: "GlobalLineCharts",
  components: {
    ChartInfo,
  },
  props: ["countryName"],
  data() {
    return {
      casesColor: "rgba(16,30,229,1)",
      deathsColor: "rgba(198,9,9,1)",
    };
  },
  methods: {
    ...mapActions([
      "createGlobalChartLabel",
      "createGlobalChartCases",
      "createGlobalChartDeaths",
      "createCountryChartCases",
      "createCountryChartDeaths",
      "createGlobalDailyIncreaseCases",
      "createGlobalDailyIncreaseDeaths",
    ]),
  },
  computed: {
    ...mapGetters({
      globalChartLabel: "getGlobalChartLabel",
      globalChartCases: "getGlobalChartCases",
      countryChartCases: "getCountryChartCases",
      globalChartDeaths: "getGlobalChartDeaths",
      countryChartDeaths: "getCountryChartDeaths",
      globalDailyIncreaseCases: "getGlobalDailyIncreaseCases",
      globalDailyIncreaseDeaths: "getGlobalDailyIncreaseDeaths",
    }),
  },
  mounted() {
    this.createGlobalChartLabel();
    this.createGlobalChartCases();
    this.createGlobalChartDeaths();
    this.createGlobalDailyIncreaseCases();
    this.createGlobalDailyIncreaseDeaths();
  },
  beforeUpdate() {
    this.createGlobalChartLabel();
    this.createCountryChartCases(this.countryName);
    this.createCountryChartDeaths(this.countryName);
  },
};
</script>

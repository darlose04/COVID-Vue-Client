<template>
  <div class="line-chart">
    <div v-if="usChartLabel.length > 0">
      <div v-if="usChartCases.length > 0 && usChartDeaths.length > 0">
        <div v-if="stateName === ''">
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usChartCases"
            v-bind:color="casesColor"
            v-bind:label="'Total U.S. Cases'"
          />
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usChartDeaths"
            v-bind:color="deathsColor"
            v-bind:label="'Total U.S. Deaths'"
          />
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usDailyIncreaseCases"
            v-bind:color="casesColor"
            v-bind:label="'Daily Increase in U.S. Cases'"
          />
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usDailyIncreaseDeaths"
            v-bind:color="deathsColor"
            v-bind:label="'Daily Increase in U.S. Deaths'"
          />
        </div>
      </div>
      <div>
        <div v-if="stateName !== ''" :key="stateName">
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usStateChartCases"
            v-bind:color="casesColor"
            v-bind:label="stateName + ' Cases'"
          />
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usStateChartDeaths"
            v-bind:color="deathsColor"
            v-bind:label="stateName + ' Deaths'"
          />
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usStateChartCases"
            v-bind:color="casesColor"
            v-bind:label="stateName + ' Cases'"
          />
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usStateChartDeaths"
            v-bind:color="deathsColor"
            v-bind:label="stateName + ' Deaths'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ChartInfo from "../ChartInfo";

export default {
  name: "USLineCharts",
  components: {
    ChartInfo,
  },
  props: ["stateName"],
  data() {
    return {
      casesColor: "rgba(16,30,229,1)",
      deathsColor: "rgba(198,9,9,1)",
    };
  },
  methods: {
    ...mapActions([
      "createUSChartLabel",
      "createUSChartCases",
      "createUSChartDeaths",
      "createUSStateChartCases",
      "createUSStateChartDeaths",
      "createUSDailyIncreaseCases",
      "createUSDailyIncreaseDeaths",
    ]),
  },
  computed: {
    ...mapGetters({
      usChartLabel: "getUSChartLabel",
      usChartCases: "getUSChartCases",
      usStateChartCases: "getUSStateChartCases",
      usChartDeaths: "getUSChartDeaths",
      usStateChartDeaths: "getUSStateChartDeaths",
      usDailyIncreaseCases: "getUSDailyIncreaseCases",
      usDailyIncreaseDeaths: "getUSDailyIncreaseDeaths",
    }),
  },
  mounted() {
    this.createUSChartLabel();
    this.createUSChartCases();
    this.createUSChartDeaths();
    this.createUSDailyIncreaseCases();
    this.createUSDailyIncreaseDeaths();
  },
  beforeUpdate() {
    this.createUSChartLabel();
    this.createUSStateChartCases(this.stateName);
    this.createUSStateChartDeaths(this.stateName);
  },
};
</script>

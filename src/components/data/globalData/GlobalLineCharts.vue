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
      "createglobalChartLabel",
      "createGlobalChartCases",
      "createGlobalChartDeaths",
      "createCountryChartCases",
      "createCountryChartDeaths",
    ]),
  },
  computed: {
    ...mapGetters({
      globalChartLabel: "getGlobalChartLabel",
      globalChartCases: "getGlobalChartCases",
      countryChartCases: "getCountryChartCases",
      globalChartDeaths: "getGlobalChartDeaths",
      countryChartDeaths: "getCountryChartDeaths",
    }),
  },
  mounted() {
    this.createGlobalChartLabel();
    this.createGlobalChartCases();
    this.createGlobalChartDeaths();
  },
  beforeUpdate() {
    this.createGlobalChartLabel();
    this.createCountryChartCases(this.stateName);
    this.createCountryChartDeaths(this.stateName);
  },
};
</script>

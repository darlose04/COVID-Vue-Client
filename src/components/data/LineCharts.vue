<template>
  <div class="line-chart">
    <div v-if="usChartLabel.length > 0">
      <div v-if="stateName === ''">
        <div v-if="usChartCases.length > 0">
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usChartCases"
            v-bind:color="casesColor"
            v-bind:label="'Total U.S. Cases'"
          />
        </div>
        <div v-if="usChartDeaths.length > 0">
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usChartDeaths"
            v-bind:color="deathsColor"
            v-bind:label="'Total U.S. Deaths'"
          />
        </div>
      </div>
      <div v-else>
        <div v-if="usChartCases.length > 0">
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usChartCases"
            v-bind:color="casesColor"
            v-bind:label="stateName + ' Cases'"
          />
        </div>
        <div v-if="usChartDeaths.length > 0">
          <ChartInfo
            v-bind:chartLabel="usChartLabel"
            v-bind:infoArray="usChartDeaths"
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
import ChartInfo from "./ChartInfo";

export default {
  name: "LineCharts",
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
    ]),
  },
  computed: {
    ...mapGetters({
      usChartLabel: "getUSChartLabel",
      usChartCases: "getUSChartCases",
      usStateChartCases: "getUSStateChartCases",
      usChartDeaths: "getUSChartDeaths",
      usStateChartDeaths: "getUSStateChartDeaths",
    }),
  },
  mounted() {
    console.log(this.stateName);
    this.createUSChartLabel();
    this.createUSChartCases(this.stateName);
    this.createUSChartDeaths(this.stateName);
  },
  beforeUpdate() {
    console.log(this.stateName);
    this.createUSChartLabel();
    this.createUSChartCases(this.stateName);
    this.createUSChartDeaths(this.stateName);
    // console.log(this.stateName);
  },
};
</script>

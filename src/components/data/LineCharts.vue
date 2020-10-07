<template>
  <div class="line-chart">
    <h1>{{ this.stateName }}</h1>
    <div v-if="usChartLabel.length > 0">
      <div v-if="usChartCases.length > 0">
        <ChartInfo
          v-bind:chartLabel="usChartLabel"
          v-bind:infoArray="usChartCases"
          v-bind:color="casesColor"
          v-bind:label="casesLabel"
        />
      </div>
      <div v-if="usChartDeaths.length > 0">
        <ChartInfo
          v-bind:chartLabel="usChartLabel"
          v-bind:infoArray="usChartDeaths"
          v-bind:color="deathsColor"
          v-bind:label="deathsLabel"
        />
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
      casesLabel: "Total U.S. Cases",
      deathsLabel: "Total U.S. Deaths",
    };
  },
  methods: {
    ...mapActions([
      "createUSChartLabel",
      "createUSChartCases",
      "createUSChartDeaths",
    ]),
  },
  computed: {
    ...mapGetters({
      usChartLabel: "getUSChartLabel",
      usChartCases: "getUSChartCases",
      usChartDeaths: "getUSChartDeaths",
    }),
  },
  mounted() {
    console.log(this.stateName);
    this.createUSChartLabel();
    this.createUSChartCases();
    this.createUSChartDeaths();
  },
  beforeUpdate() {
    console.log(this.stateName);
    // this.createUSChartCases(this.stateName);
    // this.createUSChartDeaths(this.stateName);
    // console.log(this.stateName);
  },
};
</script>

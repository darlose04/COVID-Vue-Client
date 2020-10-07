<template>
  <div class="line-chart">
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
      casesLabel: "",
      deathsLabel: "",
    };
  },
  methods: {
    ...mapActions([
      "createUSChartLabel",
      "createUSChartCases",
      "createUSChartDeaths",
    ]),
    changeLabels() {
      if (this.stateName === "") {
        this.casesLabel = "Total U.S. Cases";
        this.deathsLabel = "Total U.S. Deaths";
      } else {
        this.casesLabel = `${this.stateName} Cases`;
        this.deathsLabel = `${this.stateName} Deaths`;
      }
    },
  },
  computed: {
    ...mapGetters({
      usChartLabel: "getUSChartLabel",
      usChartCases: "getUSChartCases",
      usChartDeaths: "getUSChartDeaths",
    }),
  },
  created() {
    this.createUSChartLabel();
    this.createUSChartCases(this.stateName);
    this.createUSChartDeaths();
    this.changeLabels();
    console.log(this.stateName);
  },
  beforeUpdate() {
    this.createUSChartCases(this.stateName);
    this.createUSChartDeaths();
    this.changeLabels();
    console.log(this.stateName);
  },
};
</script>

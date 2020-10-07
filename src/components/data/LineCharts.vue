<template>
  <div class="line-chart">
    <div v-if="chartLabel.length > 0">
      <div v-if="casesArray.length > 0">
        <ChartInfo
          v-bind:chartLabel="chartLabel"
          v-bind:infoArray="casesArray"
          v-bind:color="casesColor"
          v-bind:label="casesLabel"
        />
      </div>
      <!-- <div v-if="deathsArray.length > 0">
        <ChartInfo
          v-bind:chartLabel="chartLabel"
          v-bind:infoArray="deathsArray"
          v-bind:color="deathsColor"
          v-bind:label="deathsLabel"
        />
      </div> -->
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
      dateArray: [],
      chartLabel: [],
      casesArray: [],
      deathsArray: [],
      casesColor: "rgba(16,30,229,1)",
      deathsColor: "rgba(198,9,9,1)",
      casesLabel: "Total U.S. Cases",
      deathsLabel: "Total U.S. Deaths",
    };
  },
  methods: {
    ...mapActions(["createUSChartLabel", "createUSChartCases"]),
    // getChartLabels() {
    //   this.dateArray.push(Object.keys(this.cases[0]));
    //   this.chartLabel = this.dateArray[0].slice(7, this.dateArray[0].length);
    // },
    // getCasesData() {
    //   this.chartLabel.map((date) => {
    //     let numInfo = 0;
    //     this.cases.map((item) => {
    //       numInfo += item[`${date}`];
    //     });
    //     this.casesArray.push(numInfo);
    //   });
    // },
    // getDeathsData() {
    //   this.chartLabel.map((date) => {
    //     let numInfo = 0;
    //     this.deaths.map((item) => {
    //       numInfo += item[`${date}`];
    //     });
    //     this.deathsArray.push(numInfo);
    //   });
    // },
  },
  computed: {
    ...mapGetters({
      usChartLabel: "getUSChartLabel",
      usChartCases: "getUSChartCases",
    }),
  },
  mounted() {
    this.createUSChartLabel();
    this.createUSChartCases();
    // this.getChartLabels();
    // this.getCasesData();
    // this.getDeathsData();
  },
};
</script>

<template>
  <div class="line-chart">
    <div
      v-if="
        chartLabel.length === 0 &&
          casesArray.length === 0 &&
          deathsArray.length === 0
      "
    ></div>
    <div v-else>
      <ChartInfo
        v-bind:chartLabel="chartLabel"
        v-bind:infoArray="casesArray"
        v-bind:color="casesColor"
        v-bind:label="casesLabel"
      />
      <ChartInfo
        v-bind:chartLabel="chartLabel"
        v-bind:infoArray="deathsArray"
        v-bind:color="deathsColor"
        v-bind:label="deathsLabel"
      />
    </div>
  </div>
</template>

<script>
import ChartInfo from "./ChartInfo";

export default {
  name: "LineCharts",
  components: {
    ChartInfo,
  },
  props: ["cases", "deaths"],
  data() {
    return {
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
    getChartLabels() {
      const dateArray = [];
      dateArray.push(Object.keys(this.cases[0]));
      this.chartLabel = dateArray[0].slice(7, dateArray[0].length);
      console.log(this.chartLabel);
    },
    // getChartData() {
    //   this.chartLabel.map((date) => {
    //     let numInfo = 0;
    //     this.info.map((item) => {
    //       numInfo += item[`${date}`];
    //     });
    //     this.infoArray.push(numInfo);
    //   });
    // },
    getCasesData() {
      this.chartLabel.map((date) => {
        let numInfo = 0;
        this.cases.map((item) => {
          numInfo += item[`${date}`];
        });
        this.casesArray.push(numInfo);
      });
    },
    getDeathsData() {
      this.chartLabel.map((date) => {
        let numInfo = 0;
        this.deaths.map((item) => {
          numInfo += item[`${date}`];
        });
        this.deathsArray.push(numInfo);
      });
    },
  },
  mounted() {
    this.getChartLabels();
    // this.getChartData();
    this.getCasesData();
    this.getDeathsData();
  },
};
</script>

<template>
  <div class="line-chart">
    <ChartInfo v-bind:chartLabel="chartLabel" v-bind:infoArray="infoArray" />
  </div>
</template>

<script>
import ChartInfo from "./ChartInfo";

export default {
  name: "LineCharts",
  components: {
    ChartInfo,
  },
  props: ["info"],
  data() {
    return {
      chartLabel: [],
      infoArray: [],
    };
  },
  methods: {
    getChartLabels() {
      const dateArray = [];
      dateArray.push(Object.keys(this.info[0]));
      this.chartLabel = dateArray[0].slice(7, dateArray[0].length);
    },
    getChartData() {
      this.chartLabel.map((date) => {
        let numInfo = 0;
        this.info.map((item) => {
          numInfo += item[`${date}`];
        });
        this.infoArray.push(numInfo);
      });
    },
  },
  created() {
    this.getChartLabels();
    this.getChartData();
  },
};
</script>

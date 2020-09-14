<template>
  <div class="line-chart">
    <h1>This is where the charts will go</h1>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  name: "LineCharts",
  extends: Line,
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
  mounted() {},
};
</script>

<style scoped></style>

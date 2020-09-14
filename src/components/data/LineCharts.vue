<template>
  <div class="line-chart">
    <div v-if="chartLabel.length === 0 && infoArray.length === 0"></div>
    <div v-else>
      <ChartInfo
        v-bind:chartLabel="chartLabel"
        v-bind:infoArray="infoArray"
        v-bind:color="color"
        v-bind:label="label"
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
  props: ["info", "color", "label"],
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

<template>
  <div class="line-chart">
    <div v-if="casesArray.length > 0">
      <!-- <ChartInfo
        v-bind:chartLabel="chartLabel"
        v-bind:infoArray="casesArray"
        v-bind:color="casesColor"
        v-bind:label="casesLabel"
      /> -->
    </div>
    <div v-if="deathsArray.length > 0">
      <!-- <ChartInfo
        v-bind:chartLabel="chartLabel"
        v-bind:infoArray="deathsArray"
        v-bind:color="deathsColor"
        v-bind:label="deathsLabel"
      /> -->
    </div>
  </div>
</template>

<script>
// import ChartInfo from "./ChartInfo";

export default {
  name: "LineCharts",
  components: {
    // ChartInfo,
  },
  props: {
    cases: {
      type: Array,
      required: true,
    },
    deaths: {
      type: Array,
      required: true,
    },
  },
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
    printProps() {
      console.log(this.cases);
    },
    getChartLabels() {
      this.dateArray.push(Object.keys(this.cases[0]));
      this.chartLabel = this.dateArray[0].slice(7, this.dateArray[0].length);
      console.log(this.dateArray);
      console.log(this.chartLabel);
    },
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
  created() {
    console.log("Created hook");
    // this.printProps();
    this.getChartLabels();
  },
  mounted() {
    console.log("Mounted hook");
    this.printProps();
  },
};
</script>

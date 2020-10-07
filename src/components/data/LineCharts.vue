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
      casesColor: "rgba(16,30,229,1)",
      deathsColor: "rgba(198,9,9,1)",
      casesLabel: "Total U.S. Cases",
      deathsLabel: "Total U.S. Deaths",
    };
  },
  methods: {
    ...mapActions(["createUSChartLabel", "createUSChartCases"]),
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
  },
};
</script>

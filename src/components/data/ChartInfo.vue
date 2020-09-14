<script>
import { Line } from "vue-chartjs";

export default {
  name: "ChartInfo",
  extends: Line,
  props: ["chartLabel", "infoArray"],
  data() {
    return {
      chartData: {
        labels: this.chartLabel,
        datasets: [
          {
            label: "Total U.S. Cases",
            data: this.infoArray,
            fill: false,
            borderColor: "rgba(16,30,229,1)",
            backgroundColor: "rgba(16,30,229,1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    displayData() {
      console.log(this.chartLabel);
    },
  },
  created() {
    this.displayData();
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
<ChartInfo v-bind:chartLabel="chartLabel" v-bind:infoArray="infoArray" />

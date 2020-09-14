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
            lineTension: 0.1,
            borderColor: "rgba(16,30,229,1)",
            backgroundColor: "rgba(16,30,229,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(16,30,229,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(16,30,229,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
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

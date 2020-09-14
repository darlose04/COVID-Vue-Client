<script>
import { Line } from "vue-chartjs";

export default {
  name: "ChartInfo",
  extends: Line,
  props: ["chartLabel", "infoArray", "color", "label"],
  data() {
    return {
      chartData: {
        labels: this.chartLabel,
        datasets: [
          {
            label: this.label,
            data: this.infoArray,
            fill: false,
            lineTension: 0.1,
            borderColor: this.color,
            backgroundColor: this.color,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: this.color,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: this.color,
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
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

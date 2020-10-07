<template>
  <div class="data-wrapper">
    <Disclaimer />
    <div v-if="this.usCases.length < 3300 || this.usDeaths.length < 3300">
      <Spinner />
    </div>
    <div v-else>
      <div class="data">
        <StateList v-bind:changeNameOfState="changeNameOfState" />
        <div class="charts">
          <LineCharts />
        </div>

        <div v-if="stateName !== ''">
          <CountyList v-bind:stateName="stateName" />
        </div>
        <div v-else>
          <h3>
            Click on a state name to the left to display statistics related to
            that state's counties.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import StateList from "./StateList";
import LineCharts from "../LineCharts";
import CountyList from "./CountyList";

export default {
  name: "USData",
  components: {
    Disclaimer,
    Spinner,
    StateList,
    LineCharts,
    CountyList,
  },
  data() {
    return {
      stateName: "",
    };
  },
  methods: {
    ...mapActions([
      "fetchUSCases",
      "fetchUSDeaths",
      "fetchUSDailyReport",
      "changeStateName",
    ]),
    changeNameOfState(event) {
      if (event.target.innerText === "U.S. Totals") {
        this.stateName = "";
      } else {
        this.stateName = event.target.innerText;
      }
    },
  },
  computed: {
    ...mapGetters({
      usDailyReport: "getUSDailyReport",
      usCases: "getUSCases",
      usDeaths: "getUSDeaths",
    }),
  },
  created() {
    this.fetchUSDailyReport();
    this.fetchUSCases();
    this.fetchUSDeaths();
  },
  mounted() {},
  beforeUpdate() {},
  beforeDestroy() {},
};
</script>

<style scoped>
.data-wrapper {
  width: 1400px;
  margin: auto;
}

.data {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  height: 2000px;
  margin-bottom: 4rem;
}

.charts {
  padding: 1rem 0rem;
  grid-column: 2 / span 3;
  max-height: 1000px;
}

.data:last-child {
  grid-column: 5 / span 1;
}
</style>

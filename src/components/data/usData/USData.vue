<template>
  <div class="data-wrapper">
    <Disclaimer />
    <div
      v-if="
        cases.length === 0 && deaths.length === 0 && dailyReport.length === 0
      "
    >
      <Spinner />
    </div>
    <div v-else>
      <div class="data">
        <StateList
          v-bind:changeStateName="changeStateName"
          v-bind:dailyReport="dailyReport"
        />
        <div class="charts">
          <LineCharts />
        </div>

        <CountyList />
      </div>
    </div>
  </div>
</template>

<script>
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import StateList from "./StateList";
import LineCharts from "../LineCharts";
import CountyList from "./CountyList";

import axios from "axios";

const baseUrl = "https://www.cov-api.com/api/usa";

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
      cases: [],
      deaths: [],
      dailyReport: [],
      stateName: "",
      loading: true,
    };
  },
  methods: {
    fetchData() {
      axios
        .get(`${baseUrl}/coronacases`)
        .then((res) => (this.cases = res.data))
        .catch((err) => console.log(err));
      axios
        .get(`${baseUrl}/coronadeaths`)
        .then((res) => (this.deaths = res.data))
        .catch((err) => console.log(err));
      axios
        .get(`${baseUrl}/dailyreport`)
        .then((res) => (this.dailyReport = res.data))
        .catch((err) => console.log(err));
    },
    changeStateName(event) {
      if (event.target.innerText === "U.S. Totals") {
        this.stateName = "";
      } else {
        this.stateName = event.target.innerText;
      }
      console.log(this.stateName);
    },
  },
  created() {
    this.fetchData();
  },
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

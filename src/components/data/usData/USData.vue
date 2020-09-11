<template>
  <div class="data-wrapper">
    <Disclaimer />
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else>
      <StateList v-bind:dailyReport="dailyReport" />
    </div>
  </div>
</template>

<script>
import Disclaimer from "../../layout/Disclaimer";
import Spinner from "../../layout/Spinner";
import StateList from "./StateList";

import axios from "axios";

const baseUrl = "https://www.cov-api.com/api/usa";

export default {
  name: "USData",
  components: {
    Disclaimer,
    Spinner,
    StateList,
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
    // checkData() {
    //   if (
    //     this.cases.length > 0 &&
    //     this.deaths.length > 0 &&
    //     this.dailyReport.length > 0
    //   ) {
    //     this.loading = false;
    //   }
    // },
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
      this.loading = false;
    },
  },
  created() {
    this.fetchData();
    // this.checkData();
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
</style>

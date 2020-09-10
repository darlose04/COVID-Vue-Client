<template>
  <div class="data-wrapper">
    <Disclaimer />
    <StateList v-bind:dailyReport="dailyReport" />
  </div>
</template>

<script>
import Disclaimer from "../../layout/Disclaimer";
import StateList from "./StateList";

import axios from "axios";

const baseUrl = "https://www.cov-api.com/api/usa";

export default {
  name: "USData",
  components: {
    Disclaimer,
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
  created() {
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

<template>
  <div>
    <h1>This is the page for displaying the global data</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GlobalData",
  methods: {
    ...mapActions([
      "fetchGlobalCases",
      "fetchGlobalDeaths",
      "fetchGlobalDailyReport",
    ]),
  },
  computed: mapGetters(["allCases", "allDeaths", "allDailyReport"]),
  created() {
    this.fetchGlobalCases();
    this.fetchGlobalDeaths();
    this.fetchGlobalDailyReport();
  },
  mounted() {
    console.log(this.allDailyReport);
  },
};
</script>

<style scoped></style>

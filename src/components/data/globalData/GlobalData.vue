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
    ...mapActions(["fetchGlobalCases", "fetchGlobalDeaths"]),
  },
  computed: mapGetters(["allCases", "allDeaths"]),
  created() {
    this.fetchGlobalCases();
    this.fetchGlobalDeaths();
  },
  mounted() {},
};
</script>

<style scoped></style>

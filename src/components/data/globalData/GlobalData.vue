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
    ...mapActions(["fetchGlobalCases"]),
  },
  computed: mapGetters(["allCases"]),
  created() {
    this.fetchGlobalCases();
  },
  mounted() {
    console.log(this.allCases);
  },
};
</script>

<style scoped></style>

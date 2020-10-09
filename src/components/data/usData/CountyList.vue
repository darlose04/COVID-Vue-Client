<template>
  <div class="county-list">
    <div>
      <h1>{{ this.stateName }}</h1>
      <ul v-for="county in this.countyObjects" v-bind:key="county.id">
        <li>
          <h3>{{ county.county }}</h3>
          <p>Cases: {{ county.cases }}</p>
          <p>Deaths: {{ county.deaths }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CountyList",
  props: ["stateName"],
  methods: {
    ...mapActions([
      "createUSCountyCases",
      "createUSCountyDeaths",
      "createUSCountyObjects",
    ]),
  },
  computed: {
    ...mapGetters({
      countyCases: "getUSCountyCases",
      countyDeaths: "getUSCountyDeaths",
      countyObjects: "getUSStateCountyObjects",
    }),
  },
  mounted() {
    this.createUSCountyCases(this.stateName);
    this.createUSCountyDeaths(this.stateName);
    this.createUSCountyObjects();
  },
  beforeUpdate() {
    this.createUSCountyCases(this.stateName);
    this.createUSCountyDeaths(this.stateName);
    this.createUSCountyObjects();
  },
};
</script>

<style scoped>
.county-list {
  margin-right: 1rem;
  padding: 1rem;
  height: 1614px;
  overflow: scroll;
}

.county-list div h1 {
  border-bottom: 2px solid black;
}

.county-list div ul li {
  margin: 0.5rem 0;
  border-bottom: 1px dotted black;
}

.county-list div ul li:last-child {
  border: none;
}
</style>

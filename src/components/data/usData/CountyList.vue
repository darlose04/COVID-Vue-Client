<template>
  <div class="county-list">
    <div>
      <h1>{{ this.stateName }}</h1>
      <!-- <ul v-for="county in stateObjects" v-bind:key="county.id">
        <li>
          <h3>{{ county.county }}</h3>
          <p>Cases: {{ county.cases }}</p>
          <p>Deaths: {{ county.deaths }}</p>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CountyList",
  data() {
    return {
      stateObjects: [],
    };
  },
  props: ["stateName"],
  methods: {
    ...mapActions(["createUSCountyCases"]),
    // addCountyData(cases, deaths) {
    //   this.stateObjects = [];
    //   let dateArray = [];
    //   dateArray.push(Object.keys(cases[0]));
    //   let dates = dateArray[0].slice(7, dateArray[0].length);
    //   let recentDate = dates[dates.length - 1];
    //   for (let i = 0; i < cases.length; i++) {
    //     let stateObj = {
    //       id: cases[i].UID,
    //       county: cases[i].City,
    //       cases: cases[i][recentDate],
    //       deaths: deaths[i][recentDate],
    //     };
    //     this.stateObjects.push(stateObj);
    //   }
    //   return this.stateObjects;
    // },
  },
  computed: {
    ...mapGetters({
      countyCases: "getUSCountyCases",
    }),
  },
  mounted() {
    this.createUSCountyCases(this.stateName);
    // this.addCountyData(this.cases, this.deaths);
  },
  beforeUpdate() {
    this.createUSCountyCases(this.stateName);
    // this.createUSCountyCases(this.nameOfState);
    // this.addCountyData(this.cases, this.deaths);
  },
};
</script>

<style scoped>
.county-list {
  margin-right: 1rem;
  padding: 1rem;
  height: 2035px;
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

<template>
  <div class="county-list">
    <div>
      <h1>{{ this.stateName }}</h1>
      <ul v-for="county in stateObjects" v-bind:key="county.id">
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
export default {
  name: "CountyList",
  props: ["stateName", "cases", "deaths"],
  data() {
    return {
      stateObjects: [],
    };
  },
  computed: {
    getCountyStats: function() {
      // let stateObjects = [];
      const dateArray = [];
      dateArray.push(Object.keys(this.cases[0]));
      const dates = dateArray[0].slice(7, dateArray[0].length);

      const recentDate = dates[dates.length - 1];

      for (let i = 0; i < this.cases.length; i++) {
        let stateObj = {
          id: this.cases[i].UID,
          county: this.cases[i].City,
          cases: this.cases[i][recentDate],
          deaths: this.deaths[i][recentDate],
        };

        this.stateObjects.push(stateObj);
      }

      return this.stateObjects;
    },
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

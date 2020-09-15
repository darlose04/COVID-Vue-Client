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
import axios from "axios";

const baseUrl = "https://www.cov-api.com/api/usa";

export default {
  name: "CountyList",
  props: ["stateName", "cases", "deaths"],
  data() {
    return {
      stateObjects: [],
      stateCountyCases: [],
      stateCountyDeaths: [],
    };
  },
  methods: {
    getStateData(state) {
      if (state !== "") {
        axios
          .get(`${baseUrl}/coronacases/states/${state}`)
          .then((res) => (this.cases = res.data))
          .catch((err) => console.log("Error fetching cases: " + err));
        axios
          .get(`${baseUrl}/coronadeaths/states/${state}`)
          .then((res) => (this.deaths = res.data))
          .catch((err) => console.log("Error fetching cases: " + err));
      }
    },
    getCountyData() {
      this.stateCountyCases = [];
      this.stateCountyDeaths = [];
      this.cases.map((obj) => {
        if (obj.State === this.stateName) {
          // console.log(obj);
          this.stateCountyCases.push(obj);
        }
      });
      this.deaths.map((obj) => {
        if (obj.State === this.stateName) {
          this.stateCountyDeaths.push(obj);
        }
      });

      console.log("State County Cases Array:");
      console.log(this.stateCountyCases);
    },
    addCountyData(cases, deaths) {
      this.stateObjects = [];

      let dateArray = [];
      dateArray.push(Object.keys(cases[0]));
      let dates = dateArray[0].slice(7, dateArray[0].length);
      let recentDate = dates[dates.length - 1];

      // console.log(this.stateCountyDeaths);
      for (let i = 0; i < cases.length; i++) {
        let stateObj = {
          id: cases[i].UID,
          county: cases[i].City,
          cases: cases[i][recentDate],
          deaths: deaths[i][recentDate],
        };

        this.stateObjects.push(stateObj);
      }

      // console.log("State Object:");
      // console.log(this.stateObjects);
      return this.stateObjects;
    },
  },
  created() {
    this.getCountyData();
    this.addCountyData(this.stateCountyCases, this.stateCountyDeaths);
  },
  beforeUpdate() {
    this.getCountyData();
    this.addCountyData(this.stateCountyCases, this.stateCountyDeaths);
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

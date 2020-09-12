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
      stateCountyCases: [],
      stateCountyDeaths: [],
    };
  },
  // methods: {
  //   getCountyStats: function(stateName, cases, deaths) {
  //     console.log(stateName);
  //     console.log(cases);
  //     console.log(deaths);

  //     let dateArray = [];
  //     dateArray.push(Object.keys(cases[0]));
  //     let dates = dateArray[0].slice(7, dateArray[0].length);
  //     let recentDate = dates[dates.length - 1];
  //     console.log(recentDate);
  //     // for (let i = 0; i < cases.length; i++) {
  //     //   let stateObj = {
  //     //     id: cases[i].UID,
  //     //     county: cases[i].City,
  //     //     cases: cases[i][recentDate],
  //     //     deaths: deaths[i][recentDate],
  //     //   };

  //     //   // console.log(stateObj);
  //     //   // this.stateObjects.push(stateObj);
  //     // }
  //   },
  // },
  // mounted() {
  //   this.getCountyStats(this.stateName, this.cases, this.deaths);
  // },
  // updated() {
  //   this.getCountyStats(this.stateName, this.cases, this.deaths);
  // },
  methods: {
    getCountyData() {
      this.stateCountyCases = [];
      this.cases.map((obj) => {
        if (obj.State === this.stateName) {
          // console.log(obj);
          this.stateCountyCases.push(obj);
        }
      });
      console.log(this.stateCountyCases);
    },
  },
  created() {
    this.getCountyData();
  },
  updated() {
    this.getCountyData();
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

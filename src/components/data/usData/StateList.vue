<template>
  <div class="list-data">
    <Totals
      v-bind:changeStateName="changeStateName"
      v-bind:dailyReport="dailyReport"
    />
    <div class="state-list">
      <h2>States / Territories</h2>
      <ul v-for="state in dailyReport" v-bind:key="state.index">
        <li>
          <div
            v-if="
              state.Province_State === 'American Samoa' ||
                state.Province_State === 'Diamond Princess' ||
                state.Province_State === 'Grand Princess' ||
                state.Province_State === 'Guam' ||
                state.Province_State === 'Northern Mariana Islands' ||
                state.Province_State === 'Virgin Islands'
            "
          >
            <h3>{{ state.Province_State }}</h3>
          </div>
          <div v-else>
            <h3 v-on:click="changeStateName">{{ state.Province_State }}</h3>
          </div>
          <p>Cases: {{ numWithCommas(state.Confirmed) }}</p>
          <p>Deaths: {{ numWithCommas(state.Deaths) }}</p>
          <div v-if="state.Recovered">
            <p>Recovered: {{ numWithCommas(state.Recovered) }}</p>
          </div>
          <div v-else>
            <p>Recovered: {{ state.Recovered }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Totals from "./Totals";

export default {
  name: "StateList",
  components: {
    Totals,
  },
  props: ["dailyReport", "changeStateName"],
  methods: {
    numWithCommas: function(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
.list-data {
  margin-left: 1rem;
  padding: 1rem 1rem;
  max-height: 1000px;
}

.totals {
  margin-bottom: 1rem;
  border-bottom: 1px dotted black;
  height: 170px;
}

.totals h2 {
  border-bottom: 2px solid black;
  margin-bottom: 0.5rem;
}

.US-Totals:hover {
  cursor: pointer;
  color: red;
}

.state-list {
  height: 1823px;
  overflow: scroll;
}

.state-list h2 {
  border-bottom: 2px solid black;
  margin-bottom: 0.5rem;
}

.state-list ul li {
  border-bottom: 1px dotted black;
  margin: 0.5rem 0;
}

.state-list ul li:last-child {
  border-bottom: none;
}

.state-list ul li h3 {
  cursor: pointer;
}

.state-list ul li h3:hover {
  color: red;
}
</style>

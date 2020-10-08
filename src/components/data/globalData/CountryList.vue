<template>
  <div class="list-data">
    <GlobalTotals v-bind:changeNameOfCountry="changeNameOfCountry" />
    <div class="country-list">
      <h2>Countries</h2>
      <ul v-for="country in getCountryTotals" v-bind:key="country.index">
        <li>
          <h3>{{ country.Country_Region }}</h3>
          <p>Cases: {{ numWithCommas(country.Confirmed) }}</p>
          <p>Deaths: {{ numWithCommas(country.Deaths) }}</p>
          <div v-if="country.Recovered">
            <p>Recovered: {{ numWithCommas(country.Recovered) }}</p>
          </div>
          <div v-else>
            <p>Recovered: {{ country.Recovered }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GlobalTotals from "./GlobalTotals";

export default {
  name: "CountryList",
  components: {
    GlobalTotals,
  },
  props: ["changeNameOfCountry"],
  methods: {
    ...mapActions(["createCountryTotals"]),
    numWithCommas: function(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: mapGetters(["getCountryTotals"]),
  created() {
    this.createCountryTotals();
  },
  mounted() {
    // console.log(this.getCountryTotals);
  },
};
</script>

<style scoped>
.list-data {
  margin-left: 1rem;
  padding: 1rem 1rem;
  max-height: 1000px;
}

.country-list {
  height: 1863px;
  overflow: scroll;
}

.country-list h2 {
  border-bottom: 2px solid black;
  margin-bottom: 0.5rem;
}

.country-list ul li {
  border-bottom: 1px dotted black;
  margin: 0.5rem 0;
}

.country-list ul li:last-child {
  border-bottom: none;
}

.country-list ul li h3 {
  cursor: pointer;
}

.country-list ul li h3:hover {
  color: red;
}
</style>

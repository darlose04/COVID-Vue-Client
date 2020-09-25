import Vuex from "vuex";
import Vue from "vue";
import cases from "./modules/globalCases";
import deaths from "./modules/globalDeaths";
// import dailyReport from "./modules/globalDailyReport";
import countryTotals from "./modules/globalDailyReport";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cases,
    deaths,
    // dailyReport,
    countryTotals,
  },
});

import Vuex from "vuex";
import Vue from "vue";
import cases from "./modules/globalCases";
import deaths from "./modules/globalDeaths";
import globalDailyReport from "./modules/globalDailyReport";
import usDailyReport from "./modules/usDailyReport";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cases,
    deaths,
    globalDailyReport,
    usDailyReport,
  },
});

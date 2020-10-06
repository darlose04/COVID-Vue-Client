import Vuex from "vuex";
import Vue from "vue";
import cases from "./modules/globalCases";
import deaths from "./modules/globalDeaths";
import globalDailyReport from "./modules/globalDailyReport";
import usDailyReport from "./modules/usDailyReport";
import changeStateName from "./modules/changeStateName";
import usCases from "./modules/usCases";
import usDeaths from "./modules/usDeaths";
import usStateCounty from "./modules/usStateCounty";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cases,
    deaths,
    globalDailyReport,
    usDailyReport,
    changeStateName,
    usCases,
    usDeaths,
    usStateCounty,
  },
});

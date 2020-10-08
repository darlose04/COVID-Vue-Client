import Vuex from "vuex";
import Vue from "vue";
import cases from "./modules/globalCases";
import deaths from "./modules/globalDeaths";
import globalDailyReport from "./modules/globalDailyReport";
import usDailyReport from "./modules/usDailyReport";
import usCases from "./modules/usCases";
import usDeaths from "./modules/usDeaths";
import usStateCounty from "./modules/usStateCounty";
import usLineCharts from "./modules/usLineCharts";
import globalLineCharts from "./modules/globalLineCharts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cases,
    deaths,
    globalDailyReport,
    usDailyReport,
    usCases,
    usDeaths,
    usStateCounty,
    usLineCharts,
    globalLineCharts,
  },
});

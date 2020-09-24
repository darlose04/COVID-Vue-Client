import Vuex from "vuex";
import Vue from "vue";
import cases from "./modules/globalData";
import deaths from "./modules/globalDeaths";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cases,
    deaths,
  },
});

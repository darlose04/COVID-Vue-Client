import Vuex from "vuex";
import Vue from "vue";
import cases from "./modules/globalData";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    cases,
  },
});

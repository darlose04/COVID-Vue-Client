import axios from "axios";

const state = {
  cases: [],
  deaths: [],
  dailyReport: [],
};

const getters = {};

const actions = {
  async fetchGlobalCases({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/coronacases"
    );
    commit("setCases", response.data);
  },
};

const mutations = {
  setCases: (state, cases) => (state.cases = cases),
};

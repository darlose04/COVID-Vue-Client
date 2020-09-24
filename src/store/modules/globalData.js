import axios from "axios";

const state = {
  cases: [],
  deaths: [],
};

const getters = {
  allCases: (state) => state.cases,
  allDeaths: (state) => state.deaths,
};

const actions = {
  async fetchGlobalCases({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/coronacases/"
    );
    commit("setCases", response.data);
  },
  async fetchGlobalDeaths({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/coronadeaths/"
    );
    commit("setDeaths", response.data);
  },
};

const mutations = {
  setCases: (state, cases) => (state.cases = cases),
  setDeaths: (state, deaths) => (state.deaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

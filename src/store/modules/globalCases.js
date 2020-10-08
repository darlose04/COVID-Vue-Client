import axios from "axios";

const state = {
  cases: [],
};

const getters = {
  getGlobalCases: (state) => state.cases,
};

const actions = {
  async fetchGlobalCases({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/coronacases/"
    );
    commit("setGlobalCases", response.data);
  },
};

const mutations = {
  setGlobalCases: (state, cases) => (state.cases = cases),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

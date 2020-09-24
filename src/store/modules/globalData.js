import axios from "axios";

const state = {
  cases: [],
};

const getters = {
  allCases: (state) => state.cases,
};

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

export default {
  state,
  getters,
  actions,
  mutations,
};

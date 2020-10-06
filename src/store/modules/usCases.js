import axios from "axios";

const state = {
  usCases: [],
  usCountyCases: [],
};

const getters = {
  getUSCases: (state) => state.usCases,
  getUSCountyCases: (state) => state.usCountyCases,
};

const actions = {
  async fetchUSCases({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/usa/coronacases/"
    );
    commit("setUSCases", response.data);
  },
};

const mutations = {
  setUSCases: (state, cases) => (state.usCases = cases),
  setUSCountyCases: (state, cases) => (state.usCountyCases = cases),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

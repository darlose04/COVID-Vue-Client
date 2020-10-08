import axios from "axios";

const state = {
  deaths: [],
};

const getters = {
  getGlobalDeaths: (state) => state.deaths,
};

const actions = {
  async fetchGlobalDeaths({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/coronadeaths/"
    );
    commit("setGlobalDeaths", response.data);
  },
};

const mutations = {
  setGlobalDeaths: (state, deaths) => (state.deaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

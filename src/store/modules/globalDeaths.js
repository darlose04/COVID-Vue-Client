import axios from "axios";

const state = {
  deaths: [],
};

const getters = {
  allDeaths: (state) => state.deaths,
};

const actions = {
  async fetchGlobalDeaths({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/coronadeaths/"
    );
    commit("setDeaths", response.data);
  },
};

const mutations = {
  setDeaths: (state, deaths) => (state.deaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

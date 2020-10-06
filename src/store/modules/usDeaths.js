import axios from "axios";

const state = {
  usDeaths: [],
  usCountyDeaths: [],
};

const getters = {
  getUSDeaths: (state) => state.usDeaths,
  getUSCountyDeaths: (state) => state.usCountyDeaths,
};

const actions = {
  async fetchUSDeaths({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/usa/coronadeaths/"
    );
    commit("setUSDeaths", response.data);
  },

  createUSCountyDeaths({ commit, state }, nameOfState) {
    let deaths = [...state.usDeaths];
    let stateCounties = [];

    deaths.map((county) => {
      if (county.State === nameOfState) {
        stateCounties.push(county);
      }
    });

    commit("setUSCountyDeaths", stateCounties);
  },
};

const mutations = {
  setUSDeaths: (state, deaths) => (state.usDeaths = deaths),
  setUSCountyDeaths: (state, deaths) => (state.usCountyDeaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

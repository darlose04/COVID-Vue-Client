const state = {
  stateName: "",
};

const getters = {
  getStateName: (state) => state.stateName,
};

const actions = {
  changeStateName({ commit }, nameOfState) {
    if (nameOfState === "U.S. Totals") {
      let stateName = "";
      commit("setStateName", stateName);
    } else {
      let stateName = nameOfState;
      commit("setStateName", stateName);
    }
  },
};

const mutations = {
  setStateName: (state, stateName) => (state.stateName = stateName),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

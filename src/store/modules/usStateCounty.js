const state = {
  usStateCountyObjects: [],
};

const getters = {
  getUSStateCountyObjects: (state) => state.getUSStateCountyTotals,
};

const actions = {
  createUSCountyObjects({ commit, rootState }) {
    let stateCountyObjects = [];
    console.log(rootState.usCases);

    commit("setUSStateCountyObjects", stateCountyObjects);
  },
};

const mutations = {
  setUSStateCountyObjects: (state, objects) =>
    (state.usStateCountyObjects = objects),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

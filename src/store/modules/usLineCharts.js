const state = {
  usChartLabel: [],
  usChartCases: [],
  usChartDeaths: [],
};

const getters = {
  getUSChartLabel: (state) => state.usChartLabel,
  getUSChartCases: (state) => state.usChartCases,
  getUSChartDeaths: (state) => state.usChartDeaths,
};

const actions = {
  createUSChartLabel({ commit, rootState }) {
    let dateArray = Object.keys(rootState.usCases.usCases);
    let labels = dateArray[0].slice(7, dateArray[0].length);

    commit("setUSChartLabel", labels);
  },
};

const mutations = {
  setUSChartLabel: (state, label) => (state.usChartLabel = label),
  setUSChartCases: (state, cases) => (state.usChartCases = cases),
  setUSChartDeaths: (state, deaths) => (state.usChartDeaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

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

const actions = {};

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

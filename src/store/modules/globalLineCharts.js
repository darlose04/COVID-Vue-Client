const state = {
  globalChartLabel: [],
  globalChartCases: [],
  globalChartDeaths: [],
  countryChartCases: [],
  countryChartDeaths: [],
};

const getters = {
  getGlobalChartLabel: (state) => state.globalChartLabel,
  getGlobalChartCases: (state) => state.globalChartCases,
  getGlobalChartDeaths: (state) => state.globalChartDeaths,
  getCountryChartCases: (state) => state.countryChartCases,
  getCountryChartDeaths: (state) => state.countryChartDeaths,
};

const actions = {
  createGlobalChartLabel({ commit, rootState }) {
    let cases = [...rootState.globalCases.cases];
    let dateArray = [];
    dateArray.push(Object.keys(cases[0]));
    let labels = dateArray[0].slice(7, dateArray[0].length);

    commit("setGlobalChartLabel", labels);
  },
};

const mutations = {
  setGlobalChartLabel: (state, label) => (state.globalChartLabel = label),
  setGlobalChartCases: (state, cases) => (state.globalChartCases = cases),
  setGlobalChartDeaths: (state, deaths) => (state.globalChartDeaths = deaths),
  setCountryChartCases: (state, cases) => (state.countryChartCases = cases),
  setCountryChartDeaths: (state, deaths) => (state.countryChartDeaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

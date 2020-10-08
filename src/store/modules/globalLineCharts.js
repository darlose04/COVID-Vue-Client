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

const actions = {};

const mutations = {
  setGlobalChartLabel: (state, label) => (state.globalChartLabel = label),
  setGlobalChartCases: (state, cases) => (state.globalChartCases = cases),
  setGlobalChartDeaths: (state, deaths) => (state.globalChartDeaths = deaths),
  setCountryChartCases: (state, cases) => (state.countryChartCases = cases),
  setCountryChartDeaths: (state, deaths) => (state.countryChartDeaths = deaths),
};

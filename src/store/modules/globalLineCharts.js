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

  createGlobalChartCases({ commit, state, rootState }) {
    let cases = [...rootState.globalCases.cases];
    let labels = [...state.globalChartLabel];
    let chartCases = [];

    labels.map((date) => {
      let numCases = 0;
      cases.map((country) => {
        numCases += country[date];
      });
      chartCases.push(numCases);
    });

    commit("setGlobalChartCases", chartCases);
  },

  createGlobalChartDeaths({ commit, state, rootState }) {
    let deaths = [...rootState.globalDeaths.deaths];
    let labels = [...state.globalChartLabel];
    let chartDeaths = [];

    labels.map((date) => {
      let numDeaths = 0;
      deaths.map((country) => {
        numDeaths += country[date];
      });
      chartDeaths.push(numDeaths);
    });

    commit("setGlobalChartDeaths", chartDeaths);
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

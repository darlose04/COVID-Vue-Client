const state = {
  globalChartLabel: [],
  globalChartCases: [],
  globalChartDeaths: [],
  countryChartCases: [],
  countryChartDeaths: [],
  globalDailyIncreaseCases: [],
  globalDailyIncreaseDeaths: [],
};

const getters = {
  getGlobalChartLabel: (state) => state.globalChartLabel,
  getGlobalChartCases: (state) => state.globalChartCases,
  getGlobalChartDeaths: (state) => state.globalChartDeaths,
  getCountryChartCases: (state) => state.countryChartCases,
  getCountryChartDeaths: (state) => state.countryChartDeaths,
  getGlobalDailyIncreaseCases: (state) => state.globalDailyIncreaseCases,
  getGlobalDailyIncreaseDeaths: (state) => state.globalDailyIncreaseDeaths,
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

  createCountryChartCases({ commit, state, rootState }, countryName) {
    let cases = [...rootState.globalCases.cases];
    let labels = [...state.globalChartLabel];
    let chartCases = [];
    let countries = [];

    cases.map((country) => {
      if (country.Country === countryName) {
        countries.push(country);
      }
    });

    labels.map((date) => {
      let numCases = 0;
      countries.map((country) => {
        numCases += country[date];
      });
      chartCases.push(numCases);
    });

    commit("setCountryChartCases", chartCases);
  },

  createCountryChartDeaths({ commit, state, rootState }, countryName) {
    let deaths = [...rootState.globalDeaths.deaths];
    let labels = [...state.globalChartLabel];
    let chartDeaths = [];
    let countries = [];

    deaths.map((country) => {
      if (country.Country === countryName) {
        countries.push(country);
      }
    });

    labels.map((date) => {
      let numDeaths = 0;
      countries.map((country) => {
        numDeaths += country[date];
      });
      chartDeaths.push(numDeaths);
    });

    commit("setCountryChartDeaths", chartDeaths);
  },

  createGlobalDailyIncreaseCases({ commit, state, rootState }) {
    let cases = [...rootState.globalCases.cases];
    let labels = [...state.globalChartLabel];
    let globalIncreases = [];

    for (let i = labels.length; i >= 0; i--) {
      let todayCases = 0;
      let yesterdayCases = 0;

      for (let k = 0; k < cases.length; k++) {
        todayCases += cases[k][`${labels[i]}`];
        yesterdayCases += cases[k][`${labels[i - 1]}`];
      }

      let dailyIncrease = todayCases - yesterdayCases;
      globalIncreases.push(dailyIncrease);
    }
    globalIncreases.reverse();
    // console.log(globalIncreases.reverse());

    commit("setGlobalDailyIncreaseCases", globalIncreases);
  },

  // createGlobalIncreaseDeaths({ commit, state, rootState }) {},
};

const mutations = {
  setGlobalChartLabel: (state, label) => (state.globalChartLabel = label),
  setGlobalChartCases: (state, cases) => (state.globalChartCases = cases),
  setGlobalChartDeaths: (state, deaths) => (state.globalChartDeaths = deaths),
  setCountryChartCases: (state, cases) => (state.countryChartCases = cases),
  setCountryChartDeaths: (state, deaths) => (state.countryChartDeaths = deaths),
  setGlobalDailyIncreaseCases: (state, cases) =>
    (state.globalDailyIncreaseCases = cases),
  setGlobalDailyIncreaseDeaths: (state, deaths) =>
    (state.globalDailyIncreaseDeaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

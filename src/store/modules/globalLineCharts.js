const state = {
  globalChartLabel: [],
  globalChartCases: [],
  globalChartDeaths: [],
  countryChartCases: [],
  countryChartDeaths: [],
  globalDailyIncreaseCases: [],
  globalDailyIncreaseDeaths: [],
  countryDailyIncreaseCases: [],
  countryDailyIncreaseDeaths: [],
};

const getters = {
  getGlobalChartLabel: (state) => state.globalChartLabel,
  getGlobalChartCases: (state) => state.globalChartCases,
  getGlobalChartDeaths: (state) => state.globalChartDeaths,
  getCountryChartCases: (state) => state.countryChartCases,
  getCountryChartDeaths: (state) => state.countryChartDeaths,
  getGlobalDailyIncreaseCases: (state) => state.globalDailyIncreaseCases,
  getGlobalDailyIncreaseDeaths: (state) => state.globalDailyIncreaseDeaths,
  getCountryDailyIncreaseCases: (state) => state.countryDailyIncreaseCases,
  getCountryDailyIncreaseDeaths: (state) => state.countryDailyIncreaseDeaths,
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

    commit("setGlobalDailyIncreaseCases", globalIncreases);
  },

  createGlobalDailyIncreaseDeaths({ commit, state, rootState }) {
    let deaths = [...rootState.globalDeaths.deaths];
    let labels = [...state.globalChartLabel];
    let globalIncreases = [];

    for (let i = labels.length; i >= 0; i--) {
      let todayDeaths = 0;
      let yesterdayDeaths = 0;

      for (let k = 0; k < deaths.length; k++) {
        todayDeaths += deaths[k][`${labels[i]}`];
        yesterdayDeaths += deaths[k][`${labels[i - 1]}`];
      }

      let dailyIncrease = todayDeaths - yesterdayDeaths;
      globalIncreases.push(dailyIncrease);
    }
    globalIncreases.reverse();

    commit("setGlobalDailyIncreaseDeaths", globalIncreases);
  },

  createCountryDailyIncreaseCases({ commit, state }) {
    let cases = [...state.countryChartCases];
    let countryIncreases = [];

    let todayCases = 0;
    let yesterdayCases = 0;

    for (let i = cases.length - 1; i >= 1; i--) {
      todayCases = cases[i];
      yesterdayCases = cases[i - 1];

      let dailyIncrease = todayCases - yesterdayCases;

      countryIncreases.push(dailyIncrease);
    }
    countryIncreases.reverse();

    commit("setCountryDailyIncreaseCases", countryIncreases);
  },
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
  setCountryDailyIncreaseCases: (state, cases) =>
    (state.countryDailyIncreaseCases = cases),
  setCountryDailyIncreaseDeaths: (state, deaths) =>
    (state.countryDailyIncreaseDeaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

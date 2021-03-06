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

  createGlobalDailyIncreaseCases({ commit, state }) {
    let cases = [...state.globalChartCases];
    let globalIncreases = [];

    for (let i = cases.length - 1; i >= 0; i--) {
      let todayCases = cases[i];
      let yesterdayCases = cases[i - 1];

      let dailyIncrease = todayCases - yesterdayCases;
      globalIncreases.push(dailyIncrease);
    }

    globalIncreases.reverse();

    commit("setGlobalDailyIncreaseCases", globalIncreases);
  },

  createGlobalDailyIncreaseDeaths({ commit, state }) {
    let deaths = [...state.globalChartDeaths];
    let globalIncreases = [];

    for (let i = deaths.length - 1; i >= 0; i--) {
      let todayDeaths = deaths[i];
      let yesterdayDeaths = deaths[i - 1];

      let dailyIncrease = todayDeaths - yesterdayDeaths;
      globalIncreases.push(dailyIncrease);
    }

    globalIncreases.reverse();

    commit("setGlobalDailyIncreaseDeaths", globalIncreases);
  },

  createCountryDailyIncreaseCases({ commit, state }) {
    let cases = [...state.countryChartCases];
    let countryIncreases = [];

    for (let i = cases.length - 1; i >= 0; i--) {
      let todayCases = cases[i];
      let yesterdayCases = cases[i - 1];

      let dailyIncrease = todayCases - yesterdayCases;

      countryIncreases.push(dailyIncrease);
    }
    countryIncreases.reverse();

    commit("setCountryDailyIncreaseCases", countryIncreases);
  },

  createCountryDailyIncreaseDeaths({ commit, state }) {
    let deaths = [...state.countryChartDeaths];
    let countryIncreases = [];

    for (let i = deaths.length - 1; i >= 0; i--) {
      let todayDeaths = deaths[i];
      let yesterdayDeaths = deaths[i - 1];

      let dailyIncrease = todayDeaths - yesterdayDeaths;

      countryIncreases.push(dailyIncrease);
    }
    countryIncreases.reverse();

    commit("setCountryDailyIncreaseDeaths", countryIncreases);
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

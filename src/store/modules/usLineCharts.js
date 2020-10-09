const state = {
  usChartLabel: [],
  usChartCases: [],
  usChartDeaths: [],
  usStateChartCases: [],
  usStateChartDeaths: [],
  usDailyIncreaseCases: [],
  usDailyIncreaseDeaths: [],
  usStateDailyIncreaseCases: [],
  usStateDailyIncreaseDeaths: [],
};

const getters = {
  getUSChartLabel: (state) => state.usChartLabel,
  getUSChartCases: (state) => state.usChartCases,
  getUSStateChartCases: (state) => state.usStateChartCases,
  getUSChartDeaths: (state) => state.usChartDeaths,
  getUSStateChartDeaths: (state) => state.usStateChartDeaths,
  getUSDailyIncreaseCases: (state) => state.usDailyIncreaseCases,
  getUSDailyIncreaseDeaths: (state) => state.usDailyIncreaseDeaths,
  getUSStateDailyIncreaseCases: (state) => state.usStateDailyIncreaseCases,
  getUSStateDailyIncreaseDeaths: (state) => state.usStateDailyIncreaseDeaths,
};

const actions = {
  createUSChartLabel({ commit, rootState }) {
    let cases = [...rootState.usCases.usCases];
    let dateArray = [];
    dateArray.push(Object.keys(cases[0]));
    let labels = dateArray[0].slice(7, dateArray[0].length);

    commit("setUSChartLabel", labels);
  },

  createUSChartCases({ commit, state, rootState }) {
    let usCases = [...rootState.usCases.usCases];
    let labels = [...state.usChartLabel];
    let chartCases = [];

    labels.map((date) => {
      let numCases = 0;
      usCases.map((county) => {
        numCases += county[date];
      });
      chartCases.push(numCases);
    });

    commit("setUSChartCases", chartCases);
  },

  createUSStateChartCases({ commit, state, rootState }, stateName) {
    let usCases = [...rootState.usCases.usCases];
    let labels = [...state.usChartLabel];
    let chartCases = [];

    let stateCounties = [];

    usCases.map((county) => {
      if (county.State === stateName) {
        stateCounties.push(county);
      }
    });

    labels.map((date) => {
      let numCases = 0;
      stateCounties.map((county) => {
        numCases += county[date];
      });
      chartCases.push(numCases);
    });

    commit("setUSStateChartCases", chartCases);
  },

  createUSChartDeaths({ commit, state, rootState }) {
    let usDeaths = [...rootState.usDeaths.usDeaths];
    let labels = [...state.usChartLabel];
    let chartDeaths = [];

    labels.map((date) => {
      let numDeaths = 0;
      usDeaths.map((county) => {
        numDeaths += county[date];
      });
      chartDeaths.push(numDeaths);
    });

    commit("setUSChartDeaths", chartDeaths);
  },

  createUSStateChartDeaths({ commit, state, rootState }, stateName) {
    let usDeaths = [...rootState.usDeaths.usDeaths];
    let labels = [...state.usChartLabel];
    let chartDeaths = [];

    let stateCounties = [];

    usDeaths.map((county) => {
      if (county.State === stateName) {
        stateCounties.push(county);
      }
    });

    labels.map((date) => {
      let numDeaths = 0;
      stateCounties.map((county) => {
        numDeaths += county[date];
      });
      chartDeaths.push(numDeaths);
    });

    commit("setUSStateChartDeaths", chartDeaths);
  },

  createUSDailyIncreaseCases({ commit, state }) {
    let cases = [...state.usChartCases];
    let usIncreases = [];

    for (let i = cases.length - 1; i >= 1; i--) {
      let todayCases = cases[i];
      let yesterdayCases = cases[i - 1];

      let dailyIncrease = todayCases - yesterdayCases;
      usIncreases.push(dailyIncrease);
    }
    usIncreases.reverse();

    commit("setUSDailyIncreaseCases", usIncreases);
  },
};

const mutations = {
  setUSChartLabel: (state, label) => (state.usChartLabel = label),
  setUSChartCases: (state, cases) => (state.usChartCases = cases),
  setUSStateChartCases: (state, cases) => (state.usStateChartCases = cases),
  setUSChartDeaths: (state, deaths) => (state.usChartDeaths = deaths),
  setUSStateChartDeaths: (state, deaths) => (state.usStateChartDeaths = deaths),
  setUSDailyIncreaseCases: (state, cases) =>
    (state.usDailyIncreaseCases = cases),
  setUSDailyIncreaseDeaths: (state, deaths) =>
    (state.usDailyIncreaseDeaths = deaths),
  setUSStateDailyIncreaseCases: (state, cases) =>
    (state.usStateDailyIncreaseCases = cases),
  setUSStateDailyIncreaseDeaths: (state, deaths) =>
    (state.usStateDailyIncreaseDeaths = deaths),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

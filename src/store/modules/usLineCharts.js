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

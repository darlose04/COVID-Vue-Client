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

  createUSChartCases({ commit, state, rootState }, stateName) {
    let usCases = [...rootState.usCases.usCases];
    let labels = [...state.usChartLabel];
    let chartCases = [];
    console.log(stateName);

    if (stateName === "") {
      labels.map((date) => {
        let numCases = 0;
        usCases.map((county) => {
          numCases += county[date];
        });
        chartCases.push(numCases);
      });

      commit("setUSChartCases", chartCases);
    } else {
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

      commit("setUSChartCases", chartCases);
    }
  },

  createUSChartDeaths({ commit, state, rootState }, stateName) {
    let usDeaths = [...rootState.usDeaths.usDeaths];
    let labels = [...state.usChartLabel];
    let chartDeaths = [];
    console.log(stateName);

    if (stateName === "") {
      labels.map((date) => {
        let numDeaths = 0;
        usDeaths.map((county) => {
          numDeaths += county[date];
        });
        chartDeaths.push(numDeaths);
      });

      commit("setUSChartDeaths", chartDeaths);
    } else {
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

      commit("setUSChartCases", chartDeaths);
    }
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

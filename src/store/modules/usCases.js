import axios from "axios";

const state = {
  usCases: [],
  usCountyCases: [],
  usStateCountyTotals: [],
};

const getters = {
  getUSCases: (state) => state.usCases,
  getUSCountyCases: (state) => state.usCountyCases,
  getUSStateCountyTotals: (state) => state.usStateCountyTotals,
};

const actions = {
  async fetchUSCases({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/usa/coronacases/"
    );
    commit("setUSCases", response.data);
  },

  createUSCountyCases({ commit, state }, nameOfState) {
    let cases = [...state.usCases];
    let stateCounties = [];

    cases.map((county) => {
      if (county.State === nameOfState) {
        stateCounties.push(county);
      }
    });
    console.log(stateCounties);

    commit("setUSCountyCases", stateCounties);
  },

  addUSCountyCases({ commit, state }) {
    let countyCases = [...state.usCountyCases];
    let stateCountyTotalsObjects = [];
    let dateArray = [];
    dateArray.push(Object.keys(countyCases[0]));
    let dates = dateArray[0].slice(7, dateArray[0].length);
    let recentDate = dates[dates.length - 1];

    for (let i = 0; i < countyCases.length; i++) {
      let stateObj = {
        id: countyCases[i].UID,
        county: countyCases[i].City,
        cases: countyCases[i][recentDate],
      };
      stateCountyTotalsObjects.push(stateObj);
    }

    commit("setUSStateCountyTotals", stateCountyTotalsObjects);
  },
};

const mutations = {
  setUSCases: (state, cases) => (state.usCases = cases),
  setUSCountyCases: (state, cases) => (state.usCountyCases = cases),
  setUSStateCountyTotals: (state, cases) => (state.usStateCountyTotals = cases),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

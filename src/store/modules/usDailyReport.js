import axios from "axios";

const state = {
  usDailyReport: [],
  usTotals: [],
  stateTotals: [],
};

const getters = {
  getUSDailyReport: (state) => state.usDailyReport,
  getUSTotals: (state) => state.usTotals,
};

const actions = {
  async fetchUSDailyReport({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/usa/dailyreport/"
    );
    commit("setUSDailyReport", response.data);
  },
  createUSTotals({ commit, state }) {
    let usData = [...state.usDailyReport];

    let usTotals = {
      totalCases: 0,
      totalDeaths: 0,
      totalActive: 0,
      totalHospitalized: 0,
      totalTested: 0,
      totalRecovered: 0,
    };

    console.log(usData);

    commit("setUSTotals", usTotals);
  },
};

const mutations = {
  setUSDailyReport: (state, dailyReport) => (state.dailyReport = dailyReport),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

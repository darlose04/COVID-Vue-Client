import axios from "axios";

const state = {
  dailyReport: [],
  usTotals: [],
  stateTotals: [],
};

const getters = {
  getUSDailyReport: (state) => state.dailyReport,
};

const actions = {
  async fetchUSDailyReport({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/usa/dailyreport/"
    );
    commit("setDailyReport", response.data);
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

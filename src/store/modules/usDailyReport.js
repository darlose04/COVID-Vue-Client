import axios from "axios";

const state = {
  dailyReport: [],
  usTotals: [],
  stateTotals: [],
};

const getters = {};

const actions = {
  async fetchUSDailyReport({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/usa/dailyreport/"
    );
    commit("setDailyReport", response.data);
  },
};

const mutations = {
  setDailyReport: (state, dailyReport) => (state.dailyReport = dailyReport),
};

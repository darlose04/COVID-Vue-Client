import axios from "axios";

const state = {
  dailyReport: [],
};

const getters = {
  allDailyReport: (state) => state.dailyReport,
};

const actions = {
  async fetchGlobalDailyReport({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/dailyreport/"
    );
    commit("setDailyReport", response.data);
  },
};

const mutations = {
  setDailyReport: (state, dailyReport) => (state.dailyReport = dailyReport),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

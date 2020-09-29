import axios from "axios";

const state = {
  dailyReport: [],
  countryTotals: [],
  globalTotals: {},
};

const getters = {
  getDailyReport: (state) => state.dailyReport,
  getCountryTotals: (state) => state.countryTotals,
};

const actions = {
  async fetchGlobalDailyReport({ commit }) {
    const response = await axios.get(
      "https://www.cov-api.com/api/global/dailyreport/"
    );

    commit("setDailyReport", response.data);
  },

  countryTotals({ commit, state }) {
    let data = [...state.dailyReport];
    let countryArr = [];

    for (let i = 0; i < data.length; i++) {
      if (!countryArr.includes(data[i].Country_Region)) {
        countryArr.push(data[i].Country_Region);
      }
    }

    let countryStats = [];

    countryArr.map((country) => {
      let singleCountryStats = [];
      data.map((obj) => {
        if (obj.Country_Region === country) {
          singleCountryStats.push(obj);
        }
      });

      countryStats.push(singleCountryStats);
    });

    let countryObjArr = [];
    let indexCounter = 0;
    countryStats.map((item) => {
      let countryTotalsObj = {
        Country_Region: item[0].Country_Region,
        Confirmed: 0,
        Deaths: 0,
        Recovered: 0,
        Index: indexCounter++,
      };

      item.map(
        (itemObj) => (
          (countryTotalsObj.Confirmed += itemObj.Confirmed),
          (countryTotalsObj.Deaths += itemObj.Deaths),
          (countryTotalsObj.Recovered += itemObj.Recovered)
        )
      );

      countryObjArr.push(countryTotalsObj);
    });

    countryObjArr.sort((a, b) => {
      return a.Country_Region < b.Country_region
        ? -1
        : a.Country_Region > b.Country_Region
        ? 1
        : 0;
    });

    commit("setCountryTotals", countryObjArr);
  },
  globalTotals({ commit, state }) {
    let globalData = [...state.dailyReport];

    let globalTotals = {
      totalCases: 0,
      totalDeaths: 0,
      totalActive: 0,
      totalRecovered: 0,
    };

    globalData.map((country) => {
      (globalTotals.totalCases += country.Confirmed),
        (globalTotals.totalDeaths += country.Deaths),
        (globalTotals.totalActive += country.Active),
        (globalTotals.totalRecovered += country.Recovered);
    });

    commit("setGlobalTotals", globalTotals);
  },
};

const mutations = {
  setDailyReport: (state, dailyReport) => (state.dailyReport = dailyReport),
  setCountryTotals: (state, countryTotals) =>
    (state.countryTotals = countryTotals),
  setGlobalTotals: (state, globalTotals) => (state.globalTotals = globalTotals),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

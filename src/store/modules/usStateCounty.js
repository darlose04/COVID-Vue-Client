const state = {
  usStateCountyObjects: [],
};

const getters = {
  getUSStateCountyObjects: (state) => state.usStateCountyObjects,
};

const actions = {
  createUSCountyObjects({ commit, rootState }) {
    let countyCases = [...rootState.usCases.usCountyCases];
    let countyDeaths = [...rootState.usDeaths.usCountyDeaths];

    let stateCountyTotalsObjects = [];
    let dateArray = [];
    dateArray.push(Object.keys(countyCases[0]));
    let dates = dateArray[0].slice(7, dateArray[0].length);
    let recentDate = dates[dates.length - 1];

    for (let i = 0; i < countyCases.length; i++) {
      let stateCountyObj = {
        id: countyCases[i].UID,
        county: countyCases[i].City,
        cases: countyCases[i][recentDate],
        deaths: countyDeaths[i][recentDate],
      };

      stateCountyTotalsObjects.push(stateCountyObj);
    }

    commit("setUSStateCountyObjects", stateCountyTotalsObjects);
  },
};

const mutations = {
  setUSStateCountyObjects: (state, obj) => (state.usStateCountyObjects = obj),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

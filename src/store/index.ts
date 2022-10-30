import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [{
      login: "",
    }],
    userFilter: "",
    userDetail: {},
    userRepos: []
  },
  mutations: {
    setUserList(state, items) {
      state.userList = items
    },
    updateUserFilter(state, value) {
      state.userFilter = value
    },
    setUserDetail(state, items) {
      state.userDetail = items
    },
    setUserRepos(state, items) {
      state.userRepos = items
    },
  },
  actions: {
    async Init({ dispatch, commit }) {
      try {
        const response = await axios.get("users?per_page=1000")
        // console.log(response.data)
        commit("setUserList", response.data)
      } catch (error) {
        dispatch("SetError", error)
      }
    },
    async selectUser({ dispatch, commit }, user_login: string) {
      try {
        const user = await axios.get("users/" + user_login)
        commit("setUserDetail", user.data)
        const repos = await axios.get("users/" + user_login + "/repos")
        commit("setUserRepos", repos.data)
      } catch (error) {
        dispatch("SetError", error)
      }
    },
    SetError(error) {
      console.log(error)
    }
  },
  getters: {
    getUserList(state) {
      return state.userList
    },
    getUserListFiltered(state) {
      return state.userList.filter(x => x.login.includes(state.userFilter)).slice(0, 20)

    },
    getUserDetail(state) {
      return state.userDetail
    },
    getUserRepos(state) {
      return state.userRepos
    },
  },
  modules: {},
});

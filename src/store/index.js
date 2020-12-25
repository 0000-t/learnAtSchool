import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  status: null,
  isLogin: false,
  power: [],
  routeList: [],
}

const store = new Vuex.Store({
  state,
  getters: {
    getStatus(state) {
      return state.status
    },
    getIsLogin(state) {
      return state.isLogin;
    },
    getPower(state) {
      return state.power
    },
    getRouteList(state) {
      return state.routeList
    }
  },
  mutations: {
    setStatus(state, payload) {
      state.status = payload.status;
    },
    setIsLogin(state, payload) {
      state.isLogin = payload.login
    },
    setPower(state, payload) {
      state.power = payload.power
    },
    setRouteList(state, payload) {
      state.routeList = payload.routeList
    },
  }
})

export default store
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import rescue from './modules/rescue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerStatus: false
  },
  actions: {
    toggleDrawer ({ commit }, bool) {
      commit('SET_DRAWER_STATUS', bool)
    }
  },
  mutations: {
    SET_DRAWER_STATUS(state, bool) {
      state.drawerStatus = bool
    }
  },
  getters: {
    drawerStatus: state => state.drawerStatus
  },
  modules: {
    user,
    rescue
  }
})

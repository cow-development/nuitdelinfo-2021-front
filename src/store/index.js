import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import rescue from './modules/rescue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerStatus: false,
    theme: false
  },
  actions: {
    toggleDrawer ({ commit }, bool) {
      commit('SET_DRAWER_STATUS', bool)
    },
    toggleTheme ({ commit }, bool) {
      let root = document.documentElement;
      if(!bool) {
        root.style.setProperty('--primaryColor', "#1d1d1d");
        root.style.setProperty('--secondaryColor', "#292929");
        root.style.setProperty('--tintColor', "#ff6565");
        root.style.setProperty('--primaryText', "#fff9f9");
        root.style.setProperty('--secondaryText', "#aca5a5");
        root.style.setProperty('--tintText', "#ff6565");
      } else {
        root.style.setProperty('--primaryColor', "#fff9f9");
        root.style.setProperty('--secondaryColor', "#aca5a5");
        root.style.setProperty('--tintColor', "#ff6565");
        root.style.setProperty('--primaryText', "#1d1d1d");
        root.style.setProperty('--secondaryText', "#292929");
        root.style.setProperty('--tintText', "#ff6565");
      }
      commit('SET_THEME', bool)
    }
  },
  mutations: {
    SET_DRAWER_STATUS(state, bool) {
      state.drawerStatus = bool
    },
    SET_THEME(state, bool) {
      state.theme = bool
    }
  },
  getters: {
    drawerStatus: state => state.drawerStatus,
    theme: state => state.theme
  },
  modules: {
    user,
    rescue
  }
})

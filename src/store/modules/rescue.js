import apiAxiosClient from '../../http'

const rescue = {
  state: () => ({
    rescues: [],
    activeRescue: null
  }),
  actions: {
    getRescues({ commit }, user) {
      return apiAxiosClient.get('/private/rescue/all')
        .then(response => {
          commit('SET_RESCUES', response.data)
          return response.data
        })
        .catch(error => {
          throw error.message
        })
    },
    setActiveRescue({ commit }, rescue) {
      commit('SET_ACTIVE_RESCUE', rescue)
    }
  },
  mutations: {
    SET_RESCUES(state, data) {
      state.rescues = data
    },
    SET_ACTIVE_RESCUE(state, rescue) {
      state.activeRescue = rescue
    }
  },
  getters: {
    rescues(state) {
      return state.rescues
    },
    activeRescue(state) {
      return state.activeRescue
    }
  }
}

export default rescue

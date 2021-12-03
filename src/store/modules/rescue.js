import apiAxiosClient from '../../http'

const rescue = {
  state: () => ({
    rescues: []
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
    /**
     * Appel à l'API pour récupérer les informations de l'utilisateur
     */
    getUserData({ commit }, token) {
      return apiAxiosClient.get('/whoami/')
        .then(response => {
          commit('SET_USER_DATA', response.data.data)
          return response.data
        })
        .catch(error => {
          throw error.message
        })
    },
    resetUser({ commit }) {
      commit('RESET_USER')
    }
  },
  mutations: {
    SET_RESCUES(state, data) {
      state.rescues = data
    },
  },
  getters: {
    rescues(state) {
      return state.rescues
    }
  }
}

export default rescue

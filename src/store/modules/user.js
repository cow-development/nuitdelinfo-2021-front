import apiAxiosClient from '../../http'

const user = {
  state: () => ({
    user: {
      token: null,
      isAdmin: false,
      data: {}
    }
  }),
  actions: {
    createUser({ commit }, user) {
      return apiAxiosClient.post('/public/account/', user)
        .then(response => {
          const { token, ...data } = response.data.data
          const user = {
            token: token,
            data: data
          }
          commit('AUTH_USER_SUCCESS', user)
          dispatch('getUserData');
          return response.data
        })
        .catch(error => {
          throw error.message
        })
    },
    authUser({ commit, dispatch }, data) {
      /**
       * Appel à l'API pour authentifier l'utilisateur, qui renvoie un utilisateur avec son token
       * si l'authentification est réussie, sinon renvoie une erreur
       *
       * @param {Object} data
       * @example { username: '', password: '' }

       * @returns {Promise}

       */
      return apiAxiosClient.post('/public/account/auth', data)
        .then(response => {
          const { token, isAdmin, ...data } = response.data
          const user = {
            token: token,
            isAdmin: isAdmin,
            data: data,
          }
          commit('AUTH_USER_SUCCESS', user)
          return response.data
        })
        .catch(error => {
          throw error.message
        })
    },
    /**
     * Appel à l'API pour vérifier la validité du token, qui renvoie le token si la vérification
     * est réussie, sinon renvoie une erreur
     *
     * @param {String} token
     * @example "token"
     * @returns {Promise}
     */
    verifyUser({ commit, dispatch }, token) {
      return apiAxiosClient.get('/public/account/verify')
        .then(response => {
          const { token, ...data } = response.data
          const user = {
            token: token,
            data: data
          }
          commit('AUTH_USER_SUCCESS', user);
          return response.data
        })
        .catch(error => {
          dispatch('resetUser');
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
    setUserToken({ commit }, token) {
      commit('SET_USER_TOKEN', token)
    },
    resetUser({ commit }) {
      commit('RESET_USER')
    }
  },
  mutations: {
    AUTH_USER_SUCCESS(state, data) {
      state.user = data
    },
    RESET_USER(state) {
      state.user = { token: null, data: {} };
    },
    SET_USER_DATA(state, data) {
      state.user.data = data;
    },
    SET_USER_TOKEN(state, token) {
      state.user.token = token;
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}

export default user

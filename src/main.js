import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'leaflet/dist/leaflet.css';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      logout: 'Logout',
      signup: 'Signup',
      login: 'Login',
      search: 'Search',
      rescue_date: 'Rescue date',
      rescuers: 'Rescuers',
      rescued: 'Rescued',
      unrescued: 'Unrescued',
      rescue_from: 'Rescue from'
    }
  },
  fr: {
    message: {
      logout: 'Déconnexion',
      signup: 'Inscription',
      login: 'Connexion',
      search: 'Recherche',
      rescue_date: 'Date de sauvetage',
      rescuers: 'Sauveteurs',
      rescued: 'Sauvés',
      unrescued: 'Non sauvés',
      rescue_from: 'Sauvetage du'
    }
  }
};

const i18n = new VueI18n({
  locale: 'fr',
  messages
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }, i18n
}).$mount('#app')

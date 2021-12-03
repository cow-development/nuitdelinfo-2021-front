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
      logout: 'Logout'
    }
  },
  fr: {
    message: {
      logout: 'Déconnexion'
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

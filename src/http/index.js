import axios from 'axios'
import vuexStore from '../store'

const apiAxiosClient = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}/api`,
})

console.log(process.env);
console.log('ok');

apiAxiosClient.interceptors.request.use(config => {
  return addHeaders(config)
}, error => {
  return Promise.reject(error)
});

apiAxiosClient.interceptors.response.use(response => {
  return response
}, error => {
  if (!error.response) {
    return Promise.reject(error)
  }
  let message = 'Une erreur s\'est produite';
  if (error.response.status === 401) {
    message = error.response.data.Erreur || 'Votre session a expiré. Merci de vous reconnecter';
  } else if (error.response.status === 403) {
    message = error.response.data.Erreur || message
  }
  return Promise.reject(error)
});

function addHeaders(config) {
  if (vuexStore.getters.user.token) {
    config.headers['Authorization'] = `Bearer ${vuexStore.getters.user.token}`
  }
  return config
}

export default apiAxiosClient;
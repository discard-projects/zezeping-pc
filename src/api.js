import Vue from 'vue'
import axios from 'axios'
let store = null
const cusAxios = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 90000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Api-Platform': 'pc'
  }
})
cusAxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Add a request interceptor
cusAxios.interceptors.request.use(function (config) {
  Vue.prototype.$loadingBar.start()
  // Do something before request is sent
  Object.assign(config.headers, tokenHeader())
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// Add a response interceptor
cusAxios.interceptors.response.use(function (response) {
  Vue.prototype.$loadingBar.finish()
  // Do something with response data
  if (response.data.message) {
    Vue.prototype.$message({ showClose: true, message: response.data.message, type: 'success' })
  } else if (response.status === 204) {
    Vue.prototype.$message({ showClose: true, message: 'success', type: 'success' })
  }
  return response
}, function (error) {
  Vue.prototype.$loadingBar.error()
  // Do something with response error
  if (error.response) {
    if (error.response.status === 403) {
      Vue.prototype.$message({ showClose: true, message: 'token overdue!', type: 'error' })
      store.dispatch('logout')
    } else if (error.response.status === 401) {
      console.log(error.response.data.errors)
      Vue.prototype.$message({ showClose: true, message: error.response.data.message || error.response.data.errors, type: 'error' })
      store.dispatch('logout')
    } else if (error.response.status === 500) {
      Vue.prototype.$message({ showClose: true, message: 'data error!', type: 'error' })
    } else if (error.response.status === 404) {
      Vue.prototype.$message({ showClose: true, message: '404 Not Found!', type: 'error' })
    } else if (error.response.data && error.response.data.message) {
      Vue.prototype.$message({ showClose: true, message: error.response.data.message, type: 'error' })
    }
  } else {
    Vue.prototype.$message({ showClose: true, message: 'network error', type: 'error' })
  }
  return Promise.reject(error)
})

const tokenHeader = () => {
  const authInfo = store.state.user.authInfo
  if (authInfo) {
    return {
      'access-token': authInfo['token'],
      client: authInfo['client'],
      uid: authInfo['uid']
    }
  }
  return {}
}

var api = {
  // login and auth
  login: (data) => cusAxios.post('auth/sign_in', data),
  register: (data) => cusAxios.post('auth', data),
  logout: () => cusAxios.delete('/auth/sign_out'),
  loginFromGithub: (data) => cusAxios.get('auth/github', data),
  // validateToken: () => instance.get('auth/validate_token'),
  // must auth
  getMeProfile: () => cusAxios.get('v1/profile'),
  // Home
  getHome: () => cusAxios.get('v1/home'),
  getStore: (id) => cusAxios.get(`v1/stores/${id}`),
  getStoreComments: (storeId) => cusAxios.get(`v1/stores/${storeId}/comments`),
  postStoreComment: (storeId, data) => cusAxios.post(`v1/stores/${storeId}/comments`, data)
}
api.install = function (Vue, options) {
  if (options.store) {
    store = options.store
  }
  Vue.prototype.api = api
  Vue.prototype.cusAxios = cusAxios
  Vue.prototype.axios = axios
}
export default api

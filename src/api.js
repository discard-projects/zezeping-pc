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
  // Do something before request is sent
  Object.assign(config.headers, tokenHeader())
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// Add a response interceptor
cusAxios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/stylesheets/application.scss'
import './components/common'

Vue.config.productionTip = false

Vue.use(api, {store})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.prototype.validLogin = () => {
  if (store.state.user.authInfo) {
    return store.state.user.authInfo
  } else {
    alert('请先登录')
  }
}

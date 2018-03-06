/* eslint-disable */
import Vue from 'vue'

import pcui from './pcui'
Vue.use(pcui)

import { Loading, Form, FormItem, Input } from 'element-ui'
let components = [Form, FormItem, Input]
components.forEach((element) => {
  Vue.component(element.name, element)
})
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service


import LoadingBar from './Shared/LoadingBar'
LoadingBar.config({color: '#5cb85c', failedColor: '#ff4949'})
Vue.prototype.$loadingBar = LoadingBar

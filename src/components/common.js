/* eslint-disable */
import Vue from 'vue'

import LoadingBar from './Shared/LoadingBar'
LoadingBar.config({color: '#5cb85c', failedColor: '#ff4949'})
Vue.prototype.$loadingBar = LoadingBar

import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: (resolve) => { require(['@/views/Home/Index'], resolve) } },
    { path: '/login', name: 'Login', component: (resolve) => { require(['@/views/Login'], resolve) } },
    { path: '/profile', name: 'Profile', component: (resolve) => { require(['@/views/Profile'], resolve) } },
    { path: '/stores/:id', name: 'storeDetail', component: (resolve) => { require(['@/views/Store/Show'], resolve) } },
    { path: '/posts', name: 'Post', component: (resolve) => { require(['@/views/Post/Index'], resolve) } },
    { path: '/posts/new', name: 'PostNew', component: (resolve) => { require(['@/views/Post/parts/New'], resolve) } },
    { path: '/posts/:id', name: 'PostShow', component: (resolve) => { require(['@/views/Post/parts/Show'], resolve) } },
    { path: '/posts/:id/edit', name: 'PostEdit', component: (resolve) => { require(['@/views/Post/parts/Edit'], resolve) } }
  ]
})

// When handling the refresh, vuex is cleared but the admin is already logged in
if (window.localStorage.authInfo) {
  store.dispatch('setAuthInfo', JSON.parse(window.localStorage.authInfo))
}
if (window.localStorage.userInfo) {
  store.dispatch('setUserInfo', JSON.parse(window.localStorage.userInfo))
}

export default router

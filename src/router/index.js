import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

const routes = [
  { path: '/', component: () => import('@/components/IndexComponent') },
  { path: '/login', name: 'login', component: () => import('@/components/auth/LoginComponent') },
  {
    path: '/register',
    name: 'register',
    title: 'Registration',
    component: () => import('@/components/auth/RegisterComponent')
  }
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   title: 'logout',
  //   component: () => import('@/components/Logout')
  // }
]

export default new Router({
  mode: 'history',
  routes
})

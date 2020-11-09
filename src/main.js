import Vue from 'vue'
import App from './App.vue'

// Bootstrap 4
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// router
import VueRouter from 'vue-router'
import router from './router'
// axios for http
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

Vue.use(axios, VueAxios)

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router
})

app.$mount('#app')

import Vue from 'vue'
import App from './App.vue'

// Bootstrap 4
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// router
import VueRouter from 'vue-router'
import router from './router'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUserSecret)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(axios, VueAxios)

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  comments: { App },
  router
})

app.$mount('#app')

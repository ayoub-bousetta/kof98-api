import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import players from '@/components/parts/players'
import singlePlayer from '@/components/parts/singlePlayer'

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  { path: '/', component: players },
  { path: '/:id', component: singlePlayer }
]

const router = new VueRouter({
  routes,
    mode: 'history'
})

new Vue({router: router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import AppCustomers from '@/components/AppCustomers'
import AppProducts from '@/components/AppProducts'
import LatestPurchases from '@/components/LatestPurchases'

const routes = [
  {path: '/customers', component:AppCustomers},
  {path: '/products' , component:AppProducts},
  {path: '/customer/:id' , component:LatestPurchases},
]

const router = new VueRouter ({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

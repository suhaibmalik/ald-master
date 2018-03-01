import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('@/components/Dashboard')
    },
    {
      path: '/manual-control',
      name: 'manual-control',
      component: require('@/components/ManualControl')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

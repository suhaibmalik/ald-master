import Vue from 'vue'
import axios from 'axios'
import serialport from 'serialport'

import App from './App'
import router from './router'

Vue.use(require('vue-chartist'))

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.serial = Vue.prototype.$serial = serialport

// /* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

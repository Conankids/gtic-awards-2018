// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import Axios from 'axios'
import layer from 'vue-layer'

Vue.prototype.$layer = layer(Vue);

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {loading: require('@/assets/images/default.png')})

Vue.prototype.$http = Axios

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


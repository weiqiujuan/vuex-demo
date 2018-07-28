// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/!* eslint-disable no-new *!/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/


import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import {currency} from './currency'
import router from './router'


Vue.filter('currency', currency);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});


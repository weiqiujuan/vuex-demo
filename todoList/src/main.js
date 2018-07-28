// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import Vue from 'vue'
import App from './components/App'
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
import store from './store'
import App from './components/App.vue'
import router from './router'

new Vue({
  store, // inject store to all children
  el: '#app',
  router,
  render: h => h(App)
});

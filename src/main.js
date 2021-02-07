import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/style.scss';

Vue.config.productionTip = false

import VuePageTransition from 'vue-page-transition';
Vue.use(VuePageTransition);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

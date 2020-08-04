import Vue from 'vue'
import App from './App.vue'

import { store } from './assets/store/store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})

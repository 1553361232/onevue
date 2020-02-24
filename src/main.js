// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import './util/common';
import globalAPI from './util/globalAPI';
import vueResource from 'vue-resource';


Vue.prototype.axios = axios;
Vue.prototype.globalAPI =globalAPI;


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


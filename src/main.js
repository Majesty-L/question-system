import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from '@/router';
import * as axios from '@/api.js';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

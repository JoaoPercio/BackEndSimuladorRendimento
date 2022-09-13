import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Vue from 'vue';
import router from '@/router';
import App from '@/App.vue';

import '@/directives';
import '@/config/element-ui';
import '@/config/vee-validate';
import '@/config/biblioteca-components';

import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

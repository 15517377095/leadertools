import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import bootstrap from 'bootstrap';
import router from './router/router.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import Wrap from './App.vue'
import router from './router.js'
import store from './store.js'

<<<<<<< HEAD
=======


>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  render: h => h(Wrap),
  router,
  store,
}).$mount('#app')
 
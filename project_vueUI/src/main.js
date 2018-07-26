import Vue from 'vue'
import Wrap from './App.vue'
import router from './router.js'
import store from './store.js'
<<<<<<< HEAD
// import Addgoods from './components/goodsManage/addGoods'
// Vue.component("Addgoods",Addgoods)



import Addgoods from './components/goodsManage/addGoods'
Vue.component("Addgoods",Addgoods)



=======
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Addgoods from './components/goodsManage/addGoods'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component("Addgoods",Addgoods)
new Vue({
  render: h => h(Wrap),
  router,
  store,
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ViewRouter from 'vue-router'
import Routes from './router/router'

Vue.config.productionTip = false
Vue.use(ViewRouter);

const router = new ViewRouter({
  routes: Routes,
  mode: 'history'
}); 

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

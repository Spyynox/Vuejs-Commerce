import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import Homepage from './pages/Homepage.vue'
import Product from './components/Product.vue'
import ProductListItem from './components/ProductListItem.vue'

Vue.use(VueRouter); 

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/product/:id(\\d+)',
      component: Product, ProductListItem
    },
    {
      path: '*',
      redirect: '/'
    },

  ],
});

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

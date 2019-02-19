// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
//引入store
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import VueScroller from 'vue-scroller'


import i18n from './lang'

import { Page ,Row,Col,Carousel,CarouselItem,Tabs,TabPane} from 'iview';
import goTop from './components/goTop/goTop.vue';

import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'


Vue.component('Page', Page);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);
Vue.component('goTop',goTop);
Vue.use(ElementUI);
Vue.use(Vuex)
/* eslint-disable no-new */

Vue.use(ElementUI,{
  size:"medium",
  i18n:(key,value)=>i18n.t(key,value)
})

Vue.use(VueScroller)
new Vue({
  el: '#app',
  router,
  $,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

// router.afterEach(function (to) {
//   window.scrollTo(0, 0)
// })

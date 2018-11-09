// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'stylues/reset.css'   //重置样式
import 'stylues/iconfont.css' //图标库
import 'stylues//border.css'  //解决1像素的问题
import fastClick from 'fastclick' //解决点击延迟

import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播图插件
import 'swiper/dist/css/swiper.css' //轮播图css样式

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

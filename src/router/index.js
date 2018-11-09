import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Home from '@/page/home/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

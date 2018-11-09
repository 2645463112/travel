<template>
  <div class="Home">
  	<app-header></app-header>
    <app-swiper></app-swiper>
    <app-icons></app-icons>
    <app-notice></app-notice>
    <app-center></app-center>
    <app-weekend></app-weekend>
  </div>
</template>
<script>

import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/Icons.vue'
import Notice from './components/Notice.vue'
import Center from './components/Center.vue'
import Weekend from './components/Weekend.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
  	"app-header":Header,
    "app-swiper":Swiper,
    "app-icons":Icons,
    "app-notice":Notice,
    "app-center":Center,
    "app-weekend":Weekend
  } 
}
</script>
<style scoped>
.Home{
  background-color: #f5f5f5; 
}
</style>
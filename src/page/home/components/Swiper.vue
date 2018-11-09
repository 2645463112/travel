<template>
    <div class="swiper">
      <swiper :options="swiperOption">
        
        <swiper-slide>
          <img src="http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          autoplay: 3000, //可选选项，自动滑动
          loop:true,//可选选项，开启循环
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper{
  width: 100%;
  height: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 31.25%
}
.swiper img {
  width: 100%;
}
</style>


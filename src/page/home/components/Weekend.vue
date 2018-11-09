<template>
  <div class="weekend">
  	<div class="title">周末去哪</div>
  	<ul>
  		<li class="item-img-wrapper">
  			<img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="" class="item-img">
  			<div class="info-item">
  				<p class="item-title">北京温泉排行榜</p>
  				<p class="item-desc">细数北京温泉，，温暖你的冬天</p>
  			</div>
  		</li>
      <li class="item-img-wrapper">
        <img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="" class="item-img">
        <div class="info-item">
          <p class="item-title">北京温泉排行榜</p>
          <p class="item-desc">细数北京温泉，，温暖你的冬天</p>
        </div>
      </li>
  	</ul>
  </div>
</template>
<script>
export default {
  name: 'Weenkend',
  data () {
    return {
    }
  } 
}
</script>

<style scoped>
.title{
  line-height: .8rem;
  margin-top: .4rem;
  text-indent: .2rem;
  color: #212121;
  font-size: .4rem;
}
.item{
  background: #fff;
}
.item-img-wraper{
  overflow: hidden;
  height: 38%;
}
.info-item{
  padding: .1rem;
}
.item-title{
  line-height: .54rem;
  font-size: .32rem; 
}
.title-desc{
  line-height: .4rem;
  color: #616161;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img{
  width: 100%;
}
</style>
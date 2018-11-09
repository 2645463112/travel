<template>
    <div class="icons">
	  	    <swiper :options="swiperOption">
			    <swiper-slide>
			       <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>
			        <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>
			        <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>
			       <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>

			        <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>
			        <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>
			        <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>
			       <div class="iocn">
				       	<div class="iocn-img">
				       		<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" class="iocn-img-logo">
				       	</div>
				       	<p class="text">景点门票</p>
			       </div>

			    </swiper-slide>
	        </swiper>
	    </div>
    </div>
</template>
<script>
export default {
  name: 'Icons',
  data () {
    return {
    	swiperOption:{
    		autoplay:false
    	}
    }
  } 
}
</script>

<style scoped>
.icons{
	background: #fff;
}
.iocn{
	position: relative;
	overflow: hidden; /*超出部分隐藏*/
	width: 25%;
	padding-bottom: 28%;
	float: left;
	height: 0;
}
.iocn-img{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	border: .44rem;
	box-sizing: border-box;
	padding: .1rem;
}
.iocn-img-logo{
	display: flex;
	width: 100%;
	margin: 0 auto;
}
.text{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: .44rem;
	line-height:.44rem;
	text-align: center;
	color: #333; 

}
</style>

<template>
  <div class="center">
  	<div class="title">热销推荐</div>
  	<ul>
  		<li class="item">
  			<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="" class="item-img">
  			<div class="info">
  				<p class="item-title">故宫</p>
  				<p class="item-desc">东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑,东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑</p>
  				<button class="item-button">查看详情</button>
  			</div>
  		</li>
  		<li class="item">
  			<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="" class="item-img">
  			<div class="info">
  				<p class="item-title">故宫</p>
  				<p class="item-desc">东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑,东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑</p>
  				<button class="item-button">查看详情</button>
  			</div>
  		</li>
  		<li class="item">
  			<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="" class="item-img">
  			<div class="info">
  				<p class="item-title">故宫</p>
  				<p class="item-desc">东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑,东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑</p>
  				<button class="item-button">查看详情</button>
  			</div>
  		</li>
  		<li class="item">
  			<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="" class="item-img">
  			<div class="info">
  				<p class="item-title">故宫</p>
  				<p class="item-desc">东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑,东方宫殿建筑代表代表，世界宫殿建筑典范东方宫殿建筑</p>
  				<button class="item-button">查看详情</button>
  			</div>
  		</li>
  	</ul>
  </div>
</template>
<script>
export default {
  name: 'Center',
  data () {
    return {
    }
  } 
}
</script>

<style scoped>
.title{
	line-height: .8rem;
	margin-top: .2rem;
	text-indent: .2rem;
	color: #212121;
	 font-size: .4rem;
}
.item{
	display: flex;
	overflow: hidden;
	height: 1.9rem;
	background: #fff; 
}
.item-img{
	width: 1.7rem;
	height: 1.7rem;
	padding: .1rem;
}
.info{
	flex: 1;
	padding: .1rem;
	min-width: 0; 
}
.item-desc{
	color: #ccc;
	padding: .1rem 0;
	line-height: .4rem;
	overflow: hidden;
	white-space: nowrap; /*文字只占一行排列*/
	text-overflow: ellipsis; /*文字超出隐藏*/
}
.item-button{
	background: #ff9300;
	line-height: .44rem;
	text-align: center;
	padding: 0 .2rem;
	border-radius: .06rem;
	margin-top: .16rem;
	color: #fff; 
}
</style>
<template>
  <div class="notice">
  	<ul class="ullist">
  		<li class="listitiem-con-item">定位失败</li>
  		<li class="listitiem-con-item">玩水季节</li>
  	</ul>
  	<ul class="ullist list-icon-con">
  		<li class="listitiem-con-item">
  			<img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png" alt="">
  		</li>
  		<li class="listitiem-con-item">
  			<img class="imgs" src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png" alt="">
  		</li>
  	</ul>
  </div>
</template>
<script>
export default {
  name: 'Notice',
  data () {
    return {
    }
  } 
}
</script>

<style scoped>
.notice{
	display: block;
	border-top: 1px solid #e0e0e0;
}
.ullist{
	display: flex;
	width: 100%;
	background: #fff;
	overflow: hidden;
}
.listitiem-con-item{
	overflow: hidden;
	height: .98rem;
	line-height: .89rem;
	text-align: center;
	color: #121212;
	flex: 1;
	border-right: 1px solid #e0e0e0;
}
.listitiem-con-item:nth-child(2){
	border-right: none;
}
.list-icon-con{
	margin-top: .2rem;
	height: 1.4rem;
}
.list-icon-con .imgs{
	display: block;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: auto 100%;
}
</style>
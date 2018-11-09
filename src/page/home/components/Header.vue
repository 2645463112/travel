<template>
  <div class="header">
  	<div class="header-left">
  		<div class="iconfont back-icon">&#xe624;</div>
  	</div>
  	<div class="header-input">
  		输入城市景点
  	</div>
  	<div class="header=right">
  		郑州
  		<span class="iconfont arrow-icon">&#xe64a;</span>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  } 
}
</script>

<style scoped>
	.header{
		display: flex;
		line-height: .86rem;
		background: #00bcd4;
		color: #fff;
	}
	.header-left{
		width: .64rem;
		float: left;
	}
	.header-left .back-icon{
		text-align: center;
		font-size: .4rem;
	}
	.header-input{
		flex: 1;
		line-height: .64rem;
		height: .64rem;
		margin-top: .12rem;
		padding-left: .12rem;
		background: #fff;
		color: #ccc;
		border-radius: .1rem; 
	}
	.header-right{
		width: 1rem;
		float: right;
		padding: 0 .1rem;
		text-align: center;
		color: #fff;
	}
	.arrow-icon{
		font-size: .24rem;
	}
</style>
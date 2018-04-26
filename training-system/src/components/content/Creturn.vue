<template>
	<div id="creturn">
		<router-link to="/">
			<div class="return"></div>
		</router-link>
	</div>
</template>

<script>
	
</script>

<style scoped>
	#creturn{
		position: fixed;
		top:300px;
		right:0;
		z-index:99999;
	}
	.return{
		width:69px;
		height:104px;
		background: url("../../assets/img/creturn.png") no-repeat;
	}
</style>
<template>
	<div id="home">
		<AsideView></AsideView>
		<ContentView></ContentView>	
	</div>	
</template>

<script>
import AsideView from './Aside.vue'
import ContentView from './Content.vue'

export default{
	components:{
		AsideView,
		ContentView
	}
}
</script>

<style scoped>
	#home{
		position:absolute;
		top:65px;
		left:0;
		bottom:50px;
		right:0;
		min-width:1310px;
	}
</style>
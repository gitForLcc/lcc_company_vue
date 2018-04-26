<template>
	<div id="tool">
		<TshowView v-show="TToolsShow"></TshowView>
		<router-view></router-view>
	</div>
</template>

<script>
import TshowView from './tool/Tshow.vue'

import {mapGetters,mapActions} from 'vuex'
	export default{
		components:{
			TshowView
		},
		computed:mapGetters([
			'TToolsShow'
		]),
		beforeMount(){
			var reg=/^\/tools.+$/;
			if(reg.test(this.$route.path)){
				this.$store.dispatch('THideTools')
			}else{
				this.$store.dispatch('TShowTools')
			}
		},
		watch:{
			$route(to,from){
				var reg=/^\/tools.+$/;
				if(reg.test(to.path)){
					console.log('THideTools',to.path)
					this.$store.dispatch('THideTools')
				}else{
					console.log('THideTools',to.path)
					this.$store.dispatch('TShowTools')
				}
			}
		}
	}
</script>

<style scoped>
	#tool{
		width:100%;
    height:100%;
    background: #fff;
    min-height:500px;
    padding:30px 0;
	}
</style>
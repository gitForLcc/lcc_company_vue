<template>
	<div id="job">
		<JShowView v-show="JJobShow"></JShowView>
		<router-view></router-view>
	</div>
</template>

<script>
	import JShowView from './job/JShow.vue'
	import {mapGetters,mapActions} from 'vuex'

	export default{
		computed:mapGetters([
			'JJobShow'
		]),
		components:{
			JShowView
		},
		beforeMount(){
			var reg=/^\/jobs.+$/;
			if(reg.test(this.$route.path)){
				this.$store.dispatch('JHideJob')
			}else{
				this.$store.dispatch('JShowJob')
			}
		},
		watch:{
			$route(to,from){
				var reg=/^\/jobs.+$/;
				if (reg.test(to.path)){
					this.$store.dispatch('JHideJob')
				}else{
					this.$store.dispatch('JShowJob')
				}
				
			}
		}
	}
</script>

<style scoped>
	#job{
		width:100%;
		height:100%;
		background: #fff;
		min-height:500px;
		padding:30px 0;
	}
</style>
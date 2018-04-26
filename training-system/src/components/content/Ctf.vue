<template>
	<div id="ctf">
		<CshowView v-show="CCtfShow"></CshowView>
		<router-view></router-view>
	</div>
</template>

<script>
	import CshowView from './ctf/Cshow.vue'
	import {mapGetters,mapActions} from 'vuex'
	export default{
		computed:mapGetters([
			'CCtfShow'
		]),
		components:{
			CshowView
		},
		beforeMount(){
			var reg=/^\/ctf.+$/;
			if(reg.test(this.$route.path)){
				this.$store.dispatch('CHidectf')
			}else{
				this.$store.dispatch('CShowctf')
			}
		},
		watch:{
			$route(to,from){
				var reg=/^\/ctf.+$/;
				if(reg.test(to.path)){
					this.$store.dispatch('CHidectf')
				}else{
					this.$store.dispatch('CShowctf')
				}
			}
		}
	}
</script>

<style scoped>
	#ctf{
		width:100%;
		height:100%;
		background: #fff;
		min-height:500px;
		padding:30px 0;
	}
</style>
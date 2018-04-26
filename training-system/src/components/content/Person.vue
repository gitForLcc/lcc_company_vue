<template>
	<div id="person">
		<PShowView v-show="PPersonShow"></PShowView>
		<router-view></router-view>
	</div>
</template>

<script>
	import PShowView from './person/PShow.vue'
	import {mapGetters,mapActions} from 'vuex'
	export default{
		computed:mapGetters([
			'PPersonShow'
		]),
		components:{
			PShowView
		},
		beforeMount(){
			var reg=/^\/persons.+$/;
			if(reg.test(this.$route.path)){
				this.$store.dispatch('PHidePerson')
			}else{
				this.$store.dispatch('PShowPerson')
			}
		},
		watch:{
			$route(to,from){
				var reg=/^\/persons.+$/;
				if(reg.test(to.path)){
					this.$store.dispatch('PHidePerson')
				}else{
					this.$store.dispatch('PShowPerson')
				}
			}
		}
	}
</script>

<style scoped>
	#person{
		width:100%;
    height:100%;
    background: #fff;
    min-height:500px;
	}
</style>
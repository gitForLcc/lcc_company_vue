<template>
	<div id="course">
		<CourShowView v-show="CCourseShow"></CourShowView>
		<router-view></router-view>
	</div>
</template>

<script>
	import CourShowView from './course/CourShow.vue'
	import {mapGetters,mapActions} from 'vuex'

	export default{
		computed:mapGetters([
			'CCourseShow'
		]),
		components:{
			CourShowView
		},
		beforeMount(){
			var reg=/^\/courses.+$/;
			if(reg.test(this.$route.path)){
				this.$store.dispatch('CHideCourse')
			}else{
				this.$store.dispatch('CShowCourse')
			}
		},
		watch:{
			$route(to,from){
				var reg=/^\/courses.+$/;
				if(reg.test(to.path)){
					this.$store.dispatch('CHideCourse')
				}else{
					this.$store.dispatch('CShowCourse')
				}
			}
		}
	}
</script>

<style scoped>
	#course{
		width:100%;
		height:100%;
		background: #fff;
		min-height:500px;
		padding:30px 0;
	}
</style>
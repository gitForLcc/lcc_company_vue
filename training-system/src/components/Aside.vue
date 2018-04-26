<template>
	<div id="aside">
		<ClockView></ClockView>
		<CmainView v-show="mainShow"></CmainView>
		<CoursesView v-show="courseShow"></CoursesView>
		<JobsView v-show="jobShow"></JobsView>
		<CtfView v-show="ctfShow"></CtfView>
		<TargetsView v-show="targetShow"></TargetsView>
		<ToolsView v-show="toolShow"></ToolsView>
		<PersonsView v-show="personShow"></PersonsView>
	</div>
</template>

<script>
import ClockView from '../components/public/Clock.vue'
import CmainView from './aside/modules/Cmain.vue'
import CoursesView from './aside/modules/Courses.vue'
import JobsView from './aside/modules/Jobs.vue'
import CtfView from './aside/modules/Ctf.vue'
import TargetsView from './aside/modules/Targets.vue'
import ToolsView from './aside/modules/Tools.vue'
import PersonsView from './aside/modules/Persons.vue'

import {mapGetters,mapActions} from 'vuex'
	
	export default{
		beforeMount(){
			if(/^\/home.*$/.test(this.$route.path)){
				this.$store.dispatch('showMain')
			}else if (/^\/courses.*$/.test(this.$route.path)){
				this.$store.dispatch('showCourse')
			}
			else if (/^\/jobs.*$/.test(this.$route.path)){
				this.$store.dispatch('showJob')
			}
			else if (/^\/ctf.*$/.test(this.$route.path)){
				this.$store.dispatch('showCtf')
			}
			else if (/^\/targets.*$/.test(this.$route.path)){
				this.$store.dispatch('showTarget')
			}
			else if (/^\/tools.*$/.test(this.$route.path)){
				this.$store.dispatch('showTool')
			}
			else if (/^\/persons.*$/.test(this.$route.path)){
				this.$store.dispatch('showPerson')
			}
		},
		computed:mapGetters([
		'mainShow',
		'courseShow',
		'jobShow',
		'ctfShow',
		'targetShow',
		'toolShow',
		'personShow'
		]),
		watch:{
			$route(to,from){
				if(/^\/home.*$/.test(to.path)){
					this.$store.dispatch('showMain')
				}else if (/^\/courses.*$/.test(to.path)){
					this.$store.dispatch('showCourse')
				}
				else if (/^\/jobs.*$/.test(to.path)){
					this.$store.dispatch('showJob')
				}
				else if (/^\/ctf.*$/.test(to.path)){
					this.$store.dispatch('showCtf')
				}
				else if (/^\/targets.*$/.test(to.path)){
					this.$store.dispatch('showTarget')
				}
				else if (/^\/tools.*$/.test(to.path)){
					this.$store.dispatch('showTool')
				}
				else if (/^\/persons.*$/.test(to.path)){
					this.$store.dispatch('showPerson')
				}
			}
		},
		components:{
			ClockView,
			CmainView,
			CoursesView,
			JobsView,
			CtfView,
			TargetsView,
			ToolsView,
			PersonsView
		}
	}
</script>

<style scoped>
	#aside{
		position:absolute;
		top:0;
		left:0;
		bottom:50px;
		width:250px;
	}
</style>
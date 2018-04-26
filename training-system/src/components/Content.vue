<template>
	<div id="content">
		<router-view></router-view>
		<CreturnView></CreturnView>
		<CfooterView v-show="CfooterShow"></CfooterView>
	</div>
</template>

<script>
import CfooterView from './content/Cfooter.vue'
import CreturnView from './content/Creturn.vue'

import {mapGetters} from 'vuex'



export default{
	computed:mapGetters([
		'CfooterShow'
		]),
	// computed:{
	// 	...mapGetters([
	// 			'CfooterShow'
	// 		])
	// },
	components:{
		CfooterView,
		CreturnView
	},
	beforeMount(){
			if(this.$route.path != '/home'){
				this.$store.dispatch('CHideFooter')
			}else{
				this.$store.dispatch('CShowFooter')
			}
	},
	watch:{
		$route(to,from){
			if(to.path != '/home'){
				this.$store.dispatch('CHideFooter')
			}else{
				this.$store.dispatch('CShowFooter')
			}
		}
	}
}
</script>

<style scoped>
	#content{
		position:absolute;
		top:0;
		left:250px;
		bottom:0px;
		right:10px;
		overflow:hidden;
	}	
</style>
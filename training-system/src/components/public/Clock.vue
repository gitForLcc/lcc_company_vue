<template>
	<div class="clock">
		<span>{{time | moments}}</span>
	</div>
</template>

<script>
import moment from 'moment'
	export default{
		mounted(){
			this.setTime();
		},
		methods:{
			setTime(){
				setInterval(function(){
					this.time=moment();
				}.bind(this),1000)
			}
		},
		filters:{
			moments:function(el){
				return moment().format("dddd h:mm:ss a")
			}
		},
		data(){
			return{
				time:String
			}
		}
	}
</script>

<style scoped>
	.clock{
		width:230px;
		height:50px;
		line-height:50px;
		text-align: center;
		background:rgba(0,0,0,.2);
		margin-left:10px;
	}
</style>
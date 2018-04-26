<template>
	<div id="courmain">
		<el-collapse accordion>
		  <el-collapse-item>
		    <template slot="title">
		      <span>01</span>&nbsp;&nbsp;WEB基础知识<span class="pages">课程主页</span>
		    </template>
		    <div class="handle">
		    	<el-button>课件</el-button>
		    	<el-button type="primary">视频</el-button>
		    	<el-button type="success">实验</el-button>
		    </div>
		    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		  </el-collapse-item>
		  <el-collapse-item>
		  	<template slot="title">
		      <span>02</span>&nbsp;&nbsp;WEB安全基础<span class="pages">课程主页</span>
		    </template>
		    <div class="handle">
		    	<el-button>课件</el-button>
		    	<el-button type="primary">视频</el-button>
		    	<el-button type="success">实验</el-button>
		    </div>
		    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
		  </el-collapse-item>
		  <el-collapse-item>
		  	<template slot="title">
		      <span>03</span>&nbsp;&nbsp;WEB安全工具<span class="pages">课程主页</span>
		    </template>
		     <div class="handle">
		    	<el-button>课件</el-button>
		    	<el-button type="primary">视频</el-button>
		    	<el-button type="success">实验</el-button>
		    </div>
		    <div>简化流程：设计简洁直观的操作流程；</div>
		    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		  </el-collapse-item>
		  <el-collapse-item>
		  	<template slot="title">
		      <span>04</span>&nbsp;&nbsp;WEB安全实战<span class="pages">课程主页</span>
		    </template>
		    <div class="handle">
		    	<el-button>课件</el-button>
		    	<el-button type="primary">视频</el-button>
		    	<el-button type="success">实验</el-button>
		    </div>
		    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
		  </el-collapse-item>
		  <el-collapse-item>
		  	<template slot="title">
		      <span>05</span>&nbsp;&nbsp;WEB安全体系建设<span class="pages">课程主页</span>
		    </template>
		    <div class="handle">
		    	<el-button>课件</el-button>
		    	<el-button type="primary">视频</el-button>
		    	<el-button type="success">实验</el-button>
		    </div>
		    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
		  </el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	#courmain{
		width:60%;
		height:100%;
		margin:0 auto;

	}
	.pages{
		float:right;
		font-size:12px;
		margin-right:15px;
		height:30px;
		line-height:30px;
		width:110px;
		border:1px solid #000000;
		text-align: center;
		margin-top:10px;
	}
	.handle{
		float:right;
	}
	.el-collapse{
		height:100%;
		padding:20px;
		overflow-y: auto;
		border:2px solid #ddd;
		box-shadow: 0 0 2px 2px #ddd;
	}
</style>
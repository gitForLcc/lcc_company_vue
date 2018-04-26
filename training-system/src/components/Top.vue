<template>
	<div id="top">
		<router-link to="/" tag="div" class="logo lf">
			<a href="javascript:;">
				<img src="../assets/img/logo_hm.png">
			</a>
			<span class="versions">V2.0</span>
		</router-link>
		<div class=" icons lf">
			<el-badge :value="12" class="item1">
			  <i class="el-icon-edit"></i>
			</el-badge>
			<el-badge :value="3" class="item2">
			  <i class="el-icon-share"></i>
			</el-badge>
			<el-badge :value="3" class="item3">
			  <i class="el-icon-delete"></i>
			</el-badge>
		</div>
		<div class="rt">
			<div class="rt settings">
				<i></i>
			 <el-dropdown>
		      <span class="el-dropdown-link">
		        设置 <i class="el-icon-setting"></i>
		      </span>
		      <el-dropdown-menu slot="dropdown">
		      	<ul class="bg">
		      		<li @click="changeBg(index+1)" v-for="(value,index) in bgList">{{value.name}}</li>
		      		
		      	</ul>
		        <!-- <el-dropdown-item>bg1</el-dropdown-item>
		        <el-dropdown-item>bg2</el-dropdown-item>
		        <el-dropdown-item>bg3</el-dropdown-item>
		        <el-dropdown-item>bg4</el-dropdown-item>
		        <el-dropdown-item>bg5</el-dropdown-item> -->
		      </el-dropdown-menu>
		    </el-dropdown>
			</div>
			<div class="rt">
				 <el-dropdown>
			      <span class="el-dropdown-link">
			      	<i class="el-icon-caret-bottom"></i>
			        欢迎&nbsp;&nbsp;user1
			      </span>
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>退出</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
			</div>
			<div class="rt head">
				<router-link to="/" tag="div">
					<a href="javascript:;">
						<img src="../assets/img/head.jpg">
					</a>
				</router-link>
			</div>
		</div>
		<h1>胡门网络攻防平台</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bgList:[
					{
						name:'背景1',
					},
					{
						name:'背景2',
					},
					{
						name:'背景3',
					},
				]
			}
		},
		methods:{
			changeBg(num){
				var html=document.getElementsByTagName('html')[0]
				html.className='html'+num
			}
		}
	}
</script>

<style scoped>
#top{
	height:65px;
	padding: 0 10px 0 10px;
}
#top:after{
	content:'';
	display:block;
	clear:both;
}
/*init*/
.logo{
	width:230px;
	height:60px;
	line-height:60px;
}
.logo a{
	display: inline-block;
	width:160px;
	height:60px;
}
.logo a img{
	width:160px;
	height:60px;
}
.icons{
	position:relative;
	top:20px;
}
.icons div{
	position: relative;
	top:5px;
	margin-left:10px;
}
.versions{
	position: relative;
	top:8px;
	padding:3px 5px;
	font-size:12px;
	background:#273F5C;
	border-radius: 5px;
}
.head{
	width:50px;
	height:50px;
	border-radius: 50%;
	overflow:hidden;
	position: relative;
	top:-12px;
	border:2px solid #fff;
}
.head img{
	width:100%;
	height:100%;
}
#top h1{
	width:500px;
	height:60px;
	line-height: 60px;
	text-align:center;
	margin:0 auto;
}
.rt{
	margin:10px 10px;
}
.el-dropdown-menu{
	background:#C5C3C1;
}
.el-button{
	background-color:#ddd;
}
.el-dropdown-link {
    cursor: pointer;
  }
.item1,.item2,.item3 {
  margin-right: 15px;
}
.el-dropdown{
	color:#fff;
}
ul.bg li{
	list-style: none;
	width:50px;
	height:30px;
	line-height:30px;
	border:1px solid #ddd;
	text-align: center;
	cursor:pointer;
}
</style>
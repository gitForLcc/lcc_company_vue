<template>
	<div id="persons">
		<div class="person">
			<p>
			<b>个人管理</b>
			<i class="el-icon-setting"></i>
		</p>
		<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					    	 </el-menu-item-group>
					          <el-menu-item index="/persons/center"><i class="el-icon-time"></i>个人中心</el-menu-item>
					        </el-menu-item-group>
					         </el-menu-item-group>
					          <el-menu-item index="/persons/rank"><i class="el-icon-date"></i>排名进阶</el-menu-item>
					        </el-menu-item-group>
					         </el-menu-item-group>
					          <el-menu-item index="/persons/task"><i class="el-icon-document"></i>任务挑战</el-menu-item>
					        </el-menu-item-group>
					         </el-menu-item-group>
					          <el-menu-item index="/persons/info"><i class="el-icon-message"></i>信息修改</el-menu-item>
					        </el-menu-item-group>
					         </el-menu-item-group>
					          <el-menu-item index="/persons/exam"><i class="el-icon-message"></i>考试系统</el-menu-item>
					        </el-menu-item-group>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	#persons{
		width:100%;
		padding:10px;
	}
	.person{
		width:100%;
		padding:10px;
		background:rgba(0,0,0,.2);
	}
	.el-menu{
		border-right:none;
	}
	#persons b{
		padding:3px 5px;
		border-radius: 10px;
		background:rgba(0,0,0,.2);
		font-size:13px;
	}
	#persons>div{
		margin-top:8px;
	}
	#persons .person>p>i{
		float:right;
	}
	.menu{
		margin-top:10px;
	}
		.el-submenu__title i{
		color:#fff;
	}
	.el-menu-item i{
		color:#fff;
	}
	.num{
		display: inline-block;
		background:#0DB8DF;
		padding:1px 3px;
		font-size:12px;
		margin-left:15px;
	}
</style>
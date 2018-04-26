<template>
	<div id="tergets">
		<div class="courses">
			<p>
				<b>攻防靶场</b>
				<i class="el-icon-setting"></i>
			</p>
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					        <el-menu-item-group>
					          <el-menu-item index="1"><i class="el-icon-location"></i>PWN</el-menu-item>
					          <el-menu-item index="2"><i class="el-icon-info"></i>逆向</el-menu-item>
					          <el-menu-item index="3"><i class="el-icon-warning"></i>无线电</el-menu-item>
					          <el-menu-item index="4"><i class="el-icon-remove-outline"></i>杂项</el-menu-item>
					          <el-menu-item index="5"><i class="el-icon-message"></i>基础</el-menu-item>
					          <el-menu-item index="6"><i class="el-icon-star-off"></i>密码</el-menu-item>
					          <el-menu-item index="7"><i class="el-icon-location-outline"></i>综合类靶场</el-menu-item>
					          <el-menu-item index="8"><i class="el-icon-view"></i>数据分析</el-menu-item>
					          <el-menu-item index="9"><i class="el-icon-view"></i>WEB</el-menu-item>
					          <el-menu-item index="10"><i class="el-icon-view"></i>移动</el-menu-item>
					          <el-menu-item index="11"><i class="el-icon-view"></i>历届赛事靶场</el-menu-item>
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
	#tergets{
		width:100%;
		height:100%;
	}
	.courses{
		padding:10px;
		background: rgba(0,0,0,.2)
	}
	#tergets b{
		padding:3px 5px;
		border-radius: 10px;
		background:rgba(0,0,0,.2);
		font-size:13px;
	}
	#tergets{
		width:100%;
		padding:10px;
	}
	#tergets>div>p>i{
		float:right;
	}
	#tergets>div{
		margin-top:8px;
	}
	.menu{
		margin-top:10px;
	}
	.el-menu{
		border-right:none;
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
	.el-menu-item{
		height:38px;
		line-height:38px;
	}
</style>
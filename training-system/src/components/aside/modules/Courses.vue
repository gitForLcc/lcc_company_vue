<template>
	<div id="courses">
		<div class="courses">
			<!-- <p>
				<b>课程培训</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p> -->
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-location"></i>
					          <span>攻防认识基础</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1">网络安全导论</el-menu-item>
					          <el-menu-item index="2">C语言及其安全开发</el-menu-item>
					          <el-menu-item index="3">Windows/Linux...</el-menu-item>
					          <el-menu-item index="4">数理基础</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<!-- <p>
				<b>课程培训</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p> -->
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="2">
					        <template slot="title">
					          <i class="el-icon-success"></i>
					          <span>专业基础</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="5">网络安全理论与技术密码学</el-menu-item>
					          <el-menu-item index="6">计算机网络及运维逆向...</el-menu-item>
					          <el-menu-item index="7">系统安全及运维渗透平台</el-menu-item>
					          <el-menu-item index="8">离散数学信息安全数学基础</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<!-- <p>
				<b>课程培训</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p> -->
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="3">
					        <template slot="title">
					          <i class="el-icon-circle-plus-outline"></i>
					          <span>对抗技能</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="9">Web安全及渗透PHP...</el-menu-item>
					          <el-menu-item index="10">软件安全及漏洞分析利用</el-menu-item>
					          <el-menu-item index="11">网络对抗原理渗透测试原理</el-menu-item>
					          <el-menu-item index="12">通信安全AI智能系统</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<!-- <p>
				<b>课程培训</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p> -->
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="4">
					        <template slot="title">
					          <i class="el-icon-bell"></i>
					          <span>项目实践</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="13">安全开发安全运维</el-menu-item>
					          <el-menu-item index="14">漏洞分析挖掘利用</el-menu-item>
					          <el-menu-item index="15">渗透测试</el-menu-item>
					          <el-menu-item index="16">实训/竞赛</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
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
	#courses{
		width:100%;
		height:100%; 
	}
	.courses,.jobs,.ctf,.targets,.tools,.persons{
		padding:10px;
		background: rgba(0,0,0,.2)
	}
	#courses b{
		padding:3px 5px;
		border-radius: 10px;
		background:rgba(0,0,0,.2);
		font-size:13px;
	}
	#courses{
		width:100%;
		padding:10px;
	}
	#courses>div>p>i{
		float:right;
	}
	#courses>div{
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
</style>
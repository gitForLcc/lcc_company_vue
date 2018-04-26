<template>
	<div id="jobs">
		<div class="courses">
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-news"></i>
					          <span>渗透测试工程师</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1">Python Hacking</el-menu-item>
					          <el-menu-item index="2">Web安全及渗透</el-menu-item>
					          <el-menu-item index="3">PHP源码审计</el-menu-item>
					          <el-menu-item index="4">渗透测试原理</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="2">
					        <template slot="title">
					          <i class="el-icon-rank"></i>
					          <span>漏洞逆向工程师</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1">C语言程序设计安全开发</el-menu-item>
					          <el-menu-item index="2">软件逆向安全</el-menu-item>
					          <el-menu-item index="3">软件安全及漏洞分析</el-menu-item>
					          <el-menu-item index="4">网络安全原理</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="3">
					        <template slot="title">
					          <i class="el-icon-upload"></i>
					          <span>安全研发工程师</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1">计算机</el-menu-item>
					          <el-menu-item index="2">网络安全理论与技术</el-menu-item>
					          <el-menu-item index="3">密码学</el-menu-item>
					          <el-menu-item index="4">网络对抗原理</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="4">
					        <template slot="title">
					          <i class="el-icon-document"></i>
					          <span>安全运维工程师</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1">Windows/Linux操作...</el-menu-item>
					          <el-menu-item index="2">kali渗透平台</el-menu-item>
					          <el-menu-item index="3">系统安全及运维</el-menu-item>
					          <el-menu-item index="4">设备安全及运维</el-menu-item>
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
	#jobs{
		width:100%;
		height:100%;
	}
	.courses,.jobs,.ctf,.targets,.tools,.persons{
		padding:10px;
		background: rgba(0,0,0,.2)
	}
	#jobs b{
		padding:3px 5px;
		border-radius: 10px;
		background:rgba(0,0,0,.2);
		font-size:13px;
	}
	#jobs{
		width:100%;
		padding:10px;
	}
	#jobs>div>p>i{
		float:right;
	}
	#jobs>div{
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
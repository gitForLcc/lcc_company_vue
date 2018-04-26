<template>
	<div id="cmain">
		<div class="courses">
			<p>
				<b>课程培训</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p>
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-news"></i>
					          <span>攻防认知基础</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1-1">1</el-menu-item>
					          <el-menu-item index="1-2">2</el-menu-item>
					          <el-menu-item index="1-3">3</el-menu-item>
					          <el-menu-item index="1-4">4</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<p>
				<b>岗位培训</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p>
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-rank"></i>
					          <span>漏洞逆向工程师</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1-1">C语言程序设计安全开发</el-menu-item>
					          <el-menu-item index="1-2">Windows/Linux操作系统基础</el-menu-item>
					          <el-menu-item index="1-3">计算机网络</el-menu-item>
					          <el-menu-item index="1-4">Python Hacking</el-menu-item>
					          <el-menu-item index="1-5">软件逆向工程</el-menu-item>
					          <el-menu-item index="1-6">软件安全及漏洞分析</el-menu-item>
					          <el-menu-item index="1-7">渗透测试原理</el-menu-item>
					          <el-menu-item index="1-8">网络对抗原理</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<p>
				<b>CTF培训</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p>
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-upload"></i>
					          <span>CTF培训</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1-1">C语言程序设计安全开发</el-menu-item>
					          <el-menu-item index="1-2">计算机网络</el-menu-item>
					          <el-menu-item index="1-3">Python Hacking</el-menu-item>
					          <el-menu-item index="1-4">网络安全理论与技术</el-menu-item>
					          <el-menu-item index="1-5">密码学</el-menu-item>
					          <el-menu-item index="1-6">系统安全及运维</el-menu-item>
					          <el-menu-item index="1-7">设备安全及运维</el-menu-item>
					          <el-menu-item index="1-8">网络对抗原理</el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<p>
				<b>攻防靶场</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p>
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					        <el-menu-item-group> 
					        	
					          <el-menu-item index="1"><i class="el-icon-view"></i>靶场环境</el-menu-item>
					        </el-menu-item-group>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<p>
				<b>安全工具</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p>
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					        <el-menu-item-group> 
					        	
					          <el-menu-item index="1"><i class="el-icon-refresh"></i>安全工具</el-menu-item>
					        </el-menu-item-group>
					    </el-menu>
					  </el-col>
				</el-row>
			</div>
		</div>
		<div class="courses">
			<p>
				<b>个人管理</b><span class="num">1234</span>
				<i class="el-icon-setting"></i>
			</p>
			<div class="menu">
				<el-row class="tac">
					<el-col :span="24">
					    <el-menu unique-opened efault-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
					      <el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-document"></i>
					          <span>密码管理</span>
					        </template>
					        <el-menu-item-group>
					          <el-menu-item index="1-1">Windows/Linux操作系统基础</el-menu-item>
					          <el-menu-item index="1-2">计算机网络</el-menu-item>
					          <el-menu-item index="1-3">Kail渗透平台</el-menu-item>
					          <el-menu-item index="1-4">网络安全理论与技术</el-menu-item>
					          <el-menu-item index="1-5">系统安全及运维</el-menu-item>
					          <el-menu-item index="1-6">设备安全及运维</el-menu-item>
					          <el-menu-item index="1-7">网络对抗原理</el-menu-item>
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
	#cmain{
		width:100%;
		height:100%; 
	}
	.courses,.jobs,.ctf,.targets,.tools,.persons{
		padding:10px;
		background: rgba(0,0,0,.2)
	}
	#cmain b{
		padding:3px 5px;
		border-radius: 10px;
		background:rgba(0,0,0,.2);
		font-size:13px;
	}
	#cmain{
		width:100%;
		padding:10px;
	}
	#cmain>div>p>i{
		float:right;
	}
	#cmain>div{
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
		height:43px;
		line-height:43px;
	}
</style>
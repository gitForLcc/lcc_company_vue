<template>
  <div id="tools">
    <div class="person">
      <p>
        <b>安全工具</b><span class="num">1234</span>
        <i class="el-icon-setting"></i>
      </p>
      <div class="menu">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
              </el-menu-item-group>
              <el-menu-item index="1"><i class="el-icon-time"></i>信息收集</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="2"><i class="el-icon-date"></i>Web渗透</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="3"><i class="el-icon-document"></i>系统提权</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="4"><i class="el-icon-message"></i>内网渗透</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="5"><i class="el-icon-sold-out"></i>痕迹清理</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="6"><i class="el-icon-news"></i>代码审计</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="7"><i class="el-icon-date"></i>社会工程学</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="8"><i class="el-icon-star-on"></i>无线攻击</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="9"><i class="el-icon-location"></i>二进制逆向</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="10"><i class="el-icon-edit-outline"></i>安卓渗透测试</el-menu-item>
              </el-menu-item-group>
              </el-menu-item-group>
              <el-menu-item index="11"><i class="el-icon-upload"></i>安全测试</el-menu-item>
              </el-menu-item-group>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	methods:{
		
	}
}

</script>
<style scoped>
#tools {
  width: 100%;
  padding: 10px;
}

.person {
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, .2);
}

.el-menu {
  border-right: none;
}

#tools b {
  padding: 3px 5px;
  border-radius: 10px;
  background: rgba(0, 0, 0, .2);
  font-size: 13px;
}

#tools>div {
  margin-top: 8px;
}

#tools .person>p>i {
  float: right;
}

.menu {
  margin-top: 10px;
}

.el-submenu__title i {
  color: #fff;
}

.el-menu-item i {
  color: #fff;
}

.num {
  display: inline-block;
  background: #0DB8DF;
  padding: 1px 3px;
  font-size: 12px;
  margin-left: 15px;
}

</style>

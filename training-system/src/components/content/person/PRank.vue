<template>
  <div id="prank">
    <!-- top -->
    <div class="top">
        <i></i><span>排名进阶</span>
      </div>
    <!-- 占比：proportion -->
    <div class="proportion">
      <ul>
        <li>
          <h2>45%</h2>
          <p>C语言安全开发</p>
        </li>
        <li>
          <h2>90%</h2>
          <p>数理基础</p>
        </li>
        <li>
          <h2>80%</h2>
          <p>系统安全及运维渗透平台</p>
        </li>
        <li>
          <h2>100%</h2>
          <p>网络安全理论与技术密码学</p>
        </li>
      </ul>
    </div>
    <!-- 排名：rank -->
    <div class="rank">
      <div>
      	<span>C语言安全开发 :</span>
      	<el-progress :text-inside="true" :stroke-width="30" :percentage="30"></el-progress>
      </div>
      <div>
      	<span>数理基础 :</span>
      	<el-progress :text-inside="true" :stroke-width="30" :percentage="70"></el-progress>
      </div>
      <div>
      	<span>系统安全及运维渗透平台 :</span>
      	<el-progress :text-inside="true" :stroke-width="30" :percentage="100" status="success"></el-progress>
      </div>
      <div>
      	<span>网络安全理论与技术密码学 :</span>
      	<el-progress :text-inside="true" :stroke-width="30" :percentage="50" status="exception"></el-progress>
      </div>
    </div>
  </div>
</template>
<script>


</script>
<style scoped>
#prank {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.top{
  height:50px;
  line-height:50px;
  background:#ddd;
  color:#000000;
}
.top i{
  display: inline-block;
  height:40px;
  width:4px;
  background:#5FB62D;
  margin:5px 5px 5px 10px;
  vertical-align: middle;
}
.top i span{
  vertical-align: middle;
}

.proportion ul {
  padding: 20px 0;
  text-align: center;
  border-top: 2px solid #666;
  border-bottom: 2px solid #666;
  color: #000000;
}

.proportion ul:after {
  content: '';
  display: block;
  clear: both;
}

.proportion ul li {
  float: left;
  width: 25%;
  border-right: 1px solid #999;
}

.proportion ul li:nth-child(4) {
  border-right: none;
}

.proportion p {
  color: #2C416D;
}
.rank{
	padding:10px 80px 0 50px;
	color:#000000;
}
.rank div{
	margin:15px 0;
}
.rank div span{
	font-weight:bold;
	font-size:18px;
	font-weight:bold;
}
</style>

<template>
  <div id="center">
  	<div class="content">
  		<!-- top -->
  		<div class="top">
  			<i></i><span>个人中心</span>
  		</div>
  		<!-- main -->
  		<div class="main">
  			<!-- left -->
  			<div class="lf">
  				<div><img src="../../../assets/images/pInfo/p1.jpg" height="183" width="275"></div>
  				<el-button type="primary" icon="el-icon-message">发送邮件</el-button>
  			</div>
  			<!-- right -->
  			<div class="right">
  				<div>
  					<span>王小胖</span>
  				</div>
  				<ul>
  					<li>
  						<div>用户名</div>
  						<p>alexdoe</p>
  					</li>
  					<li>
  						<div>地址</div>
  						<p>
  							<i class="el-icon-location-outline"></i>
							<span>广州市白云山，云霄路88号</span>
  						</p>
  					</li>
  					<li>
  						<div>年龄</div>
  						<p>38</p>
  					</li>
  					<li>
  						<div>加入公司时间</div>
  						<p>2018-03-10</p>
  					</li>
  					<li>
  						<div>个人网站</div>
  						<p>
  							<a href="#">www.csair.com</a>
  						</p>
  					</li>
  				</ul>
  			</div>
  		</div>
  	</div>
    <div class="pecharts">
      <el-row>
        <el-col :span="5">
          <div>
            <div id="mychart1" :style="{width: '200px', height: '200px'}"></div>
            <button class="btn_chart_first">个人技能</button>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <div id="mychart2" :style="{width: '290px', height: '200px'}"></div>
            <button class="btn_chart_second">CTF培训方案</button>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <div id="mychart3" :style="{width: '280px', height: '200px'}"></div>
            <button class="btn_chart_three">课程培训方案</button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <div id="mychart4" :style="{width: '310px', height: '200px'}"></div>
            <button class="btn_chart_four">岗位培训方案</button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.echarts1(),
      this.echarts2(),
      this.echarts3(),
      this.echarts4()
  },
  methods: {
    echarts1() {
      var myChart = this.$echarts.init(document.getElementById('mychart1'));

      // 指定图表的配置项和数据
      var option = {

        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'center'

        },

        calculable: true,
        polar: [{
          indicator: [
            { text: '逆向', max: 100, color: 'black' },
            { text: 'WEB', max: 100, color: 'black' },
            { text: '安卓', max: 100, color: 'black' },
            { text: '基础', max: 100, color: 'black' },
            { text: '密码', max: 100, color: 'black' },
            { text: '杂项', max: 100, color: 'black' }
          ],
          radius: 65
        }],
        series: [{
          name: '',
          type: 'radar',
          itemStyle: {
            normal: {
              color: '#039f7b',
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [{
            value: [97, 32, 74, 95, 88, 92]

          }]
        }]
      };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    echarts2() {

      var myChart = this.$echarts.init(document.getElementById('mychart2'));

      // 指定图表的配置项和数据
      var option = {

        tooltip: {
          trigger: 'axis'
        },

        calculable: true,
        polar: [{
          indicator: [
            { text: '系统安全CTF', max: 100, color: 'black' },
            { text: '密码学CTF', max: 100, color: 'black' },
            { text: '数据隐写CTF', max: 100, color: 'black' },
            { text: 'PWN CTF', max: 100, color: 'black' },
            { text: '逆向分析CTF', max: 100, color: 'black' },
            { text: 'Web安全CTF', max: 100, color: 'black' }
          ],
          radius: 65
        }],
        series: [{
          name: '',
          type: 'radar',
          itemStyle: {
            normal: {
              color: '#428bca',
              areaStyle: {
                type: 'default'
              },
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          data: [{
            value: [25, 32, 54, 75, 82, 82]

          }]
        }]
      };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    echarts3() {

      var myChart = this.$echarts.init(document.getElementById('mychart3'));

      // 指定图表的配置项和数据
      var option = {

        tooltip: {
          trigger: 'axis'
        },

        calculable: true,
        polar: [{
          indicator: [
            { text: 'Web安全', max: 100, color: 'black' },
            { text: '网络安全', max: 100, color: 'black' },
            { text: '安全研发', max: 100, color: 'black' },
            { text: '主机安全', max: 100, color: 'black' },
            { text: '数据安全', max: 100, color: 'black' },
            { text: '信安理论', max: 100, color: 'black' }
          ],
          radius: 65
        }],
        series: [{
          name: '',
          type: 'radar',
          itemStyle: {
            normal: {
              color: '#4ebbdb',
              areaStyle: {
                type: 'default'
              },
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          data: [{
            value: [65, 12, 57, 25, 72, 32]

          }]
        }]
      };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    echarts4() {

      var myChart = this.$echarts.init(document.getElementById('mychart4'));

      // 指定图表的配置项和数据
      var option = {

        tooltip: {
          trigger: 'axis'
        },

        calculable: true,
        polar: [{
          indicator: [
            { text: '渗透测试工程师', max: 100, color: 'black' },
            { text: '应用安全工程师', max: 100, color: 'black' },
            { text: '安全开发工程师', max: 100, color: 'black' },
            { text: '安全运维工程师', max: 100, color: 'black' },
            { text: '安全服务工程师', max: 100, color: 'black' },
            { text: 'Web安全工程师', max: 100, color: 'black' }
          ],
          radius: 65
        }],
        series: [{
          name: '',
          type: 'radar',
          itemStyle: {
            normal: {
              color: '#f0af53',
              areaStyle: {
                type: 'default'
              },
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          data: [{
            value: [55, 22, 97, 5, 52, 72]

          }]
        }]
      };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}

</script>
<style scoped>
.lf{
	folat:left;
}
.rt{
	float:right;
}
#center {
  width: 100%;
  height: 100%;
}
.pecharts{
	text-align:center;

}
.content{
	width:100%;
	min-height:250px;
}
.content .top{
	height:50px;
	line-height:50px;
	background:#ddd;
	color:#000000;
}
.content .top i{
	display: inline-block;
	height:40px;
	width:4px;
	background:#5FB62D;
	margin:5px 5px 5px 10px;
	vertical-align: middle;
}
.content .top i span{
	vertical-align: middle;
}
/*content-top*/
.main{
	width:100%;
  height:100%;
	/*min-height:280px;*/
	padding:10px 50px 0 50px;
	color:#000000;
	border-bottom:3px solid #ddd;
}
.main:after{
	content:'';
	display: block;
	clear:both;
}
.main>.lf{
	width:30%;
	height:100%;
	text-align: center;
	padding:15px 0;
}
.main>.lf img{
	width:150px;
	height:150px;
	border:2px solid #ddd;
}

.el-button--primary{
	padding:10px 90px;
	margin-top:15px;
}
/*content-left*/
.main .right{
	margin-left:30%;
	width:70%;
	height:100%;
}
.main .right:after{
	content:'';
	display: block;
	clear:both;
}
.main .right>div{
	font-size:18px;
	font-weight:bold;
	color:#287BC5;
}
.main .right li{
	padding:7px 0;
	border-bottom:1px solid #ddd;
}
.main .right li div{
	display: inline-block;
	width:150px;
	text-align: right;
	color:#287BC5;
	margin-right:20px;
}
.main .right li p{
	display: inline-block;
}
/*content-right*/
.btn_chart_first{
  position:relative;
  left:-12px;
  border:none;
  background:#4AC1A6;
  border-radius:5px;
  color:#ffffff;
  padding:3px 5px;
}
.btn_chart_second{
  position:relative;
  left:5px;
  border:none;
  background:#76A9D5;
  border-radius:5px;
  color:#ffffff;
  padding:3px 5px;
}
.btn_chart_three{
  position:relative;
  border:none;
  background:#7ECAE1;
  border-radius:5px;
  color:#ffffff;
  padding:3px 5px;
}
.btn_chart_four{
  position:relative;
  border:none;
  left:-5px;
  background:#EFC282;
  border-radius:5px;
  color:#ffffff;
  padding:3px 5px;
}
</style>


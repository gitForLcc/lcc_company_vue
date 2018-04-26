<template>
  <div>
    <div id="courmain"></div>
    <!-- 模态框————课程详细 -->
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <el-container>
        <el-header>{{book_title}}</el-header>
        <el-container>
          <el-aside width="180px">
            <div class="menu">
              <el-row class="tac">
                <el-col :span="24">
                  <ul class="section">
                    <li :class="{active:isActive == index}" @click="clickSection(index)" v-for="(data,index) in books" :key="index">第{{index+1}}章</li>
                  </ul>
                </el-col>
              </el-row>
            </div>
          </el-aside>
          <el-container>
            <el-main>
              <el-table :data="book" border style="width: 100%">
                <el-table-column prop="bookname" label="课程名称"></el-table-column>
                <!-- <el-table-column prop="name" label="姓名" width="80"></el-table-column> -->
                <el-table-column label="操作" width="300">
                  <template slot-scope="scope">
                    <el-button @click="handleCourse(scope.$index,scope.row)" type="default" size="small">课件</el-button>
                    <el-button @click="handleVideo(scope.$index,scope.row)" type="primary" size="small">视频</el-button>
                    <el-button type="success" size="small">开启实验</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-main>
            <el-footer>
              <el-progress :text-inside="true" :stroke-width="40" :percentage="90" status="exception"></el-progress>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </el-dialog>
    <!-- 模态框————课件 -->
    <el-dialog style="width:80%;margin:-50px auto" title="课件" :visible.sync="courseTableVisible">
      <object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='100%' height='95%'>
        <param name='MOVIE' :value="'/static/20170113181825.swf'">
        <param name='PLAY' value='true'>
        <param name='LOOP' value='true'>
        <param name='QUALITY' value='high'>
        <param name='FLASHVARS' value='zoomtype=3'>
        <embed :src="courseSrc" width='100%' height='95%' play='true' ALIGN='' loop='true' quality='high' type='application/x-shockwave-flash' flashvars='zoomtype=3'>
        </embed>
      </object>
    </el-dialog>
    <!-- 模态框————视频 -->
    <el-dialog style="width:75%;height:auto;margin:0 auto" title="视频" :visible.sync="videoTableVisible">
      <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" @pause="onPlayerPause($event)" @statechanged="playerStateChanged($event)">
      </video-player>
    </el-dialog>
  </div>
</template>
<script>
export default {
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  watch: {
    videoTableVisible(newVal, oldVal) {
      if (!newVal) {
        this.player.pause()
      }
    }
  },
  mounted() {
    this._initCourse();
    // this.fetchBookTypes();
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'zh_CN',
        fluid: true,
        aspectRatio: '16:9',
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: ""
        }],
        // poster: "/static/img/tool/6.jpg",
      },
      courseSrc: '',
      playerTime: Number,
      router: '',
      book_id: Number,
      book_section: Number,
      dialogTableVisible: false,
      courseTableVisible: false,
      videoTableVisible: false,
      booktypes: [],
      books: [],
      book: [],
      book_title: "",
      isActive: Number
    }
  },
  methods: {
    // 视频监听
    onPlayerPause(event) { //视频暂停  获取视频播放时间后发送请求
      console.log(this.playerTime);
    },
    playerStateChanged(event) { //视频播放时间
      if (event.timeupdate) {
        this.playerTime = event.timeupdate
      }
    },


    handleCourse(index, row) {
      var courseUrl = this.book[index].bookpath;
      var baseUrl = this.$store.getters.baseUrl
      this.courseSrc = baseUrl + '/media/book/swf/' + courseUrl + '.swf';
      this.courseTableVisible = true;

    },
    handleVideo(index, row) {
      // console.log(index,row);
      var videoPath = this.book[index].videopath;
      var baseUrl = this.$store.getters.baseUrl
      this.playerOptions.sources[0].src = baseUrl + "/" + videoPath;
      this.videoTableVisible = true;
    },
    fetchBookTypes() {
      var _this = this
      this.$http.get('lab/kc_booktypes', {}).then((res) => {
        if (res.data.status) {
          this.booktypes = res.data.data;
        } else {
          alert('网络错误')
        }
      }).catch((err) => {
        console.log('fetchBookTypes', err);
      })
    },
    openCourses(router) {
      var _this = this
      var router = JSON.parse(router)
      for (var index in router) {
        this.book_id = index
        this.book_title = router[index]
      }
      this.$http.get('lab/book', {
        params: {
          book_id: _this.book_id
        }
      }).then((res) => {
        if (res.data.status) {
          var Cbook = res.data.data.slice(0);
          this.books = res.data.data
          this.book = Cbook[0];
          this.dialogTableVisible = true;
          this.isActive = 0;
        } else {
          alert('暂未开放')
        }
      }).catch((err) => {
        console.log('openCourses', err);
      })
    },
    clickSection(index) {
      this.book = this.books[index]
      this.isActive = index;
    },
    _initCourse() {
      var nodes = [
        { id: '攻防认知基础', x: -1000, y: 400, color: '#E8E852', widthConstraint: { maximum: 130, minimum: 100 }, label: 'Ⅰ 攻防认知基础', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"1":"网络安全导论 Python Hacking"}', x: -1000, y: 470, color: '#F16252', widthConstraint: { maximum: 130, minimum: 130 }, label: '网络安全导论 Python Hacking', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"2":"C语言安全开发"}', x: -1000, y: 570, color: '#F16252', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: 'C语言安全开发', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"3":"Windows/Linux 操作系统基础"}', x: -1000, y: 670, color: '#F16252', widthConstraint: { maximum: 130, minimum: 130 }, label: 'Windows/linux 操作系统基础', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"4":"数理基础"}', x: -1000, y: 770, color: '#868EA0', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '数理基础', font: { size: 16, color: '#fff', face: 'arial' } },



        { id: '专业基础', x: -750, y: 400, color: '#E8E852', widthConstraint: { maximum: 100, minimum: 100 }, label: 'Ⅱ 专业基础', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"5":"网络安全理论与技术密码学"}', x: -750, y: 470, color: '#5FA0B4', widthConstraint: { maximum: 130, minimum: 130 }, label: '网络安全理论与技术密码学', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"6":"计算机网络及运维逆向工程(网+软+数)"}', x: -750, y: 570, color: '#5FA0B4', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '计算机网络及运维逆向工程(网+软+数)', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"7":"系统安全及运维渗透平台"}', x: -750, y: 670, color: '#5FA0B4', widthConstraint: { maximum: 130, minimum: 130 }, label: '系统安全及运维 渗透平台', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"8":"离散数学 信息安全数学基础"}', x: -750, y: 770, color: '#5FA0B4', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '离散数学 信息安全数学基础', font: { size: 16, color: '#fff', face: 'arial' } },


        { id: '对抗技能', x: -500, y: 400, color: '#E8E852', widthConstraint: { maximum: 100, minimum: 100 }, label: 'Ⅲ 对抗技能', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"9":"Web安全渗透 PHP源码审计"}', x: -500, y: 470, color: '#675A90', widthConstraint: { maximum: 130, minimum: 130 }, label: 'Web安全及渗透 PHP源码审计', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"10":"软件安全及漏洞分析利用"}', x: -500, y: 570, color: '#675A90', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '软件安全及漏洞 分析利用', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"11":"网络对抗原理 渗透测试原理"}', x: -500, y: 670, color: '#675A90', widthConstraint: { maximum: 130, minimum: 130 }, label: '网络对抗原理 渗透测试原理', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"12":"通信安全 AI智能系统"}', x: -500, y: 770, color: '#868EA0', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '通信安全 AI智能系统', font: { size: 16, color: '#fff', face: 'arial' } },


        { id: '项目实践', x: -250, y: 400, color: '#E8E852', widthConstraint: { maximum: 100, minimum: 100 }, label: 'Ⅳ 项目实践', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"13":"安全开发 安全运维"}', x: -250, y: 470, color: '#FF5529', widthConstraint: { maximum: 130, minimum: 130 }, label: '安全开发 安全运维', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"14":"漏洞分析 挖掘利用"}', x: -250, y: 570, color: '#FF5529', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '漏洞分析 挖掘利用', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"15":"渗透测试"}', x: -250, y: 670, color: '#FF5529', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '渗透测试', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"16":"实训/竞赛"}', x: -250, y: 770, color: '#FF5529', widthConstraint: { maximum: 130, minimum: 130 }, heightConstraint: { minimum: 30 }, label: '实训/竞赛', font: { size: 16, color: '#fff', face: 'arial' } }
      ];

      var edges = [
        { from: '{"1":"网络安全导论 Python Hacking"}', to: '{"5":"网络安全理论与技术密码学"}' },
        { from: '{"1":"网络安全导论 Python Hacking"}', to: '{"6":"计算机网络及运维逆向工程(网+软+数)"}' },
        { from: '{"1":"网络安全导论 Python Hacking"}', to: '{"7":"系统安全及运维渗透平台"}' },
        { from: '{"1":"网络安全导论 Python Hacking"}', to: '{"8":"离散数学 信息安全数学基础"}' },
        { from: '{"2":"C语言安全开发"}', to: '{"6":"计算机网络及运维逆向工程(网+软+数)"}' },
        { from: '{"3":"Windows/Linux 操作系统基础"}', to: '{"7":"系统安全及运维渗透平台"}' },
        { from: '{"4":"数理基础"}', to: '{"6":"计算机网络及运维逆向工程(网+软+数)"}' },
        { from: '{"4":"数理基础"}', to: '{"7":"系统安全及运维渗透平台"}' },
        { from: '{"4":"数理基础"}', to: '{"8":"离散数学 信息安全数学基础"}' },

        { from: '{"5":"网络安全理论与技术密码学"}', to: '{"9":"Web安全渗透 PHP源码审计"}' },
        { from: '{"5":"网络安全理论与技术密码学"}', to: '{"11":"网络对抗原理 渗透测试原理"}' },
        { from: '{"6":"计算机网络及运维逆向工程(网+软+数)"}', to: '{"9":"Web安全渗透 PHP源码审计"}' },
        { from: '{"6":"计算机网络及运维逆向工程(网+软+数)"}', to: '{"10":"软件安全及漏洞分析利用"}' },
        { from: '{"6":"计算机网络及运维逆向工程(网+软+数)"}', to: '{"11":"网络对抗原理 渗透测试原理"}' },
        { from: '{"7":"系统安全及运维渗透平台"}', to: '{"11":"网络对抗原理 渗透测试原理"}' },
        { from: '{"7":"系统安全及运维渗透平台"}', to: '{"12":"通信安全 AI智能系统"}' },
        { from: '{"8":"离散数学 信息安全数学基础"}', to: '{"10":"软件安全及漏洞分析利用"}' },
        { from: '{"8":"离散数学 信息安全数学基础"}', to: '{"11":"网络对抗原理 渗透测试原理"}' },
        { from: '{"8":"离散数学 信息安全数学基础"}', to: '{"12":"通信安全 AI智能系统"}' },

        { from: '{"9":"Web安全渗透 PHP源码审计"}', to: '{"13":"安全开发 安全运维"}' },
        { from: '{"9":"Web安全渗透 PHP源码审计"}', to: '{"14":"漏洞分析 挖掘利用"}' },
        { from: '{"9":"Web安全渗透 PHP源码审计"}', to: '{"16":"实训/竞赛"}' },
        { from: '{"10":"软件安全及漏洞分析利用"}', to: '{"13":"安全开发 安全运维"}' },
        { from: '{"10":"软件安全及漏洞分析利用"}', to: '{"14":"漏洞分析 挖掘利用"}' },
        { from: '{"10":"软件安全及漏洞分析利用"}', to: '{"16":"实训/竞赛"}' },
        { from: '{"11":"网络对抗原理 渗透测试原理"}', to: '{"15":"渗透测试"}' },
        { from: '{"11":"网络对抗原理 渗透测试原理"}', to: '{"16":"实训/竞赛"}' },
        { from: '{"12":"通信安全 AI智能系统"}', to: '{"14":"漏洞分析 挖掘利用"}' },
        { from: '{"12":"通信安全 AI智能系统"}', to: '{"16":"实训/竞赛"}' }
      ];

      var container = document.getElementById('courmain');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
        interaction: { hover: true },
        edges: {
          font: {
            size: 12
          }
        },
        nodes: {
          shape: 'box',
          borderWidth: 2,
          margin: 10,
        },
        physics: {
          enabled: false
        }
      };
      var network = new vis.Network(container, data, options);
      network.on("click", function(params) {
        var router = params.nodes[0]
        if (!router || router == '攻防认知基础' || router == '专业基础' || router == '对抗技能' || router == '项目实践') {} else {
          this.openCourses(router)
        }
      }.bind(this));
    }
  }
}

</script>
<style scoped>
#courmain {
  width: 100%;
  height: 500px;
  cursor: pointer;
  background: #ffffff;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-main {
  line-height: 20px;
}

.el-footer {
  padding: 10px;
}

ul.section:after {
  content: '';
  display: block;
  clear: both;
}

ul.section {
  margin-top: 15px;
}

ul.section li {
  float: left;
  width: 100%;
  height: 35px;
  line-height: 35px;
  color: #000000;
  font-size: 14px;
}

ul.section li:hover {
  cursor: pointer;
  background: #043567;
  color: orange;
  font-size: 18px;
}

ul.section .active {
  cursor: pointer;
  background: #043567;
  color: orange;
  font-size: 18px;
}

</style>

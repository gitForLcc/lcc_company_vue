<template>
  <div>
    <div id="jshow"></div>
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
    this._initjob();
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
        poster: "/static/img/tool/6.jpg",
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
      isSctive:Number
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
      this.$http.get('lab/gw_booktypes', {}).then((res) => {
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
      this.book = this.books[index];
      this.isActive=index;
    },
    _initjob() {
      var nodes = [
        { id: '渗透测试', x: -900, y: -400, color: '#557176', label: '渗透测试工程师', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"1":"Python Hacking"}', x: -700, y: -400, widthConstraint: { maximum: 90, minimum: 90 }, color: '#F16252', label: 'Python Hacking', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"2":"Web安全及渗透"}', x: -480, y: -400, widthConstraint: { maximum: 90 }, color: '#77C35F', label: 'Web安全及渗透', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"3":"PHP源码审计"}', x: -280, y: -400, widthConstraint: { maximum: 90 }, color: '#77C35F', label: 'PHP源码审计', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"4":"渗透测试原理"}', x: -80, y: -400, widthConstraint: { maximum: 90 }, color: '#77C35F', label: '渗透测试原理', font: { size: 16, color: '#fff', face: 'arial' } },

        { id: '漏洞逆向', x: -900, y: -300, color: '#557176', label: '漏洞逆向工程师', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"5":"C语言程序设计安全开发"}', x: -700, y: -300, widthConstraint: { maximum: 90 }, color: '#F16252', label: 'C语言程序设计安全开发', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"6":"软件逆向工程"}', x: -480, y: -300, widthConstraint: { maximum: 90 }, color: '#4EA8CA', label: '软件逆向工程', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"7":"软件安全及漏洞分析"}', x: -280, y: -300, color: '#B878B4', label: '软件安全及漏洞分析', widthConstraint: { maximum: 90 }, font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"8":"网络安全原理"}', x: -80, y: -300, widthConstraint: { maximum: 90 }, color: '#B878B4', label: '网络安全原理', font: { size: 16, color: '#fff', face: 'arial' } },

        { id: '安全研发', x: -900, y: -200, color: '#557176', label: '安全研发工程师', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"9":"计算机网络"}', x: -700, y: -200, color: '#F16252', label: '计算机网络', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"10":"网络安全理论与技术"}', x: -480, y: -200, widthConstraint: { maximum: 90 }, color: '#4EA8CA', label: '网络安全理论与技术', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"11":"密码学"}', x: -280, y: -200, widthConstraint: { maximum: 90, minimum: 90 }, color: '#4EA8CA', label: '密码学', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"12":"网络对抗原理"}', x: -80, y: -200, color: '#B878B4', label: '网络对抗原理', font: { size: 16, color: '#fff', face: 'arial' } },

        { id: '安全运维', x: -900, y: -100, color: '#557176', label: '安全运维工程师', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"13":"Windows/Linux操作系统基础"}', x: -700, y: -100, widthConstraint: { maximum: 90 }, color: '#F16252', label: 'Windows/Linux操作系统基础', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"14":"Kali渗透平台"}', x: -480, y: -100, widthConstraint: { maximum: 90, minimum: 90 }, color: '#4EA8CA', label: 'Kali渗透平台', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"15":"系统安全及运维"}', x: -280, y: -100, widthConstraint: { maximum: 90 }, color: '#4EA8CA', label: '系统安全及运维', font: { size: 16, color: '#fff', face: 'arial' } },
        { id: '{"16":"设备安全及运维"}', x: -80, y: -100, widthConstraint: { maximum: 90 }, color: '#4EA8CA', label: '设备安全及运维', font: { size: 16, color: '#fff', face: 'arial' } }
      ];

      var edges = [
        { from: '渗透测试', to: '{"1":"Python Hacking"}', color: { color: '#e4393c' }, arrows: 'to' },
        { from: '{"1":"Python Hacking"}', to: '{"2":"Web安全及渗透"}', color: { color: '#e4393c' }, arrows: 'to' },
        { from: '{"2":"Web安全及渗透"}', to: '{"3":"PHP源码审计"}', color: { color: '#e4393c' }, arrows: 'to' },
        { from: '{"3":"PHP源码审计"}', to: '{"4":"渗透测试原理"}', color: { color: '#e4393c' }, arrows: 'to' },
        { from: '漏洞逆向', to: '{"5":"C语言程序设计安全开发"}', color: { color: '#0883A0' }, },
        { from: '漏洞逆向', to: '{"9":"计算机网络"}', color: { color: '#0883A0' } },
        { from: '漏洞逆向', to: '{"13":"Windows/Linux操作系统基础"}', color: { color: '#0883A0' } },
        { from: '漏洞逆向', to: '{"1":"Python Hacking"}', color: { color: '#0883A0' } },
        { from: '{"1":"Python Hacking"}', to: '{"6":"软件逆向工程"}', color: { color: '#0883A0' } },
        { from: '{"5":"C语言程序设计安全开发"}', to: '{"6":"软件逆向工程"}', color: { color: '#0883A0' } },
        { from: '{"9":"计算机网络"}', to: '{"6":"软件逆向工程"}', color: { color: '#0883A0' } },
        { from: '{"13":"Windows/Linux操作系统基础"}', to: '{"6":"软件逆向工程"}', color: { color: '#0883A0' } },
        { from: '{"6":"软件逆向工程"}', to: '{"7":"软件安全及漏洞分析"}', color: { color: '#0883A0' } },
        { from: '{"7":"软件安全及漏洞分析"}', to: '{"4":"渗透测试原理"}', color: { color: '#0883A0' } },
        { from: '{"4":"渗透测试原理"}', to: '{"8":"网络安全原理"}', color: { color: '#0883A0' } },





        { from: '安全研发', to: '{"5":"C语言程序设计安全开发"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '安全研发', to: '{"1":"Python Hacking"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '安全研发', to: '{"9":"计算机网络"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"5":"C语言程序设计安全开发"}', to: '{"10":"网络安全理论与技术"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"1":"Python Hacking"}', to: '{"10":"网络安全理论与技术"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"9":"计算机网络"}', to: '{"10":"网络安全理论与技术"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"10":"网络安全理论与技术"}', to: '{"11":"密码学"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"11":"密码学"}', to: '{"12":"网络对抗原理"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"11":"密码学"}', to: '{"15":"系统安全及运维"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"15":"系统安全及运维"}', to: '{"16":"设备安全及运维"}', color: { color: '#E5E50F' }, arrows: 'to' },
        { from: '{"12":"网络对抗原理"}', to: '{"16":"设备安全及运维"}', color: { color: '#E5E50F' }, arrows: 'to' },

        { from: '安全运维', to: '{"13":"Windows/Linux操作系统基础"}', color: { color: '#3BE529' }, dashes: [5, 5, 3, 3] },
        { from: '安全运维', to: '{"9":"计算机网络"}', color: { color: '#3BE529' }, dashes: [5, 5, 3, 3] },
        { from: '{"9":"计算机网络"}', to: '{"10":"网络安全理论与技术"}', color: { color: '#3BE529' }, dashes: [5, 5, 3, 3] },
        { from: '{"13":"Windows/Linux操作系统基础"}', to: '{"14":"Kali渗透平台"}', color: { color: '#3BE529' }, dashes: [5, 5, 3, 3] },
        { from: '{"14":"Kali渗透平台"}', to: '{"15":"系统安全及运维"}', color: { color: '#3BE529' }, dashes: [5, 5, 3, 3] },
        { from: '{"15":"系统安全及运维"}', to: '{"16":"设备安全及运维"}', color: { color: '#3BE529' }, dashes: [5, 5, 3, 3] },
        { from: '{"10":"网络安全理论与技术"}', to: '{"15":"系统安全及运维"}', color: { color: '#3BE529' }, dashes: [5, 5, 3, 3] },


      ];

      var container = document.getElementById('jshow');
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
        if (!router || router == '渗透测试' || router == '漏洞逆向' || router == '安全研发' || router == '安全运维') {

        } else {
          this.openCourses(router)
        }

      }.bind(this));
    }
  }
}

</script>
<style scoped>
#jshow {
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

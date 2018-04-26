<template>
  <div id="cshow">
    <!-- 展示部分 -->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide Ban1">
            <div class="ban1Bg">
              <div class="stars"></div>
            </div>
            <div class="container hidden-xs hidden-sm">
              <div class="ban1Con">
                <div class="ban1Img">
                  <div class="ban1Logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"><img src="../../../assets/images/ctf/ban1logo.png" class="img-responsive"></div>
                  <!-- 内部淡蓝色圆形 -->
                  <div class="ban1Cir ban1Cir1"></div>
                  <!-- 中间淡紫色圆形 -->
                  <div class="ban1Cir ban1Cir2"></div>
                  <!-- 最外圈圆形 -->
                  <div class="ban1Cir ban1Cir3"></div>
                  <div class="ban1Line ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s"></div>
                  <ul class="ban1IcoItem list-unstyled">
                    <li v-for="(item,index) in dataList" :class="'ban1IcoLi'+(index+1)+' ani'" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.3s" :swiper-animate-delay="item.delay">
                      <a href="#" @click="openCourses(index,$event)">
                        <div class="ban1Ico"><img :src="'src/assets/images/ctf/'+item.src" class="img-responsive"><i></i></div>
                        <p>{{item.name}}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      book_id: Number,
      book_section: Number,
      dialogTableVisible: false,
      courseTableVisible: false,
      videoTableVisible: false,
      booktypes: [],
      books: [],
      book: [],
      book_title: "",
      isActive: Number,
      dataList: [{
          src: 'ban1ico1.png',
          name: '密码',
          delay: '2s'
        },
        {
          src: 'ban1ico2.png',
          name: 'Web',
          delay: '2.3s'
        },
        {
          src: 'ban1ico3.png',
          name: '逆向',
          delay: '2.6s'
        },
        {
          src: 'ban1ico4.png',
          name: 'PWN',
          delay: '2.9s'
        },
        {
          src: 'ban1ico5.png',
          name: '无线电',
          delay: '3.2s'
        },
        {
          src: 'ban1ico6.png',
          name: '移动',
          delay: '3.5s'
        },
        {
          src: 'ban1ico6.png',
          name: '数据分析',
          delay: '3.7s'
        },
        {
          src: 'ban1ico6.png',
          name: '杂项',
          delay: '3.9s'
        }
      ]
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
      this.$http.get('lab/ctf_booktypes', {}).then((res) => {
        if (res.data.status) {
          this.booktypes = res.data.data;
        } else {
          alert('网络错误')
        }
      }).catch((err) => {
        console.log('fetchBookTypes', err);
      })
    },
    openCourses(number, e) {
      if (e) e.preventDefault()
      var _this = this
      var number = number + 1;
      this.$http.get('lab/book', {
        params: {
          book_id: number
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
      this.isActive=index;
    },
  }
}

</script>
<style scoped>
#cshow {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #ffffff;
  margin:5% auto;
}






/*banner*/

.banner {
  height: 100%;
  position: relative;
}

.banner .swiper-slide {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
}

.ban1Bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.banner .swiper-slide .container {
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.ban1Con {
  width: 100%;
  min-height: 450px;
}

.ban1Img {
  width: 60%;
  margin: 0 auto;
  max-width: 651px;
  height: 379px;
  position: relative;
}

.ban1Logo {
  width: 119px;
  height: 57px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -60px;
  margin-top: -49px;
  transition: all 0.4s ease 0.3s;
}

.ban1Cir {
  width: 379px;
  height: 379px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -190px;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 0.4s ease 0.3s;
}

.ban1Cir1 {
  background-image: url(../../../assets/images/ctf/ban1cir1.png);
  animation: circle 200s infinite linear;
}

.ban1Cir2 {
  background-image: url(../../../assets/images/ctf/ban1cir2.png);
  animation: circleF 200s infinite linear;
}

.ban1Cir3 {
  background-image: url(../../../assets/images/ctf/ban1cir3.png);
  animation: circle 200s infinite linear;
}

.ban1Line {
  width: 509px;
  height: 379px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -254px;
  background: url(../../../assets/images/ctf/ban1line.png) center center no-repeat;
}

.ban1IcoItem {}

.ban1IcoItem li {
  display: inline-block;
  position: absolute;
  text-align: center;
  font-size: 14px;
  line-height: 34px;
}

.ban1IcoItem li a {
  display: block;
  color: #324C71;
  font-weight: bold;
}

.ban1Ico {
  width: 71px;
  height: 71px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.ban1Ico i {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../../../assets/images/ctf/ban1icobg.png) center center no-repeat;
  animation: circle 150s infinite linear;
}

.ban1IcoLi1 {
  left: 20px;
  top: 0;
}

.ban1IcoLi2 {
  left: -66px;
  top: 70px;
}

.ban1IcoLi3 {
  left: -66px;
  bottom: 92px;
}

.ban1IcoLi4 {
  left: 20px;
  bottom: 0;
}

.ban1IcoLi5 {
  right: 20px;
  top: 0;
}

.ban1IcoLi6 {
  right: -66px;
  top: 70px
}

.ban1IcoLi7 {
  right: -66px;
  bottom: 92px;
}

.ban1IcoLi8 {
  right: 20px;
  bottom: 0;
}

.ban1IcoItem li a:hover .ban1Ico img {
  animation: pulse 0.3s linear 2;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes circleF {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}


/**/

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size:20px;
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


/*点击后样式*/
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

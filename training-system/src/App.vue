<template>
  <div id="app">
    <TopView v-show="false"></TopView>
    <HomeView v-show="false"></HomeView>
    <router-view></router-view>
    <FooterView></FooterView>
    <Bg></Bg>
  </div>
</template>

<script>
import TopView from './components/Top.vue'
import HomeView from './components/Home.vue'
import FooterView from './components/Footer.vue'
import Bg from './components/Bg.vue'
export default {
  components:{
    TopView,
    HomeView,
    FooterView,
    Bg
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
html,body,div,p,h1,h2,h3,h4,h5,h6,ol,ul,dl,dt,dd{
  padding:0;
  margin:0;
}
html{
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color:#fff;
  font-size:16px;
  background-size:cover;
}
.html{
  background:url("./assets/img/bg.jpg");
}
.html1{
  background:url("./assets/img/bg1.jpg");
}
.html2{
  background:url("./assets/img/bg2.jpg");
}
.html3{
  background:url("./assets/img/bg3.jpg");
}
li{list-style-type:none;}
table{ margin:0 auto;}
img{vertical-align:middle;border:0;}
ol,ul {list-style:none;}
caption,th {text-align:left;}
a{ text-decoration: none;}
a:hover{ color: #000; text-decoration: none;}
.lf{
  float:left;
}
.rt{
  float:right;
}
.cl{
  clear:both;
}
</style>

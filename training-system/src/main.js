import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/'
import echarts from 'echarts'
import VueVideoPlayer from 'vue-video-player'

import './assets/css/public.css'
import 'video.js/dist/video-js.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueVideoPlayer)
Vue.prototype.$echarts = echarts;

const router=new VueRouter({
	routes
})

//配置发送请求的信息
axios.interceptors.request.use(function(config){
	// store.dispatch('showLoading')
	return config;
}),function(error){
	return Promise.reject(error);
}

//请求回来
axios.interceptors.response.use(function(response){
	// store.dispatch('hideLoading')
	return response;
}),function(error){
	return Promise.reject(error);
}
//拦截器，定义session
const baseUrl=store.getters.baseUrl;
axios.defaults.baseURL = baseUrl;

Vue.prototype.$http=axios;  //把axios暴露到Vue原型上 名字为$http
var vm=new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})



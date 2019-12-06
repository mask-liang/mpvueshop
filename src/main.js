import Vue from 'vue'
// 引入vue核心库

import App from './App'
//引入App组件

Vue.config.productionTip = false
//忽略一些提示（ 上线以后 ）

App.mpType = 'app'
//告诉程序App.vue不属于页面级应用，而是属于应用级的组件

let app = new Vue( App )
//创建Vue实例

app.$mount()
//初始化小程序应用

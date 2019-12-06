import Vue from 'vue'
// 引入vue核心库

import App from './index'
//引入App组件

//告诉程序App.vue不属于页面级应用，而是属于应用级的组件

let app = new Vue( App )
//创建Vue实例

app.$mount()
//初始化|挂载页面

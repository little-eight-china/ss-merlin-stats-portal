// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from './axios'

import ElFormRenderer from '@femessage/el-form-renderer'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component('el-form-renderer', ElFormRenderer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App'
import WXrequest from './utils/wx-request'
import 'mpvue-weui/src/style/weui.css'
Vue.prototype.$httpWX = WXrequest

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      navigationStyle: 'custom',
      backgroundTextStyle: 'light',
      backgroundColor: '#eee',
      navigationBarBackgroundColor: 'black',
      navigationBarTitleText: 'Looo-Geopen潮流前线',
      navigationBarTextStyle: 'black'
    }
  }
}

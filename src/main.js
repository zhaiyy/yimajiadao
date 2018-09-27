import Vue from 'vue';
import App from './App';
import '../static/css/weui.css';
import '../static/css/comment.css';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#ff4e4b',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      /* eslint-disable */
      list: [{
        pagePath: 'pages/index/main',
        text: '记录',
        iconPath: 'static/images/nav-record.png',
        selectedIconPath: 'static/images/nav-record-select.png'
      },
        {
          pagePath: 'pages/logs/main',
          text: '日历',
          iconPath: 'static/images/nav-calender.png',
          selectedIconPath: 'static/images/nav-calender-select.png'
        },
        {
          pagePath: 'pages/logs/main',
          text: '我',
          iconPath: 'static/images/nav-my.png',
          selectedIconPath: 'static/images/nav-my-select.png'
        }
      ]
    }
  },
};

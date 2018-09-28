<template>
  <div class="page">
    <div class="header">
      <div class="text-container">
        <div class="p8 f40">安全期  第1天</div>
        <div class="p8 f40">距离下次经期还有12天</div>
        <div class="p8 f35">预计下次经期时间6月25日</div>
      </div>
    </div>
    <div class="weui-flex mt50">
      <div class="weui-flex__item flex-left">
        <div  class="m10"> 2018年6月13日</div>
        <div class="m20 f30"> 农历四月三十</div>
        <button size="mini" type="primary" class="m20 btn-primary">查看完整日历</button>
      </div>
      <div class=" flex-right">
        <img class="mood-img" src="../../../static/img/mood/mood-1.png" mode="widthFix"/>
      </div>
    </div>
    <div class="weui-flex mt50">

      <div class="weui-flex__item tc">
        <div class="weui-cell__bd">经期开始</div>
      </div>
      <div class="weui-flex__item ">
        <div class="weui-cell__ft tc">
          <switch size="mini" @change="switchChange"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {},
    };
  },

  components: {
    card,
  },

  methods: {
    switchChange() {
    },
    bindViewTap() {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
            },
          });
        },
      });
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
};
</script>

<style scoped>

  .flex-left{
    width: 450rpx;
    text-align: center;
    padding-top: 80rpx;
  }
  .flex-right{
    width: 300rpx;
    height: 400rpx;
  }

  .mood-img{
    width: 300rpx;
  }
</style>

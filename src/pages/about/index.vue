<template>
  <div class="page">
    <div class="header">
      <div class="text-container">
        <div class="p8 f40">个人中心 </div>
        <div class="p8 f40">
          <div class='avatar'>
            <open-data  mode='aspectFit' type='userAvatarUrl'></open-data>
          </div>
          <open-data type="userNickName" lang="zh_CN"></open-data>
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
              console.log(res.userInfo);
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

<style scoped lang="scss">
  $width:750rpx;
  .header {
    border-bottom-left-radius:  $width/2;
    border-bottom-right-radius:  $width/2;
  }
  .avatar {
    height: 120rpx;
    width: 120rpx;
    margin: 0 auto;
    border-radius: 50%;
    overflow:hidden;
    border: 5rpx solid #fff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    open-data {
      display: inline-block;
      margin: -5rpx;
      height: 130rpx;
      width: 130rpx;
      border:1px solid red;
    }
  }

</style>

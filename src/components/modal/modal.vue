<template>
  <view class='mask'  bindtap='clickMask'>
    <view class='modal-content'>
      <scroll-view scroll-y class='main-content'>
        <slot></slot>
      </scroll-view>
      <view class='modal-btn-wrapper'>
        <view class='cancel-btn' style='color:rgba(7,17,27,0.6)'>取消</view>
        <view class='confirm-btn' style='color:#13b5f5'>确定</view>
      </view>
    </view>
  </view>
</template>

<script>
  import './index.css'

export default {
    props: ['text']
  }
</script>

<style>
  .card {
    padding: 10px;
  }
</style>

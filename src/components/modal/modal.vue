<template>
  <view class='mask'  bindtap='clickMask' v-if="isShowModal">
    <view class='modal-content'>
      <div class="ud-cancel-btn">
        <icon type="cancel" size="20" color="#FFF" @click="maskEvent"/>
      </div>
      <div class="header">请设置您的经期数据</div>
      <div class="form-container">
        <div class="ud-container">
          <span class="header">经期</span>
          <span class="text">您的月经大约会持续几天</span>
          <picker class="picker-view" :value="picker"  mode="selector" :range="daterange">
            {{picker}}天
          </picker>
        </div>
        <div class="ud-container">
          <span class="header">周期</span>
          <span class="text">两次月经间隔时间</span>
          <picker class="picker-view" :value="interval"  mode="selector" :range="intervalrange">
            {{interval}}天
          </picker>
        </div>
      </div>
      <view class='modal-btn-wrapper' id="modal-btn-wrapper">
        <icon type="success" size="40" color="#FFF" @click="ensureBtn"/>
      </view>
    </view>
  </view>
</template>

<script>
  import './index.scss'

  export default {
    props: {
      isShowModal: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        picker: 7,
        interval: 30,
        daterange: Object.keys(Array.from({ length: 30 })),
        intervalrange: Object.keys(Array.from({ length: 60 }))
      }
    },
    watch: {
      isShowModal(val) {
        this.$emit('updateShowModal', val)
      }
    },
    methods: {
      ensureBtn() {
        this.isShowModal = false
      },
      maskEvent() {
        this.isShowModal = !this.isShowModal
      }
    }

  }
</script>

<style>
  .card {
    padding: 10px;
  }
</style>

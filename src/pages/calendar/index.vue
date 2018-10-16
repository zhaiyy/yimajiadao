<template>
  <div>
    <div class="header">经期日历</div>
    <calendar></calendar>
    <ul class="flex-warp legend-container">
      <li class="flex-item f25" v-for="(key,keyIndex) in legend" :key="keyIndex">
        <span class="legend-icon" :style="{background: key.color}"></span>
        {{key.text}}
      </li>
      <li class="f25 next-btn">
        <span slot="button" size="mini">> </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Calendar from '@/components/calendar/calendar';

  export default {
    components: {
      Calendar,
    },

    data() {
      return {
        logs: [],
        legend: [
          { text: '月经期', color: '#F56C6C' },
          { text: '预测经期', color: '#f5989b' },
          { text: '安全期', color: '#0bb20c' },
          { text: '易孕期', color: '#b24aa6' },
          { text: '排卵日', color: '#f5070b' },
        ],
      };
    },

    created() {

    },
  };
</script>

<style>
  .header {
    height: 120 rpx;
    line-height: 120 rpx;
    text-align: center;
    border-radius: unset;
  }

  .legend-icon {
    display: inline-block;
    width: 20 rpx;
    height: 20 rpx;
    border-radius: 50%;
  }

  .legend-container {
    color: #6f7180;
    background: #fff;
    box-shadow: 5 rpx 5 rpx 5 rpx #bfbfbf;
    padding: 10 rpx;

  }

  .next-btn {
    width: 20 rpx;
    padding-right: 5 rpx;
  }
</style>

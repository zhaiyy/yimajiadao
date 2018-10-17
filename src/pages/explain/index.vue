<template>
  <div class="page">
    <div class="header">名词解释</div>
    <div class="m15 pb20" v-for="(key,keyIndex) in legend" :key="keyIndex">
      <div class="title f35">
        <span class="legend-icon" :style="{background: key.color}"></span>
        {{key.text}}
      </div>
      <text class="f30 color-a4a">{{key.content}}</text>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      legend: [
        {
          text: '月经期',
          color: '#F56C6C',
          content: '潇洒的大姨妈来了，痛经、腰背酸痛、心情烦躁等症状也随之而来，' +
            '这个时候要注意不能太累，不可吃生冷食物哦～但是生理期也是丰胸和增强记忆力的最佳时期'
        },
        {
          text: '预测经期',
          color: '#f5989b',
          content: '预测期指系统根据您的生理周期状况智能推算的月经预测期'
        },
        {
          text: '安全期',
          color: '#0bb20c',
          content: '一般来说，除去月经期和排卵期就是菇凉们的安全期了，这个时候可是燃脂健身、' +
            '调理安神的好时机呢～不过安全期也不一定安全，做好避孕还是很重要哒'
        },
        {
          text: '易孕期',
          color: '#b24aa6',
          content: '排卵期一般在下次大姨妈驾到前的14天左右，排卵日的前5天和后4天，连同' +
            '排卵日在内的共10天成为排卵期即易孕期。这个时期你身体的每个细胞都在呼喊着：我要怀孕！' +
            '但是如果这时候你还没有做好做妈妈的准备，爱爱时一定要采取避孕措施哦！'
        },
        {
          text: '排卵日',
          color: '#f5070b',
          content: '月经正常的情况下，女性从下次月经第一天开始算，倒数第14天为排卵日'
        }
      ]
    }
  },

  components: {
  },

  methods: {
  },

  created() {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped lang="scss">
  .header {
    height: 120rpx;
    line-height: 120rpx;
    text-align: center;
    border-radius: unset;
  }
  .legend-icon {
    display: inline-block;
    width: 20rpx;
    height: 20rpx;
    border-radius: 5rpx;
  }
  .title {

  }
</style>

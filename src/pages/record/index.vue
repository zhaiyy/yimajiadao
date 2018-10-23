<template>
  <div class="page">
    1111
    <canvas class="echarts" canvas-id="pieGraph"></canvas>
  </div>
</template>

<script>
  /* eslint-disable no-new */

  import WxCharts from '$static/js/wxcharts-min'

export default {
    data() {
      return {
        legend: []
      }
    },

    components: {
    },

    methods: {

      pieShow() {
        const pie = {
          canvasId: 'pieGraph', // canvas-id
          type: 'ring',
          series: [{
            name: '成交量1',
            data: 15
          }, {
            name: '成交量2',
            data: 35
          }, {
            name: '成交量3',
            data: 78
          }, {
            name: '成交量4',
            data: 63
          }],
          width: 320,
          height: 200,
          dataLabel: false
        }
        const a = new WxCharts(pie)
        console.log(a)
      }
    },

    created() {
    // 调用应用实例的方法获取全局数据
      this.pieShow()
    }
}
</script>

<style scoped lang="scss">

  .echarts {
    width: 300px;
    height: 200px;
  }

</style>

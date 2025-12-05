<template>
  <view
    v-if="ec"
    class="container"
  >
    <ec-canvas
      canvas-id="mychart-line"
      :ec="ec"
    />
  </view>
</template>

<script>
import ecCanvas from '../ec-canvas/ec-canvas';
import * as echarts from 'echarts';
function onInitNormalLine(opt) {
  console.log('contentItem数据:', opt);

  // 使用contentItem中的数据，如果没有则使用mockData2
  const data = opt.data.options;
  const normalLineOption = {
    xAxis: data.xAxis,
    yAxis: data.yAxis,
    series: [
      {
        data: data.series[0].data,
        type: 'line',
      },
    ],
  };
  return (canvas, width, height, dpr) => {
    const chart = echarts.init(canvas, null, {
      width,
      height,
      devicePixelRatio: dpr, // 像素比
    });
    canvas.setChart(chart);
    chart.setOption(normalLineOption);
    return chart;
  };
}
export default {
  components: {
    ecCanvas,
  },
  props: {
    options: {
      type: Object,
    },
  },
  data() {
    return {
      ec: null,
    };
  },
  mounted() {
    // 处理小程序 attached 生命周期
    this.attached();
  },
  created() {},
  methods: {
    attached() {
      this.ec = {
        onInit: onInitNormalLine(this.options),
      };
    },
  },
};
</script>
<style>
.container {
    position: relative !important;
    width: 100% !important;
    height: 600rpx !important;
}

ec-canvas {
    width: 100%;
    height: 100%;
}

</style>

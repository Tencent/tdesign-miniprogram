import * as echarts from '../ec-canvas/echarts';

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
      width: width,
      height: height,
      devicePixelRatio: dpr, // 像素比
    });
    canvas.setChart(chart);

    chart.setOption(normalLineOption);
    return chart;
  };
}

Component({
  data: {
    ec: null,
  },

  properties: {
    options: {
      type: Object,
    },
  },

  lifetimes: {
    attached() {
      this.setData({
        ec: {
          onInit: onInitNormalLine(this.properties.options),
        },
      });
    },
  },
});

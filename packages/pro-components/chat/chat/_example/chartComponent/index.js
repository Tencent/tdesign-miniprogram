function onInitNormalLine(chart, opt) {
  console.log('chart实例:', chart);
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
  chart.setOption(normalLineOption);
}

Component({
  data: {
    meow: () => {},
  },

  properties: {
    options: {
      type: Object,
    },
  },

  lifetimes: {
    attached() {
      this.setData({
        meow: (chart) => {
          onInitNormalLine(chart, this.properties.options);
        },
      });
    },
  },
});

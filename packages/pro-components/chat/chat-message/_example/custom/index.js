function onInitNormalLine(chart, opt) {
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
    avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
    message: {
      role: 'assistant',
      content: [
        {
          type: 'text',
          data: '昨日上午北京道路车辆通行状况，9:00的峰值（1330）可能显示早高峰拥堵最严重时段，10:00后缓慢回落，可以得出如下折线图：',
        },
      ],
    },
    message2: {
      role: 'assistant',
    },
    content: [
      {
        type: 'chart',
        data: {
          chartType: 'line',
          options: {
            xAxis: {
              boundaryGap: true,
            },
            yAxis: {
              axisLabel: {
                inside: false,
              },
            },
            series: [
              {
                data: [
                  { name: '0:00', value: 500 },
                  { name: '1:00', value: 402 },
                  { name: '2:00', value: 382 },
                  { name: '3:00', value: 434 },
                  { name: '4:00', value: 560 },
                  { name: '5:00', value: 630 },
                  { name: '6:00', value: 720 },
                  { name: '7:00', value: 980 },
                  { name: '8:00', value: 1230 },
                  { name: '9:00', value: 1320 },
                  { name: '10:00', value: 1200 },
                  { name: '11:00', value: 1300 },
                  { name: '12:00', value: 1100 },
                ],
                type: 'line',
              },
            ],
          },
        },
      },
    ],
  },
  lifetimes: {
    attached() {
      this.setData({
        meow: (chart) => {
          onInitNormalLine(chart, this.data.content[0]);
        },
      });
    },
  },
});

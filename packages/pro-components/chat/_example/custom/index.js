Component({
  data: {
    chatList: [
      {
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        message: {
          role: 'assistant',
          content: [
            {
              type: 'text',
              data: '欢迎使用TDesign智能图表分析助手，请输入你的问题',
            },
          ],
        },
      },
    ],
    value: '北京今天早晚高峰交通情况如何，需要分别给出曲线图表示每个时段', // 输入框的值
    loading: false, // 加载状态
    disabled: false, // 禁用状态
  },
  methods: {
    // 发送消息事件处理
    onSend(e) {
      const { value } = e.detail;
      if (!value || value.trim() === '') return;

      // 创建用户消息对象
      const userMessage = {
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        message: {
          role: 'user',
          content: [
            {
              type: 'text',
              data: value.trim(),
            },
          ],
        },
      };

      // 将用户消息插入到chatList的开头（因为reverse为true，所以用unshift）
      this.setData({
        chatList: [userMessage, ...this.data.chatList],
        value: '', // 清空输入框
      });

      // 模拟助手回复（可选）
      this.simulateAssistantReply(value.trim());
    },

    // 停止事件处理
    onStop() {
      console.log('停止发送');
    },

    // 聚焦事件处理
    onFocus() {
      console.log('输入框聚焦');
    },

    // 获取当前时间
    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    },

    // 模拟助手回复
    simulateAssistantReply() {
      this.setData({ loading: true });

      // 模拟延迟回复
      setTimeout(() => {
        const assistantMessage = {
          avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
          message: {
            role: 'assistant',
            content: [
              {
                type: 'markdown',
                data: '今日上午北京道路车辆通行状况9:00的峰值（1320),可能显示早高峰拥堵最严重时段10:00后缓慢回落，可以得出如下折线图：',
              },
              {
                type: 'chart',
                data: {
                  id: 8379.117942106575,
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
              {
                type: 'markdown',
                data: '今日晚上北京道路车辆通行状况18:00的峰值（1322),可能显示早高峰拥堵最严重时段21:00后缓慢回落，可以得出如下折线图：',
                strategy: 'append',
                status: 'streaming',
              },
              {
                type: 'chart',
                data: {
                  id: 9954.694158956194,
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
                strategy: 'append',
                status: 'complete',
              },
            ],
          },
        };

        const list = [assistantMessage, ...this.data.chatList];

        this.setData({
          chatList: list,
          loading: false,
        });
      }, 1000);
    },
  },
});

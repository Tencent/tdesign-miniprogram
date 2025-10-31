import { Toast } from 'tdesign-miniprogram';
import { getNavigationBarHeight } from '../../../utils/utils';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchStream = async (str, options) => {
  const { success, complete, delay = 100 } = options;

  const arr = str.split('');

  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(delay);
    success(arr[i]);
  }

  complete();
};

Component({
  properties: {
    isActive: {
      type: Boolean,
      value: false,
      observer: function (v) {
        this.setData({
          value: v ? '南极的自动提款机叫什么名字' : '', // 输入框的值
        });
      },
    },
  },

  options: {
    styleIsolation: 'shared',
  },
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
    value: '', // 输入框的值
    loading: false, // 加载状态
    disabled: false, // 禁用状态
    inputStyle: '', // 动态样式
    contentHeight: '100vh', // 内容高度
  },
  methods: {
    // 发送消息事件处理
    onSend(e) {
      const { value } = e.detail;
      if (!value || value.trim() === '') return;

      // 创建用户消息对象
      const userMessage = {
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
      this.setData({
        loading: false,
      });
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

      const assistantMessage = {
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        message: {
          role: 'assistant',
          content: [
            {
              type: 'markdown',
              data: '',
            },
          ],
        },
      };

      const list = [assistantMessage, ...this.data.chatList];

      this.setData({
        chatList: list,
      });

      const that = this;
      wx.nextTick(async () => {
        await fetchStream(
          '今日上午北京道路车辆通行状况9:00的峰值（1320),可能显示早高峰拥堵最严重时段10:00后缓慢回落，可以得出如下折线图：',
          {
            success(result) {
              if (!that.data.loading) return;
              that.data.chatList[0].message.content[0].data += result;
              that.setData({
                chatList: that.data.chatList,
              });
            },
            complete() {},
          },
        );

        if (!that.data.loading) return;

        that.data.chatList[0].message.content.push(
          {
            type: 'chart',
            data: {
              id: 8379.117942106575,
              chartType: 'line',
              options: {
                xAxis: {
                  boundaryGap: true,
                  type: 'category',
                  data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
                },
                yAxis: {
                  type: 'value',
                },
                series: [
                  {
                    data: [500, 401, 382, 433, 560, 630, 720],
                    type: 'line',
                  },
                ],
              },
            },
          },
          {
            type: 'markdown',
            data: '',
          },
        );
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream(
          '今日晚上北京道路车辆通行状况18:00的峰值（1322),可能显示早高峰拥堵最严重时段21:00后缓慢回落，可以得出如下折线图：',
          {
            success(result) {
              if (!that.data.loading) return;
              that.data.chatList[0].message.content[2].data += result;
              that.setData({
                chatList: that.data.chatList,
              });
            },
            complete() {},
          },
        );

        if (!that.data.loading) return;

        that.data.chatList[0].message.content.push({
          type: 'chart',
          data: {
            id: 9954.694158956194,
            chartType: 'line',
            options: {
              xAxis: {
                boundaryGap: true,
                type: 'category',
                data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  data: [500, 401, 382, 433, 560, 630, 720],
                  type: 'line',
                },
              ],
            },
          },
          strategy: 'append',
          status: 'complete',
        });
        that.data.chatList[0].message.status = 'complete';
        that.setData({
          chatList: that.data.chatList,
          loading: false,
        });
      });
    },
    handleAction(e) {
      const { name, active, data } = e.detail;

      let message = '';
      switch (name) {
        case 'refresh':
          message = '已刷新';
          break;
        case 'copy':
          console.log(data);
          message = '复制成功';
          break;
        case 'good':
          message = active ? '点赞成功' : '取消点赞';
          break;
        case 'bad':
          message = active ? '点踩成功' : '取消点踩';
          break;
        case 'share':
          message = '分享功能';
          break;
        default:
          message = `执行了${name}操作`;
      }

      Toast({
        context: this,
        selector: '#t-toast',
        message,
        theme: 'success',
      });
    },
  },
  lifetimes: {
    attached: function () {
      /**
       * 计算内容区域高度
       * 生成CSS calc表达式：calc(100vh - 96rpx - 导航高度 - 底部安全区域高度)
       */
      try {
        // 获取当前的导航栏高度和安全区域高度
        const navigationBarHeight = getNavigationBarHeight() || 0;

        // 生成CSS calc表达式字符串
        const contentHeight = `calc(100vh - 96rpx - ${navigationBarHeight}px)`;

        this.setData({
          contentHeight: contentHeight,
        });

        console.log('内容区域高度CSS表达式:', contentHeight);
      } catch (error) {
        console.error('生成内容高度表达式失败:', error);
        this.setData({
          contentHeight: 'calc(100vh - 96rpx)',
        });
      }
    },
  },
});

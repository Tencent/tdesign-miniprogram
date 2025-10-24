import { Toast } from 'tdesign-miniprogram';
import { getSafeAreaHeight, getNavigationBarHeight } from '../../../utils/utils';

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
    contentHeight: {
      type: String,
      value: '100vh',
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
              data: '欢迎使用TDesign Agent家庭活动策划助手，请给我布置任务吧～',
            },
          ],
        },
      },
    ],
    value: '请帮我做一个5岁儿童生日聚会的规划', // 输入框的值
    loading: false, // 加载状态
    disabled: false, // 禁用状态
    inputStyle: '', // 输入框动态样式
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

      this.setData({
        chatList: [assistantMessage, ...this.data.chatList],
      });

      const that = this;
      wx.nextTick(async () => {
        await fetchStream('为5岁小朋友准备一场生日派对，我会根据要求准备合适方案，计划从以下几个步骤进行准备：', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[0].data += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content.push({
          type: 'agent',
          id: 'task1',
          content: {
            text: '',
            steps: [],
          },
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream('生日聚会规划任务已分解为3个执行阶段', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[1].content.text += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps.push({
          step: '确定派对餐饮方案',
          agent_id: 'a1',
          tasks: [
            {
              type: 'command',
              text: '',
            },
          ],
          status: 'finish',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream('调用智能搜索工具', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[1].content.steps[0].tasks[0].text += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps[0].tasks.push({
          type: 'command',
          text: '',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream('已筛选出3种高性价比菜单方案，开始进行营养匹配', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[1].content.steps[0].tasks[1].text += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps[0].tasks.push({
          type: 'result',
          text: '',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream('主菜是香草烤鸡（无麸质），准备耗时45分钟；', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[1].content.steps[0].tasks[2].text += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps.push({
          step: '准备派对现场布置',
          agent_id: 'a2',
          tasks: [
            {
              type: 'command',
              text: '',
            },
          ],
          status: 'finish',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream('调用智能搜索工具，搜索儿童派对用品清单', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[1].content.steps[1].tasks[0].text += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps[1].tasks.push({
          type: 'result',
          text: '',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream(
          '推荐现场布置方案：餐具（一次性纸盘、刀叉套装）、杯子、纸巾、一次性桌布，装饰气球、横幅、礼帽等',
          {
            success(result) {
              if (!that.data.loading) return;
              that.data.chatList[0].message.content[1].content.steps[1].tasks[1].text += result;
              that.setData({
                chatList: that.data.chatList,
              });
            },
            complete() {},
          },
        );

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps.push({
          step: '策划派对活动',
          agent_id: 'a1',
          tasks: [
            {
              type: 'command',
              text: '',
            },
          ],
          status: 'finish',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream('搜索儿童派对游戏', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[1].content.steps[2].tasks[0].text += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps[2].tasks.push({
          type: 'command',
          text: '',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream('整理信息并进行合理性分析，安全性评估', {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[1].content.steps[2].tasks[1].text += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {},
        });

        if (!that.data.loading) return;

        that.data.chatList[0].message.content[1].content.steps[2].tasks.push({
          type: 'result',
          text: '',
        });
        that.setData({
          chatList: that.data.chatList,
        });

        await fetchStream(
          '派对总时长建议控制在1.5小时，符合5岁儿童注意力持续时间，每位小朋友到达时可以在拍照区留影，可设置一个签到',
          {
            success(result) {
              if (!that.data.loading) return;
              that.data.chatList[0].message.content[1].content.steps[2].tasks[2].text += result;
              that.setData({
                chatList: that.data.chatList,
              });
            },
            complete() {},
          },
        );
        that.data.chatList[0].message.status = 'complete';
        that.setData({
          chatList: that.data.chatList,
        });
        that.setData({
          loading: false,
        });
      });
    },
    handleAction(e) {
      const { name, active, data } = e.detail;
      console.log(e);

      let message = '';
      switch (name) {
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
        const safeAreaBottom = getSafeAreaHeight() || 0;

        // 生成CSS calc表达式字符串
        const contentHeight = `calc(100vh - 96rpx - ${navigationBarHeight}px - ${safeAreaBottom}px)`;

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

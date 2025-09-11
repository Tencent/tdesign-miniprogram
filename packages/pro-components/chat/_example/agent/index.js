const mockData = {
  avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
  message: {
    role: 'assistant',
    content: [
      {
        type: 'markdown',
        data: '为5岁小朋友准备一场生日派对，我会根据要求准备合适方案，计划从以下几个步骤进行准备：',
      },
      {
        type: 'agent',
        id: 'task1',
        state: 'init',
        content: {
          text: '生日聚会规划任务已分解为3个执行阶段',
          steps: [
            {
              step: '确定派对餐饮方案',
              agent_id: 'a1',
              tasks: [
                {
                  type: 'command',
                  text: '调用智能搜索工具，搜索儿童健康点心，儿童健康食谱',
                },
                {
                  type: 'command',
                  text: '已筛选出3种高性价比菜单方案，开始进行营养匹配',
                },
                {
                  type: 'result',
                  text: '推荐餐饮方案: 主菜是香草烤鸡（无麸质），准备耗时45分钟；恐龙造型生日蛋糕，可食用果蔬汁调色的面团；水果蔬菜拼盘；饮品是鲜榨苹果汁，橙汁',
                },
              ],
              status: 'finish',
            },
            {
              step: '准备派对现场布置',
              agent_id: 'a2',
              tasks: [
                {
                  type: 'command',
                  text: '调用智能搜索工具，搜索儿童派对用品清单',
                },
                {
                  type: 'result',
                  text: '推荐现场布置方案：餐具（一次性纸盘、刀叉套装）、杯子、纸巾、一次性桌布，装饰气球、横幅、礼帽等，根据来访人数，可以选择零售渠道，价格从1-15元不等，让孩子参与布置过程，增加互动性',
                },
              ],
              status: 'finish',
            },
            {
              step: '策划派对活动',
              agent_id: 'a3',
              tasks: [
                {
                  type: 'command',
                  text: '搜索儿童派对游戏，安全、有趣、简单',
                },
                {
                  type: 'command',
                  text: '整理信息并进行合理性分析，安全性评估',
                },
                {
                  type: 'result',
                  text: '派对总时长建议控制在1.5小时，符合5岁儿童注意力持续时间，每位小朋友到达时可以在拍照区留影，可设置一个签到板，推荐活动：尾巴追逐赛，彩泥制作，套圈，抽盲盒',
                },
              ],
              status: 'finish',
            },
          ],
        },
        status: 'streaming',
      },
    ],
  },
};

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
              data: '欢迎使用TDesign Agent家庭活动策划助手，请给我布置任务吧～',
            },
          ],
        },
      },
    ],
    value: '请帮我做一个5岁儿童生日聚会的规划', // 输入框的值
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

    // 模拟助手回复
    simulateAssistantReply() {
      this.setData({ loading: true });

      // 模拟延迟回复
      setTimeout(() => {
        const assistantMessage = mockData;

        this.setData({
          chatList: [assistantMessage, ...this.data.chatList],
          loading: false,
        });
      }, 1000);
    },
  },
});

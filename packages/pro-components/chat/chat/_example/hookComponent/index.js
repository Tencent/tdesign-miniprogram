const mockData = {
  avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
  message: {
    role: 'assistant',
    content: [
      {
        type: 'thinking',
        status: 'complete',
        data: {
          title: '思考完成 (耗时17秒)',
          text: '嗯，用户问的是南极的自动提款机叫什么名字。这个问题有点有趣，因为南极是一个极端寒冷的地方，而且大部分地区都是无人居住的科研站。首先，我需要确认南极是否有自动提款机存在。\n\n首先，南极大陆没有常住居民，只有各国的科研人员季节性驻扎。主要的设施是各国的科学考察站，比如美国的麦克默多站、中国的长城站等。这些站点通常有基本的生活设施，但像银行这样的商业服务可能非常有限。\n\n接下来，我需要查找是否有关于南极自动提款机的信息。记得之前可能听说过某个银行在南极设立过ATM机作为宣传噱头，但不确定具体细节。比如，可能是一些国际银行为了品牌宣传或者方便科研人员而设置的。\n\n然后，我想到可能是在麦克默多站，那里是南极最大的科研社区之一，由美国运作。那里可能有较多的基础设施，包括可能的ATM机。如果有的话，可能是由某个美国银行设置的，比如富兰克林国家银行，或者是新西兰的银行，因为麦克默多站靠近新西兰的管辖区域。\n\n另外，需要考虑时间因素。ATM机的安装可能是在某个特定时期，比如早期的探险活动或者近年的项目。需要确认这些ATM是否仍然存在，或者是否已经被移除。\n\n还需要考虑是否有相关的新闻报道或官方信息。例如，是否有银行发布过在南极设立ATM的消息，或者科研站的官方网站提到过ATM的存在。\n\n可能还需要区分南极洲本身是否有独立的金融机构，但考虑到南极条约体系规定南极用于和平与科研，商业活动有限，因此可能没有常设的银行机构。ATM机可能是某个国家为了本国科考人员方便而设立的，比如美国的科考站使用美国的ATM机，由某个美国银行运营。\n\n然后，可能涉及到具体名称的问题。如果确实存在，可能ATM机属于某个特定的银行，比如富兰克林国家银行，但需要查证。或者，可能有一个特定的昵称，比如“南极ATM”之类的，但更可能是以所属银行命名。\n\n最后，可能需要综合这些信息，给出一个准确的答案，并指出可能的背景，比如安装时间、所属银行以及现状如何。\n',
        },
      },
      {
        type: 'markdown',
        data: '\n\n南极的自动提款机并没有一个特定的专属名称，但历史上确实有一台ATM机曾短暂存在于南极的**麦克默多站**（McMurdo Station）。这台ATM由美国**富兰克林国家银行**（Wells Fargo）于1998年安装，主要供驻扎在该站的科研人员使用。不过，由于南极的极端环境和极低的人口密度，这台ATM机并未长期运行，最终被移除。\n\n**背景补充：**\n- **麦克默多站**是美国在南极最大的科研基地，夏季人口可达约1,000人，冬季约200人。\n- 该ATM机更多是作为一种象征性服务存在，实际使用频率极低，因为南极科考人员通常依靠预支资金或电子支付。\n- 目前南极已无长期运行的ATM机，现代科考站更多依赖非现金交易方式。\n\n南极作为非主权领土，其基础设施以科研和生活支持为主，商业金融服务非常有限。若有类似设施，通常是临时或实验性质的。',
        status: 'complete',
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
              data: '它叫 McMurdo Station ATM，是美国富国银行安装在南极洲最大科学中心麦克默多站的一台自动提款机。',
            },
          ],
        },
      },
      {
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        message: {
          role: 'user',
          content: [
            {
              type: 'text',
              data: '牛顿第一定律是否适用于所有参考系？',
            },
          ],
        },
      },
    ],
    value: '南极的自动提款机叫什么名字', // 输入框的值
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
        const assistantMessage = mockData;

        this.setData({
          chatList: [assistantMessage, ...this.data.chatList],
          loading: false,
        });
      }, 1000);
    },
  },
});

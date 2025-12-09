import Toast from 'tdesign-miniprogram/toast';
import { getNavigationBarHeight } from '../../../utils/utils';

const mockData = `南极的自动提款机并没有一个特定的专属名称，但历史上确实有一台ATM机曾短暂存在于南极的**麦克默多站**（McMurdo Station）。这台ATM由美国**富兰克林国家银行**（Wells Fargo）于1998年安装，主要供驻扎在该站的科研人员使用。不过，由于南极的极端环境和极低的人口密度，这台ATM机并未长期运行，最终被移除。

**背景补充：**
- **麦克默多站**是美国在南极最大的科研基地，夏季人口可达约1,000人，冬季约200人。
- 该ATM机更多是作为一种象征性服务存在，实际使用频率极低，因为南极科考人员通常依靠预支资金或电子支付。
- 目前南极已无长期运行的ATM机，现代科考站更多依赖非现金交易方式。

南极作为非主权领土，其基础设施以科研和生活支持为主，商业金融服务非常有限。若有类似设施，通常是临时或实验性质的。`;

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

// 生成唯一ID
const generateId = () => {
  return `msg_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

Component({
  options: {
    styleIsolation: 'shared',
  },
  data: {
    renderPresets: [{ name: 'send', type: 'icon' }],
    chatList: [
      {
        chatId: 'msg_001',
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        role: 'assistant',
        status: 'complete',
        content: [
            {
              type: 'text',
              data: '它叫 McMurdo Station ATM，是美国富国银行安装在南极洲最大科学中心麦克默多站的一台自动提款机。',
            },
          ],
      },
      {
          chatId: 'msg_002',
          role: 'user',
          content: [
            {
              type: 'text',
              data: '牛顿第一定律是否适用于所有参考系？',
            },
          ],
      },
    ],
    groupedChatList: [], // 分组后的数据
    value: '', // 输入框的值
    loading: false, // 加载状态
    disabled: false, // 禁用状态
    inputStyle: '', // 输入框样式
    contentHeight: '100vh', // 内容高度
    animation: 'dots',
    anchorHeight: 0, // 锚点高度
  },

  methods: {
    // 将 chatList 分组（一问一答为一组）
    groupChatList() {
      const { chatList } = this.data;
      const grouped = [];
      
      for (let i = 0; i < chatList.length; i += 2) {
        const group = [chatList[i]];
        if (i + 1 < chatList.length) {
          group.push(chatList[i + 1]);
        }
        grouped.push(group);
      }
      
      this.setData({
        groupedChatList: grouped,
      });
    },

    // 调用chatList的滚动到底部方法
    scrollToBottom() {
      const chatListComponent = this.selectComponent('#chatList');
      if (chatListComponent && typeof chatListComponent.scrollToBottom === 'function') {
        chatListComponent.scrollToBottom();
      }
    },

    onScroll(e) {
      console.log('监听滚动', e);
    },

    // 滚动到顶部（用于加载更多历史消息）
    onScrollToUpper() {
      console.log('滚动到顶部');
      // 可以在这里加载更多历史消息
    },

    // 新消息置顶
    setQueryOnTop() {
      const chatListComponent = this.selectComponent('#chatList');
      if (!chatListComponent) return;

      // 开启置顶锁
      chatListComponent.setQueryOnTopLock(true);

      wx.nextTick(() => {
        // 获取高度信息
        chatListComponent.getElementsHeight().then((res) => {
          this.setData({
            anchorHeight: res.chatListHeight || 0,
          });

          // 执行置顶
          chatListComponent.setQueryOnTop();

          // 500ms 后关闭锁
          setTimeout(() => {
            chatListComponent.setQueryOnTopLock(false);
          }, 500);
        });
      });
    },

    // 发送消息事件处理
    onSend(e) {
      const { value } = e.detail;
      if (!value || value.trim() === '') return;

      // 创建用户消息对象
      const userMessage = {
        chatId: generateId(),
        role: 'user',
        content: [
          {
            type: 'text',
            data: value.trim(),
          },
        ],
      };

      // 将用户消息插入到chatList的末尾
      this.setData({
        chatList: [...this.data.chatList, userMessage],
        value: '', // 清空输入框
      });

      // 重新分组
      this.groupChatList();

      // 模拟助手回复
      this.simulateAssistantReply(value.trim());
    },

    // 停止事件处理
    onStop() {
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
      this.setData({ loading: true});
      // 请求中
      const assistantMessage = {
        chatId: generateId(),
        role: 'assistant',
        content: [
          {
            type: 'markdown',
            data: '',
          },
        ],
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        status: 'pending',
      };
      // 将助手消息插入到末尾
      this.setData({
        chatList: [...this.data.chatList, assistantMessage],
      });

      // 重新分组
      this.groupChatList();

      const that = this;
      wx.nextTick(() => {
        fetchStream(mockData, {
          success(result) {
            // 生文中
            const lastIndex = that.data.chatList.length - 1;
            that.data.chatList[lastIndex].status = 'streaming';
            if (!that.data.loading) return;
            that.data.chatList[lastIndex].content[0].data += result;
            that.setData({
              chatList: that.data.chatList,
            });
            // 更新分组数据
            that.groupChatList();
          },
          complete() {
            const lastIndex = that.data.chatList.length - 1;
            that.data.chatList[lastIndex].status = 'complete';
            that.setData({
              chatList: that.data.chatList,
            });
            that.setData({
              loading: false,
            });
            // 最终更新分组数据
            that.groupChatList();
            // 触发置顶
            that.setQueryOnTop();
          },
        });
      });
    },

    handleAction(e) {
      const { name, active, data } = e.detail;

      let message = '';
      switch (name) {
        case 'replay':
          message = '重新生成';
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

      // 初始化分组数据
      this.groupChatList();
    },
  },
});

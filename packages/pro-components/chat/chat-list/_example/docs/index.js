import Toast from 'tdesign-miniprogram/toast';
import { getNavigationBarHeight } from '../../../utils/utils';

let uniqueId = 0;
const getUniqueKey = () => {
  uniqueId += 1;
  return `key-${uniqueId}`;
};

const mockData1 =
  '🌼宝子们，春天来啦，这些户外郊游打卡地你必须知道👏\n\n🌟郊野公园\n这里有大片的草地和各种花卉，随便一拍都是大片既视感📷。还能放风筝、野餐，享受惬意的春日时光。\n\n🌳植物园\n各种珍稀植物汇聚于此，仿佛置身于绿色的海洋。漫步其中，感受大自然的神奇与美丽。\n\n💧湖边湿地\n湖水清澈，周围生态环境优越。能看到很多候鸟和水生植物，是亲近自然的好去处。\n\n宝子们，赶紧收拾行囊，去这些地方打卡吧😜。\n\n#春天郊游 #打卡目的地 #户外之旅 #春日美景';

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
        // 延迟 30ms，避免 hidden 场景下， value 变更无法触发 textarea 的自动换行
        // 代码片段（iOS 真机可复现）：https://developers.weixin.qq.com/s/7UoAYgmr8G4k
        setTimeout(() => {
          this.setData({
            value: v ? '根据所提供的材料总结一篇文章，推荐春天户外郊游打卡目的地，需要符合小红书平台写作风格' : '', // 输入框的值
          });
        }, 30);
      },
    },
  },
  data: {
    customActionBar: ['copy', 'good', 'bad'],
    chatList: [
      {
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        message: {
          role: 'assistant',
          content: [
            {
              type: 'text',
              data: '欢迎使用TDesign文案写作助手，可以先上传你需要参考的文件，输入你要撰写的主题~',
            },
          ],
        },
        chatId: getUniqueKey(),
      },
    ],
    value: '', // 输入框的值
    loading: false, // 加载状态
    disabled: false, // 禁用状态
    inputStyle: '', // 动态样式
    attachmentsProps: {
      items: [],
      removable: true,
      imageViewer: true,
      addable: false,
    },
    renderPresets: [
      {
        name: 'upload',
        presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'],
        status: '',
      },
      {
        name: 'send',
        type: 'icon',
      },
    ],
    fileList: [],
    visible: false, // 是否显示选择文件面板
    chatContentProps: {
      thinking: { maxHeight: 100, collapsed: true },
    },
    contentHeight: '100vh', // 内容高度
    activePopoverId: '', // 当前打开悬浮actionbar的chatId
    longPressPosition: null, // 长按位置对象
  },

  methods: {
    // 发送消息事件处理
    onSend(e) {
      const { value } = e.detail;
      if (!value || value.trim() === '') return;

      // 创建用户消息对象
      const content = [
        {
          type: 'text',
          data: value.trim(),
        },
      ];
      const attachments = this.data.attachmentsProps.items.map((item) => {
        return {
          ...item,
          status: 'success',
        };
      });
      content.unshift({
        type: 'attachment',
        data: attachments,
      });
      this.setData({
        attachmentsProps: {
          ...this.data.attachmentsProps,
          items: [],
        },
        fileList: [],
      });
      const userMessage = {
        message: {
          role: 'user',
          content,
        },
        chatId: getUniqueKey(),
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

    // 打开选择文件界面
    onUpdateVisible(e) {
      const visible = e.detail;
      console.log('上传面板显示状态:', visible);
      this.setData({ visible });
    },

    onFileDelete() {
      this.setData({
        attachmentsProps: {
          ...this.data.attachmentsProps,
          items: [],
        },
      });
    },

    onFileChange(e) {
      const { files } = e.detail;
      this.setData({ attachmentsProps: { ...this.data.attachmentsProps, items: files } });
      this.setData({ fileList: files });
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
        chatId: getUniqueKey(),
      };

      this.setData({
        chatList: [assistantMessage, ...this.data.chatList],
      });

      const that = this;
      wx.nextTick(() => {
        fetchStream(mockData1, {
          success(result) {
            if (!that.data.loading) return;
            that.data.chatList[0].message.content[0].data += result;
            that.setData({
              chatList: that.data.chatList,
            });
          },
          complete() {
            that.data.chatList[0].message.status = 'complete';
            that.setData({
              chatList: that.data.chatList,
            });
            that.setData({
              loading: false,
            });
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
    showPopover(e) {
      const { id, longPressPosition } = e.detail;

      let role = '';
      this.data.chatList.forEach((item) => {
        if (item.chatId === id) {
          role = item.message.role;
        }
      });

      // 仅当 role 为 user 时才显示 popover
      if (role !== 'user') {
        return;
      }

      this.setData({
        activePopoverId: id,
        longPressPosition,
      });
    },
    handlePopoverAction(e) {
      e.detail.chatId = this.data.activePopoverId;
      this.handleAction(e);
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

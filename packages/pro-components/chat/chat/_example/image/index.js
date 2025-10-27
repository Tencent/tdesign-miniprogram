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
  options: {
    styleIsolation: 'shared',
  },
  data: {
    customActionBar: ['good', 'bad'],
    chatList: [
      {
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        message: {
          role: 'assistant',
          content: [
            {
              type: 'text',
              data: '欢迎使用TDesign智能生图助手，请先写下你的创意，可以试试上传参考图哦～',
            },
          ],
        },
      },
    ],
    value: '请为Tdesign设计三张品牌宣传图', // 输入框的值
    loading: false, // 加载状态
    disabled: false, // 禁用状态
    inputStyle: '', // 输入框动态样式
    attachmentsProps: {
      items: [],
      removable: true,
      imageViewer: true,
      addable: false,
    },
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

    // 打开选择文件界面
    onUpdateVisible() {
      const that = this;
      wx.chooseMessageFile({
        count: 1,
        type: 'file',
        success(res) {
          const tempFile = res.tempFiles[0];
          console.log('选择的文件信息：', tempFile);
          const item = {
            fileType: 'doc',
            name: tempFile.name,
            url: tempFile.path,
            size: tempFile.size,
            status: 'success',
          };
          that.setData({
            attachmentsProps: {
              ...that.data.attachmentsProps,
              items: [item],
            },
          });
        },
        fail(err) {
          console.error('选择文件失败：', err);
        },
      });
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
        await fetchStream('接下来我将生成符合要求的图片', {
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
          type: 'imageview',
          status: 'complete',
          data: [
            {
              url: 'https://tdesign.gtimg.com/demo/demo-image-2.png',
              format: 'png',
              width: 1204,
              height: 1024,
              size: 1032,
              style: 'height: 256rpx; width: 256rpx;',
            },
            {
              url: 'https://tdesign.gtimg.com/demo/demo-image-2.png',
              format: 'png',
              width: 1204,
              height: 1024,
              size: 1032,
              style: 'height: 256rpx; width: 256rpx;',
            },
            {
              url: 'https://tdesign.gtimg.com/demo/demo-image-3.png',
              format: 'png',
              width: 1204,
              height: 1024,
              size: 1032,
              style: 'height: 256rpx; width: 256rpx;',
            },
          ],
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

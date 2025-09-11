const mockData = {
  avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
  message: {
    role: 'assistant',
    content: [
      {
        type: 'markdown',
        data: '接下来我将生成符合要求的图片',
      },
      {
        type: 'imageview',
        status: 'complete',
        data: [
          {
            url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
            format: 'png',
            width: 1204,
            height: 1024,
            size: 1032,
          },
          {
            url: 'https://tdesign.gtimg.com/demo/demo-image-2.png',
            format: 'png',
            width: 1204,
            height: 1024,
            size: 1032,
          },
          {
            url: 'https://tdesign.gtimg.com/demo/demo-image-3.png',
            format: 'png',
            width: 1204,
            height: 1024,
            size: 1032,
          },
        ],
      },
    ],
  },
};

Component({
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
    attachmentsProps: {
      items: [],
      removable: true,
      imageViewer: true,
      addable: false,
    },
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

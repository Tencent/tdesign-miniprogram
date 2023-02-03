import Message from 'tdesign-miniprogram/message/index';

Component({
  methods: {
    showInfoMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: '这是一条普通通知信息',
      });
    },

    showWarnMessage() {
      Message.warning({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: '这是一条需要用户关注到的警示通知',
      });
    },

    showSuccessMessage() {
      Message.success({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: '这是一条成功的提示消息',
      });
    },

    showErrorMessage() {
      Message.error({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: '这是一条错误提示通知',
      });
    },
  },
});

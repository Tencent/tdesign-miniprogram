import Message from 'tdesign-miniprogram/message/index';

Component({
  methods: {
    showInfoMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: 'Message notification content.',
      });
    },

    showWarnMessage() {
      Message.warning({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: 'Message notification content.',
      });
    },

    showSuccessMessage() {
      Message.success({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: 'Message notification content.',
      });
    },

    showErrorMessage() {
      Message.error({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: 'Message notification content.',
      });
    },
  },
});

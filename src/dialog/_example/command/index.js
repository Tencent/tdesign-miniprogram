import Dialog from 'tdesign-miniprogram/dialog/index';

Component({
  methods: {
    showDialog(e) {
      const { type } = e.currentTarget.dataset;

      const dialogConfig = {
        context: this,
        title: '弹窗标题',
        content: '告知当前状态、信息和解决方法等内容。',
        confirmBtn: '确认按钮',
      };

      if (type === 'hasCancelBtn') {
        dialogConfig.cancelBtn = '取消按钮';
      }

      Dialog.confirm(dialogConfig);
    },
  },
});

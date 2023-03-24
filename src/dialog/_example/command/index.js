import Dialog from 'tdesign-miniprogram/dialog/index';

Component({
  methods: {
    showDialog() {
      const dialogConfig = {
        context: this,
        title: '弹窗标题',
        content: '告知当前状态、信息和解决方法等内容。',
        confirmBtn: '确定',
        cancelBtn: '取消',
      };

      Dialog.confirm(dialogConfig)
        .then(() => console.log('点击了确定'))
        .catch(() => console.log('点击了取消'))
        .finally(() => Dialog.close());
    },
  },
});

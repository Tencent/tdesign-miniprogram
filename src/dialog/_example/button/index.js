import Dialog from 'tdesign-miniprogram/dialog/index';

Component({
  methods: {
    showDialog() {
      const dialogConfig = {
        context: this,
        title: '弹窗标题',
        content: '告知当前状态、信息和解决方法等内容。',
        cancelBtn: '取消',
        confirmBtn: {
          openType: 'getPhoneNumber',
          content: '获取手机',
          bindgetphonenumber({ detail }) {
            console.log(detail);
          },
        },
      };

      Dialog.confirm(dialogConfig)
        .then(() => {
          console.log('点击确认');
        })
        .catch(() => {
          console.log('点击取消');
        });
    },
  },
});

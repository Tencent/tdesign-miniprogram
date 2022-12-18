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
            if (detail.errMsg.includes('fail')) {
              console.log('获取失败');
              return false; // 不关闭弹窗
            }
            return true; // 关闭弹窗
          },
        },
      };

      Dialog.confirm(dialogConfig)
        .then(() => {
          console.log('点击确定');
        })
        .catch(() => {
          console.log('点击取消');
        });
    },
  },
});

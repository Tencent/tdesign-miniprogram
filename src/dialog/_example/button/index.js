import Dialog from 'tdesign-miniprogram/dialog/index';

Component({
  methods: {
    showDialog() {
      const dialogConfig = {
        context: this,
        title: 'Title',
        content: 'Inform you of current status, information, solutions, etc.',
        cancelBtn: 'Cancel',
        confirmBtn: {
          openType: 'share',
          content: 'Share with friends',
          bindgetphonenumber({ detail }) {
            console.log(detail);
            if (detail.errMsg.includes('fail')) {
              console.log('Failed to obtain');
              return false; // 不关闭弹窗
            }
            return true; // 关闭弹窗
          },
        },
      };

      Dialog.confirm(dialogConfig)
        .then(() => {
          console.log('Click OK Button');
        })
        .catch(() => {
          console.log('Click Cancel Button');
        });
    },
  },
});

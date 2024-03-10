import Dialog from 'tdesign-miniprogram/dialog/index';

Component({
  methods: {
    showDialog() {
      const dialogConfig = {
        context: this,
        title: 'Title',
        content: 'Inform you of current status, information, solutions, etc.',
        confirmBtn: 'Comfirm',
        cancelBtn: 'Cancel',
      };

      Dialog.confirm(dialogConfig)
        .then(() => console.log('Click OK Button'))
        .catch(() => console.log('Click Cancel Button'))
        .finally(() => Dialog.close());
    },
  },
});

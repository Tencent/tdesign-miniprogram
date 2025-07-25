Component({
  data: {
    confirmBtn: { content: '确定', variant: 'base' },
    dialogKey: '',
    showConfirm: false,
    showWarnConfirm: false,
    showTooLongBtnContent: false,
    showMultiBtn: false,
    multiBtnList: [
      { content: '次要按钮', theme: 'light' },
      { content: '次要按钮', theme: 'light' },
      { content: '主要按钮', theme: 'primary' },
    ],
  },
  methods: {
    showDialog(e) {
      const { key } = e.currentTarget.dataset;
      this.setData({ [key]: true, dialogKey: key });
    },

    closeDialog() {
      const { dialogKey } = this.data;
      this.setData({ [dialogKey]: false });
    },
  },
});

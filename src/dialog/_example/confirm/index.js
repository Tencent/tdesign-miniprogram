Component({
  data: {
    dialogKey: '',
    showConfirm: false,
    showWarnConfirm: false,
    showTooLongBtnContent: false,
    showMultiBtn: false,
    multiBtnList: [
      { name: '取消', primary: false },
      { name: '单行按钮最多十五个字符文案内容', primary: true },
      { name: '按钮文案文字内容较长', primary: true, style: 'color:red;' },
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

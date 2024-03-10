Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    confirmBtn: { content: 'Comfirm', variant: 'base' },
    dialogKey: '',
    showConfirm: false,
    showWarnConfirm: false,
    showTooLongBtnContent: false,
    showMultiBtn: false,
    multiBtnList: [
      { content: 'Secondary Button', theme: 'light' },
      { content: 'Secondary Button', theme: 'light' },
      { content: 'Primary Button', theme: 'primary' },
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

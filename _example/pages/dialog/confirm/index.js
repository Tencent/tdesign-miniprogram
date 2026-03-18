Component({
  data: {
    confirmBtn: { content: '确定', variant: 'base' },
    dialogKey: '',
    showConfirm: false,
    showWarnConfirm: false,
    showLightConfirm: false,
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

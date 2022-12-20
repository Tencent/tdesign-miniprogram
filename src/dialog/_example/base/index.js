Component({
  data: {
    confirmBtn: { content: '知道了', variant: 'base' },
    dialogKey: '',
    showText: false,
    showMultiText: false,
    showTextAndTitle: false,
    showMultiTextAndTitle: false,
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

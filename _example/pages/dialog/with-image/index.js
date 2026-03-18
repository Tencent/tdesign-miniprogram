Component({
  data: {
    dialogKey: '',
    imageOnTop: false,
    imageOnTopWithContent: false,
    imageOnTopWithTitle: false,
    imageOnMiddle: false,
    imageOnMiddleWithTitle: false,
    imageOnMiddleWithImage: false,
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

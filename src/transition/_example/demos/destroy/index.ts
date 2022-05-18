Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    visible: false,
  },
  methods: {
    onTriggerClick() {
      this.setData({
        visible: !this.data.visible,
      });
    },
    onClose() {
      this.setData({
        visible: false,
      });
    },
  },
});

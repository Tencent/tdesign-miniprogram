Component({
  data: {
    isActive1: true,
    isActive2: false,
    switchValue: false,
  },

  methods: {
    onClick(e) {
      const { name } = e.currentTarget.dataset;
      if (name === 'isActive1') {
        this.setData({
          isActive1: !this.data.isActive1,
          isActive2: this.data.isActive1,
        });
      } else {
        this.setData({
          isActive1: this.data.isActive2,
          isActive2: !this.data.isActive2,
        });
      }
    },

    onChangeSwitch(e) {
      this.setData({
        switchValue: e.detail.value,
      });
    },
  },
});

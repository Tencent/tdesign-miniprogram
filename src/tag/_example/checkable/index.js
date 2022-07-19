Component({
  data: {
    items: [
      {
        name: '选中',
        checked: true,
      },
      {
        name: '未选中',
        checked: false,
      },
      {
        name: '不可选',
        checked: false,
        disabled: true,
      },
    ],
  },

  methods: {
    handleCheckTagChange(e) {
      console.log(e.detail.checked);
    },
  },
});

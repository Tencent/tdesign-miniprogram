Component({
  data: {
    visible: true,

    closeIcon: { name: 'close', ariaLabel: '关闭', ariaRole: 'button' },
  },

  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log(`click on the ${trigger} area`);
    },
  },
});

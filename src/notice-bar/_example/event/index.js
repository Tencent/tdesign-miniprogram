Component({
  data: {
    visible: true,
    navigatorProps: {
      url: '/pages/xxx/xxx',
    },

    suffixValue: { name: 'close', ariaLabel: '关闭', ariaRole: 'button' },
    chevronRightValue: { name: 'chevron-right', ariaLabel: '更多', ariaRole: 'button' },
  },

  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log(`click on the ${trigger} area`);
    },
  },
});

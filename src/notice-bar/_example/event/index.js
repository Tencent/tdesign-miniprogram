Component({
  data: {
    visible: true,
    navigatorProps: {
      url: '/pages/xxx/xxx',
    },
    chevronRightIcon: {
      name: 'chevron-right',
      ariaHidden: true,
    },
  },

  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log(`click on the ${trigger} area`);
    },
  },
});

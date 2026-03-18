Component({
  data: {
    visible: true,
    navigatorProps: {
      url: '/pages/xxx/xxx',
    },
  },

  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log(`click on the ${trigger} area`);
    },
  },
});

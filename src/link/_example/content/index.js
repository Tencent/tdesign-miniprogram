Component({
  data: {
    navigatorProps: {
      url: '/pages/home/home',
      type: 'navigateTo',
    },
  },
  methods: {
    handleComplete(e) {
      console.log('handleComplete:', e);
    },

    handleFail(e) {
      console.log('handleFail:', e);
    },

    handleSuccess(e) {
      console.log('handleSuccess:', e);
    },
  },
});

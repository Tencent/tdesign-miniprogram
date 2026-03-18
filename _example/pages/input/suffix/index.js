Component({
  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log('click: ', trigger);
    },
  },
});

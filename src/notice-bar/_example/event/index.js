Component({
  data: {
    visible: true,
  },

  methods: {
    click(e) {
      const { trigger } = e.detail;
      if (trigger === 'prefix-icon') {
        console.log('click prefix-icon text');
      } else if (trigger === 'content') {
        console.log('click content text');
      } else if (trigger === 'extra') {
        console.log('click extra text');
      } else if (trigger === 'suffix-icon') {
        console.log('click suffix-icon text');
      }
    },
  },
});

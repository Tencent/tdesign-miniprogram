Component({
  data: {
    visible: true,
  },

  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log(`click on the ${trigger} area`);
    },
  },
});

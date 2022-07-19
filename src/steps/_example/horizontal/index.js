Component({
  data: {
    current: 1,
  },

  methods: {
    handleChange({ detail }) {
      console.log(detail.current);
      this.setData({
        current: detail.current,
      });
    },
  },
});

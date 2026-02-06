Component({
  data: {
    value: 3,
  },

  methods: {
    handleChange(e) {
      const { value } = e.detail;

      console.log(value);
      this.setData({
        value,
      });
    },
  },
});

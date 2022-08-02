Component({
  data: {
    value: 20,
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

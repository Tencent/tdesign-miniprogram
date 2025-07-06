Component({
  data: {
    value: ['1'],
    single: false,
    max: 2,
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },

  methods: {
    handleChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});

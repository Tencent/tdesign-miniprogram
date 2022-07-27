Component({
  properties: {
    disabled: Boolean,
    disabledColor: Array,
  },

  data: {
    mask: {
      0: '小',
      50: '中',
      100: '大',
    },
  },
  methods: {
    handleChange(e) {
      console.log(e);
    },
  },
});

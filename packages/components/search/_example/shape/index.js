Component({
  data: {
    value: '',
  },
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    },
  },
});

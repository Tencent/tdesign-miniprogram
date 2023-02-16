Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    value: '',
  },
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    },
  },
});

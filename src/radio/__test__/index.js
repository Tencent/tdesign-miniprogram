Component({
  data: {
    value: '1',
    options: ['a', 'b', { label: 'c', value: 'c' }],
  },
  methods: {
    onChange(e) {
      const { value } = e.detail;

      this.setData({ value });
    },
  },
});

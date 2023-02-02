Component({
  data: {
    value: '1',
    options: ['a', 'b', { label: 'c', value: 'c' }],
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },
  methods: {
    onChange(e) {
      const { value } = e.detail;

      this.setData({ value });
    },
  },
});

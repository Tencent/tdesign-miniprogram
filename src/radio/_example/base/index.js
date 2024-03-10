Component({
  data: {
    current: 1,
    options: [
      { value: 0, label: 'Radio' },
      { value: 1, label: 'Radio' },
      { value: 2, label: 'Radio' },
      {
        value: 3,
        label: 'Radio',
        content:
          'Description information.Description information.Description information.Description information.Description information.',
      },
    ],
  },
  methods: {
    onChange(event) {
      const { value } = event.detail;

      this.setData({ current: value });
    },
  },
});

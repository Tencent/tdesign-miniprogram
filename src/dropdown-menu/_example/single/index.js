Component({
  data: {
    product: {
      value: 'all',
      options: [
        {
          value: 'all',
          label: 'All',
        },
        {
          value: 'new',
          label: 'New',
        },
        {
          value: 'hot',
          label: 'Hot',
        },
      ],
    },
    sorter: {
      value: 'default',
      options: [
        {
          value: 'default',
          label: 'Default',
        },
        {
          value: 'price',
          label: 'Price Sorting',
        },
      ],
    },
  },
  methods: {
    onChange(e) {
      this.setData({
        'product.value': e.detail.value,
      });
    },
  },
});

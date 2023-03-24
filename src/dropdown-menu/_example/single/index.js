Component({
  data: {
    product: {
      value: 'all',
      options: [
        {
          value: 'all',
          label: '全部产品',
        },
        {
          value: 'new',
          label: '最新产品',
        },
        {
          value: 'hot',
          label: '最火产品',
        },
      ],
    },
    sorter: {
      value: 'default',
      options: [
        {
          value: 'default',
          label: '默认排序',
        },
        {
          value: 'price',
          label: '价格从高到低',
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

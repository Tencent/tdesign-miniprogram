import TComponent from '../common/component';

TComponent({
  properties: {
    value: {
      type: String,
      optionalTypes: [Number],
      value: '',
      observer: 'updateValue',
    },
    items: {
      type: Array,
      value: [],
    },
  },
  data: {
    currentValue: null,
  },
  methods: {
    onTap(event: any) {
      const { value } = event.currentTarget.dataset;
      this.updateValue(value);
      this.triggerEvent('change', value);
    },
    updateValue(value) {
      if ((this.data.items || []).some(item => item.value === value)) {
        this.setData({ currentValue: value });
      } else {
        this.setData({ currentValue: +value });
      }
    },
  },
});

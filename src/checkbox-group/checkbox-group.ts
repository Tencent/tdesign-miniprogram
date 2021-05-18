import TComponent from '../common/component';
TComponent({
  relations: {
    '../checkbox/checkbox': {
      type: 'descendant',
      linked() {
        this.updateChildren();
      },
    },
  },
  properties: {
    name: String,
    value: {
      type: Array,
      value: [],
      observer: 'updateChildren',
    },
    bordered: {
      type: Boolean,
      value: true,
    },
  },
  methods: {
    updateChildren() {
      const items = this.getRelationNodes('../checkbox/checkbox');
      const len = items.length;
      const { value } = this.data;
      if (len > 0) {
        items.forEach((item: any) => {
          item.changeActive(value.indexOf(item.data.name) > -1);
        });
      }
    },
    updateValue({ name, checked }) {
      let { value: newValue } = this.data;
      if (checked) {
        newValue = newValue.concat(name);
      } else {
        const index = newValue.findIndex((v: string) => v === name);
        newValue.splice(index, 1);
      }
      this.setData({
        value: newValue,
      });
      this.updateChildren();
      this.triggerEvent('change', { names: newValue });
    },
  },
});

import TComponent from '../common/component';
TComponent({
  relations: {
    '../radio/radio': {
      type: 'descendant',
      linked() {
        this.updateChildren();
      },
      // linkChanged() {
      //   this.updateChildren();
      // },
      // unlinked() {
      //   this.updateChildren();
      // },
    },
  },
  properties: {
    name: String,
    value: {
      type: String,
      value: '',
      observer: 'updateChildren',
    },
    bordered: {
      type: Boolean,
      value: true,
    },
  },
  methods: {
    updateChildren() {
      const items = this.getRelationNodes('../radio/radio');
      const len = items.length;
      const { value } = this.data;
      if (len > 0) {
        items.forEach((item) => {
          item.changeActive(value === item.data.name);
        });
      }
    },
    updateValue(item) {
      this.setData({
        value: item.name,
      });
      this.updateChildren();
      this.triggerEvent('change', item);
    },
  },
});

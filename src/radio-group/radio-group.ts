import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-radio-group`;

TComponent({
  data: {
    classPrefix: name,
  },
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
    name: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      optionalTypes: [Number],
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

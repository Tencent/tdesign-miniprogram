import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-checkbox-group`;
@wxComponent()
export default class CheckboxGroup extends SuperComponent {
  relations = {
    '../checkbox/checkbox': {
      type: 'descendant' as 'descendant',
      linked() {
        this.updateChildren();
      },
    },
  };
  data = {
    classPrefix: name,
  };
  properties = {
    value: {
      type: Array,
      value: [],
      observer: 'updateChildren',
    },
    // 可选择最大条数
    max: {
      type: Number,
      value: '',
    },
  };
  methods = {
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
      const { value, max } = this.data;
      let newValue = value;
      if (max && checked && newValue.length === max) {
        return;
      }
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
  };
}

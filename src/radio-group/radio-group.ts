import TComponent from '../common/component';
import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
const { prefix } = config;
const name = `${prefix}-radio-group`;

@wxComponent()
export default class PullDownRefresh extends SuperComponent {
  data = {
    classPrefix: name,
  };
  relations = {
    '../radio/radio': {
      type: 'descendant' as 'descendant',
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
  };
  properties = {
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
  };
  methods = {
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
  };
}

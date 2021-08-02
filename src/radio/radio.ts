import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
const { prefix } = config;
const name = `${prefix}-radio`;
@wxComponent()
export default class PullDownRefresh extends SuperComponent {
  externalClasses=['t-class']
  relations= {
    '../radio-group/radio-group': {
      type: 'ancestor' as  'ancestor',
    },
  }
  properties= {
    checked: {
      type: Boolean,
      value: false,
      observer(val: boolean) {
        this.data.active !== val && this.setData({ active: val });
      },
    },
    title: String,
    name: String,
    label: String,
    value: {
      type: String,
      optionalTypes: [Number],
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    bordered: {
      type: Boolean,
      value: true,
    },
  }
  data= {
    active: false,
    classPrefix: name,
    classBasePrefix: prefix,
  }
  methods= {
    onChange() {
      if (this.data.disabled) return;
      const { name, active } = this.data;
      const item = { name, checked: !active };
      const [parent] = this.getRelationNodes('../radio-group/radio-group') || [];
      if (parent) {
        parent.updateValue({ name });
      } else {
        this.triggerEvent('change', item);
        this.toggle();
      }
    },
    toggle() {
      const { active } = this.data;
      this.setData({
        active: !active,
      });
    },
    changeActive(active: boolean) {
      this.setData({
        active,
      });
    },
  }
}

import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import props from './props';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-tab-panel`;

@wxComponent()
export default class TabPanel extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  relations: RelationsOptions = {
    '../tabs/tabs': {
      type: 'ancestor',
    },
  };

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    active: false,
    hide: true,
    id: '',
  };

  setId(id) {
    this.setData({ id });
  }

  observers = {
    'label, badgeProps, disabled, icon, panel, value'() {
      this.update();
    },
  };

  getComputedName() {
    if (this.properties.value != null) {
      return `${this.properties.value}`;
    }
    return `${this.index}`;
  }

  update() {
    this.$parent?.updateTabs();
  }

  render(active: Boolean, parent: any) {
    this.setData({
      active,
      hide: !parent.data.animation && !active,
    });
  }
}

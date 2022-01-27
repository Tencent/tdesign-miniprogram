import { SuperComponent, wxComponent } from '../common/src/index';
import props from './tab-panel-props';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-tab-panel`;

@wxComponent()
export default class TabPanel extends SuperComponent {
  relations = {
    './tabs': {
      type: 'ancestor' as 'ancestor',
    },
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    active: false,
    hide: true,
  };

  observers = {
    label() {
      this.update();
    },
  };

  getComputedName() {
    if (this.properties.value) {
      return `${this.properties.value}`;
    }
    return `${this.index}`;
  }

  update() {
    if (this.parent) {
      this.parent.updateTabs();
    }
  }

  render(active: Boolean, parent: any) {
    this.setData({
      active,
      hide: !parent.animated && !active,
    });
  }
}

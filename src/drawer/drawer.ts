import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-drawer`;

@wxComponent()
export default class Drawer extends SuperComponent {
  externalClasses = [];

  properties = props;

  data = {
    classPrefix: name,
  };

  methods = {
    onVisibleChange({ detail }) {
      const { visible } = detail;
      this.setData({
        visible: visible,
      });
    },

    click(detail) {
      const sibarItem = detail.currentTarget.dataset.info;
      this.triggerEvent('sidebar-item', { sibarItem: sibarItem });
    },
  };
}

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-typography`;

@wxComponent()
export default class Paragraph extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    isExpanded: false,
  };

  methods = {
    onExpand() {
      this.setData({ isExpanded: true });
      const { ellipsis } = this.properties;
      if (typeof ellipsis === 'object') {
        this.triggerEvent('expand', { expanded: true });
      }
    },

    onCollapse() {
      this.setData({ isExpanded: false });
      const { ellipsis } = this.properties;
      if (typeof ellipsis === 'object') {
        this.triggerEvent('expand', { expanded: false });
      }
    },
  };
}

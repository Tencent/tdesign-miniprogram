import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import usingConfig from '../mixins/using-config';

const { prefix } = config;
const componentName = 'typography';

@wxComponent()
export default class Title extends SuperComponent {
  behaviors = [usingConfig({ componentName })];

  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: `${prefix}-${componentName}`,
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

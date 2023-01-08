import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './collapse-panel-props';
import type { TdCollapsePanelProps } from './type';
import { getRect } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-collapse-panel`;

export interface CollapsePanelProps extends TdCollapsePanelProps {}
@wxComponent()
export default class CollapsePanel extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-content`, `${prefix}-class-header`];

  options = {
    multipleSlots: true,
  };

  relations: RelationsOptions = {
    './collapse': {
      type: 'ancestor',
      linked(target: WechatMiniprogram.Component.TrivialInstance) {
        this.parent = target;
        const { value, defaultExpandAll, expandMutex, expandIcon, disabled } = target.properties;
        const activeValues = defaultExpandAll && !expandMutex ? [this.properties.value] : value;

        this.setData({
          ultimateExpandIcon: expandIcon || this.properties.expandIcon,
          ultimateDisabled: this.properties.disabled == null ? disabled : this.properties.disabled,
        });
        this.updateExpanded(activeValues);
      },
    },
  };

  properties = props;

  data = {
    prefix,
    expanded: false,
    classPrefix: name,
    classBasePrefix: prefix,
    ultimateExpandIcon: false,
    ultimateDisabled: false,
  };

  methods = {
    set(data: Record<string, object | any>) {
      this.setData(data);

      return new Promise((resolve) => wx.nextTick(resolve));
    },

    updateExpanded(activeValues) {
      if (!this.parent) {
        return;
      }

      const { value } = this.properties;
      const expanded = activeValues.includes(value);

      if (expanded === this.properties.expanded) return;

      this.setData({ expanded });
      this.updateStyle(expanded);
    },

    updateStyle(expanded: boolean) {
      return getRect(this, `.${name}__content`)
        .then((rect: WechatMiniprogram.BoundingClientRectCallbackResult) => rect.height)
        .then((height: number) => {
          const animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'ease-in-out',
          });

          if (expanded) {
            animation.height(height).step();
          } else {
            animation.height(0).step();
          }

          this.setData({ animation: animation.export() });
        });
    },

    onClick() {
      const { ultimateDisabled } = this.data;
      const { value } = this.properties;

      if (ultimateDisabled) return;

      this.parent.switch(value);
    },
  };
}

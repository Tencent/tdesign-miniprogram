import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';
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
    '../collapse/collapse': {
      type: 'ancestor',
      linked(target: WechatMiniprogram.Component.TrivialInstance) {
        const { value, expandIcon, disabled } = target.properties;

        this.setData({
          ultimateExpandIcon: expandIcon || this.properties.expandIcon,
          ultimateDisabled: this.properties.disabled == null ? disabled : this.properties.disabled,
        });

        this.updateExpanded(value);
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
    updateExpanded(activeValues = []) {
      if (!this.$parent || this.data.ultimateDisabled) {
        return;
      }

      const { value } = this.properties;
      const { defaultExpandAll } = this.$parent.data;
      const expanded = defaultExpandAll ? !this.data.expanded : activeValues.includes(value);

      if (expanded === this.properties.expanded) return;

      this.setData({ expanded });
      this.updateStyle(expanded);
    },

    updateStyle(expanded: boolean) {
      return getRect(this, `.${name}__content`)
        .then((rect: WechatMiniprogram.BoundingClientRectCallbackResult) => rect.height)
        .then((height: number) => {
          const animation = wx.createAnimation({
            duration: 0,
            timingFunction: 'ease-in-out',
          });

          if (expanded) {
            animation.height(height).top(0).step({ duration: 300 }).height('auto').step();
          } else {
            animation.height(height).top(1).step({ duration: 1 }).height(0).step({ duration: 300 });
          }

          this.setData({ animation: animation.export() });
        });
    },

    onClick() {
      const { ultimateDisabled } = this.data;
      const { value } = this.properties;

      if (ultimateDisabled) return;

      if (this.$parent.data.defaultExpandAll) {
        this.updateExpanded();
      } else {
        this.$parent.switch(value);
      }
    },
  };
}

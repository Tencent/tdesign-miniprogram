import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './collapse-panel-props';
import type { TdCollapsePanelProps } from './type';

const { prefix } = config;
const name = `${prefix}-collapse-panel`;

const nextTick = () => new Promise((resolve) => setTimeout(resolve, 20));

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
    contentHeight: 0,
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
        return Promise.resolve()
          .then(nextTick)
          .then(() => {
            const data: Record<string, boolean | string> = { transition: true };
            if (this.data.expanded) {
              data.contentHeight = 'auto';
            }
            this.setData(data);
          });
      }

      const { value } = this.properties;
      const expanded = activeValues.includes(value);

      if (expanded === this.properties.expanded) return;

      this.setData({ expanded });
      this.updateStyle(expanded);
    },
    getRect(selector: string, all?: boolean): Promise<WechatMiniprogram.BoundingClientRectCallbackResult> {
      return new Promise((resolve) => {
        wx.createSelectorQuery()
          .in(this as WechatMiniprogram.Component.TrivialInstance)
          [all ? 'selectAll' : 'select'](selector)
          .boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }

            if (!all && rect) {
              resolve(rect);
            }
          })
          .exec();
      });
    },
    updateStyle(expanded: boolean) {
      return this.getRect(`.${name}__content`)
        .then((rect: WechatMiniprogram.BoundingClientRectCallbackResult) => rect.height)
        .then((height: number) => {
          if (expanded) {
            return this.set({
              contentHeight: height ? `${height}px` : 'auto',
            });
          }

          return this.set({ contentHeight: `${height}px` })
            .then(nextTick)
            .then(() => this.set({ contentHeight: 0 }));
        });
    },

    onClick() {
      const { ultimateDisabled } = this.data;
      const { value } = this.properties;

      if (ultimateDisabled) return;

      this.parent.switch(value);
    },

    onTransitionEnd() {
      if (this.data.expanded) {
        this.setData({
          contentHeight: 'auto',
        });
      }
    },
  };
}

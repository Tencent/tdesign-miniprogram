import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-collapse-panel`;

const nextTick = () => new Promise((resolve) => setTimeout(resolve, 20));

@wxComponent()
export default class CountDown extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  relations: RelationsOptions = {
    './collapse': {
      type: 'ancestor',
      linked(this, target: WechatMiniprogram.Component.TrivialInstance) {
        this.parent = target;
      },
    },
  };

  properties = {
    name: null,
    title: null,
    extra: null,
    icon: String,
    label: String,
    disabled: Boolean,
    clickable: Boolean,
    border: {
      type: Boolean,
      value: true,
    },
    isLink: {
      type: Boolean,
      value: true,
    },
    labelWidth: {
      type: Number,
      value: 80,
    },
    content: null,
  };

  data = {
    contentHeight: 0,
    expanded: false,
    transition: false,
    classPrefix: name,
    classBasePrefix: prefix,
  };

  methods = {
    ready() {
      this.updateExpanded();
    },
    set(data: Record<string, object | any>) {
      this.setData(data);

      return new Promise((resolve) => wx.nextTick(resolve));
    },
    updateExpanded() {
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

      const { value, accordion } = this.parent.data;
      const { children = [] } = this.parent;
      const { name } = this.properties;

      const index = children.indexOf(this);
      const currentName = name == null ? index : name;

      const expanded = accordion
        ? value === currentName
        : (value || []).some((name: string | number) => name === currentName);

      // const stack: string[] = [];
      const stack: any = [];

      if (expanded !== this.data.expanded) {
        stack.push(this.updateStyle(expanded));
      }

      stack.push(this.set({ index, expanded }));
      return Promise.all(stack)
        .then(nextTick)
        .then(() => {
          const data: Record<string, boolean | string> = { transition: true };
          if (this.data.expanded) {
            data.contentHeight = 'auto';
          }
          this.setData(data);
        });
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
      if (this.disabled) {
        return;
      }
      const { name } = this.properties;
      const { expanded } = this.data;
      const index = this.parent.children.indexOf(this);
      const currentName = name == null ? index : name;
      this.parent.switch(currentName, !expanded);
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

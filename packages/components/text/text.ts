import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-typography`;

@wxComponent()
export default class Text extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-copy`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    className: '',
    isExpanded: false,
    isCopied: false,
  };

  lifetimes = {
    attached() {
      this.updateClass();
    },
  };

  observers = {
    'theme, disabled'() {
      this.updateClass();
    },
  };

  methods = {
    updateClass() {
      const { classPrefix } = this.data;
      const { theme, disabled } = this.properties;
      const classList = [classPrefix];

      if (disabled) {
        classList.push(`${classPrefix}--disabled`);
      } else if (theme && ['primary', 'secondary', 'success', 'warning', 'error'].includes(theme)) {
        classList.push(`${classPrefix}--${theme}`);
      }

      this.setData({ className: classList.join(' ') });
    },

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

    onCopy() {
      if (this.data.isCopied) return;

      const { copyable, content } = this.properties;
      let text = content || '';

      if (typeof copyable === 'object' && copyable.text) {
        text = copyable.text;
      }

      wx.setClipboardData({
        data: text,
        success: () => {
          this.setData({ isCopied: true });
          this.triggerEvent('copy', { text });
          setTimeout(() => {
            this.setData({ isCopied: false });
          }, 1500);
        },
      });
    },
  };
}

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { canIUseFormFieldButton } from '../common/version';
import { setIcon } from '../common/utils';
import type { TdButtonProps } from './type';

const { prefix } = config;
const name = `${prefix}-button`;

export interface ButtonProps extends TdButtonProps {}
@wxComponent()
export default class Button extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-icon`, `${prefix}-class-loading`];

  behaviors = canIUseFormFieldButton() ? ['wx://form-field-button'] : [];

  properties = props;

  data = {
    prefix,
    className: '',
    classPrefix: name,
  };

  observers = {
    'theme, size, plain, block, shape, disabled, loading'() {
      this.setClass();
    },

    icon(icon) {
      const obj = setIcon('icon', icon, '');
      this.setData({
        ...obj,
      });
    },
  };

  lifetimes = {
    attached() {
      this.setClass();
    },
  };

  methods = {
    setClass() {
      const classList = [name, `${prefix}-class`, `${name}--${this.data.theme}`, `${name}--size-${this.data.size}`];

      classList.push(`${name}--${this.data.shape}`);

      if (this.data.block) {
        classList.push(`${name}--block`);
      }
      if (this.data.disabled) {
        classList.push(`${name}--disabled`);
      }
      classList.push(`${name}--${this.data.variant}`);
      if (this.data.ghost) {
        classList.push(`${name}--ghost`);
      }
      this.setData({
        className: classList.join(' '),
      });
    },
    getuserinfo(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },
    contact(e) {
      this.triggerEvent('contact', e.detail);
    },
    getphonenumber(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
    error(e) {
      this.triggerEvent('error', e.detail);
    },
    opensetting(e) {
      this.triggerEvent('opensetting', e.detail);
    },
    launchapp(e) {
      this.triggerEvent('launchapp', e.detail);
    },
    chooseavatar(e) {
      this.triggerEvent('chooseavatar', e.detail);
    },
    handleTap(e) {
      if (this.data.disabled) return;

      this.triggerEvent('tap', e);
    },
  };
}

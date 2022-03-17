import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { canIUseFormFieldButton } from '../common/version';

const { prefix } = config;
const name = `${prefix}-button`;

@wxComponent()
export default class Button extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-icon`, `${prefix}-class-loading`];

  behaviors = canIUseFormFieldButton() ? ['wx://form-field-button'] : [];

  // 组件的对外属性
  properties = props;

  // 组件的内部数据
  data = {
    // 按钮样式列表
    prefix,
    className: '',
    classPrefix: name,
  };

  observers = {
    'theme, size, plain, block, shape, disabled, loading'() {
      this.setClass();
    },
  };

  /* 组件生命周期 */
  lifetimes = {
    // 组件实例被创建
    // created() {},
    // 组件实例进入页面节点树
    attached() {
      this.setClass();
    },
    // 页面组件初始化完成
    // ready() { },
    // 组件实例被移动到节点树另一个位置
    // moved() {},
    // 组件实例被从页面节点树移除
    // detached() { },
  };

  /* Methods */
  methods = {
    setClass() {
      const classList = [
        name,
        `${prefix}-class`,
        `${name}--${this.data.theme || 'default'}`,
        `${name}--size-${this.data.size.slice(0, 1)}`,
      ];

      classList.push(`${name}--${this.data.shape}`);

      if (this.data.block) {
        classList.push(`${prefix}-is-block`);
      }
      if (this.data.disabled) {
        classList.push(`${prefix}-is-disabled`);
      }
      // if (this.data.loading) {
      //   classList.push(`${prefix}-is-loading`);
      // }
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
    handleTap(e) {
      if (this.data.disabled) return;

      this.triggerEvent('tap', e.detail);
    },
  };
}

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-search`;

@wxComponent()
export default class Search extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-input`,
    `${prefix}-class-cancel`,
    `${prefix}-class-left`,
    `${prefix}-class-right`,
  ];

  options = {
    multipleSlots: true,
  };

  properties = props;

  observers = {
    keyword(this: Search, nextValue: string) {
      this.setData({ 'localValue.keyword': nextValue });
    },
    focus(this: Search, nextValue: boolean) {
      this.setData({ 'localValue.focus': nextValue });
    },
    center(this: Search, nextValue: boolean) {
      if (!nextValue) {
        this.ignoreFocusEvtAfterBlurInCenterMode = false;
      }
    },
  };

  data = {
    classPrefix: name,
    prefix,
    localValue: {
      keyword: '',
      focus: false,
    },
  };

  /**
   * 场景：
   * 1. center模式启用
   * 2. 在点击激活input focus之后快速点击别的地方blur掉input
   * 3. 如果没有这个变量拦截，onFocus会被短时间后被调用，猜测是input的onFocus触发是非同步的
   */
  ignoreFocusEvtAfterBlurInCenterMode = false;

  attached() {
    this.setData({
      'localValue.keyword': this.properties.keyword,
      'localValue.focus': this.properties.focus,
    });
  }

  onInput(e) {
    const { value } = e.detail;
    this.setData({ 'localValue.keyword': value });
    this.triggerEvent('change', { value });
  }

  onFocus(e) {
    const { value } = e.detail;
    if (this.ignoreFocusEvtAfterBlurInCenterMode) {
      this.ignoreFocusEvtAfterBlurInCenterMode = false;
      return;
    }
    this.setData({ 'localValue.focus': true });
    this.triggerEvent('focus', { value });
  }

  onBlur(e) {
    const { value } = e.detail;
    this.setData({ 'localValue.focus': false });
    this.triggerEvent('blur', { value });

    if (this.properties.center) {
      this.ignoreFocusEvtAfterBlurInCenterMode = true;
    }
  }

  onClear() {
    this.setData({ 'localValue.keyword': '' });
    this.triggerEvent('clear', { value: '' });
  }

  onConfirm(e) {
    const value = e.detail;
    this.triggerEvent('submit', value);
  }

  onCancel() {
    this.triggerEvent('cancel');
  }

  tapWhenCenterActiveHandle(e) {
    if (this.properties.center) {
      this.ignoreFocusEvtAfterBlurInCenterMode = false;
      this.onFocus(e);
    }
  }
}

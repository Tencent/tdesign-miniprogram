import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-search`;

@wxComponent()
export default class Search extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-input-container`,
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
    focus(this: Search, nextValue: boolean) {
      this.setData({ 'localValue.focus': nextValue });
    },
  };

  data = {
    classPrefix: name,
    prefix,
    localValue: {
      focus: false,
    },
  };

  onInput(e) {
    const { value } = e.detail;

    this.setData({ value });
    this.triggerEvent('change', { value });
  }

  onFocus(e) {
    const { value } = e.detail;

    this.setData({ 'localValue.focus': true });
    this.triggerEvent('focus', { value });
  }

  onBlur(e) {
    const { value } = e.detail;

    this.setData({ 'localValue.focus': false });
    this.triggerEvent('blur', { value });
  }

  handleClear() {
    this.setData({ value: '' });
    this.triggerEvent('clear', { value: '' });
  }

  onConfirm(e) {
    const { value } = e.detail;
    this.triggerEvent('submit', { value });
  }

  onActionClick() {
    this.triggerEvent('cancel');
    this.triggerEvent('action-click');
  }
}

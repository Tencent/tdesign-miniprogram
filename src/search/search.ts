import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-search`;

@wxComponent()
export default class Search extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-input-container`,
    `${prefix}-class-input`,
    `${prefix}-class-action`,
    `${prefix}-class-left`,
    `${prefix}-class-clear`,
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
    let realValue = '';
    const { value } = e.detail;
    const { maxcharacter } = this.properties;

    if (maxcharacter && typeof maxcharacter === 'number') {
      const { characters } = getCharacterLength('maxcharacter', value, Number(maxcharacter));

      realValue = characters;
    }

    this.setData({ value: realValue || value });
    this.triggerEvent('change', { value: realValue || value });
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
    this.triggerEvent('action-click');
  }
}

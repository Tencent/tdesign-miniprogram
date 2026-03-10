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
    resultList(val) {
      const { isSelected } = this.data;
      if (val.length) {
        if (isSelected) {
          // 已选择
          this.setData({
            isShowResultList: false,
            isSelected: false,
          });
        } else {
          this.setData({
            isShowResultList: true,
          });
        }
      } else {
        this.setData({
          isShowResultList: false,
        });
      }
    },
    'clearTrigger, clearable, disabled, readonly'() {
      this.updateClearIconVisible();
    },
  };

  data = {
    classPrefix: name,
    prefix,
    isShowResultList: false,
    isSelected: false,
    showClearIcon: true,
  };

  updateClearIconVisible(value: boolean = false) {
    const { clearTrigger, disabled, readonly } = this.properties;
    if (disabled || readonly) {
      this.setData({ showClearIcon: false });
      return;
    }
    this.setData({ showClearIcon: value || String(clearTrigger) === 'always' });
  }

  onInput(e) {
    let { value } = e.detail;
    const { maxcharacter } = this.properties;
    if (maxcharacter && typeof maxcharacter === 'number' && maxcharacter > 0) {
      const { characters } = getCharacterLength('maxcharacter', value, maxcharacter);

      value = characters;
    }

    this.setData({
      value,
    });

    this.triggerEvent('change', { value, trigger: 'input-change' });
  }

  onFocus(e) {
    const { value } = e.detail;
    this.updateClearIconVisible(true);
    this.triggerEvent('focus', { value });
  }

  onBlur(e) {
    const { value } = e.detail;
    this.updateClearIconVisible();
    this.triggerEvent('blur', { value });
  }

  handleClear() {
    this.setData({ value: '' });
    this.triggerEvent('clear', { value: '' });
    this.triggerEvent('change', { value: '', trigger: 'clear' });
  }

  onConfirm(e) {
    const { value } = e.detail;
    this.triggerEvent('submit', { value });
  }

  onActionClick() {
    this.triggerEvent('action-click');
  }

  onSelectOption(e) {
    const { index } = e.currentTarget.dataset;
    const item = this.properties.resultList[index];
    this.setData({
      value: item,
      isSelected: true,
    });

    this.triggerEvent('change', { value: item, trigger: 'option-click' });
  }
}

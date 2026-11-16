import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength, calcIcon } from '../common/utils';
import { isDef } from '../common/validator';

const { prefix } = config;
const name = `${prefix}-input`;

@wxComponent()
export default class Input extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-prefix-icon`,
    `${prefix}-class-label`,
    `${prefix}-class-input`,
    `${prefix}-class-clearable`,
    `${prefix}-class-suffix`,
    `${prefix}-class-suffix-icon`,
    `${prefix}-class-tips`,
  ];

  behaviors = ['wx://form-field'];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    classBasePrefix: prefix,
    showClearIcon: true,
  };

  lifetimes = {
    ready() {
      const { value, defaultValue } = this.properties;
      this.updateValue(value ?? defaultValue ?? '');
    },
  };

  observers = {
    // 外部（父组件）更新 value 属性时同步到内部展示；
    // 输入过程中的内部值变化不经过这里，避免 IME 组合态被打断。
    value(v) {
      if (v !== this._internalInputValue) {
        this.updateValue(v);
      }
    },

    prefixIcon(v) {
      this.setData({
        _prefixIcon: calcIcon(v),
      });
    },

    suffixIcon(v) {
      this.setData({
        _suffixIcon: calcIcon(v),
      });
    },

    clearable(v) {
      this.setData({
        _clearIcon: calcIcon(v, 'close-circle-filled'),
      });
    },

    'clearTrigger, clearable, disabled, readonly'() {
      this.updateClearIconVisible();
    },
  };

  methods = {
    // 计算指定值的 count（遵循 maxcharacter/maxlength 语义），
    // 用于输入过程中只更新计数而不回写 value 的场景。
    calculateCount(value) {
      const { allowInputOverMax, maxcharacter, maxlength } = this.properties;
      if (!allowInputOverMax && maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        return getCharacterLength('maxcharacter', value, maxcharacter).length;
      }
      if (!allowInputOverMax && maxlength && maxlength > 0 && !Number.isNaN(maxlength)) {
        return getCharacterLength('maxlength', value, maxlength).length;
      }
      return isDef(value) ? String(value).length : 0;
    },

    updateValue(value) {
      const { allowInputOverMax, maxcharacter, maxlength } = this.properties;
      // 输入过程中（如 Mac 端韩语等 IME 组合输入）不应把相同内容
      // 回写给原生 input，否则原生控件会重置 IME 组合态导致内容闪烁。
      // 因此 value 未发生变化时只更新 count，跳过对 value 的 setData。
      if (value === this.data.value) {
        // 相同内容时仅按限长规则同步计数，不回写 value（IME 组合输入保护，
        // issue #4606）。此处必须用 calculateCount 而非字符串长度，
        // 否则 CJK 内容在 maxcharacter 语义下计数错误。
        this.setData({
          count: this.calculateCount(value),
        });
        return;
      }
      if (!allowInputOverMax && maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength('maxcharacter', value, maxcharacter);
        this.setData({
          value: characters,
          count: length,
        });
      } else if (!allowInputOverMax && maxlength && maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, maxlength);
        this.setData({
          value: characters,
          count: length,
        });
      } else {
        this.setData({
          value,
          count: isDef(value) ? String(value).length : 0,
        });
      }
    },

    updateClearIconVisible(value: boolean = false) {
      const { clearTrigger, disabled, readonly } = this.properties;
      if (disabled || readonly) {
        this.setData({ showClearIcon: false });
        return;
      }
      this.setData({ showClearIcon: value || clearTrigger === 'always' });
    },

    onInput(e) {
      const { value, cursor, keyCode } = e.detail;
      const { allowInputOverMax, maxcharacter, maxlength } = this.properties;
      // IME 组合输入（如 Mac 端韩语）过程中，把中间态回写给原生 input
      // 会打断输入法组合态，造成内容闪烁（issue #4606）。
      // 原生控件本就显示用户输入的中间态，这里仅在字数限制会截断内容时
      // 才回写（受控纠偏），否则只更新数据不干预原生控件的显示。
      const willTruncate =
        !allowInputOverMax &&
        ((maxcharacter > 0 &&
          !Number.isNaN(maxcharacter) &&
          getCharacterLength('maxcharacter', value, maxcharacter).characters !== value) ||
          (maxlength > 0 &&
            !Number.isNaN(maxlength) &&
            getCharacterLength('maxlength', value, maxlength).characters !== value));
      if (willTruncate) {
        this.updateValue(value);
        // 截断时对外抛出截断后的值，与既有受控语义一致
        this.triggerEvent('change', { value: this.data.value, cursor, keyCode });
      } else {
        // 记录内部值供 change 事件与失焦同步使用，但不回写 value 到
        // 原生控件：原生 input 已显示相同内容，回写会在 IME 组合输入
        // 时打断组合态（issue #4606）。count 单独按限长规则更新。
        this._internalInputValue = value;
        const count = this.calculateCount(value);
        this.setData({ count });
        this.triggerEvent('change', { value, cursor, keyCode });
      }
    },

    onChange(e) {
      if (this.properties.type !== 'nickname') return;
      const { value } = e.detail;
      this.updateValue(value);
      this.triggerEvent('change', { value: this.data.value });
    },

    onFocus(e) {
      this.updateClearIconVisible(true);
      this.triggerEvent('focus', e.detail);
    },

    onBlur(e) {
      this.updateClearIconVisible();

      // 失焦时处理 format
      if (typeof this.properties.format === 'function') {
        const v = this.properties.format(e.detail.value);
        this.updateValue(v);
        this.triggerEvent('blur', { value: this.data.value, cursor: this.data.count });
        return;
      }
      this.triggerEvent('blur', e.detail);
    },

    onConfirm(e) {
      this.triggerEvent('enter', e.detail);
    },

    onSuffixClick() {
      this.triggerEvent('click', { trigger: 'suffix' });
    },

    onSuffixIconClick() {
      this.triggerEvent('click', { trigger: 'suffix-icon' });
    },

    clearInput(e) {
      this.triggerEvent('clear', e.detail);
      this.setData({ value: '' });
    },

    onKeyboardHeightChange(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },

    onNickNameReview(e) {
      this.triggerEvent('nicknamereview', e.detail);
    },
  };
}

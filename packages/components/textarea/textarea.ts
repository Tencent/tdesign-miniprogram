import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-textarea`;

@wxComponent()
export default class Textarea extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  behaviors = ['wx://form-field'];

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-textarea`,
    `${prefix}-class-label`,
    `${prefix}-class-indicator`,
  ];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    count: 0,
  };

  observers = {
    value(val) {
      this.updateCount(val ?? this.properties.defaultValue);
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
  };

  lifetimes = {
    ready() {
      const { value, defaultValue } = this.properties;
      this.updateValue(value ?? defaultValue ?? '');
    },
  };

  methods = {
    updateCount(val) {
      const { maxcharacter, maxlength } = this.properties;
      const { count } = this.calculateValue(val, maxcharacter, maxlength);
      this.setData({
        count,
      });
    },

    updateValue(val) {
      const { maxcharacter, maxlength } = this.properties;
      const { value, count } = this.calculateValue(val, maxcharacter, maxlength);
      // 相同内容时仅同步计数，不回写 value（IME 组合输入保护，issue #4606）
      if (value === this.data.value) {
        this.setData({ count });
        return;
      }
      this.setData({
        value,
        count,
      });
    },

    calculateValue(value, maxcharacter, maxlength) {
      const { allowInputOverMax } = this.properties;
      if (maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength(
          'maxcharacter',
          value,
          allowInputOverMax ? Infinity : maxcharacter,
        );
        return {
          value: characters,
          count: length,
        };
      }
      if (maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, allowInputOverMax ? Infinity : maxlength);
        return {
          value: characters,
          count: length,
        };
      }
      return {
        value,
        count: value ? String(value).length : 0,
      };
    },

    onInput(event) {
      const { value, cursor } = event.detail;
      const { maxcharacter, maxlength } = this.properties;
      // IME 组合输入（如 Mac 端韩语）过程中，把中间态回写给原生 textarea
      // 会打断输入法组合态，造成内容闪烁（issue #4606）。原生控件已显示
      // 相同内容，仅在限长会截断内容时才回写（受控纠偏）。
      // calculateValue 内部已读取 allowInputOverMax：允许超长时 characters 恒等于原文，
      // 自然不会触发回写；此处直接对比截断结果即可。
      const { value: limitedValue } = this.calculateValue(value, maxcharacter, maxlength);
      const willTruncate = limitedValue !== value;
      if (willTruncate) {
        this.updateValue(value);
        this.triggerEvent('change', { value: this.data.value, cursor });
      } else {
        this._internalInputValue = value;
        const { count } = this.calculateValue(value, maxcharacter, maxlength);
        this.setData({ count });
        this.triggerEvent('change', { value, cursor });
      }
    },
    onFocus(event) {
      this.triggerEvent('focus', {
        ...event.detail,
      });
    },
    onBlur(event) {
      this.triggerEvent('blur', {
        ...event.detail,
      });
    },
    onConfirm(event) {
      this.triggerEvent('enter', {
        ...event.detail,
      });
    },
    onLineChange(event) {
      this.triggerEvent('line-change', {
        ...event.detail,
      });
    },
    onKeyboardHeightChange(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },
  };
}

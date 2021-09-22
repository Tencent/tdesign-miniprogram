import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-textarea`;

@wxComponent()
export default class Input extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = ['t-class', 't-class-input', 't-class-placeholder'];

  properties = {
    /** 键盘弹起时，是否自动上推页面 */
    adjustPosition: {
      type: Boolean,
      value: true,
    },
    /** 点击键盘右下角按钮时是否保持键盘不收起点 */
    confirmHold: {
      type: Boolean,
      value: false,
    },
    /** 设置键盘右下角按钮的文字，仅在 type='text'时生效 */
    confirmType: {
      type: String,
      value: 'done',
    },
    /** 是否禁用输入框 */
    disabled: {
      type: Boolean,
      value: false,
    },
    /** 是否获取焦点 */
    focus: {
      type: Boolean,
      value: false,
    },
    /** 是否自动获取焦点 */
    autofocus: {
      type: Boolean,
      value: false,
    },
    /** 用户最多可以输入的文本长度 */
    maxlength: {
      type: Number,
      value: 140,
    },
    /** 名称 */
    name: {
      type: String,
      value: '',
    },
    /** 占位符 */
    placeholder: {
      type: String,
      value: '',
    },
    /** 输入框的值 */
    value: {
      type: String,
      value: '',
    },
    autoHeight: {
      type: Boolean,
      value: false,
    },
  };

  data = {
    inputValue: '',
    classPrefix: name,
  };

  /* 组件生命周期 */
  lifetimes = {
    ready() {
      this.setData({ inputValue: this.data.value });
    },
  };

  methods = {
    onInput(event) {
      const { value } = event.detail;
      this.setData({ inputValue: value });

      this.triggerEvent('change', {
        ...event.detail,
      });
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
      this.triggerEvent('lineChange', {
        ...event.detail,
      });
    },
  };
}

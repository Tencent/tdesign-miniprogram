import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-input`;

type TSizeValue = 'medium' | 'small';
type TTypeValue = 'text' | 'number' | 'idcard' | 'digit' | 'safe-password';

@wxComponent()
export default class Input extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = ['wrapper-class', 'input-class', 'placeholder-class'];

  properties = {
    label: {
      type: String,
      value: '',
    }, // 标签
    value: {
      type: String,
      optionalTypes: [Number],
      value: '',
    }, // input的值
    password: {
      type: Boolean,
      value: false,
    }, // 是否密码类型
    error: {
      type: Boolean,
      value: false,
    },
    errorMessage: {
      type: String,
      value: '',
    },
    suffixIcon: {
      type: String,
      value: '',
    },
    suffix: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'text' as TTypeValue,
    },
    maxlength: {
      type: Number,
      value: 500,
    },
    clearable: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    placeholder: {
      type: String,
    },
    size: {
      type: String,
      value: 'small' as TSizeValue,
    },
    required: {
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
    // 组件实例被创建
    // created() {},
    // 组件实例进入页面节点树
    // attached() {},
    // 页面组件初始化完成
    ready() {
      this.setData({ inputValue: this.data.value });
    },
    // 组件实例被移动到节点树另一个位置
    // moved() {},
    // 组件实例被从页面节点树移除
    // detached() { },
  };

  methods = {
    onInput(event) {
      const { value } = event.detail;
      this.setData({ inputValue: value });

      this.triggerEvent('input', {
        ...event.detail,
      });
    },
    clearInput(event) {
      this.setData({ inputValue: '' });
      this.triggerEvent('clear', {
        ...event.detail,
      });
    },
  };
}

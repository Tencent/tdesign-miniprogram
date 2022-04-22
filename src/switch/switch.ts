import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-switch`;
@wxComponent()
export default class Switch extends SuperComponent {
  externalClasses = ['t-class', 't-class-label', 't-class-body', 't-class-dot'];

  behaviors = ['wx://form-field'];

  properties = props;

  // 组件的内部数据
  data = {
    classPrefix: name,
    isActive: false,
    bodyStyle: '',
  };

  // lifetimes = {
  //   attached() {
  //     const { value, customValue } = this.data;
  //     const [activeValue] = customValue;

  //     this.setData({
  //       isActive: value === activeValue,
  //     });

  //   },
  // };
  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    value(val) {
      const [activeValue] = this.data.customValue;

      this.setData({
        isActive: val === activeValue,
      });
      this.handleColorChange();
    },
  };

  methods = {
    switchChange() {
      const { disabled, value, customValue } = this.data;
      const [activeValue, inactiveValue] = customValue;
      if (disabled) return;

      this._trigger('change', {
        value: value === activeValue ? inactiveValue : activeValue,
      });
    },
    handleColorChange() {
      const { disabled, colors = [] } = this.data;
      const [activedColor = '#0052d9', inactivedColor = 'rgba(0, 0, 0, .26)'] = colors;
      if (!disabled) {
        this.setData({
          bodyStyle: `background-color: ${this.data.isActive ? activedColor : inactivedColor}`,
        });
      }
    },
    onTapBackground() {
      this.switchChange();
    },
    onTapDot() {
      this.switchChange();
    },
  };
}

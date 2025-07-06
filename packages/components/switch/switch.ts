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

  data = {
    prefix,
    classPrefix: name,
    checked: false,
  };

  // lifetimes = {
  //   attached() {
  //     const { value, customValue } = this.data;
  //     const [activeValue] = customValue;

  //     this.setData({
  //       checked: value === activeValue,
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
        checked: val === activeValue,
      });
    },
  };

  methods = {
    handleSwitch() {
      const { loading, disabled, value, customValue } = this.data;
      const [activeValue, inactiveValue] = customValue;
      if (loading || disabled) return;

      this._trigger('change', {
        value: value === activeValue ? inactiveValue : activeValue,
      });
    },
  };
}

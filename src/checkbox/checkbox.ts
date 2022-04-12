import { SuperComponent, wxComponent, ComponentsOptionsType } from '../common/src/index';
import config from '../common/config';
import Props from './props';

const { prefix } = config;
const classPrefix = `${prefix}-checkbox`;
@wxComponent()
export default class CheckBox extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-icon`,
    `${prefix}-class-content`,
    `${prefix}-class-border`,
  ];

  behaviors = ['wx://form-field'];

  relations = {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor' as 'ancestor',
    },
  };

  options: ComponentsOptionsType = {
    multipleSlots: true,
    styleIsolation: 'shared',
  };

  properties = {
    ...Props,
    theme: {
      type: String,
      value: 'default',
    },
    borderless: {
      type: Boolean,
      value: false,
    },
  };

  // 组件的内部数据
  data = {
    classPrefix,
    prefix,
    active: false,
    halfChecked: false,
    optionLinked: false,
    canCancel: false,
  };

  lifetimes = {
    attached() {
      this.initStatus();
    },
  };

  observers = {
    checked: function (isChecked) {
      this.initStatus();
      this.setData({
        active: isChecked,
      });
    },
  };

  controlledProps = [
    {
      key: 'checked',
      event: 'change',
    },
  ];

  /* Methods */
  methods = {
    onChange(e) {
      const { disabled, readonly } = this.data;
      if (disabled || readonly) return;
      const { target } = e.currentTarget.dataset;
      const { contentDisabled } = this.data;
      if (target === 'text' && contentDisabled) {
        return;
      }
      const { value, active, checkAll, optionLinked, canCancel } = this.data;
      const item = { name: value, checked: !active, checkAll };
      const [parent] = this.getRelationNodes('../checkbox-group/checkbox-group');
      if (parent) {
        if (checkAll || optionLinked) {
          parent.handleCheckAll({
            type: 'slot',
            checked: !active || (this.data.halfChecked && !canCancel),
            option: !checkAll,
            name: value,
          });
        } else {
          parent.updateValue(item);
        }
      } else if (checkAll || optionLinked) {
        this.triggerEvent('toggleAll', {
          type: 'not-slot',
          checked: !active || (this.data.halfChecked && !canCancel),
          option: !checkAll,
          name: value,
        });
      } else {
        this._trigger('change', { checked: !active });
        // this.triggerEvent('change', !active);
        // this.toggle();
      }
    },
    initStatus() {
      const { optionLinked, indeterminate } = this.data;
      if (!optionLinked) {
        this.setData({
          halfChecked: indeterminate,
        });
      }
    },
    setCancel(cancel: boolean) {
      this.setData({
        canCancel: cancel,
      });
    },
    setDisabled(disabled: Boolean) {
      this.setData({
        disabled: this.data.disabled || disabled,
      });
    },

    // 半选
    changeCheckAllHalfStatus(active: boolean) {
      this.setData({
        halfChecked: active,
      });
    },
    // group option
    setOptionLinked(linked: Boolean) {
      this.setData({
        optionLinked: linked,
      });
    },
  };
}

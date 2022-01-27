import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from './props';

const { prefix } = config;
const classPrefix = `${prefix}-checkbox`;
@wxComponent()
export default class CheckBox extends SuperComponent {
  externalClasses = ['t-class', 't-class-label', 't-class-icon', 't-class-content'];

  relations = {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor' as 'ancestor',
    },
  };

  options = {
    multipleSlots: true,
  };

  properties = Props;

  // 组件的内部数据
  data = {
    classPrefix,
    classBasePrefix: prefix,
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
    checked: function () {
      this.initStatus();
    },
  };

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
        this.triggerEvent('change', !active);
        this.toggle();
      }
    },
    initStatus() {
      if (!this.data.optionLinked) {
        if (this.data.indeterminate) {
          this.setData({
            active: true,
            halfChecked: true,
          });
        } else {
          this.setData({
            active: this.data.checked,
            halfChecked: this.data.indeterminate,
          });
        }
      }
    },
    toggle() {
      const { active } = this.data;
      this.setData({
        active: !active,
      });
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
    changeActive(active: boolean) {
      this.setData({
        active,
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

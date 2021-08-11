import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from './props';
const { prefix } = config;
const currentComponent = `${prefix}-checkbox`;
@wxComponent()
export default class Checkbox extends SuperComponent {
  externalClasses = ['t-class', 't-class-label', 't-class-icon', 't-class-content'];
  relations = {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor' as 'ancestor',
    },
  };
  options = {
    multipleSlots: true,
  };
  properties = {
    ...Props,
    checkAll: Boolean,
  };
  // 组件的内部数据
  data = {
    classPrefix: currentComponent,
    classBasePrefix: prefix,
    active: false,
    halfChecked: false,
    optionLinked: false,
  };
  lifetimes = {
    attached() {
      this.setData({
        active: this.data.checked,
        halfChecked: this.data.indeterminate,
      });
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
      const { value, active, checkAll, optionLinked } = this.data;
      const item = { name: value, checked: !active };
      const [parent] = this.getRelationNodes('../checkbox-group/checkbox-group');
      if (parent) {
        parent.updateValue(item);
      } else {
        if (checkAll || optionLinked) {
          this.triggerEvent('toggleAll', { checked: !active, option: !checkAll, name: value });
        } else {
          this.triggerEvent('change', item);
          this.toggle();
        }
      }
    },
    toggle() {
      const { active } = this.data;
      this.setData({
        active: !active,
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

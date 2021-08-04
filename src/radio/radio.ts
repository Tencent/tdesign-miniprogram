import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
const { prefix } = config;
const name = `${prefix}-radio`;
@wxComponent()
export default class PullDownRefresh extends SuperComponent {
  externalClasses = ['t-class', 't-label', 't-icon', 't-description'];
  relations = {
    '../radio-group/radio-group': {
      type: 'ancestor' as 'ancestor',
    },
  };
  options = {
    multipleSlots: true,
  };
  properties = {
    checked: {
      type: Boolean,
      value: false,
      observer(val: boolean) {
        this.data.active !== val && this.setData({ active: val });
      },
    },
    title: String,
    name: String,
    label: String,
    value: {
      type: String,
      optionalTypes: [Number],
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false,
    },
    // 文本区域不能点击
    contentDisabled: {
      type: Boolean,
      value: false,
    },
    // 标题限制行数
    limitTitleRow: {
      type: Number,
      value: 1,
    },
    // 内容限制行数
    limitContentRow: {
      type: Number,
      value: 2,
    },
    // 选中图标颜色
    checkedColor: {
      type: String,
      value: '#0052d9',
    },
    // 使用自定义图标
    useIconSlot: {
      type: Boolean,
      value: false,
    },
    labelPosition: {
      type: String,
      value: 'right',
    },
  };
  data = {
    active: false,
    classPrefix: name,
    classBasePrefix: prefix,
  };
  methods = {
    onChange(e) {
      if (this.data.disabled) return;
      const { target } = e.currentTarget.dataset;
      const { contentDisabled } = this.data;
      if (target === 'text' && contentDisabled) {
        return;
      }
      const { name, active } = this.data;
      const item = { name, checked: !active };
      const [parent] = this.getRelationNodes('../radio-group/radio-group') || [];
      if (parent) {
        parent.updateValue({ name });
      } else {
        this.triggerEvent('change', item);
        this.toggle();
      }
    },
    toggle() {
      const { active } = this.data;
      this.setData({
        active: !active,
      });
    },
    changeActive(active: boolean) {
      this.setData({
        active,
      });
    },
  };
}

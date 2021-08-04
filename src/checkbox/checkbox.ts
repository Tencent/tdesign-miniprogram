import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const currentComponent = `${prefix}-checkbox`;
@wxComponent()
export default class Checkbox extends SuperComponent {
  externalClasses = ['t-class', 't-label', 't-icon', 't-description'];
  relations = {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor' as 'ancestor',
    },
  };
  options = {
    multipleSlots: true,
  };
  // 组件的对外属性
  properties = {
    // 标题
    title: String,
    // 选项值
    name: String,
    // 当前选中的值
    // value: {
    //   type: String,
    //   optionalTypes: [Number],
    //   value: '',
    // },
    value: {
      type: Boolean,
      value: false,
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
  // 组件的内部数据
  data = {
    classPrefix: currentComponent,
    classBasePrefix: prefix,
    active: false,
  };

  /* Methods */
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
      const [parent] = this.getRelationNodes('../checkbox-group/checkbox-group');
      if (parent) {
        parent.updateValue(item);
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

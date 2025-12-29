import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';

const { prefix } = config;
const name = `${prefix}-picker`;

const DEFAULT_KEYS = { value: 'value', label: 'label', icon: 'icon' };

@wxComponent()
export default class Picker extends SuperComponent {
  behaviors = [useCustomNavbar];

  properties = props;

  externalClasses = [`${prefix}-class`, `${prefix}-class-confirm`, `${prefix}-class-cancel`, `${prefix}-class-title`];

  options = {
    multipleSlots: true,
  };

  relations: RelationsOptions = {
    '../picker-item/picker-item': {
      type: 'child',
      linked(this: Picker) {
        this.updateChildren();
      },
    },
  };

  observers = {
    'value, visible'(value, visible) {
      const { usePopup } = this.properties;
      // 平铺模式（usePopup=false）：始终响应 value 变化
      // 弹窗模式（usePopup=true）：只在打开弹窗时更新，关闭时不更新避免回弹
      if (!usePopup || visible) {
        this.updateChildren();
        this.updateIndicatorPosition();
      }
    },
    'itemHeight, visibleItemCount'() {
      this.updateIndicatorPosition();
    },
  };

  data = {
    prefix,
    classPrefix: name,
    defaultPopUpProps: {},
    defaultPopUpzIndex: 11500,
    indicatorTop: 72, // 默认indicator位置，会动态计算
  };

  methods = {
    updateChildren() {
      const { value, defaultValue, itemHeight, visibleItemCount, keys } = this.properties;

      this.$children.forEach((child, index) => {
        child.setData({
          value: value?.[index] ?? defaultValue?.[index] ?? '',
          columnIndex: index,
          itemHeight,
          visibleItemCount,
          keys: { ...DEFAULT_KEYS, ...(keys || {}) },
        });
        child.update();
      });
    },

    getSelectedValue() {
      const value = this.$children.map((item) => item._selectedValue);
      const label = this.$children.map((item) => item._selectedLabel);
      return [value, label];
    },

    getColumnIndexes() {
      const columns = this.$children.map((pickerColumn, columnIndex) => {
        return {
          column: columnIndex,
          index: pickerColumn._selectedIndex,
        };
      });
      return columns;
    },

    onConfirm() {
      // 获取当前实际显示的选中值
      const value = [];
      const label = [];
      const columns = [];

      this.$children.forEach((child, columnIndex) => {
        const current = child.getCurrentSelected();

        value.push(current.value);
        label.push(current.label);
        columns.push({
          column: columnIndex,
          index: current.index,
        });
      });

      this.close('confirm-btn');
      this.triggerEvent('confirm', { value, label, columns });

      if (JSON.stringify(this.data.value) === JSON.stringify(value)) return;
      this.triggerEvent('change', { value, label, columns });
    },

    triggerColumnChange({ column, index }) {
      const [value, label] = this.getSelectedValue();
      this.triggerEvent('pick', { value, label, column, index });
    },

    onCancel() {
      this.close('cancel-btn');
      this.triggerEvent('cancel');
    },

    onPopupChange(e) {
      const { visible } = e.detail;

      this.close('overlay');
      this.triggerEvent('visible-change', { visible });
    },

    close(trigger) {
      if (this.data.autoClose) {
        this.setData({ visible: false });
      }
      this.triggerEvent('close', { trigger });
    },

    updateIndicatorPosition() {
      const { itemHeight, visibleItemCount } = this.properties;
      const indicatorTop = ((visibleItemCount - 1) / 2) * itemHeight;
      this.setData({ indicatorTop });
    },
  };

  ready() {
    this.$children.map((column, index) => (column.columnIndex = index));
    this.updateIndicatorPosition();
  }
}

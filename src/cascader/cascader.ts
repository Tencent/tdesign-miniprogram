import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdCascaderProps } from './type';

const { prefix } = config;
const name = `${prefix}-cascader`;

export interface CascaderProps extends TdCascaderProps {}

type OptionsType = TdCascaderProps['options']['value'];

const defaultOptionLabel = '选择选项';
@wxComponent()
export default class Cascader extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    prefix,
    name,
    stepIndex: 0,
    selectedIndexes: [],
    selectedValue: [],
    defaultOptionLabel,
    steps: [defaultOptionLabel],
  };

  observers = {
    visible(v) {
      if (v) {
        const $tabs = this.selectComponent('#tabs');

        $tabs?.setTrack();
      }
    },
    value() {
      this.initWithValue();
    },
    options() {
      this.setData({
        items: [this.data.options],
      });
    },
    selectedIndexes() {
      const { options, selectedIndexes, keys } = this.data;
      const selectedValue = [];
      const steps = [];
      const items = [options];

      for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
        const index = selectedIndexes[i];
        const next = items[i][index];

        selectedValue.push(next[keys?.value ?? 'value']);
        steps.push(next[keys?.label ?? 'label']);

        if (next[keys?.children ?? 'children']) {
          items.push(next[keys?.children ?? 'children']);
        }
      }

      if (steps.length < items.length) {
        steps.push(defaultOptionLabel);
      }

      this.setData({
        steps,
        items,
        selectedValue,
        stepIndex: items.length - 1,
      });
    },
  };

  lifetimes = {
    ready() {
      this.initWithValue();
    },
  };

  methods = {
    initWithValue() {
      if (this.data.value != null) {
        const selectedIndexes = this.getIndexesByValue(this.data.options, this.data.value);

        this.setData({ selectedIndexes });
      }
    },
    getIndexesByValue(options: OptionsType, value) {
      const { keys } = this.data;

      for (let i = 0, size = options.length; i < size; i += 1) {
        const opt = options[i];
        if (opt[keys?.value ?? 'value'] === value) {
          return [i];
        }
        if (opt[keys?.children ?? 'children']) {
          const res = this.getIndexesByValue(opt[keys?.children ?? 'children'], value);
          if (res) {
            return [i, ...res];
          }
        }
      }
    },
    hide() {
      this.setData({ visible: false });
    },
    onStepClick(e) {
      const { index } = e.currentTarget.dataset;

      this.setData({ stepIndex: index });
    },
    onTabChange(e) {
      const { value } = e.detail;

      this.setData({
        stepIndex: value,
      });
    },
    handleSelect(e) {
      const { level } = e.target.dataset;
      const { value } = e.detail;
      const { selectedIndexes, items, keys } = this.data;
      const index = items[level].findIndex((item) => item[keys?.value ?? 'value'] === value);
      const item = items[level][index];

      if (item.disabled) {
        return;
      }
      selectedIndexes[level] = index;
      selectedIndexes.length = level + 1;

      this.triggerEvent('pick', item[keys?.value ?? 'value'], index);

      if (item?.[keys?.children ?? 'children']?.length) {
        this.setData({ selectedIndexes });
      } else {
        // setCascaderValue(item.value);
        this.setData({ selectedIndexes }, () => {
          const { items } = this.data;
          this.triggerEvent('change', {
            value: item[keys?.value ?? 'value'],
            selectedOptions: items.map((item, index) => item[selectedIndexes[index]]),
          });
        });
        this.hide();
      }
    },
  };
}

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdCascaderProps } from './type';

const { prefix } = config;
const name = `${prefix}-cascader`;

export interface CascaderProps extends TdCascaderProps {}

@wxComponent()
export default class Cascader extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    stepIndex: 0,
    selectedIndexes: [],
    selectedValue: [],
    steps: ['选择选项'],
  };

  observers = {
    options() {
      this.setData({
        items: [this.data.options],
      });
    },
    selectedIndexes() {
      const { items, selectedIndexes } = this.data;

      this.setData({
        selectedValue: items.map((item, index) => item[selectedIndexes[index]]?.value),
      });
    },
  };

  lifetimes = {
    ready() {},
  };

  methods = {
    hide() {
      this.setData({ visible: false });
    },
    onStepClick(e) {
      const { index } = e.currentTarget.dataset;

      this.setData({ stepIndex: index });
    },
    onSwiperChange(e) {
      const { current } = e.detail;

      this.setData({
        stepIndex: current,
      });
    },
    handleSelect(e) {
      const { level } = e.target.dataset;
      const { value } = e.detail;
      const { selectedIndexes, steps, items, stepIndex } = this.data;
      const index = items[level].findIndex((item) => item.value === value);
      const item = items[level][index];

      if (item.disabled) {
        return;
      }
      selectedIndexes[level] = index;
      selectedIndexes.length = level + 1;
      steps[level] = item.label;

      this.triggerEvent('pick', item.value, index);

      if (item?.children?.length) {
        items[level + 1] = item.children;
        items.length = level + 2;
        steps[level + 1] = '选择选项';
        steps.length = level + 2;

        this.setData({ steps, items, selectedIndexes }, () => {
          this.setData({ stepIndex: stepIndex + 1 });
        });
      } else {
        // setCascaderValue(item.value);
        this.setData({ steps, selectedIndexes });
        this.hide();
        this.triggerEvent('change', {
          value: item.value,
          selectedOptions: items.map((item, index) => item[selectedIndexes[index]]),
        });
      }
    },
  };
}

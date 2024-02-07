import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdCascaderProps } from './type';
import { getRect } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-cascader`;

export interface CascaderProps extends TdCascaderProps {}

type OptionsType = TdCascaderProps['options']['value'];

@wxComponent()
export default class Cascader extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options: WechatMiniprogram.Component.ComponentOptions = {
    multipleSlots: true,
  };

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  data = {
    prefix,
    name,
    stepIndex: 0,
    selectedIndexes: [],
    selectedValue: [],
    scrollTopList: [],
    steps: [],
  };

  observers = {
    visible(v) {
      if (v) {
        const $tabs = this.selectComponent('#tabs');

        $tabs?.setTrack();
        this.updateScrollTop();
        this.initWithValue();
      }
    },

    value() {
      this.initWithValue();
    },

    'selectedIndexes, options'() {
      const { options, selectedIndexes, keys, placeholder } = this.data;
      const selectedValue = [];
      const steps = [];
      const items = [options];

      if (options.length > 0) {
        for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
          const index = selectedIndexes[i];
          const next = items[i][index];

          selectedValue.push(next[keys?.value ?? 'value']);
          steps.push(next[keys?.label ?? 'label']);

          if (next[keys?.children ?? 'children']) {
            items.push(next[keys?.children ?? 'children']);
          }
        }
      }

      if (steps.length < items.length) {
        steps.push(placeholder);
      }

      this.setData({
        steps,
        items,
        selectedValue,
        stepIndex: items.length - 1,
      });
    },
    async stepIndex() {
      const { visible } = this.data;

      if (visible) {
        this.updateScrollTop();
      }
    },
  };

  methods = {
    initWithValue() {
      if (this.data.value != null && this.data.value !== '') {
        const selectedIndexes = this.getIndexesByValue(this.data.options, this.data.value);

        if (selectedIndexes) {
          this.setData({ selectedIndexes });
        }
      } else {
        this.setData({ selectedIndexes: [] });
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
    updateScrollTop() {
      const { visible, items, selectedIndexes, stepIndex } = this.data;

      if (visible) {
        getRect(this, '.cascader-radio-group-0').then((rect) => {
          const eachRadioHeight = rect.height / items[0]?.length;

          this.setData({
            [`scrollTopList[${stepIndex}]`]: eachRadioHeight * selectedIndexes[stepIndex],
          });
        });
      }
    },
    hide(trigger) {
      this.setData({ visible: false });
      this.triggerEvent('close', { trigger: trigger });
    },
    onVisibleChange() {
      this.hide('overlay');
    },
    onClose() {
      this.hide('close-btn');
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

      this.triggerEvent('pick', { value: item[keys?.value ?? 'value'], index, level });

      if (item?.[keys?.children ?? 'children']?.length) {
        this.setData({ selectedIndexes });
      } else {
        // setCascaderValue(item.value);
        this.setData({ selectedIndexes }, () => {
          const { items } = this.data;
          this._trigger('change', {
            value: item[keys?.value ?? 'value'],
            selectedOptions: items.map((item, index) => item[selectedIndexes[index]]),
          });
        });
        this.hide('finish');
      }
    },
  };
}

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdCascaderProps } from './type';
import { getRect } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-cascader`;

export interface CascaderProps extends TdCascaderProps {}

type OptionsType = TdCascaderProps['options']['value'];
type KeysType = TdCascaderProps['keys']['value'];

function parseOptions(options: OptionsType, keys: KeysType) {
  const label = keys?.label ?? 'label';
  const value = keys?.value ?? 'value';

  return options.map((item) => {
    return {
      [label]: item[label],
      [value]: item[value],
    };
  });
}

@wxComponent()
export default class Cascader extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options: WechatMiniprogram.Component.ComponentOptions = {
    multipleSlots: true,
    pureDataPattern: /^options$/,
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

    options() {
      const { selectedValue, steps, items } = this.genItems();

      this.setData({
        steps,
        items,
        selectedValue,
        stepIndex: items.length - 1,
      });
    },
    selectedIndexes() {
      const { selectedValue, steps, items } = this.genItems();

      this.setData({
        steps,
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
    genItems() {
      const { options, selectedIndexes, keys, placeholder } = this.data;
      const selectedValue = [];
      const steps = [];
      const items = [parseOptions(options, keys)];

      if (options.length > 0) {
        let current = options;
        for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
          const index = selectedIndexes[i];
          const next = current[index];
          current = next[keys?.children ?? 'children'];

          selectedValue.push(next[keys?.value ?? 'value']);
          steps.push(next[keys?.label ?? 'label']);

          if (next[keys?.children ?? 'children']) {
            items.push(parseOptions(next[keys?.children ?? 'children'], keys));
          }
        }
      }

      if (steps.length < items.length) {
        steps.push(placeholder);
      }

      return {
        selectedValue,
        steps,
        items,
      };
    },
    handleSelect(e) {
      const { level } = e.target.dataset;
      const { value } = e.detail;
      const { selectedIndexes, items, keys, options } = this.data;
      const index = items[level].findIndex((item) => item[keys?.value ?? 'value'] === value);

      let item = selectedIndexes.slice(0, level).reduce((acc, item, index) => {
        if (index === 0) {
          return acc[item];
        }
        return acc[keys?.children ?? 'children'][item];
      }, options);

      if (level === 0) {
        item = item[index];
      } else {
        item = item[keys?.children ?? 'children'][index];
      }

      if (item.disabled) {
        return;
      }
      selectedIndexes[level] = index;
      selectedIndexes.length = level + 1;

      this.triggerEvent('pick', { value: item[keys?.value ?? 'value'], index, level });
      const { items: newItems } = this.genItems();
      if (item?.[keys?.children ?? 'children']?.length) {
        this.setData({
          selectedIndexes,
          [`items[${level + 1}]`]: newItems[level + 1],
        });
      } else {
        // setCascaderValue(item.value);
        this.setData(
          {
            selectedIndexes,
          },
          () => {
            const { items } = this.data;
            this._trigger('change', {
              value: item[keys?.value ?? 'value'],
              selectedOptions: items.map((item, index) => item[selectedIndexes[index]]),
            });
          },
        );
        this.hide('finish');
      }
    },
  };
}

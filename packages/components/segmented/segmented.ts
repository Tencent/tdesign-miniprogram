import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { SegmentedItem } from './type';
import { calcIcon, getRect } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-segmented`;

@wxComponent()
export default class Segmented extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  externalClasses = [`${prefix}-class`, `${prefix}-class-thumb`, `${prefix}-class-item`];

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  data = {
    prefix,
    classPrefix: name,
    segmentItems: [] as SegmentedItem[],
    activeIndex: -1,
    thumbStyle: '',
  };

  lifetimes = {
    ready() {
      this.updateThumb();
    },
  };

  observers = {
    options(newOptions) {
      this.updateOptions(newOptions);
    },
    'value, segmentItems'() {
      this.updateActiveIndex();
    },
  };

  methods = {
    updateOptions(options: (string | number | SegmentedItem)[]) {
      if (!options?.length) return;

      const segmentItems: SegmentedItem[] = options.map((option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return {
            value: option,
            label: String(option),
          };
        }
        return {
          ...option,
          label: option.label ?? String(option.value),
          icon: option.icon ? calcIcon(option.icon) : null,
        };
      });
      this.setData({ segmentItems });
    },

    updateActiveIndex() {
      const { value, segmentItems } = this.data;

      let activeIndex = -1;
      if (value != null) {
        activeIndex = segmentItems.findIndex((item) => item.value === value);
      }

      if (activeIndex === this.data.activeIndex) return;

      this.setData({ activeIndex }, () => {
        this.updateThumb();
      });
    },

    updateThumb() {
      const { activeIndex, classPrefix } = this.data;
      if (activeIndex < 0) return;

      const groupClass = `.${classPrefix}__group`;
      const itemClass = `.${classPrefix}-item-${activeIndex}`;

      Promise.all([getRect(this, itemClass), getRect(this, groupClass)]).then(([itemRect, groupRect]) => {
        if (itemRect && groupRect) {
          const left = itemRect.left - groupRect.left;
          this.setData({
            thumbStyle: `width: ${itemRect.width}px; transform: translateX(${left}px);`,
          });
        }
      });
    },

    handleSelect(e: WechatMiniprogram.BaseEvent) {
      const { index } = e.currentTarget.dataset;
      const { segmentItems, activeIndex } = this.data;
      const { disabled, options } = this.properties;
      const item = segmentItems[index];

      if (disabled || !item || item.disabled) return;
      if (index === activeIndex) return;

      this._trigger('change', {
        value: item.value,
        selectedOption: options[index],
      });
    },
  };
}

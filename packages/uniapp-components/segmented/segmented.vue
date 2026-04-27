<template>
  <view
    :class="'' + tools.cls(classPrefix, [['block', block]]) + ' ' + tClass"
    :style="'' + tools._style([customStyle])"
  >
    <view :class="classPrefix + '__group'">
      <!-- thumb 动画背景 -->
      <view
        :class="classPrefix + '__thumb ' + tClassThumb"
        :style="thumbStyle"
      />

      <!-- 选项列表 -->
      <view
        v-for="(item, index) in segmentItems"
        :key="index"
        :class="'' + tools.cls(classPrefix + '__item', [
          ['active', index === activeIndex],
          ['disabled', disabled || item.disabled]
        ]) + ' ' + classPrefix + '-item-' + index + ' ' + tClassItem"
        @click="handleSelect(index)"
      >
        <view :class="classPrefix + '__item-inner'">
          <block
            v-if="item.icon"
            name="icon"
          >
            <t-icon
              :name="item.icon.name || item.icon"
              :t-class="classPrefix + '__item-icon'"
            />
          </block>
          <span
            v-if="item.label"
            :class="classPrefix + '__item-label'"
          >{{ item.label }}</span>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { calcIcon, getRect, coalesce } from '../common/utils';
import tools from '../common/utils.wxs';

const name = `${prefix}-segmented`;

export default {
  components: {
    TIcon,
  },
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    controlledProps: [
      {
        key: 'value',
        event: 'change',
      },
    ],
    externalClasses: [
      `${prefix}-class`,
      `${prefix}-class-thumb`,
      `${prefix}-class-item`,
    ],
    props: {
      ...props,
    },
    emits: ['change'],
    data() {
      return {
        prefix,
        classPrefix: name,
        tools,
        segmentItems: [],
        activeIndex: -1,
        thumbStyle: '',

        dataValue: coalesce(this.value, this.defaultValue),
      };
    },
    watch: {
      options: {
        handler(newOptions) {
          this.updateOptions(newOptions);
        },
        immediate: true,
      },
      value: {
        handler(val) {
          this.dataValue = val;
        },
      },
      dataValue: {
        handler() {
          this.updateActiveIndex();
        },
        immediate: true,
      },
      segmentItems() {
        this.updateActiveIndex();
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.updateThumb();
      });
    },
    methods: {
      updateOptions(options) {
        if (!options?.length) return;
        const segmentItems = options.map((option) => {
          if (typeof option === 'string' || typeof option === 'number') {
            return { value: option, label: String(option) };
          }
          return {
            ...option,
            label: option.label ?? String(option.value),
            icon: option.icon ? calcIcon(option.icon) : null,
          };
        });
        this.segmentItems = segmentItems;
      },

      updateActiveIndex() {
        const { dataValue, segmentItems } = this;
        let activeIndex = -1;
        if (dataValue != null) {
          activeIndex = segmentItems.findIndex(item => item.value === dataValue);
        }
        if (activeIndex === this.activeIndex) return;
        this.activeIndex = activeIndex;
        this.$nextTick(() => {
          this.updateThumb();
        });
      },

      updateThumb() {
        const { activeIndex, classPrefix } = this;
        if (activeIndex < 0) return;
        const groupClass = `.${classPrefix}__group`;
        const itemClass = `.${classPrefix}-item-${activeIndex}`;
        Promise.all([
          getRect(this, itemClass),
          getRect(this, groupClass),
        ]).then(([itemRect, groupRect]) => {
          if (itemRect && groupRect) {
            const left = itemRect.left - groupRect.left;
            this.thumbStyle = `width: ${itemRect.width}px; transform: translateX(${left}px);`;
          }
        });
      },

      handleSelect(index) {
        const { segmentItems, activeIndex, disabled, options } = this;
        const item = segmentItems[index];
        if (disabled || !item || item.disabled) return;
        if (index === activeIndex) return;
        this._trigger('change', {
          value: item.value,
          selectedOption: options[index],
        });
      },
    },
  }),
};
</script>
<style scoped src="./segmented.css"></style>

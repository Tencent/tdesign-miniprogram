<template>
  <view>
    <TPopup
      :class="tClass"
      :visible="dataVisible"
      placement="bottom"
      @visible-change="onVisibleChange"
    >
      <view
        :style="tools._style([customStyle])"
        :class="name"
      >
        <view :class="name + '__title'">
          <slot name="title" />
          {{ title }}
        </view>
        <view
          :class="name + '__close-btn'"
          @click="onClose"
        >
          <slot name="close-btn" />
          <TIcon
            v-if="closeBtn"
            size="48rpx"
            name="close"
          />
        </view>

        <slot name="header" />

        <view :class="name + '__content'">
          <block v-if="steps && steps.length">
            <view
              v-if="theme == 'step'"
              :class="name + '__steps'"
            >
              <view
                v-for="(item, index) in steps"
                :key="index"
                :class="name + '__step'"
                :data-index="index"
                @click="() => onStepClick(index)"
              >
                <view
                  :class="
                    name +
                      '__step-dot ' +
                      name +
                      '__step-dot--' +
                      (item !== placeholder ? 'active' : '') +
                      ' ' +
                      name +
                      '__step-dot--' +
                      (index === steps.length - 1 ? 'last' : '')
                  "
                />

                <view :class="name + '__step-label ' + name + '__step-label--' + (index === stepIndex ? 'active' : '')">
                  {{ item }}
                </view>

                <TIcon
                  name="chevron-right"
                  size="44rpx"
                  :t-class="name + '__step-arrow'"
                  :custom-style="stepArrowCustomStyle"
                  style="margin-left: auto"
                />
              </view>
            </view>

            <TTabs
              v-if="theme == 'tab'"
              ref="tabs"
              :value="stepIndex"
              :space-evenly="false"
              @change="({value}) => onTabChange(value)"
            >
              <TTabPanel
                v-for="(item, index) in steps"
                :key="index"
                :ref="`tab-${index}`"
                :value="index"
                :label="item"
              />
            </TTabs>
          </block>

          <slot name="middle-content" />

          <view
            v-if="subTitles && subTitles[stepIndex]"
            :class="name + '__options-title'"
          >
            {{ subTitles[stepIndex] }}
          </view>

          <view
            :class="name + '__options-container'"
            :style="'width: ' + (items.length + 1) + '00vw; transform: translateX(-' + stepIndex + '00vw)'"
          >
            <scroll-view
              v-for="(options, index) in items"
              :key="index"
              :class="name + '__options'"
              scroll-y
              :scroll-top="scrollTopList[index]"
              type="list"
              :style="'height: ' + optionsHeight + 'px'"
            >
              <view :class="'cascader-radio-group-' + index">
                <TRadioGroup
                  :value="selectedValue[index]"
                  :keys="keys"
                  :options="options"
                  :data-level="index"
                  placement="right"
                  icon="line"
                  borderless
                  @change="({ value }) => handleSelect($event, { level: index, value })"
                />
              </view>
            </scroll-view>
          </view>
        </view>
      </view>
    </TPopup>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import TPopup from '../popup/popup';
import TTabs from '../tabs/tabs';
import TTabPanel from '../tab-panel/tab-panel';
import TRadioGroup from '../radio-group/radio-group';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getRect, coalesce, nextTick } from '../common/utils';

import tools from '../common/utils.wxs';


const name = `${prefix}-cascader`;

function parseOptions(options, keys) {
  const label = coalesce(keys?.label, 'label');
  const value = coalesce(keys?.value, 'value');
  const disabled = coalesce(keys?.disabled, 'disabled');

  return options.map(item => ({
    [label]: item[label],
    [value]: item[value],
    [disabled]: item[disabled],
  }));
}

const defaultState = {
  contentHeight: 0,
  stepHeight: 0,
  tabsHeight: 0,
  subTitlesHeight: 0,
  stepsInitHeight: 0,
};

export default uniComponent({
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
  ],
  components: {
    TIcon,
    TPopup,
    TTabs,
    TTabPanel,
    TRadioGroup,
  },
  props: {
    ...props,
  },
  emits: [
    'update:visible',
  ],
  data() {
    return {
      prefix,
      name,
      stepIndex: 0,
      selectedIndexes: [],
      selectedValue: [],
      scrollTopList: [],
      steps: [],
      optionsHeight: 0,
      tools,

      dataVisible: this.visible,
      dataValue: coalesce(this.value, this.defaultValue),
      items: [],
    };
  },
  computed: {
    stepArrowCustomStyle() {
      return tools._style({
        color: 'var(--td-cascader-step-arrow-color, var(--td-text-color-placeholder, var(--td-font-gray-3, rgba(0, 0, 0, .4))))',
        marginLeft: 'auto',
      });
    },
  },
  watch: {
    visible: {
      handler(v) {
        this.dataVisible = v;
      },
      immediate: true,
    },
    dataVisible: {
      handler(v) {
        if (v) {
          nextTick().then(() => {
            const $tabs = this.$refs.tabs;
            $tabs?.setTrack();
            $tabs?.getTabHeight().then((res) => {
              this.state.tabsHeight = res.height;
            });
          });

          // 不能使用 this.$nextTick，在头条小程序下会报错
          nextTick().then(() => {
            this.initOptionsHeight(this.steps.length);
            this.updateScrollTop();
            this.initWithValue();
          });
        } else {
          this.state = { ...defaultState };
        }
      },
      immediate: true,
    },

    value: {
      handler(v) {
        this.dataValue = v;
      },
      immediate: true,
    },

    dataValue: {
      handler() {
        this.initWithValue();
      },
      immediate: true,
      deep: true,
    },

    options: {
      handler() {
        const { selectedValue, steps, items } = this.genItems();

        this.steps = steps;
        this.items = items;
        this.selectedValue = selectedValue;
        this.stepIndex = items.length - 1;
        this.setTabParent();
      },
      immediate: true,
      deep: true,
    },
    selectedIndexes: {
      handler() {
        const { visible, theme } = this;
        const { selectedValue, steps, items } = this.genItems();

        this.steps = steps;
        this.setTabParent();
        this.selectedValue = selectedValue;
        this.stepIndex = items.length - 1;

        if (JSON.stringify(items) !== JSON.stringify(this.items)) {
          this.items = items;
        }


        if (visible && theme === 'step') {
          this.updateOptionsHeight(steps.length);
        }
      },
      immediate: true,
      deep: true,
    },

    stepIndex: {
      handler() {
        const { dataVisible: visible } = this;

        if (visible) {
          this.updateScrollTop();
        }
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    this.state = {
      ...defaultState,
    };
  },
  mounted() {

  },
  methods: {
    setTabParent() {
      // #ifdef MP-TOUTIAO
      nextTick().then(() => {
        const tabsRef = this.$refs.tabs;
        this.steps.forEach((tools, index) => {
          const tabRef = this.$refs[`tab-${index}`];
          tabRef?.[0]?.setParent(tabsRef);
        });
      });
      // #endif
    },
    updateOptionsHeight(steps) {
      const { contentHeight, stepsInitHeight, stepHeight, subTitlesHeight } = this.state;
      this.optionsHeight = contentHeight - stepsInitHeight - subTitlesHeight - (steps - 1) * stepHeight;
    },

    async initOptionsHeight(steps) {
      const { theme, subTitles } = this;

      const { height } = await getRect(this, `.${name}__content`);
      this.state.contentHeight = height;

      if (theme === 'step') {
        await Promise.all([
          getRect(this, `.${name}__steps`),
          getRect(this, `.${name}__step`),
        ])
          .then(([stepsRect, stepRect]) => {
            this.state.stepsInitHeight = stepsRect.height - (steps - 1) * stepRect.height;
            this.state.stepHeight = stepRect.height;
          })
          .catch(() => {
          });
      }

      if (subTitles.length > 0) {
        const { height } = await getRect(this, `.${name}__options-title`);
        this.state.subTitlesHeight = height;
      }

      const optionsInitHeight = this.state.contentHeight - this.state.subTitlesHeight;
      this.optionsHeight = theme === 'step'
        ? optionsInitHeight - this.state.stepsInitHeight - (steps - 1) * this.state.stepHeight
        : optionsInitHeight - this.state.tabsHeight;
    },

    initWithValue() {
      if (this.dataValue != null && this.dataValue !== '') {
        const selectedIndexes = this.getIndexesByValue(this.options, this.dataValue);

        if (selectedIndexes) {
          this.selectedIndexes = selectedIndexes;
        }
      } else {
        this.selectedIndexes = [];
      }
    },
    getIndexesByValue(options, value) {
      const { keys } = this;

      for (let i = 0, size = options.length; i < size; i += 1) {
        const opt = options[i];
        if (opt[coalesce(keys?.value, 'value')] === value) {
          return [i];
        }
        if (opt[coalesce(keys?.children, 'children')]) {
          const res = this.getIndexesByValue(opt[coalesce(keys?.children, 'children')], value);
          if (res) {
            return [i, ...res];
          }
        }
      }
    },
    updateScrollTop() {
      const { dataVisible: visible, items, selectedIndexes, stepIndex } = this;

      if (visible) {
        getRect(this, '.cascader-radio-group-0').then((rect) => {
          const eachRadioHeight = rect.height / items[0]?.length;

          this[`scrollTopList[${stepIndex}]`] = eachRadioHeight * selectedIndexes[stepIndex];
        })
          .catch(() => {
          });
      }
    },
    hide(trigger) {
      this.dataVisible = false;
      this.$emit('close', { trigger });
      this.$emit('update:visible', false);
    },
    onVisibleChange() {
      this.hide('overlay');
    },
    onClose() {
      if (this.checkStrictly) {
        this.triggerChange();
      }
      this.hide('close-btn');
    },
    onStepClick(index) {
      this.stepIndex = index;
    },
    onTabChange(value) {
      this.stepIndex = value;
    },
    genItems() {
      const { options, selectedIndexes, keys, placeholder } = this;
      const selectedValue = [];
      const steps = [];
      const items = [parseOptions(options, keys)];

      if (options.length > 0) {
        let current = options;
        for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
          const index = selectedIndexes[i];
          const next = current[index];
          current = next[coalesce(keys?.children, 'children')];

          selectedValue.push(next[coalesce(keys?.value, 'value')]);
          steps.push(next[coalesce(keys?.label, 'label')]);

          if (next[coalesce(keys?.children, 'children')]) {
            items.push(parseOptions(next[coalesce(keys?.children, 'children')], keys));
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
    handleSelect(tools, { level, value }) {
      const { checkStrictly } = this;
      const { selectedIndexes, items, keys, options, selectedValue } = this;

      const index = items[level].findIndex(item => item[coalesce(keys?.value, 'value')] === value);

      let item = selectedIndexes.slice(0, level).reduce((acc, item, index) => {
        if (index === 0) {
          return acc[item];
        }
        return acc[coalesce(keys?.children, 'children')][item];
      }, options);


      if (level === 0) {
        item = item[index];
      } else {
        item = item[coalesce(keys?.children, 'children')][index];
      }

      if (item[coalesce(keys?.disabled, 'disabled')]) {
        return;
      }
      this.$emit('pick', {
        value: item[coalesce(keys?.value, 'value')],
        label: item[coalesce(keys?.label, 'label')],
        index,
        level,
      });
      selectedIndexes[level] = index;
      if (checkStrictly && selectedValue.includes(String(value))) {
        selectedIndexes.length = level;
        this.selectedIndexes = selectedIndexes;
        return;
      }
      selectedIndexes.length = level + 1;

      const { items: newItems } = this.genItems();
      if (item?.[coalesce(keys?.children, 'children')]?.length >= 0) {
        this.selectedIndexes = selectedIndexes;
        this[`items[${level + 1}]`] = newItems[level + 1];
      } else {
        // setCascaderValue(item.value);
        this.selectedIndexes = selectedIndexes;
        setTimeout(this.triggerChange);

        this.hide('finish');
      }
      // #ifdef VUE2
      this.$set(this, 'selectedIndexes', JSON.parse(JSON.stringify(selectedIndexes)));
      // #endif
    },
    triggerChange() {
      const { items, selectedValue, selectedIndexes } = this;
      this._trigger('change', {
        value: coalesce(selectedValue[selectedValue.length - 1], ''),
        selectedOptions: items.map((item, index) => item[selectedIndexes[index]]).filter(Boolean),
      });
    },
  },
});
</script>
<style scoped>
@import './cascader.css';
</style>

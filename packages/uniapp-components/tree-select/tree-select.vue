<template>
  <view
    :class="classPrefix"
    :style="tools._style(['height:' + tools.addUnit(height), customStyle])"
  >
    <t-scroll-view
      v-for="(item, level) in treeOptions"
      :key="level"
      :t-class="getScrollViewTClass(level)"
      :class="getScrollViewClass(level)"
      :scroll-into-view="scrollIntoView && scrollIntoView[level] ? 'scroll-to-' + scrollIntoView[level] : ''"
    >
      <t-side-bar
        v-if="level == 0"
        :value="innerValue[level]"
        :t-class="classPrefix + '-column ' + tClassLeftColumn"
        style="width: 100%;height: auto;"
        @change="onRootChange"
      >
        <t-side-bar-item
          v-for="(sidebarItem, sidebarIndex) in treeOptions[level]"
          :key="sidebarIndex"
          :label="sidebarItem.label"
          :value="sidebarItem.value"
          :disabled="sidebarItem.disabled"
          :t-id="'scroll-to-' + sidebarItem.value"
          :t-class="'scroll-into-view ' + tClassLeftItem"
        />
      </t-side-bar>

      <block v-else-if="level != leafLevel">
        <view
          v-for="(treeItem, index) in treeOptions[level]"
          :key="`view-${level}-${index}`"
          :data-level="level"
          :data-value="treeItem.value"
          :class="
            tools.cls(classPrefix + '__item', [
              ['active', treeItem.value === innerValue[level]],
              ['disabled', treeItem.disabled]
            ]) +
              ' ' +
              tClassMiddleItem +
              ' scroll-into-view'
          "
          @click="handleTreeClick"
        >
          <view :id="'scroll-to-' + treeItem.value">
            {{ treeItem.label }}
          </view>
        </view>
      </block>

      <t-radio-group
        v-else-if="!multiple"
        :t-class="classPrefix + '__radio ' + tClassRightColumn"
        :data-level="level"
        data-type="single"
        :value="innerValue[level]"
        @change="({value}) => handleChange({ value, level, type: 'single' })"
      >
        <t-radio
          v-for="(treeItem, index) in treeOptions[level]"
          :key="`radio-${innerValue[level-1]}-${level}-${index}`"
          :t-id="'scroll-to-' + treeItem.value"
          :t-class="'scroll-into-view ' + classPrefix + '__radio-item ' + tClassRightItem"
          :t-class-label="tClassRightItemLabel"
          icon="line"
          :value="treeItem.value"
          :disabled="treeItem.disabled"
          :max-label-row="1"
          borderless
          placement="right"
        >
          {{ treeItem.label }}
        </t-radio>
      </t-radio-group>

      <t-checkbox-group
        v-else
        :t-class="classPrefix + '__checkbox ' + tClassRightColumn"
        :value="innerValue[level] || []"
        :data-level="level"
        data-type="multiple"
        @change="({context}) => handleChange({ context, value: context.value, level, type: 'multiple' })"
      >
        <t-checkbox
          v-for="(treeItem, index) in treeOptions[level]"
          :key="`checkbox-${innerValue[level-1]}-${level}-${index}`"
          :t-id="'scroll-to-' + treeItem.value"
          :t-class="'scroll-into-view ' + tClassRightItem"
          :t-class-label="tClassRightItemLabel"
          placement="right"
          icon="line"
          :max-label-row="1"
          :value="treeItem.value"
          :disabled="treeItem.disabled"
          borderless
        >
          {{ treeItem.label }}
        </t-checkbox>
      </t-checkbox-group>
    </t-scroll-view>
    <slot name="content" />
  </view>
</template>
<script>
import TRadio from '../radio/radio';
import TRadioGroup from '../radio-group/radio-group';
import TCheckbox from '../checkbox/checkbox';
import TCheckboxGroup from '../checkbox-group/checkbox-group';
import TSideBar from '../side-bar/side-bar';
import TSideBarItem from '../side-bar-item/side-bar-item';
import TScrollView from '../scroll-view/scroll-view.vue';

import { uniComponent } from '../common/src/index';
import { isDef } from '../common/validator';
import { prefix } from '../common/config';
import { getTreeDepth, coalesce, nextTick } from '../common/utils';
import props from './props';
import tools from '../common/utils.wxs';
import { getTreeClass } from './computed.js';
import { canUseVirtualHost } from '../common/version';

const name = `${prefix}-tree-select`;

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
    `${prefix}-class-left-column`,
    `${prefix}-class-left-item`,
    `${prefix}-class-middle-item`,
    `${prefix}-class-right-column`,
    `${prefix}-class-right-item`,
    `${prefix}-class-right-item-label`,
  ],
  components: {
    TRadio,
    TRadioGroup,
    TCheckbox,
    TCheckboxGroup,
    TSideBar,
    TSideBarItem,
    TScrollView,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      scrollIntoView: null,
      tools,

      innerValue: coalesce(this.value, this.defaultValue),
      treeOptions: [],
    };
  },
  computed: {

  },
  watch: {
    value: {
      handler() {
        this.buildTreeOptions();
      },
      deep: true,
      immediate: true,
    },
    options: {
      handler() {
        this.buildTreeOptions();
      },
      deep: true,
      immediate: true,
    },
    keys: {
      handler() {
        this.buildTreeOptions();
      },
      deep: true,
      immediate: true,
    },
    multiple: 'buildTreeOptions',
  },
  mounted() {
    nextTick().then(() => {
      this.getScrollIntoView('init');
    });
  },
  methods: {
    getTreeClass,
    buildTreeOptions() {
      const { options, innerValue: value, customValue, multiple, keys } = this;

      if (!options.length) return;

      const treeOptions = [];

      let level = -1;
      let currentNode = { children: options };

      while (currentNode?.children) {
        level += 1;
        const currentLevelOptions = currentNode.children.map(item => ({
          label: item[keys?.label || 'label'],
          value: item[keys?.value || 'value'],
          disabled: item[keys?.disabled || 'disabled'],
          children: item[keys?.children || 'children'],
        }));

        treeOptions.push(currentLevelOptions);

        const currentValue = coalesce(customValue?.[level], value?.[level]);
        currentNode = currentValue
          ? coalesce(currentLevelOptions.find(child => child.value === currentValue), currentLevelOptions[0])
          : currentLevelOptions[0];
      }

      const depth = getTreeDepth(options, keys?.children);

      // 补齐 treeOptions 长度到 depth
      while (treeOptions.length < depth) {
        treeOptions.push([]);
        level += 1;
      }

      const leafLevel = Math.max(0, level);
      const innerValue = customValue
        || treeOptions.map((levelOptions, idx) => {
          const isLastLevel = idx === treeOptions.length - 1;
          const defaultValue = isLastLevel && multiple ? [levelOptions[0]?.value] : levelOptions[0]?.value;
          return coalesce(value?.[idx], defaultValue);
        });

      this.innerValue = innerValue;
      this.leafLevel = leafLevel;
      this.treeOptions = treeOptions;
    },

    getScrollIntoView(status) {
      const { innerValue: value, customValue, scrollIntoView } = this;
      if (status === 'init') {
        const _value = customValue || value;
        const scrollIntoView = Array.isArray(_value)
          ? _value.map(item => (Array.isArray(item) ? item[0] : item))
          : [_value];
        // setTimeout(() => {
        this.scrollIntoView = scrollIntoView;
        // }, 1000);
      } else {
        if (scrollIntoView === null) return;
        this.scrollIntoView = null;
      }
    },

    onRootChange(e) {
      const { innerValue } = this;
      const { value: itemValue } = e;

      this.getScrollIntoView('none');
      innerValue[0] = itemValue;

      this._trigger('change', { value: innerValue, level: 0 });
    },

    handleTreeClick(e) {
      const { level, value: itemValue } = e.currentTarget.dataset;
      const { innerValue } = this;

      innerValue[level] = itemValue;
      this.getScrollIntoView('none');
      this._trigger('change', { value: innerValue, level: 1 });
    },

    handleChange({ level, type, value }) {
      const { innerValue } = this;

      if (type === 'multiple') {
        if (!isDef(innerValue[level])) {
          innerValue[level] = [];
        }
        const index = innerValue[level].indexOf(value);
        index === -1 ? innerValue[level].push(value) : innerValue[level].splice(index, 1);
      } else {
        innerValue[level] = value;
      }

      this.getScrollIntoView('none');
      this._trigger('change', { value: innerValue, level });
    },

    getScrollViewTClass(level) {
      return canUseVirtualHost() ? this.getScrollViewRealClass(level) : '';
    },
    getScrollViewClass(level) {
      return !canUseVirtualHost() ? this.getScrollViewRealClass(level) : '';
    },
    getScrollViewRealClass(level) {
      const { classPrefix, leafLevel, treeOptions, tClass } = this;
      return `${tools.cls(`${classPrefix}__column`, [getTreeClass(leafLevel - level, treeOptions.length)])} ${tClass}`;
    },
  },
});
</script>
<style scoped>
@import './tree-select.css';
</style>

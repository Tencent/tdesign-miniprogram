<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [
      ['split', split], ['text-only', !icon],
      ['crowded', crowded], shape]
    ) + ' ' + tClass"
  >
    <view
      :class="tools.cls(classPrefix + '__content', [['checked', isChecked], theme])"
      :hover-class="classPrefix + '__content--active'"
      :hover-stay-time="200"
      :aria-selected="(!hasChildren || !isSpread) && isChecked ? true : false"
      :aria-expanded="hasChildren && isSpread ? true : ''"
      :aria-role="hasChildren ? 'button' : 'tab'"
      :aria-label="ariaLabel || (badgeProps.dot || badgeProps.count ? tools.getBadgeAriaLabel({ ...badgeProps }) : '')"
      @click="toggle"
    >
      <view
        :class="classPrefix + '__icon'"
        :style="'height: ' + (iconOnly ? 24 : 20) + 'px'"
        :aria-hidden="badgeProps.dot || badgeProps.count"
      >
        <t-badge
          v-if="badgeProps.dot || badgeProps.count"
          :count="badgeProps.count || 0"
          :max-count="badgeProps.maxCount || 99"
          :dot="badgeProps.dot || false"
          :content="badgeProps.content || ''"
          :size="badgeProps.size || 'medium'"
          :visible="badgeProps.visible"
          :offset="badgeProps.offset || [0, 0]"
          :t-class-count="prefix + '-badge-class'"
        >
          <block
            v-if="_icon"
            name="icon"
          >
            <t-icon
              :custom-style="_icon.style || ''"
              :t-class="_icon.tClass || ''"
              :prefix="_icon.prefix"
              :name="_icon.name"
              :size="_icon.size || (iconOnly ? 24 : 20)"
              :color="_icon.color"
              :aria-hidden="_icon.ariaHidden"
              :aria-label="_icon.ariaLabel"
              :aria-role="_icon.ariaRole"
              @click="_icon.click || ''"
            />
          </block>
          <!-- 避免被 badge 组件识别为空，t-badge__content:not(:empty) -->
          <view v-else />
        </t-badge>
        <block
          v-else-if="!!icon"
          name="icon"
        >
          <t-icon
            :custom-style="_icon.style || ''"
            :t-class="_icon.tClass || ''"
            :prefix="_icon.prefix"
            :name="_icon.name"
            :size="_icon.size || (iconOnly ? 24 : 20)"
            :color="_icon.color"
            :aria-hidden="!iconOnly"
            :aria-label="_icon.ariaLabel"
            :aria-role="_icon.ariaRole"
            @click="_icon.click || ''"
          />
        </block>
        <slot name="icon" />
      </view>
      <view :class="tools.cls(classPrefix + '__text', [['small', !!icon]])">
        <t-icon
          v-if="hasChildren"
          name="view-list"
          size="32rpx"
          :t-class="classPrefix + '__icon-menu'"
        />
        <slot />
      </view>
    </view>
    <view
      v-if="hasChildren && isSpread"
      :class="classPrefix + '__spread'"
    >
      <view
        v-for="(child, index) in (subTabBar || [])"
        :key="index"
        :class="classPrefix + '__spread-item'"
        :hover-class="classPrefix + '__spread-item--active'"
        :hover-stay-time="200"
        :data-value="child.value || index"
        aria-role="tab"
        @click="selectChild"
      >
        <view
          v-if="index !== 0"
          :class="classPrefix + '__spread-item-split'"
        />

        <view
          :class="classPrefix + '__spread-item-text'"
          :data-value="child.value || index"
        >
          {{ child.label }}
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import tBadge from '../badge/badge';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getRect, calcIcon } from '../common/utils';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';

const classPrefix = `${prefix}-tab-bar-item`;


export default uniComponent({
  name: classPrefix,
  options: {
    styleIsolation: 'shared',
    virtualHost: true,
  },
  externalClasses: [`${prefix}-class`],
  mixins: [ChildrenMixin(RELATION_MAP.TabBarItem)],
  components: {
    tIcon,
    tBadge,
  },
  props: {
    ...props,
  },
  emits: [],
  watch: {
    subTabBar: {
      handler(value) {
        this.hasChildren = value?.length > 0;
      },
      immediate: true,
    },
    icon: {
      handler(v) {
        this._icon = calcIcon(v);
      },
      immediate: true,
    },
  },
  data() {
    return {
      prefix,
      classPrefix,
      isSpread: false,
      isChecked: false,
      hasChildren: false,
      currentName: '',
      split: true,
      iconOnly: false,
      theme: '',
      crowded: false,
      shape: 'normal',
      tools,
    };
  },
  async mounted() {
    const res = await getRect(this, `.${classPrefix}__text`);

    this.iconOnly = res.height === 0;
  },
  methods: {
    innerAfterLinked() {
      const parent = this[RELATION_MAP.TabBarItem];
      const { theme, split, shape } = parent;

      this.theme = theme;
      this.split = split;
      this.shape = shape;
      this.currentName = this.value ? this.value : parent.initName();

      parent.updateChildren();
    },
    showSpread() {
      this.isSpread = true;
    },
    toggle() {
      const { currentName, hasChildren, isSpread } = this;

      if (hasChildren) {
        this.isSpread = !isSpread;
      }
      this[RELATION_MAP.TabBarItem].updateValue(currentName);
      this[RELATION_MAP.TabBarItem].changeOtherSpread(currentName);
    },
    selectChild(event) {
      const { value } = event.target.dataset;

      this[RELATION_MAP.TabBarItem].updateValue(value);
      this.isSpread = false;
    },
    checkActive(value) {
      const { currentName, subTabBar = [] } = this;
      const isChecked = subTabBar?.some(item => item.value === value) || currentName === value;

      this.isChecked = isChecked;
    },
    closeSpread() {
      this.isSpread = false;
    },
  },
});
</script>
<style scoped>
@import './tab-bar-item.css';

</style>

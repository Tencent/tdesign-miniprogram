<template>
  <view
    :id="tId"
    :class="
      tools.cls(classPrefix, [
        ['active', active],
        ['disabled', disabled]
      ]) +
        ' ' +
        tClass
    "
    :style="tools._style([customStyle])"
    aria-role="button"
    :aria-label="
      ariaLabel ||
        (badgeProps && (badgeProps.dot || badgeProps.count)
          ? (active ? '已选中，' + label + tools.getBadgeAriaLabel({ ...badgeProps })
            : label + tools.getBadgeAriaLabel({ ...badgeProps })) : '')
    "
    :aria-disabled="disabled"
    @click="handleClick"
  >
    <block v-if="active">
      <view :class="classPrefix + '__line'" />
      <view
        v-if="!isFirstChild"
        :class="classPrefix + '__prefix'"
      />
      <view
        v-if="!isLastChild"
        :class="classPrefix + '__suffix'"
      />
    </block>
    <block
      v-if="_icon"
      name="icon"
    >
      <t-icon
        :custom-style="iconCustomStyle"
        :t-class="classPrefix + '__icon'"
        :prefix="_icon.prefix"
        :name="_icon.name"
        :size="_icon.size"
        :color="_icon.color"
        :aria-hidden="!!_icon.ariaHidden"
        :aria-label="_icon.ariaLabel"
        :aria-role="_icon.ariaRole"
        @click="_icon.click || ''"
      />
    </block>
    <block v-if="badgeProps">
      <t-badge
        :color="badgeProps.color"
        :content="label"
        :count="badgeProps.count"
        :dot="badgeProps.dot"
        :max-count="badgeProps.maxCount"
        :offset="badgeProps.offset"
        :shape="badgeProps.shape"
        :show-zero="badgeProps.showZero"
        :size="badgeProps.size"
        :t-class="badgeProps.tClass"
        :t-class-content="badgeProps.tClassContent"
        :t-class-count="badgeProps.tClassCount"
      />
    </block>
    <block v-else>
      {{ label }}
    </block>
    <slot />
  </view>
</template>
<script>
import TBadge from '../badge/badge';
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-side-bar-item`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [ChildrenMixin(RELATION_MAP.SideBarItem)],
  components: {
    TBadge,
    TIcon,
  },
  props: {
    ...props,
    tId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      classPrefix: name,
      prefix,
      active: false,
      isPre: false,
      isNext: false,
      tools,
      isFirstChild: false,
      isLastChild: false,
    };
  },
  computed: {
    iconCustomStyle() {
      return tools._style([
        {
          fontSize: 'var(--td-side-bar-icon-size, 20px)',
          marginRight: '2px',
        },
        this._icon.style || '',
      ]);
    },
  },
  watch: {
    icon: {
      handler(v) {
        this._icon = typeof v === 'string' ? { name: v } : v;
      },
      immediate: true,
    },
    disabled: {
      handler() {
        this.updateActive(this.value);
      },
      immediate: true,
    },
  },
  mounted() {

  },
  methods: {
    innerAfterLinked() {
      const parent = this[RELATION_MAP.SideBarItem];
      this.updateActive(parent.dataValue);
    },
    updateActive(value) {
      const active = value === this.value && !this.disabled;
      this.active = active;
    },
    handleClick() {
      if (this.disabled) return;
      const { value, label } = this;

      this[RELATION_MAP.SideBarItem]?.doChange({ value, label });
    },
  },
});

</script>
<style scoped>
@import './side-bar-item.css';

</style>

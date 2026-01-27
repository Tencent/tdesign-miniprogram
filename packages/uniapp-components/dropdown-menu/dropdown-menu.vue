<template>
  <view
    id="t-bar"
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + tClass"
    @touchmove.stop.prevent="parseEventDynamicCode($event, activeIdx === -1 ? '' : 'noop')"
  >
    <view
      v-for="(item, index) in menus"
      :key="index"
      :data-index="index"
      :class="
        tools.cls(classPrefix + '__item', [
          ['active', activeIdx == index],
          ['disabled', item.disabled],
          [index, true]
        ]) +
          ' ' +
          tClassItem
      "
      :aria-disabled="item.disabled"
      aria-role="button"
      :aria-expanded="activeIdx === index"
      aria-haspopup="menu"
      @click="handleToggle(index)"
    >
      <view :class="classPrefix + '__title ' + tClassLabel">
        {{ item.label }}
      </view>

      <block
        v-if="_arrowIcon"
        name="icon"
      >
        <t-icon
          :custom-style="_arrowIcon.style || ''"
          :t-class="getIconTClass(index)"
          :class="getIconClass(index)"
          :prefix="_arrowIcon.prefix"
          :name="_arrowIcon.name"
          :size="_arrowIcon.size"
          :color="_arrowIcon.color"
          :aria-hidden="true"
          :aria-label="_arrowIcon.ariaLabel"
          :aria-role="_arrowIcon.ariaRole"
          @click="_arrowIcon.click || ''"
        />
      </block>
    </view>
    <slot />
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { calcIcon } from '../common/utils';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';
import { parseEventDynamicCode } from '../common/event/dynamic';
import { canUseVirtualHost } from '../common/version';


const name = `${prefix}-dropdown-menu`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-item`,
    `${prefix}-class-label`,
    `${prefix}-class-icon`,
  ],
  mixins: [ParentMixin(RELATION_MAP.DropdownItem)],
  components: {
    TIcon,
  },
  props: {
    ...props,
  },
  emits: ['close', 'open'],
  data() {
    return {
      prefix,
      classPrefix: name,
      menus: null,
      activeIdx: -1,
      bottom: 0,
      _arrowIcon: {
        name: props.arrowIcon.default,
      },
      tools,
    };
  },
  watch: {
    arrowIcon: {
      handler(v) {
        this._arrowIcon = calcIcon(v);
      },
      immediate: true,
    },

    activeIdx(v) {
      this.$emit(v === -1 ? 'close' : 'open');
    },
  },
  mounted() {
    this.getAllItems();
  },
  methods: {
    getIconTClass(index) {
      return canUseVirtualHost() ? this.getIconRealClass(index) : '';
    },
    getIconClass(index) {
      return !canUseVirtualHost() ? this.getIconRealClass(index) : '';
    },
    getIconRealClass(index) {
      const { classPrefix, activeIdx, tClassIcon } = this;
      return `${classPrefix}__icon ${classPrefix}__icon--${activeIdx == index ? 'active ' : ' '}${tClassIcon}`;
    },
    parseEventDynamicCode,
    toggle(index) {
      const { activeIdx, duration } = this;
      const prevItem = this.children[activeIdx];
      const currItem = this.children[index];

      if (currItem?.disabled) return;

      if (activeIdx !== -1) {
        prevItem.$emit('close');
        prevItem.show = false;

        setTimeout(() => {
          prevItem.$emit('closed');
        }, duration);
      }

      if (index == null || activeIdx === index) {
        this.activeIdx = -1;
      } else {
        currItem.$emit('open');
        this.activeIdx = index;

        currItem.show = true;

        setTimeout(() => {
          currItem.$emit('opened');
        }, duration);
      }
    },
    getAllItems() {
      const menus = this.children?.map(data => ({
        label: data.label || data.computedLabel,
        disabled: data.disabled,
      }));

      this.menus = menus;
    },
    handleToggle(index) {
      this.toggle(index);
    },

    noop() {},
  },
});
</script>
<style scoped>
@import './dropdown-menu.css';
</style>
<style scoped>
:deep(.t-dropdown-menu__icon) {
  font-size: var(--td-dropdown-menu-icon-size, 20px);
  padding: 2px;
  box-sizing: border-box;
  transition: transform 240ms ease;
}
:deep(.t-dropdown-menu__icon)--active {
  transform: rotate(180deg);
}
:deep(.t-dropdown-menu__icon):not(:empty) {
  margin-left: 4px;
}
</style>

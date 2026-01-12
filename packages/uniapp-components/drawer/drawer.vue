<template>
  <view>
    <t-popup
      v-if="!destroyOnClose || dataVisible"
      :custom-style="tools._style([customStyle])"
      :visible="dataVisible"
      :z-index="zIndex"
      :using-custom-navbar="usingCustomNavbar"
      :custom-navbar-height="customNavbarHeight"
      :placement="placement == 'right' ? 'right' : 'left'"
      :show-overlay="showOverlay"
      :close-on-overlay-click="closeOnOverlayClick"
      @visible-change="visibleChange"
    >
      <view :class="classPrefix">
        <slot name="title" />
        <view
          v-if="title"
          :class="classPrefix + '__title'"
        >
          {{ title }}
        </view>
        <scroll-view
          :class="classPrefix + '__sidebar'"
          scroll-y
          type="list"
        >
          <view
            v-for="(item, index) in items"
            :key="index"
            :class="classPrefix + '__sidebar-item'"
            :hover-class="classPrefix + '--hover'"
            :hover-start-time="0"
            :hover-stay-time="100"
            wx:item="item"
            :data-item="item"
            :data-index="index"
            :aria-role="ariaRole || 'button'"
            :aria-label="item.title"
            @click="itemClick"
          >
            <view
              v-if="item.icon"
              :aria-hidden="true"
              :class="classPrefix + '__sidebar-item-icon'"
            >
              <t-icon :name="item.icon" />
            </view>

            <view :class="classPrefix + '__sidebar-item-title'">
              {{ item.title }}
            </view>
          </view>
        </scroll-view>
        <view :class="classPrefix + '__footer'">
          <slot />
          <slot name="footer" />
        </view>
      </view>
    </t-popup>
  </view>
</template>
<script>
import tPopup from '../popup/popup';
import tIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';
import tools from '../common/utils.wxs';


const name = `${prefix}-drawer`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  mixins: [
    useCustomNavbar,
  ],
  components: {
    tPopup,
    tIcon,
  },
  props: {
    ...props,
  },
  emits: [
    'update:visible',
    'close',
    'overlay-click',
    'item-click',
  ],
  data() {
    return {
      classPrefix: name,
      tools,
      dataVisible: coalesce(this.visible, this.defaultVisible),
    };
  },
  watch: {
    visible(e) {
      this.dataVisible = e;
    },
  },
  methods: {
    // closeOnOverlayClick 为 true 时才能触发 popup 的 visible-change 事件
    visibleChange(detail) {
      const { visible } = detail;
      const { showOverlay } = this;

      this.dataVisible = visible;

      if (!visible) {
        this.$emit('close', { trigger: 'overlay' });
      }

      if (showOverlay) {
        this.$emit('overlay-click', { visible });
      }
      this.$emit('update:visible', visible);
    },

    itemClick(detail) {
      const { index, item } = detail.currentTarget.dataset;

      this.$emit('item-click', { index, item });
    },
  },
});
</script>
<style scoped>
@import './drawer.css';
</style>

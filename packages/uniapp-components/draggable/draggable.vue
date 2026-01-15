<template>
  <view
    :class="[classPrefix, tClass]"
    :style="tools._style([customStyle])"
    @touchstart="onTouchStart"
    @touchmove.stop.prevent="onTouchMove"
    @touchend="onTouchEnd"
  >
    <slot />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getRect, getWindowInfo } from '../common/utils';
import tools from '../common/utils.wxs';


const name = `${prefix}-draggable`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  props: {
    ...props,
  },
  emits: [
    'move',
    'start',
    'end',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,
      systemInfo: getWindowInfo(),
    };
  },
  mounted() {
    this.computedRect();
  },
  methods: {
    onTouchStart(e) {
      const { systemInfo } = this;
      if (this.direction === 'none') return;
      this.startX = e.touches[0].clientX + systemInfo.windowWidth - this.rect.right;
      this.startY = e.touches[0].clientY + systemInfo.windowHeight - this.rect.bottom;
      this.$emit('start', { startX: this.startX, startY: this.startY, rect: this.rect, e });
    },

    onTouchMove(e) {
      const { systemInfo } = this;

      if (this.direction === 'none') return;
      let x = this.startX - e.touches[0].clientX; // x轴移动偏移量
      let y = this.startY - e.touches[0].clientY; // y轴移动偏移量


      if (this.direction === 'vertical') {
        x = systemInfo.windowWidth - this.rect.right;
      }
      if (this.direction === 'horizontal') {
        y = systemInfo.windowHeight - this.rect.bottom;
      }

      this.$emit('move', { x, y, rect: this.rect, e });
    },

    async onTouchEnd(e) {
      if (this.direction === 'none') return;
      await this.computedRect();
      this.$emit('end', { rect: this.rect, e });
    },

    async computedRect() {
      this.rect = { right: 0, bottom: 0, width: 0, height: 0 };
      try {
        this.rect = await getRect(this, `.${this.classPrefix}`);
      } catch (e) {
        // ignore reject
      }
    },
  },
});
</script>
<style scoped>
@import './draggable.css';
</style>

<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [layout, ['readonly', readonly], sequence]) + ' ' + tClass"
  >
    <slot />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-steps`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'current',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [ParentMixin(RELATION_MAP.StepItem)],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,

      dataCurrent: this.current,
    };
  },
  watch: {
    current: {
      handler(v) {
        this.dataCurrent = v;
      },
      immediate: true,
    },
    dataCurrent: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
    theme: 'updateChildren',
    sequence: 'updateChildren',
  },
  mounted() {

  },
  methods: {
    innerAfterLinked(child) {
      this.updateChildren();

      const { readonly } = this;

      child.readonly = readonly;
    },
    innerAfterUnlinked() {
      this.updateLastChid();
    },
    updateChildren() {
      const items = this.children;
      const {
        dataCurrent, currentStatus, theme, layout, sequence,
      } = this;

      items?.forEach((item, index) => {
        item.updateStatus({
          index,
          items,

          current: dataCurrent,
          currentStatus,
          theme,
          layout,
          sequence,
        });
      });
    },
    updateLastChid() {
      const items = this.children;

      items.forEach((child, index) => child.isLastChild = index === items.length - 1);
    },
    handleClick(index) {
      if (!this.readonly) {
        const preIndex = this.dataCurrent;
        this._trigger('change', {
          previous: preIndex,
          current: index,
        });
      }
    },
  },
});
</script>
<style scoped>
@import './steps.css';

/* #ifndef MP-WEIXIN */
/* 适配 qq 小程序等 */
:deep(t-step-item) {
  flex: 1;
}
/* #endif */
</style>

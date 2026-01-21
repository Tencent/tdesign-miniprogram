<template>
  <view
    :class="prefix + '-row'"
    :style="getRowStyles(gutter, customStyle)"
  >
    <slot />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { getRowStyles } from './computed.js';
import { ParentMixin, RELATION_MAP } from '../common/relation';

const name = `${prefix}-row`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  mixins: [ParentMixin(RELATION_MAP.Col)],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      tools,
    };
  },
  watch: {
    gutter: {
      handler() {
        this.setGutter();
      },
      immediate: true,
    },
  },
  methods: {
    getRowStyles,
    innerAfterLinked() {
      this.setGutter();
    },
    setGutter() {
      const {
        gutter,
      } = this;

      this.children?.forEach((o) => {
        o.gutter = gutter;
      });
    },
  },
});

</script>
<style scoped>
@import './row.css';
</style>

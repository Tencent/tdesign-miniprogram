<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [theme]) + ' ' + tClass"
  >
    <view
      v-if="column > 0"
      :class="classPrefix + '__content'"
      :style="contentStyle"
    >
      <slot />
    </view>
    <scroll-view
      v-else
      scroll-x
      scroll-with-animation
      :class="classPrefix + '__content'"
      :style="'white-space: nowrap;' + contentStyle"
    >
      <slot />
    </scroll-view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { isObject } from '../common/validator';
import props from './props';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-grid`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: ['t-class'],
  mixins: [ParentMixin(RELATION_MAP.GridItem)],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      contentStyle: '',
      tools,
    };
  },
  watch: {
    column: 'watchCallback',
    hover: 'watchCallback',
    align: 'watchCallback',
    gutter: 'watchCallback',
    border: 'watchCallback',
  },
  mounted() {
    this.updateContentStyle();
  },
  methods: {
    watchCallback() {
      this.updateContentStyle();
      this.doForChild(t => t.updateStyle?.());
    },
    doForChild(action) {
      this.children?.forEach(action);
    },
    updateContentStyle() {
      const contentStyles = [];
      const marginStyle = this.getContentMargin();
      marginStyle && contentStyles.push(marginStyle);
      this.contentStyle = contentStyles.join(';');
    },

    // 判断需不需要在content上加负margin以实现gutter间距
    getContentMargin() {
      const { gutter } = this;
      let { border } = this;

      if (!border) return `margin-bottom:-${gutter}rpx; margin-right:-${gutter}rpx`;
      if (!isObject(border)) border = {} ;
      const { width = 2 } = border ;
      return `margin-bottom:-${width}rpx; margin-right:-${width}rpx`;
    },
  },
});
</script>
<style scoped>
@import './grid.css';
</style>

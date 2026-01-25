<template>
  <view
    :class="[
      tClass,
      tools.cls(classPrefix, [span]),
      (offset ? classPrefix + '--offset-' + offset : '')
    ]"
    :style="getColStyles(gutter, customStyle)"
  >
    <slot />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { getColStyles } from './computed.js';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';

const name = `${prefix}-col`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
    virtualHost: true,
  },
  externalClasses: [`${prefix}-class`],
  mixins: [ChildrenMixin(RELATION_MAP.Col)],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,
      gutter: '',
    };
  },
  methods: {
    getColStyles,
  },
});

</script>
<style scoped>
@import './col.css';
</style>
<style scoped>
.t-col {
  /* 适配 qq 小程序等 */
  display: unset;
  float: left;
}
</style>

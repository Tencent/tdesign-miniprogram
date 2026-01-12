<template>
  <view
    :class="classPrefix + ' ' + tClass"
    :style="tools._style([customStyle])"
  >
    <view
      :class="
        tools.cls(classPrefix + '__wrapper', [
          ['sticky', sticky],
          ['active', active]
        ])
      "
      :style="anchorStyle"
    >
      <view :class="classPrefix + '__slot'">
        <slot />
      </view>
      <view :class="tools.cls(classPrefix + '__header', [['active', active]])">
        {{ index }}
      </view>
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-indexes-anchor`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [
    ChildrenMixin(RELATION_MAP.IndexesAnchor, {
      indexKey: 'tIndex',
    }),
  ],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      anchorStyle: '',
      sticky: false,
      active: false,
      tools,
    };
  },
  watch: {
  },
  mounted() {

  },
  methods: {

  },
});
</script>
<style scoped>
@import './indexes-anchor.css';
</style>

<template>
  <view
    :class="classPrefix + ' ' + tClass"
    :style="tools._style([customStyle])"
  >
    <slot />
    <view :class="classPrefix + '__padding'" />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import props from './props';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-side-bar`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'value',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [ParentMixin(RELATION_MAP.SideBarItem)],
  props: {
    ...props,
  },
  emits: [
    'click',
    'change',
  ],
  data() {
    return {
      classPrefix: name,
      prefix,
      tools,

      dataValue: coalesce(this.value, this.defaultValue),
    };
  },
  watch: {
    value: {
      handler(e) {
        this.dataValue = e;
      },
      immediate: true,
    },
    dataValue: {
      handler(v) {
        const sideBarItems = this.children || [];
        sideBarItems.forEach((item, index) => {
          item.updateActive(v);
          item.isFirstChild = index === 0;
          item.isLastChild = index === sideBarItems.length - 1;
        });
      },
      immediate: true,
    },
  },
  methods: {
    innerAfterUnLinked(child) {
      const index = this.children.findIndex(item => item === child);
      this.children.splice(index, 1);
    },
    doChange({ value, label }) {
      this._trigger('change', { value, label });
    },
  },
});
</script>
<style scoped>
@import './side-bar.css';
</style>

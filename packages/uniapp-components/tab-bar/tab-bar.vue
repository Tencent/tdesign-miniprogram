<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [
      ['border', bordered], ['fixed', fixed],
      ['safe', safeAreaInsetBottom], shape]
    ) + ' ' + tClass"
    aria-role="tablist"
  >
    <slot />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { coalesce } from '../common/utils';
import { ParentMixin, RELATION_MAP } from '../common/relation';
import tools from '../common/utils.wxs';

const classPrefix = `${prefix}-tab-bar`;


export default uniComponent({
  name: classPrefix,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [{
    key: 'value',
    event: 'change',
  }],
  externalClasses: [`${prefix}-class`],
  mixins: [ParentMixin(RELATION_MAP.TabBarItem)],
  props: {
    ...props,
  },
  emits: [
    'change',
  ],
  data() {
    return {
      prefix,
      classPrefix,
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
      handler() {
        this.updateChildren();
      },
      immediate: true,
    },
  },
  mounted() {
    this.showChildren();
  },
  methods: {
    showChildren() {
      const { dataValue } = this;

      this.children.forEach((child) => {
        this.crowded = this.children.length > 3;

        if (child.value === dataValue) {
          child.showSpread();
        }
      });
    },

    updateChildren() {
      const { dataValue } = this;

      this.children?.forEach((child) => {
        child.checkActive(dataValue);
      });
    },

    updateValue(value) {
      this._trigger('change', { value });
    },

    changeOtherSpread(value) {
      this.children.forEach((child) => {
        if (child.value !== value) {
          child.closeSpread();
        }
      });
    },

    initName() {
      return (this.backupValue += 1);
    },
  },
});
</script>
<style scoped>
@import './tab-bar.css';
/* #ifndef MP-WEIXIN */
:deep(t-tab-bar-item) {
  flex: 1;
}
/* #endif */
</style>

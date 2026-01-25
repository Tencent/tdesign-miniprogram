<template>
  <!-- #ifdef VUE2 -->
  <view>
    <!-- #endif -->
    <view
      v-if="fixed && placeholder"
      :class="classPrefix + '__placeholder'"
      :style="'height: ' + placeholderHeight + 'px;'"
    />
    <view
      :style="tools._style(['z-index: ' + zIndex, customStyle])"
      :class="tools.cls(classPrefix, [
        ['border', bordered], ['fixed', fixed],
        ['safe', safeAreaInsetBottom], shape]
      ) + ' ' + tClass"
      aria-role="tablist"
    >
      <slot />
    </view>
  <!-- #ifdef VUE2 -->
  </view>
  <!-- #endif -->
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { coalesce, getRect, nextTick } from '../common/utils';
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
    'fixed'() {
      this.setPlaceholderHeight();
    },
    placeholder() {
      this.setPlaceholderHeight();
    },
  },
  mounted() {
    this.setPlaceholderHeight();
    this.showChildren();
  },
  methods: {
    setPlaceholderHeight() {
      if (!this.fixed || !this.placeholder) {
        return;
      }
      nextTick().then(() => {
        getRect(this, `.${classPrefix}`).then((res) => {
          this.placeholderHeight = res.height;
        });
      });
    },
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

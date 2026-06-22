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
      :style="'' + tools._style(['z-index: ' + zIndex, customStyle])"
      :class="
        '' +
        tools.cls(classPrefix, [['border', bordered], ['fixed', fixed], ['safe', safeAreaInsetBottom], shape]) +
        ' ' +
        tClass
      "
      aria-role="tablist"
    >
      <slot />
    </view>
    <!-- #ifdef VUE2 -->
  </view>
  <!-- #endif -->
</template>
<script>
import { prefix } from '../common/config';

import { ParentMixin, RELATION_MAP } from '../common/relation';
import { uniComponent } from '../common/src/index';
import { coalesce, getRect, nextTick, getWindowInfo } from '../common/utils';
import tools from '../common/utils.wxs';

import props from './props';

const classPrefix = `${prefix}-tab-bar`;

/** 获取底部安全区高度（home indicator 区） */
function getSafeAreaBottom() {
  try {
    const info = getWindowInfo();
    if (info && info.safeArea && typeof info.screenHeight === 'number') {
      return Math.max(0, info.screenHeight - info.safeArea.bottom);
    }
  } catch (e) {
    // ignore
  }
  return 0;
}

export default {
  ...uniComponent({
    name: classPrefix,
    options: {
      styleIsolation: 'shared',
    },
    controlledProps: [
      {
        key: 'value',
        event: 'change',
      },
    ],
    externalClasses: [`${prefix}-class`],
    mixins: [ParentMixin(RELATION_MAP.TabBarItem)],
    props: {
      ...props,
    },
    emits: ['change'],
    data() {
      return {
        prefix,
        classPrefix,
        tools,

        dataValue: coalesce(this.value, this.defaultValue),
        placeholderHeight: 56,
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
      fixed() {
        this.setPlaceholderHeight();
      },
      placeholder() {
        this.setPlaceholderHeight();
      },
      shape() {
        this.setPlaceholderHeight();
      },
      safeAreaInsetBottom() {
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
            let { height } = res;
            // round 形态使用 `bottom: env(safe-area-inset-bottom)` 上抬整个 bar，
            // getBoundingClientRect 拿到的高度不包含这部分上抬量，需要手动补上，
            // 否则 placeholder 占位高度会少一个底部安全区，导致页面内容被遮挡。
            // normal 形态使用 `padding-bottom: env(safe-area-inset-bottom)`，
            // 安全区已包含在元素自身高度中，无需重复补。
            if (this.shape === 'round' && this.safeAreaInsetBottom) {
              height += getSafeAreaBottom();
            }
            this.placeholderHeight = height;
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
  }),
};
</script>
<style scoped src="./tab-bar.css"></style>
<style scoped>
/* #ifndef MP-WEIXIN */
:deep(t-tab-bar-item) {
  flex: 1;
}
/* #endif */
</style>

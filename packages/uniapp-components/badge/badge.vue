<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + (useOuterClass ? classPrefix + '__' + shape + '-outer' : '') + tClass"
    :aria-labelledby="labelID"
    :aria-describedby="descriptionID"
    :aria-role="ariaRole || 'option'"
  >
    <view
      :id="labelID"
      :class="tools.cls(classPrefix + '__content', [['empty', !content && !hasChild]]) + ' ' + tClassContent"
      :aria-hidden="true"
    >
      <!-- #ifdef H5 -->

      <slot
        v-if="!content"
        :class="classPrefix + '__content-slot'"
      />
      <!-- #endif -->

      <!-- 小程序下在 slot 下加 :class 属性，会导致渲染失败 -->
      <!-- #ifndef H5 -->
      <slot
        v-if="!content"
      />
      <!-- #endif -->

      <text
        v-else
        :class="classPrefix + '__content-text'"
      >
        {{ content }}
      </text>
    </view>
    <view
      v-if="isShowBadge({ dot, count, showZero }) || count === null"
      :id="descriptionID"
      :aria-hidden="true"
      :aria-label="ariaLabel || tools.getBadgeAriaLabel({ dot, count, maxCount })"
      :class="[
        getBadgeInnerClass({ classPrefix, dot, size, shape, count }) + ' ' + prefix + '-has-count ',
        tClassCount
      ]"
      :style="tools._style([getBadgeStyles({ color, offset })])"
    >
      <view :class="classPrefix + '__count'">
        <template v-if="isShowBadge({ dot, count, showZero })">
          {{ getBadgeValue({ dot, count, maxCount }) }}
        </template>
        <slot
          else
          name="count"
        />
      </view>
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { uniqueFactory, getRect } from '../common/utils';
import tools from '../common/utils.wxs';

import {
  getBadgeValue,
  getBadgeStyles,
  getBadgeInnerClass,
  isShowBadge,
} from './computed.js';


const name = `${prefix}-badge`;
const getUniqueID = uniqueFactory('badge');


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-count`,
    `${prefix}-class-content`,
  ],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      value: '',
      labelID: '',
      descriptionID: '',
      tools,
      useOuterClass: false,
    };
  },
  computed: {
    hasChild() {
      return !!this.$slots?.default;
    },
  },
  mounted() {
    const e = getUniqueID();
    this.labelID = `${e}_label`;
    this.descriptionID = `${e}_description`;
    this.checkForActualContent();
  },
  methods: {
    getBadgeValue,
    getBadgeStyles,
    getBadgeInnerClass,
    isShowBadge,
    checkForActualContent() {
      const target = ['ribbon', 'ribbon-right', 'ribbon-left', 'triangle-right', 'triangle-left'];
      if (this.content || !target.includes(this.shape)) {
        this.useOuterClass = false;
        return;
      }
      return getRect(this, `.${name}__content`).then((rect) => {
        const hasSlotContent = rect.width > 0 || rect.height > 0;
        this.useOuterClass = !hasSlotContent;
      });
    },
  },
});
</script>
<style scoped>
@import './badge.css';
</style>

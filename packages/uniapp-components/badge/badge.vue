<template>
  <view
    :style="tools._style([customStyle])"
    :class="[
      getBadgeOuterClass({ shape }),
      tClass
    ]"
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
      v-if="isShowBadge({ dot, count, showZero })"
      :id="descriptionID"
      :aria-hidden="true"
      :aria-label="ariaLabel || tools.getBadgeAriaLabel({ dot, count, maxCount })"
      :class="[
        getBadgeInnerClass({ dot, size, shape, count }) + ' ' + prefix + '-has-count ',
        tClassCount
      ]"
      :style="tools._style([getBadgeStyles({ color, offset })])"
    >
      {{ getBadgeValue({ dot, count, maxCount }) }}
    </view>
    <slot name="count" />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { uniqueFactory } from '../common/utils';
import tools from '../common/utils.wxs';

import {
  getBadgeValue,
  getBadgeStyles,
  getBadgeOuterClass,
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
  },
  methods: {
    getBadgeValue,
    getBadgeStyles,
    getBadgeOuterClass,
    getBadgeInnerClass,
    isShowBadge,
  },
});
</script>
<style scoped>
@import './badge.css';
</style>

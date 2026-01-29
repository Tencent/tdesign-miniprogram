<template>
  <view
    :class="classPrefix"
    :style="_._style([customStyle])"
  >
    <!-- 动态加载动画 -->
    <view
      v-if="animation !== 'skeleton'"
      :class="classPrefix + '__icon ' + (animation === 'dots' ? '' : classPrefix + '__icon--with-padding')"
    >
      <block v-if="animation === 'moving'">
        <view :class="classPrefix + '__moving'">
          <view :class="classPrefix + '__moving--top'" />
          <view :class="classPrefix + '__moving--left'" />
          <view :class="classPrefix + '__moving--right'" />
        </view>
      </block>

      <block v-if="animation === 'gradient'">
        <view :class="classPrefix + '__gradient'" />
      </block>

      <view
        v-if="animation === 'dots'"
        :class="classPrefix + '__dots'"
      >
        <t-loading
          theme="dots"
          size="60rpx"
        />
      </view>
    </view>
    <block v-if="animation === 'skeleton'">
      <view :class="classPrefix + '__skeleton'">
        <t-skeleton
          :row-col="[1, 1, 1, { width: '80%' }]"
          theme="paragraph"
          animation="gradient"
          loading
        />
      </view>
    </block>
    <!-- 文本内容 -->
    <view
      v-if="text"
      :class="classPrefix + '__text'"
    >
      {{ text }}
    </view>
  </view>
</template>
<script>
import tSkeleton from '@tdesign/uniapp/skeleton/skeleton.vue';
import tLoading from '@tdesign/uniapp/loading/loading.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import { uniComponent } from '@tdesign/uniapp/common/src/index';

import props from './props';
import _ from '@tdesign/uniapp/common/utils.wxs';


const name = `${prefix}-chat-loading`;


export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    tSkeleton,
    tLoading,
  },

  props: {
    ...props,
  },

  data() {
    return {
      classPrefix: name,
      _,
    };
  },
});
</script>
<style scoped>
@import './chat-loading.css';
</style>

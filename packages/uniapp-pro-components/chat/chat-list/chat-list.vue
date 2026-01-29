<template>
  <view
    :class="[classPrefix, classes]"
    :style="_._style([customStyle])"
  >
    <scroll-view
      :class="_.cls(classPrefix + '__content', [['reverse', reverse]])"
      :scroll-y="true"
      :enable-flex="true"
      :enhanced="true"
      :scroll-with-animation="true"
      :scroll-top="scrollViewTop"
      data-ref="chatListRef"
      @scroll="onScroll"
      @scrolltoupper="handlerScrollToUpper"
      @scrolltolower="handlerScrollToLower"
    >
      <block v-if="reverse">
        <view class="placeholder" />
      </block>
      <!-- /**
        * 1. 两种方式获取要渲染的 list
        *  a. props 传 data
        *  b. slots t-chat-message
        * a 优先级更高
        */ -->
      <block v-if="data && data.length > 0">
        <block
          v-for="(item, index) in data"
          :key="index"
        >
          <chat-message
            v-if="virtualList ? index >= startIndex && index <= endIndex : true"
            :avatar="item.avatar || ''"
            :name="item.name || ''"
            :datetime="item.datetime || ''"
            :content="item.content"
            :placement="layout === 'both' ? (item.role === 'user' ? 'right' : 'left') : 'left'"
            :animation="animation"
            :status="item.status || ''"
          />
        </block>
      </block>
      <slot v-else />
    </scroll-view>
    <view :class="classPrefix + '__footer'">
      <slot name="footer" />
    </view>
  </view>
</template>
<script>
import ChatMessage from '../chat-message/chat-message.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import props from './props';

import _ from '@tdesign/uniapp/common/utils.wxs';
import { uniComponent } from '@tdesign/uniapp/common/src/index';


const name = `${prefix}-chat-list`;


export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    ChatMessage,
  },

  props: {
    ...props,
    virtualList: {
      type: Boolean,
      default: false,
    },
    fragmentLen: {
      type: Number,
      default: 8,
    },
  },

  data() {
    return {
      classPrefix: name,
      scrollViewTop: 0,
      classes: [],
      listClasses: [],
      startIndex: 0,
      endIndex: 0,
      _,
    };
  },

  watch: {
    data: {
      handler() {
        const dataLen = this.data ? this.data.length : 0;
        if (this.virtualList && this.oldDataLen !== dataLen) {
          this.oldDataLen = dataLen;
          this.resetFragments();
        }
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    setScrollTop(scrollTop = 0) {
      if (scrollTop === this.scrollViewTop) {
        // eslint-disable-next-line no-param-reassign
        scrollTop -= 1;
      }
      this.scrollViewTop = scrollTop;
    },
    scrollToBottom() {
      // reverse 为 true 时，滚动到 0 即为底部
      // reverse 为 false 时，需要滚动到一个很大的值才能到底部
      const scrollTop = this.reverse ? 0 : 999999;
      this.setScrollTop(scrollTop);
    },
    onScroll(e) {
      this.$emit('scroll', e);
    },

    handlerScrollToUpper() {
      if (!this.reverse && this.virtualList) {
        this.addFragment();
      }
    },

    handlerScrollToLower() {
      if (this.reverse && this.virtualList) {
        this.addFragment();
      }
    },

    resetFragments() {
      const dataLen = this.data && this.data.length;
      if (dataLen) {
        const { fragmentLen } = this;
        if (this.reverse) {
          this.startIndex = 0;
          this.endIndex = Math.min(dataLen - 1, fragmentLen - 1);
        } else {
          this.startIndex = Math.max(dataLen - fragmentLen, 0);
          this.endIndex = Math.max(dataLen - 1, 0);
        }
      }
    },

    addFragment(count = 4) {
      const dataLen = this.data && this.data.length;
      if (dataLen) {
        if (this.reverse) {
          this.endIndex = Math.min(dataLen - 1, this.endIndex + count);
        } else {
          this.startIndex = Math.max(this.startIndex - count, 0);
          // todo 正向布局自动滚动到原来位置？
        }
      }
    },
  },

});
</script>
<style scoped>
@import './chat-list.css';

/* #ifdef H5 || APP-PLUS */
.t-chat-list__content :deep(.uni-scroll-view-content) {
  display: flex;;
  flex-direction: column;
}
/* #endif */
</style>

<template>
  <view class="chat-example-block">
    <t-segmented
      :options="segmentedOptions"
      :value="segmentedValue"
      style="margin-bottom: 16px"
      @change="handleSegmentChange"
    />
    <scroll-view
      class="chat-example-scroll"
      scroll-y
    >
      <!-- 光标：默认内置 tail 组件 -->
      <t-chat-markdown
        v-if="segmentedValue === 'cursor'"
        :content="content"
        :streaming="streaming"
        @click="handleNodeTap"
      />
      <!-- 无动画：不传 streaming -->
      <t-chat-markdown
        v-else-if="segmentedValue === 'no-animation'"
        :content="content"
        @click="handleNodeTap"
      />
    </scroll-view>
  </view>
</template>

<script>
import TSegmented from '@tdesign/uniapp/segmented/segmented.vue';

import TChatMarkdown from '@tdesign/uniapp-chat/chat-markdown/chat-markdown.vue';

import markdownData from '../base/mock2.js';

const CHUNK_SIZE = 1;
const INTERVAL_MS = 100;

export default {
  components: {
    TChatMarkdown,
    TSegmented,
  },
  data() {
    return {
      content: '',
      streaming: { hasNextChunk: false, tail: true },
      segmentedOptions: [
        { value: 'cursor', label: '光标' },
        { value: 'no-animation', label: '无动画' },
      ],
      segmentedValue: '',
      timer: null,
    };
  },

  methods: {
    startStreaming() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }

      this.content = '';

      if (this.segmentedValue === 'no-animation') {
        let index = 0;
        this.timer = setInterval(() => {
          index += CHUNK_SIZE;
          const isDone = index >= markdownData.length;
          this.content = markdownData.slice(0, index);
          if (isDone) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, INTERVAL_MS);
        return;
      }

      this.streaming = { hasNextChunk: true, tail: true };
      let index = 0;
      this.timer = setInterval(() => {
        index += CHUNK_SIZE;
        const isDone = index >= markdownData.length;
        this.content = markdownData.slice(0, index);
        this.streaming = { hasNextChunk: !isDone, tail: true };
        if (isDone) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, INTERVAL_MS);
    },
    handleSegmentChange(e) {
      this.segmentedValue = e.value;
      this.$nextTick(() => {
        this.startStreaming();
      });
    },
    handleNodeTap(e) {
      const { node } = e;
      if (node && node.type === 'image') {
        uni.previewImage({ urls: [node.href], current: node.href });
      }
    },
  },
};
</script>
<style>
.chat-example-block {
  background-color: var(--td-bg-color-container);
  padding: 32rpx;
}

.chat-example-scroll {
  height: 800rpx;
  margin-top: 16rpx;
  padding: 16rpx;
  width: 95%;
  border: 1rpx solid gray;
}
</style>

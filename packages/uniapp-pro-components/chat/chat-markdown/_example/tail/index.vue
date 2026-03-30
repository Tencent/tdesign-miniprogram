<template>
  <view class="chat-example-block">
    <t-chat-markdown
      :content="content"
      :streaming="streaming"
      @click="handleNodeTap"
    />
    <button
      style="margin-top: 16px"
      @tap="handleReplay"
    >
      重新播放
    </button>
  </view>
</template>

<script>
import TChatMarkdown from '@tdesign/uniapp-chat/chat-markdown/chat-markdown.vue';
import markdownData from '../base/mock2.js';

const CHUNK_SIZE = 5;
const INTERVAL_MS = 80;

export default {
  components: {
    TChatMarkdown,
  },
  data() {
    return {
      content: '',
      streaming: { hasNextChunk: false, tail: true },
    };
  },
  mounted() {
    this.startStreaming();
  },
  methods: {
    startStreaming() {
      let index = 0;
      this.content = '';
      this.streaming = { hasNextChunk: true, tail: true };

      const timer = setInterval(() => {
        index += CHUNK_SIZE;
        const isDone = index >= markdownData.length;
        this.content = markdownData.slice(0, index);
        this.streaming = { hasNextChunk: !isDone, tail: true };
        if (isDone) clearInterval(timer);
      }, INTERVAL_MS);
    },
    handleReplay() {
      this.startStreaming();
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
</style>

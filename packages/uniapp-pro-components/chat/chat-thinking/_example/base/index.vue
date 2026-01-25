<template>
  <view class="chat-example-block">
    <t-chat-thinking
      :content="content"
      layout="block"
      :status="status"
      animation="moving"
      @expandChange="handleExpandChange"
    />
  </view>
</template>

<script>
import TChatThinking from 'tdesign-uniapp-chat/chat-thinking/chat-thinking.vue';


export default {
  components: {
    TChatThinking,
  },
  data() {
    return {
      thinking: true,
      fullText:
                '嗯，用户问牛顿第一定律是不是适用于所有参考系。首先，我得先回忆一下牛顿第一定律的内容。牛顿第一定律，也就是惯性定律，说物体在没有外力作用时会保持静止或匀速直线运动。也就是说， 保持原来的运动状态。',
      currentText: '',
      isTyping: true,
      content: {
        text: '',
        title: '思考过程',
      },
      typeSpeed: 50,
      status: 'pending',
      startTime: 0,
    };
  },
  mounted() {
    // 处理小程序 attached 生命周期
    this.attached();
  },
  unmounted() {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  },
  created() {},
  methods: {
    attached() {
      this.startTime = Date.now();

      this.startTyping();
    },

    startTyping() {
      const { fullText, typeSpeed } = this;
      let currentIndex = 0;
      const typeNextChar = () => {
        if (currentIndex <= fullText.length) {
          const currentText = fullText.substring(0, currentIndex);
          // 检查是否已经完成打字
          if (currentIndex === fullText.length) {
            const endTime = Date.now();
            const duration = Math.round((endTime - this.startTime) / 1000);

            this.currentText = currentText;
            this.content = {
              text: currentText,
              title: `已完成思考（耗时${duration}秒）`,
            };
            this.isTyping = false;
            this.status = 'complete';
            return; // 直接返回，不再继续执行
          }
          // 正常打字过程
          this.currentText = currentText;
          this.content = {
            text: currentText,
            title: '思考过程',
          };
          this.isTyping = currentIndex < fullText.length;
          if (currentIndex < fullText.length) {
            this.typingTimer = setTimeout(typeNextChar, typeSpeed);
          }
          currentIndex += 1;
        }
      };
      typeNextChar();
    },

    replayTyping() {
      if (this.typingTimer) {
        clearTimeout(this.typingTimer);
      }
      this.currentText = '';
      this.content = {
        text: '',
        title: '思考过程',
      };
      this.isTyping = true;
      this.startTime = Date.now();
      this.startTyping();
    },

    onStop() {
      console.log('停止思考');
      this.thinking = false;
      uni.showToast({
        title: '已停止思考',
        icon: 'success',
      });
    },

    toggleThinking() {
      this.thinking = !this.thinking;
    },

    resetThinking() {
      this.thinking = true;
      uni.showToast({
        title: '已重置',
        icon: 'success',
      });
    },

    handleExpandChange() {
      console.log('占位：函数 handleExpandChange 未声明');
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

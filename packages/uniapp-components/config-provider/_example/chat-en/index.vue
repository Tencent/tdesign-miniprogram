<template>
  <t-config-provider
    :global-config="globalConfig"
    :theme-vars="themeVars"
  >
    <view class="chat-demo">
      <t-chat-thinking
        :content="content"
        layout="block"
        :status="status"
        animation="moving"
        @expandChange="handleExpandChange"
      />
    </view>
  </t-config-provider>
</template>

<script>
import TConfigProvider from '@tdesign/uniapp/config-provider/config-provider.vue';
import TChatThinking from '@tdesign/uniapp-chat/chat-thinking/chat-thinking.vue';
import enUS from '@tdesign/uniapp/locale/en_US';

export default {
  components: {
    TConfigProvider,
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
      },
      typeSpeed: 50,
      status: 'pending',
      startTime: 0,

      // 全部配置
      globalConfig: enUS,
      themeVars: {
        buttonPrimaryBorderColor: '#ff6b00',
        'button-primary-color': '#ff6b00',
        'button-primary-bg-color': '#ff6a0094',
      },
    };
  },
  mounted() {
    this.startTime = Date.now();
    this.startTyping();
  },
  beforeUnmount() {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  },
  methods: {
    startTyping() {
      const { fullText, typeSpeed } = this;
      let currentIndex = 0;
      const typeNextChar = () => {
        if (currentIndex <= fullText.length) {
          const currentText = fullText.substring(0, currentIndex);
          // 检查是否已经完成打字
          if (currentIndex === fullText.length) {
            this.currentText = currentText;
            this.content = { text: currentText };
            this.isTyping = false;
            this.status = 'complete';
            return;
          }
          // 正常打字过程
          this.currentText = currentText;
          this.content = { text: currentText };
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
      this.content = { text: '' };
      this.isTyping = true;
      this.startTime = Date.now();
      this.startTyping();
    },
    handleExpandChange() {
      console.log('expandChange');
    },
  },
};
</script>

<style>
.chat-demo {
  background-color: var(--td-bg-color-container);
  padding: 32rpx;
}
</style>

<template>
  <view class="demo-base-container">
    <!-- 聊天发送器组件 -->
    <view class="chat-sender-demo-wrapper">
      <view class="chat-sender-height-limit">
        <view class="chat-sender-height-left-limit" />
        <view class="chat-sender-height-right-limit" />
      </view>
      <view class="chat-sender-placeholder"> 高度限制：最大高度为132px </view>
      <view class="chat-sender-wrapper">
        <t-chat-sender
          v-model="query"
          :loading="loading"
          :placeholder="placeholder"
          :textarea-props="textareaProps"
          :allow-speech="allowSpeech"
          :render-presets="renderPresets"
          @send="onSend"
          @keyboardheightchange="onKeyboardHeightChange"
        >
          <!-- 语音输入模式 -->
          <template #speech>
            <t-chat-record style="margin: 10px 0" @recognize="handleRecognize" @error="handleRecordError">
              <template #speechInput>
                <view class="speech-slot-btn"> 按住说话 </view>
              </template>
              <template #speechNoAuth>
                <view class="speech-btn-error"> 请授权麦克风权限 </view>
              </template>
            </t-chat-record>
          </template>
          <!-- 底部切换按钮 -->
          <template #footer-prefix>
            <view class="demo-footer-prefix">
              <view class="speech-block" @click="toggleSenderType">
                <t-icon :name="allowSpeech === 'speech' ? 'keyboard-1' : 'voice-wave'" size="40rpx" />
              </view>
            </view>
          </template>
        </t-chat-sender>
      </view>
      <view class="demo-footer"> 内容由AI生成，仅供参考 </view>
    </view>
  </view>
</template>

<script>
import TIcon from 'tdesign-uniapp/icon/icon.vue';

import tChatRecord from 'tdesign-uniapp-chat/chat-record/chat-record.vue';
import tChatSender from 'tdesign-uniapp-chat/chat-sender/chat-sender.vue';

export default {
  components: {
    tChatSender,
    tChatRecord,
    TIcon,
  },
  data() {
    return {
      query: '',
      placeholder: '请输入内容',
      textareaProps: {
        autosize: {
          maxHeight: 264,
          minHeight: 48,
        },
      },
      loading: false,
      allowSpeech: 'keyboard',
      renderPresets: [
        {
          name: 'send',
          type: 'icon',
        },
      ],
      keyboardHeight: 0,
    };
  },
  methods: {
    // 语音识别回调
    handleRecognize(voiceMsg) {
      console.log('语音识别结果:', voiceMsg);
      if (voiceMsg.voiceText) {
        // 将识别结果设置到输入框
        this.query = voiceMsg.voiceText;
        // 切回键盘模式
        this.allowSpeech = 'keyboard';
        // 自动发送
        this.onSend({ value: voiceMsg.voiceText });
      }
    },
    // 语音识别错误
    handleRecordError(err) {
      console.error('语音识别错误:', err);
    },
    // 切换输入模式
    toggleSenderType() {
      // 切换前先收起键盘
      if (uni.hideKeyboard) {
        uni.hideKeyboard();
      }
      this.allowSpeech = this.allowSpeech === 'keyboard' ? 'speech' : 'keyboard';
    },
    // 发送消息
    onSend({ value }) {
      if (!value || !value.trim()) return;
      console.log('发送消息:', value);
      this.loading = true;
      this.query = '';
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    // 键盘高度变化
    onKeyboardHeightChange(e) {
      const height = (e && e.height) || 0;
      this.keyboardHeight = height;
    },
  },
};
</script>
<style>
.demo-base-container {
  background-color: var(--td-bg-color-container);
  height: 360rpx;
  position: relative;
}

/* 聊天发送器包装器 */
.chat-sender-demo-wrapper {
  margin-bottom: 32rpx;
  border-radius: 8rpx;
  overflow: hidden;
}

.chat-sender-height-limit {
  height: 72rpx;
  padding: 0 24rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-sender-height-left-limit {
  height: 70rpx;
  width: 70rpx;
  border-top: 1px var(--td-component-stroke) dashed;
  border-left: 1px var(--td-component-stroke) dashed;
  border-top-left-radius: 32rpx;
}
.chat-sender-height-right-limit {
  height: 70rpx;
  width: 70rpx;
  border-top: 1px var(--td-component-stroke) dashed;
  border-right: 1px var(--td-component-stroke) dashed;
  border-top-right-radius: 32rpx;
}
.chat-sender-placeholder {
  font-size: 32rpx;
  font-weight: 600;
  color: var(--demo-chat-sender-placeholder);
  text-align: center;
  height: 48rpx;
}

.chat-sender-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0rpx;
  background-color: var(--td-bg-color-container);
}

.demo-footer {
  height: 32rpx;
  width: 100%;
  text-align: center;
  font-size: 20rpx;
  line-height: 32rpx;
  color: var(--td-text-color-placeholder);
  position: absolute;
  bottom: 32rpx;
}

.demo-footer-prefix {
  display: flex;
  align-items: center;
}

.speech-block {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24rpx;
  height: 60rpx;
  margin-right: 16rpx;
}

.speech-slot-btn {
  padding: 10px;
  background: #f0f0f0;
  border-radius: 8px;
  text-align: center;
}

.speech-btn-error {
  padding: 10px;
  background: #ffebee;
  border-radius: 8px;
  color: #d32f2f;
  text-align: center;
}
</style>

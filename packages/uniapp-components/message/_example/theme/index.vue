<template>
  <view>
    <t-message
      ref="t-message"
    />

    <view class="message-example--theme">
      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showInfoMessage"
      >
        普通通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showSuccessMessage"
      >
        成功通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showWarnMessage"
      >
        警示通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showErrorMessage"
      >
        错误通知
      </t-button>
    </view>
  </view>
</template>

<script>
import TButton from 'tdesign-uniapp/button/button.vue';
import TMessage from 'tdesign-uniapp/message/message.vue';
import Message from 'tdesign-uniapp/message/index';
export default {
  components: {
    TButton,
    TMessage,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    showInfoMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条普通通知信息',
      });
    },
    showWarnMessage() {
      Message.warning({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条需要用户关注到的警示通知',
      });
    },
    showSuccessMessage() {
      Message.success({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条成功的提示消息',
      });
    },
    showErrorMessage() {
      Message.error({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条错误提示通知',
      });
    },
  },
};
</script>
<style scoped>
.message-example--theme {
    margin: 32rpx;
}
</style>

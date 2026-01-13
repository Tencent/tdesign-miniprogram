<template>
  <view>
    <t-message
      ref="t-message"
    />

    <t-message
      :visible="visible"
      :offset="[90, 32]"
      content="这是一条通过组件调用的消息通知"
      @duration-end="() => visible = false"
    />

    <view class="message-example--base">
      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showTextMessage"
      >
        纯文字的通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showIconMessage"
      >
        带图标的通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showCloseMessage"
      >
        带关闭的通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showScrollMessage"
      >
        可滚动的通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showBtnMessage"
      >
        带按钮的通知
      </t-button>

      <t-button
        custom-style="margin-bottom: 16px;"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showComponent"
      >
        组件调用
      </t-button>
    </view>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tMessage from 'tdesign-uniapp/message/message.vue';
import Message from 'tdesign-uniapp/message/index';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tButton,
    tMessage,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  methods: {
    showTextMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        duration: 5000,
        icon: false,
        // single: false, // 打开注释体验多个消息叠加效果
        content: '这是一条纯文字的消息通知 5s消失',
      });
    },
    showIconMessage() {
      Message.info({
        context: this,
        offset: ['180rpx', '32rpx'],
        duration: 5000,
        content: '这是一条带图标的消息通知 5s消失',
      });
    },
    showCloseMessage() {
      Message.info({
        context: this,
        offset: ['180rpx', 32],
        content: '这是一条带关闭的消息通知',
        duration: -1,
        link: {
          content: '按钮',
          navigatorProps: {
            url: '/page/xxx/xxx',
          },
        },
        closeBtn: true,
      });
    },
    showScrollMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        marquee: {
          speed: 50,
          loop: -1,
          delay: 5000,
        },
        icon: false,
        content: '这是一条滚动的通知信息',
        duration: -1,
      });
    },
    showBtnMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        icon: 'notification-filled',
        content: '这是一条带操作的消息通知',
        duration: -1,
        link: {
          content: '链接',
          navigatorProps: {
            url: '/pages/home/home',
          },
        },
      });
    },
    showSingleMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        duration: 5000,
        icon: false,
        content: '这是一条纯文字的消息通知且仅显示一条',
        single: true,
      });
    },
    showComponent() {
      this.visible = true;
    },
  },
};
</script>
<style scoped>
.message-example--base {
    margin: 32rpx;
}
</style>

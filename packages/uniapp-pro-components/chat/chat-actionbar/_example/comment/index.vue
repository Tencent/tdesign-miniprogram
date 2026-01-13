<template>
  <view>
    <TToast ref="t-toast" />
    <view class="container">
      <TChatActionbar
        :content="content"
        :comment="comment"
        @actions="handleAction"
      />
    </view>
  </view>
</template>

<script>
import TChatActionbar from 'tdesign-uniapp-chat/chat-actionbar/chat-actionbar.vue';
import TToast from 'tdesign-uniapp/toast/toast.vue';
import Toast from 'tdesign-uniapp/toast';

export default {
  components: {
    TChatActionbar,
    TToast,
  },
  data() {
    return {
      content: '这是一段可以被复制的内容，支持markdown格式。\n\n**粗体文本**\n*斜体文本*\n\n- 列表项1\n- 列表项2',
      comment: 'good',
    };
  },
  methods: {
    handleAction(e) {
      const { name, active, data } = e;
      let message = '';
      switch (name) {
        case 'replay':
          message = '重新生成';
          break;
        case 'copy':
          console.log(data);
          message = '复制成功';
          break;
        case 'good':
          message = active ? '点赞成功' : '取消点赞';
          break;
        case 'bad':
          message = active ? '点踩成功' : '取消点踩';
          break;
        case 'share':
          message = '分享功能';
          break;
        default:
          message = `执行了${name}操作`;
      }
      Toast({
        context: this,
        selector: '#t-toast',
        message,
        theme: 'success',
      });
    },
  },
};
</script>
<style>
.container {
    padding: 32rpx;
    background-color: var(--td-bg-color-container);
}

.layout-btn {
    margin: 16rpx 0;
    padding: 12rpx 24rpx;
    background-color: #0052d9;
    color: #fff;
    border: none;
    border-radius: 8rpx;
    font-size: 28rpx;
}

.demo-text {
    padding: 16rpx 0;
}

.checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16rpx;
}
</style>

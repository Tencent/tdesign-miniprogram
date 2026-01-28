<template>
  <view>
    <view class="chat-example-desc">
      block 样式
    </view>
    <view class="chat-example-block">
      <t-chat-thinking
        layout="block"
        :content="content"
        :status="status"
        :animation="animation"
      />
    </view>

    <view class="chat-example-desc">
      border 样式
    </view>
    <view class="chat-example-block">
      <t-chat-thinking
        layout="border"
        :content="content"
        :status="status"
        :animation="animation"
      />
    </view>
  </view>
</template>

<script>
import TChatThinking from '@tdesign/uniapp-chat/chat-thinking/chat-thinking.vue';


export default {
  components: {
    TChatThinking,
  },
  data() {
    return {
      animation: 'moving',
      status: 'complete',
      content: {
        text: '嗯，用户问牛顿第一定律是不是适用于所有参考系。首先，我得先回忆一下牛顿第一定律的内容。牛顿第一定律，也就是惯性定律，说物体在没有外力作用时会保持静止或匀速直线运动。也就是说， 保持原来的运动状态。',
        title: '已深度思考(用时19秒)',
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.chat-example-desc {
    margin: var(--td-spacer-3) var(--td-spacer-2) var(--td-spacer-2);
    font-size: var(--td-font-size-base);
    white-space: pre-line;
    color: var(--bg-color-demo-desc);
    line-height: 22px;
}

.chat-example-desc:first-child {
    margin-top: -8px;
}

.chat-example-block {
    background-color: var(--td-bg-color-container);
    padding: var(--td-spacer-2);
}

</style>

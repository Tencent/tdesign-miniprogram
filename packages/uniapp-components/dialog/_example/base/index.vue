<template>
  <view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTextAndTitle"
      block
      @click="showDialog($event, { key: 'showTextAndTitle' })"
    >
      反馈类-带标题
    </t-button>
    <t-dialog
      :visible="showTextAndTitle"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showContentOnly"
      block
      @click="showDialog($event, { key: 'showContentOnly' })"
    >
      反馈类-无标题
    </t-button>
    <t-dialog
      :visible="showContentOnly"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTitleOnly"
      block
      @click="showDialog($event, { key: 'showTitleOnly' })"
    >
      反馈类-纯标题
    </t-button>
    <t-dialog
      :visible="showTitleOnly"
      title="对话框标题"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showMultiTextAndTitle"
      block
      @click="showDialog($event, { key: 'showMultiTextAndTitle' })"
    >
      反馈类-内容超长
    </t-button>
    <t-dialog
      :visible="showMultiTextAndTitle"
      title="对话框标题"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    >
      <template
        #content
      >
        <!-- 适配skyline，增加type="list" -->
        <scroll-view
          type="list"
          scroll-y
          class="long-content"
        >
          <view class="content-container">
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
          </view>
        </scroll-view>
      </template>
    </t-dialog>
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';
import TDialog from '@tdesign/uniapp/dialog/dialog.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TButton,
    TDialog,
  },
  data() {
    return {
      confirmBtn: {
        content: '知道了',
        variant: 'base',
      },

      dialogKey: '',
      showText: false,
      showMultiText: false,
      showTextAndTitle: false,
      showTitleOnly: false,
      showMultiTextAndTitle: false,
      showContentOnly: false,
    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog() {
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
</script>
<style>
.wrapper {
    margin-bottom: 32rpx;
}

.long-content {
    height: 576rpx;
    margin-top: 16rpx;
    font-size: 32rpx;
    color: #888;
}

.long-content .content-container {
    white-space: pre-line;
}

.long-content ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
}
</style>

<template>
  <view>
    <view class="demo-desc">
      文字按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showConfirm"
      block
      @click="showDialog($event, { key: 'showConfirm' })"
    >
      文字按钮
    </t-button>
    <t-dialog
      :visible="showConfirm"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      confirm-btn="确定"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <view class="demo-desc">
      水平基础按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showWarnConfirm"
      block
      @click="showDialog($event, { key: 'showWarnConfirm' })"
    >
      水平基础按钮
    </t-button>
    <t-dialog
      :visible="showWarnConfirm"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <view class="demo-desc">
      垂直基础按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTooLongBtnContent"
      block
      @click="showDialog($event, { key: 'showTooLongBtnContent' })"
    >
      垂直基础按钮
    </t-button>
    <t-dialog
      :visible="showTooLongBtnContent"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      cancel-btn="取消"
      button-layout="vertical"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <view class="demo-desc">
      多按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showMultiBtn"
      block
      @click="showDialog($event, { key: 'showMultiBtn' })"
    >
      多按钮
    </t-button>
    <t-dialog
      :visible="showMultiBtn"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      button-layout="vertical"
      :actions="multiBtnList"
      @action="closeDialog"
    />

    <view class="demo-desc">
      带关闭按钮的对话框
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showCloseBtn"
      block
      @click="showDialog($event, { key: 'showCloseBtn' })"
    >
      带关闭按钮的对话框
    </t-button>
    <t-dialog
      :visible="showCloseBtn"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      close-btn
      :confirm-btn="{ content: '警示操作', variant: 'base', theme: 'danger' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />
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
        content: '确定',
        variant: 'base',
      },

      dialogKey: '',
      showConfirm: false,
      showWarnConfirm: false,
      showTooLongBtnContent: false,
      showMultiBtn: false,
      showCloseBtn: false,

      multiBtnList: [
        {
          content: '次要按钮',
          theme: 'light',
        },
        {
          content: '次要按钮',
          theme: 'light',
        },
        {
          content: '主要按钮',
          theme: 'primary',
        },
      ],

    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog(e) {
      console.log('close: ', e);
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
</script>
<style>
.demo-desc {
    margin: 0 0 32rpx;
}

.wrapper {
    margin-bottom: 32rpx;
}
</style>

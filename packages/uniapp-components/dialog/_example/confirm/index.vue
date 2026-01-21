<template>
  <view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showConfirm"
      block
      @click="showDialog($event, { key: 'showConfirm' })"
    >
      确认类-带标题
    </t-button>
    <t-dialog
      :visible="showConfirm"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showWarnConfirm"
      block
      @click="showDialog($event, { key: 'showWarnConfirm' })"
    >
      确认类-无标题
    </t-button>
    <t-dialog
      :visible="showWarnConfirm"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '警示操作', variant: 'base', theme: 'danger' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showLightConfirm"
      block
      @click="showDialog($event, { key: 'showLightConfirm' })"
    >
      确认类-纯标题
    </t-button>
    <t-dialog
      :visible="showLightConfirm"
      title="对话框标题"
      :confirm-btn="{ content: '确定', variant: 'base', theme: 'light' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tDialog from 'tdesign-uniapp/dialog/dialog.vue';
export default {
  components: {
    tButton,
    tDialog,
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
      showLightConfirm: false,
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
</style>

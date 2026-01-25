<template>
  <view>
    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="showWithInput"
      block
      @click="showDialog($event, { key: 'showWithInput' })"
    >
      输入类-无描述
    </t-button>
    <t-dialog
      :visible="showWithInput"
      title="带输入框对话框"
      confirm-btn="确定"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #content
      >
        <t-input
          borderless
          t-class="dialog-input"
          clearable
          placeholder="输入12文案"
          placeholder-class="placeholder"
          :custom-style="inputStyle"
          :placeholder-style="placeholderStyle"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTextAndTitleWithInput"
      block
      @click="showDialog($event, { key: 'showTextAndTitleWithInput' })"
    >
      输入类-带描述
    </t-button>
    <t-dialog
      :visible="showTextAndTitleWithInput"
      title="带输入框对话框"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      confirm-btn="确定"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #content
      >
        <t-input
          borderless
          t-class="dialog-input"
          :custom-style="inputStyle"
          clearable
          placeholder="输入12文案"
          placeholder-class="placeholder"
          :placeholder-style="placeholderStyle"
        />
      </template>
    </t-dialog>
  </view>
</template>

<script>
import TButton from 'tdesign-uniapp/button/button.vue';
import TInput from 'tdesign-uniapp/input/input.vue';
import TDialog from 'tdesign-uniapp/dialog/dialog.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TButton,
    TInput,
    TDialog,
  },
  data() {
    return {
      dialogKey: '',
      showWithInput: false,
      showTextAndTitleWithInput: false,

      inputStyle: 'background-color: var(--td-bg-color-page);padding-top: 12px;padding-bottom: 12px;',
      placeholderStyle: 'color: var(--td-text-color-placeholder);height: 24px;line-height: 24px;display: flex;align-items: center;',
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

/* :deep(.placeholder) {
     color: var(--td-text-color-placeholder);
     line-height: 96rpx;
     height: 96rpx;
     display: flex;
     align-items: center;
} */

:deep(.dialog-input) {
    text-align: left;
    margin-top: 32rpx;
    border-radius: 8rpx;
    background-color: var(--td-bg-color-page);
    box-sizing: border-box;
}
</style>

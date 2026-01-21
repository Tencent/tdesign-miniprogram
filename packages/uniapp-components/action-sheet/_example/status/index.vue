<template>
  <view>
    <t-action-sheet
      ref="t-action-sheet"
      :using-custom-navbar="!isMPAlipay"
      @selected="handleSelected($event, { tagId: 't-action-sheet' })"
    />

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleAction"
    >
      列表型选项状态
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tActionSheet from 'tdesign-uniapp/action-sheet/action-sheet.vue';
import ActionSheet, { ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
export default {
  components: {
    tButton,
    tActionSheet,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '默认选项',
            icon: 'app',
          },
          {
            label: '自定义选项',
            icon: 'app',
            color: '#0052D9',
          },
          {
            label: '失效选项',
            disabled: true,
            icon: 'app',
          },
          {
            label: '警告选项',
            color: '#e34d59',
            icon: 'app',
          },
        ],
      });
    },
    handleSelected(e) {
      console.log(e);
    },
  },
};
</script>

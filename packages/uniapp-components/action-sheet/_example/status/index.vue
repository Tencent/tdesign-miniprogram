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
import TButton from '@tdesign/uniapp/button/button.vue';
import TActionSheet from '@tdesign/uniapp/action-sheet/action-sheet.vue';
import ActionSheet, { ActionSheetTheme } from '@tdesign/uniapp/action-sheet/index';
export default {
  components: {
    TButton,
    TActionSheet,
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
        cancelText: 'cancel',
        items: [
          {
            label: 'Move',
            icon: 'enter',
          },
          {
            label: 'Mark as important',
            icon: 'bookmark',
            color: '#0052D9',
          },
          {
            label: 'Unsubscribe',
            icon: 'pin',
            color: '#E34D59',
          },
          {
            label: 'Add to Tasks',
            icon: 'cloud-upload',
            disabled: true,
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

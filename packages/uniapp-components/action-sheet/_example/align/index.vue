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
      custom-dataset="center"
      block
      theme="primary"
      @click="handleAction"
    >
      居中列表型
    </t-button>
    <t-button
      size="large"
      variant="outline"
      custom-dataset="left"
      block
      theme="primary"
      @click="handleAction"
    >
      左对齐列表型
    </t-button>
  </view>
</template>

<script>
import { default as ActionSheet, ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
import TActionSheet from 'tdesign-uniapp/action-sheet/action-sheet.vue';
import TButton from 'tdesign-uniapp/button/button.vue';

export default {
  components: {
    TActionSheet,
    TButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAction(e) {
      const align = e.currentTarget.dataset.custom;
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        cancelText: 'cancel',
        align,
        description: 'Email Settings',
        items: [
          {
            label: 'Move',
            icon: 'enter',
          },
          {
            label: 'Mark as important',
            icon: 'bookmark',
          },
          {
            label: 'Unsubscribe',
            icon: 'pin',
          },
          {
            label: 'Add to Tasks',
            icon: 'cloud-upload',
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
<style>
</style>

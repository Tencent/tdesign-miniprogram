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
      常规列表型
    </t-button>

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="showDescAction"
    >
      带描述列表型
    </t-button>

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="showIconAction"
    >
      带图标列表型
    </t-button>
  </view>
</template>

<script>
import TButton from 'tdesign-uniapp/button/button.vue';
import TActionSheet from 'tdesign-uniapp/action-sheet/action-sheet.vue';
import ActionSheet, { ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
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
        items: ['Move', 'Mark as important', 'Unsubscribe', 'Add to Tasks'],
      });
    },
    showDescAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        cancelText: 'cancel',
        description: 'Email Settings',
        items: ['Move', 'Mark as important', 'Unsubscribe', 'Add to Tasks'],
      });
    },
    showIconAction() {
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

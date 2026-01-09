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
      列表型
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
            label: '选项一',
          },
          {
            label: '选项二',
          },
          {
            label: '选项三',
          },
          {
            label: '选项四',
          },
        ],
      });
    },
    showDescAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        description: '动作面板描述文字',
        items: [
          {
            label: '选项一',
          },
          {
            label: '选项二',
          },
          {
            label: '选项三',
          },
        ],
      });
    },
    showIconAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '选项一',
            icon: 'app',
          },
          {
            label: '选项二',
            icon: 'app',
          },
          {
            label: '选项三',
            icon: 'app',
          },
          {
            label: '选项四',
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

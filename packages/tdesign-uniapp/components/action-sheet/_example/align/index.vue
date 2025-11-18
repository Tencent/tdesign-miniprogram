<template>
  <view>
    <TActionSheet
      id="t-action-sheet"
      ref="t-action-sheet"
      :using-custom-navbar="!isMPAlipay"
      @selected="handleSelected($event, { tagId: 't-action-sheet' })"
    />

    <TButton
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleAction"
    >
      左对齐列表型
    </TButton>
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
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        align: 'left',
        description: '动作面板描述文字',
        items: [
          {
            label: '选项一',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项二',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项三',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项四',
            icon: 'app',
            suffixIcon: 'chevron-right',
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

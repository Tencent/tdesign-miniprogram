import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Page({
  handleAction() {
    ActionSheet.show({
      theme: ActionSheetTheme.Grid,
      selector: '#t-action-sheet',
      context: this,
      items: [
        {
          label: '文字',
          icon: 'image',
        },
        {
          label: '文字',
          icon: 'image',
        },
        {
          label: '文字',
          icon: 'image',
        },
        {
          label: '文字',
          icon: 'image',
        },
        {
          label: '文字',
          icon: 'image',
        },
        {
          label: '文字',
          icon: 'image',
        },
        {
          label: '文字',
          icon: 'image',
        },
        {
          label: '文字',
          icon: 'image',
        },
      ],
    });
  },
  handleSelected(e) {
    console.log(e.detail);
  },
});

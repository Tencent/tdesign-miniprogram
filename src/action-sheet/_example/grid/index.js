import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Component({
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: new Array(8).fill({
          label: '标题文字',
          icon: 'image',
        }),
      });
    },
    handleMultiAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: new Array(16).fill({
          label: '标题文字',
          icon: 'image',
        }),
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});

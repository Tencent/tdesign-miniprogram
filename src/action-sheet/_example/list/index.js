import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Component({
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '默认选项',
          },
          {
            label: '自定义选项',
            color: '#0052D9',
          },
          {
            label: '失效选项',
            disabled: true,
          },
          {
            label: '警告选项',
            color: '#e34d59',
          },
        ],
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});

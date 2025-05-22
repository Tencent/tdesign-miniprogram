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
      console.log(e.detail);
    },
  },
});

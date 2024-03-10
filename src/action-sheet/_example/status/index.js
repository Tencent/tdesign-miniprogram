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
            label: 'Default options',
            icon: 'app',
          },
          {
            label: 'Custom options',
            icon: 'app',
            color: '#0052D9',
          },
          {
            label: 'Invalid options',
            disabled: true,
            icon: 'app',
          },
          {
            label: 'Warning options',
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

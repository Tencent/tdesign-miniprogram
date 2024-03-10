import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Component({
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        align: 'left',
        description: 'description',
        items: [
          {
            label: 'Option 1',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: 'Option 2',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: 'Option 3',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: 'Option 4',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
        ],
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});

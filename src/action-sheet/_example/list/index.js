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
            label: 'Option 1',
          },
          {
            label: 'Option 2',
          },
          {
            label: 'Option 3',
          },
          {
            label: 'Option 4',
          },
        ],
      });
    },
    showDescAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        description: 'description',
        items: [
          {
            label: 'Option 1',
          },
          {
            label: 'Option 2',
          },
          {
            label: 'Option 3',
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
            label: 'Option 1',
            icon: 'app',
          },
          {
            label: 'Option 2',
            icon: 'app',
          },
          {
            label: 'Option 3',
            icon: 'app',
          },
          {
            label: 'Option 4',
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

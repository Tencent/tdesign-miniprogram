import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet';

Component({
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
            icon: 'book',
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
      console.log(e.detail);
    },
  },
});

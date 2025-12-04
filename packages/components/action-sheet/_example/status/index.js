import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet';

Component({
  methods: {
    handleAction() {
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
            color: '#0052D9',
          },
          {
            label: 'Unsubscribe',
            icon: 'pin',
            color: '#E34D59',
          },
          {
            label: 'Add to Tasks',
            icon: 'cloud-upload',
            disabled: true,
          },
        ],
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});

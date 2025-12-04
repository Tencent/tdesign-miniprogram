import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet';

Component({
  methods: {
    handleAction(e) {
      const align = e.detail.currentTarget.dataset.custom;

      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        cancelText: 'cancel',
        align,
        description: 'Email Settings',
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

import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Component({
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
          {
            label: '标题文字',
            icon: 'image',
          },
        ],
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});

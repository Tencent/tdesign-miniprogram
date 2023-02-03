import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Component({
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        align: 'left',
        description: '动作面板描述文字',
        items: [
          {
            label: '选项一',
            icon: 'app',
          },
          {
            label: '选项二',
            icon: 'app',
          },
          {
            label: '选项三',
            icon: 'app',
          },
          {
            label: '选项四',
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

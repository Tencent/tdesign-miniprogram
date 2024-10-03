import { ActionSheet, ActionSheetTheme } from 'tdesign-miniprogram';

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
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项二',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项三',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项四',
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

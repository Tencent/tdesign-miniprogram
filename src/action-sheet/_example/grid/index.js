import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

const firstGrid = [
  {
    label: 'Wechat',
    image: 'https://tdesign.gtimg.com/mobile/demos/wechat.png',
  },
  {
    label: 'Times',
    image: 'https://tdesign.gtimg.com/mobile/demos/times.png',
  },
  {
    label: 'QQ',
    image: 'https://tdesign.gtimg.com/mobile/demos/qq.png',
  },
  {
    label: 'WeCom',
    image: 'https://tdesign.gtimg.com/mobile/demos/wecom.png',
  },
  {
    label: 'Star',
    icon: 'star',
  },
  {
    label: 'Refresh',
    icon: 'refresh',
  },
  {
    label: 'Download',
    icon: 'download',
  },
  {
    label: 'Copy',
    icon: 'queue',
  },
];

Component({
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: firstGrid,
      });
    },
    handleMultiAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: firstGrid.concat(
          new Array(8).fill({
            label: 'Title',
            icon: 'image',
          }),
        ),
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});

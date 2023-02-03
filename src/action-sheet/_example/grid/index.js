import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

const firstGrid = [
  {
    label: '微信',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/wechat.png',
  },
  {
    label: '朋友圈',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/times.png',
  },
  {
    label: 'QQ',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/qq.png',
  },
  {
    label: '企业微信',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/wecom.png',
  },
  {
    label: '收藏',
    icon: 'star',
  },
  {
    label: '刷新',
    icon: 'refresh',
  },
  {
    label: '下载',
    icon: 'download',
  },
  {
    label: '复制',
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
            label: '标题文字',
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

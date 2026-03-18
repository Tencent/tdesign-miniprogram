import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';

Component({
  behaviors: [themeChangeBehavior],
  data: {
    logo: {
      icon: 'https://tdesign.gtimg.com/mobile/demos/logo2.png',
      title: '品牌名称',
    },
  },
});

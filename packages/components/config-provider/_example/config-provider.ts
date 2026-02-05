import enUS from 'tdesign-miniprogram/locale/en_US';
import zhCN from 'tdesign-miniprogram/locale/zh_CN';

Page({
  data: {
    globalConfig: zhCN,
    currentLocale: 'zhCN',
    themeVars: {
      buttonPrimaryBorderColor: '#ff6b00',
      'button-primary-color': '#ff6b00',
      'button-primary-bg-color': '#ff6a0094',
    },
  },

  switchLocale() {
    const { currentLocale } = this.data;
    const newLocale = currentLocale === 'zhCN' ? enUS : zhCN;
    this.setData({
      globalConfig: newLocale,
      currentLocale: currentLocale === 'zhCN' ? 'enUS' : 'zhCN',
    });
  },
});

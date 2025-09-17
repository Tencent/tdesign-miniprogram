import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';
import { list, skylineList } from './data/index';

Page({
  behaviors: [themeChangeBehavior],
  data: {
    list: [],
    currentYear: new Date().getFullYear(),
    isSkyline: false,
  },
  onLoad(options) {
    const { q, skyline } = options;

    let compList = [];
    this.skyline = skyline;
    if (this.skyline) {
      compList = skylineList;
    } else {
      compList = list;
    }

    this.setData({
      list: compList,
      isSkyline: !!skyline,
    });

    // 小程序跳转各个小程序组件库
    if (q) {
      const str = this.getQueryByUrl(decodeURIComponent(q));
      wx.navigateTo({
        url: `/pages/${str.page}/${str.page}`,
      });
    }

    this.trdPrivacy = this.selectComponent('#trdPrivacy');
  },

  showPrivacyWin() {
    this.trdPrivacy.showPrivacyWin();
  },

  clickHandle(e) {
    // 添加安全检查，确保e.detail存在
    if (!e.detail) {
      console.error('clickHandle: e.detail is undefined', e);
      return;
    }

    // 从e.detail中获取item对象
    const { item } = e.detail;
    if (!item) {
      console.error('clickHandle: item is undefined', e.detail);
      return;
    }

    let { name, path = '' } = item as {
      name: string;
      path?: string;
    };

    // 确保name存在
    if (!name) {
      console.error('clickHandle: name is undefined', e.detail.item);
      return;
    }

    if (!path) {
      name = name.replace(/^[A-Z]/, (match) => `${match}`.toLocaleLowerCase());
      name = name.replace(/[A-Z]/g, (match) => {
        return `-${match.toLowerCase()}`;
      });

      path = `/pages/${name}/${this.skyline ? 'skyline/' : ''}${name}`;
    }

    wx.navigateTo({
      url: path,
      fail: () => {
        wx.navigateTo({
          url: '/pages/home/navigateFail/navigateFail',
        });
      },
    });
  },

  onShareAppMessage() {
    return {
      title: 'TDesign UI',
      path: '/pages/home/home',
    };
  },
  getQueryByUrl(url: string) {
    const data = {};
    const queryArr = `${url}`.match(/([^=&#?]+)=[^&#]+/g) || [];
    // 必须是合法字符串
    if (queryArr.length) {
      queryArr.forEach((para) => {
        const d = para.split('=');
        const val = decodeURIComponent(d[1]);
        if (data[d[0]] !== undefined) {
          data[d[0]] += `,${val}`;
        } else {
          data[d[0]] = val;
        }
      });
    }
    return data;
  },
  goSkyline() {
    wx.navigateTo({
      url: '/pages/home/home?skyline=1',
    });
  },
});

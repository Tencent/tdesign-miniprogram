import list from './data/index';

Page({
  data: {
    list,
  },
  onLoad(options) {
    const { q } = options;
    console.info('options', options);
    // 小程序跳转各个小程序组件库
    if (q) {
      // Navigator.gotoPage(path, rest);
      // console.log(option);
      const str = this.getQueryByUrl(decodeURIComponent(q));
      console.log(str, str.page);
      wx.navigateTo({
        url: `/pages/${str.page}/${str.page}`,
      });
    }
  },

  clickHandle(e) {
    let { name, path = '' } = e.detail.item as {
      name: string;
      path?: string;
    };
    name = name.replace(/^[A-Z]/, (match) => `${match}`.toLocaleLowerCase());
    name = name.replace(/[A-Z]/g, (match) => {
      return `-${match.toLowerCase()}`;
    });
    if (!path) {
      path = `/pages/${name}/${name}`;
    }
    path = `/${path}/${name}/${name}`;

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
});

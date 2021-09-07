import list from './data/index';
Page({
  data: {
    list,
  },
  clickHandle(e) {
    let { name, path = '' } = e.detail.item as {
      name: string;
      path?: string;
    };

    if (!path) {
      name = name.replace(/^[A-Z]/, (match) => `${match}`.toLocaleLowerCase());
      name = name.replace(/[A-Z]/g, (match) => {
        return `-${match.toLowerCase()}`;
      });

      path = `/pages/${name}/${name}`;
    }

    wx.navigateTo({
      url: path,
      fail: () => {
        wx.navigateTo({
          url: `/pages/home/navigateFail/navigateFail`,
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
});

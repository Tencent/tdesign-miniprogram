Page({
  data: {
    placement: 'left',
    sidebar: [],
    baseSidebar: [
      {
        title: '菜单一',
      },
      {
        title: '菜单二',
      },
      {
        title: '菜单三',
      },
      {
        title: '菜单四',
      },
      {
        title: '菜单五',
      },
      {
        title: '菜单六',
      },
      {
        title: '菜单七',
      },
      {
        title: '菜单八',
      },
    ],
    iconSidebar: [
      {
        title: '菜单一',
        icon: 'app',
      },
      {
        title: '菜单二',
        icon: 'app',
      },
      {
        title: '菜单三',
        icon: 'app',
      },
      {
        title: '菜单四',
        icon: 'app',
      },
      {
        title: '菜单五',
        icon: 'app',
      },
      {
        title: '菜单六',
        icon: 'app',
      },
      {
        title: '菜单七',
        icon: 'app',
      },
      {
        title: '菜单八',
        icon: 'app',
      },
    ],
  },

  openDrawerBase() {
    this.setData({
      visible: true,
      sidebar: this.data.baseSidebar,
    });
  },

  openDrawerIcon() {
    this.setData({
      visible: true,
      sidebar: this.data.iconSidebar,
    });
  },

  itemClick(e) {
    console.log(e.detail);
  },

  overlayClick(e) {
    console.log(e.detail);
  },
});

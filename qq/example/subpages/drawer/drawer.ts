Page({
  data: {
    placement: 'left',
    sidebar: [],
    baseSidebar: [
      {
        name: '菜单一',
      },
      {
        name: '菜单二',
      },
      {
        name: '菜单三',
      },
      {
        name: '菜单四',
      },
      {
        name: '菜单五',
      },
      {
        name: '菜单六',
      },
      {
        name: '菜单七',
      },
      {
        name: '菜单八',
      },
    ],
    iconSidebar: [
      {
        name: '菜单一',
        icon: 'app',
      },
      {
        name: '菜单二',
        icon: 'app',
      },
      {
        name: '菜单三',
        icon: 'app',
      },
      {
        name: '菜单四',
        icon: 'app',
      },
      {
        name: '菜单五',
        icon: 'app',
      },
      {
        name: '菜单六',
        icon: 'app',
      },
      {
        name: '菜单七',
        icon: 'app',
      },
      {
        name: '菜单八',
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

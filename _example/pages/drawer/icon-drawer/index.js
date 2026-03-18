Component({
  data: {
    placement: 'left',
    sidebar: [],
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

  /**
   * 组件的方法列表
   */
  methods: {
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
  },
});

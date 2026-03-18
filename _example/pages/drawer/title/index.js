Component({
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
  },

  methods: {
    openDrawerBase() {
      this.setData({
        visible: true,
        sidebar: this.data.baseSidebar,
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

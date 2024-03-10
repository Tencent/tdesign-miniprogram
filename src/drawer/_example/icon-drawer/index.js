Component({
  data: {
    placement: 'left',
    sidebar: [],
    iconSidebar: [
      {
        title: 'One',
        icon: 'app',
      },
      {
        title: 'Two',
        icon: 'app',
      },
      {
        title: 'Three',
        icon: 'app',
      },
      {
        title: 'Four',
        icon: 'app',
      },
      {
        title: 'Five',
        icon: 'app',
      },
      {
        title: 'Six',
        icon: 'app',
      },
      {
        title: 'Seven',
        icon: 'app',
      },
      {
        title: 'Eight',
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

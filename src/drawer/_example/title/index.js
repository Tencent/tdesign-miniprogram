Component({
  data: {
    placement: 'left',
    sidebar: [],
    baseSidebar: [
      {
        title: 'One',
      },
      {
        title: 'Two',
      },
      {
        title: 'Three',
      },
      {
        title: 'Four',
      },
      {
        title: 'Five',
      },
      {
        title: 'Six',
      },
      {
        title: 'Seven',
      },
      {
        title: 'Eight',
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

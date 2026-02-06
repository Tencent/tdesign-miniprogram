import icons from '../data';

Component({
  data: {
    icons,
  },

  methods: {
    onIconTap(event) {
      const { name, type } = event.currentTarget.dataset;
      if (type === 'prefix') return;
      wx.showToast({ title: name, icon: 'none', duration: 1000 });
    },
  },
});

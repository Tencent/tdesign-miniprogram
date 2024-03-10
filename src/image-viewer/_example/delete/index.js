import ActionSheet from 'tdesign-miniprogram/action-sheet/index';

Component({
  data: {
    visible: false,
    showIndex: false,
    closeBtn: false,
    deleteBtn: false,
    images: [],
  },
  methods: {
    onClick() {
      this.setData({
        images: [
          'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
          'https://tdesign.gtimg.com/mobile/demos/swiper2.png',
        ],
        showIndex: true,
        visible: true,
        closeBtn: true,
        deleteBtn: true,
      });
    },
    onChange(e) {
      const { index } = e.detail;

      console.log(index);
    },

    onDelete(e) {
      const { index } = e.detail;

      console.log(index);

      ActionSheet.show({
        context: this,
        selector: '#t-action-sheet',
        description: 'Delete this photo?',
        items: [
          {
            label: 'Delete',
            color: '#d54941',
          },
        ],
      });
    },

    onClose(e) {
      const { trigger } = e.detail;

      console.log(trigger);
      this.setData({
        visible: false,
      });
    },
  },
});

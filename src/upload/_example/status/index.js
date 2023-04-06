Component({
  data: {
    originFiles: [
      {
        url: 'https://tdesign.gtimg.com/miniprogram/images/example4.png',
        name: 'uploaded1.png',
        type: 'image',
        status: 'loading',
      },
      {
        url: 'https://tdesign.gtimg.com/miniprogram/images/example7.png',
        name: 'uploaded2.png',
        type: 'image',
        percent: 68,
        status: 'loading',
      },
      {
        url: 'https://tdesign.gtimg.com/miniprogram/images/example6.png',
        name: 'uploaded3.png',
        type: 'image',
        status: 'reload',
      },
      {
        url: 'https://tdesign.gtimg.com/miniprogram/images/example5.png',
        name: 'uploaded4.png',
        type: 'image',
        status: 'failed',
      },
    ],
    gridConfig: {
      column: 4,
      width: 160,
      height: 160,
    },
    config: {
      count: 1,
    },
  },
  methods: {
    handleSuccess(e) {
      const { files } = e.detail;
      this.setData({
        originFiles: files,
      });
    },
    handleRemove(e) {
      const { index } = e.detail;
      const { originFiles } = this.data;
      originFiles.splice(index, 1);
      this.setData({
        originFiles,
      });
    },
    handleClick(e) {
      console.log(e.detail.file);
    },
  },
});

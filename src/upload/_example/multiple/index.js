Component({
  data: {
    originFiles: [
      {
        url: 'https://tdesign.gtimg.com/site/upload1.png',
        name: 'uploaded1.png',
        type: 'image',
      },
      {
        url: 'https://tdesign.gtimg.com/site/upload2.png',
        name: 'uploaded2.png',
        type: 'image',
      },
      {
        url: 'https://tdesign.gtimg.com/site/upload1.png',
        name: 'uploaded1.png',
        type: 'image',
        percent: -1,
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

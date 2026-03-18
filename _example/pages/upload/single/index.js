Component({
  data: {
    fileList: [],
  },
  methods: {
    handleAdd(e) {
      const { fileList } = this.data;
      const { files } = e.detail;

      // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
      this.setData({
        fileList: [...fileList, ...files], // 此时设置了 fileList 之后才会展示选择的图片
      });

      // 方法2：每次选择图片都上传，展示每次上传图片的进度
      // files.forEach(file => this.uploadFile(file))
    },
    onUpload(file) {
      const { fileList } = this.data;

      this.setData({
        fileList: [...fileList, { ...file, status: 'loading' }],
      });
      const { length } = fileList;

      const task = wx.uploadFile({
        url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: 'file',
        formData: { user: 'test' },
        success: () => {
          this.setData({
            [`fileList[${length}].status`]: 'done',
          });
        },
      });
      task.onProgressUpdate((res) => {
        this.setData({
          [`fileList[${length}].percent`]: res.progress,
        });
      });
    },
    handleRemove(e) {
      const { index } = e.detail;
      const { fileList } = this.data;

      fileList.splice(index, 1);
      this.setData({
        fileList,
      });
    },
  },
});

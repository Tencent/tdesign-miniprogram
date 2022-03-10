Page({
  data: {
    originFiles1: [
      {
        url: 'https://tdesign.gtimg.com/site/upload1.png',
        name: 'uploaded1.png',
        type: 'image',
      },
    ],
    originFiles2: [
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
    // requestMethod: null,
    gridConfig: {
      column: 4,
      width: 160,
      height: 160,
    },
    config1: {
      count: 1,
    },
  },
  // onLoad() {
  //   this.setData({
  //     requestMethod: (files) => {
  //       // 模拟处理微信返回的files结果。
  //       console.log(files);
  //       new Promise((resolve) => {
  //         console.log('uploading');
  //         resolve([
  //           {
  //             url: 'https://tdesign.gtimg.com/site/upload2.png',
  //             name: 'uploaded2.png',
  //             type: 'image',
  //             percent: -1,
  //           },
  //         ]);
  //       })
  //         .then((res: any) => {
  //           this.setData({
  //             originFiles1: [...this.data.originFiles1, ...res],
  //           });
  //           console.log('success');
  //         })
  //         .catch(() => {
  //           console.log('error');
  //         });
  //     },
  //   });
  // },
  // 选中文件之后，计算一个随机的短文件名
  getRandFileName(filePath) {
    const extIndex = filePath.lastIndexOf('.');
    const extName = extIndex === -1 ? '' : filePath.substr(extIndex);
    return parseInt(`${Date.now()}${Math.floor(Math.random() * 900 + 100)}`, 10).toString(36) + extName;
  },
  handleSuccess(e) {
    const { files } = e.detail;

    this.setData({
      originFiles1: files,
    });
  },
  handleRemove(e) {
    const { index } = e.detail;
    const { originFiles1 } = this.data;
    originFiles1.splice(index, 1);
    this.setData({
      originFiles1,
    });
  },
  handleSuccess2(e) {
    const { files } = e.detail;

    this.setData({
      originFiles2: files,
    });
  },
  handleRemove2(e) {
    const { index } = e.detail;
    const { originFiles2 } = this.data;
    originFiles2.splice(index, 1);
    this.setData({
      originFiles2,
    });
  },
});

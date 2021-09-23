Page({
  data: {
    originFiles1: [
      {
        url:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/uploader/uploaded1.png',
        name: 'uploaded1.png',
        type: 'image',
      },
    ],
    originFiles2: [
      {
        url:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/uploader/uploaded1.png',
        name: 'uploaded1.png',
        type: 'image',
      },
      {
        url:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/uploader/uploaded2.png',
        name: 'uploaded2.png',
        type: 'image',
      },
    ],
    requestMethod: null,
  },
  onLoad() {
    this.setData({
      requestMethod: (files) => {
        // 模拟处理微信返回的files结果。
        console.log(files);
        new Promise((resolve) => {
          console.log('uploading');
          resolve([
            {
              url:
                'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/uploader/uploaded2.png',
              name: 'uploaded2.png',
              type: 'image',
              progress: -1,
            },
          ]);
        })
          .then((res: any) => {
            this.setData({
              originFiles1: [...this.data.originFiles1, ...res],
            });
            console.log('success');
          })
          .catch(() => {
            console.log('error');
          });
      },
    });
  },
  // 选中文件之后，计算一个随机的短文件名
  getRandFileName(filePath) {
    const extIndex = filePath.lastIndexOf('.');
    const extName = extIndex === -1 ? '' : filePath.substr(extIndex);
    return (
      parseInt(`${Date.now()}${Math.floor(Math.random() * 900 + 100)}`, 10).toString(36) + extName
    );
  },
  handleSuccess(e) {
    const { originFiles1 } = this.data;

    // 图片上传处理
    const { tempFiles } = e.detail;

    tempFiles.forEach((temp) => {
      const name = this.getRandFileName(temp.path);
      originFiles1.push({
        name,
        type: 'image',
        url: temp.path,
        size: temp.size,
      });
    });

    this.setData({
      originFiles1,
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
    const { originFiles2 } = this.data;

    // 图片上传处理
    const { tempFiles } = e.detail;
    tempFiles.forEach((temp) => {
      const name = this.getRandFileName(temp.path);
      originFiles2.push({
        name,
        type: 'image',
        url: temp.path,
        size: temp.size,
      });
    });

    this.setData({
      originFiles2,
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

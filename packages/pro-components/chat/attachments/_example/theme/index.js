Page({
  data: {
    currentLayout: 'grid',
    maxCount: 9,
    maxCountIndex: 2,
    maxCountOptions: ['3个', '5个', '9个', '12个'],
    maxCountValues: [3, 5, 9, 12],
    maxSize: 10 * 1024 * 1024,
    maxSizeIndex: 1,
    maxSizeOptions: ['5MB', '10MB', '20MB', '50MB'],
    maxSizeValues: [5 * 1024 * 1024, 10 * 1024 * 1024, 20 * 1024 * 1024, 50 * 1024 * 1024],
    uploadText: '添加附件',
    attachments: [
      {
        id: 1,
        name: 'sample-image.jpg',
        url: 'https://picsum.photos/200/200?random=1',
        type: 'image',
        size: 1024000
      },
      {
        id: 2,
        name: 'sample-video.mp4',
        url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        type: 'video',
        size: 1048576,
        duration: 30
      },
      {
        id: 3,
        name: 'document.pdf',
        url: 'https://example.com/document.pdf',
        type: 'file',
        size: 2048000
      }
    ]
  },

  toggleLayout() {
    const newLayout = this.data.currentLayout === 'grid' ? 'list' : 'grid';
    this.setData({
      currentLayout: newLayout
    });
  },

  onMaxCountChange(e) {
    const index = e.detail.value;
    this.setData({
      maxCountIndex: index,
      maxCount: this.data.maxCountValues[index]
    });
  },

  onMaxSizeChange(e) {
    const index = e.detail.value;
    this.setData({
      maxSizeIndex: index,
      maxSize: this.data.maxSizeValues[index]
    });
  },

  onUploadTextChange(e) {
    this.setData({
      uploadText: e.detail.value
    });
  },

  onAttachmentsChange(e) {
    const { attachments } = e.detail;
    this.setData({ attachments });
    console.log('附件列表变化:', attachments);
  },

  onUpload(e) {
    const { attachments } = e.detail;
    console.log('上传完成:', attachments);
    wx.showToast({
      title: '上传成功',
      icon: 'success'
    });
  },

  onDelete(e) {
    const { attachment, index } = e.detail;
    console.log('删除附件:', attachment, index);
    wx.showToast({
      title: '删除成功',
      icon: 'success'
    });
  }
});

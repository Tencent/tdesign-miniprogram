Page({
  data: {
    items: [
      {
        fileType: 'image',
        name: 'sample-image.jpg',
        url: 'https://picsum.photos/200/200?random=1',
        size: 1024,
        status: 'success',
      },
      {
        fileType: 'image',
        name: 'sample-image.jpg',
        url: 'https://picsum.photos/200/200?random=1',
        size: 1024,
        status: 'pending',
      },
      {
        fileType: 'video',
        name: 'sample-video.mp4',
        url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        size: 2048,
        status: 'fail',
      },
      {
        fileType: 'pdf',
        name: 'document.pdf',
        url: 'https://example.com/document.pdf',
        size: 3072,
        status: 'pending',
      },
      {
        fileType: 'doc',
        name: 'report.docx',
        url: 'https://example.com/report.docx',
        size: 1536,
        status: 'error',
        errorMessage: '文件不存在',
      },
      {
        fileType: 'audio',
        name: 'audio.mp3',
        url: 'https://example.com/audio.mp3',
        size: 512,
        status: 'success',
      },
    ],
  },

  onFileClick(e) {
    const { item } = e.detail;
    console.log('点击文件:', item);
    wx.showToast({
      title: `点击了${item.name}`,
      icon: 'none',
    });
  },

  onRemove(e) {
    const { item, index } = e.detail;
    console.log('删除文件:', e, item, '索引:', index);

    // 从列表中移除文件
    const newItems = [...this.data.items];
    newItems.splice(index, 1);

    this.setData({
      items: newItems,
    });

    wx.showToast({
      title: '删除成功',
      icon: 'success',
    });
  },

  onAdd() {
    console.log('点击添加按钮');
    wx.showToast({
      title: '点击了添加按钮',
      icon: 'none',
    });

    // 模拟添加新文件
    const newFile = {
      fileType: 'txt',
      name: `新文件${this.data.items.length + 1}.txt`,
      url: 'https://example.com/newfile.txt',
      size: 256,
      status: 'success',
    };

    this.setData({
      items: [...this.data.items, newFile],
    });
  },
});

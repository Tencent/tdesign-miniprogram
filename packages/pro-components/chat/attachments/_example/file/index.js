Page({
  data: {
    items: [
      {
        fileType: 'pdf',
        name: 'document.pdf',
        url: 'https://example.com/document.pdf',
        size: 222859,
        status: 'success',
      },
      {
        fileType: 'doc',
        name: 'report.docx',
        url: 'https://example.com/report.docx',
        size: 222859,
        status: 'success',
      },
      {
        fileType: 'audio',
        name: 'audio.mp3',
        url: 'https://example.com/audio.mp3',
        size: 222859,
        status: 'success',
      },
      {
        fileType: 'ppt',
        name: 'presentation.ppt',
        url: 'https://example.com/presentation.ppt',
        size: 222859,
        status: 'success',
      },
      {
        fileType: 'xls',
        name: 'spreadsheet.xls',
        url: 'https://example.com/spreadsheet.xls',
        size: 222859,
        status: 'success',
      },
      {
        fileType: 'video',
        name: 'video.mp4',
        url: 'https://example.com/video.mp4',
        size: 222859,
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

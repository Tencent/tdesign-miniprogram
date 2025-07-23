Component({
  methods: {
    handleDownload: function () {
      const qrcode = this.selectComponent('#myQrcode');
      qrcode.handleDownload();
      console.log('尝试保存图片中');
    },
  },
});

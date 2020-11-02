Page({
  data: {
    percentage: 0,
    showInfo: false,
    activeColor: '#ffac05',
    bgColor: '#35cd35',
    textColor: '#000000',
  },
  onReady() {
    setInterval(() => {
      this.setData({
        percentage: this.data.percentage + 1,
      });
    }, 1000);
  },
  toggleInfo() {
    this.setData({
      showInfo: !this.data.showInfo,
    });
  },
});

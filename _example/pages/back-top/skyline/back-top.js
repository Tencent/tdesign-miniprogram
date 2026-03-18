Page({
    data: {
        type: 'round',
        scrollTop: 0,
        scrollTo: 0,
        rowCol: [{ size: '327rpx', borderRadius: '24rpx' }, 1, { width: '61%' }],
    },
    onScroll(e) {
        const { scrollTop } = e.detail;
        this.setData({ scrollTop });
    },
    onToTop() {
        this.setData({ scrollTo: 0 });
    },
    onBtnClick(e) {
        const { source: type } = e.currentTarget.dataset;
        this.setData({
            type,
        });
        this.setData({ scrollTo: 800 });
    },
});

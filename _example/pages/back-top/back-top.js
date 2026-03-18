Page({
    data: {
        type: 'round',
        scrollTop: 0,
        rowCol: [{ size: '327rpx', borderRadius: '24rpx' }, 1, { width: '61%' }],
    },
    onPageScroll(e) {
        const { scrollTop } = e;
        this.setData({ scrollTop });
    },
    onBtnClick(e) {
        const { source: type } = e.currentTarget.dataset;
        this.setData({
            type,
        });
        wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
    },
});

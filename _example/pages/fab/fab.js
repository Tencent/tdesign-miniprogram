Page({
    onPageScroll() { },
    data: {
        type: 'base',
        rowCol: [{ size: '327rpx', borderRadius: '24rpx' }, 1, { width: '61%' }],
    },
    handleChange(e) {
        this.setData({
            type: e.target.dataset.type,
        });
    },
});

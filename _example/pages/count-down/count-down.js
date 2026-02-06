Page({
    data: {
        time: 96 * 60 * 1000,
        time1: 46 * 60 * 1000,
        timeData: {},
        counting: false,
    },
    onChange(e) {
        this.setData({
            timeData: e.detail,
        });
    },
    start() {
        const countDown = this.selectComponent('.control-count-down');
        if (!countDown.counting) {
            countDown.start();
            this.setData({ counting: true });
        }
        else {
            countDown.pause();
            this.setData({ counting: false });
        }
    },
    reset() {
        const countDown = this.selectComponent('.control-count-down');
        countDown.reset();
    },
    finished() {
        wx.showToast({
            icon: 'none',
            title: '倒计时结束',
        });
        this.setData({ counting: false });
    },
});

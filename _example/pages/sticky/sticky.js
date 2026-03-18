Page({
    data: {
        navbarHeight: 0,
    },
    onLoad() {
        this.getCustomNavbarHeight();
    },
    getCustomNavbarHeight() {
        const query = wx.createSelectorQuery();
        query.select('.custom-navbar').boundingClientRect();
        query.exec((res) => {
            console.log(res);
            const { height = 0 } = res[0] || {};
            this.setData({ navbarHeight: height });
        });
    },
});

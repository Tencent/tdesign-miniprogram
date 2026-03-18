Page({
    data: {
        gulpError: '',
    },
    onLoad({ gulpError }) {
        this.setData({ gulpError });
    },
});

Page({
    data: {
        type: 'base',
    },
    handleChange(e) {
        this.setData({
            type: e.target.dataset.type,
        });
    },
});

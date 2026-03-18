Page({
    options: {
        styleIsolation: 'shared',
    },
    data: {
        value: 0,
    },
    onTabsChange(event) {
        this.setData({
            value: event.detail.value,
        });
    },
});

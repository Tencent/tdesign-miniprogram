Page({
    data: {
        visible: false,
    },
    onTriggerClick() {
        this.setData({
            visible: !this.data.visible,
        });
    },
});

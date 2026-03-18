Component({
    data: {
        visible: false,
        style: 'display:none',
        customStyle: 'font-size: 9px',
    },
    methods: {
        onTriggerClick() {
            this.setData({
                visible: !this.data.visible,
            });
        },
        onClose() {
            this.setData({
                visible: false,
            });
        },
    },
});

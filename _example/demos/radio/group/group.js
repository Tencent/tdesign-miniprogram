Component({
    properties: {
        items: {
            type: Array,
            value: [],
        },
        value: {
            type: String,
            value: '',
        },
    },
    data: {
        currentValue: '',
    },
    methods: {
        onChange(event) {
            this.setData({
                currentValue: event.detail.name,
            });
        },
    },
});

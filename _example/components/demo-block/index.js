Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        title: {
            type: String,
            value: '',
        },
        desc: {
            type: String,
            value: '',
        },
        operList: Array,
        padding: {
            type: Boolean,
            value: false,
        },
    },
    methods: {
        clickHandle(e) {
            const { type } = e.currentTarget.dataset;
            this.triggerEvent('clickoper', type);
        },
    },
});

import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-segmented-control`;
TComponent({
    properties: {
        value: {
            type: String,
            optionalTypes: [Number],
            value: '',
            observer: 'updateValue',
        },
        items: {
            type: Array,
            value: [],
        },
    },
    data: {
        currentValue: null,
        classPrefix: name,
        classBasePrefix: prefix,
    },
    methods: {
        onTap(event) {
            const { value } = event.currentTarget.dataset;
            this.updateValue(value);
            this.triggerEvent('change', value);
        },
        updateValue(value) {
            if ((this.data.items || []).some((item) => item.value === value)) {
                this.setData({ currentValue: value });
            }
            else {
                this.setData({ currentValue: +value });
            }
        },
    },
});

//# sourceMappingURL=segmented-control.js.map

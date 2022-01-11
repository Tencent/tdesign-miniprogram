import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-progress`;
TComponent({
    // 组件的对外属性
    properties: {
        percentage: {
            type: Number,
            value: 0,
        },
        showText: {
            type: Boolean,
            value: true,
        },
        color: {
            type: String,
            value: '',
        },
        bgColor: {
            type: String,
            value: '',
        },
        textColor: {
            type: String,
            value: '',
        },
        type: {
            type: String,
            value: 'info', // info || error
        },
    },
    // 组件的内部数据
    data: {
        percent: 0,
        barStyle: '100%',
        classPrefix: name,
        strokeWidth: 3,
    },
    observers: {
        percentage(percentage) {
            if (percentage > 100)
                percentage = 100;
            else if (percentage < 0)
                percentage = 0;
            this.setData({
                percent: percentage,
            });
        },
        bgColor(bgColor) {
            let tempStyle = `height: ${this.data.strokeWidth}px;`;
            if (bgColor)
                tempStyle += `background-color: ${bgColor}`;
            this.setData({
                barStyle: tempStyle,
            });
        },
    },
    // 组件生命周期
    lifetimes: {},
    // Methods
    methods: {},
});

//# sourceMappingURL=progress.js.map

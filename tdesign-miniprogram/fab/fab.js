import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-fab`;
TComponent({
    // 组件的对外属性
    properties: {
        icon: {
            type: String,
            value: 'add', // 默认为 ‘+’
        },
        text: {
            type: String,
            value: '',
        },
        bottom: {
            type: String,
            value: '32px',
        },
        right: {
            type: String,
            value: '16px',
        },
    },
    // 组件的内部数据
    data: {
        // 按钮样式列表
        className: '',
        styleName: '',
        textClass: `${name}__text`,
    },
    /* 组件生命周期 */
    lifetimes: {
        attached() {
            this.setClass();
            this.setStyle();
        },
    },
    /* Methods */
    methods: {
        setClass() {
            const classList = [`${name}`, this.data.text && `${name}--with-text`];
            this.setData({
                className: classList.join(' '),
            });
        },
        setStyle() {
            this.setData({
                styleName: `
          bottom: ${this.data.bottom};
          right: ${this.data.right};
        `,
            });
        },
    },
});

//# sourceMappingURL=fab.js.map

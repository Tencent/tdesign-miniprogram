import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-button-group`;
TComponent({
    behaviors: ['wx://form-field-button'],
    // 组件的对外属性
    properties: {
        type: {
            type: String,
            value: 'default',
        },
    },
    // 组件的内部数据
    data: {
        // 按钮样式列表
        className: '',
    },
    observers: {
        type() {
            this.setClass();
        },
    },
    /* 组件生命周期 */
    lifetimes: {
        // 组件实例被创建
        // created() {},
        // 组件实例进入页面节点树
        attached() {
            this.setClass();
        },
        // 页面组件初始化完成
        // ready() { },
        // 组件实例被移动到节点树另一个位置
        // moved() {},
        // 组件实例被从页面节点树移除
        // detached() { },
    },
    /* Methods */
    methods: {
        setClass() {
            const classList = [`${name}`, `${name}--${this.data.type}`];
            this.setData({
                className: classList.join(' '),
            });
        },
    },
});

//# sourceMappingURL=button-group.js.map

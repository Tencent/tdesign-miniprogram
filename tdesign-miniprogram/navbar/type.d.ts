/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 16:14:46
 * */
export interface TdNavbarProps {
    /**
     * 是否添加动画效果
     * @default true
     */
    animation?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 背景
     * @default ''
     */
    background?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack，只会触发一个 goback 事件供自行处理。
     * @default 1
     */
    delta?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置组件外层元素、标题、左侧区域、中间区域、左侧(后退)图标、首页图标、导航按钮、胶囊容器等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: [
            't-class',
            't-class-title',
            't-class-left',
            't-class-center',
            't-class-left-icon',
            't-class-home-icon',
            't-class-capsule',
            't-class-nav-btn'
        ];
        required?: boolean;
    };
    /**
     * 是否固定在顶部
     * @default true
     */
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 首页图标地址。值为 '' 或者 undefiend 则表示不显示返回图标，值为 'circle' 表示显示默认图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址
     */
    homeIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 左侧图标地址，值为 '' 或者 undefiend 则表示不显示返回图标，值为 'arrow-left' 表示显示返回图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址
     */
    leftIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 页面标题
     */
    title?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 标题文字最大长度，超出的范围使用 `...` 表示
     */
    titleMaxLength?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 是否显示
     * @default true
     */
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
}

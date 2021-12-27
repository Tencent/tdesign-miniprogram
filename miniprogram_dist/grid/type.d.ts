/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdGridProps {
    /**
     * 内容对齐方式
     * @default center
     */
    align?: {
        type: StringConstructor;
        value?: 'left' | 'center';
        required?: boolean;
    };
    /**
     * 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式
     * @default false
     */
    border?: {
        type: BooleanConstructor;
        optionalTypes: Array<ObjectConstructor>;
        value?: boolean | {
            color?: string;
            width?: string;
            style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset';
        };
        required?: boolean;
    };
    /**
     * 每一行的列数量
     * @default 4
     */
    column?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 组件类名，用于设置组件外层元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
        required?: boolean;
    };
    /**
     * 间隔大小
     */
    gutter?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 是否开启点击反馈
     * @default false
     */
    hover?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
}
export interface TdGridItemProps {
    /**
     * 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点
     */
    description?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-image', 't-class-text', 't-class-description'];
        required?: boolean;
    };
    /**
     * 图片，可以是图片地址，也可以自定义图片节点
     */
    image?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 链接跳转类型
     * @default navigate-to
     */
    jumpType?: {
        type: StringConstructor;
        value?: 'redirect-to' | 'switch-tab' | 'relaunch' | 'navigate-to';
        required?: boolean;
    };
    /**
     * 内容布局方式
     * @default vertical
     */
    layout?: {
        type: StringConstructor;
        value?: 'vertical' | 'horizontal';
        required?: boolean;
    };
    /**
     * 文本，可以通过 Props 传入文本，也可以自定义标题节点
     */
    text?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 点击后的跳转链接
     * @default ''
     */
    url?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
export interface TdTabsProps {
    /**
     * 动画效果设置。其中 duration 表示动画时长
     */
    animation?: {
        type: ObjectConstructor;
        value?: TabAnimation;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-item', 't-class-active', 't-class-track'];
        required?: boolean;
    };
    /**
     * 选项卡位置
     * @default top
     */
    placement?: {
        type: StringConstructor;
        value?: 'left' | 'top';
        required?: boolean;
    };
    /**
     * 是否展示底部激活线条
     * @default true
     */
    showBottomLine?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 激活的选项卡值
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: TabValue;
        required?: boolean;
    };
    /**
     * 激活的选项卡值，非受控属性
     */
    defaultValue?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: TabValue;
        required?: boolean;
    };
}
export interface TdTabPanelProps {
    /**
     * 选项卡内容隐藏时是否销毁
     * @default true
     */
    destroyOnHide?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否禁用当前选项卡
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 选项卡名称，可自定义选项卡导航内容
     */
    label?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 用于自定义选项卡面板内容
     */
    panel?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 选项卡的值，唯一标识
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: TabValue;
        required?: boolean;
    };
}
export declare type TabAnimation = {
    duration: number;
} & Record<string, any>;
export declare type TabValue = string | number;

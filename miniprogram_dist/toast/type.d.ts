/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdToastProps {
    /**
     * 图标排列方式
     * @default row
     */
    direction?: {
        type: StringConstructor;
        value?: 'row' | 'column';
        required?: boolean;
    };
    /**
     * 弹窗显示毫秒数
     * @default 2000
     */
    duration?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 组件类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
        required?: boolean;
    };
    /**
     * 自定义图标
     * @default ''
     */
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 弹窗显示文字
     */
    message?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 弹窗展示位置
     * @default middle
     */
    placement?: {
        type: StringConstructor;
        value?: 'top' | 'middle' | 'bottom';
        required?: boolean;
    };
    /**
     * 防止滚动穿透，即不允许点击和滚动
     * @default false
     */
    preventScrollThrough?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 提示类型
     */
    theme?: {
        type: StringConstructor;
        value?: 'loading' | 'success' | 'fail';
        required?: boolean;
    };
}

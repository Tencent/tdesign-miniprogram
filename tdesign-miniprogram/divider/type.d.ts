/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdDividerProps {
    /**
     * 文本位置（仅在水平分割线有效）
     * @default center
     */
    align?: {
        type: StringConstructor;
        value?: 'left' | 'right' | 'center';
        required?: boolean;
    };
    /**
     * 子元素
     */
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否虚线（仅在水平分割线有效）
     * @default false
     */
    dashed?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置 组件外层类名、分隔线类名 等
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-line', 't-class-content'];
        required?: boolean;
    };
    /**
     * 分隔线类型有两种：水平和垂直
     * @default horizontal
     */
    layout?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
        required?: boolean;
    };
    /**
     * 分隔线颜色
     * @default ''
     */
    lineColor?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 请更为使用 `layout`。分隔线类型有两种：水平和垂直
     * @default horizontal
     * @deprecated
     */
    theme?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
        required?: boolean;
    };
}

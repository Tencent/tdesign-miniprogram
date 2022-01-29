/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdSwitchProps {
    /**
     * 自定义颜色，[打开时的颜色，关闭时的颜色]。组件默认颜色为 ['#0052d9', 'rgba(0, 0, 0, .26']。示例：[blue, gray]
     */
    colors?: {
        type: ArrayConstructor;
        value?: string[];
        required?: boolean;
    };
    /**
     * 开关内容，[打开时的值，关闭时的值]。示例：[1, 0]
     * @default [true, false]
     */
    customValue?: {
        type: ArrayConstructor;
        value?: Array<SwitchValue>;
        required?: boolean;
    };
    /**
     * 是否禁用组件
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 开关的标签
     * @default ''
     */
    label?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否处于加载中状态
     * @default false
     */
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 开关尺寸
     * @default medium
     */
    size?: {
        type: StringConstructor;
        value?: 'small' | 'medium' | 'large';
        required?: boolean;
    };
    /**
     * 开关值
     * @default false
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor | BooleanConstructor>;
        value?: SwitchValue;
        required?: boolean;
    };
    /**
     * 开关值
     * @default false
     */
    defaultValue?: {
        type: StringConstructor;
        value?: SwitchValue;
        required?: boolean;
    };
}
export declare type SwitchValue = string | number | boolean;

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
export interface TdRadioProps {
    /**
     * 复选框和内容相对位置
     * @default left
     */
    align?: {
        type: StringConstructor;
        value?: 'left' | 'right';
        required?: boolean;
    };
    /**
     * 是否选中
     */
    checked?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否选中，非受控属性
     */
    defaultChecked?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 单选按钮颜色
     * @default #0052d9
     */
    color?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 单选内容
     */
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否禁用组件内容（content）触发选中
     */
    contentDisabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否为禁用态
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置 组件外层、单选图标、主文案、内容 等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-icon', 't-class-label', 't-class-content'];
        required?: boolean;
    };
    /**
     * 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 fill-circle 表示图标为填充型图标，值为 stroke-line 表示图标为描边型图标
     * @default 'fill-circle'
     */
    icon?: {
        type: StringConstructor;
        optionalTypes: Array<ArrayConstructor>;
        value?: 'fill-circle' | 'stroke-line' | Array<string>;
        required?: boolean;
    };
    /**
     * 主文案
     */
    label?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 内容最大行数限制
     * @default 5
     */
    maxContentRow?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 主文案最大行数限制
     * @default 3
     */
    maxLabelRow?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * HTML 元素原生属性
     * @default ''
     */
    name?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 单选按钮的值
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor | BooleanConstructor>;
        value?: RadioValue;
        required?: boolean;
    };
}
export interface TdRadioGroupProps {
    /**
     * 是否禁用全部子单选框
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * HTML 元素原生属性
     * @default ''
     */
    name?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同
     */
    options?: {
        type: ArrayConstructor;
        value?: Array<RadioOption>;
        required?: boolean;
    };
    /**
     * 选中的值
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor | BooleanConstructor>;
        value?: RadioValue;
        required?: boolean;
    };
    /**
     * 选中的值，非受控属性
     */
    defaultValue?: {
        type: StringConstructor;
        value?: RadioValue;
        required?: boolean;
    };
}
export declare type RadioValue = string | number | boolean;
export declare type RadioOption = string | number | RadioOptionObj;
export interface RadioOptionObj {
    label?: string;
    value?: string | number;
    disabled?: boolean;
}

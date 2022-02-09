/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
export interface TdCheckboxProps {
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
     * 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用
     * @default false
     */
    checkAll?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否选中
     * @default false
     */
    checked?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否选中，非受控属性
     * @default false
     */
    defaultChecked?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 复选框颜色
     * @default #0052d9
     */
    color?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 复选框内容
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
     * 是否禁用组件
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置 组件外层、复选框图标、主文案、内容 等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-icon', 't-class-label', 't-class-content'];
        required?: boolean;
    };
    /**
     * 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]
     */
    icon?: {
        type: ArrayConstructor;
        value?: Array<string>;
        required?: boolean;
    };
    /**
     * 是否为半选
     * @default false
     */
    indeterminate?: {
        type: BooleanConstructor;
        value?: boolean;
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
     * 组件是否只读
     * @default false
     */
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 复选框的值
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
}
export interface TdCheckboxGroupProps {
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
     * 支持最多选中的数量
     */
    max?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 统一设置内部复选框 HTML 属性
     * @default ''
     */
    name?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」
     * @default []
     */
    options?: {
        type: ArrayConstructor;
        value?: Array<CheckboxOption>;
        required?: boolean;
    };
    /**
     * 选中值
     * @default []
     */
    value?: {
        type: ArrayConstructor;
        value?: CheckboxGroupValue;
        required?: boolean;
    };
    /**
     * 选中值，非受控属性
     * @default []
     */
    defaultValue?: {
        type: ArrayConstructor;
        value?: CheckboxGroupValue;
        required?: boolean;
    };
}
export declare type CheckboxOption = string | number | CheckboxOptionObj;
export interface CheckboxOptionObj {
    label?: string;
    value?: string | number;
    disabled?: boolean;
    checkAll?: true;
}
export declare type CheckboxGroupValue = Array<string | number>;

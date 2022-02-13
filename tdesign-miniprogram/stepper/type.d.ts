/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-12-20 13:08:27
 * */
export interface TdStepperProps {
    /**
     * 禁用全部操作
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 禁用输入框
     * @default false
     */
    disableInput?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于表示组件外层元素、输入框、右侧递增号、左侧递减号等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-input', 't-class-add', 't-class-minus'];
        required?: boolean;
    };
    /**
     * 输入框宽度
     */
    inputWidth?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 最大值
     * @default 100
     */
    max?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 最小值
     * @default 0
     */
    min?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 步长
     * @default 1
     */
    step?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 组件风格
     * @default normal
     */
    theme?: {
        type: StringConstructor;
        value?: 'normal' | 'grey';
        required?: boolean;
    };
    /**
     * 值
     * @default 0
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
    /**
     * 值
     * @default 0
     */
    defaultValue?: {
        type: StringConstructor;
        value?: string | number;
        required?: boolean;
    };
}

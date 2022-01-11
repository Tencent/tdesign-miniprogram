/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdPickerProps {
    /**
     * 取消按钮文字
     * @default 取消
     */
    cancelBtn?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 确定按钮文字
     * @default 确认
     */
    confirmBtn?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 标题
     * @default ''
     */
    title?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 选中值
     */
    value?: {
        type: ArrayConstructor;
        value?: Array<PickerValue>;
        required?: boolean;
    };
    /**
     * 是否显示
     * @default false
     */
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
}
export interface TdPickerItemProps {
    /**
     * 数据源
     * @default []
     */
    options?: {
        type: ArrayConstructor;
        value?: Array<PickerItemOption>;
        required?: boolean;
    };
    /**
     * 默认选中的侯选项
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
}
export declare type PickerValue = string | number;
export interface PickerItemOption {
    label: string;
    value: string | number;
}

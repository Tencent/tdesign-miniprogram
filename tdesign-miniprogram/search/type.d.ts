/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
export interface TdSearchProps {
    /**
     * 自定义右侧操作按钮文字
     * @default ''
     */
    action?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否居中
     * @default false
     */
    center?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否禁用
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: [
            't-class',
            't-class-input',
            't-class-input-container',
            't-class-cancel',
            't-class-left',
            't-class-right'
        ];
        required?: boolean;
    };
    /**
     * 是否聚焦
     * @default false
     */
    focus?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 左侧文本
     * @default ''
     */
    label?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 左侧图标
     * @default 'search'
     */
    leftIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 占位符
     * @default ''
     */
    placeholder?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 右侧图标
     * @default 'close'
     */
    rightIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 搜索框形状
     * @default 'square'
     */
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round';
        required?: boolean;
    };
    /**
     * 值
     * @default ''
     */
    value?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}

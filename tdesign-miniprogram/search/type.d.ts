/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-01 16:35:36
 * */
export interface TdSearchProps {
    /**
     * 自定义右侧cancel文字
     * @default ''
     */
    actionText?: {
        type: StringConstructor;
        value?: string;
    };
    /**
     * 是否居中
     * @default false
     */
    center?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    /**
     * 是否禁用
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    /**
     * 是否聚焦
     * @default false
     */
    focus?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    /**
     * 值
     * @default ''
     */
    keyword?: {
        type: StringConstructor;
        value?: string;
    };
    /**
     * 左侧文本
     * @default ''
     */
    label?: {
        type: StringConstructor;
        value?: string;
    };
    /**
     * 左侧图标
     * @default 'search'
     */
    leftIcon?: {
        type: StringConstructor;
        value?: string;
    };
    /**
     * 占位符
     * @default ''
     */
    placeholder?: {
        type: StringConstructor;
        value?: string;
    };
    /**
     * 右侧图标
     * @default 'close'
     */
    rightIcon?: {
        type: StringConstructor;
        value?: string;
    };
    /**
     * 搜索框形状
     * @default 'square'
     */
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round';
    };
}

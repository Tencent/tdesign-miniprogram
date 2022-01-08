/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdBadgeProps {
    /**
     * 颜色
     * @default ''
     */
    color?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义
     * @default ''
     */
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染
     * @default 0
     */
    count?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
    /**
     * 是否为红点
     * @default false
     */
    dot?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置外层元素、默认内容、右上角内容等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-content', 't-class-count'];
        required?: boolean;
    };
    /**
     * 封顶的数字值
     * @default 99
     */
    maxCount?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']
     */
    offset?: {
        type: ArrayConstructor;
        value?: Array<string | number>;
        required?: boolean;
    };
    /**
     * 形状
     * @default circle
     */
    shape?: {
        type: StringConstructor;
        value?: 'circle' | 'square' | 'round' | 'ribbon';
        required?: boolean;
    };
    /**
     * 当数值为 0 时，是否展示徽标
     * @default false
     */
    showZero?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 尺寸
     * @default medium
     */
    size?: {
        type: StringConstructor;
        value?: 'small' | 'medium';
        required?: boolean;
    };
}

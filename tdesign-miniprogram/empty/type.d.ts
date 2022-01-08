/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdEmptyProps {
    /**
     * 描述文字
     */
    description?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-description', 't-class-image', 't-class-actions'];
        required?: boolean;
    };
    /**
     * 图标名称
     * @default ''
     */
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 图片地址
     */
    image?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}

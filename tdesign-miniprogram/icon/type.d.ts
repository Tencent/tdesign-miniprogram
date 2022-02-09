/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-20 16:58:42
 * */
export interface TdIconProps {
    /**
     * 图标自定义样式
     */
    customStyle?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 图标颜色
     */
    color?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 图标名称
     */
    name: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等
     */
    size?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 自定义图标前缀
     */
    prefix?: {
        type: StringConstructor;
        value?: string;
        reuqired?: boolean;
    };
}

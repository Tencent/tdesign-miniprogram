/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
import { SizeEnum } from '../common/common';
export interface TdTagProps {
    /**
     * 标签是否可关闭
     * @default false
     */
    closable?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 标签中的图标，可自定义图标呈现
     * @default ''
     */
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80
     */
    maxWidth?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: CSSProperties['maxWidth'] | number;
        required?: boolean;
    };
    /**
     * 标签类型，有三种：方形、圆角方形、标记型
     * @default square
     */
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round' | 'mark';
        required?: boolean;
    };
    /**
     * 标签尺寸
     * @default medium
     */
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
        required?: boolean;
    };
    /**
     * 组件风格，用于描述组件不同的应用场景
     * @default default
     */
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'primary' | 'warning' | 'danger' | 'success';
        required?: boolean;
    };
    /**
     * 影响标签风格（theme）
     * @default dark
     */
    variant?: {
        type: StringConstructor;
        value?: 'dark' | 'light' | 'plain';
        required?: boolean;
    };
}
export interface TdCheckTagProps {
    /**
     * 标签选中的状态，默认风格（theme=default）才有选中态
     * @default false
     */
    checked?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否可以关闭
     * @default false
     */
    closable?: {
        type: StringConstructor;
        optionalTypes: Array<BooleanConstructor>;
        value?: string | boolean;
        required?: boolean;
    };
    /**
     * 组件子元素
     */
    content?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
    /**
     * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 标签图标
     */
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 标签类型，有三种：方形、圆角方形、标记型
     * @default square
     */
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round' | 'mark';
        required?: boolean;
    };
    /**
     * 标签尺寸
     * @default medium
     */
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
        required?: boolean;
    };
}
export declare type CSSProperties = Partial<CSSStyleDeclaration>;

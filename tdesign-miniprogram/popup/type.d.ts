/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-26 17:12:37
 * */
import { TdTransitionProps } from '../transition/type';
export interface TdPopupProps {
    /**
     * 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮
     */
    closeBtn?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 点击遮罩层是否关闭
     * @default true
     */
    closeOnOverlayClick?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 浮层里面的内容
     */
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否在关闭浮层时销毁浮层
     * @default false
     */
    destroyOnClose?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置 组件外层元素、遮罩层、浮层内容 等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-overlay', 't-class-content'];
        required?: boolean;
    };
    /**
     * 浮层出现位置
     * @default top
     */
    placement?: {
        type: StringConstructor;
        value?: 'top' | 'left' | 'right' | 'bottom' | 'center';
        required?: boolean;
    };
    /**
     * 防止滚动穿透
     * @default true
     */
    preventScrollThrough?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否显示遮罩层
     * @default true
     */
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 动画效果定义
     */
    transitionProps?: {
        type: ObjectConstructor;
        value?: TdTransitionProps;
        required?: boolean;
    };
    /**
     * 是否显示浮层
     * @default false
     */
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500
     */
    zIndex?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
}
export interface PopupVisibleChangeContext {
    trigger: 'close-btn' | 'overlay';
}

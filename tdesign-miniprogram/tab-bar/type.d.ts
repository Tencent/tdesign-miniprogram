/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
import { TdBadgeProps } from '../badge/type';
export interface TdTabBarProps {
    /**
     * 是否显示外边框
     * @default true
     */
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 标签颜色设置。示例：[选中标签的颜色, 未选中的标签颜色]
     * @default ['#0052D9', 'rgba(0, 0, 0, .6)']
     */
    color?: {
        type: ArrayConstructor;
        value?: Array<string>;
        required?: boolean;
    };
    /**
     * 组件类名，用于设置外层元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
        required?: boolean;
    };
    /**
     * 是否固定在底部
     * @default true
     */
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否为 iPhoneX 留出底部安全距离
     * @default true
     */
    safeAreaInsetBottom?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否需要分割线
     * @default true
     */
    split?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 当前选中标签的索引
     * @default 0
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor | ArrayConstructor>;
        value?: string | number | Array<string | number>;
        required?: boolean;
    };
    /**
     * 当前选中标签的索引，非受控属性
     * @default 0
     */
    defaultValue?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor | ArrayConstructor>;
        value?: string | number | Array<string | number>;
        required?: boolean;
    };
}
export interface TdTabBarItemProps {
    /**
     * 图标右上角提示信息
     */
    badgeProps?: {
        type: ObjectConstructor;
        value?: TdBadgeProps;
        required?: boolean;
    };
    /**
     * 图标名称
     */
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 二级菜单
     */
    subTabBar?: {
        type: ArrayConstructor;
        value?: SubTabBarItem[];
        required?: boolean;
    };
    /**
     * 标识符
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
}
export interface SubTabBarItem {
    value: string;
    label: string;
}

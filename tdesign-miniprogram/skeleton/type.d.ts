/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdSkeletonProps {
    /**
     * 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为空则表示没有动画
     */
    animation?: {
        type: StringConstructor;
        value?: 'gradient' | 'flashed';
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置组件外层元素、头像、图片、文本等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-avatar', 't-class-image', 't-class-text'];
        required?: boolean;
    };
    /**
     * 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容
     */
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 用于设置行列数量、宽度高度、间距等。【示例一】，`[1, 1, 2]` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，`[1, 1, { width: '100px' }]` 表示自定义第三行的宽度为 `100px`。【示例三】，`[1, 2, [{ width, height }, { width, height, marginLeft }]]` 表示第三行有两列，且自定义宽度、高度和间距
     * @default [1, 1, 1, { width: '70%' }]
     */
    rowCol?: {
        type: ArrayConstructor;
        value?: SkeletonRowCol;
        required?: boolean;
    };
    /**
     * 骨架图风格，有基础、头像组合等两大类
     * @default text
     */
    theme?: {
        type: StringConstructor;
        value?: 'text' | 'avatar-text';
        required?: boolean;
    };
}
export declare type SkeletonRowCol = Array<Number | SkeletonRowColObj | Array<SkeletonRowColObj>>;
export interface SkeletonRowColObj {
    width?: string;
    height?: string;
    marginRight?: string;
    marginLeft?: string;
    margin?: string;
}

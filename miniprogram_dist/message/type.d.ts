/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdMessageProps {
    /**
     * 操作
     */
    action?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 文本对齐方式
     * @default left
     */
    align?: {
        type: StringConstructor;
        value?: 'left' | 'center';
        required?: boolean;
    };
    /**
     * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮
     */
    closeBtn?: {
        type: StringConstructor;
        optionalTypes: Array<BooleanConstructor>;
        value?: string | boolean;
        required?: boolean;
    };
    /**
     * 用于自定义消息弹出内容
     */
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。
     * @default 3000
     */
    duration?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 样式类名，分别用于设置 组件外层、消息内容、左侧图标、操作按钮、关闭按钮等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn'];
        required?: boolean;
    };
    /**
     * 消息提醒前面的图标。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 'info' 或 'bell' 则显示组件内置图标。也可以完全自定义图标节点
     * @default true
     */
    icon?: {
        type: StringConstructor;
        optionalTypes: Array<BooleanConstructor>;
        value?: boolean | 'info' | 'bell';
        required?: boolean;
    };
    /**
     * 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放
     * @default false
     */
    marquee?: {
        type: BooleanConstructor;
        optionalTypes: Array<ObjectConstructor>;
        value?: boolean | DrawMarquee;
        required?: boolean;
    };
    /**
     * 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10rpx', '8rpx']
     */
    offset?: {
        type: ArrayConstructor;
        value?: Array<string | number>;
        required?: boolean;
    };
    /**
     * 消息组件风格
     * @default info
     */
    theme?: {
        type: StringConstructor;
        value?: MessageThemeList;
        required?: boolean;
    };
    /**
     * 是否显示，隐藏时默认销毁组件
     * @default false
     */
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 元素层级，样式默认为 5000
     */
    zIndex?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
}
export interface DrawMarquee {
    speed?: number;
    loop?: number;
    delay?: number;
}
export declare type MessageThemeList = 'info' | 'success' | 'warning' | 'error';

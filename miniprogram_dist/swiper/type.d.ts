/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdSwiperProps {
    /**
     * 轮播切换动画效果类型
     * @default slide
     */
    animation?: {
        type: StringConstructor;
        value?: 'slide';
        required?: boolean;
    };
    /**
     * 是否自动播放
     * @default true
     */
    autoplay?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 当前轮播在哪一项（下标）
     * @default 0
     */
    current?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 轮播滑动方向，包括横向滑动和纵向滑动两个方向
     * @default horizontal
     */
    direction?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
        required?: boolean;
    };
    /**
     * 滑动动画时长
     * @default 300
     */
    duration?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 当使用垂直方向滚动时的高度
     */
    height?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 轮播间隔时间
     * @default 5000
     */
    interval?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 导航配置。`navigation.type` 表示导航器风格，圆点/分式等，没有值则不显示。`navigation.minShowNum` 表示小于这个数字不会显示导航器。`navigation.showSlideBtn` 表示是否显示两侧的滑动控制按钮
     */
    navigation?: {
        type: ObjectConstructor;
        value?: Navigation;
        required?: boolean;
    };
}
export interface Navigation {
    type?: NavigationVariant;
    minShowNum?: number;
    showSlideBtn?: boolean;
}
export declare type NavigationVariant = 'dots' | 'dots-bar' | 'fraction';

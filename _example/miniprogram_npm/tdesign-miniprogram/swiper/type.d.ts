import { SwiperNavProps } from '../swiper-nav/index';
export interface TdSwiperProps {
    autoplay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    current?: {
        type: NumberConstructor;
        value?: number;
    };
    direction?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
    };
    displayMultipleItems?: {
        type: NumberConstructor;
        value?: number;
    };
    duration?: {
        type: NumberConstructor;
        value?: number;
    };
    easingFunction?: {
        type: StringConstructor;
        value?: 'default' | 'linear' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic';
    };
    height?: {
        type: null;
        value?: string | number;
    };
    imageProps?: {
        type: ObjectConstructor;
        value?: object;
    };
    interval?: {
        type: NumberConstructor;
        value?: number;
    };
    list?: {
        type: ArrayConstructor;
        value?: string[] | SwiperList[];
    };
    loop?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    navigation?: {
        type: null;
        value?: SwiperNavProps | boolean;
    };
    nextMargin?: {
        type: null;
        value?: string | number;
    };
    paginationPosition?: {
        type: StringConstructor;
        value?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
    };
    previousMargin?: {
        type: null;
        value?: string | number;
    };
    snapToEdge?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface SwiperList {
    value: string;
    ariaLabel: string;
}

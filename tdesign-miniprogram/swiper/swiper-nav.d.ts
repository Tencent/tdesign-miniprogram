/**
 * 轮播导航器
 * 同时支持两种方式
 * 1、swiper简易配置，参见swiper的navigation。提升易用性
 * 2、自定义组件插槽组合，slot=nav。提升灵活性，方便样式覆盖
 */
import { SuperComponent } from '../common/src/index';
import { NavTypes } from './common/constants';
declare type NavOptions = {
    index: number;
    total: number;
    direction: boolean;
};
export default class SwiperNav extends SuperComponent {
    externalClasses: string[];
    properties: {
        type: {
            type: StringConstructor;
            value: NavTypes;
        };
        minShowNum: {
            type: NumberConstructor;
            value: number;
        };
        /**
         * 是否开启导航按钮
         */
        hasNavBtn: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    relations: {
        './swiper': {
            type: "parent";
        };
    };
    data: {
        index: number;
        total: number;
        direction: string;
        prefix: string;
        classPrefix: string;
    };
    ready(): void;
    onChange(opt: NavOptions): void;
    nav(e: any): void;
}
export {};
